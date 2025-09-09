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
      "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 09/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Über 3.194 verifizierte Kundenbewertungen",
      "Deutschlands drittgrößtes Vergleichsportal",
      "Bis zu 1.000€ jährlich sparen bei Girokonten und Krediten"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 120€ Neukundenbonus",
    logo: "🏆",
    url: "https://www.tarifcheck.de/girokonto/"
  },
  {
    name: "DKB",
    rating: 4.7,
    features: [
      "Kostenloses Girokonto mit 100€ Prämie (ab 700€ Geldeingang oder unter 28 Jahre)",
      "Visa Kreditkarte ohne Jahresgebühr, weltweit kostenlos bezahlen",
      "Tagesgeldkonto mit attraktiven Zinsen bis 3,5% p.a.",
      "Nachhaltige Bank: Finanziererin erneuerbarer Energien",
      "Online-Broker mit ETF-Sparplänen ab 1,90€ pro Trade",
      "Kinderkonto für finanzielle Bildung der Jüngsten",
      "Baufinanzierung mit flexiblen Konditionen und LBS-Bausparen",
      "DKB-App: Sicher und mobil Bankgeschäfte erledigen"
    ],
    price: "100% kostenlos",
    bonus: "100€ Prämie + 30€ Kreditkarten-Bonus",
    logo: "🏦",
    url: "https://www.awin1.com/awclick.php?gid=441815&mid=11329&awinaffid=2524533&linkid=2273909&clickref="
  },
  {
    name: "Credimaxx",
    rating: 4.9,
    features: [
      "Kredite von 4.000€ bis 50.000€ mit sozialer Verantwortung",
      "Sofortvermittlung durch erfahrene Kreditprofis",
      "Digitaler Abschluss mit WebID oder VideoIdent",
      "Kredit ohne Schufa, Sofortkredit oder Umschuldung möglich",
      "TÜV Kundenzufriedenheit: 1.9 (sehr gut), eKomi 4.9/5",
      "Vermittlung in bis zu 1 Minute",
      "100% Sicherheit mit 256-Bit-SSL-Verschlüsselung",
      "25 Jahre Erfahrung in der Kreditvermittlung"
    ],
    price: "ab 10,99% eff. Zins p.a.",
    bonus: "Schnelle Auszahlung",
    logo: "💳",
    url: "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D"
  },
  {
    name: "auxmoney",
    rating: 4.8,
    features: [
      "Kreditvermittlung auch für Selbstständige und Freiberufler",
      "Kooperation mit SWK Bank für schnelle Abwicklung",
      "eKomi Gold Siegel mit 4,8/5 Sternen",
      "Über 10 Jahre Erfahrung im Kreditmarkt",
      "Schufa-neutrale Kreditanfrage",
      "Kostenlose Sondertilgungen für flexible Rückzahlung",
      "Vergleich von über 20 Banken für beste Konditionen",
      "Nirgendwo-Günstiger-Garantie mit bis zu 300€ Rückerstattung"
    ],
    price: "Bonitätsabhängige Zinsen",
    bonus: "Flexible Kreditkonditionen",
    logo: "💸",
    url: "https://partner.auxmoney.com/go.cgi?pid=10017147&wmid=54&cpid=1&prid=1&subid=&target=Startseite"
  },
  {
    name: "CHECK24",
    rating: 4.7,
    features: [
      "Marktführer mit über 90% Marktabdeckung bei Girokonten und Krediten",
      "Über 25 Testsiege im Finanzvergleich (Handelsblatt 09/2024)",
      "Vergleich von über 300 Girokonten und Kreditangeboten",
      "Nirgendwo-Günstiger-Garantie für beste Konditionen",
      "Kostenlose Beratung durch 300 Finanzexperten (08:00–22:00 Uhr)",
      "Über 98% Kundenzufriedenheit",
      "Vermittlung von Krediten mit Provisionstransparenz",
      "Zusätzliche Vergleiche für Versicherungen, Strom und Gas"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 100€ Cashback",
    logo: "✅",
    url: "https://www.check24.de/kredit/"
  }
]

export default function Banking() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Meta-Tags für SEO */}
      <Head>
        <title>Finden Sie mit SmartFinanz das passende Girokonto und Kredit 2025</title>
        <meta name="description" content="Vergleichen Sie mit SmartFinanz über 300 Girokonten und Kredite. Kostenlos, transparent und mit Top-Bewertungen. Sparen Sie bis zu 1.000€ jährlich mit unseren Testsiegern!" />
        <meta name="keywords" content="Girokonto Vergleich, Kredit Vergleich, SmartFinanz, kostenloses Girokonto, Testsieger 2025, Kreditkarte, Tagesgeld, Baufinanzierung" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Finden Sie mit SmartFinanz das passende Girokonto</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie das passende Girokonto und den richtigen Kredit. Vergleichen Sie über 300 Finanzprodukte kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger bieten Ihnen erstklassige Konditionen und attraktive Boni.
            </p>

            {/* Button 1 – Banking */}
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 font-medium"
              onClick={() => window.open("https://www.tarifcheck.de/girokonto/", "_blank")}
            >
              Jetzt Tarife vergleichen
            </Button>

            {/* kurze Erklärung zwischen den Buttons */}
            <p className="mt-2 text-xs sm:text-sm text-green-100">
              Zur Vermögensbildung: Nutzen Sie den Button, um passende Online-Broker für Aktien, ETFs &amp; Krypto Investitionen zu vergleichen.
            </p>

            {/* Button 2 – Trading (gleicher Look) */}
            <div className="mt-3 flex justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-medium">
                <Link
                  href="/trading"
                  aria-label="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                  title="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                >
                  Jetzt Broker vergleichen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">So finden Sie das passende Girokonto und den richtigen Kredit</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Angebote</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Nutzen Sie unseren kostenlosen Vergleich, um die besten Girokonten und Kredite zu finden. Über 300 Angebote von Top-Anbietern wie Tarifcheck.de und CHECK24 stehen Ihnen zur Verfügung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Achten Sie auf Bewertungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Unsere Anbieter wie Credimaxx und auxmoney haben Top-Bewertungen (z. B. eKomi 4,9/5). Vertrauen Sie auf verifizierte Kundenmeinungen für Ihre Entscheidung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Prüfen Sie Konditionen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf kostenlose Girokonten, Schufa-neutrale Kreditanfragen und flexible Rückzahlungsoptionen, wie sie z. B. von auxmoney und CHECK24 angeboten werden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Testsieger Girokonto-Vergleich 2025</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(provider.name === "Tarifcheck.de" || provider.name === "CHECK24" || provider.name === "DKB") && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    Top Empfehlung
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
                  <a 
                    href={provider.url} 
                    target={provider.url.startsWith('http') ? '_blank' : '_self'}
                    rel={provider.url.startsWith('http') ? 'sponsored' : undefined}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto">
                      Zum Anbieter*
                    </Button>
                  </a>
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

      {/* Detaillierter Banking-Vergleich */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Banking Vergleich 2025: Die besten Girokonten und Kredite im Test</h2>
          
          {/* Girokonto kostenlos */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Girokonto kostenlos - Die besten Anbieter 2025</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Was kostet ein kostenloses Girokonto wirklich?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Ein wirklich kostenloses Girokonto verzichtet auf Kontoführungsgebühren, Gebühren für die EC-Karte und bietet kostenlose Überweisungen. Achten Sie auf versteckte Kosten bei Bargeldabhebungen oder Auslandsüberweisungen.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💡 Spartipp:</h4>
                    <p className="text-sm text-green-700">
                      Die besten kostenlosen Girokonten sparen Ihnen bis zu 200€ jährlich im Vergleich zu Filialbanken. Zusätzlich locken viele Anbieter mit Neukunden-Boni von bis zu 120€.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Girokonto Vergleich - Testsieger Eigenschaften</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Bedingungslos kostenlose Kontoführung
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Kostenlose EC- und Kreditkarte
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Kostenloses Bargeldabheben deutschlandweit
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Mobile Banking App mit allen Funktionen
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                      Dispozinsen unter 7% p.a.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Kredit online beantragen */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Kredit online beantragen - Schnell & günstig finanzieren</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-4">Kredit Vergleich 2025: Die besten Konditionen</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Ratenkredit</h5>
                  <p className="text-sm text-gray-600">
                    Für Anschaffungen von 1.000€ bis 120.000€. Zinsen ab 0,68% p.a. bei bester Bonität.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Sofortkredit</h5>
                  <p className="text-sm text-gray-600">
                    Schnelle Auszahlung binnen 24h möglich. Digitaler Abschluss mit VideoIdent-Verfahren.
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-green-600 mb-2">Umschuldung</h5>
                  <p className="text-sm text-gray-600">
                    Bestehende Kredite zusammenfassen und bis zu 40% der Zinsen sparen.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="https://www.check24.de/kredit/" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Online Kredit berechnen lassen
                </Button>
              </a>
            </div>
          </div>

          {/* Tagesgeld Vergleich */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Tagesgeld Vergleich - Top Zinsen bis 4,00% sichern</h3>
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">📈 Aktuelle Tagesgeld Zinsen 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-700 mb-4">
                  Die besten Tagesgeldkonten bieten derzeit bis zu 4,00% Zinsen und sind mit 100% Einlagensicherung abgesichert. Täglich verfügbar, ohne Laufzeitbindung – ideal für Notreserven und kurzfristige Geldanlage.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="font-semibold mb-2">Top-Anbieter:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Bis zu 4,00% Zinsen für Neukunden</li>
                      <li>• 100.000€ Einlagensicherung pro Bank</li>
                      <li>• Täglich verfügbar, keine Kündigung nötig</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Wichtige Hinweise:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Zinsbindung oft nur 3–12 Monate</li>
                      <li>• Danach meist niedrigere Bestandskundenzinsen</li>
                      <li>• Regelmäßiger Vergleich lohnt sich</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DKB Tagesgeldkonto Button */}
          <div className="mb-12 text-center">
            <a 
              href="https://www.awin1.com/awclick.php?gid=450648&mid=11329&awinaffid=2524533&linkid=3268909&clickref=" 
              target="_blank" 
              rel="sponsored"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Jetzt kostenloses Konto eröffnen
              </Button>
            </a>
          </div>

          {/* OPTION 2 – Trading-CTA-Box */}
          <div className="mb-12 bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-green-800">Ersparnisse sinnvoll anlegen</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Notgroschen gesichert? Vergleichen Sie jetzt Broker für langfristigen Vermögensaufbau mit Aktien &amp; ETFs.
                </p>
              </div>
              <Link
                href="/trading"
                aria-label="Broker vergleichen und mit Ersparnissen Vermögen aufbauen"
                title="Broker vergleichen und mit Ersparnissen Vermögen aufbauen"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Jetzt Broker vergleichen
                </Button>
              </Link>
            </div>
          </div>

          {/* Baufinanzierung */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-green-600">Baufinanzierung Rechner - Ihren Traum vom Eigenheim verwirklichen</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Baufinanzierung: Das sollten Sie wissen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Eigenkapital:</strong> Mindestens 20% der Kaufsumme empfohlen</li>
                    <li><strong>Zinsbindung:</strong> 10–15 Jahre für Planungssicherheit</li>
                    <li><strong>Tilgung:</strong> Initial 2–4% für zügige Rückzahlung</li>
                    <li><strong>Nebenkosten:</strong> 10–15% zusätzlich zur Kaufsumme</li>
                    <li><strong>Sondertilgungen:</strong> Jährlich 5–10% kostenfrei möglich</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle>Aktuelle Bauzinsen & Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Die Zinsprognose für 2025 zeigt moderate Entwicklungen bei Bauzinsen. Nutzen Sie die aktuell noch günstigen Konditionen für Ihre Finanzierung.
                  </p>
                  <div className="bg-green-50 p-3 rounded">
                    <h5 className="font-semibold text-green-800 mb-1">💰 Spartipp:</h5>
                    <p className="text-sm text-green-700">
                      Schon 0,1% Zinsunterschied sparen bei 300.000€ über 20 Jahre etwa 4.800€! Vergleichen Sie daher unbedingt mehrere Angebote.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Online Banking Guide */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Online Banking - Sicher und einfach Bankgeschäfte erledigen</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <CardTitle className="text-lg">Konto eröffnen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Girokonto online in 5 Minuten beantragen. VideoIdent-Verfahren macht Postweg überflüssig – alles bequem von zu Hause.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle className="text-lg">App herunterladen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mobile Banking App installieren. Alle Bankgeschäfte jederzeit und überall per Smartphone erledigen.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <CardTitle className="text-lg">Sicher anmelden</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Login mit PIN oder Fingerabdruck. Alle Transaktionen durch TAN-Verfahren oder biometrische Freigabe geschützt.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <CardTitle className="text-lg">Banking nutzen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Überweisungen, Daueraufträge, Kontostände prüfen – alles 24/7 verfügbar ohne Öffnungszeiten.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-6 text-center">Häufige Fragen zum Online Banking</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Ist Online Banking sicher?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Ja, moderne Online Banking Systeme verwenden 256-Bit-SSL-Verschlüsselung und Zwei-Faktor-Authentifizierung. Banken sind durch Einlagensicherung bis 100.000€ geschützt.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Welche TAN-Verfahren gibt es?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  pushTAN per App, SMS-TAN oder chipTAN mit Lesegerät. Moderne Verfahren wie Fingerabdruck oder Face-ID ersetzen zunehmend klassische TANs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Kann ich alles online erledigen?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  95% aller Bankgeschäfte sind online möglich: Überweisungen, Daueraufträge, Kontoeröffnung, Kreditanträge. Nur wenige Services benötigen noch Filialbesuch.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Was kostet Online Banking?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Bei den meisten Direktbanken ist Online Banking komplett kostenlos. Auch viele Filialbanken bieten Online Services ohne Extragebühren an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kredit wechseln & Depot eröffnen */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Kredit wechseln & Depot eröffnen - Ihre Finanzen optimieren</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">💳 Kredit umschulden und sparen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Wann lohnt sich eine Umschuldung?</h5>
                    <p className="text-sm text-gray-600">
                      Bei Zinsdifferenz von über 1% oder mehreren laufenden Krediten. Besonders alte Kredite mit hohen Zinsen sollten abgelöst werden.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Mögliche Ersparnis:</h5>
                    <p className="text-sm text-gray-600">
                      <strong className="text-green-600">Bis zu 40% der Zinskosten</strong> bei geschickter Umschuldung. Bei 20.000€ Kredit können das über 2.000€ sein.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-green-700">
                      <strong>Tipp:</strong> Schufa-neutrale Anfrage ermöglicht Vergleich ohne Bonitäts-Verschlechterung!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">📈 Depot eröffnen für Geldanlage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Warum ein Depot?</h5>
                    <p className="text-sm text-gray-600">
                      Aktien und ETFs bieten langfristig höhere Renditen als Tagesgeld. Schon ab 25€ monatlich können Sie in ETF-Sparpläne investieren.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Kostenlose Depots:</h5>
                    <p className="text-sm text-gray-600">
                      Viele Online-Broker bieten <strong className="text-green-600">kostenlose Depotführung</strong> und günstige ETF-Sparpläne ab 0€ Ordergebühr.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-green-700">
                      <strong>Wichtig:</strong> Nur investieren, was Sie langfristig entbehren können. Risiko streuen!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkliste – grün & inkl. Versicherungs-Link */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="text-lg font-bold mb-4 text-green-800">✅ Checkliste für optimale Finanzplanung</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h5 className="font-semibold mb-2">Grundausstattung:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Kostenloses Girokonto für Alltag</li>
                  <li>• Tagesgeldkonto für Notreserve (3–6 Monatsgehälter)</li>
                  <li>• Kreditkarte ohne Jahresgebühr für Reisen</li>
                  <li>• Dispozinsen unter 7% vereinbaren</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Vermögensaufbau & Absicherung:</h5>
                <ul className="text-sm space-y-1">
                  <li>• ETF-Sparplan für langfristigen Vermögensaufbau</li>
                  <li>• Depot mit kostenlosen ETF-Sparplänen</li>
                  <li>• Alte Kredite auf bessere Konditionen prüfen</li>
                  <li>• Regelmäßig Konditionen vergleichen</li>
                  <li>
                    • Eigenheim absichern: Wohngebäude-, Hausrat- &amp; Haftpflicht sinnvoll kombinieren –{" "}
                    <Link href="/versicherungen" className="text-green-700 underline hover:text-green-800 font-medium">
                      Versicherungen vergleichen
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kreditkarte ohne Jahresgebühr Sektion */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Kreditkarte ohne Jahresgebühr - Die besten kostenlosen Karten</h2>
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Eine gute Kreditkarte sollte keine Jahresgebühr kosten und trotzdem alle wichtigen Features bieten. Hier finden Sie die besten kostenlosen Kreditkarten mit attraktiven Zusatzleistungen.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">💳 Visa/Mastercard klassisch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-1">Leistungen:</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Weltweit akzeptiert</li>
                      <li>• Kostenlose Bargeldabhebung im Ausland</li>
                      <li>• Online-Shopping ohne Extragebühren</li>
                      <li>• Reiseversicherungen inklusive</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-sm">
                    <strong className="text-green-600">0€ Jahresgebühr</strong> dauerhaft
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">📱 Modern Digital Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-1">Features:</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Apple Pay / Google Pay ready</li>
                      <li>• Echtzeit-Benachrichtigungen</li>
                      <li>• Ausgabenkontrolle per App</li>
                      <li>• Virtuelle Kartennummern</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-sm">
                    <strong className="text-green-600">Kostenlos</strong> + Cashback möglich
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-green-600">✈️ Travel & Bonus Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold mb-1">Extras:</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Meilen oder Punkte sammeln</li>
                      <li>• Lounge-Zugang an Flughäfen</li>
                      <li>• Umfassende Reiseversicherung</li>
                      <li>• Priority Pass inklusive</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-2 rounded text-sm">
                    <strong className="text-green-600">Viele Premium-Features</strong> ohne Zusatzkosten
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dieser Kasten bleibt bewusst gelb/orange */}
          <div className="mt-8 bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <h3 className="text-lg font-bold mb-4 text-orange-800">⚠️ Kreditkarten-Fallen vermeiden</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h5 className="font-semibold mb-2">Versteckte Kosten beachten:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Fremdwährungsgebühren (oft 1–2%)</li>
                  <li>• Bargeldgebühren auch im Inland</li>
                  <li>• Jahresgebühr ab dem 2. Jahr</li>
                  <li>• Hohe Sollzinsen bei Teilzahlung</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Smarte Nutzung:</h5>
                <ul className="text-sm space-y-1">
                  <li>• Immer per Lastschrift vollständig begleichen</li>
                  <li>• Kreditrahmen nicht als Kredit nutzen</li>
                  <li>• Bei Auslandsreisen Geld sparen</li>
                  <li>• Bonusprogramme gezielt nutzen</li>
                </ul>
              </div>
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
              <p className="text-sm text-gray-400 leading-relaxed">
                Ihr unabhängiger Partner für Finanzvergleiche. Kostenlos, transparent und immer aktuell.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Vergleiche</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/versicherungen" className="hover:text-white transition-colors">
                    Versicherungen
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
