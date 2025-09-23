// Server Component (Next 15): styled contact page that posts to /api/contact

type SearchParams = Record<string, string | string[] | undefined>;

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const params = (await searchParams) ?? {};
  const raw = params.sent;
  const sent = Array.isArray(raw) ? raw[0] === "1" : raw === "1";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-700 to-blue-600 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-semibold sm:text-4xl">
                Get Started with Teleringer
              </h1>
              <p className="mt-3 max-w-3xl text-white/90">
                Ready to transform your business communications? Contact us for a free
                consultation and discover how our unified solutions can help your business grow.
              </p>
            </div>
            <a
              href="tel:5704565550"
              className="hidden shrink-0 rounded-lg bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur hover:bg-white/20 md:block"
            >
              Free Demo Call <span className="font-semibold">(570) 456-5550</span>
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {sent && (
          <div
            role="status"
            className="mb-6 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800"
          >
            Thanks — your message was sent.
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-5">
          {/* LEFT: Form */}
          <section className="md:col-span-3">
            <h2 className="text-2xl font-semibold">Send Us a Message</h2>

            <form
              action="/api/contact"
              method="post"
              className="mt-5 grid gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              {/* Hidden subject to keep the API happy */}
              <input type="hidden" name="subject" value="Contact Request" />
              {/* Honeypot anti-bot */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block text-gray-700">Full Name *</span>
                  <input
                    name="name"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                    placeholder="Your full name"
                  />
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-gray-700">Email Address *</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block text-gray-700">Company Name</span>
                  <input
                    name="company"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                    placeholder="Your company name"
                  />
                </label>

                <label className="block text-sm">
                  <span className="mb-1 block text-gray-700">Phone Number</span>
                  <input
                    name="phone"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                    placeholder="(570) 555-1234"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="mb-1 block text-gray-700">Service Interest (select multiple)</span>
                {/* multi-select sends multiple "service" values which our API handles with form.getAll('service') */}
                <select
                  name="service"
                  multiple
                  className="h-28 w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                >
                  <option value="VoIP / Phone System">VoIP / Phone System</option>
                  <option value="Website">Website</option>
                  <option value="AI Concierge / Call Agent">AI Concierge / Call Agent</option>
                </select>
                <span className="mt-1 block text-[12px] text-gray-500">Hold Ctrl/⌘ to select multiple.</span>
              </label>

              <label className="block text-sm">
                <span className="mb-1 block text-gray-700">Message *</span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-600 focus:ring"
                  placeholder="Tell us about your communication needs…"
                />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>

          {/* RIGHT: Contact Info */}
          <aside className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <div className="mt-5 space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <a href="tel:5704565550" className="text-blue-600 hover:underline">
                  (570) 456-5550
                </a>
                <p className="mt-1 text-sm text-gray-600">Call us for immediate assistance</p>
              </div>

              <hr className="border-gray-200" />

              <div>
                <div className="text-sm text-gray-500">Email</div>
                <a href="mailto:info@teleringer.com" className="text-blue-600 hover:underline">
                  info@teleringer.com
                </a>
                <p className="mt-1 text-sm text-gray-600">Send us an email anytime</p>
              </div>

              <hr className="border-gray-200" />

              <div>
                <div className="text-sm text-gray-500">Business Hours</div>
                <p className="text-sm text-gray-700">
                  Monday – Friday: 9:00 AM – 5:00 PM EST
                  <br />
                  Saturday & Sunday: Emergency Support Only
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
