/**
 * ============================================================
 *  EXPERIENCE TIMELINE — Editable milestones
 * ============================================================
 *  Mix of professional roles, education, and notable projects.
 *  Mark `highlight: true` for standout entries (adds a glow).
 *
 *  Sourced from cv_form.pdf (Naing Ye Htut).
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
    id: "moge-fullstack-devops",
    role: "Software Engineer · Full-Stack Developer · DevOps",
    organization: "Ministry of Electricity & Energy — MOGE (Freelance)",
    date: "Mar 2026 — Present",
    description:
      "Analyze requirements and design system architecture, database structures, and application workflows. Independently develop full-stack applications across frontend, backend, REST APIs, databases, and micro services, with deployment primarily using Docker. Engineer RAG and agentic AI workflows using LLMs, LangGraph, LlamaIndex, embeddings, and vector databases.",
    tags: ["Python", "Django", "Docker", "RAG", "LangGraph", "REST API"],
    highlight: true,
  },
  {
    id: "ucst-backend-devops-internship",
    role: "Backend Engineer · DevOps (Internship)",
    organization: "University of Computer Studies, Taungoo",
    date: "Mar 2026 — Jul 2026",
    description:
      "Designed and developed REST APIs, database architecture, and core application services for the university platform. Built and integrated a RAG-based knowledge retrieval system for processing, indexing, and querying institutional documents. Implemented frontend integration and application deployment on Linux, including server configuration and maintenance.",
    tags: ["REST API", "RAG", "Linux", "Deployment", "Server Config"],
  },
  {
    id: "kyaw-family-scaffolding-freelance",
    role: "Full-Stack Developer (Freelance)",
    organization: "Kyaw Family Scaffolding",
    date: "2024",
    description:
      "Built a rental management system for a scaffolding sales and rental business — inventory, rental orders, billing, and customer records. Delivered the complete stack from design through deployment.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Docker"],
  },
  {
    id: "bago-product-zone-internship",
    role: "Full-Stack Developer (Internship)",
    organization: "University of Computer Studies, Taungoo — Bago Product Zone",
    date: "2025",
    description:
      "Developed the university product-zone platform showcasing student and faculty products — catalog, search, filtering, and admin panel. Contributed to both frontend and backend during the internship.",
    tags: ["React", "TypeScript", "Flask", "Tailwind CSS"],
  },
  {
    id: "education",
    role: "Bachelor of Computer Science (B.C.Sc.)",
    organization: "University of Computer Studies, Taungoo",
    date: "Expected graduation: Feb 2027",
    description:
      "Undergraduate in Computer Science. Coursework spanning software engineering, databases, algorithms, and systems — applied directly through freelance and internship work.",
    tags: ["Computer Science", "Software Engineering", "Algorithms"],
  },
];
