"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Scale } from "lucide-react"
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

export default function AgbPage() {
  return (
   <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
            <span className="text-sm text-gray-600 mt-1">Unser-Vergleichsportal.de</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/kontakt">
              <Button className="bg-green-600 hover:bg-green-700">Kontakt</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">Allgemeine Geschäftsbedingungen (AGB)</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Nachfolgend finden Sie die Allgemeinen Geschäftsbedingungen der SmartFinanz GmbH, die für die Nutzung unserer Vergleichsdienste gelten. Bitte lesen Sie diese sorgfältig durch.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">1. Geltungsbereich und Begriffsbestimmungen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen der SmartFinanz GmbH, Westpreußenstraße 26, 53119 Bonn, Deutschland (nachfolgend „Anbieter“), vertreten durch den Geschäftsführer Dennis Moskal. Der Anbieter betreibt eine Online-Plattform für den Vergleich von Finanzprodukten wie Versicherungen, Girokonten, Kredite, Tierversicherungen und Krypto-Trading (nachfolgend „Plattform“). Kunde ist jede natürliche oder juristische Person, die die Plattform nutzt (nachfolgend „Kunde“). Abweichende oder ergänzende Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt diesen ausdrücklich schriftlich zu.
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
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">2. Vertragsabschluss</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Nutzung der Plattform stellt kein verbindliches Angebot zum Abschluss eines Vertrages dar. Durch die Eingabe von Daten in die Vergleichsrechner oder die Anfrage über die Plattform gibt der Kunde ein Angebot zum Abschluss eines Nutzungsvertrages ab. Der Anbieter behält sich vor, dieses Angebot anzunehmen oder abzulehnen. Ein Vertrag kommt erst zustande, wenn der Anbieter die Anfrage bestätigt oder die Dienstleistung erbringt. Verträge über Finanzprodukte werden ausschließlich zwischen dem Kunden und dem jeweiligen Anbieter des Finanzproduktes (Partner) geschlossen. Der Anbieter tritt hierbei lediglich als Vermittler auf.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">3. Leistungsbeschreibung</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Anbieter stellt eine Plattform zur Verfügung, die es Kunden ermöglicht, Finanzprodukte von Drittanbietern zu vergleichen. Die Leistungen umfassen die Bereitstellung von Vergleichsrechnern, Informationen zu Finanzprodukten und Links zu Partnerangeboten. Der Anbieter übernimmt keine Garantie für die Verfügbarkeit, Richtigkeit oder Vollständigkeit der angezeigten Informationen, da diese von Partnern bereitgestellt werden. Der Anbieter ist nicht Partei der zwischen Kunden und Partnern geschlossenen Verträge und haftet nicht für deren Inhalt oder Erfüllung.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">4. Pflichten des Kunden</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Kunde verpflichtet sich, die Plattform nur für die vorgesehenen Zwecke zu nutzen, nämlich den Vergleich von Finanzprodukten für private oder geschäftliche Zwecke. Eine missbräuchliche Nutzung, wie das Hochladen unzulässiger Inhalte, die Manipulation der Plattform oder die kommerzielle Weiterverwendung von Daten ohne schriftliche Genehmigung des Anbieters, ist untersagt. Der Kunde ist verpflichtet, wahrheitsgemäße und vollständige Angaben bei der Nutzung der Plattform zu machen, insbesondere bei der Eingabe von Daten in Vergleichsrechnern.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">5. Entgelt</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Nutzung der Plattform ist für den Kunden kostenfrei. Der Anbieter erhält Vergütungen von Partnern, wenn Kunden über die Plattform Verträge mit diesen abschließen. Diese Vergütungen haben keinen Einfluss auf die Darstellung der Vergleichsergebnisse. Sofern durch die Nutzung von Partnerangeboten Kosten für den Kunden entstehen, werden diese vom jeweiligen Partner angegeben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">6. Haftung</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Anbieter haftet nur für Vorsatz und grobe Fahrlässigkeit sowie für die Verletzung wesentlicher Vertragspflichten. Die Haftung für einfache Fahrlässigkeit ist ausgeschlossen, sofern keine zwingenden gesetzlichen Vorschriften entgegenstehen. Der Anbieter übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der von Partnern bereitgestellten Informationen oder für Schäden, die durch die Nutzung dieser Informationen entstehen. Technische Ausfälle oder Unterbrechungen der Plattform, die außerhalb des Einflussbereichs des Anbieters liegen, begründen keinen Haftungsanspruch.
              </p>
              <p>
                Der Anbieter haftet nicht für Verträge, die zwischen Kunden und Partnern geschlossen werden, einschließlich deren Erfüllung oder etwaiger Mängel. Für Inhalte externer Links übernimmt der Anbieter keine Haftung; hierfür sind ausschließlich die Betreiber der verlinkten Seiten verantwortlich.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">7. Datenschutz</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung, die unter <Link href="/datenschutz" className="text-green-600 hover:underline">Datenschutz</Link> auf der Plattform einsehbar ist. Der Kunde stimmt der Verarbeitung seiner Daten im Rahmen der Vertragsdurchführung zu, soweit dies für die Erbringung der Dienstleistungen erforderlich ist.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">8. Kündigung</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Nutzungsvertrag kann vom Kunden jederzeit durch Einstellung der Nutzung der Plattform beendet werden. Der Anbieter behält sich das Recht vor, den Zugang zur Plattform bei Verstoß gegen diese AGB oder aus sonstigen wichtigen Gründen mit angemessener Frist zu kündigen oder zu sperren. Eine Kündigung hat keinen Einfluss auf bestehende Verträge zwischen Kunden und Partnern.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">9. Streitbeilegung</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://ec.europa.eu/consumers/odr</a> erreichbar ist. Der Anbieter ist nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <p>
                Für Beschwerden oder Anliegen wenden Sie sich bitte an: SmartFinanz GmbH, Westpreußenstraße 26, 53119 Bonn, E-Mail: <a href="mailto:dennismoskal@yahoo.com" className="text-green-600 hover:underline">dennismoskal@yahoo.com</a>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">10. Schlussbestimmungen</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist Bonn, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist. Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung wird durch eine Regelung ersetzt, die dem wirtschaftlichen Zweck der ursprünglichen Bestimmung möglichst nahekommt. Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform; dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.
              </p>
              <p>
                Stand der AGB: August 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Fragen zu unseren AGB?</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Kontaktieren Sie uns für weitere Informationen oder Unterstützung zu unseren Allgemeinen Geschäftsbedingungen.
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
              <div className="flex items-center mb-4">
                <SmartFinanzLogo className="text-xl" />
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
