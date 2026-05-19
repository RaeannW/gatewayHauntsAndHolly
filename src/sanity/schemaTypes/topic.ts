import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const topic = defineType({
  name: "topic",
  title: "Topic",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Display name, e.g. "DIY" or "Decor"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'URL-safe identifier, e.g. "diy" or "decor"',
      options: { source: "title", maxLength: 50 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers show first",
      validation: (Rule) => Rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "order" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Order: ${subtitle}` };
    },
  },
});
