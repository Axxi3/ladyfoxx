'use client';
import { useState } from "react";


const navLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Why us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full text-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Rounded container with all nav elements */}
        <div className="rounded-full border bg-black border-gray-600 flex items-center justify-between px-6 py-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-3"
            />
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-white transition duration-150 ease-in-out text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - CTA Button */}
          <div>
            <a
              href=""
              className="inline-flex items-center px-4 py-1.5 bg-transparent hover:bg-gray-800 text-white rounded-full transition duration-150 ease-in-out"
            >
              Let&apos;s Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile menu button - only shown on small screens */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 mt-2 rounded-lg mx-4">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}