import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

// One family for everything. Headings are Geist at heavy weights with tight
// tracking rather than a separate display face, which is what keeps the page
// quiet: hierarchy comes from size and weight, not from a second voice.
// Bricolage Grotesque used to hold the headings and gave them a deliberate
// quirk, which is the opposite of the brief now.
//
// Geist ships as its own package, not through next/font/google's manifest,
// so there is no extra network request for the display face.
export const geistSans = GeistSans;
export const geistMono = GeistMono;
