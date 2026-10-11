"use client";

import { useEffect, useState } from "react";

/**
 * Smoothly tracks the mouse position via a passive rAF loop.
 * Disabled on touch devices (no hover capability) and for
 * reduced-motion users. Returns null until the first mouse move.
 */
export function useCursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip on touch-only devices.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;

    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        raf = 0;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return pos;
}
