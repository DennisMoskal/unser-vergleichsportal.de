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

        {/* Mobile Menü */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-6 py-4 space-y-6" aria-label="Mobile Menü">
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
              { key: '1dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
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
      <Head>
        <title>Banking Vergleich 2025: Die besten Girokonten und Kredite im Test</title>
        <meta name="description" content="Vergleichen Sie mit SmartFinanz über 300 Girokonten und Kredite. Kostenlos, transparent und mit Top-Bewertungen. Sparen Sie bis zu 1.000€ jährlich mit unseren Testsiegern!" />
        <meta name="keywords" content="Girokonto Vergleich, Kredit Vergleich, SmartFinanz, kostenloses Girokonto, Testsieger 2025, Kreditkarte, Tagesgeld, Baufinanzierung" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Header />

      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Beste Bank September 2025 | Girokonto, Kredit & Baufinanzierung Testsieger</h1>
            <p className="text-base sm:text-lg mb-8">
              Wir haben für Sie die besten Anbieter gefunden und die Top-Empfehlungen zusammengestellt. Vergleichen Sie mit unseren Rechnern über 300 Finanzprodukte kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger bieten Ihnen erstklassige Konditionen und attraktive Boni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="https://www.check24.de/kredit/"
                target="_blank"
                rel="sponsored"
                className="inline-block"
              >
                
              </a>
              <a
                href="https://www.tarifcheck.de/girokonto/"
                target="_blank"
                rel="sponsored"
                className="inline-block"
              >
               
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mt-2 text-2xl font-bold">
              Sie möchten nicht nur sparen sondern Vermögen bilden?
            </h2>
            <div className="mt-3 flex justify-center">
              <Button asChild size="lg" className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                <Link
                  href="/trading"
                  aria-label="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                  title="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                >
                  Jetzt Depots vergleichen <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">So finden Sie das passende Girokonto und den richtigen Kredit</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2">Vergleichen Sie Angebote</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Nutzen Sie unseren kostenlosen Vergleich, um die besten Girokonten und Kredite zu finden. Über 300 Angebote von Top-Anbietern wie Tarifcheck.de und CHECK24 stehen Ihnen zur Verfügung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Achten Sie auf Bewertungen</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Unsere Anbieter wie Credimaxx und auxmoney haben Top-Bewertungen (z. B. eKomi 4,9/5). Vertrauen Sie auf verifizierte Kundenmeinungen für Ihre Entscheidung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Prüfen Sie Konditionen</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Achten Sie auf kostenlose Girokonten, Schufa-neutrale Kreditanfragen und flexible Rückzahlungsoptionen, wie sie z. B. von auxmoney und CHECK24 angeboten werden.</li>
            </ul>
            <h2 className="text-3xl font-bold mb-6">Kostenloses Girokonto?</h2>
            <h3 className="text-lg font-bold mb-2">Darauf sollten Sie achten!</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Ein wirklich kostenloses Girokonto verzichtet auf Kontoführungsgebühren, Gebühren für die EC-Karte und bietet kostenlose Überweisungen. Achten Sie auf versteckte Kosten bei Bargeldabhebungen oder Auslandsüberweisungen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">💡 Spartipp:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Die besten kostenlosen Girokonten sparen Ihnen bis zu 200€ jährlich im Vergleich zu Filialbanken. Zusätzlich locken viele Anbieter mit Neukunden-Boni von bis zu 120€.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Girokonto Vergleich - Testsieger Eigenschaften</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Bedingungslos kostenlose Kontoführung</li>
              <li>Kostenlose EC- und Kreditkarte</li>
              <li>Kostenloses Bargeldabheben deutschlandweit</li>
              <li>Mobile Banking App mit allen Funktionen</li>
              <li>Dispozinsen unter 7% p.a.</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.tarifcheck.de/girokonto/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Tarife vergleichen
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Tagesgeld Vergleich lohnt sich!</h2>
            <h3 className="text-lg font-bold mb-2">📈 Aktuelle Tagesgeld Zinsen 2025</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Die besten Tagesgeldkonten bieten derzeit bis zu 4,00% Zinsen und sind mit 100% Einlagensicherung abgesichert. Täglich verfügbar, ohne Laufzeitbindung – ideal für Notreserven und kurzfristige Geldanlage.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Top-Anbieter:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Bis zu 4,00% Zinsen für Neukunden</li>
              <li>100.000€ Einlagensicherung pro Bank</li>
              <li>Täglich verfügbar, keine Kündigung nötig</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Wichtige Hinweise:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Zinsbindung oft nur 3–12 Monate</li>
              <li>Danach meist niedrigere Bestandskundenzinsen</li>
              <li>Regelmäßiger Vergleich lohnt sich</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.awin1.com/awclick.php?gid=450648&mid=11329&awinaffid=2524533&linkid=3268909&clickref=" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt kostenloses Konto eröffnen
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Sie möchten eine kostenlose Kreditkarte ohne Jahresgebühr?</h2>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Eine gute Kreditkarte sollte keine Jahresgebühr kosten und trotzdem alle wichtigen Features bieten. In Unseren Top-Empfehlungen finden Sie die besten kostenlosen Kreditkarten mit attraktiven Zusatzleistungen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">💳 Visa/Mastercard klassisch</h3>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Weltweit akzeptiert</li>
              <li>Kostenlose Bargeldabhebung im Ausland</li>
              <li>Online-Shopping ohne Extragebühren</li>
              <li>Reiseversicherungen inklusive</li>
              <li>0€ Jahresgebühr dauerhaft</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">📱 Modern Digital Cards</h3>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Apple Pay / Google Pay ready</li>
              <li>Echtzeit-Benachrichtigungen</li>
              <li>Ausgabenkontrolle per App</li>
              <li>Virtuelle Kartennummern</li>
              <li>Kostenlos + Cashback möglich</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">✈️ Travel & Bonus Cards</h3>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Meilen oder Punkte sammeln</li>
              <li>Lounge-Zugang an Flughäfen</li>
              <li>Umfassende Reiseversicherung</li>
              <li>Priority Pass inklusive</li>
              <li>Viele Premium-Features ohne Zusatzkosten</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.c24n.de/RYXPGyh" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Kreditkarte vergleichen
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Kredit online berechnen lassen - Schnell & günstig finanzieren</h2>
            <h3 className="text-lg font-bold mb-2">Für Ihre Wünsche den passenden Kredit mit den besten Konditionen</h3>
            <h3 className="text-lg font-bold mb-2">Ratenkredit</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Für Anschaffungen von 1.000€ bis 120.000€</li>
              <li>Zinsen ab 0,68% p.a. bei bester Bonität</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Sofortkredit</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Schnelle Auszahlung binnen 24h möglich</li>
              <li>Digitaler Abschluss mit VideoIdent-Verfahren</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Umschuldung</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Bestehende Kredite zusammenfassen</li>
              <li>Bis zu 40% der Zinsen sparen</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.check24.de/kredit/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Kredit berechnen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Testsieger Girokonto-Vergleich 2025</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(provider.name === "Tarifcheck.de" || provider.name === "CHECK24" || provider.name === "DKB" || provider.name === "Credimaxx" || provider.name === "auxmoney") && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-base transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-500 hover:to-yellow-600 z-10">
                    Top Empfehlung
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
                    <Button className="w-full bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-auto">
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

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-6">Baufinanzierung Rechner - Ihren Traum vom Eigenheim verwirklichen</h2>
            <h3 className="text-lg font-bold mb-2">Baufinanzierung: Das sollten Sie wissen</h3>
            <ul className="list-disc text-base mb-6">
              <li><strong>Eigenkapital:</strong> Mindestens 20% der Kaufsumme empfohlen</li>
              <li><strong>Zinsbindung:</strong> 10–15 Jahre für Planungssicherheit</li>
              <li><strong>Tilgung:</strong> Initial 2–4% für zügige Rückzahlung</li>
              <li><strong>Nebenkosten:</strong> 10–15% zusätzlich zur Kaufsumme</li>
              <li><strong>Sondertilgungen:</strong> Jährlich 5–10% kostenfrei möglich</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Aktuelle Bauzinsen & Trends</h3>
            <ul className="list-disc text-base mb-6">
              <li>Die Zinsprognose für 2025 zeigt moderate Entwicklungen bei Bauzinsen. Nutzen Sie die aktuell noch günstigen Konditionen für Ihre Finanzierung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">💰 Spartipp:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Schon 0,1% Zinsunterschied sparen bei 300.000€ über 20 Jahre etwa 4.800€! Vergleichen Sie daher unbedingt mehrere Angebote.</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.check24.de/baufinanzierung/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Baufinanzierung berechnen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Online Banking - Sicher und einfach Bankgeschäfte erledigen</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2">1. Konto eröffnen</h3>
            <ul className="list-disc text-base mb-6">
              <li>Girokonto online in 5 Minuten beantragen. VideoIdent-Verfahren macht Postweg überflüssig – alles bequem von zu Hause.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">2. App herunterladen</h3>
            <ul className="list-disc text-base mb-6">
              <li>Mobile Banking App installieren. Alle Bankgeschäfte jederzeit und überall per Smartphone erledigen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">3. Sicher anmelden</h3>
            <ul className="list-disc text-base mb-6">
              <li>Login mit PIN oder Fingerabdruck. Alle Transaktionen durch TAN-Verfahren oder biometrische Freigabe geschützt.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">4. Banking nutzen</h3>
            <ul className="list-disc text-base mb-6">
              <li>Überweisungen, Daueraufträge, Kontostände prüfen – alles 24/7 verfügbar ohne Öffnungszeiten.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Häufige Fragen zum Online Banking</h3>
            <h3 className="text-lg font-bold mb-2">Ist Online Banking sicher?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Ja, moderne Online Banking Systeme verwenden 256-Bit-SSL-Verschlüsselung und Zwei-Faktor-Authentifizierung. Banken sind durch Einlagensicherung bis 100.000€ geschützt.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Welche TAN-Verfahren gibt es?</h3>
            <ul className="list-disc text-base mb-6">
              <li>pushTAN per App, SMS-TAN oder chipTAN mit Lesegerät. Moderne Verfahren wie Fingerabdruck oder Face-ID ersetzen zunehmend klassische TANs.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Kann ich alles online erledigen?</h3>
            <ul className="list-disc text-base mb-6">
              <li>95% aller Bankgeschäfte sind online möglich: Überweisungen, Daueraufträge, Kontoeröffnung, Kreditanträge. Nur wenige Services benötigen noch Filialbesuch.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Was kostet Online Banking?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Bei den meisten Direktbanken ist Online Banking komplett kostenlos. Auch viele Filialbanken bieten Online Services ohne Extragebühren an.</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.tarifcheck.de/girokonto/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Online Banking starten
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Kredit wechseln & Depot eröffnen - Ihre Finanzen optimieren</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2">💳 Kredit umschulden und sparen</h3>
            <h3 className="text-lg font-bold mb-2">Wann lohnt sich eine Umschuldung?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Bei Zinsdifferenz von über 1% oder mehreren laufenden Krediten. Besonders alte Kredite mit hohen Zinsen sollten abgelöst werden.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Mögliche Ersparnis:</h3>
            <ul className="list-disc text-base mb-6">
              <li><strong>Bis zu 40% der Zinskosten</strong> bei geschickter Umschuldung. Bei 20.000€ Kredit können das über 2.000€ sein.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Tipp:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Schufa-neutrale Anfrage ermöglicht Vergleich ohne Bonitäts-Verschlechterung!</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.check24.de/kredit/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Kredit umschulden
                </Button>
              </a>
            </div>
            <h3 className="text-lg font-bold mb-2">📈 Depot eröffnen für Geldanlage</h3>
            <h3 className="text-lg font-bold mb-2">Warum ein Depot?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Aktien und ETFs bieten langfristig höhere Renditen als Tagesgeld. Schon ab 25€ monatlich können Sie in ETF-Sparpläne investieren.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Kostenlose Depots:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Viele Online-Broker bieten <strong>kostenlose Depotführung</strong> und günstige ETF-Sparpläne ab 0€ Ordergebühr.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Wichtig:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Nur investieren, was Sie langfristig entbehren können. Risiko streuen!</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="/trading" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Depot eröffnen
                </Button>
              </a>
            </div>
            <h3 className="text-lg font-bold mb-2">✅ Checkliste für optimale Finanzplanung</h3>
            <h3 className="text-lg font-bold mb-2">Grundausstattung:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Kostenloses Girokonto für Alltag</li>
              <li>Tagesgeldkonto für Notreserve (3–6 Monatsgehälter)</li>
              <li>Kreditkarte ohne Jahresgebühr für Reisen</li>
              <li>Dispozinsen unter 7% vereinbaren</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Vermögensaufbau & Absicherung:</h3>
            <ul className="list-disc text-base mb-6">
              <li>ETF-Sparplan für langfristigen Vermögensaufbau</li>
              <li>Depot mit kostenlosen ETF-Sparplänen</li>
              <li>Alte Kredite auf bessere Konditionen prüfen</li>
              <li>Regelmäßig Konditionen vergleichen</li>
              <li>Eigenheim absichern: Wohngebäude-, Hausrat- &amp; Haftpflicht sinnvoll kombinieren</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Kreditkarte ohne Jahresgebühr - Die besten kostenlosen Karten 2025</h2>
          <div className="max-w-4xl mx-auto text-left">
            <ul className="list-disc text-base mb-6">
              <li>Eine gute Kreditkarte sollte keine Jahresgebühr kosten und trotzdem alle wichtigen Features bieten. Hier finden Sie die besten kostenlosen Kreditkarten mit attraktiven Zusatzleistungen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">💳 Visa/Mastercard klassisch</h3>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Weltweit akzeptiert</li>
              <li>Kostenlose Bargeldabhebung im Ausland</li>
              <li>Online-Shopping ohne Extragebühren</li>
              <li>Reiseversicherungen inklusive</li>
              <li>0€ Jahresgebühr dauerhaft</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">📱 Modern Digital Cards</h3>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Apple Pay / Google Pay ready</li>
              <li>Echtzeit-Benachrichtigungen</li>
              <li>Ausgabenkontrolle per App</li>
              <li>Virtuelle Kartennummern</li>
              <li>Kostenlos + Cashback möglich</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">✈️ Travel & Bonus Cards</h3>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Meilen oder Punkte sammeln</li>
              <li>Lounge-Zugang an Flughäfen</li>
              <li>Umfassende Reiseversicherung</li>
              <li>Priority Pass inklusive</li>
              <li>Viele Premium-Features ohne Zusatzkosten</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.c24n.de/RYXPGyh" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Kreditkarte vergleichen
                </Button>
              </a>
            </div>
            <Card className="mt-8 bg-orange-50 border-2 border-orange-200 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-orange-800">⚠️ Kreditkarten-Fallen vermeiden</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Versteckte Kosten beachten:</h3>
                    <ul className="list-disc text-base space-y-1">
                      <li>Fremdwährungsgebühren (oft 1–2%)</li>
                      <li>Bargeldgebühren auch im Inland</li>
                      <li>Jahresgebühr ab dem 2. Jahr</li>
                      <li>Hohe Sollzinsen bei Teilzahlung</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Smarte Nutzung:</h3>
                    <ul className="list-disc text-base space-y-1">
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
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Jetzt vergleichen | einfach sparen</h2>
            <p className="text-base sm:text-lg">
              Schnell, sicher & kostenlos – mit nur wenigen Klicks zum besten Angebot.
            </p>
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
              <h2 className="font-semibold mb-3 text-xl">Finanzprodukte</h2>
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
              <h2 className="font-semibold mb-3 text-xl">Weitere Produkte</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-base text-gray-400">
                  <li>
                    <a 
                      href="https://www.c24n.de/ducwCtq" 
                      target="_blank" 
                      rel="noopener noreferrer" 
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
                      rel="noopener noreferrer" 
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
                      rel="noopener noreferrer" 
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
                      rel="noopener noreferrer" 
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
                      rel="noopener noreferrer" 
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
                      rel="noopener noreferrer" 
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
                      rel="noopener noreferrer" 
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
                      rel="noopener noreferrer" 
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
              <h2 className="font-semibold mb-3 text-xl">Unternehmen</h2>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/karriere" 
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
              <h2 className="font-semibold mb-3 text-xl">Rechtliches</h2>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/agb" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="AGB"
                  >
                    AGB
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/cookie-richtlinie" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Cookie-Richtlinie"
                  >
                    Cookie-Richtlinie
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/datenschutz" 
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Datenschutz"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/impressum" 
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
              © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/" aria-label="Zurück zur Startseite">
              <Button 
                className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
