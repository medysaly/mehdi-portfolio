"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex items-center gap-4"
    >
      <h2 className="font-display text-2xl font-semibold text-white">
        {title}
      </h2>
      <div className="h-px flex-1 bg-white/[0.08]" />
    </motion.div>
  );
}
