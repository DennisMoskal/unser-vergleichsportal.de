"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Scale } from "lucide-react"
import Link from "next/link"

export default function AgbPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-green-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Allgemeine Geschäftsbedingungen (AGB)</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Hier finden Sie unsere Allgemeinen Geschäftsbedingungen, die für die Nutzung unserer Dienstleistungen gelten. Bitte lesen Sie diese sorgfältig durch, um Ihre Rechte und Pflichten zu verstehen.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">1. Allgemeines</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Dienstleistungen der Smart-Finanz, vertreten durch Dennis Moskal, Westpreußenstraße 26, 53119 Bonn, Deutschland (nachfolgend „Anbieter“ genannt), durch den Nutzer (nachfolgend „Kunde“ genannt). Der Anbieter bietet einen Online-Vergleichsdienst für Finanzprodukte wie Versicherungen, Banking, Tierversicherungen und Krypto-Trading an. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt diesen ausdrücklich zu.
              </p>
              <p>
                Kontakt: Telefon: 01722058855, E-Mail: dennismoskal@yahoo.com. Änderungen dieser AGB werden den Kunden rechtzeitig mitgeteilt.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">2. Leistungsbeschreibung</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Anbieter stellt eine Plattform zur Verfügung, auf der Kunden Finanzprodukte vergleichen können. Die genauen Leistungen umfassen die Bereitstellung von Informationen, Vergleichsrechnern und Links zu Partnerangeboten. Der Anbieter haftet nicht für die Verfügbarkeit oder Genauigkeit der von Partnern angebotenen Produkte.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">3. Nutzungsrechte und -pflichten</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Kunde darf die Plattform ausschließlich zu privaten oder geschäftlichen Zwecken nutzen, die im Rahmen der vorgesehenen Dienstleistungen liegen. Eine kommerzielle Weiterverwendung der bereitgestellten Daten ist ohne ausdrückliche schriftliche Genehmigung des Anbieters verboten. Der Kunde verpflichtet sich, keine unzulässigen Inhalte hochzuladen oder die Plattform zu missbrauchen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">4. Haftung</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Anbieter haftet nur für Vorsatz und grobe Fahrlässigkeit. Für Schäden, die durch die Nutzung der Plattform oder durch Informationen Dritter entstehen, wird keine Haftung übernommen, sofern nicht zwingende gesetzliche Vorschriften entgegenstehen. Der Anbieter ist nicht verantwortlich für technische Ausfälle, die außerhalb seines Einflussbereichs liegen.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">5. Datenschutz</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, die auf der Website einsehbar ist. Der Kunde stimmt der Verarbeitung seiner Daten im Rahmen der Nutzung der Dienstleistungen zu, soweit dies für die Vertragsdurchführung erforderlich ist.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">6. Schlussbestimmungen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt. Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Bonn, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist. Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ihre Rechte und Pflichten</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Informieren Sie sich regelmäßig über unsere AGB und andere rechtliche Hinweise auf unserer Website, um stets auf dem neuesten Stand zu sein.
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
                <FileText className="h-5 w-5 sm:h-6 w-6 text-green-500" />
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
