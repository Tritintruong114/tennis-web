import { defineField, defineType } from "sanity";

export const locationsType = defineType({
  name: "locations",
  type: "object",
  title: "Locations",
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
      name: "ourLocations",
      type: "array",
      of: [
        defineField({
          name: "Location",
          type: "textWithIllustration",
        }),
      ],
    }),
  ],
});
