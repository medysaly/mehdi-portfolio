"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mt-24 scroll-mt-24">
      <SectionHeading title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-6 font-body text-base leading-relaxed text-neutral-400"
      >
        <p>
          I&apos;m open to cloud engineering, DevOps, and AI infrastructure
          roles. The best way to reach me is by email — I&apos;ll get back to
          you within a day.
        </p>

        <a
          href="mailto:mehdisalhi.dev@gmail.com"
          className="inline-flex items-center gap-2 font-display text-lg text-white transition-colors hover:text-accent-glow"
        >
          mehdisalhi.dev@gmail.com
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
