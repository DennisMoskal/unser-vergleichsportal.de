"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" aria-label="Zurück zur Startseite">
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
            <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
          </svg>
          <span className="font-bold">martFinanz</span>
        </div>
        <span className="text-sm mt-1">Unser-Vergleichsportal.de</span>
      </div>
    </Link>
  )
}

// Reusable Header Component
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("versicherungen")

  // Funktion zum Scrollen zu einem Abschnitt und Setzen der aktiven Kategorie
  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Hash-Änderung verarbeiten, wenn die Seite geladen wird
  useEffect(() => {
    const hash = window.location.hash.substring(1) // Entferne das '#' aus dem Hash
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

        {/* Mobile Menü */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4" aria-label="Mobile Menü">
              <div>
                <h2 className="font-semibold text-2xl mb-3">Finanzprodukte</h2>
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
                        className="block px-2 py-1 font-medium transition-all duration-300 ease-in-out text-base hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                <h2 className="font-semibold text-2xl mb-3">Weitere Produkte</h2>
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
                          className="block px-2 py-1 font-medium transition-all duration-300 ease-in-out text-base hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                          className="block px-2 py-1 font-medium transition-all duration-300 ease-in-out text-base hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                <h2 className="font-semibold text-2xl mb-3">Unternehmen</h2>
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
                        className="block px-2 py-1 font-medium transition-all duration-300 ease-in-out text-base hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                <h2 className="font-semibold text-2xl mb-3">Rechtliches</h2>
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
                        className="block px-2 py-1 font-medium transition-all duration-300 ease-in-out text-base hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
              <Button
                className="w-full bg-green-600 text-white font-medium text-base py-2 transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Startseite
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Kategorie-Navigation */}
      <section className="bg-white py-4 border-b" id="versicherungen">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap gap-2 sm:gap-4 text-base">
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
                    className="block px-2 sm:px-4 py-1 sm:py-2 font-medium transition-all duration-300 ease-in-out text-base hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                    className="block px-2 sm:px-4 py-1 sm:py-2 font-medium transition-all duration-300 ease-in-out text-base hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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

const providerData = [
  {
    name: "Tarifcheck.de",
    rating: 4.5,
    features: [
      "Über 20 Jahre Erfahrung als Vergleichsportal",
      "100% kostenloser und unverbindlicher Vergleich",
      "Vergleich von über 300 Kfz-Versicherungstarifen",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 09/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Über 3.194 verifizierte Kundenbewertungen",
      "Deutschlands drittgrößtes Vergleichsportal",
      "Bis zu 1.000€ jährlich sparen bei Kfz-Versicherungen"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 120€ Neukundenbonus",
    logo: "🏆",
    url: "https://www.tarifcheck.de/girokonto/",
    badge: "Top Empfehlung"
  },
  {
    name: "CHECK24",
    rating: 4.7,
    features: [
      "Marktführer mit über 90% Marktabdeckung bei Kfz-Versicherungen",
      "Über 25 Testsiege im Kfz-Versicherungsvergleich (Handelsblatt 09/2024)",
      "Vergleich von über 330 Kfz-Versicherungstarifen",
      "Nirgendwo-Günstiger-Garantie für beste Preise",
      "Kostenlose Beratung durch 300 Versicherungsexperten (08:00–22:00 Uhr)",
      "Über 98% Kundenzufriedenheit",
      "Vermittlung von Versicherungen mit Provisionstransparenz",
      "Zusätzliche Vergleiche für Strom, Gas und Reisen"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 100€ Cashback",
    logo: "✅",
    url: "https://www.check24.de/versicherungen/",
    badge: "Top Empfehlung"
  },
  {
    name: "InShared",
    rating: 4.6,
    features: [
      "Günstige Autoversicherung mit Top-Preisen",
      "Geld-zurück-Garantie bei weniger Schäden",
      "24/7 Notfallservice für schnelle Hilfe",
      "Einfacher und digitaler Vertragsabschluss",
      "Transparente Beitragsberechnung online",
      "Partnerschaften mit Roland Assistance und Carglass",
      "Kfz-Versicherung vergleichen und sparen"
    ],
    price: "ab 9,90€/Monat",
    bonus: "Geld-zurück-Garantie",
    logo: "🚗",
    url: "https://www.awin1.com/awclick.php?gid=497362&mid=87589&awinaffid=2524533&linkid=3711034&clickref=",
    badge: "Top Kfz-Versicherung"
  },
  {
    name: "AXA",
    rating: 4.5,
    features: [
      "Individueller Schutz für Hausrat und Eigentum",
      "Leistungsstarke Tarife nach Ihren Bedürfnissen",
      "Inklusive Smart Home Basisabsicherung",
      "Schnelle Schadenmeldung online oder telefonisch",
      "Kundenservice rund um die Uhr verfügbar",
      "Tarifrechner für maßgeschneiderte Angebote",
      "Testsieger bei Stiftung Warentest (2024)"
    ],
    price: "ab 8,52€/Jahr",
    bonus: "Kostenloser Tarifrechner",
    logo: "🏠",
    url: "https://www.awin1.com/awclick.php?gid=450648&mid=11329&awinaffid=2524533&linkid=3268909&clickref=",
    badge: "Top Hausratversicherung"
  }
]

export default function Versicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Meta-Tags für SEO */}
      <Head>
        <title>Versicherungsvergleich 2025: Die besten Versicherungen im Test</title>
        <meta name="description" content="Vergleichen Sie mit SmartFinanz über 300 Versicherungen. Kostenlos, transparent und mit Top-Bewertungen. Sparen Sie bis zu 1.000€ jährlich mit unseren Testsiegern!" />
        <meta name="keywords" content="Versicherungsvergleich, Kfz-Versicherung, Hausratversicherung, SmartFinanz, Testsieger 2025, Haustierversicherung" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Header />

      {/* Einführungsabschnitt (Dark Green) */}
      <section className="py-8 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base mb-6">
              Finden Sie die passende Versicherung für Ihre Bedürfnisse. Vergleichen Sie über 300 Versicherungsprodukte kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger bieten Ihnen erstklassige Konditionen und zuverlässigen Schutz.
            </p>
          </div>
        </div>
      </section>

      {/* Button Section (White) */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mt-2 text-2xl font-bold">
              Sie möchten Vermögen bilden?
            </h2>
            <div className="mt-3 flex justify-center">
              <Button asChild size="lg" className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                <Link
                  href="/trading"
                  aria-label="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                  title="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                >
                  Jetzt Broker vergleichen <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">So finden Sie die passende Versicherung</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2">Vergleichen Sie Angebote</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Nutzen Sie unseren kostenlosen Vergleich, um die besten Versicherungen zu finden. Über 300 Angebote von Top-Anbietern wie Tarifcheck.de und CHECK24 stehen Ihnen zur Verfügung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Achten Sie auf Bewertungen</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Unsere Anbieter wie InShared und AXA haben Top-Bewertungen (z. B. eKomi 4,6/5). Vertrauen Sie auf verifizierte Kundenmeinungen für Ihre Entscheidung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Prüfen Sie Konditionen</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Achten Sie auf Leistungsumfang, Selbstbeteiligung und Vertragsflexibilität, wie sie z. B. von CHECK24 und AXA angeboten werden.</li>
            </ul>
            <h2 className="text-3xl font-bold mb-6">Die besten Versicherungen 2025</h2>
            <h3 className="text-lg font-bold mb-2">Was macht eine gute Versicherung aus?</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Eine gute Versicherung bietet umfassenden Schutz zu fairen Preisen, transparente Bedingungen und schnelle Schadenregulierung. Achten Sie auf versteckte Ausschlüsse und Einschränkungen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">💡 Spartipp:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Die besten Versicherungen sparen Ihnen bis zu 1.000€ jährlich im Vergleich zu überteuerten Tarifen. Zusätzlich locken viele Anbieter mit Cashback oder Boni.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Versicherungsvergleich - Testsieger Eigenschaften</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Umfassender Schutz für alle Lebenslagen</li>
              <li>Kostenlose Beratung und Tarifrechner</li>
              <li>Schnelle Schadenregulierung</li>
              <li>Transparente Vertragsbedingungen</li>
              <li>Flexible Anpassungsmöglichkeiten</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.check24.de/versicherungen/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Versicherungen vergleichen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Testsieger Versicherungsvergleich 2025</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {provider.badge && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-base transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-500 hover:to-yellow-600 z-10">
                    {provider.badge}
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-xl font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-base font-medium text-gray-600">{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="text-center border-b pb-2 mb-4">
                    <p className="text-xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-1 border-green-200 text-base text-green-700">{provider.bonus}</Badge>
                  </div>
                  <ul className="space-y-1 flex-1 overflow-auto">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-base">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={provider.url} 
                    target={provider.url.startsWith('http') ? '_blank' : '_self'}
                    rel={provider.url.startsWith('http') ? 'sponsored' : undefined}
                  >
                    <Button className="w-full bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-auto">
                      Jetzt abschließen*
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-base text-gray-600 p-4">
            <p>
              *Wir erhalten eine Provision für Käufe über diese Links.
            </p>
          </div>
        </div>
      </section>

      {/* Tierversicherung CTA-Box */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-800">
                  Sie möchten zusätzlich Ihre Haustiere absichern – Tierarzt- &amp; OP-Kosten im Griff
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Von Basis bis OP-Schutz: Vergleichen Sie Tarife für Hunde &amp; Katzen – schnell, transparent und 100% online.
                </p>
              </div>
              <Link
                href="/tierversicherungen"
                aria-label="Tierversicherung vergleichen – Schutz für Hund & Katze"
                title="Tierversicherung vergleichen – Schutz für Hund & Katze"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Zu den Tierversicherungen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* E-Bike-Versicherung Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">E-Bike-Versicherung: Optimaler Schutz für Ihr E-Bike</h1>
          <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
            <p className="mb-4">
              Eine <strong>E-Bike-Versicherung</strong> schützt Ihr Elektrofahrrad vor Diebstahl, Schäden durch Unfälle, Vandalismus oder technische Defekte.
              Besonders für teure E-Bikes ist eine Absicherung essenziell, um hohe Reparatur- oder Ersatzkosten zu vermeiden. Mit Anbietern wie hepster
              erhalten Sie flexible Tarife ohne Selbstbeteiligung und Altersbeschränkung, die sich an Ihren Bedarf anpassen.
            </p>
            <h3 className="text-xl font-semibold mb-4">Warum eine E-Bike-Versicherung sinnvoll ist</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Schutz vor Diebstahl, auch bei unterwegs abgestellten E-Bikes.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Abdeckung von Reparaturkosten bei Unfällen oder Vandalismus.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Keine Selbstbeteiligung für geringere Eigenkosten.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Flexible Laufzeiten im Monats- oder Jahresabo.</span></li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Worauf Sie bei der Auswahl achten sollten</h3>
            <p className="mb-4">Um die passende <strong>E-Bike-Versicherung</strong> zu finden, beachten Sie folgende Punkte:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Versicherungssumme</strong>: Stellen Sie sicher, dass der Wert Ihres E-Bikes vollständig abgedeckt ist.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Leistungsumfang</strong>: Prüfen Sie, ob Diebstahl, Unfallschäden und Batterie-Defekte eingeschlossen sind.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Flexibilität</strong>: Wählen Sie Tarife mit kurzen Laufzeiten für saisonale Nutzung.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Kundenbewertungen</strong>: Anbieter wie hepster sind Trusted Shops zertifiziert und punkten mit Top-Bewertungen.</span></li>
            </ul>
            <p className="mb-6">
              Mit der hepster E-Bike-Versicherung sichern Sie Ihr E-Bike einfach online ab. Wählen Sie zwischen Monats- oder Jahresabo, passen Sie die
              Versicherungsleistungen an und profitieren Sie von 100% digitaler Verwaltung. Starten Sie jetzt und schützen Sie Ihr E-Bike optimal!
            </p>
            <div className="text-center">
              <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=458089&mid=17549&awinaffid=2524533&linkid=3870155&clickref=" target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
                  Jetzt hepster E-Bike-Versicherung abschließen*
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reiseversicherung Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Reiseversicherung: Sorgenfrei unterwegs mit TravelSecure</h1>
          <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
            <p className="mb-4">
              Eine <strong>Reiseversicherung</strong> schützt Sie vor finanziellen Risiken wie Stornokosten, Krankheiten im Ausland oder Gepäckverlust. Ob
              Urlaub, Geschäftsreise oder Work & Travel – mit TravelSecure finden Sie maßgeschneiderte Tarife für Einzelpersonen, Familien, Gruppen oder
              junge Reisende. TravelSecure ist mehrfacher Testsieger bei Stiftung Warentest (01/2025, Note 1,4).
            </p>
            <h3 className="text-xl font-semibold mb-4">Warum eine Reiseversicherung sinnvoll ist</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Schutz vor Stornokosten bei Reiseabbruch oder -rücktritt.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Absicherung von Krankheitskosten im Ausland, inkl. Rücktransport.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Spezialtarife für Work & Travel, Au-Pair, Studenten oder Gruppen.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Jahresreiseversicherung für Vielreisende ohne Selbstbeteiligung.</span></li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Worauf Sie bei der Auswahl achten sollten</h3>
            <p className="mb-4">Um die passende <strong>Reiseversicherung</strong> zu finden, beachten Sie folgende Punkte:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Leistungsumfang</strong>: Prüfen Sie, ob Reiserücktritt, Reiseabbruch, Auslandskrankenversicherung oder Gepäckschutz enthalten sind.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Reisedauer</strong>: Wählen Sie Tarife für Kurzreisen (bis 56 Tage) oder Langzeitreisen (bis 365 Tage).</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Selbstbeteiligung</strong>: Entscheiden Sie sich für Tarife ohne Selbstbehalt für maximale Kostensicherheit.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Kundenbewertungen</strong>: TravelSecure punktet mit eKomi 4,3/5 und Focus Money „Beste Kundenhotline 2024“.</span></li>
            </ul>
            <p className="mb-6">
              Mit der TravelSecure Reiseversicherung sichern Sie Ihre Reisen einfach online ab. Ob Jahresreiseversicherung Reisekarte4you oder Spezialtarife
              für Gruppen und junge Reisende – TravelSecure bietet flexible Lösungen für jeden Reiseanlass. Starten Sie jetzt und reisen Sie sorgenfrei!
            </p>
            <div className="text-center">
              <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=505833&mid=106517&awinaffid=2524533&linkid=3795138&clickref=" target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
                  Jetzt TravelSecure Reiseversicherung abschließen*
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wohngebäudeversicherung Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Wohngebäudeversicherung: Optimaler Schutz für Ihr Zuhause</h1>
          <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
            <p className="mb-4">
              Eine <strong>Wohngebäudeversicherung</strong> ist für Hausbesitzer unverzichtbar, um Ihr Eigentum vor Schäden durch Feuer, Sturm, Hagel,
              Überschwemmung oder Vandalismus zu schützen. Sie deckt Reparatur-, Instandsetzungs- oder Wiederaufbaukosten für Ihr Haus und fest
              installierte Elemente wie Heizungsanlagen oder Einbauküchen ab. Mit einem <strong>Vergleich Wohngebäudeversicherung</strong> auf Plattformen wie
              Tarifcheck finden Sie maßgeschneiderte Tarife, die Ihren Bedürfnissen entsprechen und bis zu 500€ jährlich sparen können.
            </p>
            <h3 className="text-xl font-semibold mb-4">Warum eine Wohngebäudeversicherung sinnvoll ist</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Schutz vor Elementarschäden wie Überschwemmungen oder Sturm.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Absicherung von Reparaturkosten bei Leitungswasser- oder Feuerschäden.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Flexible Bausteine für individuelle Bedürfnisse, z. B. Photovoltaik oder Vandalismus.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Kostenloser und unverbindlicher Vergleich für optimale Tarife.</span></li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Worauf Sie bei der Auswahl achten sollten</h3>
            <p className="mb-4">Um die richtige <strong>Gebäudeversicherung</strong> zu finden, beachten Sie folgende Punkte:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Versicherungssumme</strong>: Stellen Sie sicher, dass die Versicherung den Wiederaufbauwert Ihres Hauses abdeckt.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Risiken</strong>: Wählen Sie Bausteine, die relevante Gefahren wie Elementarschäden oder Vandalismus abdecken.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Gleitender Neuwert</strong>: Nutzen Sie die gleitende Neuwertversicherung, um den Wert Ihres Hauses aktuell zu halten.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Kundenbewertungen</strong>: Anbieter wie Tarifcheck punkten mit Top-Bewertungen (z. B. Handelsblatt 09/2024).</span></li>
            </ul>
            <p className="mb-6">
              Mit Tarifcheck Wohngebäudeversicherung vergleichen Sie über 200 Tarife kostenlos und unverbindlich. Geben Sie einfach die Eckdaten Ihres
              Hauses ein, wählen Sie gewünschte Bausteine wie Elementarschutz oder Feuerschutz, und finden Sie in Sekunden den besten Tarif. Starten Sie
              jetzt Ihren Vergleich und sichern Sie Ihr Zuhause optimal ab!
            </p>
            <div className="text-center">
              <a rel="sponsored" href="https://www.tarifcheck.com/xLfTPmG" target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
                  Jetzt Wohngebäudeversicherung vergleichen*
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Krankenzusatzversicherung Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Krankenzusatzversicherung: Mehr Schutz für Ihre Gesundheit</h1>
          <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
            <p className="mb-4">
              Eine <strong>Krankenzusatzversicherung</strong> ergänzt Ihre gesetzliche Krankenversicherung und bietet zusätzlichen Schutz für Leistungen, die
              nicht oder nur teilweise abgedeckt sind. Dazu gehören Behandlungen wie <strong>Chefarztbehandlung</strong>, <strong>Einzelzimmer im Krankenhaus</strong> oder
              <strong> alternative Heilmethoden</strong> wie Homöopathie und Osteopathie. Besonders für Brillenträger ist eine <strong>Krankenversicherung für Brillen</strong>
              interessant, die Zuschüsse für Sehhilfen bietet.
            </p>
            <h3 className="text-xl font-semibold mb-4">Warum eine Krankenzusatzversicherung sinnvoll ist</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Kostenerstattung für Heilpraktikerbehandlungen und alternative Medizin.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Zuschüsse für Sehhilfen, Hörgeräte oder Lasik-Operationen.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Zugang zu exklusiven Krankenhausleistungen wie Chefarztbehandlung.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Flexible Tarife ohne lange Wartezeiten.</span></li>
            </ul>
            <p className="mb-6">
              Anbieter wie HanseMerkur Zusatzkrankenversicherung bieten Tarife, die speziell auf Ihre Bedürfnisse zugeschnitten sind. Mit einer
              <strong> Krankenzusatzversicherung ohne Wartezeit</strong> können Sie sofort von den Leistungen profitieren.
            </p>
            <div className="text-center">
              <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=375685&mid=11705&awinaffid=2524533&linkid=3289919&clickref=" target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
                  Jetzt HanseMerkur Krankenzusatzversicherung vergleichen*
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zahnzusatzversicherung Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Zahnzusatzversicherung: Perfekter Schutz für Ihre Zähne</h1>
          <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
            <p className="mb-4">
              Eine <strong>Zahnzusatzversicherung</strong> ist ideal, um hohe Kosten für Zahnbehandlungen wie <strong>Zahnersatz</strong>, <strong>Implantate</strong> oder
              <strong> professionelle Zahnreinigung</strong> abzufedern. Die gesetzliche Krankenversicherung übernimmt oft nur einen geringen Anteil dieser Kosten, was
              eine <strong>Zahnzusatzversicherung für Implantate</strong> oder <strong>Zahnprophylaxe</strong> besonders attraktiv macht.
            </p>
            <h3 className="text-xl font-semibold mb-4">Vorteile einer Zahnzusatzversicherung</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Bis zu 100% Kostenerstattung für Zahnersatz und Implantate.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Zuschüsse für professionelle Zahnreinigung und Vorsorge.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Keine oder kurze Wartezeiten für sofortigen Schutz.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Transparente Tarife mit einfacher Online-Verwaltung.</span></li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Wie wähle ich die richtige Zahnzusatzversicherung?</h3>
            <p className="mb-4">Achten Sie auf folgende Punkte:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Leistungsumfang</strong>: Prüfen Sie, ob Implantate, Inlays oder Prophylaxe abgedeckt sind.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Wartezeiten</strong>: Wählen Sie Tarife ohne Wartezeit für schnellen Schutz.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Kostenerstattung</strong>: Tarife mit hohen Erstattungssätzen sparen Ihnen langfristig Geld.</span></li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Kundenbewertungen</strong>: Anbieter wie HanseMerkur punkten mit Top-Bewertungen (z. B. Stiftung Warentest 07/2025).</span></li>
            </ul>
            <p className="mb-6">
              Die HanseMerkur Zahnzusatzversicherung bietet umfassenden Schutz ohne Wartezeit und bis zu 100% Kostenerstattung für Zahnersatz. Vergleichen Sie
              jetzt und sichern Sie sich den besten Tarif!
            </p>
            <div className="text-center">
              <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=329260&mid=11705&awinaffid=2524533&linkid=3289856&clickref=" target="_blank">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
                  Jetzt HanseMerkur Zahnzusatzversicherung vergleichen*
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-xl">Finanzprodukte</h2>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/banking" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Banking"
                  >
                    Banking
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tierversicherungen" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Haustierversicherung"
                  >
                    Haustierversicherung
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/trading" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Trading"
                  >
                    Trading
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/versicherungen" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Versicherungen"
                  >
                    Versicherungen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-xl">Weitere Produkte</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-base text-gray-400">
                  <li>
                    <a 
                      href="https://www.c24n.de/ducwCtq" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="DSL Vergleich (externer Link)"
                    >
                      DSL
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/Uxudvkj" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Gasvergleich (externer Link)"
                    >
                      Gas
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/5R17qbN" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Handytarif vergleichen (externer Link)"
                    >
                      Handytarif
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/RYXPGyh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
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
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Mietwagen vergleichen (externer Link)"
                    >
                      Mietwagen
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/zxy0WKh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Ökostrom vergleichen (externer Link)"
                    >
                      Ökostrom
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/EieKR0E" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Reise vergleichen (externer Link)"
                    >
                      Reise
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.c24n.de/RYXPGyh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                      aria-label="Stromvergleich (externer Link)"
                    >
                      Strom
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-xl">Unternehmen</h2>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/karriere" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Karriere"
                  >
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/kontakt" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Kontakt"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/partnerprogramme" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Partnerprogramm"
                  >
                    Partnerprogramm
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/ueber-uns" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Über uns"
                  >
                    Über uns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-3 text-xl">Rechtliches</h2>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/agb" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="AGB"
                  >
                    AGB
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/cookie-richtlinie" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Cookie-Richtlinie"
                  >
                    Cookie-Richtlinie
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/datenschutz" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Datenschutz"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/impressum" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
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
              © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/" aria-label="Zurück zur Startseite">
              <Button 
                className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
              >
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
