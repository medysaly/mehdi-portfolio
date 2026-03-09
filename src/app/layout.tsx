import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mehdi Salhi — AI/ML Engineer & Cloud Architect",
  description: "AI/ML Engineer and Cloud Architect building intelligent systems on AWS. Founder of Unkommon.ai. Based in Stamford, CT.",
  keywords: ["AI Engineer", "ML Engineer", "Cloud Architect", "AWS", "Next.js", "Unkommon", "Stamford CT"],
  authors: [{ name: "Mehdi Salhi" }],
  icons: {
    icon: "/mehdi.png",
    apple: "/mehdi.png",
  },
  openGraph: {
    title: "Mehdi Salhi — AI/ML Engineer & Cloud Architect",
    description: "Building intelligent systems, AI agents, and agentic workflows on AWS. Founder of Unkommon.ai.",
    url: "https://mehdi-portfolio.vercel.app",
    siteName: "Mehdi Salhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Salhi — AI/ML Engineer & Cloud Architect",
    description: "Building intelligent systems, AI agents, and agentic workflows on AWS. Founder of Unkommon.ai.",
    creator: "@medysaly",
  },
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
