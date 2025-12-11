"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, Shield, Copyright, TrendingUp, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Head from "next/head"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" aria-label="Zurück zur Startseite">
      <div className={`flex flex-col items-start ${className}`}>
        <div className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" className="sm:w-8 sm:h-8">
            <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
            <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
          </svg>
          <span className="font-bold text-lg sm:text-xl">martFinanz</span>
        </div>
        <span className="text-xs sm:text-sm mt-0.5">Unser-Vergleichsportal.de</span>
      </div>
    </Link>
  )
}

// Wiederverwendbare Header-Komponente
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("versicherungen")
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash && ["versicherungen", "banking", "tierversicherungen", "trading"].includes(hash)) {
      scrollToSection(hash)
    }
  }, [])

  // Schließe mobiles Menü beim Klick außerhalb
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Verhindere Scrollen, wenn mobiles Menü offen ist
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <SmartFinanzLogo className="text-lg sm:text-xl" />
          </div>
          <button 
            className="sm:hidden flex items-center justify-center p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen/schließen"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobiles Menü mit Overlay */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40 sm:hidden" />
            <div 
              ref={mobileMenuRef}
              className="sm:hidden fixed top-0 left-0 right-0 h-screen bg-white shadow-lg z-50 overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <SmartFinanzLogo />
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                    aria-label="Menü schließen"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-6" aria-label="Mobiles Menü">
                  <div>
                    <h2 className="font-semibold text-lg mb-3 text-gray-900">Finanzprodukte</h2>
                    <ul className="space-y-2">
                      {[
                        { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
                        { key: 'haustierversicherung', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
                        { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
                        { key: 'versicherungen', label: 'Versicherungen', url: '/versicherungen', isInternal: true },
                      ].map(({ key, label, url, isInternal }) => (
                        <li key={key}>
                          <Link
                            href={url}
                            className="block px-3 py-2 font-medium text-gray-700 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
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
                    <h2 className="font-semibold text-lg mb-3 text-gray-900">Weitere Produkte</h2>
                    <div className="grid grid-cols-1 gap-2">
                      <ul className="space-y-2">
                        {[
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
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 font-medium text-gray-700 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
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
                    <h2 className="font-semibold text-lg mb-3 text-gray-900">Unternehmen</h2>
                    <ul className="space-y-2">
                      {[
                        { key: 'karriere', label: 'Karriere', url: '/karriere', isInternal: true },
                        { key: 'kontakt', label: 'Kontakt', url: '/kontakt', isInternal: true },
                        { key: 'partnerprogramm', label: 'Partnerprogramm', url: '/partnerprogramme', isInternal: true },
                        { key: 'ueber-uns', label: 'Über uns', url: '/ueber-uns', isInternal: true },
                      ].map(({ key, label, url, isInternal }) => (
                        <li key={key}>
                          <Link
                            href={url}
                            className="block px-3 py-2 font-medium text-gray-700 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
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
                    <h2 className="font-semibold text-lg mb-3 text-gray-900">Rechtliches</h2>
                    <ul className="space-y-2">
                      {[
                        { key: 'agb', label: 'AGB', url: '/agb', isInternal: true },
                        { key: 'cookie-richtlinie', label: 'Cookie-Richtlinie', url: '/cookie-richtlinie', isInternal: true },
                        { key: 'datenschutz', label: 'Datenschutz', url: '/datenschutz', isInternal: true },
                        { key: 'impressum', label: 'Impressum', url: '/impressum', isInternal: true },
                      ].map(({ key, label, url, isInternal }) => (
                        <li key={key}>
                          <Link
                            href={url}
                            className="block px-3 py-2 font-medium text-gray-700 hover:text-green-600 transition-colors rounded-lg hover:bg-green-50"
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

                  <div className="pt-4 border-t">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                        Zur Startseite
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Kategorie-Navigation - nur auf Desktop */}
      <section className="bg-white py-3 border-b hidden sm:block">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-1 sm:gap-2 text-sm">
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
                    className="block px-2 py-1.5 font-medium text-gray-700 hover:text-green-600 transition-colors text-xs sm:text-sm"
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
                    className="block px-2 py-1.5 font-medium text-gray-700 hover:text-green-600 transition-colors text-xs sm:text-sm"
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
        <meta name="description" content="Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung." />
        <meta name="keywords" content="Impressum, SmartFinanz unser-vergleichsportal.de, Telemediengesetz, Unternehmensangaben, Kontakt" />
        <link rel="canonical" href="https://unser-vergleichsportal.de/impressum" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Impressum - SmartFinanz unser-vergleichsportal.de 2025" />
        <meta property="og:description" content="Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung." />
        <meta property="og:url" content="https://unser-vergleichsportal.de/impressum" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Impressum - SmartFinanz unser-vergleichsportal.de | Unternehmensangaben" />
        <meta name="twitter:description" content="Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung." />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <main>
        <div className="min-h-screen bg-white">
          {/* Schema Markup for SEO */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Impressum - SmartFinanz unser-vergleichsportal.de 2025",
              description: "Gemäß § 5 Telemediengesetz (TMG) stellen wir Ihnen alle erforderlichen Angaben über SmartFinanz unser-vergleichsportal.de transparent zur Verfügung.",
              url: "https://unser-vergleichsportal.de/impressum",
              keywords: [
                "Impressum",
                "SmartFinanz unser-vergleichsportal.de",
                "Telemediengesetz",
                "Unternehmensangaben",
                "Kontakt"
              ]
            })
          }} />

          <Header />

          {/* Hauptinhalt */}
          <section className="py-8 sm:py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 text-center">
                Impressum
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 text-center">
                Gemäß § 5 Telemediengesetz (TMG) und anderen gesetzlichen Vorgaben stellen wir Ihnen nachfolgend alle erforderlichen Angaben über unser Unternehmen transparent zur Verfügung.
              </p>

              <div className="space-y-4 sm:space-y-8">
                <Card className="bg-white border hover:border-green-200 transition-shadow hover:shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl sm:text-3xl font-bold text-center">
                      Angaben zum Unternehmen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-left text-gray-600 space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      <strong className="text-gray-900">SmartFinanz unser-vergleichsportal.de</strong><br />
                      Westpreußenstraße 26<br />
                      53119 Bonn<br />
                      Deutschland
                    </p>
                    <p>
                      <strong className="text-gray-900">Geschäftsführer:</strong> Dennis Moskal<br />
                      <strong className="text-gray-900">Handelsregister:</strong> HRB 123456, Amtsgericht Bonn<br />
                      <strong className="text-gray-900">Umsatzsteuer-ID:</strong> DE61479320456 (gemäß § 27a Umsatzsteuergesetz)
                    </p>
                    <p>
                      <strong className="text-gray-900">Kontakt:</strong><br />
                      Telefon: <a href="tel:01722058855" className="text-green-600 hover:underline break-all">0172 2058855</a><br />
                      E-Mail: <a href="mailto:info@unser-vergleichsportal.de" className="text-green-600 hover:underline break-all">info@unser-vergleichsportal.de</a>
                    </p>
                    <p>
                      <strong className="text-gray-900">Aufsichtsbehörde:</strong><br />
                      Gewerbeamt Bonn<br />
                      Engeltalstraße 6, 53111 Bonn<br />
                      <a href="https://www.bonn.de" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline break-all">www.bonn.de</a>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border hover:border-green-200 transition-shadow hover:shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl sm:text-3xl font-bold text-center">
                      Haftungsausschluss
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-left text-gray-600 space-y-3 text-sm sm:text-base">
                    <p>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                  </CardContent>
                </Card>

                {/* Weitere Cards mit gleichem Muster */}
                {/* ... Rest der Cards bleiben ähnlich mit angepassten Padding/Font-Sizes ... */}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-8 sm:py-16 bg-green-600 text-white px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
                Kontaktieren Sie uns
              </h2>
              <p className="text-base sm:text-xl mb-6 text-green-100">
                Haben Sie Fragen zu unserem Impressum? Wir helfen Ihnen gerne weiter.
              </p>
              <Link href="/kontakt" aria-label="Kontakt aufnehmen">
                <Button className="bg-white text-green-600 hover:bg-gray-100 text-sm sm:text-base px-6 py-3">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </section>

          {/* Footer optimiert für Mobile */}
          <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                <div className="sm:col-span-2 lg:col-span-1">
                  <div className="mb-4">
                    <SmartFinanzLogo className="text-white" />
                  </div>
                </div>
                
                {/* Footer Spalten mit reduziertem Abstand auf Mobile */}
                <div>
                  <h3 className="font-semibold mb-3 text-lg">Finanzprodukte</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {['banking', 'tierversicherungen', 'trading', 'versicherungen'].map((item) => (
                      <li key={item}>
                        <Link
                          href={`/${item}`}
                          className="hover:text-white transition-colors block py-1"
                          aria-label={`Zu ${item} navigieren`}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weitere Spalten ähnlich angepasst */}
                {/* ... */}
              </div>

              <div className="border-t border-gray-800 mt-8 pt-6 text-center">
                <p className="text-sm text-gray-400 mb-4">
                  © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
                </p>
                <Link href="/" aria-label="Zurück zur Startseite">
                  <Button className="bg-green-600 text-white hover:bg-green-700 text-sm px-6 py-2">
                    Zur Startseite
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
