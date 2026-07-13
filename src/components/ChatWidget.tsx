"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  {
    label: "AWS Experience",
    prompt: "What AWS services do you have hands-on experience with?",
  },
  {
    label: "Flagship Project",
    prompt: "Tell me about Unkommon.ai",
  },
  {
    label: "Certifications",
    prompt: "Walk me through your certifications",
  },
  {
    label: "Career Goals",
    prompt: "What kind of roles are you looking for?",
  },
];

const introMessage: Message = {
  id: "intro",
  role: "assistant",
  content:
    "Hi. I'm a chat version of Mehdi, trained on his portfolio, projects, and background. Ask me anything about his work.",
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
    const errData = (await res
      .json()
      .catch(() => ({}))) as { error?: string };
    throw new Error(errData.error ?? `Request failed (${res.status})`);
  }

  const data = (await res.json()) as { answer?: string };
  return data.answer ?? "No response received.";
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
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
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
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

function Avatar({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-6 w-6 text-[10px]" : "h-9 w-9 text-xs";
  return (
    <div
      className={`relative flex ${dim} flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/20 bg-gradient-to-br from-accent/25 via-accent/10 to-transparent font-display font-medium tracking-wide text-accent-glow`}
    >
      <span className="relative z-10">MS</span>
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
  }, [messages, pending]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      const scrollHeight = inputRef.current.scrollHeight;
      inputRef.current.style.height = Math.min(scrollHeight, 120) + "px";
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
      {/* Floating trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="trigger"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setOpen(true)}
            className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#111]/85 py-2 pl-2 pr-5 text-sm text-neutral-200 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7),0_0_0_1px_rgba(184,137,90,0.06)] backdrop-blur-2xl transition-all duration-500 hover:border-accent/25 hover:bg-[#141414]/90 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7),0_0_60px_-10px_rgba(184,137,90,0.25),0_0_0_1px_rgba(184,137,90,0.15)]"
            aria-label="Open chat"
          >
            <Avatar size="sm" />
            <span className="flex flex-col items-start leading-tight">
              <span className="font-display text-[13px] font-medium tracking-wide text-white transition-colors group-hover:text-accent-glow">
                Ask Mehdi
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-normal uppercase tracking-[0.15em] text-neutral-500">
                <span className="relative flex h-1 w-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1 w-1 rounded-full bg-green-400" />
                </span>
                Online
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 flex h-[min(640px,calc(100vh-3rem))] w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0d0d]/95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(184,137,90,0.06)] backdrop-blur-2xl sm:w-[440px]"
          >
            {/* Subtle noise + warm gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent" />

            {/* Header */}
            <header className="relative flex items-center justify-between border-b border-white/[0.05] px-5 py-4">
              <div className="flex items-center gap-3">
                <Avatar />
                <div>
                  <p className="font-display text-[15px] font-medium tracking-tight text-white">
                    Mehdi Salhi
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-neutral-500">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                    </span>
                    <span className="text-neutral-400">AWS Cloud Engineer</span>
                    <span className="text-neutral-700">·</span>
                    <span>Available</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-white/[0.06] hover:text-white"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </header>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="relative flex-1 overflow-y-auto px-5 py-5"
            >
              <div className="space-y-5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "assistant" && <Avatar size="sm" />}
                    <div
                      className={`max-w-[80%] ${
                        msg.role === "user"
                          ? "rounded-[16px] rounded-tr-sm border border-accent/20 bg-accent/[0.08] px-4 py-2.5 text-white"
                          : "rounded-[16px] rounded-tl-sm bg-white/[0.03] px-4 py-2.5 text-neutral-200"
                      }`}
                    >
                      <p className="font-body text-[13.5px] leading-relaxed">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                ))}

                {pending && (
                  <div className="flex items-start gap-2.5">
                    <Avatar size="sm" />
                    <div className="rounded-[16px] rounded-tl-sm bg-white/[0.03] px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggestions */}
              {messages.length === 1 && !pending && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-8"
                >
                  <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    <span className="h-px w-4 bg-neutral-700" />
                    Suggested
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestions.map((s, i) => (
                      <motion.button
                        key={s.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                        onClick={() => submit(s.prompt)}
                        className="group flex flex-col items-start rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-left transition-all duration-300 hover:border-accent/25 hover:bg-accent/[0.04]"
                      >
                        <span className="font-display text-[12px] font-medium tracking-tight text-white transition-colors group-hover:text-accent-glow">
                          {s.label}
                        </span>
                        <span className="mt-1 line-clamp-2 text-[11px] leading-snug text-neutral-500">
                          {s.prompt}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="relative border-t border-white/[0.05] px-4 py-4"
            >
              <div className="group flex items-end gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5 transition-colors focus-within:border-accent/30 focus-within:bg-white/[0.03]">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my work…"
                  rows={1}
                  disabled={pending}
                  className="flex-1 resize-none border-0 bg-transparent py-1 font-body text-[13.5px] leading-relaxed text-white placeholder-neutral-600 outline-none disabled:opacity-60"
                  style={{ maxHeight: "120px" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || pending}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-[0_4px_12px_-2px_rgba(184,137,90,0.4)] transition-all hover:bg-accent-subtle hover:shadow-[0_6px_16px_-2px_rgba(184,137,90,0.55)] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-neutral-500 disabled:shadow-none"
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </div>
              <p className="mt-2.5 text-center text-[10px] tracking-wide text-neutral-600">
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
