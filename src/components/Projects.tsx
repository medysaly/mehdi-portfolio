"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, GithubIcon } from "./icons";

/** Architecture panel shown for projects with no live site to screenshot. */
type Panel = {
  label: string;
  steps: string[];
  tags: string[];
};

type Project = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  github?: string;
  badge?: string;
  /** Live screenshot. Projects without one fall back to `panel`. */
  image?: string;
  panel?: Panel;
};

// Copy follows the resume (Mehdi_Salhi_Cloud_Engineer.pdf), with architecture
// detail filled in from each repo's README.
const featured: Project[] = [
  {
    title: "AWS Cost Watchdog",
    tagline: "A FinOps watchdog that found a $21/month zombie subscription on day one",
    description:
      "Serverless FinOps monitoring for AWS: daily cost digests, idle-resource detection, tag enforcement, and anomaly alerts, all running for under $2/month.",
    highlights: [
      "Automated daily cost and waste monitoring (spend digests, idle-resource detection, tag-compliance checks via AWS Config, and cost-anomaly detection) across four event-driven Python Lambdas on EventBridge Scheduler and SNS, pushing findings to Slack and Telegram in real time",
      "Persisted findings to DynamoDB and surfaced them in a React dashboard served through an API Gateway HTTP API and S3/CloudFront",
      "Provisioned the whole stack as code with Terraform (remote S3 state, DynamoDB locking) and shipped it via GitHub Actions CI/CD using OIDC federation, with zero static AWS credentials",
    ],
    stack: [
      "Terraform",
      "Lambda",
      "EventBridge Scheduler",
      "SNS",
      "DynamoDB",
      "API Gateway",
      "Python",
      "React",
    ],
    github: "https://github.com/medysaly/aws-cost-watchdog",
    badge: "FinOps",
    panel: {
      label: "event-driven finops stack",
      steps: [
        "EventBridge cron",
        "4 × Python Lambda",
        "DynamoDB findings",
        "Slack + Telegram",
        "React dashboard",
      ],
      tags: ["Terraform", "OIDC", "AWS Config", "< $2/mo"],
    },
  },
  {
    title: "StockWatch",
    tagline: "A daily market brief that writes itself, for a few dollars a month",
    description:
      "A serverless AI market brief on AWS. Pulls real price and news data, summarizes it with Claude, and runs hands-free on a daily schedule, every piece of it provisioned as code.",
    highlights: [
      "Automated a daily AI market brief that pulls price and news data via yfinance and summarizes it with Claude, running hands-free on an EventBridge daily schedule",
      "Guarded the LLM output with automated pytest checks (non-empty, no refusals) enforced in a GitHub Actions pipeline alongside ruff linting and a terraform plan gate",
      "Deployed as an ARM64 container image on ECR with zero static AWS credentials via GitHub OIDC, with API keys in a single Secrets Manager secret behind a least-privilege IAM policy",
    ],
    stack: [
      "Python",
      "Lambda (ARM64)",
      "ECR",
      "EventBridge",
      "Terraform",
      "GitHub Actions",
      "Claude API",
      "Docker",
    ],
    github: "https://github.com/medysaly/stockwatch",
    badge: "Serverless AI",
    panel: {
      label: "daily brief pipeline",
      steps: [
        "EventBridge (daily)",
        "Lambda (arm64)",
        "yfinance → data",
        "Claude → summary",
        "CloudWatch logs",
      ],
      tags: ["ECR", "Secrets Manager", "Terraform", "OIDC"],
    },
  },
  {
    title: "Unkommon.ai",
    tagline: "An AI receptionist that answers the phone and books the meeting",
    description:
      "A full-stack AI website on a serverless AWS backend: a React site with an AI chatbot and a Vapi voice receptionist that answer questions, book appointments, and capture leads.",
    highlights: [
      "Built and deployed the site and serverless backend end to end, across three Lambdas behind API Gateway, with infrastructure as code in AWS SAM",
      "Cut chatbot latency and Bedrock spend by front-running a Trie-based intent classifier ahead of Claude Haiku 4.5 streaming responses, so common questions never reach the model",
      "Hardened it with a WAFv2 web ACL, HMAC-verified webhooks, least-privilege IAM, and Secrets Manager, over a DynamoDB data layer with Global Secondary Indexes, tested through a GitHub Actions pytest pipeline",
    ],
    stack: [
      "React",
      "TypeScript",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Bedrock",
      "AWS SAM",
      "WAF",
      "Vapi",
    ],
    link: "https://unkommon.ai",
    github: "https://github.com/medysaly/unkommon",
    badge: "Flagship",
    image: "/projects/unkommon.jpg",
  },
  {
    title: "Company Policy RAG",
    tagline: "Ask your documents anything, then measure whether it answered well",
    description:
      "Retrieval-augmented generation over policy documents, with hybrid retrieval and cross-encoder reranking, scored against a real evaluation set rather than vibes.",
    highlights: [
      "Built a RAG pipeline with hybrid retrieval (dense embeddings and BM25) and cross-encoder reranking, measured with RAGAS at 1.00 faithfulness and 1.00 context precision on a 10-question evaluation set",
      "Engineered the ingestion and chunking pipeline with unit tests and a GitHub Actions CI pipeline, documenting the key retrieval design tradeoffs",
      "Served it through a FastAPI backend with a Streamlit UI, containerized with Docker and deployed on Hugging Face Spaces",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "BM25",
      "Cross-encoder",
      "RAGAS",
      "Docker",
    ],
    link: "https://huggingface.co/spaces/medysaly/company-policy-rag",
    github: "https://github.com/medysaly/company-policy-rag",
    // Not "Live demo". The Hugging Face Space is currently returning a
    // capacity error, so the badge points at the measured result instead.
    badge: "RAGAS 1.00",
    panel: {
      label: "retrieval pipeline",
      steps: [
        "query",
        "hybrid retrieve",
        "cross-encoder rerank",
        "generate",
        "RAGAS score",
      ],
      tags: ["FastAPI", "Streamlit", "Docker", "1.00 faith."],
    },
  },
  {
    title: "Bees Knees AI",
    tagline: "A marketing site with a chatbot that costs 90% less to run",
    description:
      "Live marketing site for an AI agency with an embedded chatbot (Buzz) built on Claude. Streaming responses over SSE, prompt caching, per-IP rate limiting, and a full security header policy.",
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
];

/** Stand-in for projects with no live site: a real pipeline, not a mock UI. */
function SpecPanel({ panel }: { panel: Panel }) {
  return (
    // Wash lives on the parent column so screenshot and panel cards match.
    <div className="flex h-full w-full flex-col justify-center gap-5 px-7 py-8 sm:px-9">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted-light">
        {panel.label}
      </p>

      <ul className="space-y-2">
        {panel.steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] text-muted-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              aria-hidden
              className="h-px flex-shrink-0 bg-line"
              style={{ width: 14 + i * 10 }}
            />
            <span className="font-display text-[13px] font-semibold tracking-[-0.02em] text-ink sm:text-[14px]">
              {step}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {panel.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-line bg-white/70 px-2 py-0.5 font-mono text-[11px] text-muted"
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
    // Visual beside the text rather than above it, so the whole card fits on
    // screen without vertical scrolling. Stacks back to vertical on mobile.
    <article className="flex w-[88vw] max-w-[940px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors duration-300 hover:border-muted-light sm:flex-row">
      {/* Visual. The screenshots are 16:10, but this column is tall and narrow,
          so cropping them to fill it slices the page mid-word. So the shot sits
          whole inside a browser frame, centred on the same wash the
          architecture panels use, and the two card types stay consistent. */}
      <div className="relative flex w-full flex-shrink-0 items-center justify-center overflow-hidden border-b border-line-soft bg-[linear-gradient(150deg,#f7f9fc_0%,#eef2fb_100%)] sm:w-[42%] sm:border-b-0 sm:border-r">
        {project.image ? (
          <div className="w-full p-6 sm:p-7">
            <div className="overflow-hidden rounded-lg border border-line bg-white shadow-card">
              <div className="flex items-center gap-1.5 border-b border-line-soft bg-paper-soft px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                {project.link && (
                  <span className="ml-1.5 truncate font-mono text-[10px] text-muted-light">
                    {new URL(project.link).hostname.replace(/^www\./, "")}
                  </span>
                )}
              </div>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 640px) 80vw, 340px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        ) : (
          project.panel && <SpecPanel panel={project.panel} />
        )}
      </div>

      {/* Caption */}
      <div className="min-w-0 flex-1 p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-[12px] text-muted-light">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-[20px] font-bold tracking-[-0.03em] text-ink sm:text-[22px]">
            {project.title}
          </h3>
          {project.badge && (
            <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11.5px] text-accent">
              {project.badge}
            </span>
          )}
        </div>

        <p className="mt-1.5 font-body text-[14.5px] text-accent sm:text-[15px]">
          {project.tagline}
        </p>

        <p className="mt-3 font-body text-[14px] leading-[1.6] text-ink-soft sm:text-[14.5px]">
          {project.description}
        </p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 font-body text-[13px] leading-relaxed text-muted"
            >
              <span
                aria-hidden
                className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
              />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-paper-soft px-2 py-1 font-mono text-[11.5px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 font-display text-[13px] font-semibold text-white transition-opacity duration-300 hover:opacity-80"
            >
              View live
              <ArrowUpRightIcon className="h-3 w-3" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-[13px] font-semibold transition-colors duration-300 ${
                project.link
                  ? "border border-line bg-white text-ink hover:border-ink"
                  : "bg-ink text-white transition-opacity hover:opacity-80"
              }`}
            >
              <GithubIcon className="h-3 w-3" />
              {project.link ? "Source" : "View source"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProgressCue({
  active,
  onSelect,
  hint,
}: {
  active: number;
  onSelect: (i: number) => void;
  hint: string;
}) {
  return (
    <div className="mx-auto mt-8 flex max-w-6xl items-center justify-center gap-4 px-6 lg:px-8">
      <span className="font-mono text-[13px] text-muted">
        {String(active + 1).padStart(2, "0")}
        <span className="text-muted-light">
          {" "}
          / {String(featured.length).padStart(2, "0")}
        </span>
      </span>

      <div className="flex items-center gap-1.5">
        {featured.map((project, i) => (
          <button
            key={project.title}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to ${project.title}`}
            aria-current={i === active}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-ink" : "w-4 bg-line hover:bg-muted-light"
            }`}
          />
        ))}
      </div>

      <span className="hidden font-mono text-[13px] text-muted-light sm:inline">
        {hint}
      </span>
    </div>
  );
}

/** Plain swipeable rail for touch, narrow screens, and anyone who has asked
 *  for reduced motion. */
function Rail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Cards snap to start, so the leading card is the one the counter shows.
  const syncActive = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const lead = rail.scrollLeft + rail.offsetLeft;
    const cards = Array.from(rail.children) as HTMLElement[];
    let nearest = 0;
    let best = Infinity;
    cards.forEach((card, i) => {
      const gap = Math.abs(card.offsetLeft - lead);
      if (gap < best) {
        best = gap;
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mt-12"
    >
      <div
        ref={railRef}
        // Padding lines the first card up with the section heading's content
        // edge. scroll-padding has to match it: snap-start aligns to the
        // padding edge, so without it the browser scrolls the padding straight
        // back off and the card sits at x=0.
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 scroll-pl-6 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:scroll-pl-[max(2rem,calc((100vw-72rem)/2+2rem))]"
      >
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <ProgressCue
        active={active}
        onSelect={(i) => {
          const card = railRef.current?.children[i] as HTMLElement | undefined;
          card?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }}
        hint="keep scrolling →"
      />
    </motion.div>
  );
}

/** Pinned mode: the section holds the viewport while downward scroll is spent
 *  travelling sideways across the cards, then releases the page. The wrapper is
 *  one viewport tall plus exactly the horizontal distance, so no scroll is
 *  invented or swallowed. It is the same scroll, redirected. */
function PinnedTrack() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      // scrollWidth counts the leading padding but drops the trailing one on an
      // overflowing flex row, so add it back, or the travel stops short
      // and the last card ends flush against the right edge.
      const padRight = parseFloat(getComputedStyle(track).paddingRight) || 0;
      setDistance(
        Math.max(0, track.scrollWidth + padRight - window.innerWidth),
      );
    };

    measure();
    window.addEventListener("resize", measure);

    // Screenshots that decode late change the track width.
    const images = Array.from(trackRef.current?.querySelectorAll("img") ?? []);
    images.forEach((img) => img.addEventListener("load", measure));

    return () => {
      window.removeEventListener("resize", measure);
      images.forEach((img) => img.removeEventListener("load", measure));
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.round(p * (featured.length - 1)));
  });

  const goTo = (i: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const ratio = featured.length > 1 ? i / (featured.length - 1) : 0;
    window.scrollTo({
      top: wrapper.offsetTop + ratio * distance,
      behavior: "smooth",
    });
  };

  return (
    <div ref={wrapperRef} style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-5 px-[max(2rem,calc((100vw-72rem)/2+2rem))] will-change-transform"
        >
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>

        <ProgressCue active={active} onSelect={goTo} hint="scroll to advance →" />
      </div>
    </div>
  );
}

export default function Projects() {
  // Pinning takes over the wheel, so it is opt-in: pointer-precise devices with
  // room to show a card, and never when reduced motion is requested. Everyone
  // else keeps the plain rail. Resolved after mount so SSR markup stays stable.
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 1024px) and (min-height: 700px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const apply = () => setPinned(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <section id="projects" className="scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="projects"
          title="Some things I've built"
          lead="five projects I shipped end to end: architecture, code, deployment, and the bill"
        />
      </div>

      {pinned ? <PinnedTrack /> : <Rail />}
    </section>
  );
}
