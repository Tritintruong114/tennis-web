import { defineField, defineType } from "sanity";

export const coachesType = defineType({
  name: "coaches",
  type: "object",
  title: "Coaches",
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
      name: "ourCoaches",
      type: "array",
      of: [
        defineField({
          name: "Coach",
          type: "textWithIllustration",
        }),
      ],
    }),
  ],
});
