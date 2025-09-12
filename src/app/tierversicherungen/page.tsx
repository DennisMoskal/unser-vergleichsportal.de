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
  const [activeCategory, setActiveCategory] = useState("tierversicherungen")

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
      <section className="bg-white py-4 border-b" id="tierversicherungen">
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

const providerData = [
  {
    name: "Tarifcheck Tierversicherung",
    rating: 4.5,
    features: [
      "Vergleich von über 200 Tierversicherungstarifen",
      "100% kostenloser und unverbindlicher Vergleich",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 09/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Über 3.194 verifizierte Kundenbewertungen",
      "Bis zu 850€ Ersparnis bei Tierversicherungen",
      "Schufa-neutrale Tarifanfrage",
      "Kostenlose Beratung durch Experten"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 120€ Neukundenbonus",
    logo: "🏆",
    url: "https://www.tarifcheck.com/5dM0KnS",
    metaTitle: "Tarifcheck Tierversicherung: Kostenloser Vergleich für Haustiere",
    metaDescription: "Vergleichen Sie über 200 Tierversicherungen mit Tarifcheck. Kostenlos, unverbindlich und mit bis zu 850€ Ersparnis. Jetzt starten!"
  },
  {
    name: "CHECK24 Tierversicherung",
    rating: 4.7,
    features: [
      "Marktführer mit über 90% Marktabdeckung",
      "Vergleich von über 250 Tierversicherungstarifen",
      "Über 25 Testsiege im Versicherungsvergleich (Handelsblatt 09/2024)",
      "Nirgendwo-Günstiger-Garantie für beste Preise",
      "Kostenlose Beratung durch 300 Experten (08:00–22:00 Uhr)",
      "Über 98% Kundenzufriedenheit",
      "Transparente Provisionen bei Vermittlung",
      "Zusätzliche Vergleiche für Kfz und Hausrat"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 100€ Cashback",
    logo: "✅",
    url: "https://www.tarifcheck.com/WeOIgnW",
    metaTitle: "CHECK24 Tierversicherung: Testsieger für Hunde und Katzen",
    metaDescription: "CHECK24 bietet Testsieger-Vergleiche für über 250 Tierversicherungen. Kostenlos, mit bis zu 100€ Cashback. Jetzt die beste Versicherung finden!"
  },
  {
    name: "Uelzener Tierversicherung",
    rating: 4.7,
    features: [
      "Über 150 Jahre Erfahrung in Tierversicherungen",
      "Umfassender Schutz für Hunde, Katzen und Pferde",
      "Hundehaftpflicht mit bis zu 50 Mio. € Deckungssumme",
      "Testsieger in Leistungs- und Fairness-Tests 2024",
      "Treue- und Altersrabatte für Hunde über 6 Jahre",
      "Auslandsschutz für bis zu 12 Monate weltweit",
      "Flexible Tarife für individuelle Bedürfnisse",
      "Kranken- und OP-Versicherung mit Gesundheitspauschale"
    ],
    price: "ab 3,76€/Monat",
    bonus: "Treue-Rabatt für Bestandskunden",
    logo: "🏇",
    url: "https://tidd.ly/3UN80GC",
    metaTitle: "Uelzener Tierversicherung: Günstige Hundehaftpflicht und Krankenversicherung",
    metaDescription: "Uelzener bietet seit 150 Jahren Schutz für Hunde, Katzen und Pferde. Testsieger 2024 mit bis zu 50 Mio. € Deckung. Jetzt Tarife vergleichen!"
  },
  {
    name: "BavariaDirekt",
    rating: 4.5,
    features: [
      "Günstige Hundehaftpflicht ab 23,13€/Jahr",
      "Bis zu 50 Mio. € Deckungssumme",
      "Welpen bis 12 Monate kostenfrei mitversichert",
      "10% Treue-Rabatt nach 5 Jahren",
      "Schutz auch bei grober Fahrlässigkeit",
      "24h-Notfall-Hotline für schnellen Service",
      "91% Kundenzufriedenheit und hohe Weiterempfehlung",
      "Auszeichnung als 'Fairer Versicherer' (Focus Money)"
    ],
    price: "ab 23,13€/Jahr",
    bonus: "10% Treue-Rabatt",
    logo: "🐶",
    url: "https://www.awin1.com/awclick.php?gid=355337&mid=13884&awinaffid=2524533&linkid=3445052&clickref=",
    metaTitle: "BavariaDirekt Hundehaftpflicht: Günstige Absicherung für Ihren Hund",
    metaDescription: "BavariaDirekt bietet günstige Hundehaftpflicht ab 23,13€/Jahr mit bis zu 50 Mio. € Deckung. Jetzt Tarife vergleichen und Welpen kostenfrei mitversichern!"
  },
  {
    name: "HanseMerkur Tierversicherung",
    rating: 4.6,
    features: [
      "Testsieger Tierkrankenversicherung (AssCompact Trends 2/2025)",
      "Hundehaftpflicht ab 3,36€/Monat für kleine Rassen",
      "Bis zu 100% Kostenübernahme für Tierarztbehandlungen",
      "Flexible Tarife: Smart, Easy, Best für OP-Versicherung",
      "Optional Zahn-Baustein für erweiterten Schutz",
      "Freie Tierarzt- und Klinikwahl weltweit",
      "Ausgezeichnet als 'Fairster Tierversicherer' (Focus Money 2025)",
      "Schnelle Schadenbearbeitung und Online-Abschluss"
    ],
    price: "ab 3,36€/Monat",
    bonus: "Rundum-Schutz für Hunde und Katzen",
    logo: "🐾",
    url: "https://www.awin1.com/awclick.php?gid=452030&mid=11705&awinaffid=2524533&linkid=3283544&clickref=",
    metaTitle: "HanseMerkur Tierversicherung: Testsieger für Hunde und Katzen",
    metaDescription: "HanseMerkur bietet preisgekrönte Hundeversicherung und Katzenversicherung ab 3,36€/Monat. Bis zu 100% Tierarztkosten-Erstattung. Jetzt vergleichen!"
  },
  {
    name: "AXA",
    rating: 4.4,
    features: [
      "Hundehalter-Haftpflicht mit bis zu 50 Mio. € Deckung",
      "Schutz für Schäden durch Ihren Hund weltweit",
      "Einfacher Online-Abschluss mit Sofortschutz",
      "24/7 Schadenmeldung über My AXA Portal",
      "Flexible Tarife mit wählbarer Selbstbeteiligung",
      "Persönliche Beratung deutschlandweit",
      "Inklusive Schutz bei grober Fahrlässigkeit",
      "Kombinierbar mit weiteren AXA Versicherungen"
    ],
    price: "ab 25€/Jahr",
    bonus: "Exklusives Smartphone-Gewinnspiel",
    logo: "🛡️",
    url: "https://www.awin1.com/awclick.php?gid=365648&mid=15000&awinaffid=2524533&linkid=3092888&clickref=",
    metaTitle: "AXA Hundehaftpflicht: Zuverlässiger Schutz für Hundehalter",
    metaDescription: "AXA bietet Hundehaftpflicht mit bis zu 50 Mio. € Deckung und weltweitem Schutz. Jetzt online abschließen und von Top-Beratung profitieren!"
  },
  {
    name: "Petprotect",
    rating: 4.65,
    features: [
      "Bis zu 100% Kostenübernahme für Tierarztbehandlungen",
      "Stiftung Warentest prämiert für Hundekrankenversicherung",
      "Kostenfreie Videosprechstunde mit FirstVet oder Pfotendoctor",
      "Schneller Versicherungsbeginn ohne Gesundheitsprüfung",
      "Weltweiter Auslandsschutz für Heilbehandlungen",
      "Erstattung bis zum 4-fachen GOT-Satz",
      "OP-Versicherung für Hunde und Katzen verfügbar",
      "24/7 Kundenberatung per Telefon und E-Mail"
    ],
    price: "ab 15€/Monat",
    bonus: "Kostenfreie Videosprechstunde",
    logo: "🐾",
    url: "https://www.petprotect.de",
    metaTitle: "Petprotect Tierversicherung: Beste Hundekrankenversicherung in Deutschland",
    metaDescription: "Schützen Sie Ihren Hund oder Ihre Katze mit Petprotect. Bis zu 100% Kostenübernahme mit kostenfreier Videosprechstunde. Jetzt vergleichen!"
  },
  {
    name: "Santevet",
    rating: 4.4,
    features: [
      "Spezialisiert auf Krankenversicherungen für Hunde und Katzen",
      "Bis zu 90% Kostenübernahme für Behandlungen",
      "Vorsorgebudget für Impfungen und Entwurmung",
      "Einfache Schadenmeldung über Online-Portal",
      "Keine Altersbeschränkung für Versicherungsabschluss",
      "Schnelle Auszahlung von Erstattungen",
      "Kostenlose Beratung für Tarifauswahl",
      "Zusätzliche Haftpflichtoption für Hunde"
    ],
    price: "ab 20€/Monat",
    bonus: "Vorsorgebudget inklusive",
    logo: "🐶",
    url: "https://www.santevet.de",
    metaTitle: "Santevet Tierversicherung: Krankenversicherung für Hunde und Katzen",
    metaDescription: "Santevet bietet bis zu 90% Kostenübernahme für Tierarztkosten und Vorsorgebudgets. Jetzt die beste Tierversicherung in Deutschland vergleichen!"
  },
  {
    name: "Figo",
    rating: 4.5,
    features: [
      "Ein Paket für den Rundumschutz: Konsultationen, Diagnostik, OPs, Medikamente und Spezialbehandlungen",
      "Flexible Beitragsgestaltung",
      "Bis zu 90 % Erstattung der Tierarztrechnung – ohne Jahreslimit",
      "Jedes Alter und alle Rassen versicherbar – ein Tierleben lang",
      "Vorsorge- und SOS-Budget",
      "Hausbesuche und Alternativmedizin",
      "Übernahme von Gelenkerkrankungen",
      "Kostenerstattung immer bis zum Höchstsatz der GOT",
      "Freie Tierarzt- & Klinikwahl",
      "Unbegrenzt kostenlose Videosprechstunden mit Tierärzten",
      "Kein Kündigungsrecht für die Versicherung im Schadenfall"
    ],
    price: "ab 18€/Monat",
    bonus: "Kostenlose Telemedizin",
    logo: "🐱",
    url: "https://www.awin1.com/awclick.php?gid=367217&mid=13775&awinaffid=2524533&linkid=2426488&clickref=",
    metaTitle: "Figo Tierversicherung: Flexible Krankenversicherung für Hunde und Katzen",
    metaDescription: "Figo bietet Rundumschutz mit bis zu 90% Erstattung ohne Jahreslimit, inklusive Telemedizin und Vorsorgebudget. Jetzt die beste Tierversicherung vergleichen!"
  },
  {
    name: "Lassie",
    rating: 4.3,
    features: [
      "Digitale Tierversicherung mit Fokus auf Prävention",
      "Bis zu 80% Kostenübernahme für Behandlungen",
      "Kostenlose Trainingskurse für Tiergesundheit",
      "Schufa-neutrale Tarifanfrage",
      "Schnelle Erstattung innerhalb von 7 Tagen",
      "Inklusive Haftpflicht für Hunde optional",
      "Umfassender Schutz für junge Tiere",
      "Kundenfreundliche App für Tarifverwaltung"
    ],
    price: "ab 12€/Monat",
    bonus: "Kostenlose Trainingskurse",
    logo: "🦴",
    url: "https://www.lassie.de",
    metaTitle: "Lassie Tierversicherung: Digitale Absicherung für Hunde und Katzen",
    metaDescription: "Lassie bietet digitale Tierversicherungen mit bis zu 80% Erstattung und Trainingskursen. Jetzt Tarife für Ihren Vierbeiner vergleichen!"
  },
  {
    name: "Petplan",
    rating: 4.4,
    features: [
      "Krankenversicherung für Hunde, Katzen und Kleintiere",
      "Bis zu 90% Kostenübernahme für Behandlungen",
      "Freie Tierarztwahl ohne Netzwerkbeschränkung",
      "Schnelle Schadenbearbeitung innerhalb von Tagen",
      "Optionale Absicherung für Vorsorgeleistungen",
      "Weltweiter Schutz für Auslandsreisen",
      "Tarife ohne Altersbeschränkung",
      "Kundensupport per Telefon und Online-Chat"
    ],
    price: "ab 15€/Monat",
    bonus: "Flexible Tarifoptionen",
    logo: "🐾",
    url: "https://www.petplan.de",
    metaTitle: "Petplan Tierversicherung: Schutz für Hunde, Katzen und Kleintiere",
    metaDescription: "Petplan bietet flexible Krankenversicherungen mit bis zu 90% Kostenübernahme. Jetzt die beste Tierversicherung in Deutschland finden!"
  },
  {
    name: "Agila Haustierversicherung",
    rating: 4.6,
    features: [
      "Testsieger für umfassenden Versicherungsschutz",
      "Bis zu 100% Kostenübernahme für Behandlungen",
      "Hundehaftpflicht mit bis zu 15 Mio. € Deckung",
      "Krankenversicherung für Hunde und Katzen",
      "Tarife ohne Altersbegrenzung bis 10 Jahre",
      "20% Selbstbeteiligung im Basistarif",
      "Zusätzliche Vorsorgeleistungen optional",
      "Schnelle Auszahlung von Erstattungen"
    ],
    price: "ab 20€/Monat",
    bonus: "Rundum-Sorglos-Paket",
    logo: "🐕",
    url: "https://www.agila.de",
    metaTitle: "Agila Tierversicherung: Testsieger für Hunde und Katzen",
    metaDescription: "Agila bietet Testsieger-Tarife mit bis zu 100% Kostenübernahme und Hundehaftpflicht. Jetzt Tierversicherungen vergleichen!"
  }
]

export default function Tierversicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    console.log("Tierversicherungen component mounted")
  }, [])

  const handleNavigation = (path: string) => {
    console.log(`Navigating to: ${path}`)
    try {
      window.location.href = path
    } catch (error) {
      console.error(`Navigation error for ${path}:`, error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Beste Tierversicherung-Vergleich 2025 | SmartFinanz</title>
        <meta
          name="description"
          content="Vergleichen Sie Hundeversicherung, Katzenversicherung und Tierkrankenversicherung bei SmartFinanz. Sparen Sie bis zu 850€ mit Testsiegern wie Tarifcheck, CHECK24, Uelzener und Figo!"
        />
        <meta
          name="keywords"
          content="Hundeversicherung, Katzenversicherung, Tierkrankenversicherung, Hundehaftpflichtversicherung, Hunde-OP-Versicherung, Tierversicherung Vergleich, Tarifcheck, CHECK24, Uelzener, Figo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartFinanz" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.smartfinanz.de/tierversicherungen" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Tierversicherung Vergleich bei SmartFinanz",
              "description": "Vergleichen Sie Hundeversicherung, Katzenversicherung und Tierkrankenversicherung. Sparen Sie mit Testsiegern wie Tarifcheck, CHECK24, Uelzener und Figo bis zu 850€ jährlich.",
              "publisher": {
                "@type": "Organization",
                "name": "SmartFinanz",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/favicon.svg"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.smartfinanz.de/tierversicherungen?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Head>

      <Header />

      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Haustierversicherung Vergleich 2025 | Beste Tarife für Hund & Katze</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie die passende Haustierversicherung in Unserem Vergleich. Sparen Sie bis zu 850€ jährlich mit Testsiegern wie Tarifcheck, CHECK24, Uelzener und Figo. Unsere Anbieter bieten Hundehaftpflichtversicherung und Tierarztkosten Versicherung für umfassenden Schutz Ihres Haustiers.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-medium" onClick={() => window.open("https://www.tarifcheck.com/5dM0KnS", "_blank")}>
              Jetzt Tierversicherungen vergleichen
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">So finden Sie die richtige Tierversicherung</h2>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Testsieger Tierversicherungen-Vergleich 2025</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(provider.name === "Tarifcheck Tierversicherung" ||
                  provider.name === "CHECK24 Tierversicherung" ||
                  provider.name === "Uelzener Tierversicherung" ||
                  provider.name === "BavariaDirekt" ||
                  provider.name === "HanseMerkur Tierversicherung" ||
                  provider.name === "AXA") && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    {provider.name === "Tarifcheck Tierversicherung"
                      ? "Top Empfehlung"
                      : provider.name === "CHECK24 Tierversicherung"
                      ? "Top Empfehlung"
                      : provider.name === "Uelzener Tierversicherung"
                      ? "Top Empfehlung"
                      : provider.name === "BavariaDirekt"
                      ? "Top Empfehlung"
                      : provider.name === "HanseMerkur Tierversicherung"
                      ? "Top Kostenübernahme"
                      : "Top Hundehalterhaftpflicht"}
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
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
                  <Link href={provider.url} target={provider.url.startsWith("http") ? "_blank" : "_self"} rel={provider.url.startsWith("http") ? "noopener noreferrer sponsored" : undefined}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto">Jetzt abschließen*</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>*Wir erhalten eine Provision für Käufe über diesen Button.</p>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-800">
                  Sie möchten sich selbst oder Ihr Eigentum versichern?
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Entdecken Sie Vergleiche für Hausrat, Haftpflicht, Kfz, Wohngebäude, Reise & Gesundheit – transparent und 100% online.
                </p>
              </div>
              <Link
                href="/versicherungen"
                aria-label="Zu allen Versicherungen für Sie & Ihr Eigentum"
                title="Versicherungen vergleichen"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Zu den Versicherungen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Tierversicherungsvergleich 2025: Beste & günstigste Hundeversicherung und Katzenversicherung</h1>

          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Hundehaftpflichtversicherung – Unverzichtbarer Schutz für Hundehalter</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Was kostet eine Hundehaftpflichtversicherung?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Die Kosten für eine Hundehaftpflichtversicherung variieren je nach Hund, Rasse und Region. Im Durchschnitt liegen die Beiträge zwischen 23€ und 100€ jährlich. Anbieter wie BavariaDirekt (ab 23,13€/Jahr) und Uelzener (ab 3,76€/Monat) bieten günstige Hundeversicherungen mit hoher Deckung.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💡 Spartipp:</h4>
                    <p className="text-sm text-green-700">Mit einem Tierversicherung Vergleich sparen Sie bis zu 300€ jährlich. Nutzen Sie Testsieger wie Tarifcheck oder CHECK24 für die beste Hundehaftpflichtversicherung.</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Testsieger Hundehaftpflicht Eigenschaften</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Bis zu 50 Mio. € Deckungssumme</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Schutz bei grober Fahrlässigkeit</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Welpen bis 12 Monate oft kostenfrei mitversichert</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Weltweiter Schutz für Reisen</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />24/7 Schadenmeldung online</li>
                  </ul>
                  <Link href="https://www.tarifcheck.com/5dM0KnS" target="_blank" rel="noopener noreferrer sponsored">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Jetzt Hundehaftpflicht vergleichen*</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Tierkrankenversicherung – Schutz für Tierarztkosten</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Tierkrankenversicherung Test 2025: Das sollten Sie wissen</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Grundschutz</h5>
                  <p className="text-sm text-gray-600">Katzenkrankenversicherung und Hunde OP Versicherung ab 7,42€/Monat (z. B. Figo). Deckt Tierarztkosten für Krankheiten und Unfälle.</p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Erweiterte Deckung</h5>
                  <p className="text-sm text-gray-600">Bis zu 100% Kostenübernahme für Operationen und Behandlungen (z. B. Uelzener, Figo). Inklusive Vorsorge wie Impfungen und Zahnreinigung.</p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Premium-Schutz</h5>
                  <p className="text-sm text-gray-600">Weltweiter Schutz, Telemedizin und keine Altersbeschränkung (z. B. Figo, Petprotect). Ideal für chronisch kranke Tiere.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 hover:border-green-200 relative">
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">Top Empfehlung</Badge>
                <CardHeader>
                  <CardTitle>Uelzener Tierkrankenversicherung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Umfassender Schutz für Hunde, Katzen und Pferde</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Kranken- und OP-Versicherung mit Gesundheitspauschale</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Testsieger in Leistungs- und Fairness-Tests 2024</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Auslandsschutz für bis zu 12 Monate weltweit</li>
                  </ul>
                  <Link href="https://tidd.ly/3UN80GC" target="_blank" rel="noopener noreferrer sponsored">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Zum Anbieter*</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-200 relative">
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">Top Empfehlung</Badge>
                <CardHeader>
                  <CardTitle>BavariaDirekt Tierkrankenversicherung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Günstige Hundehaftpflicht ab 23,13€/Jahr</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Welpen bis 12 Monate kostenfrei mitversichert</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />24h-Notfall-Hotline für schnellen Service</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Auszeichnung als 'Fairer Versicherer'</li>
                  </ul>
                  <Link href="https://www.awin1.com/awclick.php?gid=355337&mid=13884&awinaffid=2524533&linkid=3445052&clickref=" target="_blank" rel="noopener noreferrer sponsored">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Zum Anbieter*</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-200 relative">
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">Top Hunde Krankenversicherung</Badge>
                <CardHeader>
                  <CardTitle>Figo Hunde-OP-Versicherung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Rundumschutz: Konsultationen, Diagnostik, OPs, Medikamente</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Bis zu 90% Erstattung ohne Jahreslimit</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Freie Tierarzt- und Klinikwahl</li>
                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" />Unbegrenzt kostenlose Videosprechstunden</li>
                  </ul>
                  <Link href="https://www.awin1.com/awclick.php?gid=367217&mid=13775&awinaffid=2524533&linkid=2426488&clickref=" target="_blank" rel="noopener noreferrer sponsored">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">Zum Anbieter*</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Hunde-OP-Versicherung – Optimaler Schutz für Operationen</h3>
            <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
              <p className="mb-4">
                Eine <strong>Hunde-OP-Versicherung</strong> schützt Hundebesitzer vor hohen Kosten für chirurgische Eingriffe, die durch Unfälle oder Krankheiten notwendig werden. Operationen wie Kreuzbandrisse, Tumorentfernungen oder Knochenbrüche können schnell mehrere Tausend Euro kosten. Mit der Figo Hunde-OP-Versicherung sichern Sie Ihren Hund flexibel und digital ab – ohne Jahreslimit und mit bis zu 90% Kostenübernahme. Figo ist Trusted Shops zertifiziert und bietet Top-Kundenbewertungen (4,5/5, 09/2025).
              </p>
              <h4 className="text-lg font-semibold mb-4">Warum eine Hunde-OP-Versicherung sinnvoll ist</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Abdeckung von Operationskosten bis zu 90% ohne Jahreslimit.</span></li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Freie Tierarzt- und Klinikwahl weltweit.</span></li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Unbegrenzt kostenlose Videosprechstunden mit Tierärzten.</span></li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span>Flexible Beitragsgestaltung für alle Rassen und Altersgruppen.</span></li>
              </ul>
              <h4 className="text-lg font-semibold mb-4">Worauf Sie bei der Auswahl achten sollten</h4>
              <p className="mb-4">Um die beste & billigste <strong>Hunde-OP-Versicherung</strong> zu finden, beachten Sie folgende Punkte:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Leistungsumfang</strong>: Prüfen Sie, ob alle Operationstypen (z. B. Unfall, Krankheit, Gelenkerkrankungen) abgedeckt sind.</span></li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Kostenübernahme</strong>: Wählen Sie Tarife mit hoher Erstattung (bis 90%) ohne Jahreslimit.</span></li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Flexibilität</strong>: Tarife mit anpassbaren Beiträgen sind ideal für wechselnde Bedürfnisse.</span></li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /><span><strong>Kundenbewertungen</strong>: Figo punktet mit Trusted Shops Zertifizierung und 4,5/5 Sternen.</span></li>
              </ul>
              <p className="mb-6">
                Mit der Hunde-OP-Versicherung schützen Sie Ihren Hund vor hohen Operationskosten. Wählen Sie zwischen flexiblen Tarifen, profitieren Sie von unbegrenzten Videosprechstunden und sichern Sie Ihren Vierbeiner optimal ab!
              </p>
              <div className="text-center">
                <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=367217&mid=13775&awinaffid=2524533&linkid=2426488&clickref=" target="_blank">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">Jetzt die Top Hunde-OP-Versicherung online abschließen!*</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Tierversicherung online abschließen – So finden Sie die beste & billigste Hundeversicherung</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Vergleichen", text: "Nutzen Sie Portale wie Tarifcheck oder CHECK24 für einen Tierversicherung Vergleich von über 250 Tarifen für Hundeversicherung und Katzenversicherung." },
              { step: "2", title: "Berechnen", text: "Geben Sie Daten wie Tierart, Rasse und Alter ein, um genaue Beiträge für Hundehaftpflichtversicherung oder Tierkrankenversicherung zu erhalten." },
              { step: "3", title: "Prüfen", text: "Vergleichen Sie Leistungen wie Tierarztkosten Versicherung, Selbstbeteiligung und Vorsorgebudgets bei Anbietern wie Uelzener oder BavariaDirekt." },
              { step: "4", title: "Abschließen", text: "Schließen Sie Ihre günstige Tierversicherung online ab und erhalten Sie den Versicherungsschein sofort per E-Mail." }
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">{item.step}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Häufige Fragen zur Tierversicherung</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Ist eine Hundehaftpflichtversicherung Pflicht?</h4>
                <p className="text-sm text-gray-600 mb-4">In einigen Bundesländern (z. B. Berlin, Niedersachsen) ist die Hundehaftpflichtversicherung Pflicht. Sie schützt vor Schäden durch Ihren Hund bis zu 50 Mio. €.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Was deckt eine Tierkrankenversicherung?</h4>
                <p className="text-sm text-gray-600 mb-4">Eine Tierkrankenversicherung deckt Tierarztkosten für Krankheiten, Operationen und Vorsorge. Anbieter wie Uelzener und Figo bieten bis zu 100% Erstattung.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Kann ich online kündigen?</h4>
                <p className="text-sm text-gray-600 mb-4">Ja, die meisten Hundeversicherungen und Katzenversicherungen können online gekündigt werden. Beachten Sie die Kündigungsfrist (oft 1-3 Monate).</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Welche Zahlungsmethoden gibt es?</h4>
                <p className="text-sm text-gray-600 mb-4">SEPA-Lastschrift (oft mit Rabatt), Überweisung oder Kreditkarte. Ratenzahlung ist bei Anbietern wie BavariaDirekt gegen Aufpreis möglich.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Tierversicherung wechseln und bis zu 300€ sparen</h1>

          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ein Wechsel der Hundeversicherung oder Katzenversicherung kann Ihnen erhebliche Einsparungen bringen, ohne auf Schutz zu verzichten. Nutzen Sie unseren Tierversicherung Vergleich, um die beste Tierversicherung 2025 zu finden.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">🐶 Hundehaftpflichtversicherung wechseln</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Beste Wechselzeit:</h5>
                    <p className="text-sm text-gray-600">Kündigung meist 3 Monate vor Vertragsende. Bei Beitragserhöhung: Sonderkündigungsrecht innerhalb 1 Monat.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Durchschnittliche Ersparnis:</h5>
                    <p className="text-sm text-gray-600">
                      <strong className="text-green-600">50-200€ jährlich</strong> durch Wechsel zu Anbietern wie BavariaDirekt oder AXA.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-green-700">
                      <strong>Tipp:</strong> Nutzen Sie Testsieger wie Tarifcheck für einen kostenlosen Vergleich.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">🐱 Tierkrankenversicherung wechseln</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Kündigungsfristen:</h5>
                    <p className="text-sm text-gray-600">Meist 3 Monate vor Ablauf. Sonderkündigungsrecht bei Beitragserhöhung oder nach Schadensfall.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Sparpotential:</h5>
                    <p className="text-sm text-gray-600">
                      <strong className="text-green-600">100-300€ jährlich</strong> bei Anbietern wie Uelzener oder Figo.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-green-700">
                      <strong>Achtung:</strong> Prüfen Sie Wartezeiten und laufende Behandlungen vor dem Wechsel!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
            <h3 className="text-lg font-bold mb-4 text-yellow-800">✅ Checkliste für den Tierversicherungswechsel</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h5 className="font-semibold mb-2">Vor dem Wechsel prüfen:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Kündigungsfrist der alten Versicherung</li>
                  <li>• Vergleichbare Leistungen im neuen Tarif</li>
                  <li>• Wartezeiten bei Tierkrankenversicherung</li>
                  <li>• Laufende Behandlungen oder Schäden</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Nach dem Wechsel:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Kündigungsbestätigung prüfen</li>
                  <li>• Neue Versicherungsunterlagen sicher aufbewahren</li>
                  <li>• Zahlungsmethoden anpassen (z. B. SEPA-Lastschrift)</li>
                  <li>• Telemedizin- oder Vorsorgeleistungen aktivieren</li>
                </ul>
              </div>
            </div>
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
