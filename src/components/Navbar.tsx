"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const nav = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "certs", href: "#certifications" },
  { label: "coursework", href: "#coursework" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const ids = [...nav.map((n) => n.href.slice(1)), "contact"];
      // Walk top-down so the last section past the detection line wins, which
      // keeps short trailing sections registering.
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-white/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[61px] max-w-6xl items-center justify-between px-6 lg:px-8"
      >
        {/* Wordmark */}
        <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink font-display text-[12px] font-bold tracking-tight text-white">
            MS
          </span>
          <span className="font-mono text-[14px] text-ink transition-opacity group-hover:opacity-60">
            mehdisalhi.com
          </span>
        </a>

        <div className="flex items-center gap-8">
          {/* Desktop links */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`font-mono text-[14px] transition-colors ${
                      isActive ? "text-accent" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Booking lives in the hero and the contact block. The bar's own
              CTA points at the contact section, where the email is. */}
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 font-display text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="-ml-4 flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-6 py-2">
              {[...nav, { label: "contact", href: "#contact" }].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-line-soft py-3.5 font-mono text-[14px] text-ink-soft transition-colors last:border-b-0 hover:text-accent"
                  >
                    {item.label}
                    <span className="text-muted-light">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
