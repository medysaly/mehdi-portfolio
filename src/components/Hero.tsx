"use client";

import { motion } from "framer-motion";
import { MeshGradientBackground } from "./ui/mesh-gradient-background";

const stats = [
  { value: "Unkommon.ai", label: "Built" },
  { value: "AWS", label: "Cloud Platform" },
  { value: "3.71", label: "GPA @ SNHU" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-32">
      {/* Mesh gradient animated background */}
      <MeshGradientBackground />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-bg/50 via-transparent to-bg/80" />

      {/* Asymmetric split — content left, status panel right */}
      <div className="relative z-20 mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        {/* Left — identity */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 text-xs tracking-[0.3em] text-neutral-400 uppercase"
          >
            <span className="h-px w-8 bg-accent-glow/50" />
            Mehdi Salhi
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            AWS Cloud
            <br />
            Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-7 max-w-lg font-body text-lg leading-relaxed text-neutral-400"
          >
            Computer Science student graduating August 2026 (SNHU). Building
            serverless apps and AI agents on AWS.{" "}
            <span className="text-neutral-300">
              Based in Stamford, CT / NYC.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-neutral-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
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
        </div>

        {/* Right — console-style status panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/50 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Profile
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] text-neutral-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>
              Open to work
            </span>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="flex items-center justify-between px-6 py-5"
              >
                <span className="font-mono text-xs text-neutral-500">
                  {stat.label}
                </span>
                <span className="font-display text-lg font-medium text-white">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/[0.06] bg-bg/40 px-6 py-4">
            <p className="font-mono text-[11px] text-neutral-600">
              Stamford, CT — NYC metro
            </p>
          </div>
        </motion.div>
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
