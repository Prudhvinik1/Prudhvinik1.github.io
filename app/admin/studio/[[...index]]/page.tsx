import StudioPageClient from "@/app/admin/studio/studio-client";

export default function StudioPage() {
  // Check for projectId on server side (just to determine what to show)
  // Don't import the config here - it will be loaded client-side
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  // Pass the projectId check result to client component
  // The client component will handle loading the config
  return <StudioPageClient hasProjectId={!!(projectId && projectId.trim() !== "")} />;
}
