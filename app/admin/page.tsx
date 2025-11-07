import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, FileText, Settings, Plus, ExternalLink } from "lucide-react";
import { LogoutButton } from "@/components/admin/logout-button";
import Link from "next/link";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("admin-auth");

  if (authCookie?.value !== "authenticated") {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">Admin Panel</h1>
              <p className="text-muted-foreground mt-2">
                Manage your portfolio content
              </p>
            </div>
            <LogoutButton />
          </div>
        </div>

        {/* CMS Status */}
        <div className="mb-8">
          <Card className="border-2 border-green-500/50 bg-green-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
                Sanity CMS
              </CardTitle>
              <CardDescription>
                Content Management System integrated and ready
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700 dark:text-green-400">
                    ✅ Sanity CMS is configured and ready to use
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Manage your portfolio content through Sanity Studio
                  </p>
                </div>
                <Button variant="default" asChild>
                  <Link href="/admin/studio">
                    <Settings className="mr-2 h-4 w-4" />
                    Open Sanity Studio
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Management Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
              <CardDescription>Edit your personal details</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/studio/desk/personalInfo">
                  <Plus className="mr-2 h-4 w-4" />
                  Edit in Studio
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                About Section
              </CardTitle>
              <CardDescription>Edit your about information</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/studio/desk/about">
                  <Plus className="mr-2 h-4 w-4" />
                  Edit in Studio
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Experience
              </CardTitle>
              <CardDescription>Manage your work experience</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/studio/desk/experience">
                  <Plus className="mr-2 h-4 w-4" />
                  Manage in Studio
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Projects
              </CardTitle>
              <CardDescription>Add or edit projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/studio/desk/project">
                  <Plus className="mr-2 h-4 w-4" />
                  Manage in Studio
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Education
              </CardTitle>
              <CardDescription>Update education details</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/studio/desk/education">
                  <Plus className="mr-2 h-4 w-4" />
                  Edit in Studio
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Skills
              </CardTitle>
              <CardDescription>Update your skills list</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/studio/desk/skill">
                  <Plus className="mr-2 h-4 w-4" />
                  Manage in Studio
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Statistics
              </CardTitle>
              <CardDescription>Update achievement statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/studio/desk/stat">
                  <Plus className="mr-2 h-4 w-4" />
                  Edit in Studio
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8 border-2 bg-muted/30">
          <CardHeader>
            <CardTitle>Getting Started with Sanity</CardTitle>
            <CardDescription>
              Your CMS is ready! Follow these steps to set it up
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Setup Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Create a free Sanity account at <Link href="https://www.sanity.io" target="_blank" className="text-primary hover:underline">sanity.io</Link></li>
                <li>Create a new project and get your Project ID</li>
                <li>Add environment variables to <code className="bg-muted px-1 py-0.5 rounded">.env.local</code>:
                  <pre className="bg-muted p-2 rounded mt-1 text-xs overflow-x-auto">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}
                  </pre>
                </li>
                <li>Click "Open Sanity Studio" to start managing content</li>
                <li>Add your first content (Personal Info, About, Experience, etc.)</li>
              </ol>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Note:</strong> The admin panel is only accessible at <code className="bg-muted px-1 py-0.5 rounded">/admin</code> and is not linked anywhere on the public site.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold text-sm">Quick Links:</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <Link href="/admin/studio" className="hover:text-primary hover:underline">
                      Sanity Studio
                    </Link>
                    <span className="text-xs">- Manage all content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <Link href="https://www.sanity.io/docs" target="_blank" className="hover:text-primary hover:underline">
                      Sanity Documentation
                    </Link>
                    <span className="text-xs">- Learn how to use Sanity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <Link href="https://www.sanity.io/manage" target="_blank" className="hover:text-primary hover:underline">
                      Sanity Management Console
                    </Link>
                    <span className="text-xs">- Manage your project</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

