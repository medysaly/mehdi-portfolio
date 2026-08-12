"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./icons";

type Category = "Systems" | "Web" | "AI & Data";

type Course = {
  title: string;
  description: string;
  stack: string[];
  category: Category;
  github?: string;
};

const coursework: Course[] = [
  {
    title: "CS-499 Capstone ePortfolio",
    description:
      "Final capstone integrating software engineering, data structures, and algorithms.",
    stack: ["Python", "Software Engineering"],
    category: "Systems",
    github: "https://github.com/medysaly/cs499-eportfolio",
  },
  {
    title: "CS-465 Full Stack Development",
    description:
      "End-to-end web application development: frontend, backend, database, and deployment.",
    stack: ["JavaScript", "Node.js", "MongoDB", "REST APIs"],
    category: "Web",
    github: "https://github.com/medysaly/cs465-fullstack",
  },
  {
    title: "CS-370 Pirate Agent",
    description:
      "Reinforcement learning agent using deep Q-learning with epsilon-greedy exploration, experience replay, and a target network. Reached a 100% win rate at epoch 278.",
    stack: ["Python", "TensorFlow", "Keras", "NumPy"],
    category: "AI & Data",
    github: "https://github.com/medysaly/CS-370-Pirate-Intelligent-Agent",
  },
  {
    title: "CS-340 Full-Stack Dashboard",
    description:
      "CRUD dashboard for Grazioso Salvare, a real client project with data visualization over a MongoDB backend.",
    stack: ["Python", "MongoDB", "Jupyter", "Dash"],
    category: "AI & Data",
    github: "https://github.com/medysaly/CS-340-Client-server-Development",
  },
  {
    title: "CS-320 Software Testing",
    description:
      "Contact management system built with JUnit test-driven development and full test coverage.",
    stack: ["Java", "JUnit"],
    category: "Systems",
    github: "https://github.com/medysaly/cs-320-portfolio",
  },
  {
    title: "CS-300 Data Structures & Algorithms",
    description:
      "Academic advising system built on hash table and binary search tree structures.",
    stack: ["C++"],
    category: "Systems",
    github:
      "https://github.com/medysaly/cs300-data-structures-algorithms-portfolio",
  },
  {
    title: "CS-255 System Design",
    description:
      "Cloud-based driver education platform (DriverPass) with UML diagrams and system architecture.",
    stack: ["UML", "System Design"],
    category: "Systems",
    github: "https://github.com/medysaly/medysaly-system-analysis-and-design",
  },
  {
    title: "Introduction to Scripting",
    description:
      "Python fundamentals: scripting, automation, and data manipulation.",
    stack: ["Python"],
    category: "Systems",
  },
];

const filters = ["All", "Systems", "Web", "AI & Data"] as const;

// Fixed per-index tilts keep the shelf looking hand-placed but stable across
// re-renders, because a random rotation would jitter on every filter change.
const tilts = [-1.6, 1.2, -0.8, 1.7, -1.2, 0.9, -1.9, 1.4];

function CourseCard({ course, index }: { course: Course; index: number }) {
  const hasLink = Boolean(course.github);
  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: course.github, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotate: `${tilts[index % tilts.length]}deg` }}
      className="group relative transition-transform duration-300 hover:!rotate-0"
    >
      {/* Tape strip */}
      <span
        aria-hidden
        className="absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-2 rounded-[2px] bg-[#e6dcc8]/70 shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
      />

      <Wrapper
        {...wrapperProps}
        className={`flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-card transition-colors duration-300 ${
          hasLink ? "hover:border-muted-light" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.03em] text-ink transition-colors group-hover:text-accent">
            {course.title}
          </h3>
          {hasLink && (
            <ArrowUpRightIcon className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-muted-light transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent" />
          )}
        </div>

        <p className="mt-2.5 flex-1 font-body text-[14.5px] leading-relaxed text-muted">
          {course.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {course.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-paper-soft px-2.5 py-1.5 font-mono text-[12.5px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function Coursework() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible =
    filter === "All"
      ? coursework
      : coursework.filter((c) => c.category === filter);

  return (
    <section id="coursework" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="coursework"
            title="Coursework"
            lead="a few projects from my CS degree at SNHU · tap any to open"
          />

          {/* Filter chips, right-aligned as on the reference */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-shrink-0 flex-wrap gap-2"
          >
            {filters.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setFilter(name)}
                aria-pressed={filter === name}
                className={`rounded-full px-4 py-2 font-mono text-[13px] transition-colors duration-300 ${
                  filter === name
                    ? "bg-ink text-white"
                    : "border border-line bg-white text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* The shelf itself: one soft panel holding the taped cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 rounded-2xl border border-line bg-[linear-gradient(160deg,#fafbfd_0%,#f4f6fa_100%)] p-6 sm:p-9"
        >
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((course, i) => (
                <CourseCard key={course.title} course={course} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
