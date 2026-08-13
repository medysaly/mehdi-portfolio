"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What AWS services has Mehdi worked with?",
  "Tell me about Unkommon.ai",
  "Walk me through his certifications",
  "What kind of roles is he looking for?",
];

const introMessage: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Hi! I'm Mehdi's assistant. Ask me anything about his work, his projects, or how to get in touch with him.",
};

async function sendMessage(input: string): Promise<string> {
  const apiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

  if (!apiUrl) {
    throw new Error("Chatbot API URL is not configured.");
  }

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question: input }),
  });

  if (!res.ok) {
    const errData = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(errData.error ?? `Request failed (${res.status})`);
  }

  const data = (await res.json()) as { answer?: string };
  return data.answer ?? "No response received.";
}

const ease = [0.16, 1, 0.3, 1] as const;

function ChatIcon() {
  return (
    <svg
      className="h-[17px] w-[17px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 5.5h16a1 1 0 011 1v9a1 1 0 01-1 1H9l-4 3.5v-3.5H4a1 1 0 01-1-1v-9a1 1 0 011-1z"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      className="h-[17px] w-[17px]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

/** The keycap hints in the reference. Pointer devices only: a phone has no C key. */
function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="hidden rounded-[7px] bg-white/[0.14] px-2 py-1 font-mono text-[11px] font-medium leading-none text-white/75 sm:block">
      {children}
    </kbd>
  );
}

function Identity() {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      {/* Round, because the source is a circular portrait vignetted into
          black: clipping to a circle drops the corners instead of showing
          them against a panel that is nearly, but not exactly, black. */}
      <Image
        src="/chat-avatar.jpg"
        alt=""
        width={256}
        height={256}
        className="h-9 w-9 flex-shrink-0 rounded-full object-cover ring-1 ring-white/15"
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-display text-[13.5px] font-semibold tracking-[-0.02em] text-white">
          Mehdi&apos;s assistant
        </span>
        <span className="truncate font-body text-[11.5px] text-white/45">
          Ask about his work
        </span>
      </span>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([introMessage]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, pending, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 220);
  }, [open]);

  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, [input]);

  /**
   * The point of the dock: reachable from anywhere on the page without
   * hunting for a button. C opens it, Escape closes it. Guarded so it never
   * swallows a keystroke meant for a field, and so browser and OS shortcuts
   * carrying a modifier still pass straight through.
   */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      const typing =
        el instanceof HTMLElement &&
        (el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.isContentEditable);

      if (e.key === "Escape" && open) {
        setOpen(false);
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.toLowerCase() === "c" && !open) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = useCallback(
    async (text: string) => {
      const value = text.trim();
      if (!value || pending) return;

      setMessages((prev) => [
        ...prev,
        { id: `u-${Date.now()}`, role: "user", content: value },
      ]);
      setInput("");
      setPending(true);

      try {
        const reply = await sendMessage(value);
        setMessages((prev) => [
          ...prev,
          { id: `a-${Date.now()}`, role: "assistant", content: reply },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: "assistant",
            content:
              "Something went wrong. Please try again or email mehdisalhi.dev@gmail.com.",
          },
        ]);
      } finally {
        setPending(false);
      }
    },
    [pending],
  );

  return (
    // The dock owns the centring. Framer Motion writes an inline transform,
    // which would overwrite a Tailwind -translate-x-1/2 on the same element.
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 sm:bottom-6">
      <motion.div
        layout
        transition={{ duration: 0.42, ease }}
        className="pointer-events-auto w-full max-w-[460px] overflow-hidden rounded-[22px] bg-[#0b0b0c] shadow-[0_2px_8px_rgba(0,0,0,0.12),0_18px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
      >
        <AnimatePresence initial={false} mode="wait">
          {open ? (
            <motion.div
              key="panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              <div className="flex justify-end px-3 pt-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-white/45 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Conversation */}
              <div
                ref={scrollRef}
                className="no-scrollbar min-h-[120px] max-h-[38vh] space-y-2.5 overflow-y-auto px-5 pb-4"
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={m.role === "user" ? "flex justify-end" : ""}
                  >
                    <p
                      className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 font-body text-[14px] leading-relaxed ${
                        m.role === "user"
                          ? "bg-white text-ink"
                          : "bg-white/[0.07] text-white/85"
                      }`}
                    >
                      {m.content}
                    </p>
                  </div>
                ))}

                {pending && (
                  <div className="flex gap-1.5 px-1 py-2">
                    {[0, 0.15, 0.3].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40"
                        style={{ animationDelay: `${d}s` }}
                      />
                    ))}
                  </div>
                )}

                {messages.length === 1 && !pending && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => submit(s)}
                        className="rounded-full bg-white/[0.07] px-3 py-1.5 text-left font-mono text-[11.5px] text-white/60 transition-colors hover:bg-white/[0.14] hover:text-white"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Composer, directly above the bar so typing happens at the
                  bottom where the cursor already is. */}
              <div className="px-5">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      submit(input);
                    }
                  }}
                  placeholder="Type something here..."
                  disabled={pending}
                  // The global focus ring is right everywhere else, but this
                  // field takes focus the moment the panel opens, so the ring
                  // would be permanent decoration. The caret carries it here.
                  className="w-full resize-none border-0 bg-transparent font-body text-[15.5px] leading-snug text-white outline-none focus-visible:outline-none placeholder:text-white/35 disabled:opacity-60"
                />
              </div>

              {/* The bar itself, still anchored at the bottom */}
              <div className="flex items-center justify-between gap-3 px-4 pb-4 pt-2">
                <Identity />
                <button
                  type="button"
                  onClick={() => submit(input)}
                  disabled={pending || !input.trim()}
                  className="flex flex-shrink-0 items-center gap-2 rounded-full px-2 py-1.5 text-white transition-opacity disabled:opacity-35"
                >
                  <SendIcon />
                  <span className="font-display text-[13.5px] font-semibold">
                    Send
                  </span>
                  <Key>&#8629;</Key>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="bar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between gap-3 px-4 py-3"
            >
              <Identity />
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group flex flex-shrink-0 items-center gap-2 rounded-full px-2 py-1.5 text-white transition-opacity hover:opacity-80"
                aria-label="Open chat"
              >
                <ChatIcon />
                <span className="font-display text-[13.5px] font-semibold">
                  Chat
                </span>
                <Key>C</Key>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
