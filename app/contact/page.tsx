// app/contact/page.tsx
"use client";

import React from "react";

/** Formats digits to (XXX) XXX-XXXX and limits to 10 digits */
function formatPhoneInput(v: string) {
  // keep only digits
  const digits = v.replace(/\D/g, "").slice(0, 10);
  const len = digits.length;
  if (len === 0) return "";
  if (len < 4) return `(${digits}`;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function ContactPage() {
  const [phone, setPhone] = React.useState("");

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneInput(e.target.value));
  };

  return (
    <main className="min-h-screen py-10">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-6">Contact Teleringer</h1>

        {/* 
          NOTE: This posts directly to the API route expecting multipart/form-data.
          The hidden "website" field is a honeypot (bots tend to fill everything).
        */}
        <form method="POST" action="/api/contact" className="space-y-5">
          {/* Honeypot */}
          <div style={{ display: "none" }}>
            <label>
              Website (leave empty)
              <input type="text" name="website" autoComplete="off" />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-sm font-medium">Name*</span>
              <input
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded border px-3 py-2"
                autoComplete="name"
              />
            </label>

            <label className="block">
              <span className="block text-sm font-medium">Email*</span>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded border px-3 py-2"
                autoComplete="email"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block">
              <span className="block text-sm font-medium">Company</span>
              <input
                name="company"
                type="text"
                className="mt-1 w-full rounded border px-3 py-2"
                autoComplete="organization"
              />
            </label>

            <label className="block">
              <span className="block text-sm font-medium">Phone</span>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={onPhoneChange}
                // 14 characters max when formatted: "(123) 456-7890"
                maxLength={14}
                pattern="^\(\d{3}\) \d{3}-\d{4}$"
                title="Enter a 10-digit US phone number"
                className="mt-1 w-full rounded border px-3 py-2"
                autoComplete="tel"
              />
            </label>
          </div>

          <label className="block">
            <span className="block text-sm font-medium">Subject*</span>
            <input
              name="subject"
              type="text"
              required
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </label>

          {/* Example Service Interest checkboxes (name="service") */}
          <fieldset className="border rounded px-3 py-2">
            <legend className="text-sm font-semibold">Service Interest</legend>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="service" value="Business Phone / VoIP" />
                <span>Business Phone / VoIP</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="service" value="AI Voice Agent" />
                <span>AI Voice Agent</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="service" value="Website Design" />
                <span>Website Design</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="service" value="Other" />
                <span>Other</span>
              </label>
            </div>
          </fieldset>

          <label className="block">
            <span className="block text-sm font-medium">Message*</span>
            <textarea
              name="message"
              required
              rows={6}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </label>

          <button
            type="submit"
            className="rounded bg-emerald-600 px-5 py-2 text-white font-medium hover:bg-emerald-700"
          >
            Send message
          </button>
        </form>
      </div>
    </main>
  );
}
