import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Teleringer",
  description: "Read Teleringer's terms of service for our unified communication solutions, including service agreements and user responsibilities.",
  keywords: "terms of service, service agreement, teleringer terms, user agreement",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service - Teleringer",
    description: "Read Teleringer's terms of service for our unified communication solutions, including service agreements and user responsibilities.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`
  },
  twitter: {
    title: "Terms of Service - Teleringer",
    description: "Read Teleringer's terms of service for our unified communication solutions, including service agreements and user responsibilities."
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms`
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}