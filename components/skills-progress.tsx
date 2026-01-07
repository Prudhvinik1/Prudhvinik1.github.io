"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ChevronRight } from "lucide-react";

interface Skills {
  languages?: string[];
  frontend?: string[];
  backend?: string[];
  mlAi?: string[];
  infrastructure?: string[];
  databases?: string[];
}

interface SkillsProgressProps {
  skills: Skills;
}

export function SkillsProgress({ skills }: SkillsProgressProps) {
  const categories = [
    { name: "Languages", items: skills.languages || [], color: "bg-primary" },
    { name: "Backend", items: skills.backend || [], color: "bg-blue-500" },
    { name: "ML/AI", items: skills.mlAi || [], color: "bg-purple-500" },
    { name: "Infrastructure", items: skills.infrastructure || [], color: "bg-orange-500" },
    { name: "Databases", items: skills.databases || [], color: "bg-emerald-500" },
    { name: "Frontend", items: skills.frontend || [], color: "bg-pink-500" },
  ];

  // Calculate percentage based on skill count (arbitrary max for visual representation)
  const maxSkills = 15;

  return (
    <Card className="shadow-sm border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Skills
          </CardTitle>
          <span className="text-2xl font-bold text-foreground">
            {Object.values(skills).flat().length}+
          </span>
        </div>
        <p className="text-xs text-muted-foreground">Total technologies</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => {
          const percentage = Math.min((category.items.length / maxSkills) * 100, 100);
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{category.name}</span>
                <span className="text-foreground font-medium">{category.items.length}</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${category.color}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}

        {/* Top Skills Tags */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-3">Top Skills</p>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Go', 'PyTorch', 'Docker', 'AWS'].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
