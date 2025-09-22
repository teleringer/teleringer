
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Cookies() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <div className="text-gray-600 space-y-6 leading-relaxed">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and analyzing site usage.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                  <p>These cookies are necessary for our website to function properly. They enable basic features like page navigation and access to secure areas.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Performance Cookies</h3>
                  <p>These cookies collect information about how visitors use our website, helping us improve site performance and user experience.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Functional Cookies</h3>
                  <p>These cookies remember your preferences and choices to provide enhanced, personalized features.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Marketing Cookies</h3>
                  <p>These cookies track your browsing habits to deliver relevant advertisements and measure campaign effectiveness.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_session</td>
                      <td className="border border-gray-300 px-4 py-2">Maintains user session</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_preferences</td>
                      <td className="border border-gray-300 px-4 py-2">Remembers user preferences</td>
                      <td className="border border-gray-300 px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_analytics</td>
                      <td className="border border-gray-300 px-4 py-2">Website usage analytics</td>
                      <td className="border border-gray-300 px-4 py-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p>We may use third-party services that set their own cookies:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Google Analytics - for website analytics</li>
                <li>Customer support platforms</li>
                <li>Marketing automation tools</li>
                <li>Payment processing services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
              <p>You can control cookies through your browser settings:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Block all cookies</li>
                <li>Allow only first-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive notifications when cookies are set</li>
              </ul>
              <p className="mt-4">Note: Disabling essential cookies may affect website functionality.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Browser-Specific Instructions</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">Chrome</h3>
                  <p>Settings &gt; Privacy and security &gt; Cookies and other site data</p>
                </div>
                <div>
                  <h3 className="font-semibold">Firefox</h3>
                  <p>Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</p>
                </div>
                <div>
                  <h3 className="font-semibold">Safari</h3>
                  <p>Preferences &gt; Privacy &gt; Manage Website Data</p>
                </div>
                <div>
                  <h3 className="font-semibold">Edge</h3>
                  <p>Settings &gt; Cookies and site permissions &gt; Cookies and site data</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
              <p>We may update this Cookie Policy to reflect changes in our practices or applicable laws. We will post updates on this page with the revision date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us:</p>
              <div className="mt-2">
                <p>Phone: (570) 456-5550</p>
                <p>Email: privacy@teleringer.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
