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
  "Missed Calls Service",
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

const emptyFields = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
  services: [] as string[],
};

export default function ContactForm() {
  const [fields, setFields] = useState(emptyFields);
  const [token, setToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const formStarted = useRef(Date.now());

  function set(key: keyof typeof emptyFields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(opt: string) {
    setFields((prev) => ({
      ...prev,
      services: prev.services.includes(opt)
        ? prev.services.filter((s) => s !== opt)
        : [...prev.services, opt],
    }));
  }

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
    setSuccessMsg("");

    const fd = new FormData();
    fd.set("subject", "Contact Request");
    fd.set("name", fields.name);
    fd.set("email", fields.email);
    fd.set("company", fields.company);
    fd.set("phone", fields.phone);
    fd.set("message", fields.message);
    fields.services.forEach((s) => fd.append("service", s));
    fd.set("form_ts", String(formStarted.current));
    fd.set("cf-turnstile-response", token);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
        signal: controller.signal,
      });

      let json: Record<string, unknown> = {};
      try {
        json = await res.json();
      } catch {
        // JSON parse failed — json stays as {}
      }

      if (res.ok && json?.ok) {
        setSuccessMsg(
          "Message sent successfully. We will get back to you shortly."
        );
        setFields({ name: "", email: "", company: "", phone: "", message: "", services: [] });
        resetWidget();
      } else {
        const msg =
          json?.error === "Captcha failed"
            ? "Captcha verification failed. Please complete the checkbox again and resubmit."
            : "Something went wrong. Please complete the captcha again and try once more.";
        setErrorMsg(msg);
        resetWidget();
      }
    } catch {
      setErrorMsg(
        "Something went wrong. Please complete the captcha again and try once more."
      );
      resetWidget();
    } finally {
      clearTimeout(timeoutId);
      setSubmitting(false);
    }
  }

  const canSubmit = !!token && !submitting;

  return (
    <>
      {successMsg && (
        <div
          role="status"
          className="mb-4 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800"
        >
          {successMsg}
        </div>
      )}

      {errorMsg && (
        <div
          role="alert"
          className="mb-4 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {errorMsg}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-6"
        noValidate
      >
        <input type="hidden" name="website" value="" />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              name="name"
              required
              value={fields.name}
              onChange={(e) => set("name", e.target.value)}
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
              value={fields.email}
              onChange={(e) => set("email", e.target.value)}
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
              value={fields.company}
              onChange={(e) => set("company", e.target.value)}
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
              value={fields.phone}
              onChange={(e) => set("phone", fmtPhone(e.target.value))}
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
                    checked={fields.services.includes(opt)}
                    onChange={() => toggleService(opt)}
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
            value={fields.message}
            onChange={(e) => set("message", e.target.value)}
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
