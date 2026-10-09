"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassVariant = "default" | "strong" | "subtle";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: GlassVariant;
  /** Adds the premium top highlight that reads as light on glass */
  highlight?: boolean;
  /** Enables a soft cyan/violet glow on hover */
  glow?: boolean | "cyan" | "violet";
  padding?: "none" | "sm" | "md" | "lg";
}

const variantClass: Record<GlassVariant, string> = {
  default: "glass",
  strong: "glass-strong",
  subtle: "glass-subtle",
};

const paddingClass: Record<NonNullable<GlassCardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      variant = "default",
      highlight = true,
      glow = false,
      padding = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const glowClass =
      glow === "cyan"
        ? "hover:shadow-[0_0_24px_-4px_oklch(0.85_0.16_195/0.55)] hover:border-[oklch(0.85_0.16_195/0.45)]"
        : glow === "violet"
        ? "hover:shadow-[0_0_24px_-4px_oklch(0.70_0.20_295/0.55)] hover:border-[oklch(0.70_0.20_295/0.45)]"
        : glow
        ? "glow-hover"
        : "";

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative rounded-2xl overflow-hidden transition-colors duration-300",
          variantClass[variant],
          highlight && "glass-highlight",
          paddingClass[padding],
          glowClass,
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
