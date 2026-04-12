"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    title: "Unkommon.ai",
    description:
      "Custom AI/ML engineering platform. RAG systems, multi-agent architectures, ML consulting, and production cloud infrastructure. Built with React, TypeScript, Express, deployed on AWS.",
    stack: ["React", "TypeScript", "AWS", "Python"],
    link: "https://unkommon.ai",
    badge: "Featured",
  },
  {
    title: "Company Policy RAG System",
    description:
      "Production-grade RAG system with hybrid search, cross-encoder reranking, and RAGAS evaluation metrics. Upload any document and ask questions in natural language. Built with Python, LangChain, FastAPI, deployed on Hugging Face.",
    stack: ["Python", "LangChain", "FastAPI", "ChromaDB"],
    link: "https://huggingface.co/spaces/medysaly/company-policy-rag",
    github: "https://github.com/medysaly/company-policy-rag",
    badge: "Live Demo",
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
    title: "CS-340 Dashboard",
    description:
      "Full-stack CRUD dashboard for Grazioso Salvare — real client project with data visualization and MongoDB backend.",
    stack: ["Python", "MongoDB", "Jupyter", "Dash"],
  },
  {
    title: "CS-300 DSA",
    description:
      "Academic advising system using hash table and binary search tree data structures for efficient course lookup.",
    stack: ["C++"],
  },
  {
    title: "CS-330 3D Graphics",
    description:
      "3D scene rendering with realistic lighting, texture mapping, and interactive camera controls built from scratch.",
    stack: ["C++", "OpenGL"],
  },
  {
    title: "CS-320 Software Testing",
    description:
      "Contact management system built with rigorous JUnit test-driven development and full test coverage.",
    stack: ["Java", "JUnit"],
  },
  {
    title: "CS-255 System Design",
    description:
      "Cloud-based driver education platform (DriverPass) with UML diagrams, requirements documentation, and system architecture.",
    stack: ["UML", "System Design"],
  },
];

export default function Projects() {
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <section id="projects" className="relative px-6 py-32">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />

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
              className="group relative overflow-hidden rounded-2xl border border-accent/15 bg-surface"
            >
              {/* Gradient background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-purple-500/[0.03]" />

              <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-xl">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-glow">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-glow" />
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 font-body leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 rounded-md border border-accent/15 bg-accent/5 px-2.5 py-1 font-mono text-xs text-accent-glow/80"
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
                    className="group/link inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-accent/30 hover:bg-accent/10"
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
            className="group mx-auto flex items-center gap-2 rounded-lg border border-white/[0.06] bg-surface px-5 py-2.5 text-sm font-medium text-neutral-400 transition-all hover:border-white/10 hover:text-neutral-300"
          >
            <span>
              {showCoursework ? "Hide" : "Show"} Coursework
            </span>
            <span className="font-mono text-xs text-neutral-600">
              {coursework.length}
            </span>
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${showCoursework ? "rotate-180" : ""}`}
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
                  <h4 className="font-display text-sm font-semibold text-neutral-300">
                    {project.title}
                  </h4>
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
