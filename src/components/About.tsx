"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const facts = [
  { label: "Degree", value: "B.S. Computer Science" },
  { label: "School", value: "SNHU" },
  { label: "GPA", value: "3.71" },
  { label: "Graduating", value: "Aug 2026" },
  { label: "Location", value: "Stamford, CT / NYC" },
  { label: "Open to", value: "Cloud · DevOps · Platform" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="about" title="A little about me" />

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
          {/* Photo + bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="aspect-square w-full max-w-[300px] overflow-hidden rounded-2xl border border-line bg-paper-soft">
              <Image
                src="/mehdi-portrait.jpg"
                alt="Mehdi Salhi"
                width={800}
                height={1000}
                sizes="300px"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="mt-8 space-y-6 font-body text-lead text-ink-soft">
              <p>
                I&apos;m Mehdi, a Cloud &amp; DevOps engineer finishing a B.S. in
                Computer Science at SNHU. I&apos;m AWS Certified as a Solutions
                Architect Associate and Cloud Practitioner.
              </p>
              <p>
                My focus is infrastructure that runs itself — provisioned with
                Terraform and AWS CDK, containerized with Docker and Kubernetes,
                and wired through CI/CD so a merge is the only manual step.
              </p>
              <p>
                I also build the applications on top, which is what makes me
                useful on an infrastructure team: I know what the workload
                actually needs.
              </p>
            </div>
          </motion.div>

          {/* At a glance */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
          >
            <p className="font-mono text-[14px] text-muted">at a glance</p>

            <dl className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl border border-line">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`p-6 border-line-soft ${
                    i % 2 === 0 ? "border-r" : ""
                  } ${i < facts.length - 2 ? "border-b" : ""}`}
                >
                  <dt className="font-mono text-[12px] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-display text-[18px] font-semibold tracking-[-0.03em] text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
