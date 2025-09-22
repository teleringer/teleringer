import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Unblock Vercel builds without installing ESLint
  eslint: { ignoreDuringBuilds: true },

  // Optional: force apex → www (remove this block if you don't want it)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "teleringer.com" }],
        destination: "https://www.teleringer.com/:path*",
        permanent: true,
      },
    ];
  },

  // Optional: a few safe security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
