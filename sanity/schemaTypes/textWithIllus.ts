import { defineField, defineType } from "sanity";

const textWithIllustrationType = defineType({
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
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
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "icon",
      type: "string",
    }),
    defineField({
      name: "cta",
      type: "text",
    }),
    defineField({
      name: "image",
      options: { hotspot: true },
      type: "image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});

export default textWithIllustrationType;
