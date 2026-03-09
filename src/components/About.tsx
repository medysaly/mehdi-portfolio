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
            I build AI agents, RAG pipelines, and agentic workflows on AWS.
            Most of my work lives at the intersection of machine learning and
            cloud architecture, and I genuinely enjoy the process of taking
            something complex and making it actually ship.
          </p>
          <p>
            I started{" "}
            <a
              href="https://unkommon.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-accent-glow"
            >
              Unkommon.ai
            </a>{" "}
            out of Stamford with a pretty simple idea: small businesses deserve
            the same AI infrastructure that big companies have. We build voice
            agents and lead automation systems that actually work.
          </p>
          <p>
            On the side I&apos;m wrapping up my Computer Science degree at
            Southern New Hampshire University, graduating July 2026 with a 3.71
            GPA. School has been good but honestly building things has taught
            me more.
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
