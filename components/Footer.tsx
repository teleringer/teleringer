
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Columns 1 & 2 Combined - Logo and Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col items-start mb-4">
              <img 
                src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/76f1ecca1c1e78e2dbd43d7f4876b602.png" 
                alt="Teleringer"
                className="h-10 w-auto mb-2"
              />
              <span className="text-xs font-bold text-gray-400 tracking-wider">SMALL BUSINESS COMMUNICATIONS</span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Simplify your communication with our comprehensive UCaaS and CCaaS solutions. Voice, data, video, and text - all in one cloud-based platform.
            </p>
          </div>
          
          {/* Column 3 - Empty */}
          <div></div>
          
          {/* Column 4 - Contact Info */}
          <div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Call us today:</p>
                <a 
                  href="tel:+15704565550" 
                  className="text-white font-semibold text-lg hover:text-blue-300 cursor-pointer"
                >
                  (570) 456-5550
                </a>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-1">Email Us:</p>
                <p className="text-white font-semibold">info@teleringer.com</p>
              </div>
            </div>
          </div>
          
          {/* Column 5 - Links */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
            <div className="space-y-2 text-sm text-gray-300">
              <div className="lg:hidden">
                <Link href="/contact" className="hover:text-white cursor-pointer block">
                  Contact
                </Link>
              </div>
              <div className="hidden lg:block">
                <Link href="/contact" className="hover:text-white cursor-pointer block">
                  Contact
                </Link>
              </div>
              <div>
                <a 
                  href="https://interface.teleringer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer block"
                >
                  Client Login
                </a>
              </div>
              <div>
                <Link href="/privacy" className="hover:text-white cursor-pointer block">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link href="/terms" className="hover:text-white cursor-pointer block">
                  Terms
                </Link>
              </div>
              <div>
                <Link href="/cookies" className="hover:text-white cursor-pointer block">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300" style={{ fontSize: '9pt' }}>
            Copyright ©2025 . Teleringer LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
