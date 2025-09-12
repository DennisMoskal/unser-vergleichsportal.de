"use client"

import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// SmartFinanzLogo-Komponente (Logo vorerst behalten)
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" aria-label="Zurück zur Startseite">
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
            <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
          </svg>
          <span className="font-bold">martFinanz</span>
        </div>
        <span className="text-sm mt-1">unser-vergleichsportal.de</span>
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
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-200 text-base rounded-lg hover:bg-green-600 hover:text-white hover:shadow-md"
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
                      { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq' },
                      { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj' },
                      { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN' },
                      { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.c24n.de/RYXPGyh' }, // korrigiert
                    ].map(({ key, label, url }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-200 text-base rounded-lg hover:bg-green-600 hover:text-white hover:shadow-md"
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
                      { key: 'mietwagen', label: 'Mietwagen', url: 'https://www.c24n.de/FZ9nd0R' },
                      { key: 'oekostrom', label: 'Ökostrom', url: 'https://www.c24n.de/zxy0WKh' },
                      { key: 'reise', label: 'Reise', url: 'https://www.c24n.de/EieKR0E' },
                      { key: 'strom', label: 'Strom', url: 'https://www.c24n.de/RYXPGyh' },
                    ].map(({ key, label, url }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-200 text-base rounded-lg hover:bg-green-600 hover:text-white hover:shadow-md"
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
                    { key: 'karriere', label: 'Karriere', url: '/karriere' },
                    { key: 'kontakt', label: 'Kontakt', url: '/kontakt' },
                    { key: 'partnerprogramm', label: 'Partnerprogramm', url: '/partnerprogramme' },
                    { key: 'ueber-uns', label: 'Über uns', url: '/ueber-uns' },
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-200 text-base rounded-lg hover:bg-green-600 hover:text-white hover:shadow-md"
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
                    { key: 'agb', label: 'AGB', url: '/agb' },
                    { key: 'cookie-richtlinie', label: 'Cookie-Richtlinie', url: '/cookie-richtlinie' },
                    { key: 'datenschutz', label: 'Datenschutz', url: '/datenschutz' },
                    { key: 'impressum', label: 'Impressum', url: '/impressum' },
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-200 text-base rounded-lg hover:bg-green-600 hover:text-white hover:shadow-md"
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
                  className="w-auto bg-green-600 text-white font-medium text-base px-4 py-2 rounded-lg transition-all duration-200 hover:bg-green-700 hover:shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Startseite
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export interface Provider {
  name: string;
  rating: number;
  features: string[];
  price: string;
  bonus: string;
  logo: string;
  url: string;
}

const providerData: { [key: string]: Provider[] } = {
  versicherungen: [
    {
      name: "Tarifcheck.de",
      rating: 4.5,
      features: [
        "Über 20 Jahre Erfahrung als Vergleichsportal",
        "100% kostenloser und unverbindlicher Vergleich",
        "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
        "Mehrfach ausgezeichnet",
        "eKomi Bewertung 4,5/5 Sterne",
        "Über 3.000 Kundenbewertungen",
        "Deutschlands drittgrößtes Vergleichsportal",
        "Vertrauen von Millionen Verbrauchern",
        "Bis zu 1.000€ jährlich sparen möglich"
      ],
      price: "100% kostenlos",
      bonus: "Bis zu 120€ Neukundenbonus",
      logo: "🏆",
      url: "https://www.tarifcheck.de/girokonto/"
    },
    {
      name: "eRecht24",
      rating: 4.3,
      features: [
        "Rechtssicherheit für Webseiten",
        "DSGVO-konforme Premium-Tools",
        "Automatische Rechtstext-Generatoren",
        "Abmahnschutz inklusive",
        "Praxis-Tools für Social Media",
        "Kostenlose Erstberatung",
        "KI-gestützte Lösungen",
        "Zentraler Projekt-Manager",
        "Online Vertragsmanagement",
        "Muster-Verträge & Checklisten"
      ],
      price: "ab 20€/Monat",
      bonus: "Gratis Rechtscheck",
      logo: "⚖️",
      url: "https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default"
    }
  ],
  banking: [
    {
      name: "Tarifcheck.de",
      rating: 4.5,
      features: [
        "Über 20 Jahre Erfahrung als Vergleichsportal",
        "100% kostenloser und unverbindlicher Vergleich",
        "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
        "Mehrfach ausgezeichnet",
        "eKomi Bewertung 4,5/5 Sterne",
        "Über 3.000 Kundenbewertungen",
        "Deutschlands drittgrößtes Vergleichsportal",
        "Vertrauen von Millionen Verbrauchern",
        "Bis zu 1.000€ jährlich sparen möglich"
      ],
      price: "100% kostenlos",
      bonus: "Bis zu 120€ Neukundenbonus",
      logo: "🏆",
      url: "https://www.tarifcheck.de/girokonto/"
    },
    {
      name: "XTB",
      rating: 4.5,
      features: [
        "Gratis Aktie für neue Investoren",
        "Bis zu 2,3% p.a. Zinsen auf Guthaben",
        "Über 8000 Aktien & ETFs",
        "Über 2600 CFD-Instrumente (Forex, Rohstoffe, Indizes)",
        "Über 40 Krypto-CFDs (BTC, ETH, etc.)",
        "eWallet mit virtueller Mastercard",
        "Smarte ETF-Sparpläne",
        "0% Kommission bis 100.000€ Umsatz",
        "Kostenlose Ein- & Auszahlungen",
        "Kostenlos für ETFs und echte Aktien, 0,2% Gebühr >100.000 EUR",
        "Platz 1 CFD-Broker 2024/25"
      ],
      price: "0€ Kommission",
      bonus: "Demo-Konto",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc"
    },
    {
      name: "Credimaxx",
      rating: 4.9,
      features: [
        "Kredite von 4.000€ bis 50.000€",
        "Schnelle Sofortvermittlung",
        "Digitaler Abschluss mit WebID/VideoIdent",
        "Kredit ohne Schufa, Sofortkredit oder Umschuldung",
        "Keine unnötigen Zusatzprodukte",
        "eKomi 4,9/5",
        "Vermittlung in bis zu 1 Minute",
        "256-Bit-SSL-Verschlüsselung",
        "Anschlussfinanzierungen & Immobilienkredite",
        "25 Jahre Erfahrung"
      ],
      price: "ab 10,99% eff. Zins p.a.",
      bonus: "Schnelle Auszahlung",
      logo: "💳",
      url: "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D"
    },
    {
      name: "freenet",
      rating: 4.7,
      features: [
        "Flexible Mobilfunktarife bis 40 GB",
        "Kostenloser Wechselservice",
        "5G-Unterstützung in allen Tarifen",
        "Kombi-Vorteile mit DSL/Festnetz",
        "Bis zu 100€ Startguthaben",
        "Kostenlose Hotline",
        "Schnelle Online-Vertragsabwicklung",
        "Ausgezeichneter Kundenservice",
        "Zusätzliche Rabatte für junge Kunden",
        "Tarife mit CO₂-Kompensation"
      ],
      price: "ab 9,99€/Monat",
      bonus: "Bis zu 100€ Startguthaben",
      logo: "📱",
      url: "https://www.awin1.com/awclick.php?gid=392137&mid=11420&awinaffid=2524533&linkid=3572260&clickref="
    }
  ],
  tierversicherungen: [
    {
      name: "PetProtect",
      rating: 4.9,
      features: ["Vollschutz", "Ohne Wartezeit", "Freie Tierarztwahl"],
      price: "ab 8€/Monat",
      bonus: "1. Monat gratis",
      logo: "🐕",
      url: "/anbieter/petprotect"
    },
    {
      name: "FigoPet",
      rating: 4.6,
      features: ["Moderne Plattform", "Schnelle Erstattung", "Präventionsschutz"],
      price: "ab 12€/Monat",
      bonus: "Willkommensgeschenk",
      logo: "🐱",
      url: "/anbieter/figopet"
    }
  ],
  trading: [
    {
      name: "XTB",
      rating: 4.5,
      features: [
        "Gratis Aktie für neue Investoren",
        "Bis zu 2,3% p.a. Zinsen auf Guthaben",
        "Über 8000 Aktien & ETFs",
        "Über 2600 CFD-Instrumente (Forex, Rohstoffe, Indizes)",
        "Über 40 Krypto-CFDs (BTC, ETH, etc.)",
        "eWallet mit virtueller Mastercard",
        "Smarte ETF-Sparpläne",
        "0% Kommission bis 100.000€ Umsatz",
        "Kostenlose Ein- & Auszahlungen",
        "Kostenlos für ETFs und echte Aktien, 0,2% Gebühr >100.000 EUR",
        "Platz 1 CFD-Broker 2024/25"
      ],
      price: "0€ Kommission",
      bonus: "Demo-Konto",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc"
    }
  ]
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("versicherungen")

  return (
    <>
      <Head>
        {/* SEO-optimiert & bereinigt */}
        <title>unser-vergleichsportal.de – Finanzvergleich für Versicherungen, Banking, DSL & mehr</title>
        <meta
          name="description"
          content="Vergleiche Versicherungen, Banking, DSL, Strom, Gas, Handytarife & mehr. Über 500 Anbieter, Ø 850 € Ersparnis/Jahr, 100% kostenlos. Jetzt Angebote finden & einfach sparen."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://unser-vergleichsportal.de" />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content="unser-vergleichsportal.de – Finanzvergleich für Versicherungen, Banking, DSL & mehr" />
        <meta property="og:description" content="Über 500 Anbieter im Vergleich. Ø 850 € Ersparnis pro Jahr. Schnell, sicher & kostenlos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unser-vergleichsportal.de" />
        <meta property="og:image" content="https://unser-vergleichsportal.de/og-image.jpg" />
        <meta property="og:site_name" content="unser-vergleichsportal.de" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="unser-vergleichsportal.de – Finanzvergleich für Versicherungen, Banking, DSL & mehr" />
        <meta name="twitter:description" content="Vergleiche Top-Tarife & spare einfach. Kostenlos & sicher." />
        <meta name="twitter:image" content="https://unser-vergleichsportal.de/og-image.jpg" />

        {/* Assets & Prefetch */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="dns-prefetch" href="https://www.tarifcheck.de" />
        <link rel="dns-prefetch" href="https://partner.e-recht24.de" />
        <link rel="dns-prefetch" href="https://link-pso.xtb.com" />
        <link rel="dns-prefetch" href="https://www.credimaxx.de" />
        <link rel="dns-prefetch" href="https://www.hansemerkur.de" />
        <link rel="dns-prefetch" href="https://www.check24.de" />
        <link rel="dns-prefetch" href="https://private.vodafone-affiliate.de" />
        <link rel="dns-prefetch" href="https://www.awin1.com" />
        <link rel="dns-prefetch" href="https://www.freenet.de" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />

        {/* 🔼 Kombinierter GRÜNER BLOCK (Kategorien + Trust-Points) – direkt NACH dem Header, VOR dem Hero */}
        <section className="py-6 sm:py-10 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            {/* Kategorien als Chips im grünen Bereich */}
            <div className="max-w-6xl mx-auto">
              <ul className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                {[
                  { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
                  { key: 'haustierversicherung', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
                  { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
                  { key: 'versicherungen', label: 'Versicherung', url: '/versicherungen', isInternal: true },
                  { key: '1dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
                  { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
                  { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
                  { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.c24n.de/RYXPGyh', isInternal: false }, // korrigiert
                  { key: 'mietwagen', label: 'Mietwagen', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false },
                  { key: 'oekostrom', label: 'Ökostrom', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
                  { key: 'reise', label: 'Reise', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
                  { key: 'strom', label: 'Strom', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                ].map(({ key, label, url, isInternal }) => (
                  <li key={key}>
                    {isInternal ? (
                      <Link
                        href={url}
                        className="block px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-md transition-all duration-200 text-white"
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
                        className="block px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-md transition-all duration-200 text-white"
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

            {/* Trennlinie */}
            <div className="mt-6 sm:mt-8 border-t border-white/20" />

            {/* Trust-Points */}
            <div className="max-w-5xl mx-auto mt-6 sm:mt-8">
              <ul className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" aria-hidden="true" />
                  <span className="ml-3 text-base sm:text-lg">
                    Über <strong className="font-semibold">100.000</strong> zufriedene Nutzer
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" aria-hidden="true" />
                  <span className="ml-3 text-base sm:text-lg">
                    Mehr als <strong className="font-semibold">500 Anbieter</strong> im direkten Vergleich
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" aria-hidden="true" />
                  <span className="ml-3 text-base sm:text-lg">
                    Ø <strong className="font-semibold">850 € Ersparnis pro Jahr</strong> bei Top-Tarifen
                  </span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" aria-hidden="true" />
                  <span className="ml-3 text-base sm:text-lg">
                    <strong className="font-semibold">4,8★</strong> Kundenstimmen
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-white" aria-hidden="true" />
                  <span className="ml-3 text-base sm:text-lg">
                    Schnell, sicher &amp; <strong className="font-semibold">kostenlos</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hauptüberschrift (Hero) */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">unser-vergleichsportal.de | einfach sparen!</h1>
            <Button
              size="lg"
              className="bg-green-600 text-white font-medium transition-all duration-200 hover:bg-green-700 hover:shadow-md"
              onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
              aria-label="Beste Finanzprodukte ansehen"
            >
              Jetzt vergleichen
            </Button>
          </div>
        </section>

        {/* Vergleichstabellen */}
        <section className="py-12 sm:py-16 px-4 bg-gray-50" id="comparison-section">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Unsere Testsieger September 2025 | Anbieter- &amp; Finanzvergleich aktuell
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Tarifcheck.de",
                  rating: 4.5,
                  features: providerData.versicherungen[0].features,
                  price: providerData.versicherungen[0].price,
                  bonus: providerData.versicherungen[0].bonus,
                  logo: providerData.versicherungen[0].logo,
                  url: providerData.versicherungen[0].url
                },
                {
                  name: "eRecht24",
                  rating: 4.3,
                  features: providerData.versicherungen[1].features,
                  price: providerData.versicherungen[1].price,
                  bonus: providerData.versicherungen[1].bonus,
                  logo: providerData.versicherungen[1].logo,
                  url: providerData.versicherungen[1].url
                },
                {
                  name: "XTB",
                  rating: providerData.banking[1].rating,
                  features: providerData.banking[1].features,
                  price: providerData.banking[1].price,
                  bonus: providerData.banking[1].bonus,
                  logo: providerData.banking[1].logo,
                  url: providerData.banking[1].url
                },
                {
                  name: "Credimaxx",
                  rating: providerData.banking[2].rating,
                  features: providerData.banking[2].features,
                  price: providerData.banking[2].price,
                  bonus: providerData.banking[2].bonus,
                  logo: providerData.banking[2].logo,
                  url: providerData.banking[2].url
                },
                {
                  name: "HanseMerkur",
                  rating: 4.7,
                  features: [
                    "Umfassender Schutz für Hunde und Katzen",
                    "Bis zu 100% Kostenerstattung",
                    "Freie Tierarztwahl",
                    "Keine Altersbeschränkung",
                    "Schnelle Schadensbearbeitung",
                    "Flexible Tarifoptionen",
                    "Zusatzleistungen wie Physiotherapie",
                    "Online-Vertragsmanagement",
                    "24/7 Kundenhotline"
                  ],
                  price: "ab 10€/Monat",
                  bonus: "Kostenloser Gesundheitscheck",
                  logo: "🐾",
                  url: "https://www.hansemerkur.de/tierkrankenversicherung"
                },
                {
                  name: "CHECK24",
                  rating: 4.8,
                  features: [
                    "Kostenloser Kontowechselservice",
                    "Über 50 Banken im Vergleich",
                    "Bis zu 250€ Willkommensbonus",
                    "Kostenlose Kontoführung",
                    "Schnelle Kontoeröffnung",
                    "Geprüfter Vergleich",
                    "24/7 Kundensupport",
                    "Mobile Banking App",
                    "Kreditkartenoptionen verfügbar",
                    "Attraktive Zinsen auf Tagesgeld"
                  ],
                  price: "0€ Kontoführung",
                  bonus: "Bis zu 250€ Bonus",
                  logo: "🏦",
                  url: "https://www.check24.de/girokonto/"
                },
                {
                  name: "Vodafone",
                  rating: 4.6,
                  features: [
                    "Highspeed Kabel-Internet bis 1.000 MBit/s",
                    "Günstige Mobilfunktarife mit 5G",
                    "Angebote für Selbstständige und Geschäftskunden",
                    "Kombi-Vorteile für DSL & Mobilfunk",
                    "WLAN-Router inklusive (tarifabhängig)",
                    "Flexibles Streaming mit GigaTV",
                    "24/7 Kundenhotline",
                    "Bis zu 100€ Startguthaben",
                    "Schnelle Installation",
                    "Ausgezeichneter Kundenservice"
                  ],
                  price: "ab 9,99€/Monat",
                  bonus: "Bis zu 100€ Startguthaben",
                  logo: "📡",
                  url: "https://private.vodafone-affiliate.de/tc.php?t=126731C2369176269T&cons="
                },
                {
                  name: "1&1",
                  rating: 4.7,
                  features: [
                    "Highspeed DSL bis 250 MBit/s",
                    "Schneller HomeServer (tarifabhängig)",
                    "Angebote für Selbstständige/Firmen",
                    "Kombi-Vorteile mit Mobilfunktarifen",
                    "30 Tage Testphase",
                    "Bis zu 50€ Startguthaben",
                    "24h Austausch-Service",
                    "Umzugsservice",
                    "Attraktive Smartphone-Bundles"
                  ],
                  price: "ab 9,99€/Monat",
                  bonus: "Bis zu 50€ Startguthaben",
                  logo: "🌐",
                  url: "https://www.awin1.com/awclick.php?gid=347927&mid=12554&awinaffid=2524533&linkid=2259270&clickref="
                },
                {
                  name: "Verivox",
                  rating: 4.9,
                  features: [
                    "Vergleich für Strom, Gas, DSL & Versicherungen",
                    "Über 800 Anbieter im Check",
                    "Angebote für Privat & Unternehmen",
                    "Hohe Kundenzufriedenheit",
                    "Bis zu 200€ Prämie für Freundschaftswerbung",
                    "Kostenloser Wechselservice",
                    "Transparente Tarifübersicht",
                    "Schneller Online-Abschluss",
                    "Über 25 Jahre Erfahrung",
                    "Bis zu 1.000€ jährliche Ersparnis möglich"
                  ],
                  price: "100% kostenlos",
                  bonus: "Bis zu 200€ Prämie",
                  logo: "🏠",
                  url: "https://www.awin1.com/awclick.php?gid=373003&mid=14797&awinaffid=2524533&linkid=2691475&clickref="
                },
                {
                  name: "freenet",
                  rating: providerData.banking[3].rating,
                  features: providerData.banking[3].features,
                  price: providerData.banking[3].price,
                  bonus: providerData.banking[3].bonus,
                  logo: providerData.banking[3].logo,
                  url: providerData.banking[3].url
                }
              ].map((provider) => (
                <Card key={provider.name} className="relative hover:shadow-xl transition-shadow bg-white border-2 hover:border-green-200 h-full flex flex-col overflow-hidden">
                  <Badge className="absolute top-0 right-0 bg-yellow-500 text-xs sm:text-sm px-3 py-1 z-10">
                    Top Empfehlung
                  </Badge>
                  <CardHeader className="text-center pb-2 sm:pb-4 flex-shrink-0">
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{provider.logo}</div>
                    <CardTitle className="text-lg sm:text-xl font-bold break-words">{provider.name}</CardTitle>
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 sm:h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-gray-600">{provider.rating}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-4 sm:p-6">
                    <div className="text-center border-b pb-3 sm:pb-4 mb-3 sm:mb-4 flex-shrink-0">
                      <p className="text-xl sm:text-2xl font-bold text-green-600 break-words">{provider.price}</p>
                      <Badge variant="outline" className="mt-1 sm:mt-2 border-green-200 text-green-700 text-xs sm:text-sm break-words">
                        {provider.bonus}
                      </Badge>
                    </div>
                    <div className="flex-grow overflow-hidden">
                      <div className="max-h-48 overflow-y-auto mb-4 pr-2" style={{ scrollbarWidth: 'thin' }}>
                        <ul className="space-y-1.5">
                          {provider.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-xs sm:text-sm leading-tight">
                              <Check className="mr-2 h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="break-words">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a
                      href={provider.url}
                      target={provider.url.startsWith('http') ? '_blank' : '_self'}
                      rel={provider.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={`Zum Anbieter ${provider.name}`}
                    >
                      <Button className="w-full bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-200 hover:bg-green-700 hover:shadow-md mt-auto">
                        Jetzt abschließen*
                        {provider.name === "Vodafone" && (
                          <Image
                            src="https://private.vodafone-affiliate.de/tb.php?t=126731V2369176269T"
                            alt=""
                            width={0}
                            height={0}
                            className="border-0"
                          />
                        )}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center text-xs sm:text-sm text-gray-600">
              <p>
                CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld zu verlieren.
                72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
                Sie sollten überlegen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko einzugehen, Ihr Geld zu verlieren.
              </p>
              <p className="mt-4">
                *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.
              </p>
            </div>
          </div>
        </section>
        {/* Kundenbewertungen */}
        <section className="py-12 sm:py-16 bg-gray-50" id="kundenbewertungen">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Das sagen unsere Kunden über Unser-Vergleichsportal.de</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Anna, 30", img: "/images/kundenbewertungen/anna.jpg", text: "Dank Unser-Vergleichsportal.de habe ich eine günstige Kfz-Versicherung gefunden und 300€ im Jahr gespart! Der Vergleich war super einfach und schnell.", stars: 5 },
                { name: "Markus, 42", img: "/images/kundenbewertungen/markus.jpg", text: "Das Portal hat uns die perfekte Tierversicherung für unseren Hund empfohlen. Jetzt fühlen wir uns sicher, dass Max bestens versorgt ist!", stars: 4 },
                { name: "Helga, 60", img: "/images/kundenbewertungen/helga.jpg", text: "Ich war skeptisch, aber ich habe eine sichere Banklösung gefunden. Der Prozess war klar, und ich habe 50€ Bonus erhalten!", stars: 5 },
                { name: "Lukas, 29", img: "/images/kundenbewertungen/lukas.jpg", text: "Hier habe ich die beste Trading-Plattform für mich gefunden. Empfehlungen waren punktgenau, und ich spare jetzt Gebühren!", stars: 5 }
              ].map(({ name, img, text, stars }) => (
                <Card key={name} className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={img}
                        alt={`Kundenbewertung von ${name}`}
                        width={80}
                        height={80}
                        loading="lazy"
                        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0 border-0"
                      />
                      <div className="flex-grow min-w-0">
                        <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">{name}</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < stars ? "text-yellow-400 fill-current" : "text-gray-300"}`} aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                      “{text}”
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Structured Data (WebSite/Org/FAQ) bleibt unverändert bis zur Erläuterung (#8) */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Unser-Vergleichsportal.de",
                  "url": "https://unser-vergleichsportal.de",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://unser-vergleichsportal.de/suche?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                })
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Unser-Vergleichsportal.de",
                  "url": "https://unser-vergleichsportal.de",
                  "logo": "https://unser-vergleichsportal.de/logo.png",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "100000"
                  }
                })
              }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Wie funktioniert der Vergleich?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Wir vergleichen täglich über 500 Tarife und Anbieter. Du erhältst kostenlose, unabhängige Empfehlungen – passend zu deinem Bedarf."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Ist der Vergleich wirklich kostenlos?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ja, der Vergleich ist 100% kostenlos und unverbindlich. Wir erhalten ggf. Provisionen von Partnern – ohne Einfluss auf Preise oder Bewertungen."
                      }
                    }
                  ]
                })
              }}
            />
          </div>
        </section>

        {/* Schlanker CTA-Block unten */}
        <section className="py-12 sm:py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Jetzt vergleichen <span className="mx-3 opacity-75">|</span> einfach sparen
            </h2>
            <p className="mt-4 text-green-100 text-sm sm:text-base">
              Schnell, sicher &amp; kostenlos – mit nur wenigen Klicks zum besten Angebot.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Häufig gestellte Fragen</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Wie funktioniert der Vergleich bei Unser-Vergleichsportal.de?</h3>
                <p className="text-gray-700">Unser Team vergleicht täglich über 500 Produkte von führenden Anbietern. Du erhältst kostenlose, unabhängige Empfehlungen – passend zu deinem Bedarf.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Ist der Vergleich wirklich kostenlos?</h3>
                <p className="text-gray-700">Ja, alle Vergleiche sind 100% kostenlos und unverbindlich. Wir können Provisionen von Partnern erhalten – das beeinflusst nicht deinen Preis.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Welche Kategorien gibt es?</h3>
                <p className="text-gray-700">Versicherungen, Banking, DSL, Handytarife, Strom, Gas, Ökostrom, Reisen, Kreditkarten, Mietwagen u. v. m.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Wie schnell erhalte ich Ergebnisse?</h3>
                <p className="text-gray-700">Meist sofort. Bei komplexeren Fällen folgen passende Empfehlungen innerhalb weniger Minuten.</p>
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
                <h2 className="font-semibold mb-3">Finanzprodukte</h2>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/banking" className="hover:text-white transition-all duration-300 hover:scale-105">Banking</Link></li>
                  <li><Link href="/tierversicherungen" className="hover:text-white transition-all duration-300 hover:scale-105">Haustierversicherung</Link></li>
                  <li><Link href="/trading" className="hover:text-white transition-all duration-300 hover:scale-105">Trading</Link></li>
                  <li><Link href="/versicherungen" className="hover:text-white transition-all duration-300 hover:scale-105">Versicherungen</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3">Weitere Produkte</h2>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://www.c24n.de/ducwCtq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">DSL</a></li>
                  <li><a href="https://www.c24n.de/Uxudvkj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">Gas</a></li>
                  <li><a href="https://www.c24n.de/5R17qbN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">Handytarif</a></li>
                  <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">Kreditkarte</a></li>
                  <li><a href="https://www.c24n.de/FZ9nd0R" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">Mietwagen</a></li>
                  <li><a href="https://www.c24n.de/zxy0WKh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">Ökostrom</a></li>
                  <li><a href="https://www.c24n.de/EieKR0E" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">Reise</a></li>
                  <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all duration-300 hover:scale-105">Strom</a></li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3">Unternehmen</h2>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/karriere" className="hover:text-white transition-all duration-300 hover:scale-105">Karriere</Link></li>
                  <li><Link href="/kontakt" className="hover:text-white transition-all duration-300 hover:scale-105">Kontakt</Link></li>
                  <li><Link href="/partnerprogramme" className="hover:text-white transition-all duration-300 hover:scale-105">Partnerprogramm</Link></li>
                  <li><Link href="/ueber-uns" className="hover:text-white transition-all duration-300 hover:scale-105">Über uns</Link></li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold mb-3">Rechtliches</h2>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/agb" className="hover:text-white transition-all duration-300 hover:scale-105">AGB</Link></li>
                  <li><Link href="/cookie-richtlinie" className="hover:text-white transition-all duration-300 hover:scale-105">Cookie-Richtlinie</Link></li>
                  <li><Link href="/datenschutz" className="hover:text-white transition-all duration-300 hover:scale-105">Datenschutz</Link></li>
                  <li><Link href="/impressum" className="hover:text-white transition-all duration-300 hover:scale-105">Impressum</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center">
              <p className="text-sm text-gray-400 mb-4">
                © 2025 Unser-Vergleichsportal.de. Alle Rechte vorbehalten. | Anbieter- & Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
              </p>
              <Link href="/" aria-label="Zurück zur Startseite">
                <Button className={btnPrimary}>
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
