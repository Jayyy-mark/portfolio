"use client";

import { useCursorGlow } from "@/hooks/use-cursor-glow";

/**
 * A soft glow that follows the cursor. Lives on the fixed background
 * layer, composited via `transform: translate3d` (no layout thrash).
 * Disabled on touch devices and for reduced-motion users (see hook).
 *
 * Isolated in its own component so cursor movement only re-renders
 * this small subtree, not the entire Background.
 */
export function CursorGlow() {
  const cursor = useCursorGlow();

  if (!cursor) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[34rem] w-[34rem] rounded-full blur-[100px] will-change-transform"
      style={{
        transform: `translate3d(${cursor.x - 272}px, ${cursor.y - 272}px, 0)`,
        background:
          "radial-gradient(circle at center, oklch(0.72 0.18 240 / 0.16), transparent 60%)",
      }}
    />
  );
}
