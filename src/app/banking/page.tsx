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
        <span className="text-sm text-gray-600 mt-1">Unser-Vergleichsportal.de</span>
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
            <SmartFinanzLogo className="text-2xl text-gray-900" />
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
                <h2 className="font-semibold mb-3 text-gray-900">Finanzprodukte</h2>
                <div className="flex flex-col gap-2">
                  {[
                    { key: 'banking', label: 'BANKING', url: '/banking', isInternal: true },
                    { key: 'haustierversicherung', label: 'HAUSTIERVERSICHERUNG', url: '/tierversicherungen', isInternal: true },
                    { key: 'trading', label: 'TRADING', url: '/trading', isInternal: true },
                    { key: 'versicherungen', label: 'VERSICHERUNGEN', url: '/versicherungen', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <Link
                      key={key}
                      href={url}
                      className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm bg-white text-gray-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setActiveCategory(key)
                      }}
                      aria-label={`Zu ${label} navigieren`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-gray-900">Weitere Produkte</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
                    { key: 'gas', label: 'GAS', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
                    { key: 'handytarif', label: 'HANDYTARIF', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
                    { key: 'kreditkarte', label: 'KREDITKARTE', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                    { key: 'mietwagen', label: 'MIETWAGEN', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false },
                    { key: 'oekostrom', label: 'ÖKOSTROM', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
                    { key: 'reise', label: 'REISE', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
                    { key: 'strom', label: 'STROM', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                  ].map(({ key, label, url, isInternal }) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm bg-white text-gray-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setActiveCategory(key)
                      }}
                      aria-label={`${label} vergleichen (externer Link)`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-gray-900">Unternehmen</h2>
                <div className="flex flex-col gap-2">
                  {[
                    { key: 'karriere', label: 'KARRIERE', url: '/karriere', isInternal: true },
                    { key: 'kontakt', label: 'KONTAKT', url: '/kontakt', isInternal: true },
                    { key: 'partnerprogramm', label: 'PARTNERPROGRAMM', url: '/partnerprogramme', isInternal: true },
                    { key: 'ueber-uns', label: 'ÜBER UNS', url: '/ueber-uns', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <Link
                      key={key}
                      href={url}
                      className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm bg-white text-gray-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setActiveCategory(key)
                      }}
                      aria-label={`Zu ${label} navigieren`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-semibold mb-3 text-gray-900">Rechtliches</h2>
                <div className="flex flex-col gap-2">
                  {[
                    { key: 'agb', label: 'AGB', url: '/agb', isInternal: true },
                    { key: 'cookie-richtlinie', label: 'COOKIE-RICHTLINIE', url: '/cookie-richtlinie', isInternal: true },
                    { key: 'datenschutz', label: 'DATENSCHUTZ', url: '/datenschutz', isInternal: true },
                    { key: 'impressum', label: 'IMPRESSUM', url: '/impressum', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <Link
                      key={key}
                      href={url}
                      className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm bg-white text-gray-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700`}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setActiveCategory(key)
                      }}
                      aria-label={`Zu ${label} navigieren`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <Button
                className="w-full bg-green-600 text-white font-medium text-sm py-2 transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {[
              { key: 'banking', label: 'BANKING', url: '/banking', isInternal: true },
              { key: 'haustierversicherung', label: 'HAUSTIERVERSICHERUNG', url: '/tierversicherungen', isInternal: true },
              { key: 'trading', label: 'TRADING', url: '/trading', isInternal: true },
              { key: 'versicherungen', label: 'VERSICHERUNG', url: '/versicherungen', isInternal: true },
              { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
              { key: 'gas', label: 'GAS', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
              { key: 'handytarif', label: 'HANDYTARIF', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
              { key: 'kreditkarte', label: 'KREDITKARTE', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
              { key: 'mietwagen', label: 'MIETWAGEN', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false },
              { key: 'oekostrom', label: 'ÖKOSTROM', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
              { key: 'reise', label: 'REISE', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
              { key: 'strom', label: 'STROM', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
            ].map(({ key, label, url, isInternal }) => (
              isInternal ? (
                <Link
                  key={key}
                  href={url}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 ease-in-out text-xs sm:text-sm bg-white text-gray-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700`}
                  onClick={() => setActiveCategory(key)}
                  aria-label={`Zu ${label} navigieren`}
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-all duration-300 ease-in-out text-xs sm:text-sm bg-white text-gray-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700`}
                  onClick={() => setActiveCategory(key)}
                  aria-label={`${label} vergleichen (externer Link)`}
                >
                  {label}
                </a>
              )
            ))}
          </div>
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
      "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 09/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Über 3.194 verifizierte Kundenbewertungen",
      "Deutschlands drittgrößtes Vergleichsportal",
      "Bis zu 1.000€ jährlich sparen bei Girokonten und Krediten"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 120€ Neukundenbonus",
    logo: "🏆",
    url: "https://www.tarifcheck.de/girokonto/"
  },
  {
    name: "DKB",
    rating: 4.7,
    features: [
      "Kostenloses Girokonto mit 100€ Prämie (ab 700€ Geldeingang oder unter 28 Jahre)",
      "Visa Kreditkarte ohne Jahresgebühr, weltweit kostenlos bezahlen",
      "Tagesgeldkonto mit attraktiven Zinsen bis 3,5% p.a.",
      "Nachhaltige Bank: Finanziererin erneuerbarer Energien",
      "Online-Broker mit ETF-Sparplänen ab 1,90€ pro Trade",
      "Kinderkonto für finanzielle Bildung der Jüngsten",
      "Baufinanzierung mit flexiblen Konditionen und LBS-Bausparen",
      "DKB-App: Sicher und mobil Bankgeschäfte erledigen"
    ],
    price: "100% kostenlos",
    bonus: "100€ Prämie + 30€ Kreditkarten-Bonus",
    logo: "🏦",
    url: "https://www.awin1.com/awclick.php?gid=441815&mid=11329&awinaffid=2524533&linkid=2273909&clickref="
  },
  {
    name: "Credimaxx",
    rating: 4.9,
    features: [
      "Kredite von 4.000€ bis 50.000€ mit sozialer Verantwortung",
      "Sofortvermittlung durch erfahrene Kreditprofis",
      "Digitaler Abschluss mit WebID oder VideoIdent",
      "Kredit ohne Schufa, Sofortkredit oder Umschuldung möglich",
      "TÜV Kundenzufriedenheit: 1.9 (sehr gut), eKomi 4.9/5",
      "Vermittlung in bis zu 1 Minute",
      "100% Sicherheit mit 256-Bit-SSL-Verschlüsselung",
      "25 Jahre Erfahrung in der Kreditvermittlung"
    ],
    price: "ab 10,99% eff. Zins p.a.",
    bonus: "Schnelle Auszahlung",
    logo: "💳",
    url: "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D"
  },
  {
    name: "auxmoney",
    rating: 4.8,
    features: [
      "Kreditvermittlung auch für Selbstständige und Freiberufler",
      "Kooperation mit SWK Bank für schnelle Abwicklung",
      "eKomi Gold Siegel mit 4,8/5 Sternen",
      "Über 10 Jahre Erfahrung im Kreditmarkt",
      "Schufa-neutrale Kreditanfrage",
      "Kostenlose Sondertilgungen für flexible Rückzahlung",
      "Vergleich von über 20 Banken für beste Konditionen",
      "Nirgendwo-Günstiger-Garantie mit bis zu 300€ Rückerstattung"
    ],
    price: "Bonitätsabhängige Zinsen",
    bonus: "Flexible Kreditkonditionen",
    logo: "💸",
    url: "https://partner.auxmoney.com/go.cgi?pid=10017147&wmid=54&cpid=1&prid=1&subid=&target=Startseite"
  },
  {
    name: "CHECK24",
    rating: 4.7,
    features: [
      "Marktführer mit über 90% Marktabdeckung bei Girokonten und Krediten",
      "Über 25 Testsiege im Finanzvergleich (Handelsblatt 09/2024)",
      "Vergleich von über 300 Girokonten und Kreditangeboten",
      "Nirgendwo-Günstiger-Garantie für beste Konditionen",
      "Kostenlose Beratung durch 300 Finanzexperten (08:00–22:00 Uhr)",
      "Über 98% Kundenzufriedenheit",
      "Vermittlung von Krediten mit Provisionstransparenz",
      "Zusätzliche Vergleiche für Versicherungen, Strom und Gas"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 100€ Cashback",
    logo: "✅",
    url: "https://www.check24.de/kredit/"
  }
]

export default function Banking() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Meta-Tags für SEO */}
      <Head>
        <title>So finden Sie das passende Girokonto und den richtigen Kredit</title>
        <meta name="description" content="Vergleichen Sie mit SmartFinanz über 300 Girokonten und Kredite. Kostenlos, transparent und mit Top-Bewertungen. Sparen Sie bis zu 1.000€ jährlich mit unseren Testsiegern!" />
        <meta name="keywords" content="Girokonto Vergleich, Kredit Vergleich, SmartFinanz, kostenloses Girokonto, Testsieger 2025, Kreditkarte, Tagesgeld, Baufinanzierung" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Header />

      {/* Einführungsabschnitt (Dark Green) */}
      <section className="py-8 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Finden Sie mit SmartFinanz das passende Girokonto</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6">
              Finden Sie das passende Girokonto und den richtigen Kredit. Vergleichen Sie über 300 Finanzprodukte kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger bieten Ihnen erstklassige Konditionen und attraktive Boni.
            </p>
          </div>
        </div>
      </section>

      {/* Button Section (White) */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">So finden Sie das passende Girokonto und den richtigen Kredit</h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vergleichen Sie Angebote</h3>
            <ul className="list-none list-inside text-sm text-gray-600 mb-6">
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-green-600 mt-1" />
                Nutzen Sie unseren kostenlosen Vergleich, um die besten Girokonten und Kredite zu finden. Über 300 Angebote von Top-Anbietern wie Tarifcheck.de und CHECK24 stehen Ihnen zur Verfügung.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Achten Sie auf Bewertungen</h3>
            <ul className="list-none list-inside text-sm text-gray-600 mb-6">
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-green-600 mt-1" />
                Unsere Anbieter wie Credimaxx und auxmoney haben Top-Bewertungen (z. B. eKomi 4,9/5). Vertrauen Sie auf verifizierte Kundenmeinungen für Ihre Entscheidung.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Prüfen Sie Konditionen</h3>
            <ul className="list-none list-inside text-sm text-gray-600 mb-6">
              <li className="flex items-start">
                <Check className="mr-2 h-4 w-4 text-green-600 mt-1" />
                Achten Sie auf kostenlose Girokonten, Schufa-neutrale Kreditanfragen und flexible Rückzahlungsoptionen, wie sie z. B. von auxmoney und CHECK24 angeboten werden.
              </li>
            </ul>

            {/* Girokonto kostenlos */}
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Girokonto kostenlos - Die besten Anbieter 2025</h3>
            <div className="grid gap-6 lg:grid-cols-2 mb-12">
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Was kostet ein kostenloses Girokonto wirklich?</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  <li>Ein wirklich kostenloses Girokonto verzichtet auf Kontoführungsgebühren, Gebühren für die EC-Karte und bietet kostenlose Überweisungen.</li>
                  <li>Achten Sie auf versteckte Kosten bei Bargeldabhebungen oder Auslandsüberweisungen.</li>
                </ul>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">💡 Spartipp:</h4>
                  <ul className="list-disc list-inside text-sm text-green-700">
                    <li>Die besten kostenlosen Girokonten sparen Ihnen bis zu 200€ jährlich im Vergleich zu Filialbanken.</li>
                    <li>Zusätzlich locken viele Anbieter mit Neukunden-Boni von bis zu 120€.</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">Girokonto Vergleich - Testsieger Eigenschaften</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  <li>Bedingungslos kostenlose Kontoführung</li>
                  <li>Kostenlose EC- und Kreditkarte</li>
                  <li>Kostenloses Bargeldabheben deutschlandweit</li>
                  <li>Mobile Banking App mit allen Funktionen</li>
                  <li>Dispozinsen unter 7% p.a.</li>
                </ul>
                <div className="mt-8 text-center">
                  <a 
                    href="https://www.tarifcheck.de/girokonto/" 
                    target="_blank" 
                    rel="sponsored"
                  >
                    <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                      Jetzt Tarife vergleichen
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Kreditkarte ohne Jahresgebühr */}
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600 mt-12">Kreditkarte ohne Jahresgebühr - Die besten kostenlosen Karten 2025</h3>
            <p className="text-sm text-gray-600 mb-6">
              Eine gute Kreditkarte sollte keine Jahresgebühr kosten und trotzdem alle wichtigen Features bieten. Hier finden Sie die besten kostenlosen Kreditkarten mit attraktiven Zusatzleistungen.
            </p>
            <div className="grid gap-6 lg:grid-cols-3 mb-12">
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Visa/Mastercard klassisch</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Weltweit akzeptiert</li>
                  <li>Kostenlose Bargeldabhebung im Ausland</li>
                  <li>Online-Shopping ohne Extragebühren</li>
                  <li>Reiseversicherungen inklusive</li>
                </ul>
                <p className="text-sm text-green-600 mt-2">0€ Jahresgebühr dauerhaft</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Modern Digital Cards</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Apple Pay / Google Pay ready</li>
                  <li>Echtzeit-Benachrichtigungen</li>
                  <li>Ausgabenkontrolle per App</li>
                  <li>Virtuelle Kartennummern</li>
                </ul>
                <p className="text-sm text-green-600 mt-2">Kostenlos + Cashback möglich</p>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Travel & Bonus Cards</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Meilen oder Punkte sammeln</li>
                  <li>Lounge-Zugang an Flughäfen</li>
                  <li>Umfassende Reiseversicherung</li>
                  <li>Priority Pass inklusive</li>
                </ul>
                <p className="text-sm text-green-600 mt-2">Viele Premium-Features ohne Zusatzkosten</p>
              </div>
            </div>

            {/* Kredit online beantragen */}
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Kredit online beantragen - Schnell & günstig finanzieren</h3>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Kredit Vergleich 2025: Die besten Konditionen</h4>
            <div className="grid gap-6 lg:grid-cols-3 mb-12">
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Ratenkredit</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Für Anschaffungen von 1.000€ bis 120.000€</li>
                  <li>Zinsen ab 0,68% p.a. bei bester Bonität</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Sofortkredit</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Schnelle Auszahlung binnen 24h möglich</li>
                  <li>Digitaler Abschluss mit VideoIdent-Verfahren</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Umschuldung</h5>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Bestehende Kredite zusammenfassen</li>
                  <li>Bis zu 40% der Zinsen sparen</li>
                </ul>
                <div className="mt-8 text-center">
                  <a 
                    href="https://www.check24.de/kredit/" 
                    target="_blank" 
                    rel="sponsored"
                  >
                    <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                      Jetzt Kredit berechnen
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Testsieger Girokonto-Vergleich */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900 mt-12">Testsieger Girokonto-Vergleich 2025</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {providerData.map((provider) => (
                <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                  {(provider.name === "Tarifcheck.de" || provider.name === "CHECK24" || provider.name === "DKB") && (
                    <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-500 hover:to-yellow-600 z-10">
                      Top Empfehlung
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-2">
                    <div className="text-3xl mb-2">{provider.logo}</div>
                    <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <div className="text-center border-b pb-2 mb-4">
                      <p className="text-xl font-bold text-green-600">{provider.price}</p>
                      <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">{provider.bonus}</Badge>
                    </div>
                    <ul className="space-y-1 flex-1 overflow-auto">
                      {provider.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
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
                      <Button className="w-full bg-green-600 text-white font-medium text-sm transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-auto">
                        Jetzt abschließen*
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center text-xs sm:text-sm text-gray-600 p-4">
              <p>
                *Wir erhalten eine Provision für Käufe über diese Links.
              </p>
            </div>

            {/* Tagesgeld Vergleich */}
            <Card className="mb-12 border-2 border-gray-200 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-green-600">Tagesgeld Vergleich - Top Zinsen bis 4,00% sichern</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="text-lg text-green-800 mb-2">📈 Aktuelle Tagesgeld Zinsen 2025</h4>
                <p className="text-sm text-green-700 mb-6">
                  Die besten Tagesgeldkonten bieten derzeit bis zu 4,00% Zinsen und sind mit 100% Einlagensicherung abgesichert. Täglich verfügbar, ohne Laufzeitbindung – ideal für Notreserven und kurzfristige Geldanlage.
                </p>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-900">Top-Anbieter:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Bis zu 4,00% Zinsen für Neukunden</li>
                      <li>• 100.000€ Einlagensicherung pro Bank</li>
                      <li>• Täglich verfügbar, keine Kündigung nötig</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-900">Wichtige Hinweise:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Zinsbindung oft nur 3–12 Monate</li>
                      <li>• Danach meist niedrigere Bestandskundenzinsen</li>
                      <li>• Regelmäßiger Vergleich lohnt sich</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a 
                    href="https://www.awin1.com/awclick.php?gid=450648&mid=11329&awinaffid=2524533&linkid=3268909&clickref=" 
                    target="_blank" 
                    rel="sponsored"
                  >
                    <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                      Jetzt kostenloses Konto eröffnen
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Trading-CTA-Box */}
            <Card className="mb-12 border-2 border-gray-200 rounded-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-green-800">Ersparnisse sinnvoll anlegen</h3>
                    <p className="text-sm sm:text-base text-gray-700">
                      Notgroschen gesichert? Vergleichen Sie jetzt Broker für langfristigen Vermögensaufbau mit Aktien &amp; ETFs.
                    </p>
                  </div>
                  <Link
                    href="/trading"
                    aria-label="Broker vergleichen und mit Ersparnissen Vermögen aufbauen"
                    title="Broker vergleichen und mit Ersparnissen Vermögen aufbauen"
                  >
                    <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                      Jetzt Broker vergleichen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Baufinanzierung */}
            <Card className="mb-12 border-2 border-gray-200 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-green-600">Baufinanzierung Rechner - Ihren Traum vom Eigenheim verwirklichen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">Baufinanzierung: Das sollten Sie wissen</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Eigenkapital:</strong> Mindestens 20% der Kaufsumme empfohlen</li>
                      <li><strong>Zinsbindung:</strong> 10–15 Jahre für Planungssicherheit</li>
                      <li><strong>Tilgung:</strong> Initial 2–4% für zügige Rückzahlung</li>
                      <li><strong>Nebenkosten:</strong> 10–15% zusätzlich zur Kaufsumme</li>
                      <li><strong>Sondertilgungen:</strong> Jährlich 5–10% kostenfrei möglich</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">Aktuelle Bauzinsen & Trends</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Die Zinsprognose für 2025 zeigt moderate Entwicklungen bei Bauzinsen. Nutzen Sie die aktuell noch günstigen Konditionen für Ihre Finanzierung.
                    </p>
                    <div>
                      <h5 className="font-semibold text-green-800 mb-1">💰 Spartipp:</h5>
                      <p className="text-sm text-green-700">
                        Schon 0,1% Zinsunterschied sparen bei 300.000€ über 20 Jahre etwa 4.800€! Vergleichen Sie daher unbedingt mehrere Angebote.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Banking Guide */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Online Banking - Sicher und einfach Bankgeschäfte erledigen</h2>
          <div className="grid gap-8 lg:grid-cols-4">
            {[
              {
                number: "1",
                title: "Konto eröffnen",
                content: "Girokonto online in 5 Minuten beantragen. VideoIdent-Verfahren macht Postweg überflüssig – alles bequem von zu Hause."
              },
              {
                number: "2",
                title: "App herunterladen",
                content: "Mobile Banking App installieren. Alle Bankgeschäfte jederzeit und überall per Smartphone erledigen."
              },
              {
                number: "3",
                title: "Sicher anmelden",
                content: "Login mit PIN oder Fingerabdruck. Alle Transaktionen durch TAN-Verfahren oder biometrische Freigabe geschützt."
              },
              {
                number: "4",
                title: "Banking nutzen",
                content: "Überweisungen, Daueraufträge, Kontostände prüfen – alles 24/7 verfügbar ohne Öffnungszeiten."
              }
            ].map((step, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-shadow rounded-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">{step.number}</span>
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-12 border-2 border-gray-200 rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">Häufige Fragen zum Online Banking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2">
                {[
                  {
                    question: "Ist Online Banking sicher?",
                    answer: "Ja, moderne Online Banking Systeme verwenden 256-Bit-SSL-Verschlüsselung und Zwei-Faktor-Authentifizierung. Banken sind durch Einlagensicherung bis 100.000€ geschützt."
                  },
                  {
                    question: "Welche TAN-Verfahren gibt es?",
                    answer: "pushTAN per App, SMS-TAN oder chipTAN mit Lesegerät. Moderne Verfahren wie Fingerabdruck oder Face-ID ersetzen zunehmend klassische TANs."
                  },
                  {
                    question: "Kann ich alles online erledigen?",
                    answer: "95% aller Bankgeschäfte sind online möglich: Überweisungen, Daueraufträge, Kontoeröffnung, Kreditanträge. Nur wenige Services benötigen noch Filialbesuch."
                  },
                  {
                    question: "Was kostet Online Banking?",
                    answer: "Bei den meisten Direktbanken ist Online Banking komplett kostenlos. Auch viele Filialbanken bieten Online Services ohne Extragebühren an."
                  }
                ].map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2 text-green-600">{faq.question}</h4>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kredit wechseln & Depot eröffnen */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Kredit wechseln & Depot eröffnen - Ihre Finanzen optimieren</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-gray-200 rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">💳 Kredit umschulden und sparen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-900">Wann lohnt sich eine Umschuldung?</h5>
                    <p className="text-sm text-gray-600">
                      Bei Zinsdifferenz von über 1% oder mehreren laufenden Krediten. Besonders alte Kredite mit hohen Zinsen sollten abgelöst werden.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-900">Mögliche Ersparnis:</h5>
                    <p className="text-sm text-gray-600">
                      <strong className="text-green-600">Bis zu 40% der Zinskosten</strong> bei geschickter Umschuldung. Bei 20.000€ Kredit können das über 2.000€ sein.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700">
                      <strong>Tipp:</strong> Schufa-neutrale Anfrage ermöglicht Vergleich ohne Bonitäts-Verschlechterung!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-200 rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">📈 Depot eröffnen für Geldanlage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-900">Warum ein Depot?</h5>
                    <p className="text-sm text-gray-600">
                      Aktien und ETFs bieten langfristig höhere Renditen als Tagesgeld. Schon ab 25€ monatlich können Sie in ETF-Sparpläne investieren.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-900">Kostenlose Depots:</h5>
                    <p className="text-sm text-gray-600">
                      Viele Online-Broker bieten <strong className="text-green-600">kostenlose Depotführung</strong> und günstige ETF-Sparpläne ab 0€ Ordergebühr.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-green-700">
                      <strong>Wichtig:</strong> Nur investieren, was Sie langfristig entbehren können. Risiko streuen!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkliste */}
          <Card className="mt-8 border-2 border-gray-200 rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-green-800">✅ Checkliste für optimale Finanzplanung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">Grundausstattung:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Kostenloses Girokonto für Alltag</li>
                    <li>• Tagesgeldkonto für Notreserve (3–6 Monatsgehälter)</li>
                    <li>• Kreditkarte ohne Jahresgebühr für Reisen</li>
                    <li>• Dispozinsen unter 7% vereinbaren</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">Vermögensaufbau & Absicherung:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• ETF-Sparplan für langfristigen Vermögensaufbau</li>
                    <li>• Depot mit kostenlosen ETF-Sparplänen</li>
                    <li>• Alte Kredite auf bessere Konditionen prüfen</li>
                    <li>• Regelmäßig Konditionen vergleichen</li>
                    <li>
                      • Eigenheim absichern: Wohngebäude-, Hausrat- &amp; Haftpflicht sinnvoll kombinieren –{" "}
                      <Link href="/versicherungen" className="text-green-700 underline hover:text-green-800 font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm">
                        Versicherungen vergleichen
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kreditkarte ohne Jahresgebühr Sektion */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Kreditkarte ohne Jahresgebühr - Die besten kostenlosen Karten 2025</h2>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Eine gute Kreditkarte sollte keine Jahresgebühr kosten und trotzdem alle wichtigen Features bieten. Hier finden Sie die besten kostenlosen Kreditkarten mit attraktiven Zusatzleistungen.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "💳 Visa/Mastercard klassisch",
                features: [
                  "Weltweit akzeptiert",
                  "Kostenlose Bargeldabhebung im Ausland",
                  "Online-Shopping ohne Extragebühren",
                  "Reiseversicherungen inklusive"
                ],
                highlight: "0€ Jahresgebühr dauerhaft"
              },
              {
                title: "📱 Modern Digital Cards",
                features: [
                  "Apple Pay / Google Pay ready",
                  "Echtzeit-Benachrichtigungen",
                  "Ausgabenkontrolle per App",
                  "Virtuelle Kartennummern"
                ],
                highlight: "Kostenlos + Cashback möglich"
              },
              {
                title: "✈️ Travel & Bonus Cards",
                features: [
                  "Meilen oder Punkte sammeln",
                  "Lounge-Zugang an Flughäfen",
                  "Umfassende Reiseversicherung",
                  "Priority Pass inklusive"
                ],
                highlight: "Viele Premium-Features ohne Zusatzkosten"
              }
            ].map((card, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-shadow rounded-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold mb-1 text-gray-900">Leistungen:</h5>
                      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                        {card.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm">
                      <strong className="text-green-600">{card.highlight}</strong>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-orange-50 border-2 border-orange-200 rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-orange-800">⚠️ Kreditkarten-Fallen vermeiden</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">Versteckte Kosten beachten:</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Fremdwährungsgebühren (oft 1–2%)</li>
                    <li>Bargeldgebühren auch im Inland</li>
                    <li>Jahresgebühr ab dem 2. Jahr</li>
                    <li>Hohe Sollzinsen bei Teilzahlung</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-gray-900">Smarte Nutzung:</h5>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Immer per Lastschrift vollständig begleichen</li>
                    <li>Kreditrahmen nicht als Kredit nutzen</li>
                    <li>Bei Auslandsreisen Geld sparen</li>
                    <li>Bonusprogramme gezielt nutzen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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
              <h2 className="font-semibold mb-3">Finanzprodukte</h2>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <h2 className="font-semibold mb-3">Weitere Produkte</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-gray-400">
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
                <ul className="space-y-2 text-sm text-gray-400">
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
              <h2 className="font-semibold mb-3">Unternehmen</h2>
              <ul className="space-y-2 text-sm text-gray-400">
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
              <h2 className="font-semibold mb-3">Rechtliches</h2>
              <ul className="space-y-2 text-sm text-gray-400">
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
            <p className="text-sm text-gray-400 mb-4">
              © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/" aria-label="Zurück zur Startseite">
              <Button 
                className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
