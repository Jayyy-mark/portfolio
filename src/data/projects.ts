/**
 * ============================================================
 *  PROJECTS DATA — Editable project portfolio entries
 * ============================================================
 *  Add / remove / reorder projects freely. Image paths point
 *  to files in /public/images. Categories drive the filter UI.
 */

export type ProjectCategory = "Web Apps" | "UI/UX" | "Experiments";

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Used by the category filter */
  category: ProjectCategory;
  /** Tech badges shown on the card */
  stack: string[];
  /** Live project URL — use "#" if not yet deployed */
  liveUrl: string;
  /** Source code URL — use null to hide the GitHub link */
  repoUrl: string | null;
  /** Path inside /public, e.g. "/images/project-1.png" */
  image: string;
  /** Year of completion */
  year: string;
  /** Optional ribbon, e.g. "Featured", "Case study" */
  badge?: string;
  /** Tint applied over the thumbnail on hover */
  accent: "cyan" | "violet" | "blue";
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Apps",
  "UI/UX",
  "Experiments",
];

export const projects: Project[] = [
  {
    id: "lumen-analytics",
    title: "Lumen Analytics",
    description:
      "A real-time SaaS analytics dashboard for product teams. Glassmorphism interface, streaming charts, and a fully themeable design system used across 4 surfaces.",
    category: "Web Apps",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "tRPC", "Postgres"],
    liveUrl: "#",
    repoUrl: "https://github.com",
    image: "/images/project-1.png",
    year: "2024",
    badge: "Featured",
    accent: "cyan",
  },
  {
    id: "halcyon-banking",
    title: "Halcyon Banking",
    description:
      "A mobile-first fintech experience focused on calm, trustworthy money management. Designed and shipped the entire frontend — from motion language to the component library.",
    category: "UI/UX",
    stack: ["React Native", "Reanimated", "Figma", "Storybook"],
    liveUrl: "#",
    repoUrl: "https://github.com",
    image: "/images/project-2.png",
    year: "2024",
    badge: "Case study",
    accent: "violet",
  },
  {
    id: "prism-visualisation",
    title: "Prism Visualisation",
    description:
      "An interactive data visualization platform for research teams. Renders 100k+ nodes smoothly using WebGL with a fallback canvas renderer.",
    category: "Web Apps",
    stack: ["React", "WebGL", "D3", "Vite", "Zustand"],
    liveUrl: "#",
    repoUrl: "https://github.com",
    image: "/images/project-3.png",
    year: "2023",
    accent: "blue",
  },
  {
    id: "drift-generative",
    title: "Drift — Generative Art",
    description:
      "An open-source generative art playground built on flow fields and noise. Exports 4K prints and animated GIFs straight from the browser.",
    category: "Experiments",
    stack: ["TypeScript", "Canvas", "Web Workers", "p5.js"],
    liveUrl: "#",
    repoUrl: "https://github.com",
    image: "/images/project-4.png",
    year: "2023",
    badge: "Open source",
    accent: "cyan",
  },
];
