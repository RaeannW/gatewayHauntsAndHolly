import { defineField, defineType } from "sanity";

export const paragraphWithImage = defineType({
  name: "paragraphWithImage",
  title: "Paragraph with image",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
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
      name: "align",
      title: "Image alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "right",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "text", media: "image" },
    prepare({ title, media }) {
      return {
        title: title?.slice(0, 60) + (title?.length > 60 ? "…" : ""),
        media,
      };
    },
  },
});
