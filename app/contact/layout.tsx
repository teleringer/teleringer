import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Teleringer",
  description: "Get started with Teleringer today. Contact us for a free consultation and discover how our unified communication solutions can help your business grow.",
  keywords: "contact teleringer, business communications consultation, unified communications demo, small business phone systems",
  openGraph: {
    title: "Contact Us - Teleringer",
    description: "Get started with Teleringer today. Contact us for a free consultation and discover how our unified communication solutions can help your business grow.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`
  },
  twitter: {
    title: "Contact Us - Teleringer",
    description: "Get started with Teleringer today. Contact us for a free consultation and discover how our unified communication solutions can help your business grow."
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}