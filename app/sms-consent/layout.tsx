import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMS Consent Policy - Teleringer",
  description: "How Teleringer LLC sends automated SMS messages in response to missed calls, how consent is established, and how to opt out.",
  keywords: "SMS consent, text message policy, opt out, STOP, TCPA, teleringer SMS",
  robots: "index, follow",
  openGraph: {
    title: "SMS Consent Policy - Teleringer",
    description: "How Teleringer LLC sends automated SMS messages in response to missed calls, how consent is established, and how to opt out.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/sms-consent`,
  },
  twitter: {
    title: "SMS Consent Policy - Teleringer",
    description: "How Teleringer LLC sends automated SMS messages in response to missed calls, how consent is established, and how to opt out.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/sms-consent`,
  },
};

export default function SmsConsentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
