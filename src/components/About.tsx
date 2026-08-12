"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

type SkillGroup = {
  name: string;
  items: string[];
  /** Wide groups take the full row instead of half of it. */
  full?: boolean;
};

const skills: SkillGroup[] = [
  {
    name: "AWS",
    full: true,
    items: [
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "EventBridge",
      "SNS",
      "CloudWatch",
      "ECR",
      "Secrets Manager",
      "WAF",
      "AWS Config",
      "Cost Anomaly Detection",
      "Bedrock",
      "IAM",
      "VPC",
    ],
  },
  {
    name: "Infrastructure as Code",
    items: ["Terraform", "AWS SAM", "CloudFormation"],
  },
  {
    name: "Containers & CI/CD",
    items: ["Docker", "GitHub Actions", "CI/CD pipelines"],
  },
  {
    name: "Security",
    items: [
      "IAM least-privilege",
      "WAF",
      "OIDC",
      "HMAC-verified webhooks",
      "Secrets Manager",
    ],
  },
  {
    name: "Languages & Tools",
    items: ["Python", "Bash", "Linux", "Git", "YAML", "JavaScript/TypeScript", "SQL"],
  },
  {
    name: "AI",
    full: true,
    items: [
      "Amazon Bedrock",
      "Amazon SageMaker",
      "LLMs",
      "RAG",
      "prompt engineering",
    ],
  },
];

// One bordered container subdivided by hairlines, not a grid of separate
// cards. That is the defining trait of the reference's grouped lists.
const cellBorders = [
  "sm:col-span-2 border-b",
  "border-b sm:border-r",
  "border-b",
  "border-b sm:border-r",
  "border-b",
  "sm:col-span-2",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="A little about me" />

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Portrait + bio */}
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
                width={1000}
                height={1000}
                sizes="300px"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8 space-y-6 font-body text-lead text-ink-soft">
              <p>
                I&apos;m Mehdi, a Cloud &amp; DevOps engineer finishing a B.S. in
                Computer Science at SNHU (November 2026). I&apos;m AWS Certified
                as a Solutions Architect Associate and Cloud Practitioner.
              </p>
              <p>
                My focus is infrastructure that runs itself: provisioned with
                Terraform, containerized with Docker, and wired through CI/CD so
                a merge is the only manual step. I&apos;m currently going deeper
                on Kubernetes.
              </p>
              <p>
                I also build the applications that run on top: AI agents, LLM
                apps, and RAG systems. That&apos;s what makes me useful on an
                infrastructure team. I know what the workload actually needs,
                because I&apos;ve built the workload.
              </p>
            </div>
          </motion.div>

          {/* Tech I use */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
          >
            <p className="font-mono text-[14px] text-muted">tech I use</p>

            <div className="mt-5 grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
              {skills.map((group, i) => (
                <div
                  key={group.name}
                  className={`border-line-soft p-6 ${cellBorders[i]}`}
                >
                  <h3 className="font-display text-[16px] font-semibold tracking-[-0.03em] text-ink">
                    {group.name}
                  </h3>

                  <ul className="mt-3.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-paper-soft px-3 py-1.5 font-mono text-[12.5px] text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
