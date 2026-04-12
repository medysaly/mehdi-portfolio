"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "AWS & Cloud",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    skills: [
      "Lambda",
      "DynamoDB",
      "API Gateway",
      "EC2",
      "S3",
      "SageMaker",
      "Bedrock",
      "Serverless",
      "CloudFormation",
      "Terraform",
    ],
    colSpan: "md:col-span-2",
    rowSpan: "",
  },
  {
    title: "AI / ML",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    skills: [
      "RAG Pipelines",
      "LLM Orchestration",
      "Agentic Systems",
      "Vector Databases",
      "Prompt Engineering",
      "Fine-Tuning",
      "LangGraph",
      "Claude Code",
      "Cursor",
    ],
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    title: "Software",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React / Next.js",
      "React Native",
      "Swift",
      "FastAPI",
    ],
    colSpan: "md:col-span-2",
    rowSpan: "",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        {/* Bento grid — asymmetric */}
        <div className="grid gap-4 md:grid-cols-3 md:auto-rows-auto">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(99,102,241,0.06)] ${cat.colSpan} ${cat.rowSpan}`}
            >
              {/* Hover gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <h3 className="mb-5 flex items-center gap-2.5 font-display text-sm font-semibold text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent-glow">
                    {cat.icon}
                  </span>
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="cursor-default rounded-md border border-white/[0.06] bg-bg px-3 py-1.5 font-body text-xs text-neutral-400 transition-all duration-200 hover:border-accent/30 hover:text-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
