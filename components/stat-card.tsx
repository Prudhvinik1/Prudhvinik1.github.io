"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description?: string;
  variant?: "default" | "blue" | "purple" | "dark";
}

function parseValue(value: string): { prefix: string; number: number; suffix: string; decimals: number } {
  // Extract prefix (like $), number, and suffix (like +, K, M, %)
  const match = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (match) {
    const numberStr = match[2];
    const decimals = numberStr.includes('.') ? numberStr.split('.')[1].length : 0;
    return {
      prefix: match[1] || "",
      number: parseFloat(numberStr),
      suffix: match[3] || "",
      decimals,
    };
  }
  return { prefix: "", number: 0, suffix: value, decimals: 0 };
}

export function StatCard({ icon, value, label, description, variant = "default" }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { prefix, number, suffix, decimals } = parseValue(value);

  const variantClasses = {
    default: "glass-card hover:shadow-glow",
    blue: "glass-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 hover:shadow-glow",
    purple: "glass-card bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 hover:shadow-glow",
    dark: "bg-chart-dark/90 backdrop-blur-xl text-white border-chart-dark hover:shadow-glow",
  };

  const iconBgClasses = {
    default: "bg-primary/10 group-hover:bg-primary/20",
    blue: "bg-primary/20 group-hover:bg-primary/30",
    purple: "bg-accent/20 group-hover:bg-accent/30",
    dark: "bg-white/10 group-hover:bg-white/20",
  };

  const iconColorClasses = {
    default: "text-primary",
    blue: "text-primary",
    purple: "text-accent",
    dark: "text-white",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.21, 1.11, 0.81, 0.99] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="h-full"
    >
      <Card className={`border-2 transition-all duration-300 group h-full overflow-hidden relative ${variantClasses[variant]}`}>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <CardContent className="pt-6 pb-6 flex flex-col items-center text-center space-y-4 h-full relative z-10">
          <motion.div
            className={`p-4 rounded-2xl transition-colors flex-shrink-0 ${iconBgClasses[variant]} ${iconColorClasses[variant]}`}
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <div className="space-y-1 flex-grow flex flex-col justify-center">
            <div className={`text-4xl md:text-5xl font-bold font-heading ${variant === "dark" ? "text-white" : "gradient-text"}`}>
              {isInView ? (
                <>
                  {prefix}
                  <CountUp
                    end={number}
                    duration={2}
                    decimals={decimals}
                    separator=","
                    useEasing
                    easingFn={(t, b, c, d) => {
                      // Custom easing function for smooth count up
                      t /= d;
                      return c * t * t * t + b;
                    }}
                  />
                  {suffix}
                </>
              ) : (
                value
              )}
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
    </motion.div>
  );
}
