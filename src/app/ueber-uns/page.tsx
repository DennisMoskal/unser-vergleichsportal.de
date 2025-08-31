"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

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

export default function UeberUnsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.title = "Über uns | SmartFinanz - Ihr Experte für Finanzvergleiche"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Erfahren Sie mehr über SmartFinanz, Ihr vertrauenswürdiger Partner für unabhängige Finanzvergleiche seit 2015. Sparen Sie Zeit und Geld mit unseren Expertenlösungen."
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
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
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            SmartFinanz: Finanzkompetenz seit 10 Jahren
          </h2>
          <p className="text-sm sm:text-base text-green-100 mb-6 max-w-2xl mx-auto">
            Mit uns sparen Sie Zeit, Geld und Stress. Überzeugen Sie sich selbst von unseren unabhängigen Finanzvergleichen!
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
            Jetzt vergleichen
          </Button>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ihr Weg zu besseren Finanzlösungen</h2>
          <p className="text-gray-600 mb-8">
            Ohne Versicherungen, Banking oder Trading funktioniert kein modernes Leben. Doch die Wahl der richtigen Produkte wird oft aufgeschoben – mit schlechtem Gewissen. SmartFinanz macht es Ihnen leicht und öffnet den Zugang zu komplexen Themen.
          </p>
          <p className="text-gray-600 mb-8">
            Profitieren Sie von unserer Expertise! Seit 10 Jahren führen wir Sie zielsicher und nutzerfreundlich durch den Finanzdschungel – von Versicherungen bis Trading. Mit einem Sparpotenzial von bis zu 1.000 € jährlich überlassen Sie uns die Recherchen und genießen Ihre Freizeit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white border text-green-600">
              TÜV Zertifiziert
            </Badge>
            <Badge variant="secondary" className="bg-white border text-green-600">
              4.8/5 Sterne
            </Badge>
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
            Sparpotenzial checken
          </Button>
        </div>
      </section>

      {/* Vergleichsprozess */}
      <section className="py-12 sm:py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Vergleichen und sparen – so funktioniert es</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-green-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">1. Minutenschnell vergleichen</h3>
              <p className="text-sm">Wählen Sie Ihr Produkt, geben Sie Ihre Wünsche ein und erhalten Sie kostenlose, unverbindliche Angebote – sortiert nach Preis und Bedarf.</p>
            </div>
            <div className="bg-green-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">2. Ohne Kosten abschließen</h3>
              <p className="text-sm">Finden Sie das passende Produkt, schließen Sie es kostenfrei ab und sparen Sie bis zu 1.000 € – mit höchstem Datenschutz.</p>
            </div>
          </div>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 mt-6" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
            Jetzt starten
          </Button>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Unser Expertenteam</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Unser Team in Bonn arbeitet täglich daran, Ihnen einen einfachen und erfolgreichen Vergleich zu bieten. Mit Feedback und Branchenentwicklungen optimieren wir stetig unsere Dienstleistungen.
          </p>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Sophie Müller</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2018 bei uns, unterstützt sie Sie mit 10 Jahren Erfahrung in Versicherungen und schafft klare Lösungen.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Thomas Weber</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2015 dabei, bringt er 12 Jahre Finanz-Expertise für Ihre finanziellen Pläne ein.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Julia Schmidt</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2020 im Team, kennt sie als Tierversicherungs-Expertin die Bedürfnisse Ihrer Haustiere.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">David Fischer</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2023 dabei, unterstützt er Sie mit 8 Jahren Trading-Erfahrung für erfolgreiche Anlagen.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Saskia Schmidt</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2019 im Team, bringt sie technisches Know-how für Internet- und Mobilfunktarife, angepasst an Ihre Bedürfnisse.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kundenservice */}
      <section className="py-12 sm:py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Persönlicher Kundenservice</h2>
          <p className="text-sm mb-6 max-w-2xl mx-auto">
            Keine Chat-Bots, sondern echte Experten stehen Ihnen zur Verfügung. Wir freuen uns, Sie kompetent durch unsere Vergleiche zu führen.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.location.href = "/kontakt"}>
            Kontakt aufnehmen
          </Button>
        </div>
      </section>

      {/* Wie wir Geld verdienen */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Wie wir Geld verdienen – verbraucherorientiert und unparteiisch</h2>
          <p className="text-gray-600 mb-4">
            Ihre Bedürfnisse stehen im Mittelpunkt. Die Nutzung unserer Dienste ist für Sie jederzeit kostenlos. Alle Produkte werden unparteiisch nach Ihren Wünschen gefiltert, sodass Sie nur passende Ergebnisse sehen.
          </p>
          <p className="text-gray-600 mb-4">
            Entscheiden Sie sich für ein Produkt und schließen Sie es über uns ab – das bleibt für Sie kostenfrei. Wir erhalten eine Provision vom Produktanbieter für jeden erfolgreichen Vertragsabschluss.
          </p>
          <ul className="text-gray-600 text-left max-w-xl mx-auto space-y-2 mb-6">
            <li>Für Anbieter sind unsere Vergleiche ein kostengünstiger Vertriebsweg.</li>
            <li>Für Sie bieten sie einen unparteiischen, kostenfreien Marktüberblick.</li>
            <li>Für uns ist dies die Basis für einen transparenten, kundenorientierten Service.</li>
          </ul>
          <p className="text-gray-600">
            Unsere Vision seit 10 Jahren: Sie sollen sich bei uns wohlfühlen, egal ob Sie Online-Vergleiche kennen oder nicht. Wir arbeiten mit externen Partnern für die Vermittlung; der Abschluss erfolgt nicht direkt über uns. Mehr dazu unter <Link href="/datenschutz" className="underline hover:text-green-600">Datenschutz</Link>.
          </p>
        </div>
      </section>

      {/* Nachhaltigkeit */}
      <section className="py-12 sm:py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Unsere Nachhaltigkeit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-green-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Strom- und Wasserverbrauch</h3>
              <p className="text-sm">Wir nutzen Ökostrom, LED-Lampen und energiesparende Geräte (z. B. AAA+++ Kühlschränke) in unseren gut gedämmten Büroräumen.</p>
            </div>
            <div className="bg-green-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Ökologischer Fußabdruck</h3>
              <p className="text-sm">Wir setzen auf Produkte mit EU-Umweltzeichen und inländische, schadstoffarme Möbel für einen aktiven Umweltschutz.</p>
            </div>
            <div className="bg-green-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Nachhaltige Lebensmittel</h3>
              <p className="text-sm">Unser Team genießt kostenlos Bio-Obst, Fairtrade-Kaffee und regionale Säfte in recycelbaren Flaschen.</p>
            </div>
            <div className="bg-green-700 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Müllvermeidung</h3>
              <p className="text-sm">Wir trennen Müll, nutzen Recycling-Papier und fördern wiederverwendbare Container, um Plastikmüll zu reduzieren.</p>
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

      {/* Structured Data für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SmartFinanz",
            "url": "https://smartfinanz.de/ueber-uns",
            "logo": "https://smartfinanz.de/logo.png",
            "description": "Erfahren Sie mehr über SmartFinanz, Ihr führendes Vergleichsportal für unabhängige Finanzlösungen seit 2015.",
            "foundingDate": "2015",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE",
              "addressRegion": "Nordrheinwestfahlen",
              "addressLocality": "Bonn"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Kundenservice",
              "availableLanguage": "Deutsch"
            },
            "employee": [
              { "@type": "Person", "name": "Sophie Müller", "jobTitle": "Versicherungsexpertin" },
              { "@type": "Person", "name": "Thomas Weber", "jobTitle": "Finanzberater" },
              { "@type": "Person", "name": "Julia Schmidt", "jobTitle": "Tierversicherungsberaterin" },
              { "@type": "Person", "name": "David Fischer", "jobTitle": "Tradingexperte" },
              { "@type": "Person", "name": "Saskia Schmidt", "jobTitle": "Technologieexpertin" }
            ],
            "sameAs": ["https://www.facebook.com/smartfinanz", "https://www.twitter.com/smartfinanz"]
          })
        }}
      />
    </div>
  )
}
