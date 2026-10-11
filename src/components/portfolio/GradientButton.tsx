"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "ghost";
type Size = "sm" | "md" | "lg";

export interface GradientButtonProps
  extends Omit<HTMLMotionProps<"a">, "href"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  /** Render as a button instead of an anchor */
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
  className?: string;
  /** Optional leading icon node */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const base =
  "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full tracking-tight whitespace-nowrap select-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "text-primary-foreground bg-gradient-to-r from-[oklch(0.85_0.16_195)] via-[oklch(0.78_0.18_240)] to-[oklch(0.70_0.20_295)] shadow-[0_8px_30px_-8px_oklch(0.55_0.18_240/0.6)] hover:shadow-[0_10px_40px_-8px_oklch(0.55_0.18_240/0.85)] hover:-translate-y-0.5",
  glass:
    "text-foreground glass-strong glass-highlight hover:-translate-y-0.5 hover:border-primary/40",
  ghost:
    "text-foreground/80 hover:text-foreground hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5 sm:text-base sm:px-6 sm:py-3",
  lg: "text-base px-7 py-3.5",
};

export const GradientButton = React.forwardRef<
  HTMLAnchorElement,
  GradientButtonProps
>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      type = "button",
      onClick,
      children,
      className,
      iconLeft,
      iconRight,
      ...rest
    },
    ref
  ) => {
    const cls = cn(base, variants[variant], sizes[size], className);

    const content = (
      <>
        {iconLeft}
        {children}
        {iconRight}
      </>
    );

    if (href !== undefined) {
      return (
        <motion.a
          ref={ref}
          href={href}
          onClick={onClick}
          className={cls}
          whileTap={{ scale: 0.97 }}
          {...rest}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as unknown as React.Ref<HTMLButtonElement>}
        type={type}
        onClick={onClick}
        className={cls}
        whileTap={{ scale: 0.97 }}
        {...(rest as HTMLMotionProps<"button">)}
      >
        {content}
      </motion.button>
    );
  }
);

GradientButton.displayName = "GradientButton";
