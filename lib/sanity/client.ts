import { createClient, SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// Only create client if projectId is configured
export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      useCdn: false, // Disable CDN to always get fresh data
      apiVersion: "2024-01-01",
    })
  : null;

// Helper function to get image URL
import imageUrlBuilder from "@sanity/image-url";

const builder = client ? imageUrlBuilder(client) : null;

// Create a chainable dummy object for when Sanity isn't configured
const dummyBuilder: any = {
  url: () => "",
  width: () => dummyBuilder,
  height: () => dummyBuilder,
  auto: () => dummyBuilder,
  format: () => dummyBuilder,
  fit: () => dummyBuilder,
  quality: () => dummyBuilder,
};

export function urlFor(source: any) {
  if (!builder) return dummyBuilder;
  return builder.image(source);
}

