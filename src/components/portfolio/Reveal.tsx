"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  as?: keyof typeof motion;
}

const offset = (d: Direction) => {
  switch (d) {
    case "up":
      return { y: 28, x: 0 };
    case "down":
      return { y: -28, x: 0 };
    case "left":
      return { y: 0, x: 40 };
    case "right":
      return { y: 0, x: -40 };
    case "none":
      return { y: 0, x: 0 };
  }
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(reduced ? { x: 0, y: 0 } : offset(direction)),
      filter: reduced ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export function Stagger({
  children,
  delay = 0,
  stagger = 0.08,
  once = true,
  amount = 0.2,
  className,
}: StaggerProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren: reduced ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
