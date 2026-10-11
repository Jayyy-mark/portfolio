"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the user has scrolled past `threshold` px.
 * Throttled to one rAF per frame and only updates state on change.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      setScrolled(window.scrollY > threshold);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return; // already scheduled for this frame
      raf = requestAnimationFrame(update);
    };

    update(); // sync initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return scrolled;
}
