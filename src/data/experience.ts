/**
 * ============================================================
 *  EXPERIENCE TIMELINE — Editable milestones
 * ============================================================
 *  Mix of professional roles, education, and notable projects.
 *  Mark `highlight: true` for standout entries (adds a glow).
 */

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string;
  /** Tech / achievements badges */
  tags: string[];
  /** Adds a subtle glow to the timeline dot */
  highlight?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    id: "lead-frontend-studio",
    role: "Lead Frontend Engineer",
    organization: "Northwind Studio",
    date: "2022 — Present",
    description:
      "Lead the frontend practice for a 12-person product studio. Built two design systems from scratch, mentored four engineers, and shipped 14 client products across fintech and healthcare.",
    tags: ["React", "Design Systems", "Team Lead", "Motion"],
    highlight: true,
  },
  {
    id: "senior-product-engineer",
    role: "Senior Product Engineer",
    organization: "Lattice Labs",
    date: "2020 — 2022",
    description:
      "Joined as the 4th engineer and helped scale the product to 40k DAU. Owned the dashboard, onboarding flows, and the component library that's still in use today.",
    tags: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],
  },
  {
    id: "frontend-developer-agency",
    role: "Frontend Developer",
    organization: "Field & Co. Digital Agency",
    date: "2018 — 2020",
    description:
      "Shipped 20+ marketing and product sites for brands across Europe. Specialized in motion-led, accessible interfaces and performance budgets under 100kb.",
    tags: ["React", "GSAP", "Lighthouse", "A11y"],
  },
  {
    id: "designer-freelance",
    role: "Freelance Designer & Developer",
    organization: "Independent",
    date: "2017 — 2018",
    description:
      "Transitioned from graphic design into the web. Built my first React apps, learned TypeScript, and took on early freelance clients.",
    tags: ["Figma", "React", "CSS", "Branding"],
  },
  {
    id: "education",
    role: "B.Sc. Interactive Media Design",
    organization: "University of Porto",
    date: "2013 — 2017",
    description:
      "First-class honours. Thesis on motion in interface design — the seed of the work I still do today.",
    tags: ["Interaction Design", "HCI", "Motion"],
  },
];
