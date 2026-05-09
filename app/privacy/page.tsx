import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Teleringer",
  description: "How Teleringer LLC collects, uses, and protects information about businesses and their callers.",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | Teleringer",
    description: "How Teleringer LLC collects, uses, and protects information about businesses and their callers.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How Teleringer LLC collects, uses, and protects information about businesses and their callers."
      effectiveDate="May 9, 2026"
      sections={[
        {
          id: "information-we-collect",
          heading: "Information We Collect",
          content: (
            <>
              <p>Teleringer collects the following categories of information:</p>
              <p className="font-medium text-gray-900 mt-3">From business account holders:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-1">
                <li>Name, business name, and email address</li>
                <li>Phone numbers (business line and Teleringer number)</li>
                <li>Payment information (processed by Stripe — we do not store card details)</li>
                <li>Custom SMS message content</li>
              </ul>
              <p className="font-medium text-gray-900 mt-3">From callers (end users):</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-1">
                <li>Phone number (provided automatically by the telephone network)</li>
                <li>Date and time of call</li>
                <li>SMS reply content if the caller responds to the text-back</li>
                <li>Opt-out status</li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use-information",
          heading: "How We Use Information",
          content: (
            <>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Deliver the Teleringer missed-call SMS text-back service</li>
                <li>Log call and message history in the business portal</li>
                <li>Process subscription payments via Stripe</li>
                <li>Send service notifications and account updates to business owners</li>
                <li>Monitor system performance and prevent abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not use caller phone numbers for any purpose other than delivering the
                text-back response on behalf of the business they called.
              </p>
            </>
          ),
        },
        {
          id: "data-sharing",
          heading: "Data Sharing",
          content: (
            <>
              <p>
                Teleringer does not sell, rent, or trade personal information to third parties.
                We share data only with:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  <strong className="text-gray-900">Twilio</strong> — to send and receive SMS
                  messages and route phone calls
                </li>
                <li>
                  <strong className="text-gray-900">Stripe</strong> — to process subscription
                  payments
                </li>
                <li>
                  <strong className="text-gray-900">Clerk</strong> — to manage account
                  authentication and sessions
                </li>
                <li>
                  <strong className="text-gray-900">Railway</strong> — to host and operate our
                  infrastructure
                </li>
              </ul>
              <p className="mt-3">
                Each of these providers has their own privacy policy and security practices.
                We share only the minimum data necessary for each service to function.
              </p>
            </>
          ),
        },
        {
          id: "data-retention",
          heading: "Data Retention",
          content: (
            <>
              <p>
                Call records and SMS history are retained for the duration of the business account
                and for 90 days following account cancellation. Opt-out records (STOP requests) are
                retained indefinitely to ensure compliance.
              </p>
              <p>
                Business account holders may request deletion of their data by contacting{" "}
                <a href="mailto:support@teleringer.com" className="text-gray-900 underline underline-offset-2">
                  support@teleringer.com
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "security",
          heading: "Security",
          content: (
            <p>
              All data is transmitted over encrypted connections (TLS). Our database is hosted on
              Railway&apos;s private network infrastructure. Access to account data is restricted to
              authenticated account holders and Teleringer administrators. We do not store payment
              card numbers — all payment processing is handled by Stripe&apos;s PCI-compliant
              infrastructure.
            </p>
          ),
        },
        {
          id: "your-rights",
          heading: "Your Rights",
          content: (
            <>
              <p>Business account holders and callers may:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Request access to data we hold about them</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of their data</li>
                <li>Opt out of SMS messages at any time by replying STOP</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact{" "}
                <a href="mailto:support@teleringer.com" className="text-gray-900 underline underline-offset-2">
                  support@teleringer.com
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "contact",
          heading: "Contact Information",
          content: (
            <>
              <p>Teleringer LLC</p>
              <p>121 S Broad St, 15th Floor PMB 1078</p>
              <p>Philadelphia, PA 19107</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:support@teleringer.com" className="text-gray-900 underline underline-offset-2">
                  support@teleringer.com
                </a>
              </p>
              <p>Phone: (570) 456-5550</p>
            </>
          ),
        },
      ]}
    />
  );
}
