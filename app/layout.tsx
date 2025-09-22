
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teleringer - Small Business Communications",
  description: "Simplify your communication with our comprehensive UCaaS and CCaaS solutions. Voice, data, video, and text - all in one cloud-based platform.",
  keywords: "small business communications, UCaaS, CCaaS, voice solutions, video collaboration, contact centers, unified communications, cloud communications",
  authors: [{ name: "Teleringer" }],
  creator: "Teleringer",
  publisher: "Teleringer",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Teleringer - Small Business Communications",
    description: "Simplify your communication with our comprehensive UCaaS and CCaaS solutions. Voice, data, video, and text - all in one cloud-based platform.",
    siteName: "Teleringer",
    images: [
      {
        url: "https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/b642df33b2e92db5f586655492e64051.png",
        width: 1200,
        height: 630,
        alt: "Teleringer - Small Business Communications"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Teleringer - Small Business Communications",
    description: "Simplify your communication with our comprehensive UCaaS and CCaaS solutions. Voice, data, video, and text - all in one cloud-based platform.",
    images: ["https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/b642df33b2e92db5f586655492e64051.png"]
  },
  icons: {
    icon: 'https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/b642df33b2e92db5f586655492e64051.png',
    shortcut: 'https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/b642df33b2e92db5f586655492e64051.png',
    apple: 'https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/b642df33b2e92db5f586655492e64051.png',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
