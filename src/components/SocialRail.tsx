"use client";

import { motion } from "framer-motion";
import { EMAIL, socials } from "./icons";

export default function SocialRail() {
  return (
    <>
      {/* Left icon rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="fixed bottom-0 left-6 z-30 hidden flex-col items-center gap-5 xl:flex"
      >
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        ))}
        <span className="mt-4 h-28 w-px bg-line" />
      </motion.div>

      {/* Right vertical email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="fixed bottom-0 right-6 z-30 hidden flex-col items-center gap-6 xl:flex"
      >
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-[13px] tracking-widest text-ink-soft transition-colors hover:text-accent"
          style={{ writingMode: "vertical-rl" }}
        >
          {EMAIL}
        </a>
        <span className="h-28 w-px bg-line" />
      </motion.div>
    </>
  );
}
