/**
 * ============================================================
 *  PROJECTS DATA — Editable project portfolio entries
 * ============================================================
 *  Add / remove / reorder projects freely. Image paths point
 *  to files in /public/images. Categories drive the filter UI.
 *
 *  Projects sourced from Previous Project Experience.pdf
 *  (Naing Ye Htut). All entries are real shipped projects.
 */

export type ProjectCategory = "Web Apps" | "Full-Stack" | "Enterprise";

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
  /** Engagement type shown on the card */
  engagement: string;
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Apps",
  "Full-Stack",
  "Enterprise",
];

export const projects: Project[] = [
  {
    id: "bago-product-zone",
    title: "Bago Product Zone",
    description:
      "University product-zone platform showcasing student and faculty products. Designed and shipped the full-stack web app — catalog, search, filtering, and an admin panel — during my internship at University of Computer Studies, Taungoo.",
    category: "Web Apps",
    stack: ["React", "TypeScript", "Tailwind CSS", "Flask", "REST API"],
    liveUrl: "https://bagoproductzone.ucstaungoo.edu.mm/",
    repoUrl: "https://github.com/Jayyy-mark",
    image: "/images/project-1.png",
    year: "2025",
    badge: "Internship",
    accent: "violet",
    engagement: "Internship · UCST",
  },
  {
    id: "kyaw-family-scaffolding",
    title: "Kyaw Family Scaffolding — Rental Management",
    description:
      "A rental management system for a scaffolding sales and rental business. Handles inventory, rental orders, billing, and customer records. Built end-to-end as a freelance engagement, including deployment.",
    category: "Full-Stack",
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Docker"],
    liveUrl: "https://kyawfamilyscaffolding.com/",
    repoUrl: "https://github.com/Jayyy-mark",
    image: "/images/project-2.png",
    year: "2024",
    badge: "Freelance",
    accent: "cyan",
    engagement: "Freelance",
  },
  {
    id: "moge-document-archiving",
    title: "MOGE — Document Archiving & Management",
    description:
      "Enterprise document archiving and management system for the Ministry of Electricity and Energy, Myanmar Oil and Gas Enterprise. Digitized document workflows, indexing, secure retrieval, and role-based access.",
    category: "Enterprise",
    stack: ["Django", "Python", "PostgreSQL", "Docker", "Nginx"],
    liveUrl: "#",
    repoUrl: "https://github.com/Jayyy-mark",
    image: "/images/project-3.png",
    year: "2025",
    badge: "Freelance",
    accent: "blue",
    engagement: "Freelance · MOGE",
  },
  {
    id: "moge-hr-management",
    title: "MOGE — Human Resources Management",
    description:
      "Human resources management system for MOGE. Covers employee records, attendance, leave management, and payroll workflows. Built with a clean role-based architecture and containerized deployment.",
    category: "Enterprise",
    stack: ["Django", "Python", "PostgreSQL", "Docker", "Linux"],
    liveUrl: "#",
    repoUrl: "https://github.com/Jayyy-mark",
    image: "/images/project-4.png",
    year: "2025",
    badge: "Freelance",
    accent: "violet",
    engagement: "Freelance · MOGE",
  },
  {
    id: "ucstgo-web-portal",
    title: "UCSTGO Web Portal",
    description:
      "The official website and web portal for University of Computer Studies, Taungoo. Built during my internship — news, announcements, academic program pages, and an information architecture that serves students and faculty.",
    category: "Web Apps",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    liveUrl: "https://www.ucstaungoo.edu.mm/",
    repoUrl: "https://github.com/Jayyy-mark",
    image: "/images/project-5.png",
    year: "2025",
    badge: "Internship",
    accent: "cyan",
    engagement: "Internship · UCST",
  },
];
