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
    "Hi! I'm a chat version of Mehdi, trained on his portfolio, projects, and background. Ask me anything about his work.",
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

function Avatar({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-6 w-6 text-[9px]" : "h-9 w-9 text-[11px]";
  return (
    <div
      className={`flex ${dim} flex-shrink-0 items-center justify-center rounded-[10px] bg-ink font-display font-bold tracking-tight text-white`}
    >
      MS
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
            className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-line bg-white py-2 pl-2 pr-5 shadow-pill transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
            aria-label="Open chat"
          >
            <Avatar size="sm" />
            <span className="flex flex-col items-start leading-tight">
              <span className="font-display text-[13px] font-bold tracking-tight text-ink">
                Ask Mehdi
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
                <span className="relative flex h-1 w-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-1 w-1 rounded-full bg-emerald-500" />
                </span>
                online
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
            className="fixed bottom-6 right-6 z-50 flex h-[min(640px,calc(100vh-3rem))] w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-[24px] border border-line bg-white shadow-[0_40px_90px_-24px_rgba(12,12,14,0.28)] sm:w-[420px]"
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b border-line-soft px-5 py-4">
              <div className="flex items-center gap-3">
                <Avatar />
                <div>
                  <p className="font-display text-[15px] font-bold tracking-tight text-ink">
                    Mehdi Salhi
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[11px] text-muted">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    cloud &amp; devops engineer
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-muted transition-colors hover:bg-paper-soft hover:text-ink"
                aria-label="Close chat"
              >
                <CloseIcon />
              </button>
            </header>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "assistant" && <Avatar size="sm" />}
                    <div
                      className={`max-w-[80%] px-4 py-2.5 ${
                        msg.role === "user"
                          ? "rounded-[16px] rounded-tr-md bg-ink text-white"
                          : "rounded-[16px] rounded-tl-md bg-paper-soft text-ink-soft"
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
                    <div className="rounded-[16px] rounded-tl-md bg-paper-soft px-4 py-3.5">
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-light [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-light [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-light" />
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
                  className="mt-7"
                >
                  <p className="mb-3 font-mono text-[10.5px] text-muted">
                    try asking
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {suggestions.map((s, i) => (
                      <motion.button
                        key={s.label}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                        onClick={() => submit(s.prompt)}
                        className="group flex flex-col items-start rounded-2xl border border-line bg-white p-3 text-left transition-all duration-300 hover:border-accent hover:bg-accent-soft"
                      >
                        <span className="font-display text-[12.5px] font-bold tracking-tight text-ink">
                          {s.label}
                        </span>
                        <span className="mt-1 line-clamp-2 font-body text-[11px] leading-snug text-muted">
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
              className="border-t border-line-soft px-4 py-4"
            >
              <div className="flex items-end gap-2 rounded-2xl border border-line bg-paper-soft px-4 py-2.5 transition-colors focus-within:border-accent focus-within:bg-white">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my work…"
                  rows={1}
                  disabled={pending}
                  // Wrapper renders the focus treatment, so opt out of the global ring
                  className="flex-1 resize-none border-0 bg-transparent py-1 font-body text-[13.5px] leading-relaxed text-ink placeholder-muted-light outline-none focus-visible:outline-none disabled:opacity-60"
                  style={{ maxHeight: "120px" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || pending}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:bg-line disabled:text-muted-light"
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </div>
              <p className="mt-2.5 text-center font-mono text-[10px] text-muted-light">
                Responses may not always be perfect, so email me for anything
                urgent.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
