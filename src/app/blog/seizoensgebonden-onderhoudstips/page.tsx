'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SeasonalMaintenanceTips() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/buitenschilderwerk.jpeg"
            alt="Seizoensgebonden Onderhoudstips"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="inline-block bg-primary dark:bg-dark-primary px-4 py-1 rounded-full text-sm mb-4">Onderhoud</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seizoensgebonden Onderhoudstips voor Uw Schilderwerk</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span>15 maart 2024</span>
            <span>•</span>
            <span>10 minuten leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <motion.p variants={fadeInUp} className="lead">
            Het onderhouden van uw schilderwerk is essentieel om de levensduur te verlengen en uw woning of bedrijfspand er op zijn best uit te laten zien. Elke seizoen brengt echter zijn eigen uitdagingen met zich mee. In dit artikel delen we professionele tips voor het onderhoud van uw schilderwerk gedurende het hele jaar.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <h2>Lente: Inspectie en Voorbereiding</h2>
            <p>
              De lente is het ideale seizoen om uw schilderwerk grondig te inspecteren na de winter en voorbereidingen te treffen voor de zomer.
            </p>
            <ul>
              <li><strong>Grondige inspectie:</strong> Controleer alle geschilderde oppervlakken op scheuren, blaren, afbladdering of verkleuring. Let vooral op plekken die blootgesteld zijn aan vocht, zoals rond ramen en deuren.</li>
              <li><strong>Schoonmaken:</strong> Verwijder vuil, stof en schimmel van alle geschilderde oppervlakken. Voor buitenschilderwerk kunt u een hogedrukreiniger op lage stand gebruiken, voor binnen volstaat een vochtige doek met milde zeep.</li>
              <li><strong>Kleine reparaties:</strong> Herstel kleine beschadigingen direct. Schuur beschadigde plekken licht op, vul gaten en scheuren met de juiste vulmiddelen en breng waar nodig een nieuwe laag verf aan.</li>
              <li><strong>Controleer kitwerk:</strong> Inspecteer het kitwerk rond ramen, deuren en andere naden. Beschadigd kitwerk kan leiden tot vochtproblemen en verdere schade aan uw schilderwerk.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="my-8">
            <div className="bg-gray-100 dark:bg-dark-accent/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Pro Tip: Voorjaarsschoonmaak</h3>
              <p className="mb-0">
                Combineer de inspectie van uw schilderwerk met uw voorjaarsschoonmaak. Zo kunt u meteen alle oppervlakken goed reinigen en heeft u een compleet beeld van de staat van uw schilderwerk.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>Zomer: Bescherming en Onderhoud</h2>
            <p>
              De zomer brengt veel zonlicht en soms extreme temperaturen met zich mee, wat invloed kan hebben op uw schilderwerk.
            </p>
            <ul>
              <li><strong>UV-bescherming:</strong> Overweeg zonwering voor kamers met veel direct zonlicht om verkleuring van binnenschilderwerk te voorkomen.</li>
              <li><strong>Ventilatie:</strong> Zorg voor goede ventilatie in vochtige ruimtes zoals badkamers en keukens om schimmelvorming te voorkomen.</li>
              <li><strong>Buitenschilderwerk:</strong> De zomer is de ideale tijd voor buitenschilderwerk. Kies voor dagen met gematigde temperaturen (tussen 15°C en 25°C) en lage luchtvochtigheid voor het beste resultaat.</li>
              <li><strong>Regelmatig afstoffen:</strong> Stof trekt vocht aan en kan op termijn uw schilderwerk aantasten. Stof regelmatig af, vooral in ruimtes die weinig gebruikt worden.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/binnenschilderwerk.jpeg"
                  alt="Zomeronderhoud"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/buitenschilderwerk.jpeg"
                  alt="Winterbescherming"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>Herfst: Voorbereiding op de Winter</h2>
            <p>
              De herfst is het moment om uw schilderwerk voor te bereiden op de koude, natte wintermaanden.
            </p>
            <ul>
              <li><strong>Grondige reiniging:</strong> Verwijder bladeren en ander vuil van dakgoten, kozijnen en andere geschilderde buitenoppervlakken.</li>
              <li><strong>Controleer afdichtingen:</strong> Inspecteer alle afdichtingen rond ramen en deuren en vervang deze indien nodig om tocht en vochtproblemen te voorkomen.</li>
              <li><strong>Laatste reparaties:</strong> Voer eventuele laatste reparaties uit voordat de winter invalt. Zorg ervoor dat alle beschadigde plekken zijn hersteld en beschermd.</li>
              <li><strong>Binnenschilderwerk:</strong> De herfst is een goed moment voor binnenschilderwerk, omdat de luchtvochtigheid vaak lager is dan in de zomer, wat zorgt voor een betere droging.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="my-8">
            <div className="bg-gray-100 dark:bg-dark-accent/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Pro Tip: Documentatie</h3>
              <p className="mb-0">
                Houd een logboek bij van al uw schilderwerk, inclusief gebruikte kleuren, merken en data. Dit maakt toekomstig onderhoud en bijwerken veel eenvoudiger.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>Winter: Bescherming en Planning</h2>
            <p>
              Hoewel de winter niet ideaal is voor schilderwerk, kunt u deze tijd gebruiken voor planning en bescherming.
            </p>
            <ul>
              <li><strong>Vochtbeheersing:</strong> Controleer regelmatig op condensatie, vooral rond ramen. Overmatig vocht kan leiden tot schimmelvorming en aantasting van uw schilderwerk.</li>
              <li><strong>Temperatuurcontrole:</strong> Voorkom extreme temperatuurschommelingen in uw woning, omdat dit kan leiden tot uitzetting en krimp van geschilderde oppervlakken.</li>
              <li><strong>Planning:</strong> Gebruik de wintermaanden om schilderprojecten voor het komende jaar te plannen. Maak een inventarisatie van wat gedaan moet worden en vraag offertes aan.</li>
              <li><strong>Binnenonderhoud:</strong> Voer klein binnenonderhoud uit, zoals het reinigen van geschilderde oppervlakken en het bijwerken van kleine beschadigingen.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>Jaarlijkse Onderhoudschecklist</h2>
            <p>
              Naast seizoensgebonden onderhoud is het aan te raden om jaarlijks de volgende checklist te doorlopen:
            </p>
            <ul>
              <li>Inspecteer alle binnen- en buitenschilderwerk op tekenen van slijtage of schade.</li>
              <li>Reinig alle geschilderde oppervlakken grondig.</li>
              <li>Controleer kitwerk en afdichtingen en vervang deze indien nodig.</li>
              <li>Herstel kleine beschadigingen direct om verdere schade te voorkomen.</li>
              <li>Evalueer of bepaalde ruimtes of oppervlakken opnieuw geschilderd moeten worden.</li>
              <li>Controleer of er vochtproblemen zijn die aangepakt moeten worden.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="my-8">
            <div className="bg-primary/10 dark:bg-dark-primary/20 p-6 rounded-lg border-l-4 border-primary dark:border-dark-primary">
              <h3 className="text-xl font-semibold mb-3">Wanneer een Professional Inschakelen</h3>
              <p>
                Hoewel veel onderhoud zelf uitgevoerd kan worden, zijn er situaties waarin het verstandig is om een professional in te schakelen:
              </p>
              <ul className="mb-0">
                <li>Bij uitgebreide schade of slijtage</li>
                <li>Voor hooggelegen oppervlakken die moeilijk bereikbaar zijn</li>
                <li>Bij structurele problemen zoals houtrot of vochtproblemen</li>
                <li>Voor specialistische technieken of afwerkingen</li>
                <li>Als u niet over de juiste apparatuur of kennis beschikt</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>Conclusie</h2>
            <p>
              Door uw schilderwerk seizoensgebonden te onderhouden, verlengt u niet alleen de levensduur maar bespaart u ook kosten op lange termijn. Regelmatige inspectie, tijdige reparaties en de juiste bescherming zijn de sleutel tot duurzaam schilderwerk dat er jarenlang mooi uit blijft zien.
            </p>
            <p>
              Heeft u vragen over het onderhoud van uw schilderwerk of bent u op zoek naar professionele hulp? Neem dan gerust contact met ons op voor advies op maat.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-accent/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <span className="text-sm text-gray-600 dark:text-dark-text/70">Deel dit artikel:</span>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-600 dark:text-dark-text/70 hover:text-primary dark:hover:text-dark-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-dark-text/70 hover:text-primary dark:hover:text-dark-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-dark-text/70 hover:text-primary dark:hover:text-dark-primary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Terug naar alle artikelen</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-8">Gerelateerde Artikelen</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white dark:bg-dark-accent/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/buitenschilderwerk.jpeg"
                  alt="Onderhoudstips voor Buitenschilderwerk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-600 dark:text-dark-text/70">8 januari 2024</time>
                <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text mt-2 mb-3">Onderhoudstips voor Buitenschilderwerk</h2>
                <p className="text-gray-600 dark:text-dark-text/80 mb-4">Praktische tips om uw buitenschilderwerk in topconditie te houden.</p>
                <a
                  href="/blog/2"
                  className="text-gray-900 dark:text-dark-text font-medium hover:text-gray-600 dark:hover:text-dark-text/70 transition-colors"
                >
                  Lees meer →
                </a>
              </div>
            </article>
            <article className="bg-white dark:bg-dark-accent/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/binnenschilderwerk.jpeg"
                  alt="De Beste Verfkleuren voor 2024"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-600 dark:text-dark-text/70">15 januari 2024</time>
                <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text mt-2 mb-3">De Beste Verfkleuren voor 2024</h2>
                <p className="text-gray-600 dark:text-dark-text/80 mb-4">Ontdek de trending kleuren voor dit jaar en hoe u deze kunt toepassen in uw interieur.</p>
                <a
                  href="/blog/1"
                  className="text-gray-900 dark:text-dark-text font-medium hover:text-gray-600 dark:hover:text-dark-text/70 transition-colors"
                >
                  Lees meer →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
} 