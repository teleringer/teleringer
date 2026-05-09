import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service | Teleringer",
  description: "The terms and conditions governing use of the Teleringer missed-call SMS text-back service.",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service | Teleringer",
    description: "The terms and conditions governing use of the Teleringer missed-call SMS text-back service.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The terms and conditions governing use of the Teleringer missed-call SMS text-back service."
      effectiveDate="May 9, 2026"
      sections={[
        {
          id: "service-description",
          heading: "Service Description",
          content: (
            <p>
              Teleringer LLC (&quot;Teleringer,&quot; &quot;we,&quot; &quot;us&quot;) provides a missed-call SMS text-back
              service that automatically sends SMS messages to people who call a business phone
              number and receive no answer. By creating an account and using the Teleringer service,
              you agree to these Terms of Service.
            </p>
          ),
        },
        {
          id: "eligibility",
          heading: "Eligibility",
          content: (
            <>
              <p>To use Teleringer you must:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Be at least 18 years of age</li>
                <li>Operate a legitimate business in the United States</li>
                <li>Provide accurate and complete account information</li>
                <li>Comply with all applicable laws including the TCPA and CAN-SPAM Act</li>
              </ul>
            </>
          ),
        },
        {
          id: "acceptable-use",
          heading: "Acceptable Use",
          content: (
            <>
              <p>
                You agree to use Teleringer only to send SMS messages to people who have called
                your business number. You may not use Teleringer to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Send unsolicited messages to numbers that have not called your business</li>
                <li>Send spam, bulk marketing messages, or promotional blasts</li>
                <li>Harass, threaten, or contact anyone who has opted out</li>
                <li>Violate any applicable federal, state, or local law</li>
                <li>Impersonate another business or individual</li>
                <li>Use the service for any unlawful purpose</li>
              </ul>
              <p className="mt-3">
                Teleringer reserves the right to suspend or terminate any account that violates
                these terms without notice.
              </p>
            </>
          ),
        },
        {
          id: "sms-compliance",
          heading: "SMS Compliance",
          content: (
            <>
              <p>
                As a business using Teleringer, you are responsible for ensuring your use of the
                SMS text-back service complies with the Telephone Consumer Protection Act (TCPA)
                and all carrier guidelines. You acknowledge that:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  The act of a person calling your business number constitutes their initiation of
                  contact and establishes a reasonable basis for a follow-up SMS
                </li>
                <li>You must honor all STOP requests immediately</li>
                <li>All SMS messages must include opt-out instructions</li>
                <li>
                  You are solely responsible for the content of your custom text-back message
                </li>
              </ul>
              <p className="mt-3">
                Message frequency is one SMS per missed call. Message and data rates may apply.
                For opt-out instructions, see our{" "}
                <a href="/sms-consent" className="text-gray-900 underline underline-offset-2">
                  SMS Consent Policy
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "payment-and-billing",
          heading: "Payment and Billing",
          content: (
            <>
              <p>
                Teleringer is offered as a monthly subscription at $29/month following a 30-day
                free trial. By providing payment information you authorize Teleringer to charge
                your payment method on a recurring monthly basis.
              </p>
              <p>
                You may cancel at any time. Cancellation takes effect at the end of the current
                billing period. No refunds are issued for partial months.
              </p>
              <p>
                Payments are processed by Stripe. Teleringer does not store your payment card
                information.
              </p>
            </>
          ),
        },
        {
          id: "disclaimers",
          heading: "Disclaimers",
          content: (
            <>
              <p>
                Teleringer is provided &quot;as is&quot; without warranty of any kind. We do not guarantee
                that SMS messages will be delivered in all cases — delivery depends on carrier
                availability and recipient device status.
              </p>
              <p>
                Teleringer is not responsible for any missed business opportunities, lost revenue,
                or damages arising from undelivered messages or service interruptions.
              </p>
            </>
          ),
        },
        {
          id: "limitation-of-liability",
          heading: "Limitation of Liability",
          content: (
            <p>
              To the maximum extent permitted by law, Teleringer LLC&apos;s total liability to you for
              any claim arising out of or relating to this agreement shall not exceed the amount you
              paid to Teleringer in the three months preceding the claim. Teleringer shall not be
              liable for any indirect, incidental, special, or consequential damages.
            </p>
          ),
        },
        {
          id: "changes-to-terms",
          heading: "Changes to These Terms",
          content: (
            <p>
              Teleringer may update these Terms of Service from time to time. We will notify account
              holders of material changes by email. Continued use of the service after changes
              become effective constitutes acceptance of the updated terms.
            </p>
          ),
        },
        {
          id: "contact",
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
              <p>Phone: (570) 456-5550</p>
            </>
          ),
        },
      ]}
    />
  );
}
