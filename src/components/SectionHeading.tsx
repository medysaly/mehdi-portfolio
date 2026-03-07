"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-neutral-500">{subtitle}</p>
      )}
      <div className="mx-auto mt-6 h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </motion.div>
  );
}
