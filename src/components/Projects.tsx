"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

type Project = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  github?: string;
  badge?: string;
  /** Live screenshot. Absent projects fall back to the spec panel below. */
  image?: string;
};

const featured: Project[] = [
  {
    title: "Unkommon.ai",
    tagline: "An AI receptionist that answers the phone and books the meeting",
    description:
      "A solo-built AI services platform on AWS. A voice receptionist (Vapi + Bedrock + Lambda) and a website chatbot qualify inbound leads and book appointments straight into Google Calendar. Fully serverless, from auth to inference.",
    highlights: [
      "Serverless end to end — Lambda, API Gateway, DynamoDB, Cognito, Amplify",
      "Claude Sonnet 4.5 and Haiku 4.5 on Amazon Bedrock for voice and chat",
      "Infrastructure defined and deployed with AWS SAM",
    ],
    stack: [
      "React",
      "TypeScript",
      "AWS Lambda",
      "Bedrock",
      "DynamoDB",
      "Cognito",
      "AWS SAM",
      "Vapi",
    ],
    link: "https://unkommon.ai",
    github: "https://github.com/medysaly/unkommon",
    badge: "Flagship",
    image: "/projects/unkommon.jpg",
  },
  {
    title: "Bees Knees AI",
    tagline: "A marketing site with a chatbot that costs 90% less to run",
    description:
      "Live marketing site for an AI agency with an embedded chatbot (Buzz) built on Claude Sonnet 4. Streaming responses over SSE, prompt caching, per-IP rate limiting, and a full security header policy.",
    highlights: [
      "Prompt caching cut inference cost roughly 90%",
      "Hardened with HSTS, CSP, and Permissions-Policy headers",
      "Cal.com booking flow and a custom WebGL shader hero",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Claude API",
      "Cal.com",
      "WebGL",
      "Vercel",
    ],
    link: "https://beesknees.ai",
    github: "https://github.com/medysaly/beesknees-website",
    badge: "Live site",
    image: "/projects/beesknees.jpg",
  },
  {
    title: "Company Policy RAG System",
    tagline: "Ask your documents anything — and measure whether it answered well",
    description:
      "A production-grade retrieval system with hybrid search, cross-encoder reranking, and RAGAS evaluation metrics. Upload any document set and query it in natural language.",
    highlights: [
      "Hybrid BM25 + dense retrieval with cross-encoder reranking",
      "RAGAS metrics to score faithfulness and answer relevance",
      "Python and FastAPI backend, deployed on Hugging Face Spaces",
    ],
    stack: [
      "Python",
      "LangChain",
      "FastAPI",
      "BM25",
      "Sentence Transformers",
      "RAGAS",
    ],
    link: "https://huggingface.co/spaces/medysaly/company-policy-rag",
    github: "https://github.com/medysaly/company-policy-rag",
    badge: "Live demo",
  },
];

/** Stand-in for projects with no screenshot — a pipeline diagram, not a mock UI. */
function SpecPanel({ project }: { project: Project }) {
  const steps = ["query", "hybrid retrieve", "rerank", "generate", "score"];

  return (
    <div className="flex h-full w-full flex-col justify-center gap-6 bg-[linear-gradient(150deg,#f7f9fc_0%,#eef2fb_100%)] px-8 py-10 sm:px-12">
      <p className="font-mono text-[12px] uppercase tracking-widest text-muted-light">
        retrieval pipeline
      </p>

      <ul className="space-y-2.5">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-3">
            <span className="font-mono text-[12px] text-muted-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-shrink-0 bg-line" style={{ width: 18 + i * 14 }} />
            <span className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink sm:text-[17px]">
              {step}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {["BM25", "dense", "cross-encoder", "RAGAS"].map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-line bg-white/70 px-2.5 py-1 font-mono text-[12px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="w-[86vw] max-w-[820px] flex-shrink-0 snap-center overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-300 hover:border-muted-light">
      {/* Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line-soft bg-paper-soft">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 900px) 86vw, 820px"
            className="object-cover object-top"
          />
        ) : (
          <SpecPanel project={project} />
        )}
      </div>

      {/* Caption */}
      <div className="p-7 sm:p-9">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[13px] text-muted-light">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-[24px] font-bold tracking-[-0.03em] text-ink sm:text-[26px]">
            {project.title}
          </h3>
          {project.badge && (
            <span className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-[12px] text-accent">
              {project.badge}
            </span>
          )}
        </div>

        <p className="mt-2 font-body text-[16px] text-accent sm:text-[17px]">
          {project.tagline}
        </p>

        <p className="mt-4 font-body text-[15.5px] leading-[1.65] text-ink-soft sm:text-[16px]">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="flex gap-3 font-body text-[14.5px] leading-relaxed text-muted"
            >
              <span
                aria-hidden
                className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-paper-soft px-2.5 py-1.5 font-mono text-[13px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-display text-[14px] font-semibold text-white transition-opacity duration-300 hover:opacity-80"
            >
              View live
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 font-display text-[14px] font-semibold text-ink transition-colors duration-300 hover:border-ink"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Track which card sits nearest the rail's centre so the counter and the
  // segmented bar below stay in sync with a free (non-paged) scroll.
  const syncActive = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const centre = rail.scrollLeft + rail.clientWidth / 2;
    const cards = Array.from(rail.children) as HTMLElement[];
    let nearest = 0;
    let best = Infinity;
    cards.forEach((card, i) => {
      const cardCentre = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCentre - centre);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    syncActive();
    rail.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      rail.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [syncActive]);

  const scrollTo = (i: number) => {
    const rail = railRef.current;
    const card = rail?.children[i] as HTMLElement | undefined;
    if (!rail || !card) return;
    rail.scrollTo({
      left: card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="projects"
          title="Some things I've built"
          lead="three projects I shipped end to end — architecture, code, deployment, and the bill"
        />
      </div>

      {/* Full-bleed rail: cards run past the container so the neighbours peek,
          exactly as on the reference. Padding centres the first and last card. */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12"
      >
        <div
          ref={railRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc((100vw-820px)/2))] pb-2"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Progress cue */}
        <div className="mx-auto mt-8 flex max-w-6xl items-center justify-center gap-4 px-6 lg:px-8">
          <span className="font-mono text-[13px] text-muted">
            {String(active + 1).padStart(2, "0")}
            <span className="text-muted-light"> / {String(featured.length).padStart(2, "0")}</span>
          </span>

          <div className="flex items-center gap-1.5">
            {featured.map((project, i) => (
              <button
                key={project.title}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Go to ${project.title}`}
                aria-current={i === active}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-ink" : "w-4 bg-line hover:bg-muted-light"
                }`}
              />
            ))}
          </div>

          <span className="hidden font-mono text-[13px] text-muted-light sm:inline">
            keep scrolling &rarr;
          </span>
        </div>
      </motion.div>
    </section>
  );
}
