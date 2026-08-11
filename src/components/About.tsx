"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="about" title="A little about me" />

        {/* Portrait left, bio right. The narrower first column keeps the photo
            at the reference's size instead of stretching it to half the page. */}
        <div className="mt-14 grid gap-12 md:grid-cols-[300px_1fr] md:gap-16">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="max-w-2xl space-y-6 font-body text-lead text-ink-soft"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
