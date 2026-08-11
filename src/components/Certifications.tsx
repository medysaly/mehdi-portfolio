"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  issuer: string;
  date: string;
  /** Short issuer mark, standing in for the reference's company logos. */
  mark: string;
  markClass: string;
};

const certs: Cert[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    mark: "AWS",
    markClass: "bg-[#fff1e3] text-[#c2570a]",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    mark: "AWS",
    markClass: "bg-[#fff1e3] text-[#c2570a]",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "2026",
    mark: "G",
    markClass: "bg-[#e8f0fe] text-[#1a73e8]",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="certifications" title="Certifications" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-hidden rounded-xl border border-line"
        >
          {certs.map((cert, i) => (
            <div
              key={cert.name}
              className={`flex items-center gap-4 px-5 py-5 sm:px-6 ${
                i < certs.length - 1 ? "border-b border-line-soft" : ""
              }`}
            >
              <span
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl font-display text-[13px] font-bold tracking-tight ${cert.markClass}`}
              >
                {cert.mark}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-[18px]">
                  {cert.name}
                </h3>
                <p className="mt-0.5 truncate font-mono text-[12.5px] text-muted sm:text-[13px]">
                  {cert.issuer}
                </p>
              </div>

              <span className="flex-shrink-0 font-mono text-[13px] text-muted">
                {cert.date}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
