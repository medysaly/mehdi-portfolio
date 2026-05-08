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
    name: "AWS Solutions Architect Associate",
    shortName: "Solutions Architect",
    issuer: "aws",
    level: "Associate",
    date: "June 2026",
    code: "SAA-C03",
  },
  {
    name: "HashiCorp Terraform Associate",
    shortName: "Terraform Associate",
    issuer: "hashicorp",
    level: "Associate",
    date: "Late June 2026",
    code: "TA-003",
  },
  {
    name: "AWS AI Practitioner",
    shortName: "AI Practitioner",
    issuer: "aws",
    level: "Foundational",
    date: "July 2026",
    code: "AIF-C01",
  },
];

const earned: Cert[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    shortName: "Cloud Practitioner",
    issuer: "aws",
    level: "Foundational",
    date: "May 2026",
    code: "CLF-C02",
  },
];

// AWS smile logo
const AWSLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 75 45"
    fill="currentColor"
    className={className}
    aria-label="AWS"
  >
    <path d="M21.1 16.4c0 .9.1 1.7.3 2.2.2.6.5 1.2.8 1.8.1.2.2.4.2.5 0 .2-.1.4-.4.6l-1.3.8c-.2.1-.4.2-.5.2-.2 0-.4-.1-.5-.3-.3-.3-.5-.6-.7-.9-.2-.3-.4-.7-.6-1.1-1.5 1.7-3.3 2.6-5.5 2.6-1.6 0-2.8-.4-3.7-1.3-.9-.9-1.4-2.1-1.4-3.5 0-1.6.5-2.8 1.7-3.7 1.1-.9 2.6-1.4 4.6-1.4.6 0 1.3.1 2 .2.7.1 1.4.2 2.2.4v-1.4c0-1.4-.3-2.4-.9-3-.6-.6-1.6-.9-3.1-.9-.7 0-1.4.1-2.1.2-.7.2-1.4.4-2.1.6-.3.1-.5.2-.7.2-.1 0-.3.1-.4.1-.4 0-.5-.3-.5-.8v-1c0-.4.1-.7.2-.9.1-.2.4-.4.7-.5.7-.4 1.5-.7 2.5-.9 1-.2 2-.4 3.1-.4 2.4 0 4.1.5 5.2 1.6 1.1 1.1 1.6 2.7 1.6 4.9v6.5h.1zM14.4 19c.7 0 1.4-.1 2.1-.4.7-.2 1.4-.7 1.9-1.3.3-.4.6-.8.7-1.3.1-.5.2-1.1.2-1.7v-.8c-.6-.1-1.2-.3-1.8-.4-.6-.1-1.3-.1-1.9-.1-1.4 0-2.4.3-3 .8-.6.5-.9 1.3-.9 2.3 0 .9.2 1.6.7 2.1.5.5 1.2.8 2 .8zm13.3 1.8c-.4 0-.7-.1-.9-.2-.2-.2-.3-.5-.5-.9L21.6 4.4c-.1-.4-.2-.7-.2-.9 0-.4.2-.6.5-.6h2c.4 0 .7.1.9.3.2.2.3.5.4.9l2.7 10.7L31.5 4.1c.1-.4.2-.7.4-.9.2-.2.5-.3.9-.3h1.6c.4 0 .7.1.9.3.2.2.3.5.4.9l2.7 10.8 2.8-10.8c.1-.4.2-.7.4-.9.2-.2.5-.3.9-.3h1.9c.4 0 .6.2.6.6 0 .2 0 .3-.1.4 0 .2-.1.4-.2.6l-4.7 15.3c-.1.4-.2.7-.4.9-.2.2-.5.3-.9.3h-1.7c-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.4-.9l-2.5-10.4-2.5 10.4c-.1.4-.2.7-.4.9-.2.2-.5.3-.9.3h-1.7zm21.1.7c-1 0-2.1-.1-3.1-.4-1-.2-1.8-.5-2.4-.8-.4-.2-.6-.4-.7-.6-.1-.2-.1-.4-.1-.5v-1.1c0-.4.2-.7.5-.7.1 0 .3 0 .4.1.1 0 .3.1.5.2.6.3 1.3.5 2.1.6.7.1 1.5.2 2.2.2 1.2 0 2.1-.2 2.7-.6.6-.4.9-1 .9-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.9-.7-1.8-1l-2.6-.8c-1.3-.4-2.3-1-2.9-1.8-.6-.8-.9-1.6-.9-2.5 0-.7.2-1.4.5-1.9.3-.6.7-1.1 1.3-1.5.5-.4 1.1-.7 1.9-.9.7-.2 1.5-.3 2.3-.3.4 0 .8 0 1.2.1.4.1.8.1 1.1.2.4.1.7.2 1 .3.3.1.6.2.8.4.3.2.5.3.6.5.1.2.2.4.2.7v1c0 .4-.2.7-.5.7-.2 0-.5-.1-.9-.3-1.2-.6-2.6-.8-4.1-.8-1.1 0-2 .2-2.5.5-.6.4-.9.9-.9 1.6 0 .5.2.9.5 1.3.4.4 1 .7 2 1l2.5.8c1.3.4 2.2 1 2.8 1.7.6.7.8 1.6.8 2.5 0 .8-.2 1.5-.5 2.1-.3.6-.7 1.1-1.3 1.6-.5.4-1.2.8-2 1-.7.3-1.5.4-2.4.4z" />
    <path d="M67.6 30.5c-5.4 4-13.2 6.1-19.9 6.1-9.4 0-17.9-3.5-24.3-9.3-.5-.5-.1-1.1.5-.7 7 4 15.6 6.5 24.4 6.5 6 0 12.5-1.2 18.5-3.8.9-.4 1.7.6.8 1.2zm2.2-2.6c-.7-.9-4.6-.4-6.4-.2-.5.1-.6-.4-.1-.8 3.1-2.2 8.3-1.6 8.9-.8.6.7-.2 5.9-3.1 8.4-.5.4-.9.2-.7-.3.6-1.7 2.1-5.5 1.4-6.3z" />
  </svg>
);

// HashiCorp logo (vertex shape)
const HashiCorpLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="HashiCorp"
  >
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-2 15.5h-2v-3h2v3zm0-5h-2v-3h2v3zm4 5h-2v-3h2v3zm0-5h-2v-3h2v3zm4 5h-2v-3h2v3zm0-5h-2v-3h2v3z" />
  </svg>
);

// Terraform-specific (purple/blue gradient logo accent)
const TerraformLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-label="Terraform"
  >
    <path d="M1.44 0v8.16l7.06 4.07V4.07zM22.56 4.07l-7.05 4.08v8.15l7.05-4.07zM9.21 4.45v8.16l7.06 4.07V8.52zM9.21 13.44V21.6l7.06 4.08v-8.16z" />
  </svg>
);

const issuerStyles = {
  aws: {
    badgeBg: "bg-gradient-to-br from-orange-500/20 via-orange-600/15 to-amber-700/10",
    badgeBorder: "border-orange-500/30",
    accentText: "text-orange-400",
    accentDot: "bg-orange-400",
    logoColor: "text-orange-400",
    label: "AWS",
  },
  hashicorp: {
    badgeBg: "bg-gradient-to-br from-purple-500/20 via-violet-600/15 to-indigo-700/10",
    badgeBorder: "border-purple-500/30",
    accentText: "text-purple-400",
    accentDot: "bg-purple-400",
    logoColor: "text-purple-400",
    label: "HashiCorp",
  },
};

function CertBadge({ cert, status }: { cert: Cert; status: "earned" | "in-progress" }) {
  const style = issuerStyles[cert.issuer];
  const Logo = cert.issuer === "aws" ? AWSLogo : TerraformLogo;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-bg transition-all hover:border-white/[0.12]">
      <div className="flex">
        {/* Brand badge — left side */}
        <div
          className={`relative flex flex-col items-center justify-center gap-2 border-r ${style.badgeBorder} ${style.badgeBg} px-5 py-4`}
        >
          <Logo className={`h-7 w-7 ${style.logoColor}`} />
          <span className={`font-mono text-[9px] font-semibold uppercase tracking-wider ${style.accentText}`}>
            {style.label}
          </span>
        </div>

        {/* Content — right side */}
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-semibold text-white">
                {cert.shortName}
              </p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                {cert.level} · {cert.code}
              </p>
            </div>
            {status === "earned" ? (
              <svg
                className="h-4 w-4 flex-shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow" />
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/[0.04] pt-2.5">
            <span className="font-mono text-[10px] text-neutral-600">
              {status === "earned" ? "Earned" : "Target"}
            </span>
            <span
              className={`font-mono text-xs ${status === "earned" ? "text-green-400/90" : "text-accent-glow/90"}`}
            >
              {cert.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-32">
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Certifications"
          subtitle="Cloud and infrastructure credentials"
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
                  >
                    <CertBadge cert={cert} status="in-progress" />
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/[0.03] via-transparent to-transparent" />

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
                  >
                    <CertBadge cert={cert} status="earned" />
                  </motion.div>
                ))}

                {earned.length < 4 && (
                  <div className="flex items-center justify-center rounded-xl border border-dashed border-white/[0.06] bg-bg/40 px-4 py-6 text-center">
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
