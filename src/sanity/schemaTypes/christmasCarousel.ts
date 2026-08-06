import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const christmasCarousel = defineType({
  name: "christmasCarousel",
  title: "Christmas Carousel",
  type: "document",
  icon: ImagesIcon,
  preview: {
    prepare: () => ({ title: "Christmas Carousel" }),
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
