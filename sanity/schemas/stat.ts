import { defineField, defineType } from "sanity";

export default defineType({
  name: "stat",
  title: "Statistic",
  type: "document",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: "e.g., 4+, 56M+, $450K",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Icon from lucide-react (TrendingUp, Users, DollarSign, Activity)",
      options: {
        list: [
          { title: "Trending Up", value: "TrendingUp" },
          { title: "Users", value: "Users" },
          { title: "Dollar Sign", value: "DollarSign" },
          { title: "Activity", value: "Activity" },
        ],
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
      title: "label",
      subtitle: "value",
    },
  },
});

