"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title="About" />

        <div className="grid gap-12 md:grid-cols-5">
          {/* Text — wider column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 font-body text-base leading-relaxed text-neutral-400 sm:text-lg md:col-span-3"
          >
            <p>
              I build custom AI systems on AWS. RAG pipelines that let teams
              search thousands of documents in seconds, AI agents that automate
              multi-step workflows, and the production infrastructure to run it
              all reliably. Most of my work sits at the intersection of machine
              learning engineering and cloud architecture.
            </p>
            <p>
              I founded{" "}
              <a
                href="https://unkommon.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent-glow"
              >
                Unkommon.ai
              </a>{" "}
              to solve a problem I kept seeing: companies spending months on AI
              projects that never make it to production. The model works in a
              notebook but breaks on real data. The chatbot demo impresses
              leadership but can&apos;t handle actual customer questions.
              Unkommon builds the systems that actually ship — on your
              infrastructure, with your data, in weeks.
            </p>
            <p>
              On the side I&apos;m wrapping up my Computer Science degree at
              Southern New Hampshire University, graduating July 2026 with a
              3.71 GPA. School has been good but honestly building things has
              taught me more.
            </p>
          </motion.div>

          {/* Stats — narrower column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4 md:col-span-2"
          >
            {[
              { label: "GPA", value: "3.71", detail: "Southern New Hampshire University" },
              { label: "Graduating", value: "Jul 2026", detail: "Computer Science, B.S." },
              { label: "Location", value: "CT / NYC", detail: "Stamford, Connecticut" },
              { label: "Focus", value: "AI + Cloud", detail: "AWS, LLMs, Agentic Systems" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group rounded-lg border border-white/5 bg-surface p-5 transition-all duration-300 hover:border-accent/20 hover:bg-surface-raised"
              >
                <p className="font-display text-xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs text-accent-glow/70">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-xs text-neutral-600">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
