"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { type: "command", text: "> snikku.init()" },
  { type: "output", text: "status: LOOKING_FOR_CHALLENGES" },
  { type: "output", text: 'specialized_in: ["High-Scale Go/Java", "ML Systems", "Distributed Engines"]' },
  { type: "output", text: "record_metric: 50k_requests_per_minute_handled" },
  { type: "output", text: "current_location: Austin, TX" },
  { type: "command", text: "> system.ready()" },
];

export function TerminalTicker() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      // Reset and loop
      const timeout = setTimeout(() => {
        setVisibleLines(0);
        setTypingIndex(0);
        setCurrentText("");
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const currentLine = terminalLines[visibleLines];
    const fullText = currentLine.text;

    if (typingIndex < fullText.length) {
      intervalRef.current = setTimeout(() => {
        setCurrentText(fullText.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, currentLine.type === "command" ? 50 : 20);
    } else {
      // Line complete, move to next
      const timeout = setTimeout(() => {
        setVisibleLines(visibleLines + 1);
        setTypingIndex(0);
        setCurrentText("");
      }, currentLine.type === "command" ? 600 : 300);
      return () => clearTimeout(timeout);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [visibleLines, typingIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="w-full max-w-lg"
    >
      <div className="rounded-xl overflow-hidden border border-border/50 shadow-xl">
        {/* Terminal header */}
        <div className="bg-chart-dark/90 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground/70 ml-2 font-mono">
            system_vitals.sh
          </span>
        </div>

        {/* Terminal content */}
        <div className="bg-chart-dark/95 p-4 font-mono text-sm min-h-[180px]">
          {terminalLines.slice(0, visibleLines).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${
                line.type === "command"
                  ? "text-primary font-semibold"
                  : "text-emerald-400/90 pl-2"
              } leading-relaxed`}
            >
              {line.text}
            </motion.div>
          ))}

          {/* Currently typing line */}
          {visibleLines < terminalLines.length && (
            <div
              className={`${
                terminalLines[visibleLines].type === "command"
                  ? "text-primary font-semibold"
                  : "text-emerald-400/90 pl-2"
              } leading-relaxed`}
            >
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary/80 ml-0.5 align-middle"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
