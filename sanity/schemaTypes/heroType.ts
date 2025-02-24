import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "slug",
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
      name: "subTitle",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "video",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Hero",
      };
    },
  },
});
