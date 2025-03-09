import { defineField, defineType } from "sanity";

export const socialsType = defineType({
  name: "socials",
  type: "object",
  title: "socials",
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
      name: "ourSocials",
      type: "array",
      of: [
        defineField({
          name: "Social",
          type: "textWithIllustration",
        }),
      ],
    }),
  ],
});
