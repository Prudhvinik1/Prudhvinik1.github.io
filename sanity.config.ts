import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Validate that projectId is provided
if (!projectId || projectId.trim() === "") {
  console.warn(
    "⚠️  NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Sanity Studio will not work without a project ID."
  );
}

export default defineConfig({
  name: "portfolio",
  title: "Portfolio CMS",
  
  projectId: projectId,
  dataset: dataset,
  
  basePath: "/admin/studio",
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
  
  // Enable authentication
  api: {
    projectId: projectId,
    dataset: dataset,
  },
});

