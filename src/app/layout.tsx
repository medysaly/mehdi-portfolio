import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk, ibmPlexSans, jetbrainsMono } from "./fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mehdi Salhi | AI/ML Engineer & Cloud Architect",
  description:
    "AI/ML Engineer and Cloud Architect building intelligent systems on AWS. Founder of Unkommon.ai. Based in Stamford, CT.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Cloud Architect",
    "AWS",
    "Next.js",
    "Unkommon",
    "Stamford CT",
  ],
  authors: [{ name: "Mehdi Salhi" }],
  icons: {
    icon: "/mehdi.png",
    apple: "/mehdi.png",
  },
  openGraph: {
    title: "Mehdi Salhi | AI/ML Engineer & Cloud Architect",
    description:
      "Building intelligent systems, AI agents, and agentic workflows on AWS. Founder of Unkommon.ai.",
    url: "https://mehdisalhi.com",
    siteName: "Mehdi Salhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Salhi | AI/ML Engineer & Cloud Architect",
    description:
      "Building intelligent systems, AI agents, and agentic workflows on AWS. Founder of Unkommon.ai.",
    creator: "@medysaly",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-neutral-200 antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
