import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Teleringer",
  description: "Learn about Teleringer's privacy policy, how we collect, use, and protect your personal information in our unified communication services.",
  keywords: "privacy policy, data protection, personal information, teleringer privacy",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy - Teleringer",
    description: "Learn about Teleringer's privacy policy, how we collect, use, and protect your personal information in our unified communication services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`
  },
  twitter: {
    title: "Privacy Policy - Teleringer",
    description: "Learn about Teleringer's privacy policy, how we collect, use, and protect your personal information in our unified communication services."
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`
  }
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}