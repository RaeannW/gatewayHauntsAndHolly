import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const halloweenCarousel = defineType({
  name: "halloweenCarousel",
  title: "Halloween Carousel",
  type: "document",
  icon: ImagesIcon,
  preview: {
    prepare: () => ({ title: "Halloween Carousel" }),
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
