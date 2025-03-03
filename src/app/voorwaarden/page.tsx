'use client'

import Image from 'next/image'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/terms-hero.jpg"
            alt="Voorwaarden"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-800/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Algemene Voorwaarden</h1>
          <p className="text-xl">Onze afspraken voor een prettige samenwerking</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Algemeen</h2>
          <p className="text-gray-600 mb-6">
            Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Arnhem Schildersbedrijf
            en haar klanten. Door gebruik te maken van onze diensten gaat u akkoord met deze voorwaarden.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Offertes en Overeenkomsten</h3>
          <p className="text-gray-600 mb-6">
            Alle offertes zijn vrijblijvend en 30 dagen geldig. Een overeenkomst komt tot stand na
            schriftelijke bevestiging van beide partijen.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Offertes zijn gebaseerd op de door u verstrekte informatie</li>
            <li>Prijzen zijn exclusief BTW tenzij anders vermeld</li>
            <li>Aanvullende werkzaamheden worden apart geoffreerd</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Uitvoering</h3>
          <p className="text-gray-600 mb-6">
            Wij voeren alle werkzaamheden uit volgens de geldende normen en kwaliteitseisen in de
            schildersbranche.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Gebruik van professionele materialen</li>
            <li>Vakkundige uitvoering</li>
            <li>Naleving van veiligheidsvoorschriften</li>
            <li>Oplevering volgens afspraak</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Garantie</h3>
          <p className="text-gray-600 mb-6">
            Op al onze werkzaamheden verlenen wij garantie volgens de voorwaarden van de
            schildersbranche. De garantietermijn wordt vastgelegd in de overeenkomst.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Betaling</h3>
          <p className="text-gray-600 mb-6">
            Betalingsvoorwaarden:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Facturen dienen binnen 14 dagen te worden voldaan</li>
            <li>Bij grotere projecten kunnen termijnbetalingen worden afgesproken</li>
            <li>Bij niet-tijdige betaling kunnen extra kosten in rekening worden gebracht</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h3>
          <p className="text-gray-600">
            Voor vragen over onze voorwaarden kunt u contact opnemen via:
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