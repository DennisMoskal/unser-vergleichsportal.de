"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, EyeOff } from "lucide-react"
import Link from "next/link" // Expliziter Import für Footer-Links

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700">Kontakt</Button>
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">Datenschutz</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Bei SmartFinanz nehmen wir den Schutz Ihrer persönlichen Daten ernst. Hier erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">1. Datenschutz auf einen Blick</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir, die SmartFinanz GmbH, sind verantwortlich für die Verarbeitung Ihrer Daten und setzen alles daran, Ihre Privatsphäre zu wahren. Diese Datenschutzerklärung informiert Sie über die Erhebung, Verwendung und Speicherung Ihrer personenbezogenen Daten.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verantwortlicher: SmartFinanz GmbH, Musterstraße 1, 10115 Berlin</li>
                <li>Kontakt Datenschutzbeauftragter: datenschutz@smartfinanz.de</li>
                <li>Rechtsgrundlage: DSGVO und nationale Datenschutzgesetze</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">2. Erhebung und Verwendung von Daten</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir erheben personenbezogene Daten nur, wenn Sie diese freiwillig angeben, z. B. bei der Nutzung unseres Vergleichs-Tools oder bei der Kontaktaufnahme.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Erfasste Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, finanzielle Daten (bei Anfragen)</li>
                <li><strong>Zweck:</strong> Bereitstellung unserer Dienstleistungen, Kundensupport, Marketing (mit Einwilligung)</li>
                <li><strong>Speicherdauer:</strong> Daten werden nur so lange gespeichert, wie es für den Zweck notwendig ist oder gesetzlich vorgeschrieben.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">3. Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Sie haben folgende Rechte bezüglich Ihrer Daten:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
                <li>Recht auf Berichtigung oder Löschung Ihrer Daten</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen</li>
              </ul>
              <p>
                Kontaktieren Sie uns unter <a href="mailto:datenschutz@smartfinanz.de" className="text-green-600 hover:underline">datenschutz@smartfinanz.de</a>, um Ihre Rechte auszuüben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">4. Cookies und Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir verwenden Cookies, um unsere Website zu verbessern und die Nutzererfahrung zu optimieren. Sie können die Verwendung von Cookies in Ihren Browsereinstellungen deaktivieren.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Typen von Cookies:</strong> Essentielle Cookies, Analytische Cookies (z. B. Google Analytics)</li>
                <li><strong>Einwilligung:</strong> Sie können der Nutzung zustimmen oder ablehnen (Cookie-Banner).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">5. Datensicherheit</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir sichern Ihre Daten durch moderne Verschlüsselungstechnologien (z. B. SSL/TLS) und regelmäßige Sicherheitsüberprüfungen.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Lock className="h-6 w-6 text-green-600" />
                <EyeOff className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Haben Sie Fragen zum Datenschutz?</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Kontaktieren Sie unseren Datenschutzbeauftragten für weitere Informationen oder Unterstützung.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Kontakt aufnehmen
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <Shield className="h-5 w-5 sm:h-6 w-6 text-green-500" />
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
                <li><Link href="/krypto" className="hover:text-white transition-colors">Krypto Trading</Link></li>
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
