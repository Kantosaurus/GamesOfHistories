'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-serif text-amber-800">IMPERIVM</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/gameplay-rules" className="text-stone-700 hover:text-amber-800 transition-colors">
              Gameplay & Rules
            </Link>
            <Link href="/components" className="text-stone-700 hover:text-amber-800 transition-colors">
              Components
            </Link>
            <Link href="/gallery" className="text-stone-700 hover:text-amber-800 transition-colors">
              History
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 hover:text-amber-800"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/gameplay-rules"
              className="block px-3 py-2 text-stone-700 hover:text-amber-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Gameplay & Rules
            </Link>
            <Link
              href="/components"
              className="block px-3 py-2 text-stone-700 hover:text-amber-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-stone-700 hover:text-amber-800"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
} 