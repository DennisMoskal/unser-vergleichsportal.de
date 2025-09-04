"use client"

import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Shield, Check, Star, TrendingUp, Heart, Zap, PiggyBank, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
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
        "Mehrfach ausgezeichnet mit 'sehr gut'",
        "eKomi Silber Siegel mit 4,5/5 Sternen",
        "Über 3.194 Kundenbewertungen",
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
        "DSGVO-konform mit Premium Tools",
        "Automatische Rechtstext-Generatoren",
        "Abmahnschutz inklusive",
        "Praxis-Tools für Social Media",
        "Kostenlose Erstberatung",
        "NEU: KI-gestützte Lösungen",
        "Zentraler Projekt Manager",
        "Live-Webinare zu Internetrecht",
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
        "Mehrfach ausgezeichnet mit 'sehr gut'",
        "eKomi Silber Siegel mit 4,5/5 Sternen",
        "Über 3.194 Kundenbewertungen",
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
        "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
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
        "Kredite von 4.000€ bis 50.000€ mit sozialer Verantwortung",
        "Sofortvermittlung durch erfahrene Kreditprofis",
        "Digitaler Abschluss mit WebID oder VideoIdent",
        "Kredit ohne Schufa, Sofortkredit oder Umschuldung möglich",
        "Keine Zusatzprodukte wie Versicherungen oder Fondssparpläne",
        "TÜV Kundenzufriedenheit: 1.9 (sehr gut), eKomi 4.9/5",
        "Vermittlung in bis zu 1 Minute",
        "100% Sicherheit mit 256-Bit-SSL-Verschlüsselung",
        "Anschlussfinanzierungen und Immobilienkredite verfügbar",
        "25 Jahre Erfahrung in der Kreditvermittlung"
      ],
      price: "ab 10,99% eff. Zins p.a.",
      bonus: "Schnelle Auszahlung",
      logo: "💳",
      url: "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D"
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
        "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("versicherungen")
  const [selectedProduct, setSelectedProduct] = useState("")

  // Funktion zum Scrollen zu einem Abschnitt
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
      <Head>
        <title>SmartFinanz - Finanzvergleich für Versicherungen, Banking, DSL & mehr | Testsieger 2025</title>
        <meta name="description" content="Vergleichen Sie über 500 Finanzprodukte: Versicherungen, Banking, DSL, Mobilfunk, Strom, Gas & Reisen. ✓ TÜV geprüft ✓ Kostenlos ✓ Bis zu 1.000€ sparen" />
        <meta name="keywords" content="Finanzvergleich, Versicherungen, Banking, Tierversicherungen, Trading, DSL, Mobilfunk, Strom, Gas, Reisen, Kreditkarten, Mietwagen, SmartFinanz, Testsieger 2025" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="do7wLkAw67zaDPOv09_PXGQaI2LAKpw5cTkmkjgRe6E" />
        <meta name="author" content="SmartFinanz" />
        <meta name="revisit-after" content="7 days" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://smartfinanz.de" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="SmartFinanz - Finanzvergleich für Versicherungen, Banking, DSL & mehr" />
        <meta property="og:description" content="Vergleichen Sie über 500 Finanzprodukte: Versicherungen, Banking, DSL, Mobilfunk, Strom, Gas & Reisen. Kostenlos, TÜV-geprüft, bis zu 1.000€ sparen!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartfinanz.de" />
        <meta property="og:image" content="https://smartfinanz.de/og-image.jpg" />
        <meta property="og:site_name" content="SmartFinanz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SmartFinanz - Finanzvergleich für Versicherungen, Banking, DSL & mehr" />
        <meta name="twitter:description" content="Vergleichen Sie über 500 Finanzprodukte: Versicherungen, Banking, DSL, Mobilfunk, Strom, Gas & Reisen. Kostenlos, TÜV-geprüft, bis zu 1.000€ sparen!" />
        <meta name="twitter:image" content="https://smartfinanz.de/og-image.jpg" />
        <meta name="twitter:site" content="@smartfinanz" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="dns-prefetch" href="https://www.tarifcheck.de" />
        <link rel="dns-prefetch" href="https://partner.e-recht24.de" />
        <link rel="dns-prefetch" href="https://link-pso.xtb.com" />
        <link rel="dns-prefetch" href="https://www.credimaxx.de" />
        <link rel="dns-prefetch" href="https://www.hansemerkur.de" />
        <link rel="dns-prefetch" href="https://www.check24.de" />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm relative border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <SmartFinanzLogo className="text-2xl text-gray-900" />
            </div>
            <nav className="hidden md:flex space-x-6" aria-label="Hauptmenü">
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
                aria-label="Menü öffnen/schließen"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menü */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
              <nav className="px-4 py-4 space-y-4" aria-label="Mobiles Menü">
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
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 leading-tight">
                Finanzentscheidungen leicht gemacht? Lassen Sie uns das für Sie erledigen.
              </h2>
              <p className="text-sm sm:text-base text-green-100 mb-4 sm:mb-6 max-w-xl mx-auto">
                Beantworten Sie ein paar Fragen. Erhalten Sie personalisierte Empfehlungen.
              </p>

              {/* Interaktives Widget - Erweitert mit 12 Kategorien */}
              <div className="bg-white rounded-lg p-4 sm:p-6 text-gray-900 max-w-4xl mx-auto">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                  Nach welchem Produkt oder Service suchen Sie?
                </h3>

                {/* Grid für 12 Buttons - responsive Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-4">
                  <Button
                    variant={selectedProduct === "versicherung" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("versicherung"); window.location.href = "/versicherungen"; }}
                    aria-label="Versicherungen vergleichen"
                  >
                    Versicherung
                  </Button>
                  <Button
                    variant={selectedProduct === "banking" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("banking"); window.location.href = "/banking"; }}
                    aria-label="Banking vergleichen"
                  >
                    Banking
                  </Button>
                  <Button
                    variant={selectedProduct === "tierversicherung" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("tierversicherung"); window.location.href = "/tierversicherungen"; }}
                    aria-label="Tierversicherungen vergleichen"
                  >
                    Tierversicherung
                  </Button>
                  <Button
                    variant={selectedProduct === "trading" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("trading"); window.location.href = "/trading"; }}
                    aria-label="Trading vergleichen"
                  >
                    Trading
                  </Button>
                  <Button
                    variant={selectedProduct === "dsl" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("dsl"); window.open("https://www.c24n.de/ducwCtq", "_blank"); }}
                    aria-label="DSL vergleichen"
                  >
                    DSL
                  </Button>
                  <Button
                    variant={selectedProduct === "handytarife" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("handytarife"); window.open("https://www.c24n.de/5R17qbN", "_blank"); }}
                    aria-label="Handytarife vergleichen"
                  >
                    Handytarife
                  </Button>
                  <Button
                    variant={selectedProduct === "oekostrom" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("oekostrom"); window.open("https://www.c24n.de/zxy0WKh", "_blank"); }}
                    aria-label="Ökostrom vergleichen"
                  >
                    Ökostrom
                  </Button>
                  <Button
                    variant={selectedProduct === "gas" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("gas"); window.open("https://www.c24n.de/Uxudvkj", "_blank"); }}
                    aria-label="Gas vergleichen"
                  >
                    Gas
                  </Button>
                  <Button
                    variant={selectedProduct === "reisen" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("reisen"); window.open("https://www.c24n.de/EieKR0E", "_blank"); }}
                    aria-label="Reisen vergleichen"
                  >
                    Reisen
                  </Button>
                  <Button
                    variant={selectedProduct === "strom" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("strom"); window.open("https://www.c24n.de/RYXPGyh", "_blank"); }}
                    aria-label="Stromvergleich"
                  >
                    Strom
                  </Button>
                  <Button
                    variant={selectedProduct === "kreditkarte" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("kreditkarte"); window.open("https://www.c24n.de/RYXPGyh", "_blank"); }}
                    aria-label="Kreditkarten vergleichen"
                  >
                    Kreditkarte
                  </Button>
                  <Button
                    variant={selectedProduct === "mietwagen" ? "default" : "outline"}
                    className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-xs sm:text-sm px-2"
                    onClick={() => { setSelectedProduct("mietwagen"); window.open("https://www.c24n.de/FZ9nd0R", "_blank"); }}
                    aria-label="Mietwagen vergleichen"
                  >
                    Mietwagen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kategorie-Navigation - ohne Icons, mit allen 12 Kategorien */}
        <section className="bg-gray-50 py-4 border-b" id="versicherungen">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
              {[
                { key: 'versicherungen', label: 'VERSICHERUNGEN', url: '/versicherungen', isInternal: true },
                { key: 'banking', label: 'BANKING', url: '/banking', isInternal: true },
                { key: 'tierversicherungen', label: 'TIERVERSICHERUNG', url: '/tierversicherungen', isInternal: true },
                { key: 'trading', label: 'TRADING', url: '/trading', isInternal: true },
                { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
                { key: 'handytarife', label: 'HANDYTARIFE', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
                { key: 'oekostrom', label: 'ÖKOSTROM', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
                { key: 'gas', label: 'GAS', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
                { key: 'reisen', label: 'REISEN', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
                { key: 'strom', label: 'STROM', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                { key: 'kreditkarte', label: 'KREDITKARTE', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                { key: 'mietwagen', label: 'MIETWAGEN', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false }
              ].map(({ key, label, url, isInternal }) => (
                isInternal ? (
                  <Link
                    key={key}
                    href={url}
                    className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-colors flex items-center text-xs sm:text-sm ${
                      activeCategory === key
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                    }`}
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
                    className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-colors flex items-center text-xs sm:text-sm ${
                      activeCategory === key
                        ? 'bg-green-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                    }`}
                    aria-label={`${label} vergleichen (externer Link)`}
                  >
                    {label}
                  </a>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Hauptüberschrift */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Unsere Experten haben 500+ Finanzprodukte recherchiert, damit Sie es nicht tun müssen.</h3>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")} aria-label="Beste Finanzprodukte ansehen">
              Beste Empfehlungen ansehen
            </Button>
          </div>
        </section>

        {/* Vertrauensabzeichen */}
        <section className="py-6 sm:py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
                <Check className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" aria-hidden="true" />
                Geprüft & Sicher
              </Badge>
              <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
                <Shield className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" aria-hidden="true" />
                TÜV Zertifiziert
              </Badge>
              <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
                <Star className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" aria-hidden="true" />
                Top Empfohlen
              </Badge>
              <Badge variant="secondary" className="text-sm sm:text-lg py-2 sm:py-3 px-3 sm:px-6 bg-white border">
                <Zap className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5 text-green-600" aria-hidden="true" />
                Blitzschnell
              </Badge>
            </div>
          </div>
        </section>

        {/* Suchbereich */}
        <section className="py-8 sm:py-12 bg-white" id="search-section">
          <div className="container mx-auto px-4">
            <div className="max-w-xl sm:max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Finden Sie das perfekte Angebot</h3>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 sm:h-5 w-5 text-gray-400" aria-hidden="true" />
                <Input
                  placeholder="Suchen Sie nach Versicherungen, Konten, DSL, Strom oder Anbietern..."
                  className="pl-10 py-2 sm:py-3 text-sm sm:text-lg border-2 border-gray-200 focus:border-green-500 w-full"
                  onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                  aria-label="Suche nach Finanzprodukten"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vergleichstabellen */}
        <section className="py-12 sm:py-16 px-4 bg-gray-50" id="comparison-section">
          <div className="container mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Unsere Testsieger</h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Tarifcheck.de",
                  rating: 4.5,
                  features: [
                    "Über 20 Jahre Erfahrung als Vergleichsportal",
                    "100% kostenloser und unverbindlicher Vergleich",
                    "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
                    "Mehrfach ausgezeichnet mit 'sehr gut'",
                    "eKomi Silber Siegel mit 4,5/5 Sternen",
                    "Über 3.194 Kundenbewertungen",
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
                    "DSGVO-konform mit Premium Tools",
                    "Automatische Rechtstext-Generatoren",
                    "Abmahnschutz inklusive",
                    "Praxis-Tools für Social Media",
                    "Kostenlose Erstberatung",
                    "NEU: KI-gestützte Lösungen",
                    "Zentraler Projekt Manager",
                    "Live-Webinare zu Internetrecht",
                    "Muster-Verträge & Checklisten"
                  ],
                  price: "ab 20€/Monat",
                  bonus: "Gratis Rechtscheck",
                  logo: "⚖️",
                  url: "https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default"
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
                    "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
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
                    "Kredite von 4.000€ bis 50.000€ mit sozialer Verantwortung",
                    "Sofortvermittlung durch erfahrene Kreditprofis",
                    "Digitaler Abschluss mit WebID oder VideoIdent",
                    "Kredit ohne Schufa, Sofortkredit oder Umschuldung möglich",
                    "Keine Zusatzprodukte wie Versicherungen oder Fondssparpläne",
                    "TÜV Kundenzufriedenheit: 1.9 (sehr gut), eKomi 4.9/5",
                    "Vermittlung in bis zu 1 Minute",
                    "100% Sicherheit mit 256-Bit-SSL-Verschlüsselung",
                    "Anschlussfinanzierungen und Immobilienkredite verfügbar",
                    "25 Jahre Erfahrung in der Kreditvermittlung"
                  ],
                  price: "ab 10,99% eff. Zins p.a.",
                  bonus: "Schnelle Auszahlung",
                  logo: "💳",
                  url: "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D"
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
                    "TÜV-geprüfter Vergleich",
                    "24/7 Kundensupport",
                    "Mobile Banking App",
                    "Kreditkartenoptionen verfügbar",
                    "Attraktive Zinsen auf Tagesgeld"
                  ],
                  price: "0€ Kontoführung",
                  bonus: "Bis zu 250€ Bonus",
                  logo: "🏦",
                  url: "https://www.check24.de/girokonto/"
                }
              ].map((provider, index) => (
                <Card key={provider.name} className="relative hover:shadow-xl transition-shadow bg-white border-2 hover:border-green-200 h-full flex flex-col overflow-hidden">
                  <Badge className="absolute top-0 right-0 bg-yellow-500 hover:bg-yellow-600 z-10 text-xs sm:text-sm px-3 py-1">
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
                      <div className="max-h-48 overflow-y-auto mb-4 pr-2" style={{scrollbarWidth: 'thin'}}>
                        <ul className="space-y-1.5">
                          {provider.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-xs sm:text-sm leading-tight">
                              <Check className="mr-2 h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span className="break-words overflow-wrap-anywhere">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={`Zum Anbieter ${provider.name}`}>
                      <Button className="w-full bg-green-600 hover:bg-green-700 font-medium text-sm sm:text-base mt-auto flex-shrink-0">
                        Zum Anbieter*
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
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Das sagen unsere Kunden über SmartFinanz</h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/kundenbewertungen/anna.jpg"
                      alt="Kundenbewertung von Anna, 30"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Anna, 30</CardTitle>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                    "Dank SmartFinanz habe ich eine günstige Kfz-Versicherung gefunden und 300€ im Jahr gespart! Der Vergleich war super einfach und schnell."
                  </p>
                  <Button
                    variant="default"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                    onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                    aria-label="Jetzt Finanzprodukte vergleichen"
                  >
                    Jetzt vergleichen
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/kundenbewertungen/markus.jpg"
                      alt="Kundenbewertung von Markus, 42"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Markus, 42</CardTitle>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 sm:h-5 sm:w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                    "SmartFinanz hat uns die perfekte Tierversicherung für unseren Hund empfohlen. Jetzt fühlen wir uns sicher, dass Max bestens versorgt ist!"
                  </p>
                  <Button
                    variant="default"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                    onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                    aria-label="Jetzt Finanzprodukte vergleichen"
                  >
                    Jetzt vergleichen
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/kundenbewertungen/helga.jpg"
                      alt="Kundenbewertung von Helga, 60"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Helga, 60</CardTitle>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                    "Ich war skeptisch, aber SmartFinanz hat mir eine sichere Banklösung gezeigt. Der Prozess war klar, und ich habe 50€ Bonus erhalten!"
                  </p>
                  <Button
                    variant="default"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                    onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                    aria-label="Jetzt Finanzprodukte vergleichen"
                  >
                    Jetzt vergleichen
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/images/kundenbewertungen/lukas.jpg"
                      alt="Kundenbewertung von Lukas, 29"
                      width={80}
                      height={80}
                      loading="lazy"
                      className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 truncate">Lukas, 29</CardTitle>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 flex flex-col flex-grow">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                    "Mit SmartFinanz habe ich die beste Trading-Plattform gefunden. Die Empfehlungen waren punktgenau, und ich spare jetzt Gebühren!"
                  </p>
                  <Button
                    variant="default"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base rounded-lg mt-4 flex-shrink-0"
                    onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
                    aria-label="Jetzt Finanzprodukte vergleichen"
                  >
                    Jetzt vergleichen
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Schema.org Markup für SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "SmartFinanz",
                "url": "https://smartfinanz.de",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://smartfinanz.de/suche?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "100000"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Anna" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                    "reviewBody": "Dank SmartFinanz habe ich eine günstige Kfz-Versicherung gefunden und 300€ im Jahr gespart! Der Vergleich war super einfach und schnell."
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Markus" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "4" },
                    "reviewBody": "SmartFinanz hat uns die perfekte Tierversicherung für unseren Hund empfohlen. Jetzt fühlen wir uns sicher, dass Max bestens versorgt ist!"
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Helga" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                    "reviewBody": "Ich war skeptisch, aber SmartFinanz hat mir eine sichere Banklösung gezeigt. Der Prozess war klar, und ich habe 50€ Bonus erhalten!"
                  },
                  {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Lukas" },
                    "reviewRating": { "@type": "Rating", "ratingValue": "5" },
                    "reviewBody": "Mit SmartFinanz habe ich die beste Trading-Plattform gefunden. Die Empfehlungen waren punktgenau, und ich spare jetzt Gebühren!"
                  }
                ],
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Wie funktioniert der Vergleich bei SmartFinanz?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Unser Expertenteam vergleicht täglich über 500 Finanzprodukte von führenden Anbietern. Sie erhalten kostenlose, unabhängige Empfehlungen basierend auf Ihren individuellen Bedürfnissen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Ist der Vergleich wirklich kostenlos?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Ja, alle unsere Vergleiche sind 100% kostenlos und unverbindlich. Wir erhalten Provisionen von unseren Partnern, aber dies beeinflusst niemals Ihre Kosten oder unsere Bewertungen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Welche Kategorien bietet SmartFinanz an?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Wir vergleichen Versicherungen, Banking-Produkte, Tierversicherungen, Trading-Plattformen, DSL-Tarife, Handytarife, Strom, Gas, Ökostrom, Reisen, Kreditkarten und Mietwagen."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Wie schnell erhalte ich meine Empfehlungen?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Die meisten Vergleiche sind sofort verfügbar. Bei komplexeren Anfragen erhalten Sie binnen weniger Minuten personalisierte Empfehlungen von unseren Experten."
                    }
                  }
                ]
              })
            }} />
          </div>
        </section>

        {/* Statistik-Bereich */}
        <section className="py-12 sm:py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div>
                <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">500+</h4>
                <p className="text-green-100 text-sm sm:text-base">Anbieter verglichen</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">100.000+</h4>
                <p className="text-green-100 text-sm sm:text-base">Zufriedene Kunden</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">€2.5M</h4>
                <p className="text-green-100 text-sm sm:text-base">Gespart insgesamt</p>
              </div>
              <div>
                <h4 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">4.8★</h4>
                <p className="text-green-100 text-sm sm:text-base">Durchschnittsbewertung</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section für bessere SEO */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Häufig gestellte Fragen</h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Wie funktioniert der Vergleich bei SmartFinanz?</h4>
                <p className="text-gray-700">Unser Expertenteam vergleicht täglich über 500 Finanzprodukte von führenden Anbietern. Sie erhalten kostenlose, unabhängige Empfehlungen basierend auf Ihren individuellen Bedürfnissen.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Ist der Vergleich wirklich kostenlos?</h4>
                <p className="text-gray-700">Ja, alle unsere Vergleiche sind 100% kostenlos und unverbindlich. Wir erhalten Provisionen von unseren Partnern, aber dies beeinflusst niemals Ihre Kosten oder unsere Bewertungen.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Welche Kategorien bietet SmartFinanz an?</h4>
                <p className="text-gray-700">Wir vergleichen Versicherungen, Banking-Produkte, Tierversicherungen, Trading-Plattformen, DSL-Tarife, Handytarife, Strom, Gas, Ökostrom, Reisen, Kreditkarten und Mietwagen.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Wie schnell erhalte ich meine Empfehlungen?</h4>
                <p className="text-gray-700">Die meisten Vergleiche sind sofort verfügbar. Bei komplexeren Anfragen erhalten Sie binnen weniger Minuten personalisierte Empfehlungen von unseren Experten.</p>
              </div>
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
                    <Link href="/versicherungen" className="hover:text-white transition-colors" aria-label="Versicherungsvergleich">
                      Versicherungsvergleich
                    </Link>
                  </li>
                  <li>
                    <Link href="/banking" className="hover:text-white transition-colors" aria-label="Girokonto und Kredite">
                      Girokonto & Kredite
                    </Link>
                  </li>
                  <li>
                    <Link href="/tierversicherungen" className="hover:text-white transition-colors" aria-label="Tierkrankenversicherung">
                      Tierkrankenversicherung
                    </Link>
                  </li>
                  <li>
                    <Link href="/trading" className="hover:text-white transition-colors" aria-label="Online Broker Vergleich">
                      Online Broker Vergleich
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Weitere Services</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://www.c24n.de/ducwCtq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="DSL Vergleich (externer Link)">DSL Vergleich</a></li>
                  <li><a href="https://www.c24n.de/5R17qbN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Handytarife vergleichen (externer Link)">Handytarife</a></li>
                  <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Stromvergleich (externer Link)">Stromvergleich</a></li>
                  <li><a href="https://www.c24n.de/Uxudvkj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Gasvergleich (externer Link)">Gasvergleich</a></li>
                  <li><a href="https://www.c24n.de/EieKR0E" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Reisen vergleichen (externer Link)">Reisen</a></li>
                  <li><a href="https://www.c24n.de/zxy0WKh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Ökostrom vergleichen (externer Link)">Ökostrom</a></li>
                  <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Kreditkarten vergleichen (externer Link)">Kreditkarte</a></li>
                  <li><a href="https://www.c24n.de/FZ9nd0R" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Mietwagen vergleichen (externer Link)">Mietwagen</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Unternehmen</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <Link href="/ueber-uns" className="hover:text-white transition-colors" aria-label="Über uns">
                      Über uns
                    </Link>
                  </li>
                  <li>
                    <Link href="/partnerprogramme" className="hover:text-white transition-colors" aria-label="Partnerprogramme">
                      Partnerprogramme
                    </Link>
                  </li>
                  <li>
                    <Link href="/karriere" className="hover:text-white transition-colors" aria-label="Karriere">
                      Karriere
                    </Link>
                  </li>
                  <li>
                    <Link href="/kontakt" className="hover:text-white transition-colors" aria-label="Kontakt">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Rechtliches</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/datenschutz" className="hover:text-white transition-colors" aria-label="Datenschutz">Datenschutz</Link></li>
                  <li><Link href="/impressum" className="hover:text-white transition-colors" aria-label="Impressum">Impressum</Link></li>
                  <li><Link href="/agb" className="hover:text-white transition-colors" aria-label="AGB">AGB</Link></li>
                  <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors" aria-label="Cookie-Richtlinie">Cookie-Richtlinie</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center">
              <p className="text-sm text-gray-400 mb-4">
                © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
              </p>
              <Link href="/" aria-label="Zurück zur Startseite">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base">
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
          </div>
        </footer>

        {/* Structured Data für lokale SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SmartFinanz",
            "url": "https://smartfinanz.de",
            "logo": "https://smartfinanz.de/logo.png",
            "description": "Deutschlands führendes Vergleichsportal für Versicherungen, Banking, DSL, Strom, Gas und mehr. Über 500 geprüfte Anbieter, kostenloser Vergleich.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-123-456789",
              "contactType": "customer service",
              "availableLanguage": "German"
            },
            "sameAs": [
              "https://www.facebook.com/smartfinanz",
              "https://www.twitter.com/smartfinanz",
              "https://www.linkedin.com/company/smartfinanz",
              "https://www.instagram.com/smartfinanz"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "100000"
            }
          })
        }} />
      </div>
    </>
  )
}
