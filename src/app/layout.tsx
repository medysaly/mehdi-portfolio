import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./fonts";
import Navbar from "@/components/Navbar";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Mehdi Salhi | Cloud & AI Engineer",
  description:
    "Cloud and AI engineer building on AWS. Infrastructure as code, CI/CD, and the LLM agents and RAG systems that run on top. AWS Certified Solutions Architect Associate. Built Unkommon.ai. Based in Stamford, CT.",
  keywords: [
    "Cloud Engineer",
    "AWS Certified",
    "AWS Solutions Architect",
    "Terraform",
    "Infrastructure as Code",
    "CI/CD",
    "AI Engineer",
    "LLM Engineer",
    "RAG",
    "Amazon Bedrock",
    "Unkommon",
    "Stamford CT",
  ],
  authors: [{ name: "Mehdi Salhi" }],
  icons: {
    icon: "/mehdi.png",
    apple: "/mehdi.png",
  },
  openGraph: {
    title: "Mehdi Salhi | Cloud & AI Engineer",
    description:
      "Cloud and AI engineer building on AWS. Infrastructure as code, CI/CD, and the LLM agents and RAG systems that run on top. Built Unkommon.ai.",
    url: "https://mehdisalhi.com",
    siteName: "Mehdi Salhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Salhi | Cloud & AI Engineer",
    description:
      "Cloud and AI engineer building on AWS. Infrastructure as code, CI/CD, and the LLM agents and RAG systems that run on top. Built Unkommon.ai.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-paper font-body text-ink-soft antialiased">
        <Navbar />
        {children}
        <CalEmbed />
      </body>
    </html>
  );
}
