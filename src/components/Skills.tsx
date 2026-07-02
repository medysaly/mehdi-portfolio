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
      "Bedrock",
      "SageMaker",
      "Cognito",
      "Amplify",
      "IAM",
      "SES",
      "CloudWatch",
      "AWS SAM",
      "Terraform",
      "CloudFormation",
      "Serverless",
      "Kubernetes",
    ],
  },
  {
    title: "AI / ML",
    skills: [
      "RAG Pipelines",
      "Hybrid Search",
      "Cross-Encoder Reranking",
      "RAGAS Evaluation",
      "LLM Orchestration",
      "Vector Databases",
      "Prompt Engineering",
      "Fine-Tuning",
      "LangChain",
      "Claude Code",
      "Cursor",
    ],
  },
  {
    title: "Software",
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
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-24 scroll-mt-24">
      <SectionHeading title="Skills" />

      <div className="space-y-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <h3 className="mb-3 text-[11px] uppercase tracking-widest text-neutral-500">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-body text-xs text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
