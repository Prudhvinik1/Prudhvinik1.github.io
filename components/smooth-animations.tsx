"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

// Fade in animation on scroll
export function FadeInOnScroll({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99] // Custom easing for smooth motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger animation for lists
export function StaggerContainer({ 
  children, 
  className = ""
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className = ""
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 1.11, 0.81, 0.99],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Smooth scale on hover
export function ScaleOnHover({ 
  children, 
  scale = 1.05,
  className = ""
}: { 
  children: ReactNode; 
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Smooth lift on hover
export function LiftOnHover({ 
  children, 
  className = ""
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll effect (subtle)
export function ParallaxScroll({ 
  children, 
  speed = 0.5,
  className = ""
}: { 
  children: ReactNode; 
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
export function TextReveal({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

// Smooth fade in
export function FadeIn({ 
  children, 
  delay = 0,
  duration = 0.6,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Slide in from direction
export function SlideIn({ 
  children, 
  direction = "bottom",
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  direction?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}) {
  const directions = {
    top: { y: -50 },
    bottom: { y: 50 },
    left: { x: -50 },
    right: { x: 50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

