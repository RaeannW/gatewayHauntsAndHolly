import { defineField, defineType } from "sanity";
import { EditIcon } from "@sanity/icons";

export const notesBlock = defineType({
  name: "notesBlock",
  title: "Notes",
  type: "object",
  icon: EditIcon,
  fields: [
    defineField({
      name: "text",
      title: "Notes text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { text: "text" },
    prepare({ text }) {
      return {
        title: "Notes",
        subtitle: text?.slice(0, 60),
      };
    },
  },
});
