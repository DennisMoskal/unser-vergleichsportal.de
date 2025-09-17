"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

// Wiederverwendbare Header-Komponente
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("versicherungen")

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash && ["versicherungen", "banking", "tierversicherungen", "trading"].includes(hash)) {
      scrollToSection(hash)
    }
  }, [])

  return (
    <>
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <SmartFinanzLogo className="text-xl" />
          </div>
          <button
            className="sm:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen/schließen"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobiles Menü */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-6 py-4 space-y-6" aria-label="Mobiles Menü">
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Finanzprodukte</h2>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
                    { key: 'haustierversicherung', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
                    { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
                    { key: 'versicherungen', label: 'Versicherungen', url: '/versicherungen', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setActiveCategory(key)
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Weitere Produkte</h2>
                <div className="grid grid-cols-2 gap-2">
                  <ul className="flex flex-col gap-2 text-base">
                    {[
                      { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
                      { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
                      { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
                      { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveCategory(key)
                          }}
                          aria-label={`${label} vergleichen (externer Link)`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 text-base">
                    {[
                      { key: 'mietwagen', label: 'Mietwagen', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false },
                      { key: 'oekostrom', label: 'Ökostrom', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
                      { key: 'reise', label: 'Reise', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
                      { key: 'strom', label: 'Strom', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveCategory(key)
                          }}
                          aria-label={`${label} vergleichen (externer Link)`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Unternehmen</h2>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: 'karriere', label: 'Karriere', url: '/karriere', isInternal: true },
                    { key: 'kontakt', label: 'Kontakt', url: '/kontakt', isInternal: true },
                    { key: 'partnerprogramm', label: 'Partnerprogramm', url: '/partnerprogramme', isInternal: true },
                    { key: 'ueber-uns', label: 'Über uns', url: '/ueber-uns', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setActiveCategory(key)
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Rechtliches</h2>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: 'agb', label: 'AGB', url: '/agb', isInternal: true },
                    { key: 'cookie-richtlinie', label: 'Cookie-Richtlinie', url: '/cookie-richtlinie', isInternal: true },
                    { key: 'datenschutz', label: 'Datenschutz', url: '/datenschutz', isInternal: true },
                    { key: 'impressum', label: 'Impressum', url: '/impressum', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setActiveCategory(key)
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-4">
                <Button
                  className="w-auto bg-green-600 text-white font-medium text-base px-4 py-2 transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Startseite
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Kategorie-Navigation */}
      <section className="bg-white py-4 border-b" id="versicherungen">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-base">
            {[
              { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
              { key: 'haustierversicherung', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
              { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
              { key: 'versicherungen', label: 'Versicherung', url: '/versicherungen', isInternal: true },
              { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
              { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
              { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
              { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
              { key: 'mietwagen', label: 'Mietwagen', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false },
              { key: 'oekostrom', label: 'Ökostrom', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
              { key: 'reise', label: 'Reise', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
              { key: 'strom', label: 'Strom', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
            ].map(({ key, label, url, isInternal }) => (
              <li key={key}>
                {isInternal ? (
                  <Link
                    href={url}
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setActiveCategory(key)}
                    aria-label={`Zu ${label} navigieren`}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setActiveCategory(key)}
                    aria-label={`${label} vergleichen (externer Link)`}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default function KontaktPage() {
  useEffect(() => {
    document.title = "Kontakt unser-vergleichsportal.de"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Kontaktieren Sie unser-vergleichsportal.de für Fragen zu Finanzvergleichen, Partnerschaften oder Karrieremöglichkeiten. Unser Team in Bonn steht Ihnen zur Verfügung."
      )
    }
    // Add additional meta tags
    const metaKeywords = document.createElement('meta')
    metaKeywords.name = "keywords"
    metaKeywords.content = "Kontakt, SmartFinanz, unser-vergleichsportal.de, Finanzvergleiche, Kundenservice, Bonn"
    document.head.appendChild(metaKeywords)

    const metaRobots = document.createElement('meta')
    metaRobots.name = "robots"
    metaRobots.content = "index, follow"
    document.head.appendChild(metaRobots)

    const linkCanonical = document.createElement('link')
    linkCanonical.rel = "canonical"
    linkCanonical.href = "https://smartfinanz.de/kontakt"
    document.head.appendChild(linkCanonical)

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaKeywords)
      document.head.removeChild(metaRobots)
      document.head.removeChild(linkCanonical)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero-Bereich */}
      <section className="bg-green-600 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Kontaktieren Sie SmartFinanz unser-vergleichsportal.de
          </h2>
          <p className="text-sm sm:text-base text-green-100 mb-6 max-w-2xl mx-auto">
            Unser Team steht Ihnen für alle Fragen zu Finanzvergleichen, Partnerschaften oder Karrieremöglichkeiten zur Verfügung. Nehmen Sie Kontakt auf – wir freuen uns auf Sie!
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
            Ob per Telefon, E-Mail oder vor Ort – wir sind für Sie da. Unser Kundenservice-Team unterstützt Sie kompetent und schnell bei allen Anliegen rund um unsere Vergleichsdienste.
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
                  <span>Telefon: +49 172 2058855</span>
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
              Bei SmartFinanz unser-vergleichsportal.de steht Ihre Zufriedenheit an erster Stelle. Egal, ob Sie Unterstützung bei der Auswahl eines Finanzproduktes, Informationen zu unseren Partnerprogrammen oder Fragen zu Karrieremöglichkeiten haben – unser Team in Bonn ist für Sie da. Wir bieten Ihnen fundierte Beratung in vielen Bereichen des Lebens für bestmögliche Ergebnisse. 
            </p>
            <p>
              Für dringende Anfragen empfehlen wir unsere Telefon-Hotline, während E-Mail-Anfragen ideal für detaillierte Anliegen sind. Bitte beachten Sie unsere Öffnungszeiten, um eine schnelle Bearbeitung zu gewährleisten. Alternativ finden Sie auf unserer Website weitere Informationen zu unseren Dienstleistungen, einschließlich unserer unabhängigen Vergleichsangebote und Datenschutzrichtlinien.
            </p>
            <p>
              Lernen Sie uns besser kennen, indem Sie unsere <Link href="/ueber-uns" className="underline hover:text-green-600">Über-uns-Seite</Link> besuchen oder sich direkt mit uns in Verbindung setzen.
            </p>
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
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.location.href = "tel:+491722058855"}>
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
              </div>
            </div>
            
            <div>
              <span className="font-semibold mb-3 text-xl">Finanzprodukte</span>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/banking" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Banking"
                  >
                    Banking
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tierversicherungen" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Haustierversicherung"
                  >
                    Haustierversicherung
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/trading" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Trading"
                  >
                    Trading
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/versicherungen" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Versicherungen"
                  >
                    Versicherungen
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <span className="font-semibold mb-3 text-xl">Weitere Produkte</span>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-base text-gray-400">
                  <li>
                    <a 
                      href="https://www.c24n.de/ducwCtq" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="DSL Vergleich (externer Link)"
                    >
                      DSL
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/Uxudvkj" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Gasvergleich (externer Link)"
                    >
                      Gas
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/5R17qbN" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Handytarif vergleichen (externer Link)"
                    >
                      Handytarif
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/RYXPGyh" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Kreditkarten vergleichen (externer Link)"
                    >
                      Kreditkarte
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2 text-base text-gray-400">
                  <li>
                    <a 
                      href="https://www.c24n.de/FZ9nd0R" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Mietwagen vergleichen (externer Link)"
                    >
                      Mietwagen
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/zxy0WKh" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Ökostrom vergleichen (externer Link)"
                    >
                      Ökostrom
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/EieKR0E" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Reise vergleichen (externer Link)"
                    >
                      Reise
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/RYXPGyh" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Stromvergleich (externer Link)"
                    >
                      Strom
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <span className="font-semibold mb-3 text-xl">Unternehmen</span>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/karriere" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Karriere"
                  >
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/kontakt" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Kontakt"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/partnerprogramme" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Partnerprogramm"
                  >
                    Partnerprogramm
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/ueber-uns" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Über uns"
                  >
                    Über uns
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <span className="font-semibold mb-3 text-xl">Rechtliches</span>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/agb" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="AGB"
                  >
                    AGB
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/cookie-richtlinie" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Cookie-Richtlinie"
                  >
                    Cookie-Richtlinie
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/datenschutz" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Datenschutz"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/impressum" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Impressum"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-base text-gray-400 mb-4">
              © 2025 SmartFinanz unser-vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/" aria-label="Zurück zur Startseite">
              <Button 
                className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
              >
                Startseite
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
            "name": "Kontakt unser-vergleichsportal.de",
            "url": "https://smartfinanz.de/kontakt",
            "description": "Kontaktieren Sie unser-vergleichsportal.de für Fragen zu Finanzvergleichen, Partnerschaften oder Karrieremöglichkeiten. Unser Team in Bonn steht Ihnen zur Verfügung.",
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
                  "telephone": "+491722058855",
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
              ],
              "sameAs": ["https://www.facebook.com/smartfinanz", "https://www.twitter.com/smartfinanz"]
            }
          })
        }}
      />
    </div>
  )
}
