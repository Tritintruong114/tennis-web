import { defineField, defineType } from "sanity";

export const facilitiesType = defineType({
  name: "facilities",
  type: "object",
  title: "Facilities",
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
      name: "ourFacilities",
      type: "array",
      of: [
        defineField({
          name: "Facilities",
          type: "textWithIllustration",
        }),
      ],
    }),
  ],
});
