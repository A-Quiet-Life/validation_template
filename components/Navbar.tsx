"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href={siteConfig.nav.demo}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Demo
            </Link>
            <Link
              href={siteConfig.nav.pricing}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <a
              href="/#waitlist"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href={siteConfig.nav.demo}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
            <Link
              href={siteConfig.nav.pricing}
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <a
              href="/#waitlist"
              className="block px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
