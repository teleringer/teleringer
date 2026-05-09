import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "SMS Consent Policy | Teleringer",
  description: "How Teleringer LLC sends automated SMS messages in response to missed calls, how consent is established, and how to opt out.",
  robots: "index, follow",
  openGraph: {
    title: "SMS Consent Policy | Teleringer",
    description: "How Teleringer LLC sends automated SMS messages in response to missed calls, how consent is established, and how to opt out.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sms-consent`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/sms-consent`,
  },
};

export default function SmsConsentPage() {
  return (
    <LegalPage
      title="SMS Consent & Missed-Call Text-Back Policy"
      subtitle="How Teleringer LLC sends automated SMS messages in response to missed calls, how recipient consent is established, and how recipients can opt out."
      effectiveDate="May 9, 2026"
      sections={[
        {
          id: "overview",
          heading: "Overview",
          content: (
            <>
              <p>
                Teleringer LLC (&quot;Teleringer&quot;) operates an automated missed-call SMS text-back
                service for small businesses. When a caller dials a business phone number and the
                call goes unanswered, Teleringer automatically sends a single SMS message to the
                caller on behalf of that business.
              </p>
              <p>
                This page describes how consent is established, what messages are sent, and how
                recipients can opt out at any time.
              </p>
            </>
          ),
        },
        {
          id: "how-consent-is-established",
          heading: "How Consent Is Established",
          content: (
            <>
              <p>
                Consent to receive an SMS message from a Teleringer-powered business is established
                by the act of placing a phone call to that business. When a person dials a business
                number, they are initiating contact and reasonably expect a follow-up response.
              </p>
              <p>
                Teleringer sends one SMS message per missed call. No further messages are sent
                unless the recipient replies and continues the conversation voluntarily. The SMS is
                a direct response to the caller&apos;s own initiation of contact — not an unsolicited
                outreach.
              </p>
              <p>
                This model is consistent with the TCPA concept of an &quot;established business
                relationship&quot; initiated by the consumer. The caller placed the call; the business is
                responding via text.
              </p>
            </>
          ),
        },
        {
          id: "what-triggers-an-sms",
          heading: "What Triggers an SMS",
          content: (
            <>
              <p>An SMS is sent automatically when all of the following conditions are met:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>A person dials a business phone number powered by Teleringer</li>
                <li>The call is not answered within the configured ring duration</li>
                <li>The call is detected by Teleringer&apos;s system</li>
                <li>The caller&apos;s phone number is available (not blocked or anonymous)</li>
              </ul>
              <p className="mt-3">No SMS is sent if:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>The call is answered</li>
                <li>The caller&apos;s number is not available</li>
                <li>The caller has previously opted out (replied STOP)</li>
                <li>The business account is inactive or suspended</li>
              </ul>
            </>
          ),
        },
        {
          id: "sample-message",
          heading: "Sample SMS Message",
          content: (
            <>
              <p>The following is a representative example of the SMS message a caller may receive:</p>
              <blockquote className="border-l-2 border-gray-200 pl-4 py-2 my-3 bg-gray-50 rounded-r-lg">
                <p className="italic text-gray-900">
                  &quot;Hi! You recently called [Business Name] and we missed you. We&apos;d love to help —
                  please reply here or call us back. Reply STOP to opt out.&quot;
                </p>
              </blockquote>
              <p>
                The exact message text is customized by each business. All messages include opt-out
                instructions. Standard message and data rates may apply.
              </p>
            </>
          ),
        },
        {
          id: "opt-out-instructions",
          heading: "Opt-Out Instructions",
          content: (
            <>
              <p>
                Recipients may opt out of SMS communications at any time by replying{" "}
                <strong className="text-gray-900">STOP</strong> to any text message received from
                a Teleringer-powered number. Opt-out requests are processed immediately and no
                further messages will be sent to that number from that business.
              </p>
              <p>Recipients may also:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  Reply <strong className="text-gray-900">HELP</strong> for assistance
                </li>
                <li>
                  Contact Teleringer directly at{" "}
                  <a href="mailto:support@teleringer.com" className="text-gray-900 underline underline-offset-2">
                    support@teleringer.com
                  </a>
                </li>
              </ul>
              <p>
                Opt-out records are stored permanently and honored across all future communications
                from the same business number.
              </p>
            </>
          ),
        },
        {
          id: "data-handling",
          heading: "Data Handling",
          content: (
            <>
              <p>The following information is logged when an SMS is triggered:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Caller phone number</li>
                <li>Date and time of missed call</li>
                <li>SMS delivery status</li>
                <li>Any replies received (stored in the business&apos;s contact history)</li>
                <li>Opt-out status if STOP is received</li>
              </ul>
              <p>
                This data is stored securely and is accessible only to the business account owner
                through the Teleringer portal. Teleringer does not sell or share this data with
                third parties. See our{" "}
                <a href="/privacy" className="text-gray-900 underline underline-offset-2">
                  Privacy Policy
                </a>{" "}
                for full details.
              </p>
            </>
          ),
        },
        {
          id: "contact-information",
          heading: "Contact Information",
          content: (
            <>
              <p>Teleringer LLC</p>
              <p>142 S Main Ave</p>
              <p>Scranton, PA 18504</p>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:support@teleringer.com" className="text-gray-900 underline underline-offset-2">
                  support@teleringer.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://www.teleringer.com" className="text-gray-900 underline underline-offset-2">
                  www.teleringer.com
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
