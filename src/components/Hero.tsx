"use client";

import { motion } from "framer-motion";
import { BookCallButton, glassPill, GlassLabel, ResumeButton } from "./cta";
import MarineWash from "./MarineWash";
import { LiquidButton } from "./ui/liquid-glass-button";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-28 lg:px-8"
    >
      {/* Marine Horizon sits furthest back. Same wash closes the page. */}
      <MarineWash />

      {/* Dot grid: the reference's signature hero texture. Masked so it
          fades out toward the edges instead of stopping hard. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot [-webkit-mask-image:radial-gradient(75%_65%_at_50%_45%,#000,transparent)] [mask-image:radial-gradient(75%_65%_at_50%_45%,#000,transparent)]"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Centred column. Every child is laid out by the column rather than
            by its own width, so the badge, the buttons and the status line
            all share one axis with the headline. */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.05 }}
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="font-display text-[3rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[4rem] lg:text-display-1"
          >
            Hi, I&apos;m Mehdi.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="mt-6 max-w-2xl font-body text-lead text-ink-soft"
          >
            A cloud and AI engineer who builds on AWS.
            <br className="hidden sm:inline" /> I design the infrastructure, and
            build the LLM agents and RAG systems that run on it.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <LiquidButton asChild size="xl" className={glassPill}>
              <a href="#projects" className="group">
                <GlassLabel>
                  See what I&apos;ve built
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                    &darr;
                  </span>
                </GlassLabel>
              </a>
            </LiquidButton>
            <ResumeButton glass />
            <BookCallButton glass />
          </motion.div>

          {/* Status line. Carries the personality the floating bubble used to,
              now that there is no hero visual to hang it off. */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease }}
            className="mt-10 flex items-center gap-2 font-mono text-[12.5px] text-muted-light"
          >
            <span aria-hidden>&#9729;</span>
            probably deploying something right now
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
