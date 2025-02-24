import { defineField, defineType } from "sanity";

export const registerType = defineType({
  name: "register",
  type: "object",
  title: "Register",
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
  ],
});
