import ContactForm from "@/components/ContactForm";

export default async function ContactPage() {
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
        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT: Form */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
            <ContactForm />
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
    </div>
  );
}
