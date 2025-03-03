'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/diensten', label: 'Diensten' },
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' }
  ]

  // Enhanced background styles - transparent when not scrolled, white when scrolled
  const navBackgroundClass = scrolled
    ? `bg-[#f0f4f8]/95 dark:bg-[#1e293b]/95 backdrop-blur-sm shadow-lg`
    : `bg-[#f0f4f8]/85 dark:bg-[#1e293b]/85 backdrop-blur-sm`

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${navBackgroundClass}`}
      >
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
              <div className="h-10 w-auto">
                <svg width="180" height="40" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg">
                  {/* Yellow bar */}
                  <rect x="40" y="20" width="40" height="100" fill="#FFEB3B" />
                  {/* Blue bar */}
                  <rect x="90" y="40" width="40" height="80" fill="#81D4FA" />
                  {/* Pink bar */}
                  <rect x="140" y="60" width="40" height="60" fill="#F8BBD0" />
                  {/* Text */}
                  <text x="200" y="70" fontFamily="Arial" fontSize="48" fontWeight="bold" fill="#333333">Schildersbedrijf</text>
                  <text x="200" y="110" fontFamily="Arial" fontSize="36" fontWeight="bold" fill="#333333">Gebroeders Baars</text>
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex space-x-8 mr-6">
              {navItems.map((item) => (
                <motion.div key={item.href} className="relative py-1">
                  <Link href={item.href} className="nav-link text-gray-700 dark:text-white hover:text-primary dark:hover:text-dark-primary transition-colors">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-white bg-primary dark:bg-dark-primary hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
            >
              Offerte aanvragen
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-primary dark:hover:text-dark-primary hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="block h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="block h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden mt-2"
          >
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-primary dark:hover:text-dark-primary hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="block px-3 py-2 mt-4 rounded-md text-base font-medium text-white bg-primary dark:bg-dark-primary hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}