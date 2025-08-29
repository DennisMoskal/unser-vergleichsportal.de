"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function UeberUnsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.title = "Über uns | SmartFinanz - Experten für Finanzvergleiche in Deutschland"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Erfahren Sie mehr über SmartFinanz, Ihr führendes Vergleichsportal für unabhängige Finanzlösungen in Versicherungen, Banking und mehr. Vertrauen Sie unserer Expertise seit 2015."
      )
    }
  }, [])

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
            Über uns: Ihr Partner für sichere Finanzentscheidungen
          </h2>
          <p className="text-sm sm:text-base text-green-100 mb-6 max-w-2xl mx-auto">
            Seit 2015 unterstützt SmartFinanz Millionen Kunden mit unabhängigen Vergleichen in Versicherungen, Banking und mehr. Entdecken Sie unser Engagement!
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
            Jetzt vergleichen
          </Button>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Finanzkompetenz seit über einem Jahrzehnt</h2>
          <p className="text-gray-600 mb-8">
            Bei SmartFinanz sparen Sie Zeit, Geld und Stress durch unsere unabhängigen Finanzvergleiche. Mit über 500 geprüften Anbietern und einem Fokus auf Transparenz helfen wir Ihnen, die besten Lösungen für Versicherungen, Banking, Tierversicherungen und Trading zu finden. Unser Ziel: Ihr finanzielles Wohlbefinden mit maßgeschneiderten Empfehlungen.
          </p>
          <p className="text-gray-600 mb-8">
            Unsere Expertise reicht zurück bis 2015, als wir begannen, den Markt zu revolutionieren. Heute profitieren über 100.000 Kunden jährlich von unseren Dienstleistungen, mit einem durchschnittlichen Sparpotenzial von bis zu 1.000 € pro Jahr. Überzeugen Sie sich selbst von unserer Qualität!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white border text-green-600">
              TÜV Zertifiziert
            </Badge>
            <Badge variant="secondary" className="bg-white border text-green-600">
              Testsieger 2025
            </Badge>
            <Badge variant="secondary" className="bg-white border text-green-600">
              4.8/5 Sterne
            </Badge>
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
            Sparpotenzial prüfen
          </Button>
        </div>
      </section>

      {/* Unser Team */}
      <section className="py-12 sm:py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Unser Expertenteam</h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Hinter SmartFinanz steht ein engagiertes Team mit über 40 Jahren Erfahrung, das Ihnen mit Kompetenz und Empathie zur Seite steht. Lernen Sie die Gesichter kennen, die Ihre Finanzen optimieren.
          </p>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-green-700 border-0 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Anna Schmidt</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-2">Mit 12 Jahren Erfahrung im Versicherungsbereich bietet sie verlässliche Lösungen, die Ihnen Sicherheit und Ruhe geben.</p>
              </CardContent>
            </Card>
            <Card className="bg-green-700 border-0 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Michael Bauer</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-2">Sein 15-jähriges Wissen im Bankingbereich hilft Ihnen, Ihre Finanzen effizient und zukunftssicher zu planen.</p>
              </CardContent>
            </Card>
            <Card className="bg-green-700 border-0 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Laura Fischer</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-2">Mit 8 Jahren Erfahrung im Tierschutzsektor schafft sie maßgeschneiderte Versicherungen für Ihre Haustiere.</p>
              </CardContent>
            </Card>
            <Card className="bg-green-700 border-0 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Paul Hoffmann</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-2">Seine 10-jährige Expertise im Tradingbereich unterstützt Sie bei erfolgreichen Anlagestrategien.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Wie wir arbeiten */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">So funktioniert unser Vergleich</h2>
          <p className="text-gray-600 mb-8">
            Mit nur wenigen Klicks finden Sie die besten Angebote – kostenlos und unverbindlich. Unser Prozess ist einfach, sicher und auf Ihre Bedürfnisse zugeschnitten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">1. Auswahl & Eingabe</h3>
              <p className="text-gray-600">Wählen Sie Ihr Produkt und geben Sie Ihre Wünsche ein – in Minuten erhalten Sie maßgeschneiderte Angebote.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">2. Vergleich & Entscheidung</h3>
              <p className="text-gray-600">Vergleichen Sie Angebote nach Preis und Konditionen – ohne versteckte Kosten oder Verpflichtungen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">3. Abschluss</h3>
              <p className="text-gray-600">Schließen Sie den Vertrag direkt ab und profitieren Sie von Ihrem Sparpotenzial – wir unterstützen Sie dabei.</p>
            </div>
          </div>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 mt-6" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
            Jetzt starten
          </Button>
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
            "description": "Erfahren Sie mehr über SmartFinanz, Ihr führendes Vergleichsportal für unabhängige Finanzlösungen in Deutschland seit 2015.",
            "foundingDate": "2015",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE",
              "addressRegion": "Bayern",
              "addressLocality": "München"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-89-123456",
              "contactType": "Kundenservice",
              "availableLanguage": "Deutsch"
            },
            "employee": [
              { "@type": "Person", "name": "Anna Schmidt", "jobTitle": "Versicherungsexpertin" },
              { "@type": "Person", "name": "Michael Bauer", "jobTitle": "Finanzberater" },
              { "@type": "Person", "name": "Laura Fischer", "jobTitle": "Tierversicherungsberaterin" },
              { "@type": "Person", "name": "Paul Hoffmann", "jobTitle": "Tradingexperte" }
            ],
            "sameAs": ["https://www.facebook.com/smartfinanz", "https://www.twitter.com/smartfinanz"]
          })
        }}
      />
    </div>
  )
}
