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
        // socials
        defineArrayMember({
          name: "socials",
          type: "socials",
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
        // Facilities
        defineArrayMember({
          name: "facilities",
          type: "facilities",
        }),
        defineArrayMember({
          name: "history",
          type: "history",
        }),
        // Textwithillus
        defineArrayMember({
          name: "textWithIllustration",
          type: "textWithIllustration",
        }),
      ],
    }),
  ],
});
export default pageType;
