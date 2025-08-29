import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Shield, Heart, PiggyBank } from "lucide-react"
import Link from "next/link"

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700">Kontakt</Button>
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Über uns bei SmartFinanz</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Bei SmartFinanz sind wir leidenschaftlich darin, Ihnen die besten Finanzlösungen zu bieten. Unser Team von Experten vergleicht über 500 Finanzprodukte – von Versicherungen und Banking bis hin zu Tierversicherungen und Krypto-Trading – damit Sie die perfekte Wahl für Ihre Bedürfnisse treffen können.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Unsere Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600">
              <p className="mb-4">
                Unsere Mission ist es, Transparenz und Vertrauen in die Finanzwelt zu bringen. Mit unabhängiger Beratung und modernster Technologie unterstützen wir Sie dabei, fundierte Entscheidungen zu treffen. Ob Sie nach einem günstigen Versicherungsvergleich, einem zinsgünstigen Kredit oder einer sicheren Trading-Plattform suchen – bei uns finden Sie die beste Lösung.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Über 100.000 zufriedene Kunden weltweit</li>
                <li>Mehr als €2.5 Millionen gespart</li>
                <li>4.8★ durchschnittliche Kundenbewertung</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Unser Team */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Unser Expertenteam</h2>
          <p className="text-center text-gray-600 mb-8">
            Erfahren Sie mehr über die Fachleute hinter SmartFinanz, die mit über 50 Jahren kombinierten Erfahrung Ihre Finanzentscheidungen unterstützen.
          </p>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Dr. Anna Müller</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Versicherungsexpertin mit 12 Jahren Erfahrung bei Allianz, spezialisiert auf Haftpflicht- und Kfz-Versicherungen.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <PiggyBank className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Markus Schneider</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Banking-Spezialist mit 15 Jahren bei der Deutschen Bank, Experte für digitale Finanzprodukte und Kredite.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Lisa Weber</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Tierversicherungs-Expertin mit 8 Jahren bei einer Tierklinik, leidenschaftliche Befürworterin von Haustierschutz.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Thomas Becker</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Trading-Experte mit 10 Jahren Erfahrung bei einem Finanzdienstleister, spezialisiert auf Krypto- und Aktienmärkte.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Werden Sie Teil unserer Finanzrevolution</h2>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Kontaktieren Sie uns oder erkunden Sie unsere Partnerprogramme, um mit SmartFinanz zusammenzuarbeiten.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/kontakt">Kontakt</Link>
            </Button>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/partnerprogramme">Partnerprogramme</Link>
            </Button>
          </div>
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

      {/* SEO Meta Tags und Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SmartFinanz",
            "url": "https://smartfinanz.de/ueber-uns",
            "logo": "https://smartfinanz.de/logo.png",
            "description": "Erfahren Sie mehr über SmartFinanz, Ihr führendes Vergleichsportal für Versicherungen, Banking, Tierversicherungen und Trading in Deutschland.",
            "foundingDate": "2015",
            "founder": "Max Mustermann",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE",
              "addressRegion": "Bayern",
              "postalCode": "80331",
              "addressLocality": "München"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+49-89-123456",
              "contactType": "Kundenservice",
              "availableLanguage": "Deutsch"
            },
            "sameAs": [
              "https://www.facebook.com/smartfinanz",
              "https://www.twitter.com/smartfinanz"
            ],
            "employee": [
              {
                "@type": "Person",
                "name": "Dr. Anna Müller",
                "jobTitle": "Versicherungsexpertin",
                "worksFor": { "@type": "Organization", "name": "SmartFinanz" }
              },
              {
                "@type": "Person",
                "name": "Markus Schneider",
                "jobTitle": "Banking-Spezialist",
                "worksFor": { "@type": "Organization", "name": "SmartFinanz" }
              },
              {
                "@type": "Person",
                "name": "Lisa Weber",
                "jobTitle": "Tierversicherungs-Expertin",
                "worksFor": { "@type": "Organization", "name": "SmartFinanz" }
              },
              {
                "@type": "Person",
                "name": "Thomas Becker",
                "jobTitle": "Trading-Experte",
                "worksFor": { "@type": "Organization", "name": "SmartFinanz" }
              }
            ]
          })
        }}
      />
    </div>
  )
}
