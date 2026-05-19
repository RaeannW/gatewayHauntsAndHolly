import { defineField, defineType } from "sanity";
import { OlistIcon } from "@sanity/icons";

export const recipeSubcategory = defineType({
  name: "recipeSubcategory",
  title: "Recipe Subcategory",
  type: "document",
  icon: OlistIcon,
  fields: [
    defineField({
      name: "title",
      title: "Singular title",
      type: "string",
      description: 'e.g. "Dessert", "Drink"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "pluralTitle",
      title: "Plural title",
      type: "string",
      description: 'For UI labels, e.g. "Desserts", "Drinks"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 50 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
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
    select: { title: "title", subtitle: "pluralTitle" },
  },
});
