"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "AWS & Cloud",
    emoji: "☁️",
    skills: ["Lambda", "DynamoDB", "API Gateway", "EC2", "S3", "SageMaker", "Bedrock", "Serverless", "CloudFormation", "Terraform"],
  },
  {
    title: "AI / ML",
    emoji: "🤖",
    skills: ["RAG Pipelines", "LLM Orchestration", "Agentic Systems", "Vector Databases", "Prompt Engineering", "Fine-Tuning", "Claude Code", "Cursor"],
  },
  {
    title: "Software",
    emoji: "⚡",
    skills: ["Python", "JavaScript", "TypeScript", "Node.js", "React / Next.js", "React Native", "Swift", "FastAPI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="group rounded-xl border border-white/5 bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]"
            >
              <h3 className="mb-5 flex items-center gap-2 font-mono text-sm font-medium text-accent-glow">
                <span>{cat.emoji}</span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-md border border-white/5 bg-bg px-3 py-1.5 text-xs text-neutral-400 transition-all duration-200 hover:border-accent/40 hover:bg-accent/5 hover:text-white hover:shadow-[0_0_10px_rgba(99,102,241,0.2)]"
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
