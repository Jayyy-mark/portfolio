"use client";

import * as React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Mail,
  Globe,
  type LucideIcon,
} from "lucide-react";
import type { SocialLink } from "@/data/profile";

const iconMap: Record<SocialLink["icon"], LucideIcon> = {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Mail,
  Globe,
};

export interface SocialIconProps {
  social: SocialLink;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClass = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

const iconSize = {
  sm: 16,
  md: 18,
  lg: 20,
};

export function SocialIcon({
  social,
  size = "md",
  className,
}: SocialIconProps) {
  const Icon = iconMap[social.icon];
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${social.label} (opens in a new tab)`}
      className={`group relative grid ${sizeClass[size]} place-items-center rounded-xl glass-subtle glass-highlight text-foreground/80 hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className ?? ""}`}
    >
      <Icon size={iconSize[size]} className="relative z-10" />
      <span className="pointer-events-none absolute -inset-1 -z-10 rounded-xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-[oklch(0.85_0.16_195)] to-[oklch(0.70_0.20_295)]" />
    </a>
  );
}
