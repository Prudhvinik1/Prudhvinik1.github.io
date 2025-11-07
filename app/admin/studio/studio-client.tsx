"use client";

import dynamic from "next/dynamic";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, ExternalLink } from "lucide-react";
import Link from "next/link";

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading Sanity Studio...</p>
    </div>
  </div>
);

// Dynamically import Studio with config - only on client side
const SanityStudio = dynamic(
  async () => {
    // Only import when in browser
    if (typeof window === "undefined") {
      return { default: () => null };
    }
    
    const [{ NextStudio }, { default: config }] = await Promise.all([
      import("next-sanity/studio"),
      import("@/sanity.config"),
    ]);
    
    return () => <NextStudio config={config} />;
  },
  {
    ssr: false,
    loading: LoadingSpinner,
  }
);

interface StudioPageClientProps {
  hasProjectId: boolean;
}

export default function StudioPageClient({ hasProjectId }: StudioPageClientProps) {
  // Show setup instructions if Sanity is not configured
  if (!hasProjectId) {
    return (
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Card className="max-w-2xl w-full border-2 border-yellow-500/50 bg-yellow-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
              <Settings className="h-5 w-5" />
              Sanity CMS Not Configured
            </CardTitle>
            <CardDescription>
              Please configure Sanity CMS to use the content management system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Setup Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>
                  Create a free Sanity account at{" "}
                  <Link
                    href="https://www.sanity.io"
                    target="_blank"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    sanity.io
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
                <li>Create a new project and get your Project ID</li>
                <li>
                  Add environment variables to{" "}
                  <code className="bg-muted px-1 py-0.5 rounded">
                    .env.local
                  </code>
                  :
                  <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
                    {`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production`}
                  </pre>
                </li>
                <li>Restart your development server</li>
                <li>Return to this page to start managing content</li>
              </ol>
            </div>
            <div className="pt-4 border-t">
              <Button variant="default" asChild>
                <Link href="/admin">Back to Admin Panel</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Load Studio with config (loaded client-side only)
  return <SanityStudio />;
}

