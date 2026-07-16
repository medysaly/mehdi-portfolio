"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "GPA", value: "3.71" },
  { label: "Graduating", value: "Aug 2026" },
  { label: "Location", value: "Stamford, CT / NYC" },
  { label: "School", value: "SNHU" },
];

const skillsSummary =
  "AWS (Lambda, EC2, API Gateway, DynamoDB, S3, VPC, IAM, CloudFront, Route 53, Bedrock) · Terraform · CloudFormation · Docker · Kubernetes · CI/CD (GitHub Actions) · Python · Linux · Bash · Networking · WAF · Security";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading title="About" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-5 font-body text-base leading-relaxed text-neutral-400"
      >
        <p>
          Cloud &amp; DevOps engineer on AWS. B.S. Computer Science (SNHU, Aug
          2026). AWS Certified Solutions Architect Associate &amp; Cloud
          Practitioner.
        </p>
        <p>
          I build and deploy cloud infrastructure on AWS and automate it end
          to end with infrastructure as code and CI/CD. Comfortable across
          compute, networking, containers, and security, and I build the
          applications that run on top.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 border-t border-white/[0.06] pt-6"
      >
        <p className="mb-3 text-[11px] uppercase tracking-[0.15em] text-neutral-500">
          Skills
        </p>
        <p className="font-body text-sm leading-relaxed text-neutral-500">
          {skillsSummary}
        </p>
      </motion.div>

      <motion.dl
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-8 grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-8"
      >
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-[11px] uppercase tracking-widest text-neutral-500">
              {fact.label}
            </dt>
            <dd className="mt-1 font-display text-base text-white">
              {fact.value}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
