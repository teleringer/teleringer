import Link from "next/link";
import RevenueCalculator from "@/components/RevenueCalculator";

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
              "Turn missed calls into real leads and booked jobs. Teleringer's revenue recovery service helps small businesses stop losing money to unanswered calls.",
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
            "linear-gradient(rgba(30, 64, 175, 0.85), rgba(59, 130, 246, 0.85)), url('https://readdy.ai/api/search-image?query=Small%20business%20owner%20looking%20at%20phone%20at%20desk%2C%20professional%20office%20setting%2C%20warm%20lighting%2C%20blue%20and%20white%20color%20scheme&width=1200&height=600&seq=revenue-recovery-hero&orientation=landscape')",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl text-white">
            <div className="mb-4 text-sm font-bold tracking-wider text-blue-200">
              REVENUE RECOVERY FOR SMALL BUSINESS
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Stop Losing Customers Every Time You Miss a Call
            </h1>
            <p className="mb-8 text-lg text-blue-100 sm:text-xl">
              Turn missed calls into real leads and booked jobs — automatically.
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
            <p className="mt-2 text-sm text-blue-200">
              Takes less than 10 minutes to get set up
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Most Missed Calls = Lost Revenue
          </h2>
          <p className="mb-4 text-lg text-gray-600">
            When someone calls your business and you don&apos;t answer, they usually
            don&apos;t leave a voicemail.
          </p>
          <p className="mb-10 text-lg text-gray-600">
            They call the next company—and that job is gone.
          </p>
          <div className="rounded-xl border-2 border-blue-600 bg-white px-8 py-6 shadow-md inline-block">
            <p className="text-xl font-bold text-blue-700 sm:text-2xl">
              3 missed calls per week &times; $300 job &times; 40% close rate = $1,440/month at risk
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <RevenueCalculator />

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              How the Revenue Recovery System Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Customer calls and you miss it
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Instant text goes out
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Conversation continues automatically
              </h3>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                4
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                You receive the lead details
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Conversation */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              See It In Action
            </h2>
          </div>

          <div className="rounded-xl bg-gray-50 p-6 sm:p-8 space-y-4">
            <div className="flex justify-start">
              <div className="rounded-xl rounded-tl-none bg-blue-600 px-5 py-3 text-white max-w-xs sm:max-w-sm">
                <p className="text-sm font-semibold text-blue-200 mb-1">Teleringer</p>
                <p>Hi, sorry we missed your call — what can we help you with?</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="rounded-xl rounded-tr-none bg-white px-5 py-3 shadow-sm border border-gray-200 max-w-xs sm:max-w-sm">
                <p className="text-sm font-semibold text-gray-400 mb-1">Customer</p>
                <p className="text-gray-800">I need a quote for junk removal</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="rounded-xl rounded-tl-none bg-blue-600 px-5 py-3 text-white max-w-xs sm:max-w-sm">
                <p className="text-sm font-semibold text-blue-200 mb-1">Teleringer</p>
                <p>Got it — what&apos;s the address and when were you hoping to have it done?</p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-lg text-gray-600">
            This happens instantly — without you lifting a finger.
          </p>
          <p className="mt-2 text-center text-lg text-gray-600">
            And you receive the full lead details ready to follow up.
          </p>
          <p className="mt-2 text-center text-lg text-gray-600">
            So you can step in and close the job.
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            What This Actually Means for Your Business
          </h2>
          <p className="mb-4 text-lg text-blue-100 sm:text-xl">
            If you recover just one missed job per week, this system pays for
            itself many times over.
          </p>
          <p className="text-lg text-blue-100 sm:text-xl">
            Everything after that is revenue you would have lost.
          </p>
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
              Simple, affordable, and fully set up for you.
            </p>
          </div>

          <div className="grid items-center gap-8 md:grid-cols-3">
            {/* Standard */}
            <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Standard
                </h3>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$59</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Basic missed call recovery
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Instant text-back
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Lead capture
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Email or text notifications
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
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">$79</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Full recovery conversation
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Smart lead qualification
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Clean lead summaries
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Customized business responses
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Start with Pro
              </Link>
            </div>

            {/* Premium */}
            <div className="rounded-xl bg-white p-6 shadow-md sm:p-8">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Premium
                </h3>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Everything in Pro
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Appointment request handling
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Priority tuning
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Monthly performance review
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg border-2 border-blue-600 px-6 py-3 text-center font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-gray-500">
            One-time setup:{" "}
            <span className="font-semibold text-gray-700">$100</span>
          </p>
          <p className="mt-3 text-center text-gray-600 font-medium">
            Most businesses recover the cost with just one job.
          </p>
          <p className="mt-1 text-center text-gray-500">
            After that, it&apos;s pure upside.
          </p>
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Not Another App You Have to Learn
          </h2>
          <p className="text-lg text-gray-600 sm:text-xl">
            We set it up, customize it for your business, and make sure it
            works. You don&apos;t need to manage another system or learn new
            software.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Common Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="rounded-xl bg-white p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                How quickly will I see results?
              </h3>
              <p className="text-gray-600">
                Most clients see their first recovered revenue within 30 days.
                Missed call recovery typically shows results in the first week
                once your system is live.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Do I need to change my current phone number?
              </h3>
              <p className="text-gray-600">
                No. We port your existing number or work alongside it. Your
                customers keep calling the same number they always have.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Is there a long-term commitment?
              </h3>
              <p className="text-gray-600">
                No contracts. You pay month to month. Cancel with 30 days&apos;
                notice anytime.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 sm:p-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                What kinds of businesses does this work for?
              </h3>
              <p className="text-gray-600">
                Any business that relies on the phone to get customers.
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
            Stop Letting Customers Slip Through the Cracks
          </h2>
          <p className="mb-8 text-lg text-blue-100 sm:text-xl">
            If your phone brings in business, missed calls are costing you
            money. Let&apos;s fix that starting this week.
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
