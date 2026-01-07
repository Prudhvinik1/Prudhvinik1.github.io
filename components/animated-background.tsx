"use client";

import { motion } from "framer-motion";
import { TerminalTicker } from "./terminal-ticker";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh base */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Animated floating orbs - Golden theme */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/20 blur-3xl"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-56 h-56 md:w-72 md:h-72 rounded-full bg-secondary/15 blur-3xl"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 40, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Subtle top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/30" />
    </div>
  );
}

export function HeroVisualElement() {
  return (
    <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
      <TerminalTicker />
    </div>
  );
}
