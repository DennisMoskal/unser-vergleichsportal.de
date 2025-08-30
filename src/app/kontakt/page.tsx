"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.title = "Kontakt | SmartFinanz - Ihr Experte für Finanzvergleiche"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Kontaktieren Sie SmartFinanz für Fragen zu Finanzvergleichen, Partnerschaften oder Karrieremöglichkeiten. Unser Team in Bonn steht Ihnen zur Verfügung."
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
            <span className="text-sm text-gray-600 mt-1">Unser-Vergleichsportal.de</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/versicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Versicherungen
            </Link>
            <Link href="/banking" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Banking
            </Link>
            <Link href="/tierversicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Tierversicherung
            </Link>
            <Link href="/trading" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Trading
            </Link>
            <Link href="#kundenbewertungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Kundenbewertungen
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
              Vergleich starten
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu öffnen/schließen"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menü */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="/versicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Versicherungen
              </Link>
              <Link
                href="/banking"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Banking
              </Link>
              <Link
                href="/tierversicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tierversicherung
              </Link>
              <Link
                href="/trading"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                href="#kundenbewertungen"
                className="block text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kundenbewertungen
              </Link>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
                Vergleich starten
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero-Bereich */}
      <section className="bg-green-600 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Kontaktieren Sie SmartFinanz
          </h2>
          <p className="text-sm sm:text-base text-green-100 mb-6 max-w-2xl mx-auto">
            Unser Team in Bonn steht Ihnen für alle Fragen zu Finanzvergleichen, Partnerschaften oder Karrieremöglichkeiten zur Verfügung. Nehmen Sie Kontakt auf – wir freuen uns auf Sie!
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.location.href = "mailto:info@unser-vergleichsportal.de"}>
            Jetzt kontaktieren
          </Button>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">So erreichen Sie uns</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Ob per Telefon, E-Mail oder vor Ort – wir sind für Sie da. Unser Kundenservice-Team in Bonn unterstützt Sie kompetent und schnell bei allen Anliegen rund um unsere Vergleichsdienste.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Kontaktinformationen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Unser Team steht Ihnen für Fragen zu Finanzprodukten, Partnerschaften oder Karrieremöglichkeiten zur Verfügung. Wir bieten Ihnen eine persönliche Beratung und legen Wert auf höchste Datenschutzstandards.
              </p>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>Telefon: +49 228 763 699 12</span>
                </div>
                <p>Erreichbar Montag bis Freitag von 9:00 bis 17:00 Uhr.</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>E-Mail: <a href="mailto:info@unser-vergleichsportal.de" className="hover:text-green-600">info@unser-vergleichsportal.de</a></span>
                </div>
                <p>Schreiben Sie uns jederzeit – wir antworten innerhalb von 24 Stunden.</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Adresse: Westpreußenstraße 26, 53119 Bonn, Deutschland</span>
                </div>
                <p>Besuche nach vorheriger Terminvereinbarung.</p>
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
              Bei SmartFinanz steht Ihre Zufriedenheit an erster Stelle. Egal, ob Sie Unterstützung bei der Auswahl eines Finanzproduktes, Informationen zu unseren Partnerprogrammen oder Fragen zu Karrieremöglichkeiten haben – unser Team in Bonn ist für Sie da. Wir bieten Ihnen fundierte Beratung in vielen Bereichen des Lebens für bestmögliche Ergebnisse. 
            </p>
            <p>
              Für dringende Anfragen empfehlen wir unsere Telefon-Hotline, während E-Mail-Anfragen ideal für detaillierte Anliegen sind. Bitte beachten Sie unsere Öffnungszeiten, um eine schnelle Bearbeitung zu gewährleisten. Alternativ finden Sie auf unserer Website weitere Informationen zu unseren Dienstleistungen, einschließlich unserer unabhängigen Vergleichsangebote und Datenschutzrichtlinien.
            </p>
            <p>
              Als TÜV-zertifiziertes Vergleichsportal legen wir großen Wert auf Transparenz und Kundennähe. Lernen Sie uns besser kennen, indem Sie unsere <Link href="/ueber-uns" className="underline hover:text-green-600">Über-uns-Seite</Link> besuchen oder sich direkt mit uns in Verbindung setzen.
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="secondary" className="bg-white border text-green-600">
                TÜV Zertifiziert
              </Badge>
              <Badge variant="secondary" className="bg-white border text-green-600">
                4.8/5 Sterne
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Bleiben Sie mit uns verbunden</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Haben Sie Fragen oder benötigen Sie Unterstützung? Kontaktieren Sie uns direkt oder besuchen Sie unsere Website für die neuesten Angebote und Informationen.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.location.href = "mailto:info@unser-vergleichsportal.de"}>
              E-Mail senden
            </Button>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.location.href = "tel:+4922876369912"}>
              Jetzt anrufen
            </Button>
          </div>
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

      {/* Structured Data für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "SmartFinanz Kontakt",
            "url": "https://smartfinanz.de/kontakt",
            "description": "Kontaktieren Sie SmartFinanz für Unterstützung bei Finanzvergleichen, Partnerschaften oder Karrieremöglichkeiten. Unser Team in Bonn steht Ihnen zur Verfügung.",
            "publisher": {
              "@type": "Organization",
              "name": "SmartFinanz",
              "url": "https://smartfinanz.de",
              "logo": "https://smartfinanz.de/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Westpreußenstraße 26",
                "addressLocality": "Bonn",
                "addressRegion": "Nordrhein-Westfalen",
                "postalCode": "53119",
                "addressCountry": "DE"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+4922876369912",
                  "contactType": "Kundenservice",
                  "email": "info@unser-vergleichsportal.de",
                  "availableLanguage": "Deutsch",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "17:00"
                  }
                }
              ]
            }
          })
        }}
      />
    </div>
  )
}
