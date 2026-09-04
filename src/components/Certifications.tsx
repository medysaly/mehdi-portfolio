"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  issuer: string;
  date: string;
  /** The real issued badge, trimmed and squared in /public/badges. */
  badge?: string;
  /** Fallback tile for anything with no badge art to show. */
  mark?: string;
};

const certs: Cert[] = [
  {
    // First, because a degree is the credential recruiters filter on.
    // Conferred 1 September 2026, so it carries a month rather than the bare
    // year the certifications use: a fresh graduation date is worth being
    // precise about while it is still recent.
    name: "B.S. Computer Science",
    issuer: "Southern New Hampshire University",
    date: "Sep 2026",
    // The shield alone. The full lockup is a wide shield-plus-wordmark, and
    // its wordmark would be a few pixels tall in a 56px slot.
    badge: "/badges/snhu.png",
  },
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
              {/* The badges carry their own colour, so no tinted tile behind.
                  A row with no badge art gets a monogram at the same size, so
                  the column of names still lines up. */}
              {cert.badge ? (
                <Image
                  src={cert.badge}
                  alt=""
                  width={176}
                  height={176}
                  sizes="56px"
                  // Rounding only shows on badges that fill their box, like
                  // the SNHU shield's navy field. The cut-out marks never
                  // reach their corners, so it costs them nothing.
                  className="h-14 w-14 flex-shrink-0 rounded-xl object-contain"
                />
              ) : (
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef2fb] font-display text-[13px] font-bold tracking-tight text-[#274a78]">
                  {cert.mark}
                </span>
              )}

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
