/**
 * ============================================================
 *  SKILLS DATA — Grouped, editable. No percentage bars.
 * ============================================================
 *  `icon` should be a short glyph rendered inside a glass chip.
 *
 *  Categories reflect Naing Ye Htut's actual tech stack
 *  (cv_form.pdf).
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
    blurb: "Interfaces and frontend systems in React and TypeScript.",
    skills: [
      { name: "React", icon: "⚛" },
      { name: "TypeScript", icon: "TS" },
      { name: "JavaScript", icon: "JS" },
      { name: "Tailwind CSS", icon: "~" },
      { name: "HTML5", icon: "❮" },
      { name: "CSS3", icon: "❯" },
      { name: "Bootstrap", icon: "B" },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    blurb: "REST APIs and server-side systems across multiple stacks.",
    skills: [
      { name: "Python", icon: "Py" },
      { name: "Flask", icon: "▶" },
      { name: "Django", icon: "⌘" },
      { name: "Node.js", icon: "⬡" },
      { name: "Express.js", icon: "→" },
      { name: "Laravel", icon: "‹›" },
      { name: "ASP.NET", icon: "#" },
      { name: "PHP", icon: "🐘" },
      { name: "C#", icon: "C" },
    ],
  },
  {
    id: "ai",
    title: "AI Engineering",
    blurb: "RAG pipelines, LLMs, and agentic AI workflows.",
    skills: [
      { name: "LLMs", icon: "✦" },
      { name: "RAG", icon: "⇄" },
      { name: "LangGraph", icon: "◍" },
      { name: "LlamaIndex", icon: "▲" },
      { name: "Embeddings", icon: "≣" },
      { name: "Vector Databases", icon: "▣" },
      { name: "Agentic AI", icon: "❍" },
      { name: "Machine Learning", icon: "◆" },
      { name: "Deep Learning", icon: "◈" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    blurb: "Deployment, server configuration, and containerization.",
    skills: [
      { name: "Docker", icon: "⬢" },
      { name: "Linux", icon: "🐧" },
      { name: "Nginx", icon: "⌥" },
      { name: "Gunicorn", icon: "∥" },
      { name: "Git", icon: "⌥" },
      { name: "CI/CD", icon: "↻" },
      { name: "Server Configuration", icon: "⚙" },
      { name: "REST API", icon: "∮" },
    ],
  },
];
