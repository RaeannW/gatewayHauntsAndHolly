import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

export const shopCards = defineType({
  name: "shopCards",
  title: "Shop Cards",
  type: "object",
  icon: TagIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Intro text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "shopCard" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { heading: "heading", items: "items" },
    prepare({ heading, items }) {
      const count = items?.length ?? 0;
      return {
        title: heading || "Shop Cards",
        subtitle: `${count} item${count === 1 ? "" : "s"}`,
      };
    },
  },
});
