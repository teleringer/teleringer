"use client";

import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    turnstile?: {
      render(container: HTMLElement, options: TurnstileOptions): string;
      reset(widgetId: string): void;
    };
  }
}

interface TurnstileOptions {
  sitekey: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
}

const serviceOptions = [
  "Voice Solutions",
  "Revenue Recovery",
  "Video Collaboration",
  "Contact Centers",
  "Complete UCaaS Package",
  "eFaxing",
  "AI Voice Agents",
  "SIP Trunking",
  "Other",
];

const toId = (s: string) =>
  "svc-" + s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function fmtPhone(v: string) {
  const d = (v || "").replace(/\D/g, "").slice(0, 10);
  if (!d) return "";
  if (d.length < 4) return "(" + d;
  if (d.length < 7) return "(" + d.slice(0, 3) + ") " + d.slice(3);
  return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
}

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const formStarted = useRef(Date.now());

  function renderWidget() {
    if (!containerRef.current || !window.turnstile || widgetId.current) return;
    widgetId.current = window.turnstile.render(containerRef.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
      callback: (t: string) => {
        setToken(t);
        setErrorMsg("");
      },
      "expired-callback": () => setToken(""),
      "error-callback": () => {
        setToken("");
        setErrorMsg(
          "Captcha verification failed. Please complete the checkbox again and resubmit."
        );
      },
    });
  }

  useEffect(() => {
    formStarted.current = Date.now();

    if (window.turnstile) {
      renderWidget();
      return;
    }

    const existing = document.querySelector(
      'script[src*="challenges.cloudflare.com/turnstile"]'
    ) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", renderWidget);
      return () => existing.removeEventListener("load", renderWidget);
    }

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    document.head.appendChild(script);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resetWidget() {
    if (widgetId.current && window.turnstile) {
      window.turnstile.reset(widgetId.current);
    }
    setToken("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!token || submitting) return;

    setSubmitting(true);
    setErrorMsg("");

    const fd = new FormData(formRef.current!);
    fd.set("form_ts", String(formStarted.current));
    fd.set("cf-turnstile-response", token);

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json?.ok) {
        setSent(true);
        formRef.current?.reset();
        setPhone("");
        resetWidget();
      } else {
        const msg =
          json?.error === "Captcha failed"
            ? "Captcha verification failed. Please complete the checkbox again and resubmit."
            : json?.error || "Something went wrong. Please try again.";
        setErrorMsg(msg);
        resetWidget();
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      resetWidget();
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800"
      >
        Thank you — your message was sent. A team member will be in contact with you.
      </div>
    );
  }

  const canSubmit = !!token && !submitting;

  return (
    <>
      {errorMsg && (
        <div
          role="alert"
          className="mb-4 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {errorMsg}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 space-y-6"
        noValidate
      >
        <input type="hidden" name="subject" value="Contact Request" />
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring"
              placeholder="Your full name"
              autoComplete="name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              name="company"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring"
              placeholder="Your company name"
              autoComplete="organization"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="(570) 555-1234"
              value={phone}
              onChange={(e) => setPhone(fmtPhone(e.target.value))}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring"
              autoComplete="tel"
              maxLength={14}
              pattern="^\(\d{3}\) \d{3}-\d{4}$"
              title="Enter a 10-digit US phone number, e.g., (570) 555-1234"
            />
          </div>
        </div>

        <div>
          <span className="mb-2 block text-sm font-medium text-gray-700">
            Service Interest{" "}
            <span className="text-gray-400">(optional)</span>
          </span>
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceOptions.map((opt) => {
              const id = toId(opt);
              return (
                <label
                  key={id}
                  htmlFor={id}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <input
                    id={id}
                    type="checkbox"
                    name="service"
                    value={opt}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-800">{opt}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            name="message"
            rows={6}
            maxLength={500}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring"
            placeholder="Tell us about your communication needs..."
          />
          <p className="mt-1 text-xs text-gray-500">Max 500 characters.</p>
        </div>

        <div ref={containerRef} />

        <button
          type="submit"
          disabled={!canSubmit}
          className={`w-full rounded-lg px-8 py-4 text-sm font-semibold text-white shadow transition-colors ${
            canSubmit
              ? "bg-blue-600 hover:bg-blue-700"
              : "cursor-not-allowed bg-blue-300"
          }`}
        >
          {submitting ? "Sending…" : "Send Message"}
        </button>
      </form>
    </>
  );
}
