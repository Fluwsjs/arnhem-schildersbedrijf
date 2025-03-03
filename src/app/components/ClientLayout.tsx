'use client'

import Navigation from './Navigation'
import Footer from './Footer'
import { motion, AnimatePresence } from 'framer-motion'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {


  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <>
      <div>
        <Navigation />
        <AnimatePresence mode="wait">
          <motion.main
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="" // Verwijder padding top
            key={Math.random()} // Force re-render on route change
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}