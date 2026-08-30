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
    name: "AI",
    full: true,
    items: [
      "Amazon Bedrock",
      "Amazon SageMaker",
      "Hugging Face",
      "OpenRouter",
      "LLMs",
      "RAG",
      "prompt engineering",
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
];

// One bordered container subdivided by hairlines, not a grid of separate
// cards. That is the defining trait of the reference's grouped lists.
//
// The hairlines used to be a hand-written array indexed by position, which
// silently produced a broken grid the moment a group moved or a `full` flag
// changed. This walks the groups instead and works out each cell's row and
// column, so the borders stay correct whatever order the list is in.
function cellLayout(groups: SkillGroup[]) {
  const cells: { row: number; col: number; full: boolean }[] = [];
  let row = 0;
  let col = 0;

  for (const group of groups) {
    if (group.full) {
      if (col === 1) row += 1; // close a half-filled row first
      cells.push({ row, col: 0, full: true });
      row += 1;
      col = 0;
    } else {
      cells.push({ row, col, full: false });
      if (col === 1) {
        row += 1;
        col = 0;
      } else {
        col = 1;
      }
    }
  }

  const lastRow = cells.reduce((max, c) => Math.max(max, c.row), 0);

  return cells.map((c) => {
    const hasNeighbour = cells.some((o) => o.row === c.row && o.col === 1);
    return [
      c.full ? "sm:col-span-2" : "",
      c.row !== lastRow ? "border-b" : "",
      !c.full && c.col === 0 && hasNeighbour ? "sm:border-r" : "",
    ]
      .filter(Boolean)
      .join(" ");
  });
}

const cellBorders = cellLayout(skills);

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="The short version" />

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
                I&apos;m Mehdi, a cloud and AI engineer finishing a B.S. in
                Computer Science at SNHU (November 2026). I&apos;m AWS Certified
                as a Solutions Architect Associate and Cloud Practitioner.
              </p>
              <p>
                My focus is infrastructure that runs itself, provisioned with
                Terraform and wired through CI/CD so a merge is the only manual
                step, with least-privilege IAM and sane networking underneath.
              </p>
              <p>
                I also build what runs on top: AI agents, LLM apps, and RAG
                systems on Amazon Bedrock. That combination is the point. Plenty
                of people can prototype a model. I can put one behind an API,
                deploy it, secure it, and keep it running.
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
