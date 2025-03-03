'use client'

import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, PaintBrushIcon, SwatchIcon, HomeIcon, UserGroupIcon, ShieldCheckIcon, CheckBadgeIcon, HeartIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
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
  
  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [direction, setDirection] = useState(0)
  const [storeName, setStoreName] = useState('')
  
  const testimonials = [
    {
      name: "Jan de Vries",
      location: "Arnhem",
      image: "/images/binnenschilderwerk.jpeg",
      stars: 5,
      text: "Arnhem Schildersbedrijf heeft onze woning volledig getransformeerd. De kwaliteit van het werk is uitstekend en het team was zeer professioneel. Ik raad ze zeker aan voor elk schilderproject!"
    },
    {
      name: "Marieke Jansen",
      location: "Velp",
      image: "/images/buitenschilderwerk.jpeg",
      stars: 5,
      text: "Zeer tevreden met het buitenschilderwerk. Ze hebben ons goed geadviseerd over de juiste kleuren en materialen. Het resultaat is prachtig en de verf ziet er na een jaar nog steeds als nieuw uit."
    },
    {
      name: "Peter Bakker",
      location: "Oosterbeek",
      image: "/images/binnenschilderwerk.jpeg",
      stars: 4,
      text: "Professioneel team dat snel en netjes werkt. Ze hebben onze woonkamer en keuken geschilderd en het ziet er geweldig uit. Goede prijs-kwaliteitverhouding."
    },
    {
      name: "Annemarie de Boer",
      location: "Huissen",
      image: "/images/behangwerk.jpeg",
      stars: 5,
      text: "Het behangwerk in onze slaapkamer is perfect uitgevoerd. Ze hebben zelfs geholpen bij het kiezen van het juiste patroon. Zeer klantvriendelijk en vakkundig."
    },
    {
      name: "Thomas Visser",
      location: "Arnhem",
      image: "/images/buitenschilderwerk.jpeg",
      stars: 5,
      text: "Al jaren een tevreden klant. Ze onderhouden de buitenkant van ons huis en de kwaliteit is altijd consistent. Betrouwbaar en professioneel."
    }
  ]
  
  const nextTestimonial = () => {
    setDirection(1)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect naar de contactpagina
    window.location.href = '/contact'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern Style */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-background dark:to-dark-background/90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content - Text and Button */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 pr-0 lg:pr-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="text-primary dark:text-dark-primary">Arnhem</span> Schildersbedrijf
                </h1>
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
                  Gebroeders Baars
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                  Als familiebedrijf bieden wij al meer dan 25 jaar vakmanschap en kwaliteit in schilderwerk. Wij zijn gespecialiseerd in binnen- en buitenschilderwerk, behangwerk en kleuradvies voor particulieren en bedrijven in en om de regio Arnhem.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary dark:bg-dark-primary hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
                  >
                    Offerte aanvragen
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/diensten" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-lg font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-dark-accent/20 hover:bg-gray-50 dark:hover:bg-dark-accent/30 transition-colors"
                  >
                    Onze diensten
                  </Link>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 dark:bg-dark-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary/20 dark:bg-dark-secondary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary dark:text-dark-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Betrouwbaar, professioneel en kwaliteitsgericht
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Right Content - Interior Image */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <Image
                  src="/images/hero/arnhem-schildersbedrijf-binnen.jpg"
                  alt="Professioneel schilderwerk interieur door Arnhem Schildersbedrijf"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
                
                {/* Floating elements for visual interest */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 dark:bg-dark-primary/20 rounded-2xl -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 dark:bg-dark-secondary/20 rounded-2xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section py-20 dark:bg-background bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Onze Diensten
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-dark-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professioneel schilderwerk voor binnen en buiten, met oog voor detail en kwaliteit
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <HomeIcon className="w-full h-full" />,
                title: 'Binnenschilderwerk',
                description: 'Vakkundige afwerking van uw binnenmuren, plafonds, deuren en kozijnen.',
                color: 'bg-blue-50 text-blue-600',
                hoverColor: 'group-hover:bg-blue-600 group-hover:text-white',
                image: '/images/binnenschilderwerk.jpeg'
              },
              {
                icon: <PaintBrushIcon className="w-full h-full" />,
                title: 'Buitenschilderwerk',
                description: 'Bescherming en verfraaiing van uw gevel, kozijnen en andere buitenelementen.',
                color: 'bg-emerald-50 text-emerald-600',
                hoverColor: 'group-hover:bg-emerald-600 group-hover:text-white',
                image: '/images/buitenschilderwerk.jpeg'
              },
              {
                icon: <SwatchIcon className="w-full h-full" />,
                title: 'Behangwerk',
                description: 'Professioneel behangen met oog voor detail en perfecte afwerking.',
                color: 'bg-amber-50 text-amber-600',
                hoverColor: 'group-hover:bg-amber-600 group-hover:text-white',
                image: '/images/behangwerk.jpeg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white dark:bg-dark-accent/10 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={400} 
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-8 relative">
                  <div className={`absolute -top-10 left-8 w-20 h-20 rounded-full ${service.color} ${service.hoverColor} p-4 transition-all duration-300 flex items-center justify-center shadow-lg`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 mt-6 text-gray-800 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  
                  <Link 
                    href={`/diensten#${service.title.toLowerCase()}`} 
                    className="inline-flex items-center text-primary dark:text-dark-primary font-medium group-hover:text-blue-700 dark:group-hover:text-blue-400"
                  >
                    Meer informatie
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link 
              href="/diensten" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary dark:bg-dark-primary hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
            >
              Bekijk al onze diensten
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section dark:bg-background/80 bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-dark-text"
          >
            Waarom Kiezen voor Ons?
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="dark:bg-dark-accent/20 dark:text-dark-text bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 dark:bg-background/40 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <UserGroupIcon className="w-8 h-8 dark:text-dark-text text-gray-800" />
              </div>
              <h3 className="text-xl font-bold dark:text-dark-text text-gray-800 mb-4 text-center">Ervaring</h3>
              <p className="dark:text-dark-text/80 text-gray-600 text-center">Jarenlange ervaring in de schildersbranche</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="dark:bg-dark-accent/20 dark:text-dark-text bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 dark:bg-background/40 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheckIcon className="w-8 h-8 dark:text-dark-text text-gray-800" />
              </div>
              <h3 className="text-xl font-bold dark:text-dark-text text-gray-800 mb-4 text-center">Kwaliteit</h3>
              <p className="dark:text-dark-text/80 text-gray-600 text-center">Gebruik van hoogwaardige materialen</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="dark:bg-dark-accent/20 dark:text-dark-text bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 dark:bg-background/40 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckBadgeIcon className="w-8 h-8 dark:text-dark-text text-gray-800" />
              </div>
              <h3 className="text-xl font-bold dark:text-dark-text text-gray-800 mb-4 text-center">Garantie</h3>
              <p className="dark:text-dark-text/80 text-gray-600 text-center">Uitgebreide garantie op ons werk</p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="dark:bg-dark-accent/20 dark:text-dark-text bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-16 h-16 dark:bg-background/40 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <HeartIcon className="w-8 h-8 dark:text-dark-text text-gray-800" />
              </div>
              <h3 className="text-xl font-bold dark:text-dark-text text-gray-800 mb-4 text-center">Service</h3>
              <p className="dark:text-dark-text/80 text-gray-600 text-center">Persoonlijke aandacht en advies</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Counter Section */}
      <section className="section bg-white py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">500+</div>
              <div className="text-gray-600 dark:text-dark-text/80">Projecten Voltooid</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">20+</div>
              <div className="text-gray-600 dark:text-dark-text/80">Jaren Ervaring</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">100%</div>
              <div className="text-gray-600 dark:text-dark-text/80">Klanttevredenheid</div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-primary dark:text-dark-primary mb-2">50+</div>
              <div className="text-gray-600 dark:text-dark-text/80">Actieve Klanten</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="section dark:bg-background/80 bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-dark-text"
          >
            Wat Onze Klanten Zeggen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 dark:text-dark-text/80 max-w-3xl mx-auto mb-16"
          >
            Ontdek waarom onze klanten ons vertrouwen voor hun schilderprojecten. Wij streven naar 100% klanttevredenheid bij elk project.
          </motion.p>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Carousel */}
            <div className="relative overflow-hidden rounded-xl shadow-xl h-[400px] md:h-[300px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="dark:bg-dark-accent/20 bg-white p-8 md:p-12 rounded-xl h-full"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20 dark:border-dark-primary/20">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-1 text-center">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-gray-600 dark:text-dark-text/70 mb-3 text-center">
                        {testimonials[currentTestimonial].location}
                      </p>
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonials[currentTestimonial].stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="relative">
                        <div className="absolute -top-6 -left-6 text-6xl text-primary/20 dark:text-dark-primary/20">"</div>
                        <p className="text-gray-700 dark:text-dark-text/90 text-lg relative z-10 italic">
                          {testimonials[currentTestimonial].text}
                        </p>
                        <div className="absolute -bottom-10 -right-6 text-6xl text-primary/20 dark:text-dark-primary/20">"</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-dark-background/80 flex items-center justify-center text-primary dark:text-dark-primary hover:bg-white dark:hover:bg-dark-background transition-colors shadow-md z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-dark-background/80 flex items-center justify-center text-primary dark:text-dark-primary hover:bg-white dark:hover:bg-dark-background transition-colors shadow-md z-10"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentTestimonial ? 1 : -1)
                    setCurrentTestimonial(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary dark:bg-dark-primary w-6' 
                      : 'bg-gray-300 dark:bg-dark-accent/30 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="section bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
          >
            Recent Werk
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src="/images/buitenschilderwerk.jpeg"
                alt="Recent project 1"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Klassiek Herenhuis</h3>
                  <p>Buitenschilderwerk</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src="/images/binnenschilderwerk.jpeg"
                alt="Recent project 2"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Modern Appartement</h3>
                  <p>Binnenschilderwerk</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <Image
                src="/images/behangwerk.jpeg"
                alt="Recent project 3"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Villa Renovatie</h3>
                  <p>Compleet schilderwerk</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-primary dark:bg-dark-primary text-white px-8 py-3 rounded-lg hover:bg-secondary dark:hover:bg-dark-secondary transition-colors"
            >
              Bekijk alle projecten
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}