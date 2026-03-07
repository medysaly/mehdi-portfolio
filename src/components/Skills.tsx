"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "AWS & Cloud",
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
  },
  {
    title: "AI / ML",
    skills: [
      "RAG Pipelines",
      "LLM Orchestration",
      "Agentic Systems",
      "Vector Databases",
      "Prompt Engineering",
      "Fine-Tuning",
    ],
  },
  {
    title: "Software",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React Native",
      "Next.js",
      "Swift",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-xl border border-white/5 bg-surface p-6"
            >
              <h3 className="mb-5 font-mono text-sm font-medium text-accent-glow">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/5 bg-bg px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:border-accent/30 hover:text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
