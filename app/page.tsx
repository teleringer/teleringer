export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl">
            Small Business Communications, Unified.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Teleringer brings voice, video, text, and contact center together in one
            reliable, cloud-based platform—built for small businesses.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow hover:bg-blue-50"
            >
              Get Started
            </a>
            <a
              href="tel:5704565550"
              className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-900"
            >
              Call (570) 456-5550
            </a>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-2xl">📞</div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">Voice & UCaaS</h3>
            <p className="mt-2 text-sm text-gray-600">
              Business phone, voicemail, auto-attendant, and team messaging—seamlessly connected.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-2xl">🎥</div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">Video & Collaboration</h3>
            <p className="mt-2 text-sm text-gray-600">
              HD meetings, screenshare, and chat to keep teams productive anywhere.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="text-2xl">🤖</div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">AI Concierge & CCaaS</h3>
            <p className="mt-2 text-sm text-gray-600">
              Smart call routing, AI agents, and analytics for a better customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Teleringer */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why businesses choose Teleringer
              </h2>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ 70+ years of telecom expertise</li>
                <li>✔ Unified platform—voice, video, text, and contact center</li>
                <li>✔ Scales from a few seats to full call centers</li>
                <li>✔ Friendly, responsive support</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-lg text-gray-800">
                “Setup was fast and our team loves the reliability. Teleringer made it easy to
                consolidate tools and save money.”
              </blockquote>
              <div className="mt-4 text-sm text-gray-500">— A happy customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Ready to get started?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-gray-600">
          Book a free consultation or call us now. We’ll help you pick the right plan and get live quickly.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="/contact"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            Contact Us
          </a>
          <a
            href="tel:5704565550"
            className="rounded-lg border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            Call (570) 456-5550
          </a>
        </div>
      </section>
    </main>
  );
}
