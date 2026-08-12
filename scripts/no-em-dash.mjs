#!/usr/bin/env node
/**
 * House style: this site never uses em dashes, in copy or in comments.
 * Runs before every build so one cannot slip back in through a paste.
 */
import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";

// backend is included because the chatbot's system prompt is visitor-facing
// copy, even though it ships as Python rather than to the browser.
const ROOTS = ["src", "scripts", "backend"];
const SELF = basename(import.meta.url); // this file spells the characters out
const EXTS = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".md", ".json", ".py", ".sh",
]);
const BANNED = [
  ["—", "em dash"],
  ["&mdash;", "&mdash; entity"],
  ["&#8212;", "&#8212; entity"],
  ["&#x2014;", "&#x2014; entity"],
];

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (EXTS.has(extname(entry.name))) out.push(full);
  }
  return out;
}

const hits = [];
for (const root of ROOTS) {
  let files = [];
  try {
    files = await walk(root);
  } catch {
    continue; // optional directory
  }
  for (const file of files) {
    if (basename(file) === SELF) continue;
    readFileSync(file, "utf8")
      .split("\n")
      .forEach((line, i) => {
        for (const [needle, label] of BANNED) {
          if (line.includes(needle)) {
            hits.push(`${file}:${i + 1}  ${label}\n    ${line.trim()}`);
          }
        }
      });
  }
}

if (hits.length) {
  console.error(`Found ${hits.length} em dash(es). Use a comma, colon, or parentheses instead.\n`);
  console.error(hits.join("\n\n"));
  process.exit(1);
}
console.log("No em dashes. Copy is clean.");
