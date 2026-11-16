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
  /** Org logo, trimmed and squared in /public/badges. */
  badge?: string;
  /** Monogram tile for an org with no logo art yet, same size as a badge. */
  mark?: string;
  /** Omit until the bullets are written. The row then renders flat, with no
      toggle, rather than expanding onto an empty list. */
  detail?: string[];
  clientEngagement?: {
    name: string;
    title: string;
    dates: string;
    detail: string[];
  };
};

const roles: Role[] = [
  {
    org: "Unkommon",
    title: "Founder & Cloud/AI Engineer",
    meta: "Cloud & AI consultancy",
    dates: "Jan 2026 – Present",
    badge: "/badges/unkommon.png",
    detail: [
      "Founded Unkommon and lead its cloud and AI engineering, from product architecture through deployment",
      "Built the AI platform on AWS with Python, infrastructure as code, and automated tests in GitHub Actions",
      "Own the website, AI chatbot, and voice receptionist that answer questions, book appointments, and capture leads",
    ],
    clientEngagement: {
      name: "ISA GRUTMAN",
      title: "Cloud & IT Consultant",
      dates: "Sep 2026 – Present",
      detail: [
        "Leading a Microsoft 365 to Google Workspace migration across email, contacts, calendars, and tasks, including account setup, licenses, and aliases",
        "Troubleshooting migration errors, reviewing import logs, and managing incremental imports ahead of the email cutover",
        "Customizing Shopify theme code and CSS for reusable page templates, navigation, and responsive layouts, with changes reviewed in an unpublished theme",
        "Documenting configurations, implementation decisions, and validation steps for maintenance and handoff",
      ],
    },
  },
  {
    org: "Funktasy",
    title: "Technology & Automation Lead",
    meta: "Remote",
    dates: "Aug–Nov 2026",
    badge: "/badges/funktasy.png",
    detail: [
      "Worked on ClickUp workflow automation to replace slow manual processes",
      "Built event-driven release workflow automations on AWS with Terraform, Lambda, and EventBridge to streamline handoffs across teams",
      "Built Python AI content automation tools for the social media team using multi-agent workflows, LLMs through MCP, and source data from Apify",
    ],
  },
  {
    org: "Extern",
    title: "AI Agent Engineering Extern",
    meta: "Wayfair AI Agent Engineering Externship · Remote",
    dates: "Jul–Sep 2026",
    badge: "/badges/extern.png",
    detail: [
      "Built AI business-intelligence agents in n8n (self-hosted on Docker) that turned market and product data into decision-ready reports for Wayfair's rugs category",
      "Orchestrated multiple LLM providers (Google Gemini, Mistral, OpenRouter, Hugging Face) with prompt engineering and multi-step reasoning for classification, normalization, and analysis",
      "Engineered data pipelines that pulled product data from multiple retailers through APIs and web scraping, normalized it into clean JSON, and assembled it into styled HTML reports",
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
  const expandable = Boolean(role.detail?.length || role.clientEngagement);

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
        </span>
        <span className="mt-0.5 block truncate font-mono text-[12.5px] text-muted sm:text-[13px]">
          {role.title} · {role.meta}
        </span>
        <span className="mt-1 block font-mono text-[12.5px] text-muted sm:hidden">
          {role.dates}
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
            <ul className="space-y-2.5 px-5 pl-[3.75rem] sm:px-6 sm:pl-[4.25rem]">
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
            {role.clientEngagement && (
              <div className="mx-5 mt-6 border-l-2 border-accent/30 pb-1 pl-5 sm:mx-6 sm:ml-[4.25rem]">
                <p className="font-mono text-[12px] text-accent">client engagement</p>
                <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-[16px] font-semibold text-ink">
                    {role.clientEngagement.name} · {role.clientEngagement.title}
                  </h4>
                  <span className="font-mono text-[12.5px] text-muted">
                    {role.clientEngagement.dates}
                  </span>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {role.clientEngagement.detail.map((line) => (
                    <li key={line} className="flex gap-3 font-body text-[15px] leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="h-6" aria-hidden />
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
          lead="building AI agent workflows and automation"
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
