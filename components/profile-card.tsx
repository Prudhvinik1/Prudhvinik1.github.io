"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";

interface PersonalInfo {
  name: string;
  title: string;
  subtitle?: string;
  location?: string;
  status?: string;
  email: string;
  github: string;
  linkedin: string;
}

interface About {
  description: string;
  whatDrivesMe?: string;
  lookingFor?: string;
}

interface ProfileCardProps {
  personalInfo: PersonalInfo;
  about: About;
}

export function ProfileCard({ personalInfo, about }: ProfileCardProps) {
  const initials = personalInfo.name.split(" ").map(n => n[0]).join("");

  return (
    <Card className="shadow-sm border-border/50 overflow-hidden">
      {/* Profile Header with gradient */}
      <div className="relative h-24 bg-gradient-to-br from-primary via-primary/80 to-primary/60">
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 rounded-2xl bg-card border-4 border-card shadow-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{initials}</span>
          </div>
        </div>
        {personalInfo.status && (
          <Badge
            className="absolute top-4 right-4 bg-white/20 text-white border-white/30 backdrop-blur-sm"
          >
            {personalInfo.status}
          </Badge>
        )}
      </div>

      <CardContent className="pt-14 pb-6">
        {/* Name and Title */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground">{personalInfo.name}</h3>
          <p className="text-sm text-primary font-medium">{personalInfo.title}</p>
          {personalInfo.subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{personalInfo.subtitle}</p>
          )}
        </div>

        {/* Location */}
        {personalInfo.location && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
        )}

        {/* About Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4">
          {about.description}
        </p>

        {/* Quick Links */}
        <div className="flex items-center gap-2">
          <Link
            href={`mailto:${personalInfo.email}`}
            className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Email
          </Link>
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
          >
            <Github className="w-4 h-4 text-foreground" />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-foreground" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
