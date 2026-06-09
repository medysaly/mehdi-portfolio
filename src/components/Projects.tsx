"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    title: "Unkommon.ai",
    description:
      "Solo-built AI services platform on AWS. Voice receptionist (Vapi + Bedrock + Lambda) and website chatbot that qualify leads and book appointments via Google Calendar. Fully serverless. Lambda, Bedrock (Claude Sonnet 4.5 / Haiku 4.5), DynamoDB, API Gateway, Cognito, Amplify. React + TypeScript frontend, deployed via AWS SAM.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Python",
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
    title: "Company Policy RAG System",
    description:
      "Production-grade RAG system with hybrid search, cross-encoder reranking, and RAGAS evaluation metrics. Upload any document and ask questions in natural language. Built with Python, LangChain, FastAPI, deployed on Hugging Face.",
    stack: ["Python", "LangChain", "FastAPI", "BM25", "Sentence Transformers", "RAGAS"],
    link: "https://huggingface.co/spaces/medysaly/company-policy-rag",
    github: "https://github.com/medysaly/company-policy-rag",
    badge: "Live Demo",
  },
  {
    title: "Bees Knees AI",
    description:
      "Live marketing site for an AI agency with an embedded chatbot (Buzz) built on Claude Sonnet 4. Streaming SSE, prompt caching for ~90% cost reduction on repeated requests, per-IP rate limiting, and full security headers (HSTS, CSP, Permissions-Policy). Includes Cal.com booking integration for inline conversion and a custom WebGL shader hero.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Claude API",
      "Cal.com",
      "WebGL",
      "Vercel",
    ],
    link: "https://beesknees.ai",
    github: "https://github.com/medysaly/beesknees-website",
    badge: "Live Site",
  },
];

const projects = [
  {
    title: "MuscleMeal AI",
    description:
      "iOS app that generates personalized meal recipes using Gemini AI, tailored to fitness goals and dietary preferences.",
    stack: ["Swift", "SwiftUI", "Core Data", "Gemini API"],
  },
];

const coursework = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web application development. Frontend, backend, database, and deployment. The same stack Unkommon delivers to clients.",
    stack: ["JavaScript", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Computer Science Capstone",
    description:
      "Final capstone project integrating software engineering, data structures, and algorithms into a comprehensive deliverable.",
    stack: ["Python", "Software Engineering"],
  },
  {
    title: "CS-370 Pirate Agent",
    description:
      "Reinforcement learning agent that learns to navigate an 8x8 maze using deep Q-learning. Implemented the training loop with epsilon-greedy exploration, experience replay, and a target network for stable Bellman updates. Reached 100% win rate at epoch 278.",
    stack: ["Python", "TensorFlow", "Keras", "NumPy"],
    github:
      "https://github.com/medysaly/CS-370-Pirate-Intelligent-Agent",
  },
  {
    title: "CS-300 DSA",
    description:
      "Academic advising system using hash table and binary search tree data structures for efficient course lookup.",
    stack: ["C++"],
    github:
      "https://github.com/medysaly/cs300-data-structures-algorithms-portfolio",
  },
  {
    title: "CS-320 Software Testing",
    description:
      "Contact management system built with rigorous JUnit test-driven development and full test coverage.",
    stack: ["Java", "JUnit"],
    github: "https://github.com/medysaly/cs-320-portfolio",
  },
  {
    title: "CS-340 Dashboard",
    description:
      "Full-stack CRUD dashboard for Grazioso Salvare. Real client project with data visualization and MongoDB backend.",
    stack: ["Python", "MongoDB", "Jupyter", "Dash"],
    github: "https://github.com/medysaly/CS-340-Client-server-Development",
  },
  {
    title: "Introduction to Scripting",
    description:
      "Python fundamentals. Scripting, automation, and data manipulation. Foundation for the ML and cloud tooling work that followed.",
    stack: ["Python"],
  },
  {
    title: "CS-255 System Design",
    description:
      "Cloud-based driver education platform (DriverPass) with UML diagrams, requirements documentation, and system architecture.",
    stack: ["UML", "System Design"],
    github: "https://github.com/medysaly/medysaly-system-analysis-and-design",
  },
];

export default function Projects() {
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <section id="projects" className="relative px-6 py-32">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected work and coursework"
        />

        {/* Featured projects */}
        <div className="space-y-6">
          {featured.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/60 transition-all hover:border-white/15"
            >
              <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-neutral-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-bg/60 px-2.5 py-1 font-mono text-[11px] text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 self-start md:flex-col md:self-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-neutral-200"
                    aria-label={`Visit ${project.title}`}
                  >
                    {project.github ? "Live Demo" : "Visit Site"}
                    <svg
                      className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5"
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
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/gh inline-flex items-center gap-2 rounded-lg border border-white/5 px-5 py-2.5 text-sm font-medium text-neutral-400 transition-all hover:border-white/10 hover:text-white"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MuscleMeal AI — standalone card */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-surface p-6 transition-all duration-300 hover:border-white/10 hover:bg-surface-raised"
            >
              <h3 className="font-display text-base font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-neutral-500">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-bg px-2 py-0.5 font-mono text-[10px] text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework toggle */}
        <div className="mt-12">
          <button
            onClick={() => setShowCoursework(!showCoursework)}
            className="group mx-auto flex items-center gap-2.5 rounded-lg border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-white/[0.08]"
          >
            <span>
              {showCoursework ? "Hide" : "Show"} Coursework
            </span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-xs text-neutral-300">
              {coursework.length}
            </span>
            <svg
              className={`h-4 w-4 text-neutral-300 transition-transform duration-200 ${showCoursework ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showCoursework && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {coursework.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="rounded-lg border border-white/[0.04] bg-surface/60 p-5 transition-all hover:border-white/[0.08]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-display text-sm font-semibold text-neutral-300">
                      {project.title}
                    </h4>
                    {"github" in project && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-neutral-600 transition-colors hover:text-accent-glow"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-neutral-600">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-bg/80 px-1.5 py-0.5 font-mono text-[10px] text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
