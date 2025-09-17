"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X } from "lucide-react"
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

// Wiederverwendbare Header-Komponente
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("versicherungen")

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash && ["versicherungen", "banking", "tierversicherungen", "trading"].includes(hash)) {
      scrollToSection(hash)
    }
  }, [])

  return (
    <>
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <SmartFinanzLogo className="text-xl" />
          </div>
          <button
            className="sm:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen/schließen"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobiles Menü */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-6 py-4 space-y-6" aria-label="Mobiles Menü">
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Finanzprodukte</h2>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
                    { key: 'haustierversicherung', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
                    { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
                    { key: 'versicherungen', label: 'Versicherungen', url: '/versicherungen', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setActiveCategory(key)
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Weitere Produkte</h2>
                <div className="grid grid-cols-2 gap-2">
                  <ul className="flex flex-col gap-2 text-base">
                    {[
                      { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
                      { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
                      { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
                      { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveCategory(key)
                          }}
                          aria-label={`${label} vergleichen (externer Link)`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 text-base">
                    {[
                      { key: 'mietwagen', label: 'Mietwagen', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false },
                      { key: 'oekostrom', label: 'Ökostrom', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
                      { key: 'reise', label: 'Reise', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
                      { key: 'strom', label: 'Strom', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveCategory(key)
                          }}
                          aria-label={`${label} vergleichen (externer Link)`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Unternehmen</h2>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: 'karriere', label: 'Karriere', url: '/karriere', isInternal: true },
                    { key: 'kontakt', label: 'Kontakt', url: '/kontakt', isInternal: true },
                    { key: 'partnerprogramm', label: 'Partnerprogramm', url: '/partnerprogramme', isInternal: true },
                    { key: 'ueber-uns', label: 'Über uns', url: '/ueber-uns', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setActiveCategory(key)
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Rechtliches</h2>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: 'agb', label: 'AGB', url: '/agb', isInternal: true },
                    { key: 'cookie-richtlinie', label: 'Cookie-Richtlinie', url: '/cookie-richtlinie', isInternal: true },
                    { key: 'datenschutz', label: 'Datenschutz', url: '/datenschutz', isInternal: true },
                    { key: 'impressum', label: 'Impressum', url: '/impressum', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setActiveCategory(key)
                        }}
                        aria-label={`Zu ${label} navigieren`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-4">
                <Button
                  className="w-auto bg-green-600 text-white font-medium text-base px-4 py-2 transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Startseite
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Kategorie-Navigation */}
      <section className="bg-white py-4 border-b" id="versicherungen">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-base">
            {[
              { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
              { key: 'haustierversicherung', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
              { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
              { key: 'versicherungen', label: 'Versicherung', url: '/versicherungen', isInternal: true },
              { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
              { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj', isInternal: false },
              { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN', isInternal: false },
              { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
              { key: 'mietwagen', label: 'Mietwagen', url: 'https://www.c24n.de/FZ9nd0R', isInternal: false },
              { key: 'oekostrom', label: 'Ökostrom', url: 'https://www.c24n.de/zxy0WKh', isInternal: false },
              { key: 'reise', label: 'Reise', url: 'https://www.c24n.de/EieKR0E', isInternal: false },
              { key: 'strom', label: 'Strom', url: 'https://www.c24n.de/RYXPGyh', isInternal: false },
            ].map(({ key, label, url, isInternal }) => (
              <li key={key}>
                {isInternal ? (
                  <Link
                    href={url}
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setActiveCategory(key)}
                    aria-label={`Zu ${label} navigieren`}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
                    onClick={() => setActiveCategory(key)}
                    aria-label={`${label} vergleichen (externer Link)`}
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default function UeberUnsPage() {
  useEffect(() => {
    document.title = "Über uns unser-vergleichsportal.de"
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Erfahren Sie mehr über SmartFinanz, Ihr vertrauenswürdiger Partner für unabhängige Finanzvergleiche. Sparen Sie Zeit und Geld mit unseren Expertenlösungen."
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero-Bereich */}
      <section className="bg-green-600 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Über Uns Page SmartFinanz unser-vergleichsportal.de | einfach sparen!
          </h1>
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
            Profitieren Sie von unserer Expertise! Seit Jahren führen wir Sie zielsicher und nutzerfreundlich durch den Finanzdschungel – von Versicherungen bis Trading. Mit einem Sparpotenzial von bis zu 1.000 € jährlich überlassen Sie uns die Recherchen und genießen Ihre Freizeit.
          </p>
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
                <CardTitle className="text-lg sm:text-xl font-semibold">Sophie Bentler</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2023 bei uns, unterstützt sie Sie mit Ihrer Erfahrung in Versicherungen und schafft klare Lösungen.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Thomas Weber</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit Anfang an dabei, bringt er Finanz-Expertise für Ihre finanziellen Pläne ein.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Julia Kleins</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2024 im Team, kennt sie als Tierversicherungs-Expertin die Bedürfnisse Ihrer Haustiere.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">David Fischer</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Seit 2023 dabei, unterstützt er Sie mit seiner Trading-Erfahrung für erfolgreiche Anlagen.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border border-gray-200 rounded-lg">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg sm:text-xl font-semibold">Asya Schilds</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="mb-2">Frisch im Team, bringt sie technisches Know-how für Internet- und Mobilfunktarife, angepasst an Ihre Bedürfnisse.</p>
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
            Unsere Vision: Sie sollen sich bei uns wohlfühlen, egal ob Sie Online-Vergleiche kennen oder nicht. Wir arbeiten mit externen Partnern für die Vermittlung; der Abschluss erfolgt nicht direkt über uns. Mehr dazu unter <Link href="/datenschutz" className="underline hover:text-green-600">Datenschutz</Link>.
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

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
              </div>
            </div>
            
            <div>
              <span className="font-semibold mb-3 text-xl">Finanzprodukte</span>
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
              <span className="font-semibold mb-3 text-xl">Weitere Produkte</span>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-base text-gray-400">
                  <li>
                    <a 
                      href="https://www.c24n.de/ducwCtq" 
                      target="_blank" 
                      rel="noopener noreferrer nofollow" 
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
                      rel="noopener noreferrer nofollow" 
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
                      rel="noopener noreferrer nofollow" 
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
                      rel="noopener noreferrer nofollow" 
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
                      rel="noopener noreferrer nofollow" 
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
                      rel="noopener noreferrer nofollow" 
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
                      rel="noopener noreferrer nofollow" 
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
                      rel="noopener noreferrer nofollow" 
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
              <span className="font-semibold mb-3 text-xl">Unternehmen</span>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/karriere" 
                    rel="nofollow"
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
                    rel="nofollow"
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
              <span className="font-semibold mb-3 text-xl">Rechtliches</span>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <Link 
                    href="/agb" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="AGB"
                  >
                    AGB
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/cookie-richtlinie" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Cookie-Richtlinie"
                  >
                    Cookie-Richtlinie
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/datenschutz" 
                    rel="nofollow"
                    className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm" 
                    aria-label="Datenschutz"
                  >
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/impressum" 
                    rel="nofollow"
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
                Startseite
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
