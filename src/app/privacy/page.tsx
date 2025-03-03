'use client'

import Image from 'next/image'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/privacy-hero.jpg"
            alt="Privacy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-800/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Privacybeleid</h1>
          <p className="text-xl">Hoe wij omgaan met uw persoonlijke gegevens</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Uw Privacy is Belangrijk</h2>
          
          <p className="text-gray-600 mb-6">
            Arnhem Schildersbedrijf respecteert uw privacy en zorgt ervoor dat alle persoonlijke informatie
            die u ons verschaft vertrouwelijk wordt behandeld.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Verzameling van Persoonsgegevens</h3>
          <p className="text-gray-600 mb-6">
            Wij verzamelen en verwerken uw persoonsgegevens voor het uitvoeren van onze dienstverlening
            en om u te informeren over onze activiteiten. De gegevens die wij verzamelen kunnen zijn:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Naam en contactgegevens</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer</li>
            <li>Adresgegevens</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Gebruik van Persoonsgegevens</h3>
          <p className="text-gray-600 mb-6">
            Uw gegevens worden gebruikt voor:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Het uitvoeren van overeenkomsten</li>
            <li>Het versturen van offertes</li>
            <li>Communicatie over onze diensten</li>
            <li>Het verbeteren van onze dienstverlening</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Bewaartermijn</h3>
          <p className="text-gray-600 mb-6">
            Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is voor de doeleinden
            waarvoor deze zijn verzameld.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Uw Rechten</h3>
          <p className="text-gray-600 mb-6">
            U heeft het recht om:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Uw persoonsgegevens in te zien</li>
            <li>Uw persoonsgegevens te corrigeren</li>
            <li>Uw persoonsgegevens te laten verwijderen</li>
            <li>Bezwaar te maken tegen de verwerking</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
          <p className="text-gray-600">
            Voor vragen over ons privacybeleid kunt u contact opnemen via:
            <br />
            E-mail: <a href="mailto:info@arnhem-schildersbedrijf.nl" className="text-blue-800 hover:underline">info@arnhem-schildersbedrijf.nl</a>
            <br />
            Telefoon: <a href="tel:+31XXXXXXXXXX" className="text-blue-800 hover:underline">+31 (0)6 XXXXXXXX</a>
          </p>
        </div>
      </div>
    </div>
  )
}