export const metadata = {
  title: 'Cookie Policy | Teleringer',
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
      <p className="mb-8"><strong>Last updated: January 2025</strong></p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies</h2>
        <p>
          Cookies are small text files stored on your device when you visit our website. They help us provide a better user
          experience by remembering your preferences and analyzing site usage.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">2. Types of Cookies We Use</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Essential Cookies</h3>
        <p>Necessary for the website to function properly, enabling basic features like navigation and access to secure areas.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Performance Cookies</h3>
        <p>Collect information about how visitors use our website to help us improve performance and user experience.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Functional Cookies</h3>
        <p>Remember your preferences and choices to provide enhanced, personalized features.</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Marketing Cookies</h3>
        <p>Track browsing habits to deliver relevant ads and measure campaign effectiveness.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">3. Specific Cookies We Use</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 border-b">Cookie Name</th>
                <th className="p-3 border-b">Purpose</th>
                <th className="p-3 border-b">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b">_session</td>
                <td className="p-3 border-b">Maintains user session</td>
                <td className="p-3 border-b">Session</td>
              </tr>
              <tr>
                <td className="p-3 border-b">_preferences</td>
                <td className="p-3 border-b">Remembers user preferences</td>
                <td className="p-3 border-b">1 year</td>
              </tr>
              <tr>
                <td className="p-3 border-b">_analytics</td>
                <td className="p-3 border-b">Website usage analytics</td>
                <td className="p-3 border-b">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">4. Third-Party Cookies</h2>
        <p className="mb-2">We may use third-party services that set their own cookies, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Google Analytics — for website analytics</li>
          <li>Customer support platforms</li>
          <li>Marketing automation tools</li>
          <li>Payment processing services</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">5. Managing Cookies</h2>
        <p className="mb-2">You can control cookies through your browser settings to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Block all cookies</li>
          <li>Allow only first-party cookies</li>
          <li>Delete existing cookies</li>
          <li>Receive notifications when cookies are set</li>
        </ul>
        <p className="mt-2">Note: Disabling essential cookies may affect website functionality.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">6. Browser-Specific Instructions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
          <li><strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
          <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
          <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">7. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy to reflect changes in our practices or applicable laws. Updates will be posted on this page
          with the revised date.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
        <ul className="list-disc pl-6">
          <li><strong>Phone:</strong> (570) 456-5550</li>
          <li><strong>Email:</strong> <a href="mailto:info@teleringer.com" className="underline">info@teleringer.com</a></li>
        </ul>
      </section>
    </main>
  );
}
