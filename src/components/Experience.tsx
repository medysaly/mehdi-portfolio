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
  badge?: string;
  /** Monogram tile for an org with no logo art yet, same size as a badge. */
  mark?: string;
  /** Omit until the bullets are written. The row then renders flat, with no
      toggle, rather than expanding onto an empty list. */
  detail?: string[];
};

const roles: Role[] = [
  {
    org: "Funktasy",
    title: "Technology & Automation Lead",
    meta: "Remote",
    dates: "Sep 2026 – Present",
    current: true,
    badge: "/badges/funktasy.png",
  },
  {
    org: "Extern",
    title: "AI Agent Engineering Extern",
    meta: "Wayfair AI Agent Engineering Externship · Remote",
    dates: "Jul 2026 – Present",
    current: true,
    badge: "/badges/extern.png",
    detail: [
      "Build AI business-intelligence agents in n8n (self-hosted on Docker) that turn market and product data into decision-ready reports for Wayfair's rugs category",
      "Orchestrate multiple LLM providers (Google Gemini, Mistral, OpenRouter, Hugging Face) with prompt engineering and multi-step reasoning for classification, normalization, and analysis",
      "Engineer resilient data pipelines that pull product data from multiple retailers through APIs and web scraping, normalize it into clean JSON, and assemble it into styled HTML reports",
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

  // A role with no bullets yet still belongs in the list, but there is nothing
  // to open, so it renders as a plain row without the toggle affordance.
  const expandable = Boolean(role.detail?.length);

  const head = (
    <>
      {role.badge ? (
        <Image
          src={role.badge}
          alt=""
          width={176}
          height={176}
          sizes="56px"
          className="h-14 w-14 flex-shrink-0 object-contain"
        />
      ) : (
        <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#eef2fb] font-display text-[15px] font-bold tracking-tight text-[#274a78]">
          {role.mark}
        </span>
      )}

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
    </>
  );

  return (
    <div className={isLast ? "" : "border-b border-line-soft"}>
      {expandable ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-paper-soft/60 sm:px-6"
        >
          {head}

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
      ) : (
        <div className="flex w-full items-center gap-4 px-5 py-5 sm:px-6">
          {head}
          {/* Keeps the org names and dates aligned with the expandable rows,
              which reserve this much width for their toggle. */}
          <span aria-hidden className="h-5 w-5 flex-shrink-0" />
        </div>
      )}

      <AnimatePresence initial={false}>
        {expandable && open && (
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
              {role.detail?.map((line) => (
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
          title="Where I've been"
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
              defaultOpen={i === roles.findIndex((r) => r.detail?.length)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
