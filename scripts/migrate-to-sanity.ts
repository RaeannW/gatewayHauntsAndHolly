// scripts/migrate-to-sanity.ts
import { createClient } from "@sanity/client";
import { config } from "dotenv";
import {
  samplePosts,
  type Post,
  type ContentBlock,
} from "../src/lib/sample-data";

// Load .env.local
config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing env vars. Need NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// ─── Reference lookup helpers ──────────────────────────────
// Fetch the _id of a document by its slug
async function findRefBySlug(
  type: string,
  slug: string,
): Promise<string | null> {
  const result = await client.fetch<{ _id: string } | null>(
    `*[_type == $type && slug.current == $slug][0]{ _id }`,
    { type, slug },
  );
  return result?._id ?? null;
}

// ─── Block content transformation ──────────────────────────
// Convert your ContentBlock[] format to Sanity's Portable Text array.
// Native text blocks (paragraph, heading, list) become `block` type.
// Custom blocks (image, paragraphWithImage, callout, shopCards, notes) stay as objects.
function transformBody(body: ContentBlock[] | undefined): unknown[] {
  if (!body) return [];

  return body
    .map((block, i) => {
      const _key = `block-${i}`;

      if (block.type === "paragraph") {
        return {
          _type: "block",
          _key,
          style: "normal",
          children: [
            {
              _type: "span",
              _key: `${_key}-span`,
              text: block.text,
              marks: [],
            },
          ],
          markDefs: [],
        };
      }

      if (block.type === "heading") {
        return {
          _type: "block",
          _key,
          style: `h${block.level}`,
          children: [
            {
              _type: "span",
              _key: `${_key}-span`,
              text: block.text,
              marks: [],
            },
          ],
          markDefs: [],
        };
      }

      if (block.type === "list") {
        // Portable Text represents a list as multiple `block` items with the same listItem value.
        // Each list item is its own block in the array.
        return block.items.map((item, j) => ({
          _type: "block",
          _key: `${_key}-${j}`,
          style: "normal",
          listItem: block.ordered ? "number" : "bullet",
          level: 1,
          children: [
            { _type: "span", _key: `${_key}-${j}-span`, text: item, marks: [] },
          ],
          markDefs: [],
        }));
      }

      if (block.type === "image") {
        return {
          _type: "imageBlock",
          _key,
          // Note: image upload happens separately; we'll leave a placeholder for now
          alt: block.alt,
          caption: block.caption,
          align: block.align,
          _placeholderSrc: block.src,
        };
      }

      if (block.type === "paragraphWithImage") {
        return {
          _type: "paragraphWithImage",
          _key,
          text: block.text,
          alt: block.image.alt,
          align: block.align,
          _placeholderSrc: block.image.src,
        };
      }

      if (block.type === "callout") {
        return {
          _type: "callout",
          _key,
          variant: block.variant,
          text: block.text,
        };
      }

      if (block.type === "shopCards") {
        return {
          _type: "shopCards",
          _key,
          heading: block.heading,
          intro: block.intro,
          items: block.items.map((item, j) => ({
            _type: "shopCard",
            _key: `${_key}-item-${j}`,
            name: item.name,
            description: item.description,
            alt: item.image.alt,
            affiliateUrl: item.affiliateUrl,
            _placeholderSrc: item.image.src,
          })),
        };
      }

      if (block.type === "notes") {
        return {
          _type: "notesBlock",
          _key,
          text: block.text,
        };
      }

      return null;
    })
    .flat()
    .filter(Boolean);
}

// ─── Ingredient normalization ──────────────────────────────
// sample-data has (string | RecipeIngredient)[] — normalize all to objects
function normalizeIngredients(ingredients: Post["ingredients"]) {
  if (!ingredients) return undefined;
  return ingredients.map((ing, i) => ({
    _type: "ingredient",
    _key: `ing-${i}`,
    text: typeof ing === "string" ? ing : ing.text,
    affiliateUrl: typeof ing === "string" ? undefined : ing.affiliateUrl,
  }));
}

function normalizeTools(tools: Post["tools"]) {
  if (!tools) return undefined;
  return tools.map((tool, i) => ({
    _type: "shopCard",
    _key: `tool-${i}`,
    name: tool.name,
    description: tool.description,
    alt: tool.image.alt,
    affiliateUrl: tool.affiliateUrl,
    _placeholderSrc: tool.image.src,
  }));
}

// ─── Main migration ────────────────────────────────────────
async function migrate() {
  console.log(`Starting migration of ${samplePosts.length} posts...\n`);

  // Look up the single author once
  const authorId = await findRefBySlug("author", "raeann-hoelker"); // adjust to your slug
  if (!authorId) {
    console.error(
      "Could not find author. Make sure you created an author doc with the expected slug.",
    );
    process.exit(1);
  }

  let successCount = 0;
  const failures: string[] = [];

  for (const post of samplePosts) {
    try {
      // Look up topic reference
      const topicId = await findRefBySlug("topic", post.topic);
      if (!topicId) {
        throw new Error(`Topic not found: ${post.topic}`);
      }

      // Look up recipe subcategory if applicable
      let recipeSubcategoryRef:
        | { _type: "reference"; _ref: string }
        | undefined;
      if (post.recipeSubcategory) {
        const subId = await findRefBySlug(
          "recipeSubcategory",
          post.recipeSubcategory,
        );
        if (!subId) {
          throw new Error(
            `Recipe subcategory not found: ${post.recipeSubcategory}`,
          );
        }
        recipeSubcategoryRef = { _type: "reference", _ref: subId };
      }

      const doc = {
        _type: "post",
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        excerpt: post.excerpt,
        // Image: leaving as alt + placeholder for now — we'll upload images separately
        alt: post.image.alt,
        _placeholderImageSrc: post.image.src,
        body: transformBody(post.body),
        author: { _type: "reference", _ref: authorId },
        publishedAt: new Date(post.publishedAt).toISOString(),
        holiday: post.holiday,
        topic: { _type: "reference", _ref: topicId },
        postType: post.postType,
        audience: post.audience,
        featured: post.featured ?? false,
        sponsored: post.sponsored ?? false,
        readTime: post.readTime,
        // Recipe fields
        recipeSubcategory: recipeSubcategoryRef,
        prepTime: post.prepTime,
        cookTime: post.cookTime,
        servings: post.servings,
        servingUnit: post.servingUnit,
        ingredients: normalizeIngredients(post.ingredients),
        tools: normalizeTools(post.tools),
        instructions: post.instructions,
        notes: post.notes,
        // Review fields
        rating: post.rating,
        reviewSubject: post.reviewSubject,
        // Event fields
        eventDate: post.eventDate
          ? new Date(post.eventDate).toISOString()
          : undefined,
        eventLocation: post.eventLocation,
        eventNeighborhood: post.eventNeighborhood,
        ticketUrl: post.ticketUrl,
      };

      // Strip undefined values — Sanity prefers absent over null
      const cleaned = {
        _type: "post" as const,
        ...Object.fromEntries(
          Object.entries(doc).filter(([, v]) => v !== undefined),
        ),
      };

      await client.create(cleaned);
      console.log(`  ✓ ${post.slug}`);
      successCount++;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`  ✗ ${post.slug}: ${msg}`);
      failures.push(`${post.slug}: ${msg}`);
    }
  }

  console.log(`\nDone. ${successCount}/${samplePosts.length} succeeded.`);
  if (failures.length) {
    console.log("\nFailures:");
    failures.forEach((f) => console.log(`  - ${f}`));
  }
}

migrate().catch((err) => {
  console.error("Migration crashed:", err);
  process.exit(1);
});
