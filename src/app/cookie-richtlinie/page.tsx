"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Shield, Info } from "lucide-react"
import Link from "next/link"

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cookie className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Button entfernt */}
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Cookie-Richtlinie</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Hier finden Sie Informationen darüber, wie wir Cookies und ähnliche Technologien auf unserer Website verwenden. Bitte lesen Sie diese Richtlinie sorgfältig durch, um zu verstehen, wie Ihre Daten verarbeitet werden.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">1. Was sind Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen. Sie ermöglichen es uns, die Funktionalität der Website zu verbessern, Nutzerpräferenzen zu speichern und Analysen durchzuführen. Unsere Website, betrieben von Smart-Finanz, Dennis Moskal, Westpreußenstraße 26, 53119 Bonn, Deutschland, verwendet Cookies, um Ihnen ein optimales Nutzererlebnis zu bieten.
              </p>
              <p>
                Kontakt: Telefon: 01722058855, E-Mail: dennismoskal@yahoo.com. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">2. Arten von Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Wir verwenden verschiedene Arten von Cookies:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Essentielle Cookies:</strong> Notwendig für die grundlegende Funktionalität der Website, z. B. zum Speichern Ihrer Sitzung.</li>
                <li><strong>Analytische Cookies:</strong> Werden genutzt, um Nutzerverhalten zu analysieren (z. B. durch Tools wie Google Analytics), um unsere Dienste zu verbessern.</li>
                <li><strong>Funktionale Cookies:</strong> Erhöhen den Komfort, z. B. durch die Speicherung Ihrer Präferenzen.</li>
                <li><strong>Marketing-Cookies:</strong> Dienen der Anzeige personalisierter Werbung (nur mit Ihrer Einwilligung).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">3. Einwilligung und Verwaltung von Cookies</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Beim ersten Besuch unserer Website werden Sie über die Verwendung von Cookies informiert und zur Einwilligung aufgefordert. Sie können Ihre Zustimmung jederzeit widerrufen oder anpassen, indem Sie die Cookie-Einstellungen in Ihrem Browser ändern. Ohne Einwilligung werden nur essenzielle Cookies gesetzt.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">4. Datenschutz und DSGVO</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Verarbeitung von Daten durch Cookies erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO). Ihre Daten werden nur in dem Umfang erhoben, der für die jeweilige Funktion notwendig ist. Weitere Details zur Datenspeicherung und -verwendung finden Sie in unserer Datenschutzerklärung.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">5. Kontakt und Rückfragen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Bei Fragen zur Cookie-Richtlinie oder zur Datennutzung können Sie sich an uns wenden: Smart-Finanz, Dennis Moskal, Westpreußenstraße 26, 53119 Bonn, Deutschland, Telefon: 01722058855, E-Mail: dennismoskal@yahoo.com. Wir helfen Ihnen gerne weiter.
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
            Informieren Sie sich regelmäßig über unsere Cookie-Richtlinie und passen Sie Ihre Einstellungen an, um Ihre Privatsphäre zu wahren. Besuchen Sie auch unsere Datenschutzseite für weitere Details.
          </p>
          {/* Button entfernt */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <Cookie className="h-5 w-5 sm:h-6 w-6 text-green-500" />
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
                <li><Link href="/krypto" className="hover:text-white transition-colors">Trading</Link></li>
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
