"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, Shield, Copyright, TrendingUp, Menu, X } from "lucide-react"
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

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Impressum - SmartFinanz unser-vergleichsportal.de</title>
        <meta
          name="description"
          content="Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung."
        />
        <meta
          name="keywords"
          content="Impressum, SmartFinanz unser-vergleichsportal.de, Telemediengesetz, Unternehmensangaben, Kontakt"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/impressum" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Impressum - SmartFinanz unser-vergleichsportal.de 2025" />
        <meta
          property="og:description"
          content="Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/impressum" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Impressum - SmartFinanz unser-vergleichsportal.de | Unternehmensangaben" />
        <meta
          name="twitter:description"
          content="Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung."
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
                name: "Impressum - SmartFinanz unser-vergleichsportal.de 2025",
                description:
                  "Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung.",
                url: "https://unser-vergleichsportal.de/impressum",
                keywords: [
                  "Impressum",
                  "SmartFinanz unser-vergleichsportal.de",
                  "Telemediengesetz",
                  "Unternehmensangaben",
                  "Kontakt"
                ]
              })
            }}
          />

          <Header />

          {/* Hauptinhalt */}
          <section className="py-12 sm:py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">Impressum</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
                Gemäß § 5 Telemediengesetz (TMG) und anderen gesetzlichen Vorgaben stellen wir Ihnen nachfolgend alle erforderlichen Angaben über unser Unternehmen transparent zur Verfügung.
              </p>

              <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Angaben zum Unternehmen</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-gray-600 space-y-4">
                  <p>
                    <strong>SmartFinanz unser-vergleichsportal.de</strong><br />
                    Westpreußenstraße 26<br />
                    53119 Bonn<br />
                    Deutschland
                  </p>
                  <p>
                    <strong>Geschäftsführer:</strong> Dennis Moskal<br />
                    <strong>Handelsregister:</strong> HRB 123456, Amtsgericht Bonn<br />
                    <strong>Umsatzsteuer-ID:</strong> DE61479320456 (gemäß § 27a Umsatzsteuergesetz)
                  </p>
                  <p>
                    <strong>Kontakt:</strong><br />
                    Telefon: <a href="tel:01722058855" className="text-green-600 hover:underline">0172 2058855</a><br />
                    E-Mail: <a href="mailto:info@unser-vergleichsportal.de" className="text-green-600 hover:underline">info@unser-vergleichsportal.de</a>
                  </p>
                  <p>
                    <strong>Aufsichtsbehörde:</strong><br />
                    Gewerbeamt Bonn<br />
                    Engeltalstraße 6, 53111 Bonn<br />
                    <a href="https://www.bonn.de" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">www.bonn.de</a>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Haftungsausschluss</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-gray-600 space-y-4">
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Urheberrecht</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-gray-600 space-y-4">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Streitbeilegung</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-gray-600 space-y-4">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://ec.europa.eu/consumers/odr</a> finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                  </p>
                  <p>
                    Für Beschwerden oder Anliegen wenden Sie sich bitte an unsere oben angegebene Kontaktadresse oder per E-Mail an <a href="mailto:dennismoskal@yahoo.com" className="text-green-600 hover:underline">dennismoskal@yahoo.com</a>.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Berufshaftpflichtversicherung</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-gray-600 space-y-4">
                  <p>
                    <strong>Versicherer:</strong><br />
                    andsafe Aktiengesellschaft<br />
                    Provinzial-Allee 1, 48159 Münster<br />
                    Deutschland
                  </p>
                  <p>
                    <strong>Räumlicher Geltungsbereich:</strong><br />
                    Deutschland und EU
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</CardTitle>
                </CardHeader>
                <CardContent className="text-left text-gray-600 space-y-4">
                  <p>
                    Dennis Moskal<br />
                    Westpreußenstraße 26<br />
                    53119 Bonn<br />
                    Deutschland
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 sm:py-16 bg-green-600 text-white">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Impressum</h1>
              <p className="text-lg sm:text-xl mb-8 text-green-100">
                Gemäß § 5 Telemediengesetz (TMG) und anderen gesetzlichen Vorgaben stellen wir Ihnen nachfolgend alle erforderlichen Angaben über unser Unternehmen transparent zur Verfügung.
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
