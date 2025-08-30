"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cookie, Shield, Info, TrendingUp, Menu, X } from "lucide-react"
import { useState } from "react"
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

export default function CookieRichtliniePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">Cookie-Richtlinie</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Diese Cookie-Richtlinie erläutert, wie die SmartFinanz GmbH Cookies und ähnliche Technologien auf unserer Website verwendet, um Ihnen ein optimales Nutzererlebnis zu bieten und unsere Dienste zu verbessern.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">1. Einführung und Begriffsbestimmungen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Smartphone, Tablet) gespeichert werden, wenn Sie unsere Website besuchen. Sie dienen dazu, Ihre Präferenzen zu speichern, die Funktionalität der Website zu verbessern und Analysen durchzuführen. Ähnliche Technologien wie Pixel-Tags oder Local Storage können ebenfalls verwendet werden. Diese Cookie-Richtlinie gilt für die Website der SmartFinanz GmbH, Westpreußenstraße 26, 53119 Bonn, Deutschland, vertreten durch den Geschäftsführer Dennis Moskal.
              </p>
              <p>
                <strong>Kontakt:</strong><br />
                Telefon: <a href="tel:01722058855" className="text-green-600 hover:underline">0172 2058855</a><br />
                E-Mail: <a href="mailto:dennismoskal@yahoo.com" className="text-green-600 hover:underline">dennismoskal@yahoo.com</a>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">2. Arten und Zwecke von Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Wir verwenden verschiedene Arten von Cookies, um unterschiedliche Funktionen zu erfüllen:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Essentielle Cookies:</strong> Diese Cookies sind notwendig, um die grundlegenden Funktionen der Website bereitzustellen, z. B. Navigation, Zugang zu geschützten Bereichen und Speicherung Ihrer Sitzung. Ohne diese Cookies funktioniert die Website nicht ordnungsgemäß.
                </li>
                <li>
                  <strong>Funktionale Cookies:</strong> Diese Cookies verbessern die Benutzerfreundlichkeit, indem sie Ihre Präferenzen (z. B. Spracheinstellungen oder Formulareingaben) speichern.
                </li>
                <li>
                  <strong>Analytische Cookies:</strong> Diese Cookies sammeln anonymisierte Daten über das Nutzerverhalten, um die Leistung und Benutzerfreundlichkeit der Website zu analysieren und zu optimieren (z. B. durch Google Analytics).
                </li>
                <li>
                  <strong>Marketing-Cookies:</strong> Diese Cookies werden verwendet, um personalisierte Werbung anzuzeigen und die Wirksamkeit von Werbekampagnen zu messen. Sie werden nur mit Ihrer ausdrücklichen Zustimmung gesetzt.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">3. Drittanbieter-Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Wir arbeiten mit Drittanbietern zusammen, die Cookies auf unserer Website setzen, um bestimmte Funktionen zu ermöglichen. Zu den gängigen Drittanbietern gehören:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Wird verwendet, um Nutzungsstatistiken zu erstellen und die Website-Leistung zu analysieren. Daten werden anonymisiert verarbeitet. Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Google Datenschutzerklärung</a>.
                </li>
                <li>
                  <strong>Partnerprogramme:</strong> Einige unserer Partner setzen Cookies, um den Erfolg von Vermittlungen zu verfolgen (z. B. Affiliate-Cookies), wenn Sie über unsere Plattform Verträge abschließen.
                </li>
              </ul>
              <p>
                Diese Drittanbieter unterliegen ihren eigenen Datenschutzrichtlinien. Wir empfehlen, diese zu lesen, um mehr über deren Datenverarbeitung zu erfahren.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">4. Einwilligung und Verwaltung von Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Beim ersten Besuch unserer Website zeigen wir Ihnen einen Cookie-Banner, der Sie über die Verwendung von Cookies informiert und Ihre Einwilligung einholt. Sie können Ihre Zustimmung zu nicht-essentiellen Cookies (analytische und Marketing-Cookies) verweigern oder jederzeit widerrufen, indem Sie die Cookie-Einstellungen auf unserer Website oder in Ihrem Browser anpassen. Essentielle Cookies werden immer gesetzt, da sie für die Funktionalität der Website erforderlich sind.
              </p>
              <p>
                Sie können Cookies auch über Ihre Browsereinstellungen verwalten:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Chrome: Einstellungen &gt; Datenschutz und Sicherheit &gt; Cookies und andere Websitedaten</li>
                <li>Mozilla Firefox: Einstellungen &gt; Datenschutz &amp; Sicherheit &gt; Cookies und Website-Daten</li>
                <li>Safari: Einstellungen &gt; Datenschutz &gt; Alle Cookies blockieren</li>
                <li>Microsoft Edge: Einstellungen &gt; Datenschutz, Suche und Dienste &gt; Cookies verwalten</li>
              </ul>
              <p>
                Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität unserer Website beeinträchtigen kann.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">5. Speicherdauer von Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Speicherdauer von Cookies variiert je nach Typ:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Sitzungs-Cookies:</strong> Werden gelöscht, sobald Sie Ihren Browser schließen.</li>
                <li><strong>Permanente Cookies:</strong> Bleiben auf Ihrem Gerät gespeichert, bis sie ablaufen (z. B. nach 1 Jahr) oder Sie sie manuell löschen.</li>
              </ul>
              <p>
                Die genaue Speicherdauer einzelner Cookies wird im Cookie-Banner angezeigt, wenn Sie Ihre Einstellungen vornehmen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">6. Datenschutz und Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Verarbeitung von Daten durch Cookies erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO) und dem Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG). Sie haben folgende Rechte bezüglich Ihrer Daten:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recht auf Auskunft über gespeicherte Daten</li>
                <li>Recht auf Berichtigung oder Löschung Ihrer Daten</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen</li>
              </ul>
              <p>
                Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="text-green-600 hover:underline">Datenschutzerklärung</Link>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">7. Kontakt und Rückfragen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Bei Fragen zur Cookie-Richtlinie oder zur Verarbeitung Ihrer Daten wenden Sie sich bitte an:<br />
                SmartFinanz GmbH<br />
                Westpreußenstraße 26<br />
                53119 Bonn<br />
                Deutschland<br />
                Telefon: <a href="tel:01722058855" className="text-green-600 hover:underline">0172 2058855</a><br />
                E-Mail: <a href="mailto:dennismoskal@yahoo.com" className="text-green-600 hover:underline">dennismoskal@yahoo.com</a>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">8. Änderungen dieser Cookie-Richtlinie</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Wir behalten uns vor, diese Cookie-Richtlinie bei Bedarf anzupassen, z. B. bei Änderungen der gesetzlichen Vorgaben oder der Funktionalität unserer Website. Änderungen werden auf dieser Seite veröffentlicht, und wir informieren Sie über wesentliche Änderungen im Cookie-Banner.
              </p>
              <p>
                Stand der Cookie-Richtlinie: August 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ihre Privatsphäre schützen</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Informieren Sie sich regelmäßig über unsere Cookie-Richtlinie und passen Sie Ihre Einstellungen an, um Ihre Privatsphäre zu wahren.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Kontakt aufnehmen
            </Button>
          </Link>
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
    </div>
  )
}
