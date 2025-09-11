"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
      </svg>
      <span className="font-bold">martFinanz</span>
    </div>
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
    url: "https://www.awin1.com/awclick.php?gid=365648&mid=15000&awinaffid=2524533&linkid=2841978&clickref=",
    badge: "Top Hausratversicherung"
  },
  {
    name: "BavariaDirekt",
    rating: 4.5,
    features: [
      "Günstige Kfz-Versicherung ab 9,70€/Monat",
      "Bis zu 350€ Ersparnis beim Vergleich",
      "91% Weiterempfehlungsrate von Kunden",
      "24h Notfall-Hotline für schnelle Unterstützung",
      "Schufa-neutrale Tarifberechnung",
      "Einfacher Online-Abschluss in 3 Minuten",
      "Ausgezeichnet als 'Fairer Versicherer' (Focus Money)"
    ],
    price: "ab 9,70€/Monat",
    bonus: "Bis zu 350€ Ersparnis",
    logo: "🚘",
    url: "https://www.awin1.com/awclick.php?gid=355334&mid=13884&awinaffid=2524533&linkid=2322280&clickref=",
    badge: "Top Kfz-Versicherung"
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
    badge: "Top Zahnzusatzversicherung"
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
    badge: "Top Sachversicherung"
  },
  {
    name: "eRecht24",
    rating: 4.3,
    features: [
      "Rechtssicherheit für Webseiten und Versicherungsverträge",
      "DSGVO-konforme Rechtstexte für Versicherungsanbieter",
      "Automatische Rechtstext-Generatoren für Impressum und Datenschutz",
      "Abmahnschutz für Affiliate- und Vergleichsportale",
      "Kostenlose Erstberatung zu rechtlichen Fragen",
      "NEU: KI-gestützte Lösungen für Versicherungs-Compliance",
      "Live-Webinare zu Internetrecht und Verbraucherschutz",
      "Muster-Verträge für Versicherungs- und Finanzprodukte",
      "Zentraler Projekt Manager für rechtliche Dokumente",
      "Über 200.000 Nutzer vertrauen eRecht24"
    ],
    price: "ab 20€/Monat",
    bonus: "Gratis Rechtscheck",
    logo: "⚖️",
    url: "https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default",
    badge: "Top Rechtsberatung"
  },
  {
    name: "Tarifcheck Wohngebäudeversicherung",
    rating: 4.6,
    features: [
      "Vergleich von über 200 Wohngebäudeversicherungen",
      "100% kostenloser und unverbindlicher Vergleich",
      "Schutz für Haus und Eigentum vor Feuer, Sturm und mehr",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 09/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Bis zu 500€ jährliche Ersparnis",
      "Schneller Online-Abschluss in wenigen Minuten",
      "Kostenlose Beratung für maßgeschneiderte Tarife"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 500€ Ersparnis",
    logo: "🏡",
    url: "https://www.tarifcheck.com/xLfTPmG",
    badge: "Top Wohngebäudeversicherung"
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
    bonus: "Bis zu 300€ Rückerstattung",
    logo: "⚖️",
    url: "https://www.verivox.de/versicherungen/",
    badge: "Top Empfehlung"
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
    badge: "Top Rechtsschutzversicherung"
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
    badge: "Top Auslandsreisekrankenversicherung"
  },
  {
    name: "Die Bayerische",
    rating: 4.8,
    features: [
      "Optimaler Hinterbliebenenschutz für Ihre Familie",
      "Flexibler Vergleichsrechner für maßgeschneiderte Tarife",
      "Bis zu 100% Absicherung des Familieneinkommens",
      "Testsieger bei Stiftung Warentest (09/2025, Note 1,3)",
      "Einfacher Online-Abschluss in wenigen Minuten",
      "Kostenlose Beratung durch Experten",
      "Anpassbare Versicherungssumme und Laufzeit",
      "Über 160 Jahre Erfahrung und Vertrauen"
    ],
    price: "ab 5,90€/Monat",
    bonus: "10% Rabatt bei Abschluss bis 31.12.2025",
    logo: "🛡️",
    url: "https://www.awin1.com/awclick.php?gid=391372&mid=17046&awinaffid=2524533&linkid=2659747&clickref=",
    badge: "Top Risikolebensversicherung"
  }
]

export default function Versicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const canonicalUrl = "https://www.unser-vergleichsportal.de/versicherungen"

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Versicherungen vergleichen 2025: Wohngebäude, Kfz, Hausrat, Reise & Tierversicherung | SmartFinanz</title>
        <meta
          name="description"
          content="Vergleichen Sie Wohngebäude-, Kfz-, Hausrat-, Haftpflicht-, Kranken- & Zahnzusatz-, Reise-, E-Bike- und Tierversicherungen. Jetzt Tarife prüfen, Leistungen vergleichen und bis zu 1.000€ jährlich sparen – mit Testsiegern wie Die Bayerische, hepster, TravelSecure, Tarifcheck & HanseMerkur."
        />
        <meta
          name="keywords"
          content="Versicherungsvergleich, Wohngebäudeversicherung, Kfz-Versicherung, Hausratversicherung, Haftpflichtversicherung, Krankenzusatzversicherung, Zahnzusatzversicherung, Reiseversicherung, E-Bike-Versicherung, Tierversicherung, Tierkrankenversicherung, Hundeversicherung, Katzenversicherung, SmartFinanz"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="SmartFinanz" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Versicherungen vergleichen 2025 | SmartFinanz" />
        <meta
          property="og:description"
          content="Alle wichtigen Versicherungen im Vergleich: Wohngebäude, Kfz, Hausrat, Gesundheit, Reise & Tierversicherung. Einfach Tarife vergleichen & sparen."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="SmartFinanz" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Versicherungen vergleichen bei SmartFinanz",
              "url": "${canonicalUrl}",
              "inLanguage": "de-DE",
              "description": "Vergleichen Sie Wohngebäude-, Kfz-, Hausrat-, Haftpflicht-, Kranken- & Zahnzusatz-, Reise-, E-Bike- und Tierversicherungen. Jetzt Tarife prüfen und sparen.",
              "publisher": {
                "@type": "Organization",
                "name": "SmartFinanz",
                "url": "https://www.unser-vergleichsportal.de",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/favicon.svg"
                }
              },
              "mainEntityOfPage": "${canonicalUrl}"
            }
          `}
        </script>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
            <span className="text-sm text-gray-600 mt-1">Unser-Vergleichsportal.de</span>
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
            <Button
              className="hidden md:block bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
            >
              Vergleich starten
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu öffnen/schließen"
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
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Wir haben die besten Versicherer 2025 für Sie verglichen</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie die richtige Versicherung.
              Vergleichen Sie über 300 Tarife kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger wie hepster, TravelSecure, Tarifcheck und
              HanseMerkur bieten Ihnen erstklassigen Schutz und attraktive Boni.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-medium"
              onClick={() => window.open("https://www.tarifcheck.com/xLfTPmG", "_blank")}
            >
              Jetzt Versicherungen vergleichen
            </Button>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">So finden Sie die passende Versicherung</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Tarife</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Nutzen Sie unseren kostenlosen Vergleich, um die besten Angebote für Wohngebäude-, Kfz-, Hausrat-, Haftpflicht-, Reise-, E-Bike- oder
                  Zahnzusatzversicherungen zu finden. Über 300 Tarife stehen Ihnen zur Verfügung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Achten Sie auf Bewertungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Unsere Anbieter wie hepster, TravelSecure, Tarifcheck und CHECK24 haben Top-Bewertungen (z. B. eKomi 4,5/5). Vertrauen Sie auf
                  verifizierte Kundenmeinungen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Prüfen Sie rechtliche Aspekte</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mit eRecht24 sichern Sie Ihre Versicherungsverträge DSGVO-konform ab. Nutzen Sie Rechtstext-Generatoren für maximale Sicherheit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Unsere Testsieger Versicherungen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">{provider.badge}</Badge>
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
                  <Link href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener noreferrer sponsored' : undefined}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto">
                      Zum Anbieter*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>*Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.</p>
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
      <section className="py-12 sm:py-16 bg-gray-50">
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
          <div className="grid gap-6 sm:gap-8 md:grid-cols-5">
            <div>
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
                <span className="text-sm text-gray-400 mt-1">Unser-Vergleichsportal.de</span>
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
                <li><Link href="/versicherungen" className="hover:text-white transition-colors">Versicherungsvergleich</Link></li>
                <li><Link href="/banking" className="hover:text-white transition-colors">Girokonto & Kredite</Link></li>
                <li><Link href="/tierversicherungen" className="hover:text-white transition-colors">Tierkrankenversicherung</Link></li>
                <li><Link href="/trading" className="hover:text-white transition-colors">Online Broker Vergleich</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Weitere Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.c24n.de/ducwCtq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DSL Vergleich</a></li>
                <li><a href="https://www.c24n.de/5R17qbN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Handytarife</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Stromvergleich</a></li>
                <li><a href="https://www.c24n.de/Uxudvkj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Gasvergleich</a></li>
                <li><a href="https://www.c24n.de/EieKR0E" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reisen</a></li>
                <li><a href="https://www.c24n.de/zxy0WKh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ökostrom</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kreditkarte</a></li>
                <li><a href="https://www.c24n.de/FZ9nd0R" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mietwagen</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Unternehmen</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
                <li><Link href="/partnerprogramme" className="hover:text-white transition-colors">Partnerprogramme</Link></li>
                <li><Link href="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Rechtliches</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400 mb-4">
              © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
