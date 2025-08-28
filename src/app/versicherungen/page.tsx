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
    name: "InShared",
    rating: 4.6,
    features: [
      "Günstige Kfz-Versicherung mit Top-Preisen",
      "Geld-zurück-Garantie bei weniger Schäden",
      "24/7 Notfallservice bei Schaden oder Panne",
      "100% digitaler Abschluss in wenigen Minuten",
      "Flexible Tarife mit wählbarer Selbstbeteiligung",
      "Schnelle Schadenbearbeitung online",
      "Partnerschaften mit Roland Assistance und Carglass",
      "Transparente und faire Beitragsgestaltung"
    ],
    price: "ab 15€/Monat",
    bonus: "Geld-zurück-Bonus",
    logo: "🚗",
    url: "https://www.awin1.com/awclick.php?gid=497362&mid=87589&awinaffid=2524533&linkid=3711034&clickref="
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
              Finden Sie mit SmartFinanz die perfekte Kfz-, Hausrat- oder Haftpflichtversicherung. Vergleichen Sie über 300 Tarife kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger wie Tarifcheck.de, InShared und CHECK24 bieten Ihnen erstklassigen Schutz und attraktive Boni.
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
                  Unsere Anbieter wie Tarifcheck.de, InShared und CHECK24 haben Top-Bewertungen (z. B. eKomi 4,5/5). Vertrauen Sie auf verifizierte Kundenmeinungen.
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
                {(index === 0 || index === 1 || index === 2) && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    {index === 0 ? "Top Empfehlung" : index === 1 ? "2. Top Empfehlung" : "3. Top Empfehlung"}
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
            <p>
              *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.
            </p>
          </div>
        </div>
      </section>

      {/* Detaillierter Versicherungsvergleich */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Versicherungsvergleich 2025: Die wichtigsten Versicherungen im Test</h2>
          
          {/* KFZ Versicherung */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">KFZ Versicherung Vergleich - Testsieger 2025</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Was kostet eine KFZ Versicherung?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Die Kosten für eine KFZ Versicherung variieren stark je nach Fahrzeugtyp, Schadenfreiheitsklasse und Region. 
                    Im Durchschnitt zahlen deutsche Autofahrer zwischen 200€ und 800€ jährlich für ihre Kfz-Haftpflichtversicherung.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💡 Spartipp:</h4>
                    <p className="text-sm text-green-700">
                      Mit unserem KFZ Versicherung Vergleich können Sie bis zu 1.000€ jährlich sparen. 
                      Besonders lohnenswert ist der Wechsel für Fahranfänger und bei Tariferhöhungen.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>KFZ Versicherung Test - Testsieger Eigenschaften</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Günstige Beiträge bei bester Leistung
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      24/7 Schadenservice und Pannenhilfe
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Flexible Selbstbeteiligung wählbar
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Online Abschluss mit Sofortschutz
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Schadenfreiheitsrabatt bis zu 85%
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hausratversicherung */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Hausratversicherung günstig - Der große Vergleich</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Hausratversicherung Test 2025: Das sollten Sie wissen</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Grundschutz</h5>
                  <p className="text-sm text-gray-600">
                    Schutz vor Einbruch, Brand, Leitungswasser und Sturm. 
                    Bereits ab 40€ jährlich für eine 50m² Wohnung.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Erweiterte Deckung</h5>
                  <p className="text-sm text-gray-600">
                    Zusätzlich Elementarschäden, Fahrraddiebstahl und 
                    grobe Fahrlässigkeit. Empfehlung für Familien.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Premium-Schutz</h5>
                  <p className="text-sm text-gray-600">
                    All-Risk-Deckung mit Cyber-Schutz, Hausrat unterwegs 
                    und ohne Selbstbeteiligung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Haftpflichtversicherung */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Haftpflichtversicherung Test - Unverzichtbarer Schutz</h3>
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">⚠️ Wichtiger Hinweis zur Haftpflichtversicherung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-yellow-700 mb-4">
                  Eine Haftpflichtversicherung ist die wichtigste Versicherung überhaupt! Sie schützt vor 
                  Schadensersatzansprüchen bis zu mehreren Millionen Euro und kostet nur wenige Euro im Monat.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="font-semibold mb-2">Mindestdeckung:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• 10 Millionen Euro Personenschäden</li>
                      <li>• 1 Million Euro Sachschäden</li>
                      <li>• 100.000 Euro Vermögensschäden</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Empfohlene Extras:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Ausfalldeckung bei unversicherten Schädigern</li>
                      <li>• Schlüsselverlust (privat & beruflich)</li>
                      <li>• Internetnutzung und Cyber-Risiken</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rechtsschutzversicherung */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Rechtsschutzversicherung - Wann lohnt sich der Abschluss?</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Rechtsschutz-Bereiche im Überblick</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Verkehrsrechtsschutz:</strong> Unfälle, Bußgelder, Führerschein</li>
                    <li><strong>Arbeitsrechtsschutz:</strong> Kündigung, Lohn, Mobbing</li>
                    <li><strong>Wohnrechtsschutz:</strong> Mietstreitigkeiten, Nachbarrecht</li>
                    <li><strong>Familienrechtsschutz:</strong> Scheidung, Unterhalt, Sorgerecht</li>
                    <li><strong>Strafrechtsschutz:</strong> Vorwürfe und Anschuldigungen</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Kosten und Wartezeiten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Rechtsschutzversicherungen kosten zwischen 150€ und 400€ jährlich je nach Baustein-Kombination.
                  </p>
                  <div className="bg-red-50 p-3 rounded">
                    <h5 className="font-semibold text-red-800 mb-1">Wichtig:</h5>
                    <p className="text-sm text-red-700">
                      3 Monate Wartezeit bei Vertragsstreitigkeiten, 
                      kein Rückwirkungsschutz für bestehende Probleme!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Versicherung Online Abschließen Guide */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Versicherung online abschließen - So geht's richtig</h2>
          
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
                  Nutzen Sie Vergleichsportale wie CHECK24 oder Tarifcheck.de für einen 
                  kostenlosen Versicherungsvergleich von über 300 Tarifen.
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
                  Geben Sie Ihre Daten in den Rechner ein. Achten Sie auf korrekte Angaben 
                  für eine genaue Beitragsberechnung.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <CardTitle className="text-lg">Prüfen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Vergleichen Sie nicht nur den Preis, sondern auch Leistungen, 
                  Selbstbeteiligung und Kundenbewertungen der Versicherungsanbieter.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <CardTitle className="text-lg">Abschließen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Schließen Sie die Versicherung direkt online ab. 
                  Sie erhalten sofort Ihren Versicherungsschein per E-Mail.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Häufige Fragen zum Online-Abschluss</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Ist der Online-Abschluss sicher?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Ja, alle unsere Partner-Portale verwenden SSL-Verschlüsselung und sind TÜV-geprüft. 
                  Ihre Daten werden sicher übertragen und DSGVO-konform verarbeitet.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Kann ich online kündigen?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Die meisten Versicherungen können heute online gekündigt werden. 
                  Beachten Sie die Kündigungsfristen (meist 1-3 Monate vor Ablauf).
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Bekomme ich Beratung?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  CHECK24 bietet kostenlose Beratung von 08:00-22:00 Uhr durch über 300 Versicherungsexperten. 
                  Auch Telefon-Support ist verfügbar.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Welche Zahlungsmethoden gibt es?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Meist SEPA-Lastschrift (häufig mit Rabatt), Überweisung oder Kreditkarte. 
                  Ratenzahlung ist oft gegen Aufpreis möglich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versicherung wechseln - Spartipps */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Versicherung wechseln und bis zu 1.000€ sparen</h2>
          
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ein Versicherungswechsel lohnt sich oft mehr als gedacht. Mit dem richtigen Timing und Anbieter 
              können Sie erhebliche Beträge sparen, ohne auf Leistungen zu verzichten.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">🚗 KFZ-Versicherung wechseln</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Beste Wechselzeit:</h5>
                    <p className="text-sm text-gray-600">
                      Stichtag 30. November für Wechsel zum 1. Januar. 
                      Bei Beitragserhöhung: Sonderkündigungsrecht innerhalb 1 Monat.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Durchschnittliche Ersparnis:</h5>
                    <p className="text-sm text-gray-600">
                      <strong className="text-green-600">300-800€ jährlich</strong> bei gleichen Leistungen. 
                      Besonders Fahranfänger profitieren vom Wechsel.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-green-700">
                      <strong>Tipp:</strong> Schadenfreiheitsklasse wird beim Wechsel übernommen!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600">🏠 Hausrat & Haftpflicht wechseln</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Kündigungsfristen:</h5>
                    <p className="text-sm text-gray-600">
                      Meist 3 Monate vor Ablauf. Bei Schäden oder Beitragserhöhung: 
                      Sonderkündigungsrecht oft bis 1 Monat danach.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Sparpotential:</h5>
                    <p className="text-sm text-gray-600">
                      Hausrat: <strong className="text-blue-600">50-200€ jährlich</strong><br/>
                      Haftpflicht: <strong className="text-blue-600">20-100€ jährlich</strong>
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm text-blue-700">
                      <strong>Achtung:</strong> Nahtloser Übergang wichtig - nie ohne Schutz sein!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
            <h3 className="text-lg font-bold mb-4 text-yellow-800">✅ Checkliste für den Versicherungswechsel</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h5 className="font-semibold mb-2">Vor dem Wechsel prüfen:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Kündigungsfrist der alten Versicherung</li>
                  <li>• Vergleichbare Leistungen im neuen Tarif</li>
                  <li>• Wartezeiten bei neuem Anbieter</li>
                  <li>• Laufende Schadensfälle abwickeln</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Nach dem Wechsel:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Kündigungsbestätigung prüfen</li>
                  <li>• Neue Versicherungsunterlagen sicher aufbewahren</li>
                  <li>• Bei KFZ: eVB-Nummer für Zulassung</li>
                  <li>• Daueraufträge anpassen</li>
                </ul>
              </div>
            </div>
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
