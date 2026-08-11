"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  issuer: string;
  level: string;
  date: string;
  code: string;
  status: "earned" | "in-progress";
  /** Short issuer mark, standing in for the reference's company logos. */
  mark: string;
  markClass: string;
  detail: string[];
};

const certs: Cert[] = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    level: "Associate",
    date: "Jun 2026",
    code: "SAA-C03",
    status: "earned",
    mark: "AWS",
    markClass: "bg-[#fff1e3] text-[#c2570a]",
    detail: [
      "Designing resilient, multi-AZ architectures on AWS",
      "Cost and performance trade-offs across compute, storage, and networking",
      "Security controls: IAM, VPC design, encryption at rest and in transit",
    ],
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Foundational",
    date: "May 2026",
    code: "CLF-C02",
    status: "earned",
    mark: "AWS",
    markClass: "bg-[#fff1e3] text-[#c2570a]",
    detail: [
      "Core AWS services, the shared responsibility model, and the Well-Architected pillars",
      "Billing, pricing models, and account-level cost management",
    ],
  },
  {
    name: "Google IT Support Professional",
    issuer: "Google",
    level: "Professional",
    date: "Jul 2026",
    code: "v.3",
    status: "earned",
    mark: "G",
    markClass: "bg-[#e8f0fe] text-[#1a73e8]",
    detail: [
      "Networking, operating systems, and system administration fundamentals",
      "Troubleshooting methodology and end-user support practice",
    ],
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    level: "Associate",
    date: "Late Aug 2026",
    code: "TA-003",
    status: "in-progress",
    mark: "TF",
    markClass: "bg-[#f0ecfd] text-[#7b42bc]",
    detail: [
      "Currently studying — state management, modules, and workspaces",
      "Provisioning the infrastructure behind Unkommon.ai as practice",
    ],
  },
];

function Row({
  cert,
  isLast,
  defaultOpen = false,
}: {
  cert: Cert;
  isLast: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const earned = cert.status === "earned";

  return (
    <div className={isLast ? "" : "border-b border-line-soft"}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-paper-soft/60 sm:px-6"
      >
        <span
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl font-display text-[13px] font-bold tracking-tight ${cert.markClass}`}
        >
          {cert.mark}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-display text-[17px] font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-[18px]">
            {cert.name}
          </span>
          <span className="mt-0.5 block truncate font-mono text-[12.5px] text-muted sm:text-[13px]">
            {cert.issuer} · {cert.level} · {cert.code}
          </span>
        </span>

        <span
          className={`hidden flex-shrink-0 font-mono text-[13px] sm:block ${
            earned ? "text-muted" : "text-accent"
          }`}
        >
          {earned ? cert.date : `in progress · ${cert.date}`}
        </span>

        {/* Reference uses a + that becomes an × when the row is open */}
        <span
          aria-hidden
          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center text-muted-light transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" d="M8 3v10M3 8h10" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2.5 px-5 pb-6 pl-[3.75rem] sm:px-6 sm:pl-[4.25rem]">
              <li className="font-mono text-[12.5px] text-muted sm:hidden">
                {earned ? cert.date : `in progress · ${cert.date}`}
              </li>
              {cert.detail.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 font-body text-[15px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="certifications"
          title="Certified, and still going"
          lead="three earned, one in progress · tap any row to expand"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-hidden rounded-xl border border-line"
        >
          {certs.map((cert, i) => (
            <Row
              key={cert.name}
              cert={cert}
              isLast={i === certs.length - 1}
              // Reference lands with its top entry already expanded, so the
              // row pattern is legible without a click.
              defaultOpen={i === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
