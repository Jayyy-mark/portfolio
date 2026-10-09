"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Calendar } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentMap: Record<Project["accent"], { ring: string; glow: string; from: string; to: string }> = {
  cyan: {
    ring: "hover:border-[oklch(0.85_0.16_195/0.5)]",
    glow: "group-hover:shadow-[0_0_30px_-8px_oklch(0.85_0.16_195/0.55)]",
    from: "from-[oklch(0.85_0.16_195/0.6)]",
    to: "to-[oklch(0.70_0.18_240/0.4)]",
  },
  violet: {
    ring: "hover:border-[oklch(0.70_0.20_295/0.5)]",
    glow: "group-hover:shadow-[0_0_30px_-8px_oklch(0.70_0.20_295/0.55)]",
    from: "from-[oklch(0.70_0.20_295/0.6)]",
    to: "to-[oklch(0.78_0.18_260/0.4)]",
  },
  blue: {
    ring: "hover:border-[oklch(0.72_0.18_240/0.5)]",
    glow: "group-hover:shadow-[0_0_30px_-8px_oklch(0.72_0.18_240/0.55)]",
    from: "from-[oklch(0.78_0.18_240/0.6)]",
    to: "to-[oklch(0.85_0.16_195/0.4)]",
  },
};

export const ProjectCard = React.forwardRef<
  HTMLDivElement,
  { project: Project; index?: number }
>(({ project, index = 0 }, ref) => {
  const accent = accentMap[project.accent];

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl glass glass-highlight transition-all duration-500",
        accent.ring,
        accent.glow
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* Gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.02_255/0.95)] via-[oklch(0.10_0.02_255/0.4)] to-transparent" />
        {/* Accent wash */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br mix-blend-overlay",
            accent.from,
            accent.to
          )}
        />

        {/* Top row: category + badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="rounded-full glass-strong glass-highlight px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
            {project.category}
          </span>
          {project.badge && (
            <span className="rounded-full glass-strong glass-highlight px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gradient-cyan">
              {project.badge}
            </span>
          )}
        </div>

        {/* Year */}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full glass-subtle px-2.5 py-1 text-[11px] text-muted-foreground">
          <Calendar className="h-3 w-3" /> {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm sm:text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md glass-subtle px-2.5 py-1 text-[11px] font-medium text-foreground/80"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-auto flex items-center gap-2 pt-2 border-t border-white/5">
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            aria-label={`View ${project.title} live`}
          >
            View Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${project.title} source code on GitHub`}
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.displayName = "ProjectCard";
