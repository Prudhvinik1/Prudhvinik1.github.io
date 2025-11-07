import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Languages", value: "languages" },
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "ML/AI", value: "mlAi" },
          { title: "Infrastructure", value: "infrastructure" },
          { title: "Databases", value: "databases" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "category",
    },
  },
});

