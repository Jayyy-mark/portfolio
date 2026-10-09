/**
 * ============================================================
 *  PROFILE CONFIG — Edit this file to personalize the portfolio
 * ============================================================
 *  All personal info, social links, and copy live here so you
 *  can rebrand the entire site from one place.
 */

export interface SocialLink {
  label: string;
  href: string;
  /** Lucide icon name — must match an imported icon in the components */
  icon:
    | "Github"
    | "Linkedin"
    | "Twitter"
    | "Dribbble"
    | "Mail"
    | "Globe";
}

export const profile = {
  /** Monogram shown in the navbar + footer */
  monogram: "AV",
  name: "Aria Vance",
  firstName: "Aria",
  role: "Frontend Developer & Digital Experience Designer",
  /** Short tagline shown under the hero headline */
  tagline:
    "I design and engineer premium, accessible web experiences — where motion, type, and interface meet intention.",
  location: "Lisbon, Portugal",
  email: "hello@ariavance.dev",
  availability: "Available for opportunities",
  /** Hero headline — `highlight` words receive the gradient treatment */
  heroHeadline: {
    prefix: "Hi, I'm Aria — I Build",
    highlights: ["Digital", "Experiences"],
    suffix: "that feel alive.",
  },
  heroIntro:
    "Frontend engineer and digital designer with 7+ years crafting interfaces for startups, design studios, and enterprise teams. I blend motion, systems thinking, and obsessive attention to detail to ship products people love to use.",
  resumeUrl: "#",
  bio: {
    short:
      "I'm a frontend engineer and designer based in Lisbon. For the last seven years I've been shipping fast, accessible, and visually distinctive web products — from early-stage SaaS dashboards to immersive marketing sites and design systems used by hundreds of engineers.",
    long: "I started as a graphic designer, fell in love with the web's kinetic potential, and never looked back. Today I work at the intersection of engineering and design: I write production React and TypeScript, prototype in Figma, and obsess over the micro-interactions that make a product feel premium. I believe great interfaces are quiet — they get out of the way so the work can speak.",
    philosophy:
      "Build with restraint, animate with intent, and never ship something you wouldn't use yourself.",
  },
  /** Quick stats shown as glass cards in the About section */
  stats: [
    { value: "7+", label: "Years of experience" },
    { value: "60+", label: "Shipped projects" },
    { value: "24", label: "Technologies" },
    { value: "12", label: "Open-source repos" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "Dribbble" },
  ] satisfies SocialLink[],
  /** Navbar nav items — `id` must match the section element's `id` */
  nav: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ] as const,
} as const;

export type Profile = typeof profile;
