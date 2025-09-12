"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from "lucide-react"
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
    name: "CHECK24",
    rating: 4.8,
    features: [
      "Vergleich von über 300 Versicherungen in wenigen Minuten",
      "Testsieger in über 25 Kategorien (Handelsblatt 09/2024)",
      "Kostenlose Beratung durch 300 Experten (08:00–22:00 Uhr)",
      "Über 98% Kundenzufriedenheit (eKomi Gold Siegel)",
      "Nirgendwo-Günstiger-Garantie für beste Konditionen",
      "Transparente Provisionen bei Abschluss",
      "Zusätzliche Vergleiche für Kredite, Strom und Gas",
      "Bis zu 50% Ersparnis durch Vergleich möglich"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 100€ Cashback",
    logo: "✅",
    url: "https://www.check24.de/versicherungen/"
  },
  {
    name: "HUK-COBURG",
    rating: 4.7,
    features: [
      "Über 90 Jahre Erfahrung in der Versicherungsbranche",
      "Kfz-Versicherung mit Top-Bewertungen (4,7/5 eKomi)",
      "Günstige Tarife für Haftpflicht, Hausrat und Wohngebäude",
      "Schneller Schadensservice mit 24/7-Hotline",
      "Flexible Zusatzbausteine für individuelle Absicherung",
      "Bis zu 20% Rabatt bei Kombination mehrerer Versicherungen",
      "Nachhaltigkeitsinitiativen für umweltbewusste Kunden",
      "Kostenloser Tarifcheck und Online-Abschluss"
    ],
    price: "Individuelle Tarife",
    bonus: "Bis zu 20% Kombirabatt",
    logo: "🚗",
    url: "https://www.huk.de/versicherungen/"
  },
  {
    name: "Allianz",
    rating: 4.6,
    features: [
      "Weltweit agierender Versicherer mit über 100 Jahren Erfahrung",
      "Umfassender Schutz für Kfz, Hausrat, Haftpflicht und mehr",
      "eKomi-Bewertung: 4,6/5 Sterne von über 5.000 Kunden",
      "Schneller digitaler Abschluss mit VideoIdent",
      "Attraktive Boni für langjährige Kunden",
      "Persönliche Beratung in über 2.000 Filialen",
      "Schadensservice mit 24/7-Verfügbarkeit",
      "Flexible Tarifanpassung für individuelle Bedürfnisse"
    ],
    price: "Bonitätsabhängige Tarife",
    bonus: "Treuebonus für Bestandskunden",
    logo: "🛡️",
    url: "https://www.allianz.de/versicherungen/"
  },
  {
    name: "CosmosDirekt",
    rating: 4.5,
    features: [
      "Spezialist für Risikolebens- und Berufsunfähigkeitsversicherung",
      "100% digitale Abwicklung mit einfachem Online-Abschluss",
      "Testsieger in der Kategorie Risikolebensversicherung 2024",
      "eKomi-Bewertung: 4,5/5 Sterne von über 2.000 Kunden",
      "Günstige Tarife für junge Familien und Berufseinsteiger",
      "Flexible Laufzeiten und Beitragsanpassung",
      "Schneller Schadensservice mit digitaler Schadenmeldung",
      "Transparente Kostenstruktur ohne versteckte Gebühren"
    ],
    price: "Individuelle Tarife",
    bonus: "Günstige Einstiegstarife",
    logo: "💼",
    url: "https://www.cosmosdirekt.de/versicherungen/"
  },
  {
    name: "ARAG",
    rating: 4.6,
    features: [
      "Marktführer für Rechtsschutzversicherungen",
      "Umfassender Schutz für Privat-, Berufs- und Verkehrsrecht",
      "eKomi-Bewertung: 4,6/5 Sterne von über 3.000 Kunden",
      "Kostenlose Erstberatung durch Anwälte",
      "Schnelle Schadenbearbeitung mit Online-Portal",
      "Flexible Bausteine für individuelle Absicherung",
      "Kombi-Tarife mit Haftpflicht und Hausrat möglich",
      "Bis zu 30% Ersparnis bei Online-Abschluss"
    ],
    price: "Individuelle Tarife",
    bonus: "Bis zu 30% Online-Rabatt",
    logo: "⚖️",
    url: "https://www.arag.de/versicherungen/"
  }
]

export default function Versicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Versicherungsvergleich 2025: Die besten Versicherungen im Test</title>
        <meta name="description" content="Vergleichen Sie mit SmartFinanz über 300 Versicherungen. Kostenlos, transparent und mit Top-Bewertungen. Sparen Sie bis zu 50% mit unseren Testsiegern!" />
        <meta name="keywords" content="Versicherungsvergleich, Kfz-Versicherung, Haftpflichtversicherung, SmartFinanz, Testsieger 2025, Hausratversicherung, Rechtsschutzversicherung" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Header />

      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Beste Versicherungen 2025 | Kfz, Haftpflicht & Hausrat Testsieger</h1>
            <p className="text-base sm:text-lg mb-8">
              Wir haben für Sie die besten Versicherungsanbieter gefunden und die Top-Empfehlungen zusammengestellt. Vergleichen Sie mit unseren Rechnern über 300 Versicherungsprodukte kostenlos und sparen Sie bis zu 50% jährlich. Unsere Testsieger bieten Ihnen erstklassige Konditionen und attraktive Boni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="https://www.check24.de/versicherungen/"
                target="_blank"
                rel="sponsored"
                className="inline-block"
              >
                <Button className="w-full sm:w-auto bg-white text-green-600 font-medium text-base px-6 py-3 transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-white hover:to-gray-100">
                  Versicherungen vergleichen
                </Button>
              </a>
              <a
                href="https://www.huk.de/versicherungen/kfz-versicherung.html"
                target="_blank"
                rel="sponsored"
                className="inline-block"
              >
                <Button className="w-full sm:w-auto bg-white text-green-600 font-medium text-base px-6 py-3 transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-white hover:to-gray-100">
                  Kfz-Versicherung vergleichen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">So finden Sie die passende Versicherung</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2">Vergleichen Sie Angebote</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Nutzen Sie unseren kostenlosen Vergleich, um die besten Versicherungen zu finden. Über 300 Angebote von Top-Anbietern wie CHECK24 und HUK-COBURG stehen Ihnen zur Verfügung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Achten Sie auf Bewertungen</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Unsere Anbieter wie Allianz und ARAG haben Top-Bewertungen (z. B. eKomi 4,8/5). Vertrauen Sie auf verifizierte Kundenmeinungen für Ihre Entscheidung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Prüfen Sie Leistungen</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Achten Sie auf flexible Tarife, schnellen Schadensservice und Kombirabatte, wie sie z. B. von HUK-COBURG und CosmosDirekt angeboten werden.</li>
            </ul>
            <h2 className="text-3xl font-bold mb-6">Kfz-Versicherung?</h2>
            <h3 className="text-lg font-bold mb-2">Darauf sollten Sie achten!</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Eine gute Kfz-Versicherung bietet umfassenden Schutz ohne versteckte Kosten. Achten Sie auf Rabatte (z. B. für Werkstattbindung) und flexible Zusatzbausteine wie Schutzbrief oder Insassenunfallversicherung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">💡 Spartipp:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Durch den Wechsel der Kfz-Versicherung können Sie bis zu 500€ jährlich sparen. Nutzen Sie unseren Vergleich, um die besten Tarife zu finden.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Kfz-Versicherung Testsieger Eigenschaften</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Günstige Prämien bei guter Schadenquote</li>
              <li>Kostenloser Schutzbrief bei Unfällen</li>
              <li>Schneller Schadensservice (24/7)</li>
              <li>Flexible Zusatzbausteine (z. B. Mallorca-Police)</li>
              <li>Rabatte für Fahranfänger oder Vielfahrer</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.huk.de/versicherungen/kfz-versicherung.html" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Kfz-Versicherung vergleichen
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Haftpflichtversicherung</h2>
            <h3 className="text-lg font-bold mb-2">Warum wichtig?</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Eine Privathaftpflichtversicherung schützt Sie vor finanziellen Risiken bei Schäden, die Sie anderen zufügen. Sie ist essenziell für jeden Haushalt.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Top-Leistungen:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Deckt Schäden bis zu 50 Mio. €</li>
              <li>Schutz bei Schlüsselverlust oder Mietsachschäden</li>
              <li>Familienabsicherung inklusive</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Wichtige Hinweise:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Vergleichen Sie jährlich, da Tarife sich ändern</li>
              <li>Achten Sie auf Ausschlüsse (z. B. berufliche Schäden)</li>
              <li>Kombination mit Hausrat spart bis zu 20%</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.check24.de/haftpflichtversicherung/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Haftpflicht vergleichen
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Hausratversicherung</h2>
            <h3 className="text-lg font-bold mb-2">Schutz für Ihr Zuhause</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Schützt Ihr Hab und Gut bei Einbruch, Feuer oder Wasserschäden. Ideal für Mieter und Eigentümer.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Neuwertentschädigung bei Totalschaden</li>
              <li>Schutz bei Elementarschäden (z. B. Sturm, Hagel)</li>
              <li>Fahrraddiebstahl optional einschließbar</li>
              <li>Schnelle Schadenmeldung per App</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.check24.de/hausratversicherung/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Hausratversicherung vergleichen
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Risikolebensversicherung</h2>
            <h3 className="text-lg font-bold mb-2">Familie absichern</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Schützt Ihre Liebsten finanziell im Todesfall. Besonders wichtig für Familien mit Kindern oder Hypotheken.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc list-inside text-base mb-6">
              <li>Flexible Versicherungssummen (50.000€–1 Mio. €)</li>
              <li>Günstige Beiträge für Nichtraucher</li>
              <li>Schneller Abschluss ohne Gesundheitsprüfung (bei kleinen Summen)</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.cosmosdirekt.de/risikolebensversicherung/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Risikoleben vergleichen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Testsieger Versicherungsvergleich 2025</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(provider.name === "CHECK24" || provider.name === "HUK-COBURG" || provider.name === "Allianz" || provider.name === "CosmosDirekt" || provider.name === "ARAG") && (
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
            <h2 className="text-3xl font-bold mb-6">Rechtsschutzversicherung - Ihre Rechte schützen</h2>
            <h3 className="text-lg font-bold mb-2">Warum wichtig?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Eine Rechtsschutzversicherung deckt Kosten für Anwälte und Gerichte in Streitfällen. Ideal für Arbeits-, Miet- oder Verkehrsstreitigkeiten.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Leistungen:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Deckt Kosten bis zu 1 Mio. € pro Fall</li>
              <li>Kostenlose Erstberatung durch Anwälte</li>
              <li>Schutz bei Mietstreitigkeiten oder Nachbarschaftsstreit</li>
              <li>Online-Schadenmeldung und schneller Service</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">💡 Spartipp:</h3>
            <ul className="list-disc text-base mb-6">
              <li>Online-Abschlüsse sparen bis zu 30%. Kombinieren Sie mit anderen Versicherungen, um Rabatte zu sichern.</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.arag.de/rechtsschutzversicherung/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Rechtsschutz vergleichen
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Häufige Fragen zu Versicherungen</h2>
            <h3 className="text-lg font-bold mb-2">Wie wechsle ich meine Versicherung?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Prüfen Sie die Kündigungsfrist (meist 1–3 Monate). Nutzen Sie unseren Vergleich, um einen besseren Tarif zu finden, und lassen Sie den neuen Anbieter die Kündigung übernehmen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Was kostet eine Versicherung?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Kosten variieren je nach Versicherungstyp. Haftpflicht ab 30€/Jahr, Kfz ab 150€/Jahr, Hausrat ab 50€/Jahr. Regelmäßiger Vergleich spart Geld.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2">Sind Online-Abschlüsse sicher?</h3>
            <ul className="list-disc text-base mb-6">
              <li>Ja, mit 256-Bit-SSL-Verschlüsselung und VideoIdent sind Online-Abschlüsse sicher und bequem.</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.check24.de/versicherungen/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Versicherungen vergleichen
                </Button>
              </a>
            </div>
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
