import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const imageBlock = defineType({
  name: "imageBlock",
  title: "Image",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "align",
      title: "Alignment",
      type: "string",
      options: {
        list: [
          { title: "Wide", value: "wide" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" },
        ],
        layout: "radio",
      },
      initialValue: "wide",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "alt", media: "image" },
  },
});
