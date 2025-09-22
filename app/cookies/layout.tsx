import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Teleringer",
  description: "Learn about Teleringer's cookie policy, how we use cookies to improve your website experience and manage your cookie preferences.",
  keywords: "cookie policy, website cookies, cookie preferences, teleringer cookies",
  robots: "index, follow",
  openGraph: {
    title: "Cookie Policy - Teleringer",
    description: "Learn about Teleringer's cookie policy, how we use cookies to improve your website experience and manage your cookie preferences.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/cookies`
  },
  twitter: {
    title: "Cookie Policy - Teleringer",
    description: "Learn about Teleringer's cookie policy, how we use cookies to improve your website experience and manage your cookie preferences."
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/cookies`
  }
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}