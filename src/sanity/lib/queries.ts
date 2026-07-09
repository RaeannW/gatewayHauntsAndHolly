// src/sanity/lib/queries.ts
import { client } from "./client";

import type { PortableTextBlock } from "@portabletext/react";

// ─── Types ─────────────────────────────────────────────────
// These mirror your sample-data types so components don't need to change.
// We keep them local here instead of importing from sample-data because
// sample-data.ts will eventually be deleted.

export type Holiday = "halloween" | "christmas" | "both" | "neither";
export type Topic =
  | "diy"
  | "recipes"
  | "decor"
  | "costumes"
  | "events"
  | "media"
  | "gifts"
  | "traditions";
export type Audience = "family" | "adults" | "date-night" | "kids";
export type PostType =
  | "article"
  | "review"
  | "guide"
  | "roundup"
  | "recipe"
  | "event";
export type RecipeSubcategory = "dessert" | "drink" | "appetizer" | "meal";

export interface RecipeIngredient {
  text: string;
  affiliateUrl?: string;
}

export interface RecipeTool {
  name: string;
  description?: string;
  image: { src: string; alt: string };
  affiliateUrl: string;
}

export interface TopicInOrder {
  slug: Topic;
  title: string;
  order: number;
}

export interface RecipeSubcategoryInOrder {
  slug: RecipeSubcategory;
  title: string;
  pluralTitle: string;
  order: number;
}

export interface HomepageCarouselSlide {
  slug: string;
  title: string;
  excerpt: string;
  postType: PostType;
  holiday: Holiday;
  image: { src: string; alt: string };
  // CarouselSlide-compatible fields (HeroCarousel renders these directly)
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
}

export interface Post {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  body?: PortableTextBlock[];
  image: { src: string; alt: string };
  author: string;
  publishedAt: string;
  holiday: Holiday;
  topic: Topic;
  postType: PostType;
  audience?: Audience[];
  featured?: boolean;
  sponsored?: boolean;
  readTime?: number;
  // Recipe fields
  recipeSubcategory?: RecipeSubcategory;
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  servingUnit?: string;
  ingredients?: RecipeIngredient[];
  tools?: RecipeTool[];
  instructions?: string[];
  notes?: string;
  // Review fields
  rating?: number;
  reviewSubject?: string;
  // Event fields
  eventDate?: string;
  eventLocation?: string;
  eventNeighborhood?: string;
  ticketUrl?: string;
}

// ─── Shared GROQ projection ────────────────────────────────
// This reshapes Sanity's nested reference data back into the flat
// structure your components expect. Used by every query below.

const postProjection = `
  _id,
  "slug": slug.current,
  title,
  excerpt,
  body[]{
    ...,
    _type == "imageBlock" => {
      ...,
      "image": { "asset": image.asset->{ url } }
    },
    _type == "paragraphWithImage" => {
      ...,
      "image": { "asset": image.asset->{ url } }
    },
    _type == "shopCards" => {
      ...,
      items[]{
        ...,
        "image": { "asset": image.asset->{ url } }
      }
    }
  },
  "image": { "src": image.asset->url, "alt": alt },
  "author": author->name,
  publishedAt,
  holiday,
  "topic": topic->slug.current,
  postType,
  audience,
  featured,
  sponsored,
  readTime,
  "recipeSubcategory": recipeSubcategory->slug.current,
  prepTime,
  cookTime,
  servings,
  servingUnit,
  ingredients[]{ text, affiliateUrl },
  tools[]{
    name,
    description,
    "image": { "src": image.asset->url, "alt": alt },
    affiliateUrl
  },
  instructions,
  notes,
  rating,
  reviewSubject,
  eventDate,
  eventLocation,
  eventNeighborhood,
  ticketUrl
`;

// ─── Queries ───────────────────────────────────────────────

export async function getAllNonRecipeSlugs(): Promise<string[]> {
  return client.fetch<string[]>(
    `*[_type == "post" && postType != "recipe"].slug.current`,
  );
}

export async function getAllRecipeSlugs(): Promise<string[]> {
  return client.fetch<string[]>(
    `*[_type == "post" && postType == "recipe"].slug.current`,
  );
}

export async function getRecipeSubcategoriesInOrder(): Promise<
  RecipeSubcategoryInOrder[]
> {
  return client.fetch<RecipeSubcategoryInOrder[]>(
    `*[_type == "recipeSubcategory"] | order(order asc) {
      "slug": slug.current,
      title,
      pluralTitle,
      order
    }`,
  );
}

export async function getTopicsInOrder(): Promise<TopicInOrder[]> {
  return client.fetch<TopicInOrder[]>(
    `*[_type == "topic"] | order(order asc) {
      "slug": slug.current,
      title,
      order
    }`,
  );
}

export async function getFeaturedPosts(holiday?: Holiday): Promise<Post[]> {
  const query = holiday
    ? `*[_type == "post" && featured == true && (holiday == $holiday || holiday == "both")] | order(publishedAt desc) { ${postProjection} }`
    : `*[_type == "post" && featured == true] | order(publishedAt desc) { ${postProjection} }`;
  return client.fetch<Post[]>(query, holiday ? { holiday } : {});
}

export async function getPostsByHoliday(holiday: Holiday): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post" && (holiday == $holiday || holiday == "both")] | order(publishedAt desc) { ${postProjection} }`,
    { holiday },
  );
}

export async function getPostsByTopic(topic: Topic): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post" && topic->slug.current == $topic] | order(publishedAt desc) { ${postProjection} }`,
    { topic },
  );
}

export async function getPostsByType(postType: PostType): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post" && postType == $postType] | order(publishedAt desc) { ${postProjection} }`,
    { postType },
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0] { ${postProjection} }`,
    { slug },
  );
}

export async function getReviews(holiday?: Holiday): Promise<Post[]> {
  const query = holiday
    ? `*[_type == "post" && postType == "review" && holiday == $holiday] | order(publishedAt desc) { ${postProjection} }`
    : `*[_type == "post" && postType == "review"] | order(publishedAt desc) { ${postProjection} }`;
  return client.fetch<Post[]>(query, holiday ? { holiday } : {});
}

export async function getUpcomingEvents(holiday?: Holiday): Promise<Post[]> {
  const now = new Date().toISOString();
  const query = holiday
    ? `*[_type == "post" && postType == "event" && eventDate >= $now && holiday == $holiday] | order(eventDate asc) { ${postProjection} }`
    : `*[_type == "post" && postType == "event" && eventDate >= $now] | order(eventDate asc) { ${postProjection} }`;
  return client.fetch<Post[]>(query, holiday ? { now, holiday } : { now });
}

export async function getLatestPosts(limit: number = 6): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post" && postType != "recipe"] | order(publishedAt desc) [0...$limit] { ${postProjection} }`,
    { limit },
  );
}

export async function getLatestRecipes(
  holiday: Holiday,
  limit: number = 3,
): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post" && postType == "recipe" && (holiday == $holiday || holiday == "both")] | order(publishedAt desc) [0...$limit] { ${postProjection} }`,
    { holiday, limit },
  );
}

export async function getRecipesByHoliday(holiday: Holiday): Promise<Post[]> {
  return client.fetch<Post[]>(
    `*[_type == "post" && postType == "recipe" && (holiday == $holiday || holiday == "both")] | order(publishedAt desc) { ${postProjection} }`,
    { holiday },
  );
}

function toHolidayLabel(holiday: Holiday): string {
  if (holiday === "halloween") return "Halloween";
  if (holiday === "christmas") return "Christmas";
  return "Featured";
}

type RawCarouselSlide = Omit<
  HomepageCarouselSlide,
  "href" | "imageSrc" | "imageAlt" | "category"
>;

export async function getHomepageCarousel(): Promise<HomepageCarouselSlide[]> {
  const result = await client.fetch<{
    slides: RawCarouselSlide[] | null;
  } | null>(
    `*[_type == "homepageCarousel"][0]{
      "slides": slides[]->{
        "slug": slug.current,
        title,
        excerpt,
        postType,
        holiday,
        "image": { "src": image.asset->url, "alt": alt }
      }
    }`,
  );

  return (result?.slides ?? [])
    .filter((slide) => Boolean(slide.image?.src))
    .map((slide) => ({
      ...slide,
      href: getPostHref(slide),
      imageSrc: slide.image.src,
      imageAlt: slide.image.alt,
      category: `${toHolidayLabel(slide.holiday)} · ${slide.postType.charAt(0).toUpperCase()}${slide.postType.slice(1)}`,
    }));
}

// getPostHref is pure logic, no data fetch — stays sync
export function getPostHref(post: Pick<Post, "postType" | "slug">): string {
  return post.postType === "recipe"
    ? `/recipes/${post.slug}`
    : `/posts/${post.slug}`;
}
