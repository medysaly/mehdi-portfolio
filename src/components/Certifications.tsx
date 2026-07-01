"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  shortName: string;
  issuer: "aws" | "hashicorp";
  level: string;
  date: string;
  code: string;
};

const inProgress: Cert[] = [
  {
    name: "HashiCorp Terraform Associate",
    shortName: "Terraform Associate",
    issuer: "hashicorp",
    level: "Associate",
    date: "Late Jun 2026",
    code: "TA-003",
  },
  {
    name: "AWS AI Practitioner",
    shortName: "AI Practitioner",
    issuer: "aws",
    level: "Foundational",
    date: "Jul 2026",
    code: "AIF-C01",
  },
];

const earned: Cert[] = [
  {
    name: "AWS Solutions Architect Associate",
    shortName: "Solutions Architect",
    issuer: "aws",
    level: "Associate",
    date: "Jun 2026",
    code: "SAA-C03",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    shortName: "Cloud Practitioner",
    issuer: "aws",
    level: "Foundational",
    date: "May 2026",
    code: "CLF-C02",
  },
];

const issuerStyles = {
  aws: {
    accent: "#FF9900",
    accentText: "text-[#FF9900]",
    pillBg: "bg-[#FF9900]/10",
    pillBorder: "border-[#FF9900]/25",
    label: "AWS",
  },
  hashicorp: {
    accent: "#7B42BC",
    accentText: "text-[#A86EE6]",
    pillBg: "bg-[#7B42BC]/10",
    pillBorder: "border-[#7B42BC]/25",
    label: "HashiCorp",
  },
};

function Seal({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 flex-shrink-0">
      <circle
        cx="20"
        cy="20"
        r="18.5"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="2.2 2.6"
        opacity="0.7"
      />
      <circle cx="20" cy="20" r="14" fill="none" stroke={color} strokeWidth="1" opacity="0.9" />
      <path
        d="M13.5 20.5l4 4 9-9"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertRow({
  cert,
  status,
}: {
  cert: Cert;
  status: "earned" | "in-progress";
}) {
  const style = issuerStyles[cert.issuer];

  return (
    <div
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/[0.06] bg-bg/60 p-4 pl-5 transition-all duration-300 hover:border-white/[0.12] hover:bg-bg"
      style={{ boxShadow: `inset 3px 0 0 ${style.accent}` }}
    >
      {status === "earned" && <Seal color={style.accent} />}

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${style.pillBorder} ${style.pillBg} ${style.accentText}`}
          >
            <span
              className="h-1 w-1 rounded-full"
              style={{ backgroundColor: style.accent }}
            />
            {style.label}
          </span>

          {status === "earned" ? (
            <span className="inline-flex items-center gap-1 rounded-md border border-green-500/25 bg-green-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-green-400">
              <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Earned
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-glow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-glow" />
              </span>
              In Progress
            </span>
          )}
        </div>

        <h4 className="mt-3 font-display text-base font-semibold leading-tight text-white">
          {cert.shortName}
        </h4>

        <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-neutral-500">
          <span>{cert.level}</span>
          <span className="text-neutral-700">·</span>
          <span className="text-neutral-400">{cert.code}</span>
          <span className="text-neutral-700">·</span>
          <span
            className={
              status === "earned" ? "text-green-400/90" : "text-accent-glow/90"
            }
          >
            {cert.date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-32">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Certifications"
          subtitle="Cloud and infrastructure credentials"
          index="03 — Credentials"
          align="left"
        />

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-wrap items-center gap-x-10 gap-y-2 rounded-xl border border-white/[0.06] bg-surface/40 px-8 py-5"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-white">
              {earned.length + inProgress.length}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-500">
              total
            </span>
          </div>
          <span className="h-4 w-px bg-white/10" />
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-white">
              {earned.length}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-500">
              earned
            </span>
          </div>
          <span className="h-4 w-px bg-white/10" />
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-white">
              {inProgress.length}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-500">
              in progress
            </span>
          </div>
        </motion.div>

        {/* Asymmetric split — Earned leads, wider; In Progress trails, narrower */}
        <div className="grid gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/60 md:col-span-3"
          >
            <div className="relative p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-neutral-300">
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
                <span className="font-mono text-[10px] text-neutral-500">
                  {earned.length} certified
                </span>
              </div>

              <div className="space-y-3">
                {earned.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  >
                    <CertRow cert={cert} status="earned" />
                  </motion.div>
                ))}

                {earned.length < 4 && (
                  <div className="flex items-center justify-center rounded-xl border border-dashed border-white/[0.06] bg-bg/40 px-4 py-8 text-center">
                    <p className="font-mono text-[11px] text-neutral-600">
                      More credentials being added throughout 2026
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/60 md:col-span-2"
          >
            <div className="relative p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-neutral-300">
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
                <span className="font-mono text-[10px] text-neutral-500">
                  {inProgress.length} active
                </span>
              </div>

              <div className="space-y-3">
                {inProgress.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  >
                    <CertRow cert={cert} status="in-progress" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
