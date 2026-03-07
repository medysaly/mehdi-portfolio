"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Unkommon.ai",
    description:
      "AI agents for businesses — voice agents, automated lead response, and client reactivation systems. Helping companies scale with intelligent automation.",
    stack: ["Next.js", "TypeScript", "AWS", "Python"],
    link: "https://unkommon.ai",
    featured: true,
  },
  {
    title: "MuscleMeal AI",
    description:
      "iOS app that generates personalized meal recipes using Gemini AI, tailored to fitness goals and dietary preferences.",
    stack: ["Swift", "SwiftUI", "Core Data", "Gemini API"],
  },
  {
    title: "CS-340 Dashboard",
    description:
      "Full-stack CRUD dashboard built for Grazioso Salvare — real client project with data visualization and filtering capabilities.",
    stack: ["Python", "MongoDB", "Jupyter", "Dash"],
  },
  {
    title: "CS-300 DSA",
    description:
      "Academic advising system implementing hash table and binary search tree data structures for efficient course lookup and management.",
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
      "Contact management system built with rigorous JUnit test-driven development methodology and full test coverage.",
    stack: ["Java", "JUnit"],
  },
  {
    title: "CS-255 System Design",
    description:
      "Cloud-based driver education platform (DriverPass) with comprehensive UML diagrams, requirements documentation, and system architecture.",
    stack: ["UML", "System Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="Selected work and coursework"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`group relative rounded-xl border border-white/5 bg-surface p-6 transition-all hover:border-white/10 ${
                project.featured ? "sm:col-span-2" : ""
              }`}
            >
              {/* Glow on hover for featured */}
              {project.featured && (
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              )}

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-neutral-500 transition-colors hover:text-white"
                      aria-label={`Visit ${project.title}`}
                    >
                      <svg
                        className="h-4 w-4"
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
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-bg px-2.5 py-1 font-mono text-xs text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
