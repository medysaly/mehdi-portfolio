"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const featured = {
  title: "Unkommon.ai",
  description:
    "AI agents for businesses — voice receptionists, automated lead response, and client reactivation systems. Helping SMBs in the Stamford/NYC area scale with intelligent automation.",
  stack: ["Next.js", "TypeScript", "AWS", "Python"],
  link: "https://unkommon.ai",
};

const projects = [
  {
    title: "MuscleMeal AI",
    description:
      "iOS app that generates personalized meal recipes using Gemini AI, tailored to fitness goals and dietary preferences.",
    stack: ["Swift", "SwiftUI", "Core Data", "Gemini API"],
  },
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
  return (
    <section id="projects" className="relative px-6 py-32">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected work and coursework"
        />

        {/* Featured project — full width, distinct */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="group relative mb-6 overflow-hidden rounded-2xl border border-accent/15 bg-surface"
        >
          {/* Gradient background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-purple-500/[0.03]" />

          <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-glow">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-glow" />
                  Featured
                </span>
                <span className="font-mono text-xs text-neutral-600">
                  Active Project
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {featured.title}
              </h3>
              <p className="mt-3 font-body leading-relaxed text-neutral-400">
                {featured.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 rounded-md border border-accent/15 bg-accent/5 px-2.5 py-1 font-mono text-xs text-accent-glow/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 self-start rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-accent/30 hover:bg-accent/10 md:self-center"
              aria-label={`Visit ${featured.title}`}
            >
              Visit Site
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
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  );
}
