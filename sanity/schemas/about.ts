import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "whatDrivesMe",
      title: "What Drives Me",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "lookingFor",
      title: "What I'm Looking For",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Section",
      };
    },
  },
});

