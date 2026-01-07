"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import {
  Code,
  Monitor,
  Server,
  Brain,
  Cloud,
  Database,
  LucideIcon,
} from "lucide-react";
import { getSkillIcon } from "@/lib/skill-icons";

interface SkillCategoryCardProps {
  title: string;
  skills: string[];
  icon?: "languages" | "frontend" | "backend" | "mlAi" | "infrastructure" | "databases";
  index?: number;
}

const categoryIcons: Record<string, LucideIcon> = {
  languages: Code,
  frontend: Monitor,
  backend: Server,
  mlAi: Brain,
  infrastructure: Cloud,
  databases: Database,
};

const categoryColors: Record<string, string> = {
  languages: "from-blue-500 to-cyan-500",
  frontend: "from-purple-500 to-pink-500",
  backend: "from-green-500 to-emerald-500",
  mlAi: "from-orange-500 to-yellow-500",
  infrastructure: "from-indigo-500 to-violet-500",
  databases: "from-rose-500 to-red-500",
};

export function SkillCategoryCard({ title, skills, icon = "languages", index = 0 }: SkillCategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const CategoryIcon = categoryIcons[icon] || Code;
  const gradientColor = categoryColors[icon] || "from-blue-500 to-purple-500";

  // Show first 6 skills by default, expand to show all
  const visibleSkills = isExpanded ? skills : skills.slice(0, 6);
  const hasMore = skills.length > 6;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 1.11, 0.81, 0.99] }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Card className="border-2 glass-card hover-glow transition-all duration-300 h-full flex flex-col group overflow-hidden relative">
          {/* Gradient accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientColor}`} />

          <CardHeader className="pb-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <motion.div
                className={`p-2.5 rounded-xl bg-gradient-to-br ${gradientColor} shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CategoryIcon className="h-5 w-5 text-white" />
              </motion.div>
              <CardTitle className="text-lg sm:text-xl font-semibold">
                {title}
              </CardTitle>
              <Badge variant="secondary" className="ml-auto text-xs">
                {skills.length}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-5 flex-grow flex flex-col">
            <motion.div layout className="flex flex-wrap gap-2.5">
              <AnimatePresence mode="popLayout">
                {visibleSkills.map((skill, skillIndex) => {
                  const Icon = getSkillIcon(skill);
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.03,
                        ease: [0.21, 1.11, 0.81, 0.99],
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-xs sm:text-sm px-3 py-2 bg-background/50 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default flex items-center gap-1.5 group/badge"
                      >
                        <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center text-current opacity-70 group-hover/badge:opacity-100 transition-opacity">
                          <Icon />
                        </span>
                        <span className="leading-tight">{skill}</span>
                      </Badge>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {/* Show more / less button */}
            {hasMore && (
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{isExpanded ? "Show less" : `+${skills.length - 6} more`}</span>
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </motion.button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
