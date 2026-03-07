import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mehdi Salhi | AI/ML Engineer & Cloud Architect",
  description:
    "AI/ML Engineer & Cloud Architect. Founder @ Unkommon.ai. Building intelligent systems, AI agents, and RAG pipelines on AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bg text-neutral-200 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
