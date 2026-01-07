"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock, User } from "lucide-react";

interface PersonalInfo {
  name: string;
  availableRoles?: string[];
  status?: string;
}

interface OnboardingTasksProps {
  personalInfo: PersonalInfo;
}

export function OnboardingTasks({ personalInfo }: OnboardingTasksProps) {
  const tasks = [
    { label: "Portfolio Live", status: "completed", date: "Jan 2025" },
    { label: "Meta Capstone", status: "completed", date: "May 2025" },
    { label: "MS Graduation", status: "completed", date: "May 2025" },
    { label: "Open to Work", status: "in_progress", date: "Current" },
    { label: "Next Role", status: "pending", date: "2025" },
  ];

  const completedCount = tasks.filter(t => t.status === "completed").length;
  const totalCount = tasks.length;
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <Card className="shadow-sm border-border/50 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white dark:from-zinc-800 dark:to-zinc-900">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-white">Journey</CardTitle>
          <span className="text-2xl font-bold text-white">{completedCount}/{totalCount}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
              task.status === "in_progress"
                ? "bg-primary/20"
                : task.status === "completed"
                ? "bg-white/5"
                : "bg-white/5 opacity-60"
            }`}
          >
            {task.status === "completed" ? (
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
            ) : task.status === "in_progress" ? (
              <div className="w-5 h-5 rounded-full border-2 border-primary bg-primary/20 animate-pulse shrink-0" />
            ) : (
              <Circle className="w-5 h-5 text-zinc-500 shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${
                task.status === "pending" ? "text-zinc-400" : "text-white"
              }`}>
                {task.label}
              </p>
            </div>
            <span className="text-xs text-zinc-400 shrink-0">{task.date}</span>
          </div>
        ))}

        {/* Progress Bar */}
        <div className="pt-4 mt-2 border-t border-white/10">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-zinc-400">Progress</span>
            <span className="text-white font-medium">{percentage}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
