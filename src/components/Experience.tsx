"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

type Role = {
  org: string;
  title: string;
  meta: string;
  dates: string;
  current?: boolean;
  /** Org logo, trimmed and squared in /public/badges. */
  badge: string;
  detail: string[];
};

const roles: Role[] = [
  {
    org: "Extern",
    title: "AI Agent Engineering Extern",
    meta: "Wayfair AI Agent Engineering Externship · Remote",
    dates: "Jul 2026 – Present",
    current: true,
    badge: "/badges/extern.png",
    detail: [
      "Building AI-agent workflows in n8n that research product trends across Amazon, Instagram, and Pinterest and surface top-selling products to a data dashboard",
      "Automating multi-source data collection and trend analysis with AI agents, LLMs, and API integrations",
    ],
  },
];

function Row({
  role,
  isLast,
  defaultOpen = false,
}: {
  role: Role;
  isLast: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={isLast ? "" : "border-b border-line-soft"}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-paper-soft/60 sm:px-6"
      >
        <Image
          src={role.badge}
          alt=""
          width={176}
          height={176}
          sizes="56px"
          className="h-14 w-14 flex-shrink-0 object-contain"
        />

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display text-[17px] font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-[18px]">
              {role.org}
            </span>
            {role.current && (
              <span className="flex items-center gap-1.5 rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11.5px] text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                current
              </span>
            )}
          </span>
          <span className="mt-0.5 block truncate font-mono text-[12.5px] text-muted sm:text-[13px]">
            {role.title} · {role.meta}
          </span>
        </span>

        <span className="hidden flex-shrink-0 font-mono text-[13px] text-muted sm:block">
          {role.dates}
        </span>

        <span
          aria-hidden
          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center text-muted-light transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 16 16"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" d="M8 3v10M3 8h10" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-2.5 px-5 pb-6 pl-[3.75rem] sm:px-6 sm:pl-[4.25rem]">
              <li className="font-mono text-[12.5px] text-muted sm:hidden">
                {role.dates}
              </li>
              {role.detail.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 font-body text-[15px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Where I've worked"
          lead="building AI agent workflows while I finish the degree"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-hidden rounded-xl border border-line"
        >
          {roles.map((role, i) => (
            <Row
              key={role.org}
              role={role}
              isLast={i === roles.length - 1}
              defaultOpen={i === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
