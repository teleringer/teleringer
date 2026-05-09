import type { ReactNode } from "react";

export function LegalPage({
  title,
  subtitle,
  effectiveDate,
  sections,
}: {
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: { id: string; heading: string; content: ReactNode }[];
}) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <div className="mb-10 pb-8 border-b border-gray-200">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-3xl font-semibold tracking-tight mb-3">{title}</h1>
        <p className="text-gray-500 text-base leading-relaxed">{subtitle}</p>
        <p className="text-sm text-gray-500 mt-4">Effective date: {effectiveDate}</p>
      </div>

      <div className="mb-12">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-3">On this page</p>
        <ul className="space-y-1.5">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                {i + 1}. {s.heading}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-12">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id}>
            <h2 className="text-lg font-semibold mb-4">
              {i + 1}. {s.heading}
            </h2>
            <div className="text-sm text-gray-500 leading-relaxed space-y-3">
              {s.content}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Have questions?{" "}
          <a href="mailto:support@teleringer.com" className="text-gray-900 underline underline-offset-2">
            Contact our team
          </a>{" "}
          — we&apos;re here to help.
        </p>
      </div>
    </main>
  );
}
