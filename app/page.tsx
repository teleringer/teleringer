
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Teleringer",
              "alternateName": "Small Business Communications",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "logo": "https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/b642df33b2e92db5f586655492e64051.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-570-456-5550",
                "contactType": "customer service",
                "email": "info@teleringer.com",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                process.env.NEXT_PUBLIC_SITE_URL
              ],
              "description": "Simplify your communication with our comprehensive UCaaS and CCaaS solutions. Voice, data, video, and text - all in one cloud-based platform.",
              "foundingDate": "2022",
              "serviceArea": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Communication Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Voice Solutions",
                      "description": "Crystal-clear voice communications with advanced features like call forwarding, voicemail-to-email, and auto-attendant."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Video Collaboration",
                      "description": "Professional video conferencing with screen sharing, recording, and seamless integration across all devices."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Contact Centers",
                      "description": "Advanced CCaaS solutions with intelligent routing, real-time analytics, and omnichannel support."
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(59, 130, 246, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20office%20environment%20with%20professional%20business%20people%20using%20various%20communication%20devices%2C%20including%20phones%2C%20laptops%2C%20and%20video%20conferencing%20screens%2C%20clean%20minimalist%20background%20with%20blue%20and%20white%20color%20scheme%2C%20corporate%20telecommunications%20setting%20with%20unified%20communication%20technology&width=1200&height=600&seq=teleringer-hero&orientation=landscape')`
          }}
        >
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-white max-w-2xl">
              <div className="text-sm font-bold text-blue-200 tracking-wider mb-4">SMALL BUSINESS COMMUNICATIONS</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Unified Communications for Growing Businesses
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-blue-100">
                Simplify your communication with our comprehensive UCaaS and CCaaS solutions. Voice, data, video, and text - all in one cloud-based platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-blue-600 px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer text-center whitespace-nowrap"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer text-center whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Complete Communication Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                From basic phone service to advanced unified communications, we provide everything your business needs to stay connected.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-phone-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Voice Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Crystal-clear voice communications with advanced features like call forwarding, voicemail-to-email, and auto-attendant.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>HD Voice Quality</li>
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Call Analytics</li>
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Mobile Integration</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-video-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Video Collaboration</h3>
                <p className="text-gray-600 mb-6">
                  Professional video conferencing with screen sharing, recording, and seamless integration across all devices.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Screen Sharing</li>
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Meeting Recording</li>
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Cross-Platform Access</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Contact Centers</h3>
                <p className="text-gray-600 mb-6">
                  Advanced CCaaS solutions with intelligent routing, real-time analytics, and omnichannel support.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Smart Routing</li>
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Real-time Analytics</li>
                  <li className="flex items-center"><i className="ri-check-line text-green-500 mr-2"></i>Omnichannel Support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Teleringer?
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                  Backed by over 70 years of telecom expertise through our partnership with Endeavor Communications' GigTel, we deliver reliable, innovative solutions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Call Us Today</h3>
                      <p className="text-gray-600 mb-2">Ready to get started? Speak with our experts</p>
                      <p className="text-blue-600 font-medium text-lg">(570) 456-5550</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-cloud-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Cloud-Based Platform</h3>
                      <p className="text-gray-600">Access your communications from anywhere, on any device with our secure cloud infrastructure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-shield-check-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                      <p className="text-gray-600">Bank-level security with end-to-end encryption and compliance certifications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-line-chart-line text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                      <p className="text-gray-600">Grow your communication system as your business expands with flexible pricing plans.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/d968ee7bccf04c4e22a50454221a0fe1.jfif"
                  alt="Teleringer Features"
                  className="rounded-lg shadow-lg object-cover w-full h-[400px] sm:h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Perfect for Small to Medium Businesses
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Designed specifically for solopreneurs and growing businesses who need professional communication tools without the complexity.
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-money-dollar-circle-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Cost Effective</h3>
                <p className="text-gray-600">Reduce communication costs by up to 60% with our unified platform approach.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-time-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Quick Setup</h3>
                <p className="text-gray-600">Get up and running in minutes with our simple onboarding process.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-customer-service-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">Expert support team available around the clock to help your business succeed.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-smartphone-line text-3xl text-blue-600"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Mobile Ready</h3>
                <p className="text-gray-600">Full mobile app integration keeps you connected wherever business takes you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Addons Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Exclusive Addons &amp; Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Enhance your communication capabilities with our premium add-on services designed to take your business to the next level.
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-file-paper-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">eFax</h3>
                <p className="text-gray-600 mb-6">
                  Industry-leading security and a feature-packed console. Use on any device for an easy and seamless online fax experience.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    Bank-level security encryption
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    Multi-device compatibility
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    Cloud-based document storage
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    Email integration
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap text-center block"
                >
                  GET INFO
                </Link>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-brain-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">AI Voice Agents</h3>
                <p className="text-gray-600 mb-6">
                  We will design your new automatic voice agents for your business: receptionist, sales, orders, refunds, etc. All inclusive.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-purple-500 mr-3"></i>
                    Custom AI receptionist
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-purple-500 mr-3"></i>
                    Automated sales support
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-purple-500 mr-3"></i>
                    Order processing automation
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-purple-500 mr-3"></i>
                    24/7 customer service
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap text-center block"
                >
                  GET INFO
                </Link>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow lg:col-span-3 xl:col-span-1">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-phone-fill text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">SIP Trunking</h3>
                <p className="text-gray-600 mb-6">
                  Route your business calls over the internet with improved communications, cost control, and free long-distance calling.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-orange-500 mr-3"></i>
                    Internet-based call routing
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-orange-500 mr-3"></i>
                    Significant cost savings
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-orange-500 mr-3"></i>
                    Free long-distance calling
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-orange-500 mr-3"></i>
                    Enhanced call quality
                  </li>
                </ul>
                <Link 
                  href="/contact" 
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer whitespace-nowrap text-center block"
                >
                  GET INFO
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Interested in multiple services? Contact us for custom package pricing and exclusive bundle discounts.
              </p>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Communications?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Join thousands of businesses who have simplified their communications with Teleringer. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-6 sm:px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}