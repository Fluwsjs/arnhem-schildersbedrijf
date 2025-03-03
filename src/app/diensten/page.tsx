'use client'

import { HomeIcon, PaintBrushIcon, SwatchIcon, CalendarIcon, CheckCircleIcon, ClockIcon, SunIcon, ChatBubbleBottomCenterTextIcon, ClipboardDocumentListIcon, ClipboardDocumentCheckIcon, CalendarDaysIcon, MagnifyingGlassIcon, HeartIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Diensten() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  // Color consultation tool state
  const [selectedRoom, setSelectedRoom] = useState('woonkamer')
  const [selectedColor, setSelectedColor] = useState('#E6E6FA') // Default light lavender
  
  const colorOptions = [
    { name: 'Zacht Wit', hex: '#F5F5F5' },
    { name: 'Warm Beige', hex: '#E8DCC5' },
    { name: 'Licht Grijs', hex: '#D3D3D3' },
    { name: 'Zacht Blauw', hex: '#B0C4DE' },
    { name: 'Mint Groen', hex: '#98FB98' },
    { name: 'Lavendel', hex: '#E6E6FA' },
    { name: 'Zacht Geel', hex: '#FFFACD' },
    { name: 'Terracotta', hex: '#E2725B' },
  ]
  
  // Gebruik bestaande afbeeldingen voor de kamers
  const roomOptions = [
    { id: 'woonkamer', name: 'Woonkamer', image: '/images/binnenschilderwerk.jpeg' },
    { id: 'slaapkamer', name: 'Slaapkamer', image: '/images/binnenschilderwerk.jpeg' },
    { id: 'keuken', name: 'Keuken', image: '/images/binnenschilderwerk.jpeg' },
    { id: 'badkamer', name: 'Badkamer', image: '/images/binnenschilderwerk.jpeg' },
  ]
  
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
            Onze <span className="text-secondary dark:text-dark-secondary">Diensten</span>
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
            Ontdek ons uitgebreide aanbod van professionele schilderdiensten voor uw woning of bedrijfspand
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Binnenschilderwerk Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          id="binnenschilderwerk" 
          className="mb-16">
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-dark-accent/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-white p-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg">
                  <HomeIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">Binnenschilderwerk</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Vakkundige afwerking van uw binnenmuren, plafonds, deuren en kozijnen. Wij zorgen voor een perfect resultaat met oog voor detail.</p>
                <div className="space-y-4">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Muren en plafonds</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Deuren en kozijnen</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Radiatoren en leidingen</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Trappenhuis</span>
                  </motion.div>
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  Offerte aanvragen
                </motion.a>
              </div>
              <div className="md:w-1/2 relative min-h-[400px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/binnenschilderwerk.jpeg"
                    alt="Binnenschilderwerk"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Buitenschilderwerk Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          id="buitenschilderwerk" 
          className="mb-16">
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-dark-accent/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-100 to-white p-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg">
                  <PaintBrushIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">Buitenschilderwerk</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Bescherming en verfraaiing van uw gevel, kozijnen en andere buitenelementen. Wij gebruiken alleen hoogwaardige materialen voor een duurzaam resultaat.</p>
                <div className="space-y-4">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Gevels en kozijnen</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Dakgoten en boeidelen</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Garagedeuren</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Tuinmeubilair</span>
                  </motion.div>
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  Offerte aanvragen
                </motion.a>
              </div>
              <div className="md:w-1/2 relative min-h-[400px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/buitenschilderwerk.jpeg"
                    alt="Buitenschilderwerk"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Behangwerk Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          id="behangwerk" 
          className="mb-16">
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-dark-accent/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-white p-10">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg">
                  <SwatchIcon className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">Behangwerk</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Professioneel behangen met oog voor detail en perfecte afwerking. Van klassiek behang tot moderne wandbekleding, wij hebben de expertise voor elk project.</p>
                <div className="space-y-4">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Alle soorten behang</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Fotobehang</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Renovlies behang</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-3 text-gray-700">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">✓</span>
                    <span>Glasvlies behang</span>
                  </motion.div>
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  Offerte aanvragen
                </motion.a>
              </div>
              <div className="md:w-1/2 relative min-h-[400px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/images/behangwerk.jpeg"
                    alt="Behangwerk"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Project Planner Tool */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          id="projectplanner" 
          className="mb-16">
          <motion.div 
            variants={fadeInUp}
            className="bg-white dark:bg-dark-accent/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-10">
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-white rounded-full flex items-center justify-center shadow-md">
                  <CalendarIcon className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Project Planning Guide</h2>
              <p className="text-gray-600 text-lg mb-12 text-center max-w-3xl mx-auto">
                Ontdek de ideale planning voor uw schilderproject en krijg direct inzicht in de beste periode voor uw werkzaamheden.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-primary">Voorjaar</h3>
                  <p className="text-gray-600 mb-4">Ideaal voor buitenschilderwerk</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Milde temperaturen</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Goede droogtijd</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Weinig kans op regen</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-primary">Zomer</h3>
                  <p className="text-gray-600 mb-4">Perfect voor binnen- en buitenwerk</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Snelle droogtijd</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Lange werkdagen</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Optimale ventilatie</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-primary">Najaar</h3>
                  <p className="text-gray-600 mb-4">Uitstekend voor binnenwerk</p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Stabiele temperatuur</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Goede planning mogelijk</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span>Rustigere periode</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="mt-12 bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Tips voor een succesvol project</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center">
                    <ClockIcon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Tijdsplanning</h4>
                    <p className="text-gray-600 text-sm">Plan minimaal 2-3 weken vooruit voor de beste beschikbaarheid</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center">
                    <SunIcon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Weersomstandigheden</h4>
                    <p className="text-gray-600 text-sm">Check de weersvoorspelling voor buitenwerk</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center">
                    <HomeIcon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Voorbereiding</h4>
                    <p className="text-gray-600 text-sm">Zorg voor een schone en toegankelijke werkruimte</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center text-center">
                    <ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-2">Communicatie</h4>
                    <p className="text-gray-600 text-sm">Bespreek uw wensen en planning tijdig met ons team</p>
                  </motion.div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <motion.a 
                  href="/contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
                >
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Plan uw project
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Interesse in onze diensten?</h3>
          <p className="text-lg text-gray-600 mb-6">Neem contact met ons op voor een vrijblijvende offerte</p>
          <motion.a 
            href="/contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary dark:bg-dark-primary text-white px-8 py-3 rounded-lg hover:bg-secondary dark:hover:bg-dark-secondary transition-colors">
            Contact opnemen
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}