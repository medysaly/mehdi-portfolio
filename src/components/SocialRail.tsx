"use client";

import { motion } from "framer-motion";
import { EMAIL, socials } from "./icons";

/**
 * Both rails stay pinned while the page scrolls, which is the point of them.
 * What changed is the shape.
 *
 * They used to be bare icons sitting on top of a long hairline that ran down
 * to the bottom edge of the window, anchored to it. That hairline is the
 * reference's signature and the thing that read as borrowed. These float
 * instead: two capsules held clear of every edge, centred against the
 * viewport, in the same frosted glass as the hero's buttons. Nothing touches
 * the edge of the screen, so there is no line to trace back.
 */

const capsule =
  "rounded-full border border-line/80 bg-white/60 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_32px_-16px_rgba(0,0,0,0.18)] backdrop-blur-md";

export default function SocialRail() {
  return (
    <>
      {/* The wrapper owns the centring. Framer Motion writes an inline
          transform for the entrance, and an inline transform beats a Tailwind
          -translate-y-1/2 on the same element, which left the rails hanging
          half a capsule low. */}
      <div className="fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <motion.nav
          aria-label="Social links"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col items-center gap-0.5 p-1.5 ${capsule}`}
        >
        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-paper-soft hover:text-ink"
          >
            <Icon className="h-[17px] w-[17px]" />

            {/* Name rides out of the capsule on hover, so the icons can stay
                unlabelled without being a guessing game. */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-[calc(100%+10px)] origin-left scale-95 whitespace-nowrap rounded-full border border-line bg-white px-2.5 py-1 font-mono text-[11px] text-ink-soft opacity-0 shadow-sm transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
            >
              {label}
            </span>
          </a>
          ))}
        </motion.nav>
      </div>

      {/* Right: the address itself, set vertically */}
      <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col items-center gap-3 px-1.5 py-4 ${capsule}`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>

          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-[12.5px] tracking-[0.18em] text-muted transition-colors duration-200 hover:text-ink"
            style={{ writingMode: "vertical-rl" }}
          >
            {EMAIL}
          </a>
        </motion.div>
      </div>
    </>
  );
}
