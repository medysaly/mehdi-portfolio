"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
  badge?: string;
};

const featured: Project[] = [
  {
    title: "Unkommon.ai",
    description:
      "Solo-built AI services platform on AWS. Voice receptionist (Vapi + Bedrock + Lambda) and website chatbot that qualify leads and book appointments via Google Calendar. Fully serverless. Lambda, Bedrock (Claude Sonnet 4.5 / Haiku 4.5), DynamoDB, API Gateway, Cognito, Amplify. React + TypeScript frontend, deployed via AWS SAM.",
    stack: [
      "React",
      "TypeScript",
      "AWS Lambda",
      "Bedrock",
      "DynamoDB",
      "Cognito",
      "AWS SAM",
      "Vapi",
    ],
    link: "https://unkommon.ai",
    badge: "Featured",
  },
  {
    title: "Bees Knees AI",
    description:
      "Live marketing site for an AI agency with an embedded chatbot (Buzz) built on Claude Sonnet 4. Streaming SSE, prompt caching for ~90% cost reduction, per-IP rate limiting, and full security headers (HSTS, CSP, Permissions-Policy). Cal.com booking integration and a custom WebGL shader hero.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Claude API",
      "Cal.com",
      "WebGL",
      "Vercel",
    ],
    link: "https://beesknees.ai",
    github: "https://github.com/medysaly/beesknees-website",
    badge: "Live Site",
  },
  {
    title: "Company Policy RAG System",
    description:
      "Production-grade RAG system with hybrid search, cross-encoder reranking, and RAGAS evaluation metrics. Upload any document and ask questions in natural language. Built with Python, LangChain, FastAPI, deployed on Hugging Face.",
    stack: [
      "Python",
      "LangChain",
      "FastAPI",
      "BM25",
      "Sentence Transformers",
      "RAGAS",
    ],
    link: "https://huggingface.co/spaces/medysaly/company-policy-rag",
    github: "https://github.com/medysaly/company-policy-rag",
    badge: "Live Demo",
  },
  {
    title: "MuscleMeal AI",
    description:
      "iOS app that generates personalized meal recipes using Gemini AI, tailored to fitness goals and dietary preferences.",
    stack: ["Swift", "SwiftUI", "Core Data", "Gemini API"],
  },
];

function LinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const primaryHref = project.link ?? project.github ?? "#";
  const isExternal = primaryHref !== "#";

  return (
    <a
      href={primaryHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block rounded-lg border border-white/[0.04] p-5 transition-colors hover:border-white/[0.12] hover:bg-white/[0.02]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-base font-medium text-white transition-colors group-hover:text-accent-glow">
            {project.title}
          </h3>
          {isExternal && (
            <span className="text-neutral-600 transition-colors group-hover:text-accent-glow">
              <LinkIcon />
            </span>
          )}
        </div>
        {project.badge && (
          <span className="flex-shrink-0 rounded border border-accent/25 bg-accent/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent-glow">
            {project.badge}
          </span>
        )}
      </div>

      <p className="mt-2 font-body text-sm leading-relaxed text-neutral-400">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-neutral-500"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.github && project.link && (
        <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-neutral-500">
          <GithubIcon />
          <span>Source available</span>
        </div>
      )}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-24 scroll-mt-24">
      <SectionHeading title="Projects" />

      <div className="space-y-3">
        {featured.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <ProjectItem project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
