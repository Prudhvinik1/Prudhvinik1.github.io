"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Code, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface GitHubStats {
  stars: number;
  forks: number;
  contributions: number;
  repositories: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const username = "Prudhvinik1";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await reposResponse.json();
        
        // Calculate total stars and forks
        const totalStars = repos.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum: number, repo: any) => sum + repo.forks_count, 0);
        const publicRepos = repos.length;

        // Note: Contributions require authentication or GitHub GraphQL API
        // For now, we'll use a placeholder or you can integrate with a service like github-readme-stats
        setStats({
          stars: totalStars,
          forks: totalForks,
          contributions: 0, // This would require GitHub API token
          repositories: publicRepos,
        });
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  if (loading) {
    return (
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="h-5 w-5" />
            GitHub Stats
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Github className="h-5 w-5 text-primary" />
          GitHub Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-4 flex-grow">
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Star className="h-6 w-6 text-yellow-500 mb-2 flex-shrink-0" />
            <div className="text-2xl font-bold">{stats.stars}</div>
            <div className="text-sm text-muted-foreground">Stars</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <GitFork className="h-6 w-6 text-blue-500 mb-2 flex-shrink-0" />
            <div className="text-2xl font-bold">{stats.forks}</div>
            <div className="text-sm text-muted-foreground">Forks</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Code className="h-6 w-6 text-green-500 mb-2 flex-shrink-0" />
            <div className="text-2xl font-bold">{stats.repositories}</div>
            <div className="text-sm text-muted-foreground">Repos</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <TrendingUp className="h-6 w-6 text-purple-500 mb-2 flex-shrink-0" />
            <div className="text-2xl font-bold">Active</div>
            <div className="text-sm text-muted-foreground">Developer</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

