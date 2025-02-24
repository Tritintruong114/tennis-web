import { defineArrayMember, defineField, defineType } from "sanity";

const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "string",
      title: "Slug",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        // Hero
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        // Register
        defineArrayMember({
          name: "register",
          type: "register",
        }),
        // Coaches
        defineArrayMember({
          name: "coaches",
          type: "coaches",
        }),
        // Locations
        defineArrayMember({
          name: "locations",
          type: "locations",
        }),
        // Faqs
        defineArrayMember({
          name: "faqs",
          type: "faqs",
        }),
        // Rally
        defineArrayMember({
          name: "rally",
          type: "rally",
        }),
      ],
    }),
  ],
});
export default pageType;
