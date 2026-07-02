"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Course = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
};

const coursework: Course[] = [
  {
    title: "CS-465 Full Stack Development",
    description:
      "End-to-end web application development. Frontend, backend, database, and deployment.",
    stack: ["JavaScript", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/medysaly/cs465-fullstack",
  },
  {
    title: "CS-499 Capstone ePortfolio",
    description:
      "Final capstone project integrating software engineering, data structures, and algorithms.",
    stack: ["Python", "Software Engineering"],
    github: "https://github.com/medysaly/cs499-eportfolio",
  },
  {
    title: "CS-370 Pirate Agent",
    description:
      "Reinforcement learning agent using deep Q-learning. Implemented epsilon-greedy exploration, experience replay, and a target network for stable Bellman updates. Reached 100% win rate at epoch 278.",
    stack: ["Python", "TensorFlow", "Keras", "NumPy"],
    github: "https://github.com/medysaly/CS-370-Pirate-Intelligent-Agent",
  },
  {
    title: "CS-340 Full-Stack Dashboard",
    description:
      "Full-stack CRUD dashboard for Grazioso Salvare. Real client project with data visualization and MongoDB backend.",
    stack: ["Python", "MongoDB", "Jupyter", "Dash"],
    github: "https://github.com/medysaly/CS-340-Client-server-Development",
  },
  {
    title: "CS-320 Software Testing",
    description:
      "Contact management system built with JUnit test-driven development and full test coverage.",
    stack: ["Java", "JUnit"],
    github: "https://github.com/medysaly/cs-320-portfolio",
  },
  {
    title: "CS-300 Data Structures & Algorithms",
    description:
      "Academic advising system using hash table and binary search tree data structures.",
    stack: ["C++"],
    github:
      "https://github.com/medysaly/cs300-data-structures-algorithms-portfolio",
  },
  {
    title: "CS-255 System Design",
    description:
      "Cloud-based driver education platform (DriverPass) with UML diagrams and system architecture.",
    stack: ["UML", "System Design"],
    github: "https://github.com/medysaly/medysaly-system-analysis-and-design",
  },
  {
    title: "Introduction to Scripting",
    description:
      "Python fundamentals. Scripting, automation, and data manipulation.",
    stack: ["Python"],
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

function CourseItem({ course }: { course: Course }) {
  const hasLink = Boolean(course.github);
  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? {
        href: course.github,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group block rounded-lg border border-white/[0.04] p-5 transition-colors ${
        hasLink ? "hover:border-white/[0.12] hover:bg-white/[0.02]" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3
            className={`font-display text-base font-medium text-white ${
              hasLink ? "transition-colors group-hover:text-accent-glow" : ""
            }`}
          >
            {course.title}
          </h3>
          {hasLink && (
            <span className="text-neutral-600 transition-colors group-hover:text-accent-glow">
              <LinkIcon />
            </span>
          )}
        </div>
      </div>
      <p className="mt-2 font-body text-sm leading-relaxed text-neutral-400">
        {course.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {course.stack.map((tech) => (
          <span
            key={tech}
            className="rounded bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-neutral-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}

export default function Coursework() {
  return (
    <section id="coursework" className="mt-24 scroll-mt-24">
      <SectionHeading title="Coursework" />

      <p className="mb-6 font-body text-sm text-neutral-500">
        Selected projects from my Computer Science degree at SNHU.
      </p>

      <div className="space-y-3">
        {coursework.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <CourseItem course={course} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
