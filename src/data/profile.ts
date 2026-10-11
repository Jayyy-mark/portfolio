/**
 * ============================================================
 *  PROFILE CONFIG — Edit this file to personalize the portfolio
 * ============================================================
 *  All personal info, social links, and copy live here so you
 *  can rebrand the entire site from one place.
 *
 *  Data sourced from cv_form.pdf + Previous Project Experience.pdf
 *  (Naing Ye Htut). Salary and availability-time fields from the
 *  source documents were intentionally omitted per request.
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
  monogram: "NY",
  name: "Naing Ye Htut",
  firstName: "Naing Ye Htut",
  role: "Full-Stack Developer & AI Engineer",
  /** Short tagline shown under the hero headline */
  tagline:
    "Full-stack engineer and AI engineer building scalable web applications, RAG systems, and agentic AI workflows.",
  location: "Taungoo, Bago, Myanmar",
  email: "jaycoab2@gmail.com",
  /** Note: salary / availability-time intentionally excluded */
  availability: "Available for opportunities",
  /** Hero headline — `highlight` words receive the gradient treatment */
  heroHeadline: {
    prefix: "Hi, I'm Naing Ye Htut — I Build",
    highlights: ["Full-Stack", "AI-Powered"],
    suffix: "experiences.",
  },
  heroIntro:
    "Full-Stack Developer specialized in software engineering, backend, frontend, and full-stack development. Strong experience in Python, React/TypeScript, Docker, server configuration & deployment, with a deep understanding of application architecture and REST API development. Also experienced in AI engineering, RAG, LLMs, and agentic workflows.",
  resumeUrl: "#",
  bio: {
    short:
      "I'm a full-stack developer and AI engineer based in Taungoo, Myanmar. I design and build scalable web applications, REST APIs, microservices, and AI systems — from Flask/Django backends and React/TypeScript frontends to RAG pipelines and agentic LLM workflows.",
    long: "I work across the entire stack: server configuration on Linux, Docker-based deployment with Nginx and Gunicorn, REST API design, database architecture, and production frontend engineering in React and TypeScript. On the AI side, I build RAG and agentic workflows using LLMs, LangGraph, LlamaIndex, embeddings, and vector databases. I care about clean architecture, maintainable systems, and shipping software that actually runs reliably in production.",
    philosophy:
      "Build systems that scale, automate what repeats, and let AI handle the heavy lifting where it truly fits.",
  },
  /** Quick stats shown as glass cards in the About section */
  stats: [
    { value: "5+", label: "Production projects shipped" },
    { value: "5", label: "Backend frameworks mastered" },
    { value: "3", label: "AI / RAG systems built" },
    { value: "100%", label: "Dockerized deployments" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Jayyy-mark", icon: "Github" },
    { label: "Email", href: "mailto:jaycoab2@gmail.com", icon: "Mail" },
    { label: "Bago Product Zone", href: "https://bagoproductzone.ucstaungoo.edu.mm/", icon: "Globe" },
    { label: "UCSTGO", href: "https://www.ucstaungoo.edu.mm/", icon: "Globe" },
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
