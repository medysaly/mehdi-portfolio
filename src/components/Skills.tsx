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
