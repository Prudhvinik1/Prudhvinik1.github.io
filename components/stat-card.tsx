import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
}

export function StatCard({ icon: Icon, value, label, description }: StatCardProps) {
  return (
    <Card className="border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
      <CardContent className="pt-6 pb-6 flex flex-col items-center text-center space-y-4 h-full">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="space-y-1 flex-grow flex flex-col justify-center">
          <div className="text-4xl md:text-5xl font-bold text-foreground">
            {value}
          </div>
          <div className="text-lg md:text-xl font-semibold text-foreground">
            {label}
          </div>
          {description && (
            <div className="text-sm text-muted-foreground mt-2">
              {description}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

