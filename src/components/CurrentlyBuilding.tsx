"use client";

import { motion } from "framer-motion";

export default function CurrentlyBuilding() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-accent/20 bg-surface p-8"
        >
          {/* Pulsing left border */}
          <div className="absolute left-0 top-0 h-full w-1 overflow-hidden rounded-l-2xl">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-full w-full bg-accent"
            />
          </div>

          {/* Glow effect */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent" />

          <div className="relative pl-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-neutral-500">Currently building</span>
              <span className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-0.5 text-xs font-medium text-green-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                Active
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Unkommon.ai
            </h3>

            <p className="mt-3 max-w-2xl text-neutral-400 leading-relaxed">
              AI agents for small businesses — voice receptionists that answer calls 24/7, qualify leads, and book appointments automatically.
              Targeting dental offices, law firms, and real estate agencies in the{" "}
              <span className="text-neutral-300">Stamford/NYC area.</span>
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["Voice AI", "AWS Lambda", "Agentic Systems", "SMB Automation"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-accent/20 bg-accent/5 px-3 py-1 text-xs text-accent-glow"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://unkommon.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              unkommon.ai
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
