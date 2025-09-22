
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex flex-col items-start">
            <img 
              src="https://static.readdy.ai/image/34eddc7177ae71b8c76003a700ee36ff/e3d61d8966165ea61b307caed6df7de9.png" 
              alt="Teleringer"
              className="h-15 w-auto mb-1"
              style={{ height: '60px' }}
            />
            <span 
              className="text-xs font-bold text-gray-600 tracking-wider"
              style={{ width: '95%' }}
            >
              SMALL BUSINESS COMMUNICATIONS
            </span>
          </Link>
          
          {/* Center Section - Desktop Only */}
          <div className="hidden md:flex flex-col items-center">
            <div className="text-2xl font-bold text-gray-900">Free Demo Call</div>
            <a 
              href="tel:+15704565550" 
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            >
              (570) 456-5550
            </a>
          </div>
          
          {/* Right Section - Desktop */}
          <div className="hidden md:flex">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`text-2xl text-gray-700 ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:+15704565550" 
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                (570) 456-5550
              </a>
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
