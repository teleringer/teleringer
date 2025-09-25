import Image from "next/image";

export default function Footer() {
  const homeHref = process.env.NEXT_PUBLIC_SITE_URL || "/";

  // Match the width of the section above; adjust this one class if needed.
  // If your "Ready to Get Started?" block uses a specific max width, copy it here.
  const containerWidth = "max-w-[1200px]"; // e.g., use "max-w-6xl" or "max-w-screen-xl" to match exactly

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className={`mx-auto ${containerWidth} px-4 md:px-0`}>
        {/* Grid: 12 cols -> [5 | 1(spacer) | 3 | 3] */}
        <div className="grid grid-cols-1 gap-8 pt-10 pb-5 md:grid-cols-12">
          {/* 1) Brand / blurb (col-span-5) */}
          <div className="md:col-span-5">
            <a href={homeHref} aria-label="Go to Teleringer homepage" className="inline-block">
              <Image
                src="/brand/footer-logo.png"
                alt="Teleringer"
                width={320}
                height={64}
                className="h-10 w-auto md:h-12"
                priority
              />
            </a>
            <div className="mt-2 text-[11px] font-semibold tracking-wide text-blue-200">
              SMALL BUSINESS COMMUNICATIONS
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
              Simplify your communication with our comprehensive UCaaS and CCaaS solutions.
              Voice, data, video, and text — all in one cloud-based platform.
            </p>
          </div>

          {/* 2) Spacer (col-span-1 on md+) to push right side inward */}
          <div className="hidden md:col-span-1 md:block" />

          {/* 3) Contact (col-span-3) */}
          <div className="md:col-span-3 text-sm">
            <div className="text-slate-300">Call us today:</div>
            <a
              href="tel:5704565550"
              className="mt-1 block text-base font-semibold text-white hover:underline"
            >
              (570) 456-5550
            </a>

            <div className="mt-5 text-slate-300">Email Us:</div>
            <a
              href="mailto:info@teleringer.com"
              className="mt-1 block font-semibold text-white hover:underline"
            >
              info@teleringer.com
            </a>
          </div>

          {/* 4) Links (col-span-3) — flush to right edge of container */}
          <nav className="md:col-span-3 text-sm">
            <ul className="space-y-1.5">
              <li><a className="hover:underline" href="/contact">Contact</a></li>
              <li>
                <a
                  className="hover:underline"
                  href="https://interface.teleringer.com"
                  target="_blank"
                  rel="noopener"
                >
                  Client Login
                </a>
              </li>
              <li><a className="hover:underline" href="/privacy">Privacy Policy</a></li>
              <li><a className="hover:underline" href="/terms">Terms</a></li>
              <li><a className="hover:underline" href="/cookie-policy">Cookie Policy</a></li>
            </ul>
          </nav>
        </div>

        {/* Divider kept inside the SAME container so its left/right edges align with columns */}
        <hr className="border-slate-700" />

        <div className="py-6 text-center text-xs text-slate-400">
          Copyright ©{new Date().getFullYear()} . Teleringer LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
