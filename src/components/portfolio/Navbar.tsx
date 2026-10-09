"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { GradientButton } from "./GradientButton";
import { Magnetic } from "./Magnetic";

const navIds = profile.nav.map((n) => n.id);

export function Navbar() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(navIds, 80);
  const [open, setOpen] = React.useState(false);

  // Lock body scroll when the mobile sheet is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "w-full max-w-6xl flex items-center justify-between gap-4 rounded-2xl px-3 sm:px-5 py-2.5 transition-all duration-500",
            scrolled
              ? "glass-strong glass-highlight shadow-[0_10px_40px_-12px_oklch(0.05_0.02_260/0.7)]"
              : "glass-subtle"
          )}
        >
          {/* Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group flex items-center gap-2.5 rounded-xl px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`${profile.name} — home`}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.85_0.16_195)] via-[oklch(0.72_0.18_240)] to-[oklch(0.70_0.20_295)] text-sm font-bold text-primary-foreground shadow-[0_6px_18px_-6px_oklch(0.55_0.18_240/0.7)]">
              {profile.monogram}
              <span className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 bg-gradient-to-br from-[oklch(0.85_0.16_195)] to-[oklch(0.70_0.20_295)] -z-10" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">
                {profile.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {profile.role.split("&")[0].trim()}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {profile.nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-lg glass-subtle border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Magnetic strength={10} className="hidden sm:block">
              <GradientButton
                href="#contact"
                size="sm"
                variant="primary"
                onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, "contact")}
                iconRight={<Sparkles className="h-4 w-4" />}
              >
                Let&apos;s Talk
              </GradientButton>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid md:hidden h-10 w-10 place-items-center rounded-xl glass-subtle glass-highlight text-foreground hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu backdrop"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: -24, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -24, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-20 inset-x-3 mx-auto max-w-md glass-strong glass-highlight rounded-3xl p-4 shadow-2xl"
            >
              <ul className="flex flex-col">
                {profile.nav.map((item, i) => {
                  const isActive = active === item.id;
                  return (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors",
                          isActive
                            ? "bg-white/10 text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        )}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[oklch(0.85_0.16_195)] to-[oklch(0.70_0.20_295)]" />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-3 pt-3 border-t border-white/10">
                <GradientButton
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={(e) =>
                    handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, "contact")
                  }
                  iconRight={<Sparkles className="h-4 w-4" />}
                >
                  Let&apos;s Talk
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
