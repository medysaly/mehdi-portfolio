import { NextRequest } from "next/server";

const CHATBOT_API_URL = process.env.CHATBOT_API_URL;

/**
 * Simple in-memory rate limiter, keyed by client IP.
 * Not distributed — one instance per serverless invocation.
 * Good enough for a portfolio; swap for Upstash Redis if traffic grows.
 */
const RATE_LIMIT = 15; // requests per window
const RATE_WINDOW_MS = 60_000; // 1 minute
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function withinRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT) return false;
  bucket.count += 1;
  return true;
}

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  if (!CHATBOT_API_URL) {
    return jsonError("Chatbot backend not configured", 503);
  }

  // Best-effort client IP (works on Vercel, falls back to unknown)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!withinRateLimit(ip)) {
    return jsonError("Too many requests. Please wait a moment.", 429);
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid JSON body", 400);
  }

  const question = String(
    (body as { question?: unknown })?.question ?? "",
  ).trim();

  if (!question) {
    return jsonError("Question required", 400);
  }
  if (question.length > 500) {
    return jsonError("Question too long (max 500 characters)", 400);
  }

  // Forward to API Gateway
  let upstream: Response;
  try {
    upstream = await fetch(`${CHATBOT_API_URL.replace(/\/$/, "")}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
      // Vercel serverless timeout for hobby tier is 10s; Bedrock Haiku is fast
      signal: AbortSignal.timeout(15_000),
    });
  } catch (err) {
    console.error("Upstream fetch failed:", err);
    return jsonError("Backend unreachable", 502);
  }

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    console.error("Upstream non-2xx:", upstream.status, text);
    return jsonError("Backend error", 502);
  }

  let data: { answer?: string; error?: string; [k: string]: unknown };
  try {
    data = await upstream.json();
  } catch {
    return jsonError("Backend returned invalid JSON", 502);
  }

  return new Response(JSON.stringify({ answer: data.answer ?? "" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
