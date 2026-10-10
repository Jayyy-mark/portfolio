"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 scroll-mt-20 cv-auto"
      aria-label="Experience and journey"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience & journey"
          title={
            <>
              The path that brought me{" "}
              <span className="text-gradient">here</span>
            </>
          }
          description="A timeline of roles, milestones, and the moments that shaped how I build today. Sample entries — swap with your own."
        />

        <div className="mt-14 relative">
          {/* Vertical glowing line — desktop centered, mobile left */}
          <div
            className="absolute top-0 bottom-0 left-4 sm:left-1/2 sm:-translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent"
            aria-hidden="true"
          >
            <motion.div
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[oklch(0.85_0.16_195)] via-[oklch(0.70_0.20_295)] to-transparent blur-md"
              initial={{ y: "-100%" }}
              whileInView={{ y: "200%" }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>

          <ol className="space-y-10 sm:space-y-14">
            {experience.map((item, i) => {
              const isLeft = i % 2 === 0;
              const Icon = item.id === "education" ? GraduationCap : Briefcase;
              return (
                <li
                  key={item.id}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-12"
                >
                  {/* Dot */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "absolute z-10 top-1 left-4 sm:left-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full glass-strong glass-highlight",
                      item.highlight
                        ? "ring-2 ring-[oklch(0.85_0.16_195/0.55)] shadow-[0_0_18px_-2px_oklch(0.85_0.16_195/0.7)]"
                        : "ring-1 ring-white/10"
                    )}
                  >
                    {item.highlight && (
                      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.85_0.16_195/0.45)] to-[oklch(0.70_0.20_295/0.45)] blur-md -z-10 animate-pulse-glow" />
                    )}
                    <Icon
                      className={cn(
                        "h-4 w-4",
                        item.highlight
                          ? "text-gradient-cyan"
                          : "text-foreground/80"
                      )}
                    />
                  </motion.span>

                  {/* Card */}
                  <div
                    className={cn(
                      "pl-14 sm:pl-0",
                      isLeft ? "sm:col-start-1" : "sm:col-start-2"
                    )}
                  >
                    <Reveal direction={isLeft ? "right" : "left"} duration={0.6}>
                      <div
                        className={cn(
                          "group relative rounded-2xl glass glass-highlight p-5 sm:p-6 transition-all duration-500 hover:border-white/20 hover:-translate-y-1",
                          item.highlight
                            ? "hover:shadow-[0_0_30px_-8px_oklch(0.70_0.20_295/0.55)]"
                            : "hover:shadow-[0_0_24px_-10px_oklch(0.55_0.18_240/0.45)]"
                        )}
                      >
                        {/* Mobile-friendly connector */}
                        <span
                          aria-hidden="true"
                          className="sm:hidden absolute left-0 top-5 -translate-x-[18px] h-px w-4 bg-white/15"
                        />
                        {item.highlight && (
                          <span className="absolute -top-2 left-5 inline-flex items-center gap-1 rounded-full glass-strong glass-highlight px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gradient-cyan">
                            <Sparkles className="h-3 w-3" /> Current
                          </span>
                        )}

                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">
                            {item.role}
                          </h3>
                          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                            {item.date}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-gradient-cyan">
                          {item.organization}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                          {item.description}
                        </p>

                        <ul className="mt-4 flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-md glass-subtle px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
