"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, TrendingUp, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

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
    url: "https://www.tarifcheck.de/girokonto/"
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
    url: "https://partner.e-recht24.de/go.cgi?pid=912&wmid=3&cpid=1&prid=1&subid=&target=default"
  },
  {
    name: "finanzcheck.pro",
    rating: 4.6,
    features: [
      "TÜV-geprüftes Kreditvergleichsportal seit 2012",
      "Vergleich von über 20 Banken für Ratenkredite",
      "Schufa-neutrale Anfrage für bessere Konditionen",
      "Teil der Smava GmbH für vertrauensvolle Vermittlung",
      "Dezente Bewerbung von Restschuldversicherungen",
      "Kostenloser Vergleich für Kfz- und Hausratversicherungen",
      "Bis zu 1.000€ Ersparnis durch Umschuldung",
      "Kostenlose Beratung für Finanzoptimierung"
    ],
    price: "100% kostenlos",
    bonus: "Kostenlose Kreditanfrage",
    logo: "🔍",
    url: "/anbieter/finanzcheck-pro"
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
    url: "https://www.check24.de/versicherungen/"
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
    url: "https://www.verivox.de/versicherungen/"
  }
]

export default function Versicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
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
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
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
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ihr Weg zur besten Versicherung</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie mit SmartFinanz die perfekte Kfz-, Hausrat- oder Haftpflichtversicherung. Vergleichen Sie über 300 Tarife kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger bieten Ihnen erstklassigen Schutz und attraktive Boni.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 font-medium"
              onClick={() => window.open("https://www.tarifcheck.de/girokonto/", "_blank")}
            >
              Jetzt Versicherungen vergleichen
            </Button>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">So finden Sie die richtige Versicherung</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Tarife</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Nutzen Sie unseren kostenlosen Vergleich, um die besten Angebote für Kfz-, Hausrat- oder Haftpflichtversicherungen zu finden. Über 300 Tarife stehen Ihnen zur Verfügung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Achten Sie auf Bewertungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Unsere Anbieter wie Tarifcheck.de und CHECK24 haben Top-Bewertungen (z. B. eKomi 4,5/5). Vertrauen Sie auf verifizierte Kundenmeinungen.
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Unsere Testsieger für Versicherungen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider, index) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(index === 0 || index === 1) && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    {index === 0 ? "Top Empfehlung" : "Top Empfehlung"}
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
    <div className="grid gap-6 sm:gap-8 md:grid-cols-5">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-6 w-6 text-green-400" />
          <h4 className="text-xl font-bold">SmartFinanz</h4>
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
            <Link href="/versicherungen" className="hover:text-white transition-colors">
              Versicherungsvergleich
            </Link>
          </li>
          <li>
            <Link href="/banking" className="hover:text-white transition-colors">
              Girokonto & Kredite
            </Link>
          </li>
          <li>
            <Link href="/tierversicherungen" className="hover:text-white transition-colors">
              Tierkrankenversicherung
            </Link>
          </li>
          <li>
            <Link href="/trading" className="hover:text-white transition-colors">
              Online Broker Vergleich
            </Link>
          </li>
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
          <li>
            <Link href="/ueber-uns" className="hover:text-white transition-colors">
              Über uns
            </Link>
          </li>
          <li>
            <Link href="/partnerprogramme" className="hover:text-white transition-colors">
              Partnerprogramme
            </Link>
          </li>
          <li>
            <Link href="/karriere" className="hover:text-white transition-colors">
              Karriere
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:text-white transition-colors">
              Kontakt
            </Link>
          </li>
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
