"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { GlassCard } from "./GlassCard";
import { Reveal, Stagger, itemVariants } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 scroll-mt-20 cv-auto"
      aria-label="About"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="A little about me"
          title={
            <>
              Designer-turned-engineer with a{" "}
              <span className="text-gradient">soft spot for detail</span>
            </>
          }
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Visual */}
          <div className="lg:col-span-5">
            <Reveal direction="right" duration={0.8}>
              <GlassCard variant="strong" padding="none" className="overflow-hidden">
                {/* Composition */}
                <div className="relative aspect-[5/6] w-full">
                  {/* Gradient mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,oklch(0.55_0.18_280/0.7),transparent_55%),radial-gradient(100%_70%_at_100%_30%,oklch(0.55_0.18_220/0.6),transparent_55%),radial-gradient(120%_90%_at_50%_100%,oklch(0.55_0.18_195/0.5),transparent_60%)]" />
                  {/* Grid lines */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Center monogram */}
                  <div className="absolute inset-0 grid place-items-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="relative"
                    >
                      <span className="absolute -inset-6 rounded-full bg-gradient-to-br from-[oklch(0.85_0.16_195/0.4)] to-[oklch(0.70_0.20_295/0.4)] blur-2xl" />
                      <span className="relative font-display text-[7rem] sm:text-[9rem] font-bold tracking-tighter text-gradient leading-none">
                        {profile.monogram}
                      </span>
                    </motion.div>
                  </div>

                  {/* Floating chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute left-4 top-4 animate-float"
                  >
                    <div className="glass-subtle glass-highlight rounded-xl px-3 py-2 text-xs font-medium">
                      ✦ Motion-led
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="absolute right-4 top-1/3 animate-float-slow"
                  >
                    <div className="glass-subtle glass-highlight rounded-xl px-3 py-2 text-xs font-medium">
                      ♿ Accessible
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute left-6 bottom-6 animate-float"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="glass-subtle glass-highlight rounded-xl px-3 py-2 text-xs font-medium">
                      ⚡ Performant
                    </div>
                  </motion.div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Bio + stats + philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal direction="up">
              <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 text-pretty">
                {profile.bio.short}
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
                {profile.bio.long}
              </p>
            </Reveal>

            {/* Stats */}
            <Stagger
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
              stagger={0.07}
            >
              {profile.stats.map((s) => (
                <motion.div key={s.label} variants={itemVariants}>
                  <GlassCard
                    padding="md"
                    glow="cyan"
                    className="text-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <p className="font-display text-3xl sm:text-4xl font-bold text-gradient-cyan">
                      {s.value}
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
                      {s.label}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </Stagger>

            {/* Philosophy */}
            <Reveal direction="up" delay={0.1}>
              <GlassCard variant="strong" padding="lg" glow="violet">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.85_0.16_195)] to-[oklch(0.70_0.20_295)] text-primary-foreground">
                    <Quote className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base sm:text-lg font-medium leading-relaxed text-foreground/90 text-pretty">
                      “{profile.bio.philosophy}”
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <Sparkles className="h-3.5 w-3.5" /> Working philosophy
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
