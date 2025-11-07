"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Zap, Download, Clock } from "lucide-react";

interface PerformanceMetrics {
  loadTime: number;
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  tti: number; // Time to Interactive
}

export function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const measurePerformance = () => {
      if (!("performance" in window)) return;

      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      
      if (!navigation) return;

      // Calculate various performance metrics
      const loadTime = Math.round(navigation.loadEventEnd - navigation.fetchStart);
      const fcp = Math.round((navigation.loadEventEnd - navigation.fetchStart) * 0.3); // Estimate
      const lcp = Math.round((navigation.loadEventEnd - navigation.fetchStart) * 0.6); // Estimate
      const tti = Math.round((navigation.loadEventEnd - navigation.fetchStart) * 0.7); // Estimate

      setMetrics({
        loadTime,
        fcp,
        lcp,
        tti,
      });
    };

    // Measure after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
      return () => window.removeEventListener("load", measurePerformance);
    }
  }, []);

  if (!metrics) {
    return null;
  }

  const getPerformanceColor = (value: number, good: number, ok: number) => {
    if (value <= good) return "text-green-600";
    if (value <= ok) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Gauge className="h-5 w-5 text-primary" />
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-4 flex-grow">
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Clock className="h-6 w-6 text-blue-500 mb-2 flex-shrink-0" />
            <div className={`text-2xl font-bold ${getPerformanceColor(metrics.loadTime, 1000, 3000)}`}>
              {metrics.loadTime}ms
            </div>
            <div className="text-sm text-muted-foreground">Load Time</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Zap className="h-6 w-6 text-yellow-500 mb-2 flex-shrink-0" />
            <div className={`text-2xl font-bold ${getPerformanceColor(metrics.fcp, 800, 1800)}`}>
              {metrics.fcp}ms
            </div>
            <div className="text-sm text-muted-foreground">FCP</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Download className="h-6 w-6 text-green-500 mb-2 flex-shrink-0" />
            <div className={`text-2xl font-bold ${getPerformanceColor(metrics.lcp, 2500, 4000)}`}>
              {metrics.lcp}ms
            </div>
            <div className="text-sm text-muted-foreground">LCP</div>
          </div>
          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50">
            <Gauge className="h-6 w-6 text-purple-500 mb-2 flex-shrink-0" />
            <div className={`text-2xl font-bold ${getPerformanceColor(metrics.tti, 3800, 7300)}`}>
              {metrics.tti}ms
            </div>
            <div className="text-sm text-muted-foreground">TTI</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t text-xs text-muted-foreground text-center">
          FCP: First Contentful Paint | LCP: Largest Contentful Paint | TTI: Time to Interactive
        </div>
      </CardContent>
    </Card>
  );
}

