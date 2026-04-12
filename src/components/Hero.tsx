"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const titles = [
  "AI/ML Engineer",
  "Cloud Architect",
  "Founder @ Unkommon.ai",
  "Full-Stack Developer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute top-1/4 right-0 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="h-[600px] w-[600px] rounded-full bg-accent/10 blur-[160px]"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
            delay: 2,
          }}
          className="h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[140px]"
        />
      </div>

      {/* Content — left-aligned on desktop */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-xs text-neutral-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-sm tracking-[0.2em] text-accent-glow uppercase"
          >
            Mehdi Salhi
          </motion.h2>

          {/* Morphing title */}
          <div className="relative mt-4 h-[56px] sm:h-[72px] lg:h-[84px] flex items-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {titles[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-lg font-body text-lg leading-relaxed text-neutral-400"
          >
            Building custom AI systems on AWS. RAG pipelines, AI agents, and
            production ML infrastructure.{" "}
            <span className="text-neutral-300">
              Based in Stamford, CT / NYC.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-subtle hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              View My Work
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 transition-all hover:border-white/25 hover:bg-white/5 hover:text-white"
            >
              Get in Touch
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </a>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap gap-8 border-t border-white/5 pt-8"
          >
            {[
              { value: "Unkommon.ai", label: "Founder" },
              { value: "AWS", label: "Cloud Platform" },
              { value: "3.71", label: "GPA @ SNHU" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-sm font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 font-mono text-xs text-neutral-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-white/10 p-1"
        >
          <div className="h-1.5 w-full rounded-full bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
