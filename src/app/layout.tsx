import type { Metadata } from "next";
import "./globals.css";
import { fraunces, ibmPlexSans, jetbrainsMono } from "./fonts";

export const metadata: Metadata = {
  title: "Mehdi Salhi | Cloud & DevOps Engineer",
  description:
    "Cloud & DevOps engineer building on AWS. AWS Certified Solutions Architect Associate & Cloud Practitioner. Built Unkommon.ai. Based in Stamford, CT.",
  keywords: [
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS Certified",
    "AWS Solutions Architect",
    "Terraform",
    "Kubernetes",
    "Infrastructure as Code",
    "CI/CD",
    "Unkommon",
    "Stamford CT",
  ],
  authors: [{ name: "Mehdi Salhi" }],
  icons: {
    icon: "/mehdi.png",
    apple: "/mehdi.png",
  },
  openGraph: {
    title: "Mehdi Salhi | Cloud & DevOps Engineer",
    description:
      "Cloud & DevOps engineer building on AWS. AWS Certified Solutions Architect Associate & Cloud Practitioner. Built Unkommon.ai.",
    url: "https://mehdisalhi.com",
    siteName: "Mehdi Salhi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Salhi | Cloud & DevOps Engineer",
    description:
      "Cloud & DevOps engineer building on AWS. AWS Certified Solutions Architect Associate & Cloud Practitioner. Built Unkommon.ai.",
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
      className={`dark ${fraunces.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-neutral-200 antialiased">
        {children}
      </body>
    </html>
  );
}
