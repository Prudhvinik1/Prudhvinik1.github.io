import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  variant?: "default" | "yellow" | "purple" | "dark";
}

export function StatCard({ icon: Icon, value, label, description, variant = "default" }: StatCardProps) {
  const variantClasses = {
    default: "bg-card border-border/50",
    yellow: "bg-gradient-to-br from-primary/15 to-primary/5 border-primary/20",
    purple: "bg-gradient-to-br from-accent/40 to-accent/20 border-accent-foreground/10",
    dark: "bg-chart-dark text-white border-chart-dark",
  };

  const iconBgClasses = {
    default: "bg-primary/10 group-hover:bg-primary/20",
    yellow: "bg-primary/20 group-hover:bg-primary/30",
    purple: "bg-accent-foreground/10 group-hover:bg-accent-foreground/20",
    dark: "bg-white/10 group-hover:bg-white/20",
  };

  const iconColorClasses = {
    default: "text-primary",
    yellow: "text-primary",
    purple: "text-accent-foreground",
    dark: "text-white",
  };

  return (
    <Card className={`border hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-1 group h-full ${variantClasses[variant]}`}>
      <CardContent className="pt-6 pb-6 flex flex-col items-center text-center space-y-4 h-full">
        <div className={`p-4 rounded-2xl transition-colors flex-shrink-0 ${iconBgClasses[variant]}`}>
          <Icon className={`h-8 w-8 ${iconColorClasses[variant]}`} />
        </div>
        <div className="space-y-1 flex-grow flex flex-col justify-center">
          <div className={`text-4xl md:text-5xl font-bold ${variant === "dark" ? "text-white" : "text-foreground"}`}>
            {value}
          </div>
          <div className={`text-lg md:text-xl font-semibold ${variant === "dark" ? "text-white/90" : "text-foreground"}`}>
            {label}
          </div>
          {description && (
            <div className={`text-sm mt-2 ${variant === "dark" ? "text-white/70" : "text-muted-foreground"}`}>
              {description}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

