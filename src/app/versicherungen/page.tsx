"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, TrendingUp, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

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
    metaDescription: "Schützen Sie Ihren Hund oder Ihre Katze mit Petprotect. Bis zu 100% Kostenübernahme und kostenfreie Videosprechstunde. Jetzt vergleichen!"
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
    url: "https://www.uelzener.de",
    metaTitle: "Uelzener Tierversicherung: Günstige Hundehaftpflicht und Krankenversicherung",
    metaDescription: "Uelzener bietet seit 150 Jahren Schutz für Hunde, Katzen und Pferde. Testsieger 2024 mit bis zu 50 Mio. € Deckung. Jetzt Tarife vergleichen!"
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
      "Flexible Tarife für Hunde- und Katzenkrankenversicherung",
      "Bis zu 100% Erstattung für Tierarztkosten",
      "Digitale App für einfache Schadenmeldung",
      "Kein Jahreslimit in Premium-Tarifen",
      "Inklusive Vorsorgeleistungen wie Zahnreinigung",
      "24/7 Zugang zu Tierärzten via Telemedizin",
      "Erstattung für alternative Behandlungen",
      "Rabatte für Mehrfachtier-Versicherungen"
    ],
    price: "ab 18€/Monat",
    bonus: "Kostenlose Telemedizin",
    logo: "🐱",
    url: "https://www.figopetinsurance.de",
    metaTitle: "Figo Tierversicherung: Flexible Krankenversicherung für Haustiere",
    metaDescription: "Figo bietet flexible Tarife mit bis zu 100% Erstattung und Telemedizin. Vergleichen Sie jetzt Tierversicherungen für Hunde und Katzen!"
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
  },
  {
    name: "Getsurance",
    rating: 4.3,
    features: [
      "Digitale Tierversicherung für Hunde und Katzen",
      "Bis zu 80% Kostenübernahme für Behandlungen",
      "Einfache Tarifverwaltung über App",
      "Schnelle Schadenmeldung online",
      "Keine Wartezeit bei Unfallbehandlungen",
      "Optionale Haftpflichtversicherung",
      "Kostenlose Beratung für Tarifauswahl",
      "Rabatte für junge Tiere"
    ],
    price: "ab 10€/Monat",
    bonus: "Kostenlose App-Nutzung",
    logo: "📱",
    url: "https://www.getsurance.de",
    metaTitle: "Getsurance Tierversicherung: Digitale Absicherung für Haustiere",
    metaDescription: "Getsurance bietet digitale Tierversicherungen mit bis zu 80% Erstattung und App-Verwaltung. Jetzt Tarife für Hunde und Katzen vergleichen!"
  }
]

export default function Tierversicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <head>
        <title>Tierversicherung Vergleich: Beste Absicherung für Hunde, Katzen und Pferde</title>
        <meta name="description" content="Vergleichen Sie die besten Tierversicherungen für Hunde, Katzen und Pferde bei SmartFinanz. Über 250 Tarife, kostenlos und unverbindlich. Sparen Sie bis zu 850€!" />
        <meta name="keywords" content="Tierversicherung, Hundekrankenversicherung, Katzenversicherung, Hundehaftpflicht, Testsieger Tierversicherung, Deutschland" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Tierversicherung Vergleich",
            "description": "Vergleichen Sie die besten Tierversicherungen für Hunde, Katzen und Pferde bei SmartFinanz.",
            "url": "https://www.smartfinanz.de/tierversicherungen",
            "publisher": {
              "@type": "Organization",
              "name": "SmartFinanz",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.smartfinanz.de/logo.png"
              }
            },
            "hasPart": providerData.map(provider => ({
              "@type": "VeterinaryCare",
              "name": provider.name,
              "description": provider.metaDescription,
              "url": provider.url
            }))
          })}
        </script>
      </head>

      {/* Header */}
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
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
            <Link href="/#kundenbewertungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Kundenbewertungen
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://www.tarifcheck.com/5dM0KnS", "_blank")}>
              Vergleich starten
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menü */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
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
                href="/#kundenbewertungen"
                className="block text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kundenbewertungen
              </Link>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open("https://www.tarifcheck.com/5dM0KnS", "_blank")}>
                Vergleich starten
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Zurück zur Startseite */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base">
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>

      {/* Einführungsabschnitt */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Beste Tierversicherung für Ihren Hund, Ihre Katze oder Ihr Pferd</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie die perfekte Tierversicherung mit SmartFinanz. Vergleichen Sie über 250 Tarife für Hunde, Katzen und Pferde kostenlos und sparen Sie bis zu 850€ jährlich. Unsere Testsieger wie Tarifcheck und CHECK24 bieten umfassenden Schutz und attraktive Boni.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-medium"
              onClick={() => window.open("https://www.tarifcheck.com/5dM0KnS", "_blank")}
            >
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
                  Nutzen Sie unseren kostenlosen Vergleich, um die besten Angebote für Hunde-, Katzen- oder Pferdeversicherungen zu finden. Über 250 Tarife stehen Ihnen zur Verfügung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Prüfen Sie Leistungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf Kostenübernahme für Behandlungen, Operationen und Vorsorge. Anbieter wie Agila und Petprotect bieten bis zu 100% Erstattung und Testsieger-Qualität.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vertrauen Sie Bewertungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Kundenbewertungen wie Trustpilot (Petprotect 4,65/5) oder TÜV-Auszeichnungen (Agila) helfen, vertrauenswürdige Anbieter wie Tarifcheck und CHECK24 zu finden.
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
                {(provider.name === "Tarifcheck Tierversicherung" || provider.name === "CHECK24 Tierversicherung") && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    {provider.name === "Tarifcheck Tierversicherung" ? "Top Empfehlung" : "2. Top Empfehlung"}
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
                  <Link href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
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

      {/* Zurück zur Startseite */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base">
            ← Zurück zur Startseite
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <TrendingUp className="h-5 w-5 sm:h-6 w-6 text-green-500" />
                <h5 className="text-lg sm:text-xl font-bold">SmartFinanz</h5>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Produkte</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/versicherungen" className="hover:text-white transition-colors">Versicherungen</Link></li>
                <li><Link href="/banking" className="hover:text-white transition-colors">Banking</Link></li>
                <li><Link href="/tierversicherungen" className="hover:text-white transition-colors">Tierversicherung</Link></li>
                <li><Link href="/trading" className="hover:text-white transition-colors">Trading</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Unternehmen</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
                <li><Link href="/partnerprogramme" className="hover:text-white transition-colors">Partnerprogramme</Link></li>
                <li><Link href="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Rechtliches</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-4 sm:mt-8 pt-4 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 SmartFinanz. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
