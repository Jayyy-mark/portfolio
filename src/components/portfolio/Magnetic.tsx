"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useReducedMotion as fmReduced } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  /** How strongly the element pulls toward the cursor (px) */
  strength?: number;
  className?: string;
}

/**
 * Subtly translates its child toward the cursor on hover.
 * Disabled for reduced-motion users and touch devices.
 */
export function Magnetic({ children, strength = 14, className }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced = fmReduced();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
