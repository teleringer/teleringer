'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: [],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      // Remove all non-numeric characters
      const numericValue = value.replace(/\D/g, '');
      
      // Limit to 10 digits
      const limitedValue = numericValue.slice(0, 10);
      
      // Format as (XXX) XXX-XXXX
      let formattedValue = '';
      if (limitedValue.length > 0) {
        if (limitedValue.length <= 3) {
          formattedValue = `(${limitedValue}`;
        } else if (limitedValue.length <= 6) {
          formattedValue = `(${limitedValue.slice(0, 3)}) ${limitedValue.slice(3)}`;
        } else {
          formattedValue = `(${limitedValue.slice(0, 3)}) ${limitedValue.slice(3, 6)}-${limitedValue.slice(6)}`;
        }
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const serviceOptions = [
    'Voice Solutions',
    'Video Collaboration',
    'Contact Centers',
    'Complete UCaaS Package',
    'eFaxing',
    'AI Voice Agents',
    'SIP Trunking',
    'Other'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      service: prev.service.includes(service)
        ? prev.service.filter(s => s !== service)
        : [...prev.service, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less');
      setIsSubmitting(false);
      return;
    }

    // Validate phone number has 10 digits
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (formData.phone && phoneDigits.length !== 10) {
      setSubmitStatus('Please enter a valid 10-digit phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'service') {
          formDataToSend.append(key, Array.isArray(value) ? value.join(', ') : value);
        } else {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch('https://readdy.ai/api/form/d2tfhor3b7dn4hkpmtmg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: [],
          message: ''
        });
      } else {
        setSubmitStatus('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "Teleringer",
                "url": process.env.NEXT_PUBLIC_SITE_URL,
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+1-570-456-5550",
                    "contactType": "customer service",
                    "email": "info@teleringer.com",
                    "availableLanguage": "English",
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "09:00",
                      "closes": "17:00"
                    }
                  },
                  {
                    "@type": "ContactPoint",
                    "contactType": "emergency support",
                    "availableLanguage": "English",
                    "hoursAvailable": "24/7"
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Get Started with Teleringer
            </h1>
            <p className="text-xl text-blue-100">
              Ready to transform your business communications? Contact us today for a free consultation and discover how our unified solutions can help your business grow.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} data-readdy-form id="contact-form-teleringer" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="(570) 555-1234"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest (Select multiple)
                    </label>
                    <div className="relative">
                      <div
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none cursor-pointer bg-white min-h-[48px] flex items-center justify-between"
                      >
                        <div className="flex flex-wrap gap-1">
                          {formData.service.length > 0 ? (
                            formData.service.map((service, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                {service}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-500">Select services...</span>
                          )}
                        </div>
                        <i className={`ri-arrow-${isDropdownOpen ? 'up' : 'down'}-s-line text-gray-400`}></i>
                      </div>
                      
                      {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {serviceOptions.map((service) => (
                            <div
                              key={service}
                              onClick={() => handleServiceToggle(service)}
                              className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                            >
                              <span className="text-sm">{service}</span>
                              {formData.service.includes(service) && (
                                <i className="ri-check-line text-blue-600"></i>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      maxLength={500}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-vertical"
                      placeholder="Tell us about your communication needs..."
                    />
                    <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${submitStatus.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">Call us for immediate assistance</p>
                      <p className="text-blue-600 font-medium text-lg">(570) 456-5550</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">Send us an email anytime</p>
                      <p className="text-blue-600 font-medium">info@teleringer.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                        <p>Saturday and Sunday: Emergency Support Only</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-customer-service-2-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                      <p className="text-gray-600">Emergency technical support available around the clock for existing customers</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Teleringer?</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3"></i>
                      70+ years of telecom expertise
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3"></i>
                      Unified communications platform
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3"></i>
                      Scalable solutions for any business size
                    </li>
                    <li className="flex items-center">
                      <i className="ri-check-line text-green-500 mr-3"></i>
                      Award-winning customer support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of businesses who trust Teleringer for their communication needs. Schedule a free demo today and see the difference unified communications can make.
            </p>
            <div className="flex justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Schedule Free Demo
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}