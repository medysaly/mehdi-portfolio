"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "AWS Cloud Services",
    skills: [
      "Lambda",
      "EC2",
      "ECS / Fargate",
      "S3",
      "CloudFront",
      "EFS / EBS",
      "DynamoDB",
      "RDS",
      "API Gateway",
      "Route 53",
      "Load Balancer",
      "CloudWatch",
      "Bedrock",
      "SageMaker",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      "Terraform",
      "AWS CDK",
      "Docker",
      "Kubernetes",
      "EKS",
      "Helm",
      "GitHub Actions",
      "CI/CD Pipelines",
      "GitOps",
      "ArgoCD",
      "Prometheus",
      "Grafana",
      "Microservices",
    ],
  },
  {
    title: "Security & Networking",
    skills: [
      "IAM",
      "Roles & Policies",
      "Least Privilege",
      "VPC",
      "Security Groups",
      "NACLs",
      "OIDC",
      "WAF",
      "Encryption",
      "TLS / SSL",
      "DNS",
    ],
  },
  {
    title: "Languages & Data",
    skills: [
      "Python",
      "Bash",
      "YAML",
      "JavaScript / TypeScript",
      "SQL (PostgreSQL, MySQL)",
      "NoSQL (DynamoDB, MongoDB)",
      "REST APIs",
    ],
  },
  {
    title: "AI / ML Toolkit",
    skills: [
      "RAG Pipelines",
      "Prompt Engineering",
      "Amazon Bedrock",
      "SageMaker",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="skills"
          title="Things I can do"
          lead="the tools I use to take an idea from a blank AWS account to production"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2"
        >
          {categories.map((cat, i) => {
            const isLast = i === categories.length - 1;
            return (
              <div
                key={cat.title}
                className={`border-line-soft p-6 sm:p-7 ${
                  !isLast && i % 2 === 0 ? "sm:border-r" : ""
                } ${!isLast ? "border-b" : ""} ${isLast ? "sm:col-span-2" : ""}`}
              >
                <h3 className="font-display text-[18px] font-semibold tracking-[-0.03em] text-ink">
                  {cat.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-paper-soft px-2.5 py-1.5 font-mono text-[13px] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
