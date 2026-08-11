"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

const stack = [
  { layer: "Application", tools: "React · TypeScript · Python" },
  { layer: "Delivery", tools: "GitHub Actions · ArgoCD · GitOps" },
  { layer: "Runtime", tools: "Docker · Kubernetes · Lambda" },
  { layer: "Provisioning", tools: "Terraform · AWS CDK" },
  { layer: "Cloud", tools: "Amazon Web Services" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28 lg:px-8"
    >
      {/* Dot grid — the reference's signature hero texture. Masked so it
          fades out toward the edges instead of stopping hard. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot [-webkit-mask-image:radial-gradient(75%_65%_at_50%_45%,#000,transparent)] [mask-image:radial-gradient(75%_65%_at_50%_45%,#000,transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[13px] text-ink-soft">
              open to cloud &amp; devops roles
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="mt-7 font-display text-[3rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[4rem] lg:text-display-1"
          >
            Hi, I&apos;m Mehdi.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="mt-6 max-w-xl font-body text-lead text-ink-soft"
          >
            A Cloud &amp; DevOps engineer who builds on AWS.
            <br className="hidden sm:inline" /> I design infrastructure and
            automate it end to end.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="mt-6 flex flex-wrap items-center gap-2.5 font-mono text-[14px] text-ink-soft"
          >
            <span className="text-accent">currently</span>
            <span className="text-muted-light">&#10230;</span>
            <span>building Unkommon.ai, solo, on AWS</span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-display text-[15px] font-semibold text-white transition-opacity duration-300 hover:opacity-80"
            >
              See what I&apos;ve built
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                &darr;
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-line bg-white px-6 py-3.5 font-display text-[15px] font-semibold text-ink transition-colors duration-300 hover:border-ink"
            >
              Say hi
            </a>
          </motion.div>
        </motion.div>

        {/* Stack card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-[380px] md:max-w-none"
        >
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="flex items-center gap-2.5 border-b border-line-soft px-5 py-3.5">
              <Image
                src="/mehdi.png"
                alt=""
                width={64}
                height={64}
                priority
                className="h-6 w-6 rounded-md object-contain"
              />
              <span className="font-mono text-[13px] text-muted">
                the stack I work in
              </span>
            </div>

            <ul className="divide-y divide-line-soft">
              {stack.map((layer) => (
                <li key={layer.layer} className="px-5 py-3.5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-light">
                    {layer.layer}
                  </p>
                  <p className="mt-1 font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    {layer.tools}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Floating status bubble — the reference hangs one off its hero
              visual. Three layers on purpose: the outer div owns the centring
              transform, the motion layer only fades (a `y` here would blow away
              the -translate-x-1/2), and the span owns the drift animation. */}
          <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75, ease }}
            >
              <span className="flex animate-float items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-3.5 py-2 font-mono text-[12.5px] text-muted shadow-pill">
                <span aria-hidden>&#9729;</span>
                probably deploying something right now
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-2.5 md:flex"
      >
        <span className="font-mono text-[12px] text-muted">scroll</span>
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-line pt-1.5">
          <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-muted" />
        </span>
      </motion.div>
    </section>
  );
}
