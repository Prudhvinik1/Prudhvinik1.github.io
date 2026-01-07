"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Play, Pause } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface TimeTrackerProps {
  stats: Stat[];
}

export function TimeTracker({ stats }: TimeTrackerProps) {
  // Extract numeric value from first stat for the circular progress
  const mainStat = stats[0];
  const numericValue = parseInt(mainStat?.value?.replace(/[^0-9]/g, '') || '4');
  const maxValue = 10;
  const percentage = (numericValue / maxValue) * 100;

  // Calculate circle properties
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <Card className="shadow-sm border-border/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Time tracker</CardTitle>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {/* Circular Progress */}
        <div className="flex flex-col items-center py-4">
          <div className="relative w-36 h-36">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 140 140">
              {/* Background circle */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="none"
                stroke="currentColor"
                className="text-muted/30"
                strokeWidth="12"
              />
              {/* Progress circle */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="none"
                stroke="currentColor"
                className="text-primary"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
              />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{mainStat?.value || '4+'}</span>
              <span className="text-xs text-muted-foreground">Years</span>
            </div>
          </div>

          {/* Label */}
          <p className="text-sm text-muted-foreground mt-2">Professional Experience</p>
        </div>

        {/* Play/Pause Controls (decorative) */}
        <div className="flex items-center justify-center gap-4 mt-2 pt-4 border-t border-border/50">
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <Play className="w-4 h-4 text-foreground ml-0.5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Pause className="w-3 h-3 text-primary-foreground" />
            </div>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
