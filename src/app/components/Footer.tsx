'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <footer className="bg-primary text-white">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <div className="space-y-3">
              <motion.p 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                Arnhem Schildersbedrijf
              </motion.p>
              <motion.p 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <a href="mailto:info@arnhem-schildersbedrijf.nl" className="hover:underline">info@arnhem-schildersbedrijf.nl</a>
              </motion.p>
              <motion.p 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <a href="tel:026-3816630" className="hover:underline">Vast: 026 - 3816630</a>
              </motion.p>
              <motion.p 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <a href="tel:06-25153451" className="hover:underline">Mobiel: 06-25 153 451</a>
              </motion.p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Diensten</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href="/diensten#binnenschilderwerk" className="text-white/80 hover:text-white transition-colors hover:underline">Binnenschilderwerk</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href="/diensten#buitenschilderwerk" className="text-white/80 hover:text-white transition-colors hover:underline">Buitenschilderwerk</a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href="/diensten#behangwerk" className="text-white/80 hover:text-white transition-colors hover:underline">Behangwerk</a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">Werkgebied</h3>
            <p className="text-white/80 mb-4">Wij zijn actief in Arnhem en omgeving, waaronder:</p>
            <ul className="grid grid-cols-2 gap-2">
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                Arnhem
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                Velp
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                Oosterbeek
              </motion.li>
              <motion.li 
                whileHover={{ x: 5 }} 
                transition={{ type: "spring", stiffness: 400 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                Huissen
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <motion.div 
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80">&copy; {new Date().getFullYear()} Arnhem Schildersbedrijf. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ y: -2 }}
                href="/privacy" 
                className="text-white/80 hover:text-white transition-colors hover:underline"
              >
                Privacy
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="/voorwaarden" 
                className="text-white/80 hover:text-white transition-colors hover:underline"
              >
                Voorwaarden
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}