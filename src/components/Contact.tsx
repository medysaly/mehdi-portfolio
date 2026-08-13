"use client";

import { motion } from "framer-motion";
import { EMAIL, socials } from "./icons";
import { BookCallButton, ResumeButton } from "./cta";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-6 pt-28 lg:px-8"
    >
      {/* Dot grid, same texture as the hero. The colour wash behind this
          section is owned by the page-level gradient in page.tsx. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid bg-dot [-webkit-mask-image:linear-gradient(180deg,#000,transparent_70%)] [mask-image:linear-gradient(180deg,#000,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.5rem]">
            Let&apos;s talk shop
          </h2>

          {/* Names each route in the order they appear below it: the email
              button, the booking button, then the social row. */}
          <p className="mx-auto mt-6 max-w-xl font-body text-lead text-ink-soft">
            Looking for cloud, DevOps, or platform engineers? Or just want to
            talk about AWS? Send me an email, put time straight on my calendar,
            or find me on LinkedIn. Whichever you pick, I&apos;ll get back to
            you within a day.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-display text-[16px] font-semibold text-white transition-opacity duration-300 hover:opacity-80"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &#10230;
            </span>
            {EMAIL}
          </a>

          {/* Two lighter paths for anyone who would rather not open a mail
              client: take the PDF, or put time on the calendar. */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <ResumeButton size="lg" />
            <BookCallButton size="lg" />
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[14px] text-muted transition-colors hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer sits inside the gradient, split off by a hairline */}
        <div className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-line py-7 font-mono text-[13px] text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Mehdi Salhi</p>
          <p>designed &amp; built by Mehdi Salhi</p>
        </div>
      </div>
    </section>
  );
}
