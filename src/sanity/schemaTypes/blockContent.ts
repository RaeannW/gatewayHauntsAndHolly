import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    // Native portable text block — handles paragraph, heading, list
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.required().uri({ scheme: ["http", "https", "mailto"] }),
              },
            ],
          },
        ],
      },
    }),
    // Custom blocks
    defineArrayMember({ type: "imageBlock" }),
    defineArrayMember({ type: "paragraphWithImage" }),
    defineArrayMember({ type: "callout" }),
    defineArrayMember({ type: "shopCards" }),
    defineArrayMember({ type: "notesBlock" }),
  ],
});
