/**
 * ============================================================
 *  SKILLS DATA — Grouped, editable. No percentage bars.
 * ============================================================
 *  `icon` should be a short glyph rendered inside a glass chip.
 */

export interface SkillGroup {
  id: string;
  title: string;
  /** Short blurb under the category title */
  blurb: string;
  skills: { name: string; icon: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    blurb: "Production-grade interfaces and design systems.",
    skills: [
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Tailwind CSS", icon: "~" },
      { name: "Framer Motion", icon: "✦" },
      { name: "Redux Toolkit", icon: "◆" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    blurb: "APIs, data, and the systems that power the front.",
    skills: [
      { name: "Node.js", icon: "⬡" },
      { name: "Express", icon: "→" },
      { name: "tRPC", icon: "⇄" },
      { name: "Prisma", icon: "▼" },
      { name: "PostgreSQL", icon: "🗄" },
      { name: "REST APIs", icon: "∮" },
      { name: "WebSockets", icon: "↯" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    blurb: "How I ship — version control, testing, and CI.",
    skills: [
      { name: "Git", icon: "⌥" },
      { name: "GitHub", icon: "〇" },
      { name: "Vite", icon: "⚡" },
      { name: "Vitest", icon: "✓" },
      { name: "Docker", icon: "⬢" },
      { name: "ESLint", icon: "§" },
    ],
  },
  {
    id: "design",
    title: "Design & UI/UX",
    blurb: "Where engineering sensibility meets visual craft.",
    skills: [
      { name: "Figma", icon: "✎" },
      { name: "Design Systems", icon: "▦" },
      { name: "Accessibility", icon: "♿" },
      { name: "Motion Design", icon: "❍" },
      { name: "Prototyping", icon: "◷" },
      { name: "Typography", icon: "Aa" },
    ],
  },
];
