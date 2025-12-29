import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Project URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Time Period",
      type: "string",
      description: "When this project was completed (e.g., 'September 2025')",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      description: "Technologies used in this project",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "image",
    },
  },
});


