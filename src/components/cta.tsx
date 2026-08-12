import {
  calAttrs,
  CalendarIcon,
  CAL_URL,
  DownloadIcon,
  RESUME_FILENAME,
  RESUME_URL,
} from "./icons";

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
 * Recruiter path one: take the PDF and go. `download` names the saved file so
 * it does not land in someone's downloads folder as a bare slug.
 */
export function ResumeButton({ size = "md" }: { size?: Size }) {
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
 */
export function BookCallButton({ size = "md" }: { size?: Size }) {
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...calAttrs}
      className={`${base} ${sizes[size]} border border-line bg-white text-ink hover:border-ink`}
    >
      <CalendarIcon className={iconSize[size]} />
      Book a call
    </a>
  );
}
