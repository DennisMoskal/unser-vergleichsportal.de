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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
            <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
            <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
          </svg>
          <span className="font-bold text-base sm:text-xl">martFinanz</span>
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

  // Verhindere Scrollen, wenn mobiles Menü offen ist
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <SmartFinanzLogo className="text-base sm:text-xl" />
          </div>
          <button 
            className="sm:hidden flex items-center justify-center p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen/schließen"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobiles Menü */}
        {mobileMenuOpen && (
          <div className="sm:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="px-4 py-4 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <SmartFinanzLogo />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1"
                  aria-label="Menü schließen"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-4" aria-label="Mobiles Menü">
                <div>
                  <h2 className="font-semibold text-lg mb-2 text-gray-900">Finanzprodukte</h2>
                  <ul className="space-y-1">
                    {[
                      { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
                      { key: 'haustierversicherung', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
                      { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
                      { key: 'versicherungen', label: 'Versicherungen', url: '/versicherungen', isInternal: true },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <Link
                          href={url}
                          className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded text-sm"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveCategory(key)
                          }}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-semibold text-lg mb-2 text-gray-900">Weitere Produkte</h2>
                  <div className="grid grid-cols-2 gap-2">
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
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded text-sm"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setActiveCategory(key)
                        }}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold text-lg mb-2 text-gray-900">Unternehmen</h2>
                  <ul className="space-y-1">
                    {[
                      { key: 'karriere', label: 'Karriere', url: '/karriere', isInternal: true },
                      { key: 'kontakt', label: 'Kontakt', url: '/kontakt', isInternal: true },
                      { key: 'partnerprogramm', label: 'Partnerprogramm', url: '/partnerprogramme', isInternal: true },
                      { key: 'ueber-uns', label: 'Über uns', url: '/ueber-uns', isInternal: true },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <Link
                          href={url}
                          className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded text-sm"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveCategory(key)
                          }}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-semibold text-lg mb-2 text-gray-900">Rechtliches</h2>
                  <ul className="space-y-1">
                    {[
                      { key: 'agb', label: 'AGB', url: '/agb', isInternal: true },
                      { key: 'cookie-richtlinie', label: 'Cookie-Richtlinie', url: '/cookie-richtlinie', isInternal: true },
                      { key: 'datenschutz', label: 'Datenschutz', url: '/datenschutz', isInternal: true },
                      { key: 'impressum', label: 'Impressum', url: '/impressum', isInternal: true },
                    ].map(({ key, label, url, isInternal }) => (
                      <li key={key}>
                        <Link
                          href={url}
                          className="block px-3 py-2 text-gray-700 hover:bg-green-50 rounded text-sm"
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveCategory(key)
                          }}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-green-600 text-white hover:bg-green-700 text-sm">
                      Zur Startseite
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Kategorie-Navigation */}
      <section className="bg-white py-2 sm:py-4 border-b" id="versicherungen">
        <div className="container mx-auto px-2 sm:px-4">
          <ul className="flex flex-wrap justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
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
              <li key={key} className="my-0.5">
                {isInternal ? (
                  <Link
                    href={url}
                    className="block px-2 py-1 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded text-xs sm:text-sm"
                    onClick={() => setActiveCategory(key)}
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-1 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded text-xs sm:text-sm"
                    onClick={() => setActiveCategory(key)}
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
          <section className="py-8 sm:py-12 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 text-center">Impressum</h1>
              <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
                Gemäß § 5 Telemediengesetz (TMG) und anderen gesetzlichen Vorgaben stellen wir Ihnen nachfolgend alle erforderlichen Angaben über unser Unternehmen transparent zur Verfügung.
              </p>
              
              <div className="space-y-4">
                <Card className="bg-white border">
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg sm:text-2xl font-bold text-center">Angaben zum Unternehmen</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-gray-600 space-y-3">
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

                <Card className="bg-white border">
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg sm:text-2xl font-bold text-center">Haftungsausschluss</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-gray-600 space-y-3">
                    <p>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg sm:text-2xl font-bold text-center">Urheberrecht</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-gray-600 space-y-3">
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg sm:text-2xl font-bold text-center">Streitbeilegung</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-gray-600 space-y-3">
                    <p>
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://ec.europa.eu/consumers/odr</a> finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
                    </p>
                    <p>
                      Für Beschwerden oder Anliegen wenden Sie sich bitte an unsere oben angegebene Kontaktadresse oder per E-Mail an <a href="mailto:dennismoskal@yahoo.com" className="text-green-600 hover:underline">dennismoskal@yahoo.com</a>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border">
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg sm:text-2xl font-bold text-center">Berufshaftpflichtversicherung</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-gray-600 space-y-3">
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

                <Card className="bg-white border">
                  <CardHeader className="py-3">
                    <CardTitle className="text-lg sm:text-2xl font-bold text-center">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm sm:text-base text-gray-600 space-y-3">
                    <p>
                      Dennis Moskal<br />
                      Westpreußenstraße 26<br />
                      53119 Bonn<br />
                      Deutschland
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-8 sm:py-12 bg-green-600 text-white px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Impressum</h2>
              <p className="text-sm sm:text-base mb-6 text-green-100">
                Gemäß § 5 Telemediengesetz (TMG) und anderen gesetzlichen Vorgaben stellen wir Ihnen nachfolgend alle erforderlichen Angaben über unser Unternehmen transparent zur Verfügung.
              </p>
              <Link href="/kontakt" aria-label="Kontakt aufnehmen">
                <Button className="bg-white text-green-600 hover:bg-gray-100 text-sm sm:text-base px-4 py-2">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </section>

          <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                <div className="sm:col-span-2 md:col-span-1">
                  <div className="mb-4">
                    <SmartFinanzLogo className="text-white" />
                  </div>
                </div>
                <div>
                  <span className="font-semibold mb-2 text-sm sm:text-base block">Finanzprodukte</span>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                    <li><Link href="/banking" className="hover:text-white">Banking</Link></li>
                    <li><Link href="/tierversicherungen" className="hover:text-white">Haustierversicherung</Link></li>
                    <li><Link href="/trading" className="hover:text-white">Trading</Link></li>
                    <li><Link href="/versicherungen" className="hover:text-white">Versicherungen</Link></li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold mb-2 text-sm sm:text-base block">Weitere Produkte</span>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                    <li><a href="https://www.c24n.de/ducwCtq" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">DSL</a></li>
                    <li><a href="https://www.c24n.de/Uxudvkj" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">Gas</a></li>
                    <li><a href="https://www.c24n.de/5R17qbN" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">Handytarif</a></li>
                    <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">Kreditkarte</a></li>
                    <li><a href="https://www.c24n.de/FZ9nd0R" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">Mietwagen</a></li>
                    <li><a href="https://www.c24n.de/zxy0WKh" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">Ökostrom</a></li>
                    <li><a href="https://www.c24n.de/EieKR0E" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">Reise</a></li>
                    <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-white">Strom</a></li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold mb-2 text-sm sm:text-base block">Unternehmen</span>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                    <li><Link href="/karriere" rel="nofollow" className="hover:text-white">Karriere</Link></li>
                    <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
                    <li><Link href="/partnerprogramme" rel="nofollow" className="hover:text-white">Partnerprogramm</Link></li>
                    <li><Link href="/ueber-uns" className="hover:text-white">Über uns</Link></li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold mb-2 text-sm sm:text-base block">Rechtliches</span>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                    <li><Link href="/agb" rel="nofollow" className="hover:text-white">AGB</Link></li>
                    <li><Link href="/cookie-richtlinie" rel="nofollow" className="hover:text-white">Cookie-Richtlinie</Link></li>
                    <li><Link href="/datenschutz" rel="nofollow" className="hover:text-white">Datenschutz</Link></li>
                    <li><Link href="/impressum" rel="nofollow" className="hover:text-white">Impressum</Link></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-6 pt-6 text-center">
                <p className="text-xs sm:text-sm text-gray-400 mb-4">
                  © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
                </p>
                <Link href="/" aria-label="Zurück zur Startseite">
                  <Button className="bg-green-600 text-white hover:bg-green-700 text-sm px-4 py-2">
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
