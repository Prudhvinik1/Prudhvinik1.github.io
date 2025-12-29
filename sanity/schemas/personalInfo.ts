import { defineField, defineType } from "sanity";

export default defineType({
  name: "personalInfo",
  title: "Personal Information",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "e.g., Distributed Systems • LLMs • Microservices",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email().required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      description: "e.g., Open to Work",
    }),
    defineField({
      name: "availableRoles",
      title: "Available Roles",
      type: "array",
      of: [{ type: "string" }],
      description: "Roles you're open to",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
    },
  },
});


