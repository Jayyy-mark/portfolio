"use client";

import * as React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="relative mt-auto border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand + closing */}
          <div className="space-y-3">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="inline-flex items-center gap-2.5"
              aria-label={`${profile.name} — back to top`}
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.85_0.16_195)] via-[oklch(0.72_0.18_240)] to-[oklch(0.70_0.20_295)] text-sm font-bold text-primary-foreground shadow-[0_6px_18px_-6px_oklch(0.55_0.18_240/0.7)]">
                {profile.monogram}
              </span>
              <span className="text-base font-semibold tracking-tight">
                {profile.name}
              </span>
            </a>
            <p className="max-w-xs text-sm text-muted-foreground text-pretty">
              {profile.role}. Building thoughtful interfaces from{" "}
              {profile.location}.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="md:justify-self-center">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {profile.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials + back to top */}
          <div className="md:justify-self-end space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Connect
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.socials.map((s) => (
                  <SocialIcon key={s.label} social={s} size="sm" />
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={scrollTop}
              className="group inline-flex items-center gap-2 rounded-full glass-subtle glass-highlight px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Designed &amp; built with
            <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400/80" />
            using React, Tailwind &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
