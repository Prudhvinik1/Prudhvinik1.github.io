"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Users, Clock, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface VisitorMetrics {
  views: number;
  visitors: number;
  lastVisit: string;
  growth: number;
}

// Simple localStorage-based visitor tracking
// For production, use a proper analytics service
export function VisitorMetrics() {
  const [metrics, setMetrics] = useState<VisitorMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateMetrics = () => {
      try {
        const stored = localStorage.getItem("portfolio_metrics");
        const now = new Date().toISOString();
        
        let data: VisitorMetrics;
        
        if (stored) {
          data = JSON.parse(stored);
          // Increment views
          data.views += 1;
          // Check if new visitor (using sessionStorage as a simple check)
          const isNewVisitor = !sessionStorage.getItem("has_visited");
          if (isNewVisitor) {
            data.visitors += 1;
            sessionStorage.setItem("has_visited", "true");
          }
          data.lastVisit = now;
        } else {
          data = {
            views: 1,
            visitors: 1,
            lastVisit: now,
            growth: 0,
          };
          sessionStorage.setItem("has_visited", "true");
        }

        // Calculate growth (simple example)
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        // This is a placeholder - in real implementation, track historical data
        data.growth = 12; // Example growth percentage

        localStorage.setItem("portfolio_metrics", JSON.stringify(data));
        setMetrics(data);
      } catch (error) {
        console.error("Failed to update metrics:", error);
      } finally {
        setLoading(false);
      }
    };

    updateMetrics();
  }, []);

  if (loading) {
    return (
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Portfolio Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-16 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!metrics) {
    return null;
  }

  return (
    <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Portfolio Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-4 flex-grow">
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Eye className="h-6 w-6 text-blue-500 mb-2 flex-shrink-0" />
            <div className="text-2xl font-bold">{metrics.views}</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Users className="h-6 w-6 text-green-500 mb-2 flex-shrink-0" />
            <div className="text-2xl font-bold">{metrics.visitors}</div>
            <div className="text-sm text-muted-foreground">Visitors</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Clock className="h-6 w-6 text-orange-500 mb-2 flex-shrink-0" />
            <div className="text-xs font-semibold text-center">
              {new Date(metrics.lastVisit).toLocaleDateString()}
            </div>
            <div className="text-sm text-muted-foreground">Last Visit</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <TrendingUp className="h-6 w-6 text-purple-500 mb-2 flex-shrink-0" />
            <div className="text-2xl font-bold text-green-600">+{metrics.growth}%</div>
            <div className="text-sm text-muted-foreground">Growth</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

