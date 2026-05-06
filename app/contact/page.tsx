// Server Component (Next 15): Contact page with checkbox "Service Interest"

type SearchParams = Record<string, string | string[] | undefined>;

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

const toId = (s: string) => "svc-" + s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const raw = params.sent;
  const sent = Array.isArray(raw) ? raw[0] === "1" : raw === "1";

  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.teleringer.com";

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "Teleringer",
              url: site,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-570-456-5550",
                  contactType: "customer service",
                  email: "info@teleringer.com",
                  availableLanguage: "English",
                  hoursAvailable: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "17:00",
                  },
                },
                {
                  "@type": "ContactPoint",
                  contactType: "emergency support",
                  availableLanguage: "English",
                  hoursAvailable: "24/7",
                },
              ],
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Get Started with Teleringer</h1>
          <p className="mx-auto mt-4 max-w-3xl text-blue-100">
            Ready to transform your business communications? Contact us today for a free
            consultation and discover how our unified solutions can help your business grow.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {sent && (
          <div
            role="status"
            className="mb-6 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800"
          >
            Message sent successfully. We will get back to you shortly.
          </div>
        )}

        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT: Form */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>

            <form action="/api/contact" method="post" className="mt-6 space-y-6" noValidate>
              <input type="hidden" name="subject" value="Contact Request" />

              {/* Honeypot — must remain empty */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Timing field: server rejects ultra-fast submits */}
              <input type="hidden" id="form_ts" name="form_ts" value="" />

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email Address *</label>
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
                  <label className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    name="company"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none ring-blue-500 focus:ring"
                    placeholder="Your company name"
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="(570) 555-1234"
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
                  Service Interest <span className="text-gray-400">(optional)</span>
                </span>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceOptions.map((opt) => {
                    const id = toId(opt);
                    return (
                      <label key={id} htmlFor={id} className="flex cursor-pointer items-center gap-3">
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
                <label className="mb-2 block text-sm font-medium text-gray-700">Message *</label>
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

              {/* Cloudflare Turnstile widget */}
              <div
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* RIGHT: Contact Info */}
          <aside>
            <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
            <div className="mt-6 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-xl text-blue-700">📞</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-gray-900">Phone</div>
                  <p className="text-gray-600">Call us for immediate assistance</p>
                  <a className="text-lg font-medium text-blue-700 hover:underline" href="tel:5704565550">
                    (570) 456-5550
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-xl text-blue-700">✉️</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-gray-900">Email</div>
                  <p className="text-gray-600">Send us an email anytime</p>
                  <a className="font-medium text-blue-700 hover:underline" href="mailto:info@teleringer.com">
                    info@teleringer.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-xl text-blue-700">⏱️</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-gray-900">Business Hours</div>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday – Friday: 9:00 AM – 5:00 PM EST</p>
                    <p>Saturday &amp; Sunday: Emergency Support Only</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <span className="text-xl text-blue-700">🛟</span>
                </div>
                <div>
                  <div className="text-xl font-semibold text-gray-900">24/7 Support</div>
                  <p className="text-gray-600">
                    Emergency technical support available around the clock for existing customers
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-xl bg-gray-50 p-6">
              <h4 className="mb-4 text-xl font-semibold text-gray-900">Why Choose Teleringer?</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✔ 70+ years of telecom expertise</li>
                <li>✔ Unified communications platform</li>
                <li>✔ Scalable solutions for any business size</li>
                <li>✔ Award-winning customer support</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Cloudflare Turnstile script */}
      <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      {/* Phone mask + form timestamp */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  function fmt(v) {
    var d = (v || "").replace(/\\D/g, "").slice(0, 10);
    if (!d) return "";
    if (d.length < 4) return "(" + d;
    if (d.length < 7) return "(" + d.slice(0,3) + ") " + d.slice(3);
    return "(" + d.slice(0,3) + ") " + d.slice(3,6) + "-" + d.slice(6);
  }
  function handle(e) {
    var el = e.target;
    var before = el.value;
    el.value = fmt(el.value);
    if (document.activeElement === el) {
      var delta = el.value.length - before.length;
      var pos = (el.selectionStart || 0) + (delta > 0 ? delta : 0);
      el.setSelectionRange(pos, pos);
    }
  }
  function onlyDigits(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var k = e.key;
    if (k.length > 1) return;
    if (!/\\d/.test(k)) e.preventDefault();
  }
  function attach() {
    var el = document.getElementById("contact-phone");
    if (el) {
      el.addEventListener("input", handle);
      el.addEventListener("keypress", onlyDigits);
      el.value = fmt(el.value);
    }
    var ts = document.getElementById("form_ts");
    if (ts) { ts.value = String(Date.now()); }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attach);
  } else {
    attach();
  }
})();`,
        }}
      />
    </div>
  );
}
