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
  title: "Aria Vance — Frontend Developer & Digital Experience Designer",
  description:
    "Portfolio of Aria Vance, a frontend developer and digital experience designer crafting premium, accessible, and performant web experiences with React, TypeScript, and motion design.",
  keywords: [
    "frontend developer",
    "portfolio",
    "React",
    "TypeScript",
    "UI engineering",
    "glassmorphism",
    "digital experiences",
  ],
  authors: [{ name: "Aria Vance" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Aria Vance — Frontend Developer & Digital Experience Designer",
    description:
      "Premium portfolio showcasing frontend engineering, motion design, and product craft.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aria Vance — Frontend Developer",
    description: "Premium portfolio showcasing frontend engineering and motion design.",
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
