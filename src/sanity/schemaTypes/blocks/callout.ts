import { defineField, defineType } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const callout = defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Note", value: "note" },
          { title: "Tip", value: "tip" },
          { title: "Warning", value: "warning" },
        ],
        layout: "radio",
      },
      initialValue: "note",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { variant: "variant", text: "text" },
    prepare({ variant, text }) {
      return {
        title: `${variant?.toUpperCase() ?? "CALLOUT"}: ${text?.slice(0, 50) ?? ""}`,
      };
    },
  },
});
