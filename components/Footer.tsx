import Image from "next/image";

export default function Footer() {
  // Prefer the public site URL if set; fall back to "/"
  const homeHref = process.env.NEXT_PUBLIC_SITE_URL || "/";

  return (
    // Removed mt-16 to eliminate the white gap above the footer
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        {/* Brand + blurb */}
        <div>
          {/* Make the logo clickable back to the homepage */}
          <a href={homeHref} aria-label="Go to Teleringer homepage" className="inline-block">
            <Image
              src="/brand/footer-logo.png"
              alt="Teleringer"
              width={240}
              height={50}
              className="h-8 w-auto md:h-10"
            />
          </a>
          <div className="mt-2 text-xs font-semibold tracking-wide text-blue-200">
            SMALL BUSINESS COMMUNICATIONS
          </div>

          <p className="mt-4 max-w-md text-sm text-slate-300">
            Simplify your communication with our comprehensive UCaaS and CCaaS solutions.
            Voice, data, video, and text — all in one cloud-based platform.
          </p>
        </div>

        {/* Contact */}
        <div>
          <div className="text-sm text-slate-300">Call us today:</div>
          <a href="tel:5704565550" className="mt-1 block text-lg font-semibold text-white hover:underline">
            (570) 456-5550
          </a>

          <div className="mt-6 text-sm text-slate-300">Email Us:</div>
          <a href="mailto:info@teleringer.com" className="mt-1 block font-semibold text-white hover:underline">
            info@teleringer.com
          </a>
        </div>

        {/* Links */}
        <nav className="text-sm">
          <ul className="space-y-2">
            <li><a className="hover:underline" href="/contact">Contact</a></li>
            <li><a className="hover:underline" href="/client-login">Client Login</a></li>
            <li><a className="hover:underline" href="/privacy-policy">Privacy Policy</a></li>
            <li><a className="hover:underline" href="/terms">Terms</a></li>
            <li><a className="hover:underline" href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-8">
        <hr className="border-slate-700" />
      </div>

      <div className="px-4 pb-8 text-center text-xs text-slate-400">
        Copyright ©{new Date().getFullYear()} . Teleringer LLC. All rights reserved.
      </div>
    </footer>
  );
}
