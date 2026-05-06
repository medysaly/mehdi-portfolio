"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const earned = [
  {
    name: "AWS Certified Cloud Practitioner",
    date: "May 2026",
  },
];

const inProgress = [
  {
    name: "AWS Solutions Architect Associate",
    date: "June 2026",
  },
  {
    name: "HashiCorp Terraform Associate",
    date: "Late June 2026",
  },
  {
    name: "AWS AI Practitioner",
    date: "July 2026",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Certifications"
          subtitle="Validated cloud and ML credentials"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Earned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-green-500/15 bg-surface p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/[0.04] via-transparent to-transparent" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <h3 className="font-display text-sm font-semibold text-white">
                  Earned
                </h3>
              </div>

              <div className="space-y-3">
                {earned.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start justify-between gap-4 rounded-lg border border-white/[0.06] bg-bg p-4"
                  >
                    <p className="font-body text-sm text-neutral-200">
                      {cert.name}
                    </p>
                    <span className="flex-shrink-0 font-mono text-xs text-green-400/80">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* In Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-accent/15 bg-surface p-6"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <h3 className="font-display text-sm font-semibold text-white">
                  In Progress
                </h3>
              </div>

              <div className="space-y-3">
                {inProgress.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-start justify-between gap-4 rounded-lg border border-white/[0.06] bg-bg p-4"
                  >
                    <p className="font-body text-sm text-neutral-200">
                      {cert.name}
                    </p>
                    <span className="flex-shrink-0 font-mono text-xs text-accent-glow/80">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
