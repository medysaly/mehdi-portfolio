"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  issuer: string;
  level: string;
  date: string;
  code: string;
  status: "earned" | "in-progress";
};

const certs: Cert[] = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    level: "Associate",
    date: "Jun 2026",
    code: "SAA-C03",
    status: "earned",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    level: "Foundational",
    date: "May 2026",
    code: "CLF-C02",
    status: "earned",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    level: "Associate",
    date: "Late Aug 2026",
    code: "TA-003",
    status: "in-progress",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="mt-24 scroll-mt-24">
      <SectionHeading title="Certifications" />

      <ul className="space-y-3">
        {certs.map((cert, i) => (
          <motion.li
            key={cert.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-start justify-between gap-4 border-b border-white/[0.05] py-4 last:border-b-0"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="font-display text-sm font-medium text-white">
                  {cert.name}
                </p>
                {cert.status === "earned" ? (
                  <span className="inline-flex items-center gap-1 rounded border border-green-500/20 bg-green-500/[0.06] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-green-400">
                    Earned
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                    In progress
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-[11px] text-neutral-500">
                {cert.issuer} · {cert.level} · {cert.code}
              </p>
            </div>
            <span className="flex-shrink-0 font-mono text-xs text-neutral-500">
              {cert.date}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
