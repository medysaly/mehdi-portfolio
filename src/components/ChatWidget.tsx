"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What AWS services do you have hands-on experience with?",
  "Tell me about Unkommon.ai",
  "What roles are you looking for?",
  "Walk me through your certifications",
];

const introMessage: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Hey — I'm a chat version of Mehdi. Ask me about his skills, projects, certifications, or the kind of roles he's open to.",
};

// Placeholder response — swap this for the API Gateway call when backend is ready
async function sendMessage(_input: string): Promise<string> {
  await new Promise((r) => setTimeout(r, 900));
  return "Backend is coming soon. Once the API Gateway is wired up, this will hit Mehdi's chatbot running on AWS Lambda + Bedrock.";
}

function ChatIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19V5m0 0l-6 6m6-6l6 6"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([introMessage]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Autoscroll messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, pending]);

  // Focus input when opening
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  // Auto-grow textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      const scrollHeight = inputRef.current.scrollHeight;
      inputRef.current.style.height = Math.min(scrollHeight, 96) + "px";
    }
  }, [input]);

  const submit = async (text: string) => {
    const value = text.trim();
    if (!value || pending) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      role: "user",
      content: value,
    };
    setMessages((prev) => [...prev, userMsg]);
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
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit(input);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="trigger"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(true)}
            className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-bg/90 px-4 py-3 text-sm text-neutral-200 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all hover:border-accent/40 hover:text-white hover:shadow-[0_8px_40px_rgba(184,137,90,0.15)]"
            aria-label="Open chat"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-glow opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-glow" />
            </span>
            <span className="font-body">Ask my AI</span>
            <span className="text-neutral-500 transition-colors group-hover:text-accent-glow">
              <ChatIcon />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 flex h-[min(560px,calc(100vh-3rem))] w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-bg/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:w-[400px]"
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-accent-glow">
                  <ChatIcon />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white">
                    Ask my AI
                  </p>
                  <p className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Trained on Mehdi&apos;s work
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </header>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto px-5 py-5"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent/[0.15] text-white"
                        : "bg-white/[0.04] text-neutral-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {pending && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-white/[0.04] px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
                  </div>
                </div>
              )}

              {/* Suggestions (only shown before any user message) */}
              {messages.length === 1 && !pending && (
                <div className="pt-2">
                  <p className="mb-2 text-[11px] uppercase tracking-widest text-neutral-500">
                    Try asking
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => submit(s)}
                        className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-left text-xs text-neutral-300 transition-colors hover:border-accent/30 hover:bg-accent/[0.06] hover:text-white"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="border-t border-white/[0.06] p-3"
            >
              <div className="flex items-end gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 focus-within:border-accent/30">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my work…"
                  rows={1}
                  disabled={pending}
                  className="flex-1 resize-none border-0 bg-transparent py-1 text-sm leading-relaxed text-white placeholder-neutral-500 outline-none disabled:opacity-60"
                  style={{ maxHeight: "96px" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || pending}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-white transition-all hover:bg-accent-subtle disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </div>
              <p className="mt-2 px-1 text-[10px] text-neutral-600">
                Responses may not always be perfect. Reach out via email for
                anything urgent.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
