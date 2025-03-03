'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Blog() {
  const blogPosts = [
    {
      id: 'seizoensgebonden-onderhoudstips',
      title: 'Seizoensgebonden Onderhoudstips voor Uw Schilderwerk',
      excerpt: 'Leer hoe u uw schilderwerk het hele jaar door in optimale conditie houdt met deze seizoensgebonden onderhoudstips.',
      date: '15 maart 2024',
      image: '/images/buitenschilderwerk.jpeg',
      category: 'Onderhoud'
    },
    {
      id: 1,
      title: 'De Beste Verfkleuren voor 2024',
      excerpt: 'Ontdek de trending kleuren voor dit jaar en hoe u deze kunt toepassen in uw interieur.',
      date: '15 januari 2024',
      image: '/images/binnenschilderwerk.jpeg',
      category: 'Trends'
    },
    {
      id: 2,
      title: 'Onderhoudstips voor Buitenschilderwerk',
      excerpt: 'Praktische tips om uw buitenschilderwerk in topconditie te houden.',
      date: '8 januari 2024',
      image: '/images/buitenschilderwerk.jpeg',
      category: 'Onderhoud'
    },
    {
      id: 3,
      title: 'Behang vs. Schilderwerk: Wat Past bij U?',
      excerpt: 'Een vergelijking tussen behang en schilderwerk om de beste keuze voor uw ruimte te maken.',
      date: '2 januari 2024',
      image: '/images/behangwerk.jpeg',
      category: 'Advies'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimalist Design with Typography Focus */}
      <section className="relative h-[400px] flex items-center justify-center mb-12 pt-20 bg-white dark:bg-dark-background">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 text-primary dark:text-dark-primary"
          >
            Onze <span className="text-secondary dark:text-dark-secondary">Blog</span>
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
            Blijf op de hoogte van de laatste trends, tips en ontwikkelingen in de schilderswereld
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/images/buitenschilderwerk.jpeg"
                  alt="Seizoensgebonden Onderhoudstips"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    Uitgelicht
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <time className="text-sm text-gray-600">15 maart 2024</time>
                <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Seizoensgebonden Onderhoudstips voor Uw Schilderwerk</h2>
                <p className="text-gray-600 mb-6">
                  Leer hoe u uw schilderwerk het hele jaar door in optimale conditie houdt met deze seizoensgebonden onderhoudstips. 
                  Van winterbescherming tot zomeronderhoud, wij delen onze professionele kennis.
                </p>
                <a
                  href="/blog/seizoensgebonden-onderhoudstips"
                  className="inline-block bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Lees het volledige artikel
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recente Artikelen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-600">{post.date}</time>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                >
                  Lees meer →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blijf op de Hoogte</h2>
          <p className="text-gray-600 mb-6">Schrijf u in voor onze nieuwsbrief en ontvang de laatste updates en tips.</p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Uw e-mailadres"
              className="flex-1 rounded-lg border-blue-400 focus:border-blue-800 focus:ring-blue-800"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Inschrijven
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}