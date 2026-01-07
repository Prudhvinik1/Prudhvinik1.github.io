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
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-emerald-500 to-emerald-600",
    "from-orange-500 to-orange-600",
    "from-pink-500 to-pink-600",
  ];
  return colors[index % colors.length];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 timeline-line hidden md:block" />

      <div className="space-y-8 md:space-y-12">
        {experiences.map((job, index) => (
          <TimelineItem
            key={index}
            job={job}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  job,
  index,
  isLeft,
}: {
  job: Experience;
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 1.11, 0.81, 0.99] }}
      className={`relative flex items-start gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Company logo placeholder - visible on mobile at left */}
      <div className="md:hidden flex-shrink-0 z-10">
        <motion.div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${getCompanyColor(
            index
          )} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {getCompanyInitials(job.company)}
        </motion.div>
      </div>

      {/* Content card */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Card className="border-2 glass-card hover-glow transition-all duration-300 group overflow-hidden relative">
            {/* Gradient border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none gradient-border" />

            <CardHeader className="pb-4">
              <div
                className={`flex flex-col ${
                  isLeft ? "md:items-end" : "md:items-start"
                } gap-2`}
              >
                <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                  {job.company}
                </CardTitle>
                <CardDescription className="text-base sm:text-lg font-medium">
                  {job.role}
                </CardDescription>
                <div
                  className={`flex flex-wrap items-center gap-2 ${
                    isLeft ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
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
            </CardHeader>
            <CardContent className="pt-0">
              <ul
                className={`list-none space-y-3 ${
                  isLeft ? "md:text-right" : "md:text-left"
                }`}
              >
                {job.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className={`flex items-start gap-3 ${
                      isLeft ? "md:flex-row-reverse" : ""
                    }`}
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

      {/* Center timeline dot - desktop only */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
        <motion.div
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${getCompanyColor(
            index
          )} flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-background`}
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {getCompanyInitials(job.company)}
        </motion.div>
      </div>

      {/* Empty space for alternating layout on desktop */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
