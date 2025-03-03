'use client'

import { ShieldCheckIcon, UserGroupIcon, SparklesIcon, ClockIcon, CheckBadgeIcon, HeartIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CountUp from 'react-countup'
import CallToAction from '../components/CallToAction'

export default function About() {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }
  
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }
  
  const faqItems = [
    {
      question: "Hoe lang duurt een gemiddeld schilderproject?",
      answer: "De duur van een schilderproject hangt af van verschillende factoren zoals de grootte van het project, de staat van de ondergrond en de weersomstandigheden bij buitenschilderwerk. Een gemiddelde woonkamer kan bijvoorbeeld binnen 2-3 dagen geschilderd worden, terwijl een volledig huis buitenom 1-2 weken kan duren. Tijdens een vrijblijvende offerte kunnen we een nauwkeurige tijdsindicatie geven voor uw specifieke project."
    },
    {
      question: "Welke verfmerken gebruiken jullie?",
      answer: "Wij werken uitsluitend met hoogwaardige verfproducten van gerenommeerde merken zoals Sigma, Sikkens en Wijzonol. Deze verven bieden een uitstekende dekking, duurzaamheid en kleurechtheid. Afhankelijk van uw wensen en budget kunnen we verschillende opties voorstellen om het beste resultaat te bereiken voor uw specifieke situatie."
    },
    {
      question: "Geven jullie garantie op het schilderwerk?",
      answer: "Ja, wij geven garantie op al ons schilderwerk. Voor binnenschilderwerk geldt een garantie van 4 jaar en voor buitenschilderwerk 3 jaar. Deze garantie dekt eventuele gebreken in het schilderwerk zoals bladderende verf of onvoldoende hechting. Normale slijtage en schade door externe factoren vallen niet onder de garantie. We bespreken de garantievoorwaarden altijd duidelijk tijdens het offertetraject."
    },
    {
      question: "Moet ik zelf meubels verplaatsen voor binnenschilderwerk?",
      answer: "Nee, dat hoeft niet. Onze service omvat het zorgvuldig afdekken en/of verplaatsen van meubels. We zorgen ervoor dat alles goed beschermd is tegen verfspetters en stof. Na afloop van de werkzaamheden plaatsen we alles weer terug op de oorspronkelijke plek. We vragen wel om waardevolle en breekbare items zelf veilig op te bergen."
    },
    {
      question: "Kan er geschilderd worden in de winter?",
      answer: "Voor binnenschilderwerk is het seizoen niet van belang, dit kan het hele jaar door. Voor buitenschilderwerk zijn we afhankelijk van de weersomstandigheden. Idealiter schilderen we buiten bij temperaturen tussen 8°C en 25°C, zonder regen of hoge luchtvochtigheid. In de wintermaanden kunnen we wel voorbereidende werkzaamheden uitvoeren en planningen maken voor het komende seizoen."
    },
    {
      question: "Hoe kan ik een offerte aanvragen?",
      answer: "U kunt eenvoudig een offerte aanvragen via onze contactpagina, telefonisch of per e-mail. We plannen dan een afspraak in voor een vrijblijvende inspectie en bespreking van uw wensen. Binnen enkele dagen na dit bezoek ontvangt u een gedetailleerde offerte met een duidelijke prijsopgave, specificatie van de werkzaamheden en een tijdsindicatie."
    }
  ]

  return (
    <div className="min-h-screen dark:bg-background bg-white">
      {/* Hero Section - Minimalist Design with Typography Focus */}
      <section className="relative h-[500px] flex items-center justify-center mb-12 pt-20 bg-white dark:bg-dark-background">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 text-primary dark:text-dark-primary"
          >
            Over <span className="text-secondary dark:text-dark-secondary">Ons</span>
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
            Met meer dan 20 jaar ervaring zijn wij uw betrouwbare partner voor vakkundig schilderwerk.
            Ontdek ons verhaal en maak kennis met ons toegewijde team.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Values Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -5 }}
            className="dark:bg-dark-accent/20 dark:text-dark-text bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-background/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 dark:bg-background/40 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 transform transition-transform group-hover:rotate-6">
                <ShieldCheckIcon className="w-8 h-8 dark:text-dark-primary text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold dark:text-dark-text text-gray-900 mb-4">Kwaliteit</h3>
              <p className="dark:text-dark-text/80 text-gray-600 leading-relaxed">
                Wij staan voor hoogwaardige kwaliteit en gebruiken alleen de beste materialen en technieken
                voor een duurzaam resultaat.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -5 }}
            className="dark:bg-dark-accent/20 dark:text-dark-text bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-background/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 dark:bg-background/40 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 transform transition-transform group-hover:rotate-6">
                <UserGroupIcon className="w-8 h-8 dark:text-dark-primary text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold dark:text-dark-text text-gray-900 mb-4">Ervaring</h3>
              <p className="dark:text-dark-text/80 text-gray-600 leading-relaxed">
                Met jarenlange ervaring in de schildersbranche weten we precies wat nodig is om aan uw
                wensen te voldoen.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.03, y: -5 }}
            className="dark:bg-dark-accent/20 dark:text-dark-text bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-background/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
            <div className="relative">
              <div className="w-16 h-16 dark:bg-background/40 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 transform transition-transform group-hover:rotate-6">
                <SparklesIcon className="w-8 h-8 dark:text-dark-primary text-blue-800" />
              </div>
              <h3 className="text-2xl font-bold dark:text-dark-text text-gray-900 mb-4">Service</h3>
              <p className="dark:text-dark-text/80 text-gray-600 leading-relaxed">
                Klanttevredenheid staat bij ons voorop. We denken mee, adviseren en zorgen voor een
                zorgeloze uitvoering.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Counter Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8 my-16 bg-white dark:bg-dark-accent/20 rounded-2xl p-8 shadow-lg"
        >
          {[
            { number: 20, suffix: '+', label: 'Jaren Ervaring', icon: ClockIcon },
            { number: 1000, suffix: '+', label: 'Projecten Voltooid', icon: CheckBadgeIcon },
            { number: 95, suffix: '%', label: 'Klanttevredenheid', icon: HeartIcon },
            { number: 50, suffix: '+', label: 'Zakelijke Klanten', icon: BuildingOfficeIcon }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <motion.span
                className="text-4xl font-bold text-primary block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              </motion.span>
              <span className="text-gray-600 dark:text-gray-300">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dark:bg-dark-accent/20 dark:text-dark-text bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-16"
        >
          <div className="md:flex items-stretch">
            <div className="md:w-1/2 p-12 relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50/50 dark:bg-background/10 rounded-full -ml-16 -mt-16" />
              <div className="relative">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl font-bold dark:text-dark-text text-gray-900 mb-8"
                >
                  Onze <span className="text-primary dark:text-dark-primary">Geschiedenis</span>
                </motion.h2>
                <div className="space-y-6 dark:text-dark-text/80 text-gray-600">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg leading-relaxed flex items-start gap-4"
                  >
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                      <ShieldCheckIcon className="w-4 h-4 text-primary" />
                    </span>
                    <span>
                      Arnhem Schildersbedrijf is opgericht met een duidelijke visie: het leveren van
                      vakkundig schilderwerk met persoonlijke aandacht voor elke klant.
                    </span>
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg leading-relaxed flex items-start gap-4"
                  >
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                      <UserGroupIcon className="w-4 h-4 text-primary" />
                    </span>
                    <span>
                      Door de jaren heen hebben we ons ontwikkeld tot een veelzijdig schildersbedrijf
                      met een breed dienstenpakket. Van klein onderhoud tot complete renovaties, we
                      pakken elk project met dezelfde toewijding aan.
                    </span>
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg leading-relaxed flex items-start gap-4"
                  >
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                      <SparklesIcon className="w-4 h-4 text-primary" />
                    </span>
                    <span>
                      Onze ervaren schilders worden continu bijgeschoold om op de hoogte te blijven
                      van de laatste technieken en ontwikkelingen in de branche.
                    </span>
                  </motion.p>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 relative min-h-[500px] group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-b-2xl" />
              <Image
                src="/images/about-team.jpg"
                alt="Ons team"
                fill
                className="object-cover rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2">Ons Team</h3>
                <p className="text-white/90">Vakmanschap en toewijding in elk project</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold dark:text-dark-text text-gray-900 mb-8 text-center">Veelgestelde Vragen</h2>
          <p className="text-lg dark:text-dark-text/80 text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Hieronder vindt u antwoorden op de meest gestelde vragen. Staat uw vraag er niet bij? Neem dan gerust contact met ons op.
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4 group"
              >
                <motion.button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all duration-300 ${
                    openFaq === index 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                      : 'bg-white dark:bg-dark-accent/20 dark:text-dark-text text-gray-900 hover:bg-gray-50 dark:hover:bg-dark-accent/30'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-medium text-lg flex items-center">
                    <motion.span 
                      className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                        openFaq === index ? 'bg-white/20' : 'bg-primary/10'
                      }`}
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                    >
                      <svg 
                        className="w-4 h-4"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                    {faq.question}
                  </span>
                </motion.button>
                <motion.div 
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className={`p-6 bg-gray-50 dark:bg-dark-accent/10 rounded-b-xl dark:text-dark-text/90 text-gray-700 ${
                    openFaq === index ? 'shadow-inner' : ''
                  }`}>
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Add CallToAction component */}
        <div className="mb-16">
          <CallToAction />
        </div>
      </div>
    </div>
  )
}