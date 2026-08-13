"use client";

import type { MouseEvent, ReactNode } from "react";
import {
  calAttrs,
  CalendarIcon,
  CAL_URL,
  DownloadIcon,
  RESUME_FILENAME,
  RESUME_URL,
} from "./icons";
import { LiquidButton } from "./ui/liquid-glass-button";

type Size = "md" | "lg";

const base =
  "group inline-flex items-center gap-2 rounded-full font-display font-semibold transition-colors duration-300";

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 text-[15px]",
  lg: "px-7 py-4 text-[16px]",
};

const iconSize: Record<Size, string> = {
  md: "h-[17px] w-[17px]",
  lg: "h-[18px] w-[18px]",
};

/**
 * Glass reads as glass only over something worth refracting, so it is opt-in
 * per placement rather than the default: the hero sits on the gradient, the
 * contact block sits on flat white where the same treatment nearly vanishes.
 */
export const glassPill =
  "rounded-full font-display text-[15px] font-semibold text-ink h-[52px] px-6";

/** Above the button's shadow layer, which paints at z-0. */
export function GlassLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
    </span>
  );
}

/**
 * Recruiter path one: take the PDF and go. `download` names the saved file so
 * it does not land in someone's downloads folder as a bare slug.
 */
export function ResumeButton({
  size = "md",
  glass = false,
}: {
  size?: Size;
  glass?: boolean;
}) {
  if (glass) {
    return (
      <LiquidButton asChild size="xl" className={glassPill}>
        <a href={RESUME_URL} download={RESUME_FILENAME}>
          <GlassLabel>
            <DownloadIcon className={iconSize.md} />
            Download resume
          </GlassLabel>
        </a>
      </LiquidButton>
    );
  }

  return (
    <a
      href={RESUME_URL}
      download={RESUME_FILENAME}
      className={`${base} ${sizes[size]} border border-line bg-white text-ink hover:border-ink`}
    >
      <DownloadIcon
        className={`${iconSize[size]} transition-transform duration-300 group-hover:translate-y-0.5`}
      />
      Download resume
    </a>
  );
}

/**
 * Recruiter path two: book time. A real anchor first, upgraded into the
 * cal.com popup by the embed in CalEmbed, so a blocked script degrades to a
 * normal link rather than a dead button.
 *
 * The embed opens its popup but never cancels the click, so the browser would
 * follow the href straight through the modal. Cancelling it here is safe:
 * cal.com's own handler still runs and opens the popup. The guard means a
 * visitor whose embed never loaded keeps a link that actually goes somewhere.
 */
function openInPopup(e: MouseEvent<HTMLAnchorElement>) {
  // Defined only once embed.js has executed, which is exactly when cal.com is
  // able to take the click off our hands.
  if (typeof customElements !== "undefined" && customElements.get("cal-modal-box")) {
    e.preventDefault();
  }
}

export function BookCallButton({
  size = "md",
  glass = false,
}: {
  size?: Size;
  glass?: boolean;
}) {
  if (glass) {
    return (
      <LiquidButton asChild size="xl" className={glassPill}>
        <a href={CAL_URL} onClick={openInPopup} {...calAttrs}>
          <GlassLabel>
            <CalendarIcon className={iconSize.md} />
            Book a call
          </GlassLabel>
        </a>
      </LiquidButton>
    );
  }

  return (
    <a
      href={CAL_URL}
      onClick={openInPopup}
      {...calAttrs}
      className={`${base} ${sizes[size]} border border-line bg-white text-ink hover:border-ink`}
    >
      <CalendarIcon className={iconSize[size]} />
      Book a call
    </a>
  );
}
