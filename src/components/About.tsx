"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="About" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-base leading-relaxed text-neutral-400 sm:text-lg"
        >
          <p>
            I build and deploy intelligent systems &mdash; AI agents, RAG
            pipelines, and agentic workflows &mdash; primarily on AWS. My work
            sits at the intersection of machine learning engineering and cloud
            architecture, turning complex AI capabilities into production-ready
            products.
          </p>
          <p>
            I founded{" "}
            <a
              href="https://unkommon.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-accent-glow"
            >
              Unkommon.ai
            </a>{" "}
            in the Stamford / NYC area, where we build AI-powered automation
            for businesses &mdash; from voice agents to intelligent lead
            response systems.
          </p>
          <p>
            I&apos;m currently finishing my Computer Science degree at Southern
            New Hampshire University (GPA 3.71), graduating July 2026.
          </p>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { label: "GPA", value: "3.71" },
            { label: "Graduating", value: "Jul 2026" },
            { label: "Location", value: "CT / NYC" },
            { label: "Focus", value: "AI + Cloud" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/5 bg-surface p-4 text-center"
            >
              <p className="font-mono text-lg font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
