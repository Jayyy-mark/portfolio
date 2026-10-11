import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naing Ye Htut — Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Naing Ye Htut, a full-stack developer and AI engineer building scalable web applications, REST APIs, microservices, and RAG / agentic AI workflows with Python, React/TypeScript, and Docker.",
  keywords: [
    "full-stack developer",
    "portfolio",
    "React",
    "TypeScript",
    "Python",
    "Django",
    "Flask",
    "Laravel",
    "Docker",
    "RAG",
    "LLMs",
    "LangGraph",
    "AI engineer",
    "Myanmar",
    "Taungoo",
  ],
  authors: [{ name: "Naing Ye Htut" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Naing Ye Htut — Full-Stack Developer & AI Engineer",
    description:
      "Full-stack engineering, AI/RAG systems, and DevOps — building scalable web applications and agentic AI workflows.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naing Ye Htut — Full-Stack Developer & AI Engineer",
    description: "Full-stack engineering, AI/RAG systems, and DevOps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${mono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
