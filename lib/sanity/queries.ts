import { groq } from "next-sanity";

export const personalInfoQuery = groq`*[_type == "personalInfo"][0]`;
export const aboutQuery = groq`*[_type == "about"][0]`;
export const experienceQuery = groq`*[_type == "experience"] | order(order asc)`;
export const educationQuery = groq`*[_type == "education"] | order(order asc)`;
export const projectsQuery = groq`*[_type == "project"] | order(order asc)`;
export const skillsQuery = groq`*[_type == "skill"]`;
export const statsQuery = groq`*[_type == "stat"] | order(order asc)`;

