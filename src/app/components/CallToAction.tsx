'use client'

import { BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-dark-primary/10 dark:to-dark-secondary/10 rounded-3xl p-16 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 dark:bg-dark-primary/5 rounded-full -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 dark:bg-dark-secondary/5 rounded-full -mr-32 -mb-32" />
      
      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-8"
        >
          <div className="w-20 h-20 bg-primary/10 dark:bg-dark-primary/20 rounded-2xl rotate-45 mx-auto flex items-center justify-center transform transition-transform group-hover:rotate-90">
            <div className="-rotate-45">
              <BuildingOfficeIcon className="w-10 h-10 text-primary dark:text-dark-primary" />
            </div>
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 dark:text-dark-text mb-6"
        >
          Klaar om <span className="text-primary dark:text-dark-primary">Samen</span> te Werken?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-gray-600 dark:text-dark-text/80 mb-12 max-w-2xl mx-auto"
        >
          Neem contact met ons op voor een vrijblijvend gesprek over uw schilderproject.
          Wij denken graag met u mee over de mogelijkheden.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="mr-2">Contact opnemen</span>
            <svg 
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
          
          <motion.a
            href="tel:+31612345678"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-dark-accent/20 text-primary dark:text-dark-primary rounded-xl border-2 border-primary/10 dark:border-dark-primary/20 hover:border-primary dark:hover:border-dark-primary transition-all duration-300"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Bel direct</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
} 