"use client";

import { useState, useRef, useEffect, useCallback } from "react";

function fmtPhone(v: string) {
  const d = (v || "").replace(/\D/g, "").slice(0, 10);
  if (!d) return "";
  if (d.length < 4) return "(" + d;
  if (d.length < 7) return "(" + d.slice(0, 3) + ") " + d.slice(3);
  return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
}

type Step = "closed" | "lead" | "chat";
type Message = { role: "user" | "assistant"; content: string };
type Lead = { name: string; email: string; phone: string };

const emptyLead: Lead = { name: "", email: "", phone: "" };

export default function ChatWidget() {
  const [step, setStep] = useState<Step>("closed");
  const [lead, setLead] = useState<Lead>(emptyLead);
  const [leadInput, setLeadInput] = useState<Lead>(emptyLead);
  const [leadErrors, setLeadErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  function validateLead() {
    const errors: { name?: string; email?: string; phone?: string } = {};
    if (!leadInput.name.trim()) errors.name = "Name is required";
    if (!leadInput.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadInput.email))
      errors.email = "Enter a valid email";
    if (!leadInput.phone.trim()) errors.phone = "Phone number is required";
    setLeadErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function startChat() {
    if (!validateLead()) return;
    const captured: Lead = {
      name: leadInput.name.trim(),
      email: leadInput.email.trim(),
      phone: leadInput.phone.trim(),
    };
    const firstName = captured.name.split(/\s+/)[0];
    setLead(captured);
    setMessages([
      {
        role: "assistant",
        content: `Hi ${firstName}! I'm the Teleringer assistant. I can answer questions about our services, pricing, and how to get started. How can I help you today?`,
      },
    ]);
    setStep("chat");
    setTimeout(() => chatInputRef.current?.focus(), 50);
    // Fire-and-forget lead notification email
    fetch("/api/chat-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(captured),
    }).catch(() => {});
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const nextMessages: Message[] = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, lead }),
      });

      if (!res.ok || !res.body) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong. Please try again." },
        ]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      // Append an empty assistant message that we'll stream tokens into
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      let done = false;
      while (!done) {
        const { done: streamDone, value } = await reader.read();
        done = streamDone;
        if (!value) continue;

        const chunk = decoder.decode(value, { stream: true });
        for (const line of chunk.split("\n")) {
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6).trim();
          if (payload === "[DONE]") break;
          try {
            const parsed = JSON.parse(payload);
            if (parsed.token) {
              accumulated += parsed.token;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: accumulated,
                };
                return updated;
              });
            }
          } catch {
            // ignore malformed SSE lines
          }
        }
      }

      // If we got no tokens at all, show a fallback
      if (!accumulated) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: "Sorry, I couldn't generate a response. Please try again.",
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last?.role === "assistant" && last.content === "") {
          updated[updated.length - 1] = {
            role: "assistant",
            content: "Sorry, something went wrong. Please try again.",
          };
        } else {
          updated.push({
            role: "assistant",
            content: "Sorry, something went wrong. Please try again.",
          });
        }
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  const toggleWidget = () => {
    if (step === "closed") setStep("lead");
    else setStep("closed");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Lead capture panel ── */}
      {step === "lead" && (
        <div className="w-80 sm:w-96 rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
            <span className="font-semibold text-sm">Chat with Us</span>
            <button
              onClick={() => setStep("closed")}
              className="text-white hover:text-blue-200 text-2xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          <div className="p-4 space-y-3">
            <p className="text-sm text-gray-600">
              To get started, please share your details so we can follow up if we get disconnected.
            </p>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={leadInput.name}
                onChange={(e) =>
                  setLeadInput((p) => ({ ...p, name: e.target.value }))
                }
                onKeyDown={(e) => e.key === "Enter" && startChat()}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
                placeholder="Your full name"
                autoComplete="name"
              />
              {leadErrors.name && (
                <p className="mt-1 text-xs text-red-600">{leadErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                value={leadInput.email}
                onChange={(e) =>
                  setLeadInput((p) => ({ ...p, email: e.target.value }))
                }
                onKeyDown={(e) => e.key === "Enter" && startChat()}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
                placeholder="you@example.com"
                autoComplete="email"
              />
              {leadErrors.email && (
                <p className="mt-1 text-xs text-red-600">{leadErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                inputMode="numeric"
                value={leadInput.phone}
                onChange={(e) =>
                  setLeadInput((p) => ({ ...p, phone: fmtPhone(e.target.value) }))
                }
                onKeyDown={(e) => e.key === "Enter" && startChat()}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring"
                placeholder="(570) 555-1234"
                maxLength={14}
                autoComplete="tel"
              />
              {leadErrors.phone && (
                <p className="mt-1 text-xs text-red-600">{leadErrors.phone}</p>
              )}
            </div>

            <button
              onClick={startChat}
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* ── Chat panel ── */}
      {step === "chat" && (
        <div className="w-80 sm:w-96 h-[480px] rounded-xl shadow-xl bg-white border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 flex items-start justify-between flex-shrink-0">
            <div>
              <p className="font-semibold text-sm">Teleringer Assistant</p>
              <p className="text-blue-200 text-xs">Hi {lead.name.split(/\s+/)[0]}!</p>
            </div>
            <button
              onClick={() => setStep("closed")}
              className="text-white hover:text-blue-200 text-2xl leading-none mt-0.5"
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-lg px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap break-words ${
                    m.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-2.5 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t flex-shrink-0 p-3 flex gap-2">
            <input
              ref={chatInputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && sendMessage()
              }
              disabled={loading}
              placeholder="Type a message…"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="rounded-lg bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send"
            >
              <i className="ri-send-plane-fill text-sm" />
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center pb-2 flex-shrink-0">
            Powered by AI · Teleringer
          </p>
        </div>
      )}

      {/* ── Toggle button ── */}
      <button
        onClick={toggleWidget}
        className="relative w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        aria-label={step === "closed" ? "Open chat" : "Close chat"}
      >
        <i
          className={`text-xl transition-transform ${
            step !== "closed" ? "ri-close-line" : "ri-chat-3-line"
          }`}
        />
        {step === "closed" && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
}
