"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  lead,
  align = "left",
}: {
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "text-center" : ""}
    >
      <h2 className="font-display text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink sm:text-display-2">
        {title}
      </h2>

      {lead && (
        <p
          className={`mt-3 max-w-2xl font-body text-[1.0625rem] leading-relaxed text-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      )}
    </motion.div>
  );
}
