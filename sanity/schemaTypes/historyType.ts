import { defineField, defineType } from "sanity";

export const historyType = defineType({
  name: "history",
  type: "object",
  title: "history",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "tagline",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "string",
    }),
    defineField({
      name: "ourHistory",
      type: "array",
      of: [
        defineField({
          name: "history",
          type: "textWithIllustration",
        }),
      ],
    }),
  ],
});
