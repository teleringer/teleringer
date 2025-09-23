export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        {/* Brand */}
        <a href="/" className="inline-flex items-baseline gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-blue-700">
            TELERINGER
          </span>
          <span className="hidden text-xs font-medium text-gray-500 sm:inline">
            Small Business Communications
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="tel:5704565550"
            className="hidden text-sm font-semibold text-blue-700 hover:underline sm:block"
          >
            (570) 456-5550
          </a>
          <a
            href="/contact"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
