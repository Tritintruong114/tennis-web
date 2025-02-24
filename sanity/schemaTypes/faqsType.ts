import { defineField, defineType } from "sanity";

export const faqsType = defineType({
  name: "faqs",
  type: "object",
  title: "Faqs",
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
      name: "ourfaqs",
      type: "array",
      of: [
        defineField({
          name: "Questions",
          type: "object",
          fields: [
            defineField({
              name: "question",
              type: "string",
            }),
            defineField({
              name: "answer",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
});
