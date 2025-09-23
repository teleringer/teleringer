export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-4 py-4 md:grid-cols-3">
        {/* Brand (left) */}
        <a href="/" className="justify-self-start">
          <div className="leading-none">
            <div className="flex items-start gap-1">
              <span className="text-3xl font-extrabold tracking-wide text-red-700">
                TELERINGER
              </span>
              <sup className="mt-1 text-xs font-semibold text-gray-700">TM</sup>
            </div>
            <div className="mt-1 text-xs font-semibold tracking-wide text-slate-700">
              SMALL BUSINESS COMMUNICATIONS
            </div>
          </div>
        </a>

        {/* Center call (middle) */}
        <div className="hidden text-center md:block">
          <div className="text-lg font-semibold text-gray-900">Free Demo Call</div>
          <a
            href="tel:5704565550"
            className="text-xl font-bold text-blue-600 hover:underline"
          >
            (570) 456-5550
          </a>
        </div>

        {/* CTA (right) */}
        <div className="justify-self-end">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
