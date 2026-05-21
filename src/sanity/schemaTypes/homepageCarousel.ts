import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const homepageCarousel = defineType({
  name: "homepageCarousel",
  title: "Homepage Carousel",
  type: "document",
  icon: ImagesIcon,
  // Singleton: hide Create and Delete actions in the Studio UI
  __experimental_actions: ["update", "publish"],
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
