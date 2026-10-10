"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { Reveal, Stagger, itemVariants } from "./Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 scroll-mt-20 cv-auto"
      aria-label="Skills and technologies"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & technologies"
          title={
            <>
              The tools I reach for{" "}
              <span className="text-gradient">every day</span>
            </>
          }
          description="A pragmatic toolkit covering the full stack — from interfaces and design systems to the APIs and infrastructure behind them."
        />

        <Stagger
          className="mt-14 grid sm:grid-cols-2 gap-5 sm:gap-6"
          stagger={0.1}
          amount={0.15}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.id} variants={itemVariants}>
              <GlassCard
                variant="strong"
                padding="lg"
                glow={group.id === "frontend" ? "cyan" : group.id === "backend" ? "blue" : "violet"}
                className="h-full"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                      {group.blurb}
                    </p>
                  </div>
                  <span className="shrink-0 grid h-10 w-10 place-items-center rounded-xl glass-subtle glass-highlight text-xs font-semibold text-muted-foreground">
                    {group.skills.length}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.92, y: 8 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.04 * i,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ y: -2 }}
                      className="group inline-flex items-center gap-2 rounded-xl glass-subtle glass-highlight px-3 py-2 text-sm font-medium cursor-default transition-colors hover:border-primary/40 hover:bg-white/[0.07]"
                    >
                      <span
                        aria-hidden="true"
                        className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 text-xs font-bold text-gradient-cyan"
                      >
                        {skill.icon}
                      </span>
                      <span className="text-foreground/90">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </Stagger>

        {/* Subtle footnote */}
        <Reveal direction="up" delay={0.15}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Always learning — currently exploring{" "}
            <span className="text-foreground/90 font-medium">
              edge runtimes, WebGPU, and AI-native interfaces
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
