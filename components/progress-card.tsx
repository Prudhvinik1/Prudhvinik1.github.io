"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, ChevronRight } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

interface ProgressCardProps {
  experience: Experience[];
}

export function ProgressCard({ experience }: ProgressCardProps) {
  // Calculate total years of experience
  const calculateYears = () => {
    let totalMonths = 0;
    experience.forEach(exp => {
      const period = exp.period;
      // Simple parsing - this is approximate
      const parts = period.split(" – ");
      if (parts.length === 2) {
        const start = new Date(parts[0]);
        const end = parts[1].toLowerCase().includes("present") ? new Date() : new Date(parts[1]);
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        totalMonths += months;
      }
    });
    return Math.round(totalMonths / 12 * 10) / 10;
  };

  const years = calculateYears() || 4;
  const maxYears = 10;
  const percentage = Math.min((years / maxYears) * 100, 100);

  // Create bar chart data based on experience periods
  const barData = experience.slice(0, 7).map((exp, index) => {
    // Calculate relative duration for bar height
    const heights = [85, 65, 90, 45, 70, 55, 80]; // Varying heights for visual interest
    return heights[index] || 50;
  });

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <Card className="shadow-sm border-border/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            Progress
          </CardTitle>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {/* Main Stat */}
        <div className="flex items-baseline gap-2 mb-6">
          <span className="text-4xl font-bold text-foreground">{years}+</span>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Years Experience</span>
            <br />
            <span className="text-xs">across {experience.length} positions</span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-32 mb-4">
          {barData.map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full relative flex items-end justify-center" style={{ height: '100px' }}>
                <div
                  className={`w-full max-w-[24px] rounded-lg transition-all duration-500 ${
                    index === 2 ? 'bg-primary' : 'bg-primary/20'
                  }`}
                  style={{ height: `${height}%` }}
                />
                {index === 2 && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap">
                    {experience[index]?.company || 'Current'}
                  </div>
                )}
              </div>
              <span className="text-xs text-muted-foreground">{days[index]}</span>
            </div>
          ))}
        </div>

        {/* Companies List */}
        <div className="space-y-2 pt-4 border-t border-border/50">
          {experience.slice(0, 3).map((exp, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground truncate flex-1">{exp.company}</span>
              <span className="text-foreground font-medium ml-2">{exp.role.split(" – ")[0]}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
