"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, TrendingUp, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="flex items-center space-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
          <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
          <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
        </svg>
        <span className="font-bold">martFinanz</span>
      </div>
      <span className="text-sm text-gray-600 mt-1">Unser-Vergleichsportal.de</span>
    </div>
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
    logo: "🐴",
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
    logo: "🐕",
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
    logo: "🐱",
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
    logo: "🐾",
    url: <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=367217&mid=13775&awinaffid=2524533&linkid=2426488&clickref=">Figo Tierkrankenversicherung</a>,
    metaTitle: "Figo Tierversicherung: Flexible Krankenversicherung für Haustiere",
    metaDescription: "Figo bietet flexible Tarife mit bis zu 90% Erstattung, freier Tierarztwahl und unbegrenzten Videosprechstunden. Vergleichen Sie jetzt Tierversicherungen für Hunde und Katzen!"
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
        <title>Tierversicherung Vergleich 2025: Beste Hunde- & Katzenversicherung | SmartFinanz</title>
        <meta name="description" content="Vergleichen Sie Hundeversicherung, Katzenversicherung und Tierkrankenversicherung bei SmartFinanz. Sparen Sie bis zu 850€ mit Testsiegern wie Tarifcheck, CHECK24, Uelzener und hepster!" />
        <meta name="keywords" content="Hundeversicherung, Katzenversicherung, Tierkrankenversicherung, Hundehaftpflichtversicherung, Hunde-OP-Versicherung, Tierversicherung Vergleich, Tarifcheck, CHECK24, Uelzener, hepster" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SmartFinanz" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="canonical" href="https://smartfinanz.de/tierversicherungen" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Tierversicherung Vergleich bei SmartFinanz",
              "description": "Vergleichen Sie Hundeversicherung, Katzenversicherung und Tierkrankenversicherung. Sparen Sie mit Testsiegern wie Tarifcheck, CHECK24, Uelzener und hepster bis zu 850€ jährlich.",
              "publisher": {
                "@type": "Organization",
                "name": "SmartFinanz",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/favicon.svg"
                }
              }
            }
          `}
        </script>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-start">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/versicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium" onClick={() => console.log("Clicked Versicherungen")}>
              Versicherungen
            </Link>
            <Link href="/banking" className="text-gray-600 hover:text-green-600 transition-colors font-medium" onClick={() => console.log("Clicked Banking")}>
              Banking
            </Link>
            <Link href="/tierversicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium" onClick={() => console.log("Clicked Tierversicherung")}>
              Tierversicherung
            </Link>
            <Link href="/trading" className="text-gray-600 hover:text-green-600 transition-colors font-medium" onClick={() => console.log("Clicked Trading")}>
              Trading
            </Link>
            <Link href="/#kundenbewertungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium" onClick={() => console.log("Clicked Kundenbewertungen")}>
              Kundenbewertungen
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://www.tarifcheck.com/5dM0KnS", "_blank")}>
              Vergleich starten
            </Button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="/versicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  console.log("Clicked Mobile Versicherungen")
                  handleNavigation("/versicherungen")
                }}
              >
                Versicherungen
              </Link>
              <Link
                href="/banking"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  console.log("Clicked Mobile Banking")
                  handleNavigation("/banking")
                }}
              >
                Banking
              </Link>
              <Link
                href="/tierversicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  console.log("Clicked Mobile Tierversicherung")
                  handleNavigation("/tierversicherungen")
                }}
              >
                Tierversicherung
              </Link>
              <Link
                href="/trading"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  console.log("Clicked Mobile Trading")
                  handleNavigation("/trading")
                }}
              >
                Trading
              </Link>
              <Link
                href="/#kundenbewertungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false)
                  console.log("Clicked Mobile Kundenbewertungen")
                  handleNavigation("/#kundenbewertungen")
                }}
              >
                Kundenbewertungen
              </Link>
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setMobileMenuOpen(false)
                  window.open("https://www.tarifcheck.com/5dM0KnS", "_blank")
                }}
              >
                Vergleich starten
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Einführungsabschnitt */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Beste Tierversicherung 2025: Hundeversicherung & Katzenversicherung</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie die perfekte Hundeversicherung, Katzenversicherung oder Tierkrankenversicherung mit unserem Tierversicherung Vergleich. Sparen Sie bis zu 850€ jährlich mit Testsiegern wie Tarifcheck, CHECK24, Uelzener und hepster. Unsere Anbieter bieten Hundehaftpflichtversicherung und Tierarztkosten Versicherung für umfassenden Schutz Ihres Haustiers.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-medium" onClick={() => window.open("https://www.tarifcheck.com/5dM0KnS", "_blank")}>
              Jetzt Tierversicherungen vergleichen
            </Button>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">So finden Sie die richtige Tierversicherung</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Tarife</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Nutzen Sie unseren Tierversicherung Vergleich, um günstige Tierversicherungen für Hunde, Katzen oder Pferde zu finden. Über 250 Tarife stehen Ihnen zur Verfügung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Prüfen Sie Leistungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf Kostenübernahme für Tierarztkosten, Operationen und Vorsorge. Anbieter wie Uelzener, BavariaDirekt und hepster bieten bis zu 100% Erstattung für Hunde OP Versicherung und Katzenkrankenversicherung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vertrauen Sie Bewertungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Kundenbewertungen wie Handelsblatt Testsieger (Uelzener, CHECK24) oder Focus Money (BavariaDirekt) helfen, vertrauenswürdige Anbieter für Hundeversicherung und Katzenversicherung zu finden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Unsere Testsieger für Tierversicherungen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider, index) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(provider.name === "Tarifcheck Tierversicherung" || provider.name === "CHECK24 Tierversicherung" || provider.name === "Uelzener Tierversicherung" || provider.name === "BavariaDirekt" || provider.name === "HanseMerkur Tierversicherung" || provider.name === "AXA") && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    {provider.name === "Tarifcheck Tierversicherung" ? "Top Empfehlung" : 
                     provider.name === "CHECK24 Tierversicherung" ? "Top Empfehlung" : 
                     provider.name === "Uelzener Tierversicherung" ? "Top Empfehlung" : 
                     provider.name === "BavariaDirekt" ? "Top Empfehlung" : 
                     provider.name === "HanseMerkur Tierversicherung" ? "Top Kostenübernahme" : 
                     "Top Hundehalterhaftpflicht"}
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
                  <Link
                    href={typeof provider.url === 'string' ? provider.url : provider.url.props.href}
                    target={typeof provider.url === 'string' && provider.url.startsWith('http') ? '_blank' : '_self'}
                    rel={typeof provider.url === 'string' && provider.url.startsWith('http') ? 'noopener noreferrer sponsored' : undefined}
                    onClick={() => console.log(`Navigating to provider: ${typeof provider.url === 'string' ? provider.url : provider.url.props.href}`)}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto">
                      Zum Anbieter*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>
              *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.
            </p>
          </div>
        </div>
      </section>

      {/* Detaillierter Versicherungsvergleich */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Tierversicherungsvergleich 2025: Beste Hundeversicherung & Katzenversicherung</h2>

          {/* Hundehaftpflichtversicherung */}
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
                    <p className="text-sm text-green-700">
                      Mit einem Tierversicherung Vergleich sparen Sie bis zu 300€ jährlich. Nutzen Sie Testsieger wie Tarifcheck oder CHECK24 für die beste Hundehaftpflichtversicherung.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Testsieger Hundehaftpflicht Eigenschaften</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Bis zu 50 Mio. € Deckungssumme
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Schutz bei grober Fahrlässigkeit
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Welpen bis 12 Monate oft kostenfrei mitversichert
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Weltweiter Schutz für Reisen
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      24/7 Schadenmeldung online
                    </li>
                  </ul>
                  <Link
                    href="https://www.tarifcheck.com/5dM0KnS"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => console.log("Navigating to Tarifcheck Hundehaftpflicht")}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
                      Jetzt Hundehaftpflicht vergleichen*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tierkrankenversicherung */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Tierkrankenversicherung – Schutz für Tierarztkosten</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Tierkrankenversicherung Test 2025: Das sollten Sie wissen</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Grundschutz</h5>
                  <p className="text-sm text-gray-600">
                    Katzenkrankenversicherung und Hunde OP Versicherung ab 7,42€/Monat (z. B. hepster). Deckt Tierarztkosten für Krankheiten und Unfälle.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Erweiterte Deckung</h5>
                  <p className="text-sm text-gray-600">
                    Bis zu 100% Kostenübernahme für Operationen und Behandlungen (z. B. Uelzener, hepster). Inklusive Vorsorge wie Impfungen und Zahnreinigung.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Premium-Schutz</h5>
                  <p className="text-sm text-gray-600">
                    Weltweiter Schutz, Telemedizin und keine Altersbeschränkung (z. B. Figo, hepster). Ideal für chronisch kranke Tiere.
                  </p>
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
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Umfassender Schutz für Hunde, Katzen und Pferde
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Kranken- und OP-Versicherung mit Gesundheitspauschale
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Testsieger in Leistungs- und Fairness-Tests 2024
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Auslandsschutz für bis zu 12 Monate weltweit
                    </li>
                  </ul>
                  <Link
                    href="https://tidd.ly/3UN80GC"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => console.log("Navigating to Uelzener Tierkrankenversicherung")}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
                      Jetzt Uelzener Tierkrankenversicherung abschließen*
                    </Button>
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
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Günstige Hundehaftpflicht ab 23,13€/Jahr
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Welpen bis 12 Monate kostenfrei mitversichert
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      24h-Notfall-Hotline für schnellen Service
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Auszeichnung als 'Fairer Versicherer'
                    </li>
                  </ul>
                  <Link
                    href="https://www.awin1.com/awclick.php?gid=355337&mid=13884&awinaffid=2524533&linkid=3445052&clickref="
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => console.log("Navigating to BavariaDirekt Tierkrankenversicherung")}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
                      Jetzt BavariaDirekt Tierkrankenversicherung abschließen*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-200 relative">
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">Top Hunde Krankenversicherung</Badge>
                <CardHeader>
                  <CardTitle>hepster Hunde-OP-Versicherung</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Bis zu 100% Kostenübernahme für Operationen
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Freie Tierarzt- und Klinikwahl
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Sofortschutz bei Unfällen ohne Wartezeit
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Stabiler Beitrag unabhängig vom Hundealter
                    </li>
                  </ul>
                  <Link
                    href="https://www.awin1.com/awclick.php?gid=458099&mid=17549&awinaffid=2524533&linkid=3870251&clickref="
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    onClick={() => console.log("Navigating to hepster Hunde-OP-Versicherung")}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
                      Jetzt hepster Hunde-OP-Versicherung abschließen*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hunde-OP-Versicherung */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Hunde-OP-Versicherung – Optimaler Schutz für Operationen mit hepster</h3>
            <div className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
              <p className="mb-4">
                Eine <strong>Hunde-OP-Versicherung</strong> schützt Hundebesitzer vor hohen Kosten für chirurgische Eingriffe, die durch Unfälle oder Krankheiten notwendig werden. Operationen wie Kreuzbandrisse, Tumorentfernungen oder Knochenbrüche können schnell mehrere Tausend Euro kosten. Mit der <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=458099&mid=17549&awinaffid=2524533&linkid=3870251&clickref=" className="text-green-600 hover:underline">hepster Hunde-OP-Versicherung</a> sichern Sie Ihren Hund flexibel und digital ab – ohne Wartezeiten und mit bis zu 100% Kostenübernahme. hepster ist Trusted Shops zertifiziert und bietet Top-Kundenbewertungen (4,6/5, 09/2025).
              </p>
              <h4 className="text-lg font-semibold mb-4">Warum eine Hunde-OP-Versicherung sinnvoll ist</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Abdeckung von Operationskosten bis zu 100%.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Keine Wartezeiten für sofortigen Schutz.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Flexible Tarife mit Monats- oder Jahresabo.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>100% digitale Verwaltung für einfache Schadenmeldung.</span>
                </li>
              </ul>
              <h4 className="text-lg font-semibold mb-4">Worauf Sie bei der Auswahl achten sollten</h4>
              <p className="mb-4">
                Um die beste <strong>Hunde-OP-Versicherung</strong> zu finden, beachten Sie folgende Punkte:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span><strong>Leistungsumfang</strong>: Prüfen Sie, ob alle Operationstypen (z. B. Unfall, Krankheit) abgedeckt sind.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span><strong>Kostenübernahme</strong>: Wählen Sie Tarife mit hoher Erstattung (bis 100%) und ohne Selbstbeteiligung.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span><strong>Flexibilität</strong>: Tarife mit kurzen Laufzeiten sind ideal für wechselnde Bedürfnisse.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span><strong>Kundenbewertungen</strong>: hepster punktet mit Trusted Shops Zertifizierung und 4,6/5 Sternen.</span>
                </li>
              </ul>
              <p className="mb-6">
                Mit der <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=458099&mid=17549&awinaffid=2524533&linkid=3870251&clickref=" className="text-green-600 hover:underline">hepster Hunde-OP-Versicherung</a> schützen Sie Ihren Hund vor hohen Operationskosten. Wählen Sie zwischen Monats- oder Jahresabo, passen Sie den Tarif an Ihre Bedürfnisse an und profitieren Sie von einer einfachen Online-Verwaltung. Starten Sie jetzt und sichern Sie Ihren Vierbeiner optimal ab!
              </p>
              <div className="text-center">
                <a rel="sponsored" href="https://www.awin1.com/awclick.php?gid=458099&mid=17549&awinaffid=2524533&linkid=3870251&clickref=" target="_blank">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-medium">
                    Jetzt die hepster Hunde-OP-Versicherung online abschließen!*
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tierversicherung Online Abschließen Guide */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Tierversicherung online abschließen – So finden Sie die beste Hundeversicherung</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <CardTitle className="text-lg">Vergleichen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Nutzen Sie Portale wie Tarifcheck oder CHECK24 für einen Tierversicherung Vergleich von über 250 Tarifen für Hundeversicherung und Katzenversicherung.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle className="text-lg">Berechnen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Geben Sie Daten wie Tierart, Rasse und Alter ein, um genaue Beiträge für Hundehaftpflichtversicherung oder Tierkrankenversicherung zu erhalten.
                </p>
