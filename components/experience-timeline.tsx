"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

interface ExperienceTimelineProps {
  experience: Experience[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Card className="shadow-sm border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {experience.map((exp, index) => (
          <div
            key={index}
            className={`relative rounded-xl transition-all duration-300 ${
              expandedIndex === index
                ? 'bg-primary/5 border border-primary/20'
                : 'bg-muted/30 hover:bg-muted/50 border border-transparent'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-4 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20" />

            {/* Content */}
            <button
              className="w-full text-left p-4 pl-10"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground truncate">{exp.company}</h4>
                  <p className="text-sm text-primary font-medium">{exp.role}</p>
                  {(exp as any).location && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      {(exp as any).location}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="secondary" className="text-xs whitespace-nowrap">
                    {exp.period.split(" – ")[0].split(" ").slice(-1)[0]}
                  </Badge>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {expandedIndex === index && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
