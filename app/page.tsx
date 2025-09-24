import Link from "next/link";

export default function Home() {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.teleringer.com";

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* JSON-LD (use a script tag in the app router) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Teleringer",
            alternateName: "Small Business Communications",
            url: site,
            logo:
              "https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/b642df33b2e92db5f586655492e64051.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-570-456-5550",
              contactType: "customer service",
              email: "info@teleringer.com",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "US",
            },
            sameAs: [site],
            description:
              "Simplify your communication with our comprehensive UCaaS and CCaaS solutions. Voice, data, video, and text - all in one cloud-based platform.",
            foundingDate: "2022",
            serviceArea: { "@type": "Country", name: "United States" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Communication Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Voice Solutions",
                    description:
                      "Crystal-clear voice communications with advanced features like call forwarding, voicemail-to-email, and auto-attendant.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Video Collaboration",
                    description:
                      "Professional video conferencing with screen sharing, recording, and seamless integration across all devices.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Contact Centers",
                    description:
                      "Advanced CCaaS solutions with intelligent routing, real-time analytics, and omnichannel support.",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20office%20environment%20with%20professional%20business%20people%20using%20various%20communication%20devices%2C%20including%20phones%2C%20laptops%2C%20and%20video%20conferencing%20screens%2C%20clean%20minimalist%20background%20with%20blue%20and%20white%20color%20scheme%2C%20corporate%20telecommunications%20setting%20with%20unified%20communication%20technology&width=1200&height=600&seq=teleringer-hero&orientation=landscape')",
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl text-white">
            <div className="mb-4 text-sm font-bold tracking-wider text-blue-200">
              SMALL BUSINESS COMMUNICATIONS
            </div>
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Unified Communications for Growing Businesses
            </h1>
            <p className="mb-8 text-lg text-blue-100 sm:text-xl">
              Simplify your communication with our comprehensive UCaaS and CCaaS
              solutions. Voice, data, video, and text - all in one cloud-based
              platform.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="cursor-pointer whitespace-nowrap rounded-lg bg-white px-6 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100 sm:px-8 text-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="cursor-pointer whitespace-nowrap rounded-lg border-2 border-white px-6 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 sm:px-8 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Complete Communication Solutions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              From basic phone service to advanced unified communications, we
              provide everything your business needs to stay connected.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-6 transition-shadow hover:shadow-lg sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                <i className="ri-phone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                Voice Solutions
              </h3>
              <p className="mb-6 text-gray-600">
                Crystal-clear voice communications with advanced features like
                call forwarding, voicemail-to-email, and auto-attendant.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>HD
                  Voice Quality
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>Call
                  Analytics
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>Mobile
                  Integration
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 transition-shadow hover:shadow-lg sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                <i className="ri-video-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                Video Collaboration
              </h3>
              <p className="mb-6 text-gray-600">
                Professional video conferencing with screen sharing, recording,
                and seamless integration across all devices.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>Screen
                  Sharing
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>Meeting
                  Recording
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>
                  Cross-Platform Access
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-gray-50 p-6 transition-shadow hover:shadow-lg md:col-span-2 lg:col-span-1 sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                Contact Centers
              </h3>
              <p className="mb-6 text-gray-600">
                Advanced CCaaS solutions with intelligent routing, real-time
                analytics, and omnichannel support.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>Smart
                  Routing
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>Real-time
                  Analytics
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-2 text-green-500"></i>
                  Omnichannel Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Teleringer?
              </h2>
              <p className="mb-8 text-lg text-gray-600 sm:text-xl">
                Backed by over 70 years of telecom expertise through our
                partnership with Endeavor Communications' GigTel, we deliver
                reliable, innovative solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <i className="ri-phone-line text-xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                      Call Us Today
                    </h3>
                    <p className="mb-2 text-gray-600">
                      Ready to get started? Speak with our experts
                    </p>
                    <p className="text-lg font-medium text-blue-600">
                      (570) 456-5550
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <i className="ri-cloud-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                      Cloud-Based Platform
                    </h3>
                    <p className="text-gray-600">
                      Access your communications from anywhere, on any device
                      with our secure cloud infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <i className="ri-shield-check-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-600">
                      Bank-level security with end-to-end encryption and
                      compliance certifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <i className="ri-line-chart-line text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                      Scalable Solutions
                    </h3>
                    <p className="text-gray-600">
                      Grow your communication system as your business expands
                      with flexible pricing plans.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/d968ee7bccf04c4e22a50454221a0fe1.jfif"
                alt="Teleringer Features"
                className="h-[400px] w-full rounded-lg object-cover shadow-lg sm:h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Perfect for Small to Medium Businesses
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Designed specifically for solopreneurs and growing businesses who
              need professional communication tools without the complexity.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <i className="ri-money-dollar-circle-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Cost Effective
              </h3>
              <p className="text-gray-600">
                Reduce communication costs by up to 60% with our unified
                platform approach.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <i className="ri-time-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Quick Setup
              </h3>
              <p className="text-gray-600">
                Get up and running in minutes with our simple onboarding
                process.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <i className="ri-customer-service-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Expert support team available around the clock to help your
                business succeed.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <i className="ri-smartphone-line text-3xl text-blue-600"></i>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                Mobile Ready
              </h3>
              <p className="text-gray-600">
                Full mobile app integration keeps you connected wherever
                business takes you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Addons Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Exclusive Addons &amp; Services
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Enhance your communication capabilities with our premium add-on
              services designed to take your business to the next level.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
                <i className="ri-file-paper-line text-2xl text-green-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                eFax
              </h3>
              <p className="mb-6 text-gray-600">
                Industry-leading security and a feature-packed console. Use on
                any device for an easy and seamless online fax experience.
              </p>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Bank-level security encryption
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Multi-device compatibility
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Cloud-based document storage
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-green-500"></i>
                  Email integration
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 text-center"
              >
                GET INFO
              </Link>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100">
                <i className="ri-brain-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                AI Voice Agents
              </h3>
              <p className="mb-6 text-gray-600">
                We will design your new automatic voice agents for your
                business: receptionist, sales, orders, refunds, etc. All
                inclusive.
              </p>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-purple-500"></i>
                  Custom AI receptionist
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-purple-500"></i>
                  Automated sales support
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-purple-500"></i>
                  Order processing automation
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-purple-500"></i>
                  24/7 customer service
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700 text-center"
              >
                GET INFO
              </Link>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl lg:col-span-3 xl:col-span-1 sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-100">
                <i className="ri-phone-fill text-2xl text-orange-600"></i>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 sm:text-2xl">
                SIP Trunking
              </h3>
              <p className="mb-6 text-gray-600">
                Route your business calls over the internet with improved
                communications, cost control, and free long-distance calling.
              </p>
              <ul className="mb-8 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-orange-500"></i>
                  Internet-based call routing
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-orange-500"></i>
                  Significant cost savings
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-orange-500"></i>
                  Free long-distance calling
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line mr-3 text-orange-500"></i>
                  Enhanced call quality
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full cursor-pointer whitespace-nowrap rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-700 text-center"
              >
                GET INFO
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              Interested in multiple services? Contact us for custom package
              pricing and exclusive bundle discounts.
            </p>
            <Link
              href="/contact"
              className="cursor-pointer whitespace-nowrap rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-blue-700 sm:px-8"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Business Communications?
          </h2>
          <p className="mb-8 text-lg text-blue-100 sm:text-xl">
            Join thousands of businesses who have simplified their
            communications with Teleringer. Get started today with a free
            consultation.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="cursor-pointer whitespace-nowrap rounded-lg bg-white px-6 py-4 font-semibold text-blue-600 transition-colors hover:bg-gray-100 sm:px-8"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer whitespace-nowrap rounded-lg border-2 border-white px-6 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 sm:px-8"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
