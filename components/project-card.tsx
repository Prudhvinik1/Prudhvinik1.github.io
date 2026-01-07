"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Code, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  name: string;
  description: string;
  link: string;
  liveUrl?: string;
  image?: string;
  technologies?: string[];
  period?: string;
}

interface ProjectCardProps {
  project: Project;
}

const MAX_DESCRIPTION_LENGTH = 150;

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const shouldTruncate = project.description.length > MAX_DESCRIPTION_LENGTH;
  const displayDescription =
    isExpanded || !shouldTruncate
      ? project.description
      : project.description.slice(0, MAX_DESCRIPTION_LENGTH).trim() + "...";

  const imageUrl = project.image || null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.21, 1.11, 0.81, 0.99] }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="border-2 glass-card hover-glow transition-all duration-300 flex flex-col h-full group overflow-hidden relative corner-accent">
        {/* Project Image / Gradient Placeholder */}
        <div className="relative w-full h-48 overflow-hidden">
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </>
          ) : (
            /* Gradient placeholder */
            <div className="absolute inset-0 gradient-placeholder">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="h-16 w-16 text-white/40" />
              </div>
            </div>
          )}

          {/* Hover overlay with buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 project-overlay flex items-end justify-center pb-6 gap-3"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="bg-white/90 text-gray-900 hover:bg-white shadow-lg"
                >
                  <Code className="mr-2 h-4 w-4" />
                  View Code
                </Button>
              </Link>
            </motion.div>
            {project.liveUrl && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 shadow-lg"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Period badge */}
          {project.period && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-black/60 text-white border-white/20 backdrop-blur-sm">
                {project.period}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors gradient-text">
              {project.name}
            </CardTitle>
            <motion.div
              animate={{ x: isHovered ? 0 : 5, opacity: isHovered ? 1 : 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </motion.div>
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
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* View Project Link */}
          <div className="mt-auto pt-4 border-t border-border/50">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link transition-smooth"
            >
              <span className="gradient-text">View Project</span>
              <motion.span
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
