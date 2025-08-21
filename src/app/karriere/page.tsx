"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function KarrierePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Button entfernt */}
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Karriere bei SmartFinanz</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Bei SmartFinanz öffnen sich zahlreiche Möglichkeiten, Ihre berufliche Zukunft zu gestalten. Wir suchen engagierte Talente, die gemeinsam mit uns die Welt der Finanzvergleiche voranbringen möchten. Erfahren Sie mehr über unsere Unternehmenskultur, unsere Werte und die Karrieremöglichkeiten, die wir bieten.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Warum SmartFinanz?</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                SmartFinanz ist mehr als nur ein Unternehmen – wir sind eine Gemeinschaft von Fachleuten, die sich der Förderung finanzieller Transparenz verschrieben haben. Unsere Mitarbeiter profitieren von einem unterstützenden Arbeitsumfeld, das Wachstum und persönliche Entwicklung fördert. Wir legen großen Wert auf Teamarbeit, Innovation und die Bereitstellung von erstklassigen Dienstleistungen für unsere Kunden. Dazu gehören attraktive Vergütungsstrukturen, die Möglichkeit zur flexiblen Gestaltung der Arbeitszeiten sowie umfassende Weiterbildungsprogramme, die Ihnen helfen, Ihre Karriereziele zu erreichen.
              </p>
              <p>
                Unsere Unternehmenskultur zeichnet sich durch Offenheit, Respekt und eine klare Orientierung am Kunden aus. Wir bieten Ihnen die Chance, an spannenden Projekten mitzuwirken, sei es im Bereich der Produktentwicklung, des Marketings oder des Kundensupports. Unser Ziel ist es, Ihnen nicht nur einen Job, sondern eine langfristige Perspektive zu bieten, in der Sie sich entfalten und Ihre Fähigkeiten voll ausschöpfen können.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offene Stellen */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Aktuelle Karrieremöglichkeiten</h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Kundenberater (m/w/d)</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>
                  Als Kundenberater stehen Sie im direkten Kontakt mit unseren Nutzern und unterstützen sie bei der Auswahl der besten Finanzprodukte. Der Standort ist Berlin, und die Position ist in Vollzeit ab sofort verfügbar. Idealerweise bringen Sie Erfahrung im Kundenservice mit und eine Leidenschaft für Finanzthemen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Marketing-Manager (m/w/d)</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>
                  Der Marketing-Manager gestaltet unsere Kampagnen und steigert die Sichtbarkeit von SmartFinanz. Diese remote Position ist in Vollzeit ab sofort verfügbar. Erfahrung im digitalen Marketing und Kreativität sind von Vorteil, um innovative Strategien zu entwickeln.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">IT-Entwickler (m/w/d)</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>
                  Als IT-Entwickler arbeiten Sie an der Weiterentwicklung unserer Plattform. Der Standort ist München, und die Position ist in Vollzeit ab sofort verfügbar. Kenntnisse in modernen Programmiersprachen und ein Interesse an Finanztechnologien sind erforderlich.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Falls keine der aktuellen Positionen zu Ihnen passt, freuen wir uns über Initiativbewerbungen. Schicken Sie uns einfach Ihre Unterlagen, und wir werden uns bei passenden Gelegenheiten melden. Weitere Informationen finden Sie auf unserer Karriereseite oder über unsere Kontaktmöglichkeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Gestalten Sie Ihre Zukunft</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Entdecken Sie die Möglichkeiten, die eine Karriere bei SmartFinanz bietet. Informieren Sie sich über unsere Werte, unser Team und wie Sie Teil unserer Erfolgsgeschichte werden können. Besuchen Sie unsere Website regelmäßig, um neue Stellenangebote zu finden.
          </p>
          {/* Button entfernt */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <Briefcase className="h-5 w-5 sm:h-6 w-6 text-green-500" />
                <h5 className="text-lg sm:text-xl font-bold">SmartFinanz</h5>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Produkte</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/versicherungen" className="hover:text-white transition-colors">Versicherungen</Link></li>
                <li><Link href="/banking" className="hover:text-white transition-colors">Banking</Link></li>
                <li><Link href="/tierversicherungen" className="hover:text-white transition-colors">Tierversicherung</Link></li>
                <li><Link href="/krypto" className="hover:text-white transition-colors">Krypto Trading</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Unternehmen</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
                <li><Link href="/partnerprogramme" className="hover:text-white transition-colors">Partnerprogramme</Link></li>
                <li><Link href="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Rechtliches</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-4 sm:mt-8 pt-4 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 SmartFinanz. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
