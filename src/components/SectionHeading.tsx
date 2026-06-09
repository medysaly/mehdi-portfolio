"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body text-base text-neutral-500">{subtitle}</p>
      )}
      <div
        className={`mt-8 h-px w-10 bg-white/20 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
