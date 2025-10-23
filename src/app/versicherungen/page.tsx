"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

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
                <div className="font-semibold text-2xl mb-3 text-left ml-2">Finanzprodukte</div>
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
                <div className="font-semibold text-2xl mb-3 text-left ml-2">Weitere Produkte</div>
                <div className="grid grid-cols-2 gap-2">
                  <ul className="flex flex-col gap-2 text-base">
                    {[
                      { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
                      { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
                      { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
                      { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.tarifcheck.com/NMXe4cX', isInternal: false },
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
                <div className="text-center mt-4">
                  <Button
                    className="w-auto bg-green-600 text-white font-medium text-base px-4 py-2 transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Startseite
                  </Button>
                </div>
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
              { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.tarifcheck.com/NMXe4cX', isInternal: false },
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
      "Vergleich von über 300 Kfz-Versicherungstarifen",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 10/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Über 3.194 verifizierte Kundenbewertungen",
      "Deutschlands drittgrößtes Vergleichsportal",
      "Bis zu 1.000€ jährlich sparen bei Kfz-Versicherungen"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 120€ Neukundenbonus",
    logo: "🏆",
    url: "https://www.tarifcheck.com/wmPi92g",
    metaTitle: "Tarifcheck.de Versicherungsvergleich: Bis zu 1.000€ sparen 2025",
    metaDescription: "Vergleichen Sie über 300 Kfz-Versicherungen mit Tarifcheck.de. Kostenlos, unverbindlich und mit Top-Bewertungen. Sparen Sie bis zu 1.000€ jährlich!",
    isTopRecommendation: true
  },
  {
    name: "CHECK24",
    rating: 4.8,
    features: [
      "Vergleich von über 300 Versicherungen in wenigen Minuten",
      "Testsieger in über 25 Kategorien (Handelsblatt 10/2024)",
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
    url: "https://www.tarifcheck.com/djwVRAd",
    metaTitle: "CHECK24 Versicherungsvergleich: Testsieger 2025 mit bis zu 50% Ersparnis",
    metaDescription: "Vergleichen Sie über 300 Versicherungen mit CHECK24. Kostenlos, transparent und mit Top-Bewertungen. Sparen Sie bis zu 50% mit unseren Testsiegern!",
    isTopRecommendation: true
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
    metaTitle: "InShared Kfz-Versicherung: Günstige Tarife mit Geld-zurück-Garantie 2025",
    metaDescription: "InShared bietet günstige Kfz-Versicherungen mit Geld-zurück-Garantie und 24/7 Notfallservice. Jetzt vergleichen und sparen!",
    isTopRecommendation: true
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
    url: "https://www.awin1.com/awclick.php?gid=365648&mid=15000&awinaffid=2524533&linkid=2841978&clickref=",
    metaTitle: "AXA Versicherungen: Top Hausratversicherung 2025",
    metaDescription: "AXA bietet individuellen Schutz für Hausrat und Eigentum mit Testsieger-Tarifen. Jetzt Tarifrechner nutzen und sparen!",
    isTopRecommendation: true
  },
  {
    name: "BavariaDirekt",
    rating: 4.5,
    features: [
      "Günstige Kfz-Versicherung ab 9,70€/Monat",
      "Bis zu 350€ Ersparnis beim Vergleich",
      "91% Weiterempfehlungsrate von Kunden",
      "24h Notfall-Hotline für schnhelle Unterstützung",
      "Schufa-neutrale Tarifberechnung",
      "Einfacher Online-Abschluss in 3 Minuten",
      "Ausgezeichnet als 'Fairer Versicherer' (Focus Money)"
    ],
    price: "ab 9,70€/Monat",
    bonus: "Bis zu 350€ Ersparnis",
    logo: "🚘",
    url: "https://www.awin1.com/awclick.php?gid=355334&mid=13884&awinaffid=2524533&linkid=2322280&clickref=",
    metaTitle: "BavariaDirekt Kfz-Versicherung: Bis zu 350€ sparen 2025",
    metaDescription: "BavariaDirekt bietet günstige Kfz-Versicherungen mit hoher Kundenzufriedenheit. Jetzt vergleichen und bis zu 350€ sparen!",
    isTopRecommendation: true
  },
  {
    name: "HanseMerkur",
    rating: 4.7,
    features: [
      "Zahnzusatzversicherung ohne Wartezeit",
      "Bis zu 100% Kostenerstattung für Zahnersatz",
      "SEHR GUT bei Stiftung Warentest (07/2025)",
      "Tarife für Vorsorge und Implantate",
      "Neue ServiceApp für einfache Verwaltung",
      "150 Jahre Erfahrung und Kundennähe",
      "Ausgezeichnet als fairster Tierversicherer"
    ],
    price: "ab 5€/Monat",
    bonus: "Kostenlose Erstberatung",
    logo: "🦷",
    url: "https://www.awin1.com/awclick.php?gid=329260&mid=11705&awinaffid=2524533&linkid=3289856&clickref=",
    metaTitle: "HanseMerkur Zahnzusatzversicherung: Testsieger 2025",
    metaDescription: "HanseMerkur bietet erstklassige Zahnzusatzversicherungen ohne Wartezeit. Jetzt Tarife vergleichen und profitieren!",
    isTopRecommendation: true
  },
  {
    name: "hepster",
    rating: 4.6,
    features: [
      "Flexible E-Bike- und Fahrradversicherungen ohne Selbstbeteiligung",
      "100% digitale Buchung und Schadenmeldung",
      "Monats- oder Jahresabo für maximale Flexibilität",
      "Trusted Shops zertifiziert mit Top-Kundenbewertungen",
      "Tierversicherungen für Katzen und Hunde",
      "Reiseversicherungen mit kurzfristiger Buchung",
      "Haftpflichtversicherung für Alltagsrisiken",
      "Partnerschaften mit Helvetia und Europäische Reiseversicherung"
    ],
    price: "ab 3,99€/Monat",
    bonus: "14 Tage kostenlos widerrufbar",
    logo: "🚲",
    url: "https://www.awin1.com/awclick.php?gid=458089&mid=17549&awinaffid=2524533&linkid=3870155&clickref=",
    metaTitle: "hepster Versicherungen: Flexible E-Bike- und Tierversicherungen 2025",
    metaDescription: "hepster bietet flexible E-Bike- und Tierversicherungen mit digitaler Abwicklung. Jetzt Tarife vergleichen und sparen!",
    isTopRecommendation: true
  },
  {
    name: "Tarifcheck Wohngebäudeversicherung",
    rating: 4.6,
    features: [
      "Vergleich von über 200 Wohngebäudeversicherungen",
      "100% kostenloser und unverbindlicher Vergleich",
      "Schutz für Haus und Eigentum vor Feuer, Sturm und mehr",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 10/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Bis zu 500€ jährliche Ersparnis",
      "Schneller Online-Abschluss in wenigen Minuten",
      "Kostenlose Beratung für maßgeschneiderte Tarife"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 500€ Ersparnis",
    logo: "🏡",
    url: "https://www.tarifcheck.com/xLfTPmG",
    metaTitle: "Tarifcheck Wohngebäudeversicherung: Bis zu 500€ sparen 2025",
    metaDescription: "Vergleichen Sie über 200 Wohngebäudeversicherungen mit Tarifcheck. Kostenlos und mit Top-Bewertungen. Jetzt sparen!",
    isTopRecommendation: true
  },
  {
    name: "Verivox",
    rating: 4.6,
    features: [
      "Vergleich von Kfz-, Hausrat- und Haftpflichtversicherungen",
      "Nirgendwo-Günstiger-Garantie mit bis zu 300€ Rückerstattung",
      "Kostenlose und Schufa-neutrale Kreditanfragen",
      "Über 20 Jahre Erfahrung im Vergleichsmarkt",
      "TÜV-geprüfte Plattform für Versicherungen und Finanzen",
      "Bis zu 850€ Ersparnis bei Kfz-Versicherungen",
      "Kostenlose Beratung für Umschuldung und Finanzoptimierung"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 300€ Rückerstatting",
    logo: "⚖️",
    url: "https://www.awin1.com/awclick.php?gid=373003&mid=14797&awinaffid=2524533&linkid=2691475&clickref=",
    metaTitle: "Verivox Versicherungsvergleich: Bis zu 850€ sparen 2025",
    metaDescription: "Verivox bietet TÜV-geprüfte Vergleiche für Kfz-, Hausrat- und Haftpflichtversicherungen. Jetzt bis zu 850€ sparen!",
    isTopRecommendation: true
  },
  {
    name: "ROLAND Rechtsschutz",
    rating: 4.8,
    features: [
      "Umfassender Schutz für Privat, Beruf und Verkehr",
      "Mehrfacher Testsieger 'Fairster Leistungsregulierer' (Focus Money 2025)",
      "60 Tage Widerrufsrecht für maximale Flexibilität",
      "24/7 Schadenmeldung und telefonische Erstberatung",
      "eKomi-Bewertung 4,9/5 für höchste Kundenzufriedenheit",
      "Spezialtarife wie Manager- und Internet-Rechtsschutz",
      "Kostenloser Datenleck-Check für Ihre Datensicherheit",
      "Über 65 Jahre Erfahrung als Rechtsschutz-Spezialist"
    ],
    price: "ab 12,50€/Monat",
    bonus: "Bis zu 70€ Empfehlungsbonus",
    logo: "🛡️",
    url: "https://www.awin1.com/awclick.php?gid=324436&mid=11215&awinaffid=2524533&linkid=3007378&clickref=",
    metaTitle: "ROLAND Rechtsschutzversicherung: Testsieger 2025",
    metaDescription: "ROLAND bietet umfassenden Rechtsschutz mit Top-Bewertungen und 60 Tagen Widerrufsrecht. Jetzt Tarife vergleichen!",
    isTopRecommendation: true
  },
  {
    name: "TravelSecure",
    rating: 4.7,
    features: [
      "Testsieger bei Stiftung Warentest (01/2025, Note 1,4)",
      "Reiserücktritts- und Auslandskrankenversicherung für Einzelpersonen und Familien",
      "Jahresreiseversicherung Reisekarte4you für Vielreisende",
      "Spezialtarife für Work & Travel, Au-Pair und Studenten",
      "Ski-Haftpflichtversicherung für Italien & Südtirol",
      "Gruppenreiseversicherung ab 8 Personen ohne Altersbegrenzung",
      "Beste Kundenhotline 2024 (Focus Money)",
      "eKomi-Bewertung 4,3/5 für hohe Kundenzufriedenheit"
    ],
    price: "ab 6,90€/Jahr",
    bonus: "Kostenlose Beratung",
    logo: "✈️",
    url: "https://www.awin1.com/awclick.php?gid=505833&mid=106517&awinaffid=2524533&linkid=3795138&clickref=",
    metaTitle: "TravelSecure Reiseversicherung: Testsieger 2025",
    metaDescription: "TravelSecure bietet Testsieger-Reiseversicherungen für Familien und Vielreisende. Jetzt Tarife vergleichen!",
    isTopRecommendation: true
  },
  {
    name: "Die Bayerische",
    rating: 4.8,
    features: [
      "Optimaler Hinterbliebenenschutz für Ihre Familie",
      "Flexibler Vergleichsrechner für maßgeschneiderte Tarife",
      "Bis zu 100% Absicherung des Familieneinkommens",
      "Testsieger bei Stiftung Warentest (10/2025, Note 1,3)",
      "Einfacher Online-Abschluss in wenigen Minuten",
      "Kostenlose Beratung durch Experten",
      "Anpassbare Versicherungssumme und Laufzeit",
      "Über 160 Jahre Erfahrung und Vertrauen"
    ],
    price: "ab 5,90€/Monat",
    bonus: "10% Rabatt bei Abschluss bis 31.12.2025",
    logo: "🛡️",
    url: "https://www.awin1.com/awclick.php?gid=391372&mid=17046&awinaffid=2524533&linkid=2659747&clickref=",
    metaTitle: "Die Bayerische Risikolebensversicherung: Testsieger 2025",
    metaDescription: "Die Bayerische bietet Testsieger-Risikolebensversicherungen mit flexiblen Tarifen. Jetzt vergleichen und sparen!",
    isTopRecommendation: true
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
    url: "https://www.allianz.de/versicherungen/",
    metaTitle: "Allianz Versicherungen: Zuverlässiger Schutz für Kfz und Hausrat 2025",
    metaDescription: "Allianz bietet umfassenden Schutz für Kfz, Hausrat und mehr mit 4,6/5 eKomi-Bewertung. Jetzt Tarife vergleichen und Treuebonus sichern!",
    isTopRecommendation: true
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
    url: "https://www.cosmosdirekt.de/versicherungen/",
    metaTitle: "CosmosDirekt: Testsieger Risikolebensversicherung 2025",
    metaDescription: "CosmosDirekt bietet günstige Risikolebensversicherungen und digitale Abwicklung. Jetzt Tarife vergleichen und sparen!",
    isTopRecommendation: true
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
    url: "https://www.arag.de/versicherungen/",
    metaTitle: "ARAG Rechtsschutzversicherung: Marktführer für Miet- und Verkehrsrecht 2025",
    metaDescription: "ARAG bietet erstklassigen Rechtsschutz für Privat und Berufsleben. Bis zu 30% Online-Rabatt. Jetzt vergleichen!",
    isTopRecommendation: true
  }
]

// HaftpflichtRechner Komponente
const HaftpflichtRechner = () => {
  useEffect(() => {
    // Script für den Haftpflichtrechner laden
    const script = document.createElement('script');
    script.src = 'https://form.partner-versicherung.de/widgets/192394/tcpp-iframe-kfz/kfz-iframe.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Script entfernen beim Unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }} id="tcpp-iframe-kfz" data-style="custom_green"></div>
  );
};

export default function Versicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Top-Empfehlungen zuerst
  const sortedProviders = [...providerData].sort((a, b) => {
    if (a.isTopRecommendation && !b.isTopRecommendation) return -1
    if (!a.isTopRecommendation && b.isTopRecommendation) return 1
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <Head>
  <title>Beste Versicherung Oktober 2025 | Alle Versicherungen im Vergleich</title>
  <meta
    name="description"
    content="Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie bis zu 50% mit Testsiegern wie CHECK24, Allianz, CosmosDirekt, ARAG und mehr."
  />
  <meta
    name="keywords"
    content="Versicherungsvergleich, Kfz-Versicherung, Haftpflichtversicherung, Hausratversicherung, Rechtsschutzversicherung, Testsieger 2025, CHECK24, Allianz, CosmosDirekt, ARAG, Tarifcheck, InShared, AXA, BavariaDirekt, HanseMerkur, hepster, Verivox, ROLAND Rechtsschutz, TravelSecure, Die Bayerische"
  />
  <link rel="canonical" href="https://unser-vergleichsportal.de/versicherungen" />
  <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />
  <meta name="author" content="SmartFinanz" />
  <meta name="format-detection" content="telephone=no" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Beste Versicherungen Oktober 2025 | Alle Versicherungen im Vergleich" />
  <meta
    property="og:description"
    content="Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie bis zu 50% mit Testsiegern wie CHECK24, Allianz, CosmosDirekt, ARAG und mehr."
  />
  <meta property="og:url" content="https://unser-vergleichsportal.de/versicherungen" />
  <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
  <meta
    property="og:image"
    content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Unser-Vergleichsportal – Versicherungen einfach vergleichen & sparen" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Beste Versicherungen Oktober 2025 | Alle Versicherungen im Vergleich" />
  <meta
    name="twitter:description"
    content="Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Bis zu 50% sparen mit unseren Testsiegern."
  />
  <meta
    name="twitter:image"
    content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
  />
  <meta name="twitter:site" content="@unservergleich" />

  {/* Schema Markup for SEO */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Beste Versicherungen Oktober 2025 | Alle Versicherungen im Vergleich",
        description:
          "Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie bis zu 50% mit Testsiegern wie CHECK24, Allianz, CosmosDirekt, ARAG und mehr.",
        url: "https://unser-vergleichsportal.de/versicherungen",
        keywords: [
          "Versicherungsvergleich",
          "Kfz-Versicherung",
          "Haftpflichtversicherung",
          "Hausratversicherung",
          "Rechtsschutzversicherung"
        ],
        mainEntity: {
          "@type": "ItemList",
          itemListElement: sortedProviders.map((provider, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: provider.name,
              description: provider.metaDescription,
              offers: {
                "@type": "Offer",
                price: provider.price,
                url: provider.url
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: provider.rating,
                reviewCount: "100"
              },
              keywords: [
                "Versicherungsvergleich",
                "Kfz-Versicherung",
                "Haftpflichtversicherung",
                "Hausratversicherung",
                "Rechtsschutzversicherung"
              ]
            }
          }))
        }
      })
    }}
  />

  {/* FAQ Schema Markup */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            "name": "Welche Versicherungen sind in Deutschland Pflicht?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zu den Pflichtversicherungen in Deutschland zählen u.a. die Kfz-Haftpflichtversicherung, die Krankenversicherung sowie bestimmte Berufshaftpflichtversicherungen. Alle weiteren Versicherungen sind freiwillig, können aber sinnvoll sein."
            }
          },
          {
            "@type": "Question",
            "name": "Wann lohnt sich eine Vollkaskoversicherung?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eine Vollkaskoversicherung lohnt sich besonders bei neuen oder hochwertigen Fahrzeugen. Sie deckt zusätzlich zu den Teilkasko-Leistungen auch selbstverschuldete Unfälle und Vandalismus ab."
            }
          },
          {
            "@type": "Question",
            "name": "Wie kann ich meine Versicherung wechseln?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ein Wechsel ist in der Regel zum Ende der Vertragslaufzeit möglich. Viele Anbieter bieten Kündigungshilfen. Im Vergleichsrechner finden Sie bessere Tarife und können direkt wechseln."
            }
          }
        ]
      })
    }}
  />
</Head>

      <Header />

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Beste Versicherungen Oktober 2025 | Alle Versicherungen im Vergleich
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Vergleichen Sie über 300 Versicherungsprodukte kostenlos mit SmartFinanz. Sparen Sie bis zu 50% jährlich mit
              Testsiegern wie CHECK24, Allianz, CosmosDirekt, ARAG, Tarifcheck, Verivox und mehr. Finden Sie die besten Tarife für Kfz,
              Haftpflicht, Hausrat, Rechtsschutz und mehr mit transparenten Bewertungen und attraktiven Boni.
            </p>
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            So finden Sie die passende Versicherung
          </h2>

          {/* Trust Signals hinzugefügt */}
          <div className="mt-6 mb-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Image
              src="/images/5.png"
              alt="Vertrauenssignal 5"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/1.png"
              alt="Vertrauenssignal 1"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/2.png"
              alt="Vertrauenssignal 2"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/3.png"
              alt="Vertrauenssignal 3"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/4.png"
              alt="Vertrauenssignal 4"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Tipps für einen erfolgreichen Versicherungsvergleich
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Vergleichen Sie Angebote:</strong> Nutzen Sie unseren kostenlosen Vergleich, um über 300 Angebote von Top-Anbietern wie CHECK24, Tarifcheck und Verivox zu prüfen.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Achten Sie auf Bewertungen:</strong> Vertrauen Sie auf verifizierte Kundenbewertungen (z. B. eKomi 4,8/5 für Allianz, ARAG und ROLAND Rechtsschutz) für Ihre Entscheidung.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Prüfen Sie Leistungen:</strong> Achten Sie auf flexible Tarife, schnellen Schadensservice und Kombirabatte bei CosmosDirekt und Die Bayerische.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Überprüfen Sie Vertragsbedingungen:</strong> Lesen Sie das Kleingedruckte, um versteckte Kosten oder Ausschlüsse zu vermeiden, z. B. bei Selbstbeteiligungen oder Kündigungsfristen.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Jährlicher Vergleich lohnt sich:</strong> Versicherungstarife ändern sich regelmäßig. Ein jährlicher Vergleich spart bis zu 500€, besonders bei Kfz- und Hausratversicherungen.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Nutzen Sie digitale Tools:</strong> Apps und Online-Portale von Anbietern wie HanseMerkur oder hepster ermöglichen schnelle Schadenmeldungen und einfache Tarifanpassungen.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Top-Empfehlungen: Versicherungsvergleich 10/2025
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedProviders.map((provider) => (
              <Card
                key={provider.name}
                className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative"
              >
                {provider.isTopRecommendation && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">Top Empfehlung</Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="text-center border-b pb-2 mb-4">
                    <p className="text-xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">
                      {provider.bonus}
                    </Badge>
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
                    target={provider.url.startsWith("http") ? "_blank" : "_self"}
                    rel={provider.url.startsWith("http") ? "sponsored" : undefined}
                  >
                    <Button className="w-full mt-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                      ZUM ANBIETER UND SPAREN*
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>*Wir erhalten eine Provision für Käufe über diese Links.</p>
          </div>
        </div>
      </section>
{/* Finanztipps Sektion */}
<section className="py-12 sm:py-16 bg-white" id="finanztipps">
  <div className="container mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
      Aktuelle Finanztipps und Artikel
    </h2>
    <p className="text-base sm:text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
      Entdecken Sie unsere neuesten Finanztipps und Einblicke auf unserem LinkedIn-Profil. Von steuerlichen Herausforderungen über Vermögensaufbau bis hin zu smarter Finanzplanung – bleiben Sie informiert!
    </p>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Sozialabgaben-Schock 2026: Wer zahlt die Rechnung?",
          description: "Die Erhöhung der Beitragsbemessungsgrenzen ab 2026 bringt Mehrkosten für Gutverdiener und Arbeitgeber. Was tun?",
          url: "https://www.linkedin.com/posts/unservergleichsportalde_sozialabgaben-lohnnebenkosten-finanzmanagement-activity-7381646319544598528-TuJg",
          date: "9. Oktober 2025",
        },
        {
          title: "87.000 € vs. 311.000 €: Warum deutsche Sparer zurückfallen",
          description: "Der Allianz Global Wealth Report zeigt: Deutsche investieren zu wenig in Aktien. Wie Sie die Vermögenslücke schließen.",
          url: "https://www.linkedin.com/posts/unservergleichsportalde_vermaemgensaufbau-finanzen-investment-activity-7380966545365217280-BjaG",
          date: "7. Oktober 2025",
        },
        {
          title: "DKB senkt Dispozinsen: Günstiges Girokonto ab Oktober 2025",
          description: "Die DKB senkt ab 01.10.2025 die Dispozinsen – ein Top-Angebot für clevere Kontoinhaber.",
          url: "https://www.linkedin.com/posts/unservergleichsportalde_dkb-girokonto-zinsen-activity-7378676241324863488-sF9W",
          date: "1. Oktober 2025",
        },
        {
          title: "Krypto unter Druck: Steuerfahnder nehmen Anleger ins Visier",
          description: "Finanzbehörden jagen unversteuerte Krypto-Gewinne. Wie Sie jetzt reagieren, um Strafen zu vermeiden.",
          url: "https://www.linkedin.com/posts/unservergleichsportalde_krypto-bitcoin-steuern-activity-7378304235051843584-fmwN",
          date: "30. September 2025",
        },
        {
          title: "Immobilieneigentümer: So sparen Sie 4.000€+ pro Jahr",
          description: "Mit der richtigen Energie-Strategie können Immobilieneigentümer jährlich Tausende Euro einsparen.",
          url: "https://www.linkedin.com/posts/unservergleichsportalde_immobilieneigent%C3%BCmer-so-sparen-sie-4000-activity-7376569695614885888-pf7_",
          date: "25. September 2025",
        },
        {
          title: "Warum eine Hunde-Haftpflichtversicherung unverzichtbar ist",
          description: "Schützen Sie sich vor hohen Kosten durch Schäden Ihres Hundes – eine Hunde-Haftpflicht ist Pflicht!",
          url: "https://www.linkedin.com/posts/unservergleichsportalde_warum-eine-hunde-haftpflichtversicherung-activity-7374460905553661952-_G5d",
          date: "20. September 2025",
        },
        {
          title: "Finanzoptimierung: Von Tagesgeld zu Neobroker",
          description: "Steigen Sie um auf Neobroker und ETFs für 8-12% Rendite und schützen Sie Ihr Vermögen vor Inflation.",
          url: "https://www.linkedin.com/posts/unservergleichsportalde_finanzoptimierung-durch-globales-verstehen-activity-7374176844977278976-M6oU",
          date: "19. September 2025",
        },
      ].map((post, index) => (
        <Card
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
        >
          <CardHeader className="pb-4 flex-shrink-0">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 break-words">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500">{post.date}</p>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-4">
              {post.description}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mt-auto"
              aria-label={`LinkedIn-Beitrag lesen: ${post.title}`}
            >
              <Button
                className="w-full bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
              >
                Beitrag lesen
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="text-center mt-8">
      <a
        href="https://www.linkedin.com/in/unservergleichsportalde"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Besuchen Sie unser LinkedIn-Profil für weitere Beiträge"
      >
        <Button
          className="bg-green-600 text-white font-medium text-sm sm:text-base px-6 py-3 transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          Mehr Tipps auf LinkedIn entdecken
        </Button>
      </a>
    </div>
  </div>
</section>
      {/* Guide */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Ihr Weg zur Besten Versicherung 2025
          </h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Günstige Kfz-Versicherung mit maximalem Schutz
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine gute Kfz-Versicherung bietet umfassenden Schutz ohne versteckte Kosten. Achten Sie auf Rabatte (z. B. für Werkstattbindung) und flexible Zusatzbausteine wie Schutzbrief oder Insassenunfallversicherung.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Günstige Prämien bei guter Schadenquote
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloser Schutzbrief bei Unfällen
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schneller Schadensservice (24/7)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Flexible Zusatzbausteine (z. B. Mallorca-Police)
              </li>
            </ul>
            
            {/* Haftpflichtrechner mit optimierter Überschrift */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center mt-8">
              KFZ-Haftpflichtversicherung Vergleich 2025 - Jetzt in 2 Minuten Tarife vergleichen & bis zu 300€ sparen
            </h2>
            <div className="my-4">
              <HaftpflichtRechner />
            </div>

            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Spartipp:</strong> Durch den Wechsel der Kfz-Versicherung können Sie bis zu 500€ jährlich sparen. Nutzen Sie unseren Vergleich, um die besten Tarife zu finden.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Privathaftpflichtversicherung für jeden Haushalt
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Privathaftpflichtversicherung schützt Sie vor finanziellen Risiken bei Schäden, die Sie anderen zufügen. Sie ist essenziell für jeden Haushalt.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Deckt Schäden bis zu 50 Mio. €
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz bei Schlüsselverlust oder Mietsachschäden
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Familienabsicherung inklusive
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Günstige Hausratversicherung für Mieter und Eigentümer
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Hausratversicherung schützt Ihr Hab und Gut bei Einbruch, Feuer oder Wasserschäden. Ideal für Mieter und Eigentümer.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Neuwertentschädigung bei Totalschaden
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz bei Elementarschäden (z. B. Sturm, Hagel)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Fahrraddiebstahl optional einschließbar
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Spartipp:</strong> Online-Abschlüsse sparen bis zu 30%. Nutzen Sie Apps für schnelle Schadenmeldung.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.check24.de/hausratversicherung/" target="_blank" rel="sponsored">
                <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  HAUSRATVERSICHERUNG VERGLEICHEN
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Risikolebensversicherung für junge Familien
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Risikolebensversicherung schützt Ihre Liebsten finanziell im Todesfall. Besonders wichtig für Familien mit Kindern oder Hypotheken.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Flexible Versicherungssummen (50.000€–1 Mio. €)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Günstige Beiträge für Nichtraucher
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schneller Abschluss ohne Gesundheitsprüfung (bei kleinen Summen)
              </li>
            </ul>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.cosmosdirekt.de/risikolebensversicherung/" target="_blank" rel="sponsored">
                <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  RISIKOLEBENSVERSICHERUNG VERGLEICHEN
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Rechtsschutzversicherung für Miet- und Verkehrsstreitigkeiten
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Rechtsschutzversicherung deckt Kosten für Anwälte und Gerichte in Streitfällen. Ideal für Arbeits-, Miet- oder Verkehrsstreitigkeiten.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Deckt Kosten bis zu 1 Mio. € pro Fall
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenlose Erstberatung durch Anwälte
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz bei Mietstreitigkeiten oder Nachbarschaftsstreit
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Spartipp:</strong> Online-Abschlüsse sparen bis zu 30%. Kombinieren Sie mit Haftpflicht für Rabatte.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.arag.de/rechtsschutzversicherung/" target="_blank" rel="sponsored">
                <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  RECHTSSCHUTZVERSICHERUNG VERGLEICHEN
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Häufige Fragen zu Versicherungen
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Antworten zu Ihren Versicherungsfragen
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Wie wechsle ich meine Versicherung?</strong> Prüfen Sie die Kündigungsfrist (meist 1–3 Monate). Nutzen Sie unseren Vergleich, um einen besseren Tarif zu finden, und lassen Sie den neuen Anbieter die Kündigung übernehmen.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Was kostet eine Versicherung?</strong> Kosten variieren: Haftpflicht ab 30€/Jahr, Kfz ab 150€/Jahr, Hausrat ab 50€/Jahr. Regelmäßiger Vergleich spart Geld.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Sind Online-Abschlüsse sicher?</strong> Ja, mit 256-Bit-SSL-Verschlüsselung und VideoIdent sind Online-Abschlüsse sicher und bequem.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Welche Versicherung für junge Familien?</strong> Risikolebensversicherung (z. B. CosmosDirekt) und Haftpflicht sind ideal, um Familie und Haushalt abzusichern.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Was deckt eine Hausratversicherung?</strong> Schutz bei Einbruch, Feuer, Wasserschäden und optional Fahrraddiebstahl. Neuwertentschädigung inklusive.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Warum Rechtsschutzversicherung?</strong> Deckt Anwalts- und Gerichtskosten bei Miet-, Arbeits- oder Verkehrsstreitigkeiten. ARAG bietet bis zu 1 Mio. € Schutz.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Prüfen Sie Deckungssummen:</strong> Achten Sie auf ausreichende Deckung (z. B. 50 Mio. € bei Haftpflicht oder 1 Mio. € bei Rechtsschutz) für umfassenden Schutz.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Vertrauen Sie auf sichere Plattformen:</strong> Verwenden Sie TÜV-geprüfte Portale wie Verivox oder CHECK24 für sichere und transparente Vergleiche.</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.check24.de/versicherungen/" target="_blank" rel="sponsored">
              <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                ALLE VERSICHERUNGEN IM ÜBERBLICK
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA - Button entfernt */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Schnell und einfach zum besten Versicherungsangebot</h2>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie mit wenigen Klicks die besten Tarife für Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie Zeit und Geld mit unserem kostenlosen Vergleich.
            </p>
            {/* Button wurde hier entfernt */}
          </div>
        </div>
      </section>

    <footer className="bg-gray-900 text-white py-8 sm:py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-5">
      <div className="col-span-2 md:col-span-1">
        <div className="flex flex-col items-start mb-4">
          <SmartFinanzLogo className="text-xl" />
        </div>
      </div>
      
      <div>
        <span className="font-semibold mb-3 text-lg sm:text-xl">Finanzprodukte</span>
        <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
        <span className="font-semibold mb-3 text-lg sm:text-xl">Weitere Produkte</span>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
                href="https://www.tarifcheck.com/NMXe4cX" 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                aria-label="Kreditkarten vergleichen (externer Link)"
              >
                Kreditkarte
              </a>
            </li>
          </ul>
          <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
        <span className="font-semibold mb-3 text-lg sm:text-xl">Unternehmen</span>
        <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
        <span className="font-semibold mb-3 text-lg sm:text-xl">Rechtliches</span>
        <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
      <p className="text-sm sm:text-base text-gray-400 mb-4">
        © 2025 SmartFinanz unser-vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
      </p>
      <Link href="/" aria-label="Zurück zur Startseite">
        <Button 
          className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
        >
          Zur Startseite
        </Button>
      </Link>
    </div>
  </div>
</footer>
    </div>
  )
}
