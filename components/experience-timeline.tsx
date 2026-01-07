"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

function getCompanyInitials(company: string): string {
  return company
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getCompanyColor(index: number): string {
  const colors = [
    "from-amber-500 to-yellow-500",
    "from-orange-500 to-amber-500",
    "from-yellow-500 to-orange-400",
    "from-amber-400 to-yellow-400",
    "from-orange-400 to-amber-400",
  ];
  return colors[index % colors.length];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line - left aligned */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 timeline-line" />

      <div className="space-y-8 md:space-y-10">
        {experiences.map((job, index) => (
          <TimelineItem
            key={index}
            job={job}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  job,
  index,
}: {
  job: Experience;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 1.11, 0.81, 0.99] }}
      className="relative flex items-start gap-4 md:gap-6 pl-2"
    >
      {/* Company logo placeholder */}
      <div className="flex-shrink-0 z-10 relative">
        <motion.div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${getCompanyColor(
            index
          )} flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg border-4 border-background`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {getCompanyInitials(job.company)}
        </motion.div>
      </div>

      {/* Content card */}
      <div className="flex-1 pb-2">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="border-2 glass-card hover-glow transition-all duration-300 group overflow-hidden relative">
            {/* Gradient border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border" />

            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="space-y-1.5 flex-grow">
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                    {job.company}
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg font-medium">
                    {job.role}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {job.period}
                    </Badge>
                    {job.location && (
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="list-none space-y-3">
                {job.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
