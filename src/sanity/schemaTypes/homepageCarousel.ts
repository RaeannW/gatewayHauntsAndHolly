import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const homepageCarousel = defineType({
  name: "homepageCarousel",
  title: "Homepage Carousel",
  type: "document",
  icon: ImagesIcon,
  preview: {
    prepare: () => ({ title: "Homepage Carousel" }),
  },
  fields: [
    defineField({
      name: "slides",
      title: "Slides",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
      validation: (Rule) => Rule.max(6),
    }),
  ],
});
