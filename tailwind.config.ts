import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        paper: "#ffffff",
        "paper-soft": "#f5f5f5",

        // Ink — near-black headings, #333 body, #666 secondary
        ink: "#000000",
        "ink-soft": "#333333",
        muted: "#666666",
        "muted-light": "#999999",

        // Structure
        line: "#e8e8e8",
        "line-soft": "#f0f0f0",

        // Accent — pure blue used for eyebrows, links, and the status dot
        accent: "#0066ff",
        "accent-hover": "#0052cc",
        "accent-soft": "#eef4ff",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        // Scale lifted from the reference: tight, heavy display type
        "display-1": ["5rem", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-2": ["3.2rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        lead: ["1.25rem", { lineHeight: "1.625" }],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(0,0,0,0.10) 1px, transparent 1px)",
      },
      backgroundSize: {
        dot: "24px 24px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.03), 0 8px 24px -14px rgba(0,0,0,0.10)",
        "card-hover": "0 2px 4px rgba(0,0,0,0.04), 0 18px 40px -18px rgba(0,0,0,0.16)",
        pill: "0 1px 2px rgba(0,0,0,0.04), 0 10px 28px -14px rgba(0,0,0,0.18)",
      },
      keyframes: {
        "scroll-dot": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(6px)", opacity: "0.4" },
        },
        // The reference's side-quest rail slides one full copy of the track,
        // then snaps back — the duplicated children make the seam invisible.
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
        marquee: "marquee 60s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
