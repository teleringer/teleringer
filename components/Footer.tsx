export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <div className="text-xl font-extrabold text-blue-700">TELERINGER</div>
          <p className="mt-2 text-sm text-gray-600">
            Unified communications for small businesses.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-gray-900">Contact</div>
          <div className="mt-2 space-y-1 text-gray-600">
            <div>
              Phone:{" "}
              <a className="text-blue-700 hover:underline" href="tel:5704565550">
                (570) 456-5550
              </a>
            </div>
            <div>
              Email:{" "}
              <a className="text-blue-700 hover:underline" href="mailto:info@teleringer.com">
                info@teleringer.com
              </a>
            </div>
            <div>Mon–Fri: 9:00 AM – 5:00 PM EST</div>
            <div>Sat–Sun: Emergency Support Only</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-gray-900">Links</div>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a className="hover:underline" href="/">Home</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Teleringer. All rights reserved.
      </div>
    </footer>
  );
}
