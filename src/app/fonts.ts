import { Bricolage_Grotesque } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

// Display face — heavy, tight, slightly quirky grotesque used for all headings.
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

// Geist ships as its own package (not in next/font/google's manifest).
export const geistSans = GeistSans;
export const geistMono = GeistMono;
