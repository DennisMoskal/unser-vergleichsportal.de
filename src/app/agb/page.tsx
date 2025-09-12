"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Scale, TrendingUp, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" aria-label="Zurück zur Startseite">
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
            <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
          </svg>
          <span className="font-bold">martFinanz</span>
        </div>
        <span className="text-sm mt-1">Unser-Vergleichsportal.de</span>
      </div>
    </Link>
  )
}

export default function AgbPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>AGB SmartFinanz: Allgemeine Geschäftsbedingungen Vergleichsportal 2025</title>
        <meta
          name="description"
          content="Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) von SmartFinanz für die Nutzung unseres Vergleichsportals für Finanzprodukte wie Versicherungen, Kredite und Banking."
        />
        <meta
          name="keywords"
          content="AGB Vergleichsportal, Allgemeine Geschäftsbedingungen Finanzprodukte, SmartFinanz AGB, Nutzungsbedingungen Vergleichsportal"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/agb" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AGB SmartFinanz: Allgemeine Geschäftsbedingungen Vergleichsportal 2025" />
        <meta
          property="og:description"
          content="Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) von SmartFinanz für die Nutzung unseres Vergleichsportals für Finanzprodukte wie Versicherungen, Kredite und Banking."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/agb" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AGB SmartFinanz: Allgemeine Geschäftsbedingungen Vergleichsportal 2025" />
        <meta
          name="twitter:description"
          content="Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) von SmartFinanz für die Nutzung unseres Vergleichsportals für Finanzprodukte."
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AGB SmartFinanz: Allgemeine Geschäftsbedingungen Vergleichsportal 2025",
            description:
              "Lesen Sie die Allgemeinen Geschäftsbedingungen (AGB) von SmartFinanz für die Nutzung unseres Vergleichsportals für Finanzprodukte wie Versicherungen, Kredite und Banking.",
            url: "https://unser-vergleichsportal.de/agb",
            keywords: [
              "AGB Vergleichsportal",
              "Allgemeine Geschäftsbedingungen Finanzprodukte",
              "SmartFinanz AGB",
              "Nutzungsbedingungen Vergleichsportal"
            ]
          })
        }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-start">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
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
            <Button
              className="hidden md:block bg-green-600 hover:bg-green-700"
              onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}
            >
              Vergleich starten
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen/schließen"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menü */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
              <div className="font-semibold text-2xl mb-3 text-left ml-2">Finanzprodukte</div>
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

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">
            AGB SmartFinanz: Allgemeine Geschäftsbedingungen Vergleichsportal
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Nachfolgend finden Sie die Allgemeinen Geschäftsbedingungen (AGB) von SmartFinanz für die Nutzung unseres Vergleichsportals für Finanzprodukte wie Versicherungen, Kredite und Banking.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Geltungsbereich und Begriffsbestimmungen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen der SmartFinanz, Westpreußenstraße 26, 53119 Bonn, Deutschland (nachfolgend „Anbieter“), vertreten durch den Geschäftsführer Dennis Moskal. Der Anbieter betreibt eine Online-Plattform für den Vergleich von Finanzprodukten wie Versicherungen, Girokonten, Kredite, Tierversicherungen und Krypto-Trading (nachfolgend „Plattform“). Kunde ist jede natürliche oder juristische Person, die die Plattform nutzt (nachfolgend „Kunde“). Abweichende oder ergänzende Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt diesen ausdrücklich schriftlich zu.
              </p>
              <p>
                <strong>Kontakt:</strong><br />
                Telefon: <a href="tel:01722058855" className="text-green-600 hover:underline">0172 2058855</a><br />
                E-Mail: <a href="mailto:dennismoskal@yahoo.com" className="text-green-600 hover:underline">info@unser-vergleichsportal.de</a>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Vertragsabschluss für Vergleichsdienste
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Nutzung der Plattform stellt kein verbindliches Angebot zum Abschluss eines Vertrages dar. Durch die Eingabe von Daten in die Vergleichsrechner oder die Anfrage über die Plattform gibt der Kunde ein Angebot zum Abschluss eines Nutzungsvertrages ab. Der Anbieter behält sich vor, dieses Angebot anzunehmen oder abzulehnen. Ein Vertrag kommt erst zustande, wenn der Anbieter die Anfrage bestätigt oder die Dienstleistung erbringt. Verträge über Finanzprodukte werden ausschließlich zwischen dem Kunden und dem jeweiligen Anbieter des Finanzproduktes (Partner) geschlossen. Der Anbieter tritt hierbei lediglich als Vermittler auf.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Leistungsbeschreibung der Vergleichsplattform
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Anbieter stellt eine Plattform zur Verfügung, die es Kunden ermöglicht, Finanzprodukte von Drittanbietern zu vergleichen. Die Leistungen umfassen die Bereitstellung von Vergleichsrechnern, Informationen zu Finanzprodukten und Links zu Partnerangeboten. Der Anbieter übernimmt keine Garantie für die Verfügbarkeit, Richtigkeit oder Vollständigkeit der angezeigten Informationen, da diese von Partnern bereitgestellt werden. Der Anbieter ist nicht Partei der zwischen Kunden und Partnern geschlossenen Verträge und haftet nicht für deren Inhalt oder Erfüllung.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Pflichten des Kunden
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Kunde verpflichtet sich, die Plattform nur für die vorgesehenen Zwecke zu nutzen, nämlich den Vergleich von Finanzprodukten für private oder geschäftliche Zwecke. Eine missbräuchliche Nutzung, wie das Hochladen unzulässiger Inhalte, die Manipulation der Plattform oder die kommerzielle Weiterverwendung von Daten ohne schriftliche Genehmigung des Anbieters, ist untersagt. Der Kunde ist verpflichtet, wahrheitsgemäße und vollständige Angaben bei der Nutzung der Plattform zu machen, insbesondere bei der Eingabe von Daten in Vergleichsrechnern.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Entgelt und Kosten
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Nutzung der Plattform ist für den Kunden kostenfrei. Der Anbieter erhält Vergütungen von Partnern, wenn Kunden über die Plattform Verträge mit diesen abschließen. Diese Vergütungen haben keinen Einfluss auf die Darstellung der Vergleichsergebnisse. Sofern durch die Nutzung von Partnerangeboten Kosten für den Kunden entstehen, werden diese vom jeweiligen Partner angegeben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Haftung des Anbieters
              </CardTitle>
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
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Datenschutzbestimmungen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung, die unter <Link href="/datenschutz" className="text-green-600 hover:underline">Datenschutz</Link> auf der Plattform einsehbar ist. Der Kunde stimmt der Verarbeitung seiner Daten im Rahmen der Vertragsdurchführung zu, soweit dies für die Erbringung der Dienstleistungen erforderlich ist.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Kündigung des Nutzungsvertrags
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Der Nutzungsvertrag kann vom Kunden jederzeit durch Einstellung der Nutzung der Plattform beendet werden. Der Anbieter behält sich das Recht vor, den Zugang zur Plattform bei Verstoß gegen diese AGB oder aus sonstigen wichtigen Gründen mit angemessener Frist zu kündigen oder zu sperren. Eine Kündigung hat keinen Einfluss auf bestehende Verträge zwischen Kunden und Partnern.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Streitbeilegung
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://ec.europa.eu/consumers/odr</a> erreichbar ist. Der Anbieter ist nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
              <p>
                Für Beschwerden oder Anliegen wenden Sie sich bitte an: SmartFinanz, Westpreußenstraße 26, 53119 Bonn, E-Mail: <a href="mailto:info@unser-vergleichsportal.de" className="text-green-600 hover:underline">info@unser-vergleichsportal.de</a>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Schlussbestimmungen
              </CardTitle>
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
          <p className="text-2xl sm:text-3xl font-bold mb-6">
            <strong>Fragen zu unseren AGB?</strong>
          </p>
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

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
              </div>
            </div>
            <div>
              <div className="font-semibold mb-3 text-xl">Finanzprodukte</div>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link
                    href="/banking"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Banking"
                  >
                    Banking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tierversicherungen"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Haustierversicherung"
                  >
                    Haustierversicherung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trading"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Trading"
                  >
                    Trading
                  </Link>
                </li>
                <li>
                  <Link
                    href="/versicherungen"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Versicherungen"
                  >
                    Versicherungen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-xl">Weitere Produkte</div>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-base text-gray-400">
                  <li>
                    <a
                      href="https://www.c24n.de/ducwCtq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="DSL Vergleich (externer Link)"
                    >
                      DSL
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.c24n.de/Uxudvkj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="Gasvergleich (externer Link)"
                    >
                      Gas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.c24n.de/5R17qbN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="Handytarif vergleichen (externer Link)"
                    >
                      Handytarif
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.c24n.de/RYXPGyh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="Kreditkarten vergleichen (externer Link)"
                    >
                      Kreditkarte
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2 text-base text-gray-400">
                  <li>
                    <a
                      href="https://www.c24n.de/FZ9nd0R"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="Mietwagen vergleichen (externer Link)"
                    >
                      Mietwagen
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.c24n.de/zxy0WKh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="Ökostrom vergleichen (externer Link)"
                    >
                      Ökostrom
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.c24n.de/EieKR0E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="Reise vergleichen (externer Link)"
                    >
                      Reise
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.c24n.de/RYXPGyh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label="Stromvergleich (externer Link)"
                    >
                      Strom
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-3 text-xl">Unternehmen</div>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link
                    href="/karriere"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Karriere"
                  >
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Kontakt"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partnerprogramme"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Partnerprogramm"
                  >
                    Partnerprogramm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ueber-uns"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Über uns"
                  >
                    Über uns
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-xl">Rechtliches</div>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link
                    href="/agb"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="AGB"
                  >
                    AGB
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-richtlinie"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Cookie-Richtlinie"
                  >
                    Cookie-Richtlinie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Datenschutz"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/impressum"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                    aria-label="Impressum"
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-base text-gray-400 mb-4">
              © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/" aria-label="Zurück zur Startseite">
              <Button
                className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
              >
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
