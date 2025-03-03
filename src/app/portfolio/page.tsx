'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    {
      title: 'Klassiek Herenhuis',
      category: 'Buitenschilderwerk',
      description: 'Volledige renovatie van buitenschilderwerk voor een monumentaal pand',
      image: '/images/buitenschilderwerk.jpeg'
    },
    {
      title: 'Modern Appartement',
      category: 'Binnenschilderwerk',
      description: 'Complete binnenschilderwerk met moderne kleuren',
      image: '/images/binnenschilderwerk.jpeg'
    },
    {
      title: 'Villa Renovatie',
      category: 'Binnen- en Buitenschilderwerk',
      description: 'Grootschalig renovatieproject met binnen- en buitenschilderwerk',
      image: '/images/buitenschilderwerk.jpeg'
    },
    {
      title: 'Design Woonkamer',
      category: 'Behangwerk',
      description: 'Exclusief behangwerk met custom design',
      image: '/images/behangwerk.jpeg'
    },
    {
      title: 'Kantoorpand',
      category: 'Binnenschilderwerk',
      description: 'Professionele afwerking van kantoorruimtes',
      image: '/images/binnenschilderwerk.jpeg'
    },
    {
      title: 'Monumentaal Project',
      category: 'Restauratie',
      description: 'Zorgvuldige restauratie van historische elementen',
      image: '/images/buitenschilderwerk.jpeg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="min-h-screen dark:bg-background bg-white">
      {/* Hero Section - Minimalist Design with Typography Focus */}
      <section className="relative h-[400px] flex items-center justify-center mb-12 pt-20 bg-white dark:bg-dark-background">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 text-primary dark:text-dark-primary"
          >
            Onze <span className="text-secondary dark:text-dark-secondary">Projecten</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-32 bg-secondary mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            Laat u inspireren door onze afgeronde projecten
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="dark:bg-dark-accent/20 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 bg-dark-primary opacity-10 z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </motion.div>
              </div>
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-sm font-medium dark:text-dark-text/80 text-gray-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold dark:text-dark-text text-gray-900 mb-2">{project.title}</h3>
                <p className="dark:text-dark-text/80 text-gray-600">{project.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 dark:text-dark-text text-gray-900">Interesse in onze diensten?</h2>
          <p className="text-lg dark:text-dark-text/80 text-gray-600 mb-6">Laat ons uw project tot leven brengen</p>
          <motion.a 
            href="/contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-dark-primary text-white px-8 py-3 rounded-lg hover:bg-dark-secondary transition-colors"
          >
            Neem contact op
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}