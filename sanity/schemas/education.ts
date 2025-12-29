import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: "e.g., August 2023 - May 2025",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coursework",
      title: "Coursework",
      type: "text",
      description: "List of relevant courses",
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Key achievements or highlights",
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
      title: "institution",
      subtitle: "degree",
    },
  },
});


