"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity/client";

interface Project {
  name: string;
  description: string;
  link: string;
  image?: any;
  technologies?: string[];
  period?: string;
}

interface ProjectCardProps {
  project: Project;
}

const MAX_DESCRIPTION_LENGTH = 150;

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldTruncate = project.description.length > MAX_DESCRIPTION_LENGTH;
  const displayDescription = isExpanded || !shouldTruncate
    ? project.description
    : project.description.slice(0, MAX_DESCRIPTION_LENGTH).trim() + "...";

  // Generate image URL from Sanity
  const imageUrl = project.image ? urlFor(project.image).width(600).height(340).url() : null;

  return (
    <Card className="border-2 hover:border-primary/50 transition-smooth flex flex-col h-full group overflow-hidden">
      {/* Project Image */}
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-grow space-y-2">
            <CardTitle className="text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors">
              {project.name}
            </CardTitle>
            {project.period && (
              <Badge variant="secondary" className="text-xs">
                {project.period}
              </Badge>
            )}
          </div>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          >
            <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col pt-0">
        {/* Description with expand/collapse */}
        <div className="mb-4">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
            {displayDescription}
          </p>
          {shouldTruncate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 h-auto p-0 text-primary hover:text-primary/80 hover:bg-transparent"
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>
        
        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {/* View Project Link */}
        <div className="mt-auto pt-4 border-t">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link transition-smooth"
          >
            View Project <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

