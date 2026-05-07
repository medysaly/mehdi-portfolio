"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  issuer: string;
  date: string;
  code?: string;
};

const inProgress: Cert[] = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "June 2026",
    code: "SAA-C03",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "Late June 2026",
    code: "TA-003",
  },
  {
    name: "AWS AI Practitioner",
    issuer: "Amazon Web Services",
    date: "July 2026",
    code: "AIF-C01",
  },
];

const earned: Cert[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2026",
    code: "CLF-C02",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-32">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Certifications"
          subtitle="Cloud and ML credentials"
        />

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-xl border border-white/[0.06] bg-surface/60 px-6 py-4"
        >
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-white">
              {earned.length + inProgress.length}
            </span>
            <span className="font-mono text-xs text-neutral-500">total</span>
          </div>
          <span className="text-neutral-700">/</span>
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-green-400">
              {earned.length}
            </span>
            <span className="font-mono text-xs text-neutral-500">earned</span>
          </div>
          <span className="text-neutral-700">/</span>
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-accent-glow">
              {inProgress.length}
            </span>
            <span className="font-mono text-xs text-neutral-500">
              in progress
            </span>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* In Progress — left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-accent/15 bg-surface"
          >
            {/* Animated gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-purple-500/[0.04]" />

            {/* Pulsing left border */}
            <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="h-full w-full bg-accent"
              />
            </div>

            <div className="relative p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
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
                <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 font-mono text-[10px] text-accent-glow">
                  {inProgress.length} active
                </span>
              </div>

              <div className="space-y-3">
                {inProgress.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-bg p-4 transition-all hover:border-accent/25"
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/[0.04] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-sm font-medium text-neutral-100">
                            {cert.name}
                          </p>
                          <p className="mt-0.5 font-body text-xs text-neutral-500">
                            {cert.issuer}
                            {cert.code && (
                              <span className="ml-2 font-mono text-[10px] text-neutral-700">
                                {cert.code}
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="flex flex-shrink-0 items-center gap-1.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-glow" />
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-accent-glow/80">
                            Target
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 font-mono text-xs text-neutral-400">
                        {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Earned — right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-green-500/15 bg-surface"
          >
            {/* Subtle gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/[0.05] via-transparent to-transparent" />

            <div className="relative p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
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
                <span className="rounded-full border border-green-500/20 bg-green-500/5 px-2.5 py-0.5 font-mono text-[10px] text-green-400">
                  {earned.length} certified
                </span>
              </div>

              <div className="space-y-3">
                {earned.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="group relative overflow-hidden rounded-lg border border-green-500/15 bg-bg p-4 transition-all hover:border-green-500/30"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-green-500/[0.04] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-sm font-medium text-neutral-100">
                            {cert.name}
                          </p>
                          <p className="mt-0.5 font-body text-xs text-neutral-500">
                            {cert.issuer}
                            {cert.code && (
                              <span className="ml-2 font-mono text-[10px] text-neutral-700">
                                {cert.code}
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="flex flex-shrink-0 items-center gap-1.5">
                          <svg
                            className="h-3.5 w-3.5 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-green-400/80">
                            Verified
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 font-mono text-xs text-neutral-400">
                        Earned {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Placeholder hint when there's room */}
                {earned.length < 4 && (
                  <div className="flex items-center justify-center rounded-lg border border-dashed border-white/[0.06] bg-bg/40 px-4 py-6 text-center">
                    <p className="font-mono text-[11px] text-neutral-600">
                      More credentials being added throughout 2026
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
