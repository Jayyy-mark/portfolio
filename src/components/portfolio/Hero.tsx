"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { GradientButton } from "./GradientButton";
import { Magnetic } from "./Magnetic";
import { SocialIcon } from "./SocialIcon";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const { heroHeadline } = profile;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-32 sm:pt-36 lg:pt-40 pb-24"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Text column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 rounded-full glass-subtle glass-highlight px-4 py-1.5 text-xs sm:text-sm font-medium"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-foreground/80">{profile.availability}</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-muted-foreground border-l border-white/10 pl-3">
                <MapPin className="h-3 w-3" /> {profile.location}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] lg:leading-[1.04] font-bold tracking-tight text-balance"
            >
              {heroHeadline.prefix}{" "}
              <span className="text-gradient animate-gradient-pan bg-gradient-to-r from-[oklch(0.92_0.13_195)] via-[oklch(0.78_0.18_280)] to-[oklch(0.85_0.16_220)]">
                {heroHeadline.highlights.join(" ")}
              </span>{" "}
              <span className="text-foreground/90">{heroHeadline.suffix}</span>
            </motion.h1>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty"
            >
              {profile.heroIntro}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Magnetic strength={12}>
                <GradientButton
                  href="#projects"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowUpRight className="h-4 w-4" />}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore My Work
                </GradientButton>
              </Magnetic>
              <Magnetic strength={12}>
                <GradientButton
                  href="#contact"
                  variant="glass"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Let&apos;s Connect
                </GradientButton>
              </Magnetic>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Find me
              </span>
              <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-white/20 to-transparent" />
              <div className="flex items-center gap-2.5">
                {profile.socials.map((s) => (
                  <SocialIcon key={s.label} social={s} size="sm" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer rotating gradient ring */}
              <div className="relative aspect-square">
                <div
                  className="absolute -inset-3 rounded-[2rem] opacity-60 blur-2xl bg-gradient-to-br from-[oklch(0.55_0.18_280/0.6)] via-[oklch(0.55_0.18_220/0.4)] to-[oklch(0.55_0.18_195/0.5)]"
                  aria-hidden="true"
                />
                <div
                  className={reduced ? "" : "animate-spin-slow will-change-transform"}
                  style={{
                    background:
                      "conic-gradient(from 0deg, oklch(0.85 0.16 195), oklch(0.70 0.20 295), oklch(0.78 0.18 240), oklch(0.85 0.16 195))",
                  }}
                  aria-hidden="true"
                >
                  <div className="h-full w-full rounded-[2rem] p-[1.5px] [mask:linear-gradient(black,black)_content-box,linear-gradient(black,black)] [mask-composite:exclude]">
                    <div className="h-full w-full" />
                  </div>
                </div>

                {/* Glass card holding avatar */}
                <div className="absolute inset-0 rounded-[2rem] glass-strong glass-highlight p-2 overflow-hidden">
                  <div className="relative h-full w-full rounded-[1.6rem] overflow-hidden">
                    <Image
                      src="/images/hero-avatar.png"
                      alt="Abstract glassmorphism profile visual representing Aria Vance"
                      fill
                      priority
                      sizes="(max-width: 1024px) 28rem, 40rem"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.10_0.02_255/0.5)] via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating chip: name tag */}
                <motion.div
                  initial={{ opacity: 0, y: 12, x: -10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className={reduced ? "" : "animate-float"}
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="absolute -left-4 sm:-left-8 top-10 glass-strong glass-highlight rounded-2xl px-4 py-3 shadow-xl">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.85_0.16_195)] to-[oklch(0.70_0.20_295)] text-primary-foreground">
                        <Sparkles className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground">Currently</p>
                        <p className="text-sm font-semibold leading-none mt-1">
                          Open to work
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating chip: tech tag */}
                <motion.div
                  initial={{ opacity: 0, y: -12, x: 10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.75, duration: 0.7 }}
                  className={reduced ? "" : "animate-float-slow"}
                >
                  <div className="absolute -right-3 sm:-right-6 bottom-10 glass-strong glass-highlight rounded-2xl px-4 py-3 shadow-xl">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Stack
                    </p>
                    <p className="text-sm font-semibold mt-1">React · TS · Motion</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full p-2"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] uppercase tracking-[0.18em]">Scroll</span>
          <span className="relative grid h-9 w-5 place-items-start rounded-full border border-white/15 p-1">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-scroll-hint" />
          </span>
          <ArrowDown className="h-3 w-3 -mt-1" />
        </motion.a>
      </div>
    </section>
  );
}
