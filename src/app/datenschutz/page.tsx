"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cookie, Shield, Info, TrendingUp, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
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
              { key: '1dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq', isInternal: false },
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

export default function CookieRichtliniePage() {
  return (
    <>
      <Head>
        <title>Cookie-Richtlinie unser-vergleichsportal.de</title>
        <meta
          name="description"
          content="Diese Cookie-Richtlinie erläutert, wie SmartFinanz unser-vergleichsportal.de Cookies und ähnliche Technologien verwendet, um ein optimales Nutzererlebnis zu bieten."
        />
        <meta
          name="keywords"
          content="Cookie-Richtlinie, SmartFinanz unser-vergleichsportal.de, Cookies Vergleichsportal, Datenschutz Cookies"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/cookie-richtlinie" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cookie-Richtlinie SmartFinanz unser-vergleichsportal.de 2025" />
        <meta
          property="og:description"
          content="Diese Cookie-Richtlinie erläutert, wie SmartFinanz unser-vergleichsportal.de Cookies und ähnliche Technologien verwendet, um ein optimales Nutzererlebnis zu bieten."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/cookie-richtlinie" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookie-Richtlinie SmartFinanz unser-vergleichsportal.de | Privatsphäre schützen" />
        <meta
          name="twitter:description"
          content="Diese Cookie-Richtlinie erläutert, wie SmartFinanz unser-vergleichsportal.de Cookies und ähnliche Technologien verwendet, um ein optimales Nutzererlebnis zu bieten."
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <main>
        <div className="min-h-screen bg-white">
          {/* Schema Markup for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Cookie-Richtlinie SmartFinanz unser-vergleichsportal.de 2025",
                description:
                  "Diese Cookie-Richtlinie erläutert, wie SmartFinanz unser-vergleichsportal.de Cookies und ähnliche Technologien verwendet, um ein optimales Nutzererlebnis zu bieten.",
                url: "https://unser-vergleichsportal.de/cookie-richtlinie",
                keywords: [
                  "Cookie-Richtlinie",
                  "SmartFinanz unser-vergleichsportal.de",
                  "Cookies Vergleichsportal",
                  "Datenschutz Cookies"
                ]
              })
            }}
          />

          <Header />

          {/* Hauptinhalt */}
          <section className="py-12 sm:py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">Cookie-Richtlinie</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
                Diese Cookie-Richtlinie erläutert, wie SmartFinanz unser-vergleichsportal.de Cookies und ähnliche Technologien auf unserer Website verwendet, um Ihnen ein optimales Nutzererlebnis zu bieten und unsere Dienste zu verbessern.
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
                    E-Mail: <a href="mailto:info@unser-vergleichsportal.de" className="text-green-600 hover:underline">info@unser-vergleichsportal.de</a>
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
                    E-Mail: <a href="mailto:info@unser-vergleichsportal.de" className="text-green-600 hover:underline">info@unser-vergleichsportal.de</a>
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
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Cookie-Richtlinie</h1>
              <p className="text-lg sm:text-xl mb-8 text-green-100">
                Diese Cookie-Richtlinie erläutert, wie SmartFinanz unser-vergleichsportal.de Cookies und ähnliche Technologien auf unserer Website verwendet, um Ihnen ein optimales Nutzererlebnis zu bieten und unsere Dienste zu verbessern.
              </p>
              <Link href="/kontakt" aria-label="Kontakt aufnehmen">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
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
        </div>
      </main>
    </>
  )
}
