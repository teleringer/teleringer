import Link from "next/link";

export default function RevenueRecovery() {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.teleringer.com";

  return (
    <main className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Revenue Recovery",
            provider: {
              "@type": "Organization",
              name: "Teleringer",
              url: site,
              telephone: "+1-570-456-5550",
            },
            description:
              "Stop losing money to missed calls and slow follow-up. Teleringer's revenue recovery service helps small businesses take back what's theirs.",
            serviceType: "Revenue Recovery",
            areaServed: { "@type": "Country", name: "United States" },
            url: `${site}/revenue-recovery`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 64, 175, 0.85), rgba(59, 130, 246, 0.85)), url('https://readdy.ai/api/search-image?query=Small%20business%20owner%20looking%20at%20phone%20and%20invoice%20paperwork%20at%20desk%2C%20stressed%20expression%2C%20professional%20office%20setting%2C%20warm%20lighting%2C%20blue%20and%20white%20color%20scheme&width=1200&height=600&seq=revenue-recovery-hero&orientation=landscape')",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl text-white">
            <div className="mb-4 text-sm font-bold tracking-wider text-blue-200">
              REVENUE RECOVERY FOR SMALL BUSINESS
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Stop Leaving Money on the Table
            </h1>
            <p className="mb-8 text-lg text-blue-100 sm:text-xl">
              Every missed call is a missed sale. Every unanswered follow-up is
              money walking out the door. We help you get it back.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="cursor-pointer whitespace-nowrap rounded-lg bg-white px-6 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100 sm:px-8 text-center"
              >
                Start Recovering Revenue
              </Link>
              <Link
                href="#how-it-works"
                className="cursor-pointer whitespace-nowrap rounded-lg border-2 border-white px-6 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 sm:px-8 text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Where Businesses Bleed Money Every Day
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Most business owners don&apos;t realize how much revenue slips away
              through everyday communication gaps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red-100">
                <i className="ri-phone-off-line text-2xl text-red-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                Missed Calls
              </h3>
              <p className="mb-4 text-gray-600">
                62% of callers won&apos;t leave a voicemail. They hang up and call
                your competitor instead.
              </p>
              <p className="text-gray-600">
                Every unanswered ring is a real customer with a real budget
                going somewhere else.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-100">
                <i className="ri-time-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                Slow Follow-Up
              </h3>
              <p className="mb-4 text-gray-600">
                Speed wins. The first business to call back gets the job. If
                your follow-up is slow, someone else is already on the phone
                with your customer.
              </p>
              <p className="text-gray-600">
                We make sure you&apos;re always the first call back.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 transition-shadow hover:shadow-lg md:col-span-2 lg:col-span-1 sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100">
                <i className="ri-user-unfollow-line text-2xl text-yellow-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                Lost Repeat Customers
              </h3>
              <p className="mb-4 text-gray-600">
                Past customers are your easiest sale. They already trust you.
                They already spent money with you.
              </p>
              <p className="text-gray-600">
                Without regular touchpoints, they forget you exist and move on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              How We Recover Your Revenue
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              Three straightforward steps. No learning curve. No extra work for
              your team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                We Audit Your Gaps
              </h3>
              <p className="text-gray-600">
                We look at where calls go unanswered and where potential
                customers drop off. You see the full picture in plain numbers.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                We Set Up Your System
              </h3>
              <p className="text-gray-600">
                We configure your phone system, follow-up sequences, and
                outreach cadence to match how your business actually runs.
                Setup takes days, not months.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                You Get Paid
              </h3>
              <p className="text-gray-600">
                Calls get answered. Leads get followed up. The money that was
                slipping away starts coming in instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Real Numbers from Real Businesses
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-white sm:text-6xl">
                62%
              </div>
              <p className="text-lg text-blue-100">
                of callers never leave a voicemail
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-white sm:text-6xl">
                $12K
              </div>
              <p className="text-lg text-blue-100">
                average annual loss from missed calls alone
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-white sm:text-6xl">
                5×
              </div>
              <p className="text-lg text-blue-100">
                more likely to close a deal with a past customer
              </p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-white sm:text-6xl">
                30d
              </div>
              <p className="text-lg text-blue-100">
                average time to first recovered revenue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Simple, Honest Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              No setup fees. No long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-3">
            {/* Starter */}
            <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Starter
                </h3>
                <p className="text-gray-500">
                  For solo operators and micro businesses
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$97</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Call tracking &amp; missed call alerts
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Voicemail-to-email transcription
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Basic follow-up sequences
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Monthly performance report
                </li>
                <li className="flex items-start text-gray-400">
                  <i className="ri-close-line mr-3 mt-0.5 text-gray-300"></i>
                  After-hours call routing
                </li>
                <li className="flex items-start text-gray-400">
                  <i className="ri-close-line mr-3 mt-0.5 text-gray-300"></i>
                  Text message follow-up
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg border-2 border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Get Started
              </Link>
            </div>

            {/* Pro — highlighted */}
            <div className="relative rounded-xl border-2 border-blue-600 bg-white p-6 shadow-xl transition-transform sm:p-8 md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1 text-sm font-bold text-white">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Pro</h3>
                <p className="text-gray-500">
                  For growing businesses serious about revenue
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">$247</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  After-hours call routing
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Text message follow-up
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Weekly performance calls
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Priority phone support
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Start with Pro
              </Link>
            </div>

            {/* Enterprise */}
            <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Enterprise
                </h3>
                <p className="text-gray-500">
                  For multi-location or high-volume businesses
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  Custom
                </span>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Multi-location support
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  SLA-backed uptime guarantee
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Onsite onboarding available
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Executive reporting dashboard
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg border-2 border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Common Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl bg-gray-50 p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                How quickly will I see results?
              </h3>
              <p className="text-gray-600">
                Most clients see their first recovered revenue within 30 days.
                Missed call recovery typically shows results in the first week
                once your system is live.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Do I need to change my current phone number?
              </h3>
              <p className="text-gray-600">
                No. We port your existing number or work alongside it. Your
                customers keep calling the same number they always have.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Is there a long-term commitment?
              </h3>
              <p className="text-gray-600">
                No contracts. You pay month to month. If it&apos;s not working for
                you, cancel with 30 days&apos; notice. We&apos;d rather earn your business
                every month than lock you in.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                What kinds of businesses does this work for?
              </h3>
              <p className="text-gray-600">
                Any business that relies on the phone to get or keep customers.
                Contractors, medical offices, law firms, salons, real estate
                agents, home services — if a missed call costs you money, this
                is for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            The Money Is Already There. Let&apos;s Go Get It.
          </h2>
          <p className="mb-8 text-lg text-blue-100 sm:text-xl">
            A quick call with our team is all it takes to find out how much
            you&apos;re losing and exactly how to stop it.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="cursor-pointer whitespace-nowrap rounded-lg bg-white px-6 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100 sm:px-8"
            >
              Book a Free Call
            </Link>
            <a
              href="tel:+15704565550"
              className="cursor-pointer whitespace-nowrap rounded-lg border-2 border-white px-6 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 sm:px-8"
            >
              Call (570) 456-5550
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
