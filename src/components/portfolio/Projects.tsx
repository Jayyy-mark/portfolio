"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import { projectCategories, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type Filter = "All" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const reduced = useReducedMotion();

  const filtered = React.useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 scroll-mt-20 cv-auto"
      aria-label="Featured projects"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Projects I&apos;m <span className="text-gradient">proud of</span>
            </>
          }
          description="A selection of recent work — from SaaS dashboards and mobile fintech to data visualization and generative experiments."
        />

        {/* Filters */}
        <Reveal direction="up" delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {projectCategories.map((cat) => {
              const isActive = filter === cat;
              const count =
                cat === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[oklch(0.85_0.16_195)] via-[oklch(0.78_0.18_240)] to-[oklch(0.70_0.20_295)] shadow-[0_8px_24px_-8px_oklch(0.55_0.18_240/0.7)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    {cat === "All" && <LayoutGrid className="h-3.5 w-3.5" />}
                    {cat}
                    <span
                      className={cn(
                        "text-[10px] tabular-nums rounded-full px-1.5 py-0.5",
                        isActive
                          ? "bg-white/20"
                          : "bg-white/5 text-muted-foreground"
                      )}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={reduced ? 0 : i}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
