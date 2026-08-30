import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./fonts";
import Navbar from "@/components/Navbar";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Mehdi Salhi | AI Engineer",
  description:
    "AI engineer building LLM agents and RAG systems on AWS. Amazon Bedrock, SageMaker, Hugging Face. AWS Certified Solutions Architect Associate. Built Unkommon.ai. Based in Stamford, CT.",
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "RAG",
    "AI Agents",
    "Amazon Bedrock",
    "Amazon SageMaker",
    "Prompt Engineering",
    "AI Infrastructure",
    "AWS Certified",
    "Unkommon",
    "Stamford CT",
  ],
  authors: [{ name: "Mehdi Salhi" }],
  icons: {
    icon: "/mehdi.png",
    apple: "/mehdi.png",
  },
  openGraph: {
    title: "Mehdi Salhi | AI Engineer",
    description:
      "AI engineer building LLM agents and RAG systems on AWS. Amazon Bedrock, SageMaker, Hugging Face. Built Unkommon.ai.",
    url: "https://mehdisalhi.com",
    siteName: "Mehdi Salhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Salhi | AI Engineer",
    description:
      "AI engineer building LLM agents and RAG systems on AWS. Amazon Bedrock, SageMaker, Hugging Face. Built Unkommon.ai.",
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
