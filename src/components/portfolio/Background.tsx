"use client";

import { motion } from "framer-motion";
import { CursorGlow } from "./CursorGlow";

/**
 * Atmospheric backdrop for the entire site.
 * Fixed, pointer-events-none, sits behind everything.
 *
 * Performance: every layer here is either static (painted once) or
 * GPU-composited (transform/opacity only). Nothing in this tree
 * causes layout or repaint during scroll.
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep base gradient — static, painted once */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,oklch(0.20_0.04_270)_0%,oklch(0.14_0.025_260)_45%,oklch(0.10_0.02_255)_100%)]" />

      {/* Corner ambient gradients — static layer (moved off body
          so they don't repaint on scroll via background-attachment) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 15% 10%, oklch(0.40 0.16 280 / 0.35) 0%, transparent 60%), radial-gradient(50% 40% at 90% 15%, oklch(0.55 0.18 220 / 0.30) 0%, transparent 55%), radial-gradient(55% 60% at 80% 95%, oklch(0.50 0.16 200 / 0.28) 0%, transparent 60%), radial-gradient(40% 40% at 10% 90%, oklch(0.45 0.18 300 / 0.22) 0%, transparent 55%)",
        }}
      />

      {/* Ambient gradient orbs — transform/scale only, GPU-composited */}
      <motion.div
        className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full blur-[120px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.55 0.18 280 / 0.55), transparent 65%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full blur-[120px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.60 0.16 220 / 0.5), transparent 65%)",
        }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/4 h-[30rem] w-[30rem] rounded-full blur-[130px] will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.55 0.16 195 / 0.45), transparent 65%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid lines — static */}
      <div
        className="absolute inset-0 opacity-[0.16]"
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

      {/* Noise / grain texture — opacity only (no blend mode, which
          would force a per-pixel composite pass every frame) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.04]"
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

      {/* Cursor-following soft glow (isolated component) */}
      <CursorGlow />

      {/* Vignette — static */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_60%,oklch(0.08_0.02_260/0.6)_100%)]" />
    </div>
  );
}
