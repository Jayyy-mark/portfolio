"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useCursorGlow } from "@/hooks/use-cursor-glow";

/**
 * Atmospheric backdrop for the entire site.
 * Fixed, pointer-events-none, sits behind everything.
 */
export function Background() {
  const cursor = useCursorGlow();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep base gradient layer */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,oklch(0.20_0.04_270)_0%,oklch(0.14_0.025_260)_45%,oklch(0.10_0.02_255)_100%)]" />

      {/* Ambient gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.55 0.18 280 / 0.55), transparent 65%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.60 0.16 220 / 0.5), transparent 65%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/4 h-[30rem] w-[30rem] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.55 0.16 195 / 0.45), transparent 65%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      {/* Noise / grain texture */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-soft-light"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" />
      </svg>

      {/* Cursor-following soft glow (desktop only) */}
      {cursor && (
        <div
          className="absolute h-[36rem] w-[36rem] rounded-full blur-[110px] transition-[left,top] duration-200 ease-out"
          style={{
            left: cursor.x - 288,
            top: cursor.y - 288,
            background:
              "radial-gradient(circle at center, oklch(0.72 0.18 240 / 0.18), transparent 60%)",
          }}
        />
      )}

      {/* Vignette to anchor content */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_60%,oklch(0.08_0.02_260/0.6)_100%)]" />
    </div>
  );
}
