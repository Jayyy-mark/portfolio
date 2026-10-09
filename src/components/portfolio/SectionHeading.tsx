"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-2xl",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction="up">
          <span className="inline-flex items-center gap-2 rounded-full glass-subtle px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[oklch(0.85_0.16_195)] to-[oklch(0.70_0.20_295)] animate-pulse-glow" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.06}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.12}>
          <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-xl">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
