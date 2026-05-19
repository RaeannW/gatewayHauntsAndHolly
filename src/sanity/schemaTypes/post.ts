import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,

  // Group tabs in the Studio editor — keeps the form organized
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Metadata" },
    { name: "recipe", title: "Recipe fields" },
    { name: "review", title: "Review fields" },
    { name: "event", title: "Event fields" },
  ],

  fields: [
    // ─── Core fields ──────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "image",
      title: "Featured image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Featured image alt text",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      group: "content",
    }),

    // ─── Metadata ──────────────────────────────────────────────
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "holiday",
      title: "Holiday",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "Halloween", value: "halloween" },
          { title: "Christmas", value: "christmas" },
          { title: "Both", value: "both" },
          { title: "Neither", value: "neither" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "topic",
      title: "Topic",
      type: "reference",
      to: [{ type: "topic" }],
      group: "meta",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "postType",
      title: "Post type",
      type: "string",
      group: "meta",
      options: {
        list: [
          { title: "Article", value: "article" },
          { title: "Review", value: "review" },
          { title: "Guide", value: "guide" },
          { title: "Roundup", value: "roundup" },
          { title: "Recipe", value: "recipe" },
          { title: "Event", value: "event" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "audience",
      title: "Audience",
      type: "array",
      group: "meta",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Family", value: "family" },
          { title: "Adults", value: "adults" },
          { title: "Date night", value: "date-night" },
          { title: "Kids", value: "kids" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured post",
      type: "boolean",
      group: "meta",
      initialValue: false,
    }),
    defineField({
      name: "sponsored",
      title: "Sponsored",
      type: "boolean",
      group: "meta",
      initialValue: false,
    }),
    defineField({
      name: "readTime",
      title: "Read time (minutes)",
      type: "number",
      group: "meta",
      validation: (Rule) => Rule.integer().positive(),
    }),

    // ─── Recipe fields ────────────────────────────────────────
    defineField({
      name: "recipeSubcategory",
      title: "Recipe subcategory",
      type: "reference",
      to: [{ type: "recipeSubcategory" }],
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const postType = (context.parent as { postType?: string })?.postType;
          if (postType === "recipe" && !value) {
            return "Required for recipes";
          }
          return true;
        }),
    }),
    defineField({
      name: "prepTime",
      title: "Prep time (minutes)",
      type: "number",
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: "cookTime",
      title: "Cook time (minutes)",
      type: "number",
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: "servings",
      title: "Servings",
      type: "number",
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
      validation: (Rule) => Rule.integer().positive(),
    }),
    defineField({
      name: "servingUnit",
      title: "Serving unit",
      type: "string",
      description: 'e.g. "cookies", "servings", "drinks"',
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
    }),
    defineField({
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
      of: [
        {
          type: "object",
          name: "ingredient",
          fields: [
            {
              name: "text",
              title: "Ingredient text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "affiliateUrl",
              title: "Affiliate URL (optional)",
              type: "url",
              validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
            },
          ],
          preview: {
            select: { title: "text", subtitle: "affiliateUrl" },
          },
        },
      ],
    }),
    defineField({
      name: "tools",
      title: "Tools & supplies",
      type: "array",
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
      of: [{ type: "shopCard" }],
    }),
    defineField({
      name: "instructions",
      title: "Instructions",
      type: "array",
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
      of: [{ type: "text", rows: 2 }],
    }),
    defineField({
      name: "notes",
      title: "Recipe notes",
      type: "text",
      rows: 4,
      group: "recipe",
      hidden: ({ parent }) => parent?.postType !== "recipe",
    }),

    // ─── Review fields ────────────────────────────────────────
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      group: "review",
      hidden: ({ parent }) => parent?.postType !== "review",
      validation: (Rule) => Rule.min(1).max(5).precision(1),
    }),
    defineField({
      name: "reviewSubject",
      title: "Review subject",
      type: "string",
      description: 'What is being reviewed (e.g. "The Darkness Haunted House")',
      group: "review",
      hidden: ({ parent }) => parent?.postType !== "review",
    }),

    // ─── Event fields ─────────────────────────────────────────
    defineField({
      name: "eventDate",
      title: "Event date",
      type: "datetime",
      group: "event",
      hidden: ({ parent }) => parent?.postType !== "event",
    }),
    defineField({
      name: "eventLocation",
      title: "Event location (full address)",
      type: "string",
      group: "event",
      hidden: ({ parent }) => parent?.postType !== "event",
    }),
    defineField({
      name: "eventNeighborhood",
      title: "Neighborhood",
      type: "string",
      group: "event",
      hidden: ({ parent }) => parent?.postType !== "event",
    }),
    defineField({
      name: "ticketUrl",
      title: "Ticket URL",
      type: "url",
      group: "event",
      hidden: ({ parent }) => parent?.postType !== "event",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "postType",
      media: "image",
      holiday: "holiday",
    },
    prepare({ title, subtitle, media, holiday }) {
      return {
        title,
        subtitle: `${holiday} · ${subtitle}`,
        media,
      };
    },
  },

  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Title, A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
