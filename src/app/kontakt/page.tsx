"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
      </svg>
      <span className="font-bold">martFinanz</span>
    </div>
  )
}

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
          </div>
          <div className="flex items-center space-x-4">
            {/* Button entfernt */}
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Kontakt</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Wir freuen uns darauf, von Ihnen zu hören! Hier finden Sie alle Informationen, um mit uns in Kontakt zu treten, sei es für Fragen zu unseren Dienstleistungen, Partnerschaften oder Karrieremöglichkeiten.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Kontaktinformationen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Unser Team steht Ihnen gerne zur Verfügung, um Ihre Anliegen zu bearbeiten. Sie können uns über verschiedene Kanäle erreichen, um Unterstützung zu erhalten oder weitere Informationen zu unseren Angeboten zu erhalten. Wir legen großen Wert auf eine schnelle und zuverlässige Kommunikation.
              </p>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>Telefon: 01722058855</span>
                </div>
                <p>Unsere Hotline ist montags bis freitags von 9:00 bis 17:00 Uhr erreichbar.</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>E-Mail: smart-finanz@yahoo.com</span>
                </div>
                <p>Schreiben Sie uns jederzeit eine Nachricht, und wir antworten Ihnen so schnell wie möglich.</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Adresse: Westpreußenstraße 26, 53119 Bonn, Deutschland</span>
                </div>
                <p>Besuchen Sie uns vor Ort nach vorheriger Absprache.</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Öffnungszeiten</span>
                </div>
                <p>Montag bis Freitag: 9:00 - 17:00 Uhr | Samstag und Sonntag: Geschlossen</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Zusätzliche Informationen */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Wie können wir Ihnen helfen?</h3>
          <div className="text-gray-600 space-y-6">
            <p>
              Egal, ob Sie Fragen zu unseren Finanzvergleichsprodukten, Unterstützung bei der Nutzung unserer Plattform benötigen oder Informationen zu unseren Partnerprogrammen und Karrieremöglichkeiten suchen – unser Kundenservice-Team ist für Sie da. Wir bieten Ihnen eine umfassende Beratung und stehen Ihnen bei allen Anliegen zur Seite. Unsere Experten verfügen über fundiertes Wissen in den Bereichen Versicherungen, Banking, Tierversicherungen und Krypto-Trading, sodass Sie von maßgeschneiderter Unterstützung profitieren können.
            </p>
            <p>
              Für dringende Anfragen empfehlen wir den Telefonkontakt, während E-Mail-Anfragen für detaillierte oder weniger zeitkritische Themen geeignet sind. Bitte beachten Sie unsere Öffnungszeiten, um eine reibungslose Kommunikation zu gewährleisten. Alternativ können Sie auch unsere Website regelmäßig besuchen, um aktuelle Updates und weitere Kontaktmöglichkeiten zu finden.
            </p>
            <p>
              Wir freuen uns darauf, Sie kennenzulernen und Ihnen bestmöglich zu helfen. Ihre Zufriedenheit ist unser oberstes Ziel, und wir arbeiten stets daran, Ihre Erwartungen zu übertreffen. Besuchen Sie auch unsere anderen Seiten wie „Über uns“ oder „Karriere“, um mehr über unser Unternehmen zu erfahren.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Bleiben Sie mit uns verbunden</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Informieren Sie sich über unsere neuesten Angebote und Dienstleistungen, indem Sie uns kontaktieren oder unsere Website regelmäßig besuchen. Wir sind hier, um Ihnen zu helfen und Ihre Fragen zu beantworten.
          </p>
          {/* Button entfernt */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-5">
            <div>
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
                <span className="text-sm text-gray-400 mt-1">Unser-Vergleichsportal.de</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland. Über 500 geprüfte Anbieter, mehr als 100.000 zufriedene Kunden.
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary" className="bg-gray-800 text-green-400 border-green-400">
                  TÜV Zertifiziert
                </Badge>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Finanzprodukte</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/versicherungen" className="hover:text-white transition-colors">
                    Versicherungsvergleich
                  </Link>
                </li>
                <li>
                  <Link href="/banking" className="hover:text-white transition-colors">
                    Girokonto & Kredite
                  </Link>
                </li>
                <li>
                  <Link href="/tierversicherungen" className="hover:text-white transition-colors">
                    Tierkrankenversicherung
                  </Link>
                </li>
                <li>
                  <Link href="/trading" className="hover:text-white transition-colors">
                    Online Broker Vergleich
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Weitere Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.c24n.de/ducwCtq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DSL Vergleich</a></li>
                <li><a href="https://www.c24n.de/5R17qbN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Handytarife</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Stromvergleich</a></li>
                <li><a href="https://www.c24n.de/Uxudvkj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Gasvergleich</a></li>
                <li><a href="https://www.c24n.de/EieKR0E" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reisen</a></li>
                <li><a href="https://www.c24n.de/zxy0WKh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ökostrom</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kreditkarte</a></li>
                <li><a href="https://www.c24n.de/FZ9nd0R" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mietwagen</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Unternehmen</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/ueber-uns" className="hover:text-white transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/partnerprogramme" className="hover:text-white transition-colors">
                    Partnerprogramme
                  </Link>
                </li>
                <li>
                  <Link href="/karriere" className="hover:text-white transition-colors">
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Rechtliches</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400 mb-4">
              © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
