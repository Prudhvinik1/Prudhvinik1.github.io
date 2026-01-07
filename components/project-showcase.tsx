"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  period?: string;
  link?: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <Card className="shadow-sm border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Projects
          </CardTitle>
          <Badge variant="secondary" className="text-xs">{projects.length}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {projects.slice(0, 3).map((project, index) => (
          <Link
            key={index}
            href={(project as any).link || project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {project.name}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-[10px]">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
