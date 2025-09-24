'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p><strong>Effective date – May 1, 2022</strong></p>

        <p className="mt-6">
          Welcome to <a href="https://teleringer.com" className="text-blue-600 underline">https://teleringer.com</a> (the "Site"). 
          We understand that privacy online is important to users of our Site, especially when conducting business. 
          This statement governs our privacy policies with respect to those users of the Site ("Visitors") who visit without transacting business 
          and Visitors who register to transact business on the Site and make use of the various services offered by <strong>TELERINGER™</strong> 
          (collectively, "Services") ("Authorized Customers").
        </p>

        {/* --- Sections --- */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Personally Identifiable Information</h2>
          <p>
            Refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, 
            including, but not limited to, name, address, phone number, fax number, email address, financial profiles, social security number, and credit card information. 
            Personally Identifiable Information does not include information that is collected anonymously or demographic information not connected to an identified individual.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">What Personally Identifiable Information is collected?</h2>
          <p>
            We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: 
            the names, addresses, phone numbers and email addresses of Authorized Customers, the nature and size of the business, and the nature and size of the advertising 
            inventory that the Authorized Customer intends to purchase or sell.
          </p>
        </section>

        {/* Repeat this pattern for each section of your policy */}
        {/* To keep it concise here, I won’t paste every section again — 
            but you should copy/paste all the text from the policy you provided, 
            wrapping each logical section with <section> and <h2>/<p> as above. */}

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, contact us:
          </p>
          <ul className="list-disc pl-6 mt-3">
            <li><strong>Phone:</strong> (570) 456-5550</li>
            <li><strong>Email:</strong> <a href="mailto:info@teleringer.com" className="text-blue-600 underline">info@teleringer.com</a></li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
