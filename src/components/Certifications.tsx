"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  issuer: string;
  date: string;
  /** The real issued badge, trimmed and squared in /public/badges. */
  badge: string;
};

const certs: Cert[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2026",
    badge: "/badges/aws-solutions-architect-associate.png",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    badge: "/badges/aws-cloud-practitioner.png",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    date: "2026",
    badge: "/badges/google-it-support.png",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Credentials" />

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
              {/* The badges carry their own colour, so no tinted tile behind. */}
              <Image
                src={cert.badge}
                alt=""
                width={176}
                height={176}
                sizes="56px"
                className="h-14 w-14 flex-shrink-0 object-contain"
              />

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
