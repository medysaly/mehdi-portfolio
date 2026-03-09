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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase"
        >
          Mehdi Salhi
        </motion.p>

        {/* Morphing title */}
        <div className="relative h-16 sm:h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute text-4xl sm:text-5xl font-light tracking-tight text-white"
            >
              {titles[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mx-auto my-8 h-px w-16 bg-neutral-700 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base text-neutral-500 tracking-wide"
        >
          Building intelligent systems on AWS · Stamford, CT / NYC
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white border border-white/15 rounded-md transition-all hover:border-white/40 hover:bg-white/5 tracking-wide"
          >
            View Work
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-neutral-400 rounded-md transition-all hover:text-white tracking-wide"
          >
            Let&apos;s Talk
          </a>
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
