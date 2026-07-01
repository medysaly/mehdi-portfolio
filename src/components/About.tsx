"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillsSummary =
  "AWS (Lambda, EC2, S3, IAM, API Gateway, VPC, DynamoDB, RDS, CloudFront, Route 53, Bedrock, SageMaker) · Python · Terraform · CloudFormation · Docker · Kubernetes · CI/CD · Cloud Networking & Security (VPC, Security Groups, IAM, WAF, SSL/TLS, DNS) · LangChain · RAG · REST APIs · PostgreSQL · MongoDB · JavaScript/Next.js";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading title="About" index="01 — Profile" align="left" />

        <div className="grid gap-12 md:grid-cols-5">
          {/* Text — wider column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="space-y-6 font-body text-base leading-relaxed text-neutral-400 sm:text-lg">
              <p>
                I&apos;m a Cloud Engineer and Computer Science graduate (SNHU,
                August 2026, GPA 3.71) with AWS Certified Cloud Practitioner
                and AWS Solutions Architect Associate certifications.
              </p>
              <p>
                I build and deploy production systems on AWS: serverless
                architectures, AI-powered backends, and automated cloud
                infrastructure using Lambda, API Gateway, DynamoDB, Bedrock,
                CloudFormation, and Terraform.
              </p>
              <p>
                Most of my work is hands-on: designing cloud environments
                from scratch, integrating AI services into real applications,
                and writing the Python and IaC code that keeps it all
                running.
              </p>
            </div>

            {/* Skills prose */}
            <div className="mt-10 border-t border-white/[0.06] pt-6">
              <p className="mb-3 text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                Skills
              </p>
              <p className="font-body text-sm leading-relaxed text-neutral-500">
                {skillsSummary}
              </p>
            </div>

            {/* Availability */}
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-3.5 py-1.5 text-xs text-neutral-300">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
                Open to cloud engineering, DevOps, and AI infrastructure roles
              </span>
            </div>
          </motion.div>

          {/* Stats — narrower column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4 md:col-span-2"
          >
            {[
              { label: "GPA", value: "3.71", detail: "Southern New Hampshire University", tag: "Dean's List" },
              { label: "Graduating", value: "Aug 2026", detail: "Computer Science, B.S.", tag: undefined },
              { label: "Location", value: "CT / NYC", detail: "Stamford, Connecticut", tag: undefined },
              { label: "Focus", value: "Cloud + AI", detail: "AWS, Serverless, IaC", tag: undefined },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="group rounded-xl border border-white/[0.06] bg-surface/60 p-5 transition-all duration-300 hover:border-white/15 hover:bg-surface"
              >
                <div className="flex items-center gap-2">
                  <p className="font-display text-xl font-semibold text-white">
                    {stat.value}
                  </p>
                  {stat.tag && (
                    <span className="rounded border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-neutral-400">
                      {stat.tag}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-[11px] uppercase tracking-wider text-neutral-500">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-neutral-600">
                  {stat.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
