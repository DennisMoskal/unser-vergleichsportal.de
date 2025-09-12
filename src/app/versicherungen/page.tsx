"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from "lucide-react"
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

// Reusable Header Component
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

        {/* Mobile Menü */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-6 py-4 space-y-6" aria-label="Mobile Menü">
              <div>
                <div className="font-semibold text-2xl mb-3 text-left ml-2">Finanzprodukte</div>
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
                <div className="font-semibold text-2xl mb-3 text-left ml-2">Weitere Produkte</div>
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
                <div className="font-semibold text-2xl mb-3 text-left ml-2">Unternehmen</div>
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
                <div className="font-semibold text-2xl mb-3 text-left ml-2">Rechtliches</div>
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
              { key: 'strom', label: 'Strom', url: 'https://www.c24/1fed5b4d-e468-4988-afcb-d6585aa94d9bn.de/RYXPGyh', isInternal: false },
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

const providerData = [
  {
    name: "CHECK24",
    rating: 4.8,
    features: [
      "Vergleich von über 300 Versicherungen in wenigen Minuten",
      "Testsieger in über 25 Kategorien (Handelsblatt 09/2024)",
      "Kostenlose Beratung durch 300 Experten (08:00–22:00 Uhr)",
      "Über 98% Kundenzufriedenheit (eKomi Gold Siegel)",
      "Nirgendwo-Günstiger-Garantie für beste Konditionen",
      "Transparente Provisionen bei Abschluss",
      "Zusätzliche Vergleiche für Kredite, Strom und Gas",
      "Bis zu 50% Ersparnis durch Vergleich möglich"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 100€ Cashback",
    logo: "✅",
    url: "https://www.check24.de/versicherungen/",
    metaTitle: "CHECK24 Versicherungsvergleich: Testsieger 2025 mit bis zu 50% Ersparnis",
    metaDescription: "Vergleichen Sie über 300 Versicherungen mit CHECK24. Kostenlos, transparent und mit Top-Bewertungen. Sparen Sie bis zu 50% mit unseren Testsiegern!",
    isTopRecommendation: true
  },
  {
    name: "HUK-COBURG",
    rating: 4.7,
    features: [
      "Über 90 Jahre Erfahrung in der Versicherungsbranche",
      "Kfz-Versicherung mit Top-Bewertungen (4,7/5 eKomi)",
      "Günstige Tarife für Haftpflicht, Hausrat und Wohngebäude",
      "Schneller Schadensservice mit 24/7-Hotline",
      "Flexible Zusatzbausteine für individuelle Absicherung",
      "Bis zu 20% Rabatt bei Kombination mehrerer Versicherungen",
      "Nachhaltigkeitsinitiativen für umweltbewusste Kunden",
      "Kostenloser Tarifcheck und Online-Abschluss"
    ],
    price: "Individuelle Tarife",
    bonus: "Bis zu 20% Kombirabatt",
    logo: "🚗",
    url: "https://www.huk.de/versicherungen/",
    metaTitle: "HUK-COBURG Versicherungen: Top Kfz-Versicherung und Kombirabatte 2025",
    metaDescription: "HUK-COBURG bietet Top Kfz-Versicherungen, günstige Tarife und bis zu 20% Kombirabatt. Jetzt Tarife prüfen und sparen!",
    isTopRecommendation: true
  },
  {
    name: "Allianz",
    rating: 4.6,
    features: [
      "Weltweit agierender Versicherer mit über 100 Jahren Erfahrung",
      "Umfassender Schutz für Kfz, Hausrat, Haftpflicht und mehr",
      "eKomi-Bewertung: 4,6/5 Sterne von über 5.000 Kunden",
      "Schneller digitaler Abschluss mit VideoIdent",
      "Attraktive Boni für langjährige Kunden",
      "Persönliche Beratung in über 2.000 Filialen",
      "Schadensservice mit 24/7-Verfügbarkeit",
      "Flexible Tarifanpassung für individuelle Bedürfnisse"
    ],
    price: "Bonitätsabhängige Tarife",
    bonus: "Treuebonus für Bestandskunden",
    logo: "🛡️",
    url: "https://www.allianz.de/versicherungen/",
    metaTitle: "Allianz Versicherungen: Zuverlässiger Schutz für Kfz und Hausrat 2025",
    metaDescription: "Allianz bietet umfassenden Schutz für Kfz, Hausrat und mehr mit 4,6/5 eKomi-Bewertung. Jetzt Tarife vergleichen und Treuebonus sichern!",
    isTopRecommendation: true
  },
  {
    name: "CosmosDirekt",
    rating: 4.5,
    features: [
      "Spezialist für Risikolebens- und Berufsunfähigkeitsversicherung",
      "100% digitale Abwicklung mit einfachem Online-Abschluss",
      "Testsieger in der Kategorie Risikolebensversicherung 2024",
      "eKomi-Bewertung: 4,5/5 Sterne von über 2.000 Kunden",
      "Günstige Tarife für junge Familien und Berufseinsteiger",
      "Flexible Laufzeiten und Beitragsanpassung",
      "Schneller Schadensservice mit digitaler Schadenmeldung",
      "Transparente Kostenstruktur ohne versteckte Gebühren"
    ],
    price: "Individuelle Tarife",
    bonus: "Günstige Einstiegstarife",
    logo: "💼",
    url: "https://www.cosmosdirekt.de/versicherungen/",
    metaTitle: "CosmosDirekt: Testsieger Risikolebensversicherung 2025",
    metaDescription: "CosmosDirekt bietet günstige Risikolebensversicherungen und digitale Abwicklung. Jetzt Tarife vergleichen und sparen!",
    isTopRecommendation: true
  },
  {
    name: "ARAG",
    rating: 4.6,
    features: [
      "Marktführer für Rechtsschutzversicherungen",
      "Umfassender Schutz für Privat-, Berufs- und Verkehrsrecht",
      "eKomi-Bewertung: 4,6/5 Sterne von über 3.000 Kunden",
      "Kostenlose Erstberatung durch Anwälte",
      "Schnelle Schadenbearbeitung mit Online-Portal",
      "Flexible Bausteine für individuelle Absicherung",
      "Kombi-Tarife mit Haftpflicht und Hausrat möglich",
      "Bis zu 30% Ersparnis bei Online-Abschluss"
    ],
    price: "Individuelle Tarife",
    bonus: "Bis zu 30% Online-Rabatt",
    logo: "⚖️",
    url: "https://www.arag.de/versicherungen/",
    metaTitle: "ARAG Rechtsschutzversicherung: Marktführer für Miet- und Verkehrsrecht 2025",
    metaDescription: "ARAG bietet erstklassigen Rechtsschutz für Privat- und Berufsleben. Bis zu 30% Online-Rabatt. Jetzt vergleichen!",
    isTopRecommendation: true
  }
]

export default function Versicherungen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Top-Empfehlungen zuerst
  const sortedProviders = [...providerData].sort((a, b) => {
    if (a.isTopRecommendation && !b.isTopRecommendation) return -1
    if (!a.isTopRecommendation && b.isTopRecommendation) return 1
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Versicherungsvergleich September 2025: Beste Anbieter für Kfz, Haftpflicht & Hausrat</title>
        <meta
          name="description"
          content="Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie bis zu 50% mit Testsiegern wie CHECK24, HUK-COBURG und Allianz."
        />
        <meta
          name="keywords"
          content="Versicherungsvergleich, Kfz-Versicherung, Haftpflichtversicherung, Hausratversicherung, Rechtsschutzversicherung, Testsieger 2025, CHECK24, HUK-COBURG, Allianz, CosmosDirekt, ARAG"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/versicherungen" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Versicherungsvergleich 2025: Beste Anbieter für Kfz, Haftpflicht & Hausrat" />
        <meta
          property="og:description"
          content="Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie bis zu 50% mit Testsiegern wie CHECK24, HUK-COBURG und Allianz."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/versicherungen" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Versicherungsvergleich 2025: Beste Anbieter für Kfz, Haftpflicht & Hausrat" />
        <meta
          name="twitter:description"
          content="Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie bis zu 50% mit Testsiegern."
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
            name: "Versicherungsvergleich 2025: Beste Anbieter für Kfz, Haftpflicht & Hausrat",
            description:
              "Vergleichen Sie die besten Versicherungen 2025: Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie bis zu 50% mit Testsiegern wie CHECK24, HUK-COBURG und Allianz.",
            url: "https://unser-vergleichsportal.de/versicherungen",
            keywords: [
              "Versicherungsvergleich",
              "Kfz-Versicherung",
              "Haftpflichtversicherung",
              "Hausratversicherung",
              "Rechtsschutzversicherung",
              "Testsieger 2025"
            ],
            mainEntity: {
              "@type": "ItemList",
              itemListElement: sortedProviders.map((provider, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: provider.name,
                  description: provider.metaDescription,
                  offers: {
                    "@type": "Offer",
                    price: provider.price,
                    url: provider.url
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: provider.rating,
                    reviewCount: "100"
                  },
                  keywords: [
                    "Versicherungsvergleich",
                    "Kfz-Versicherung",
                    "Haftpflichtversicherung",
                    "Hausratversicherung",
                    "Rechtsschutzversicherung"
                  ]
                }
              }))
            }
          })
        }}
      />

      <Header />

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Versicherungsvergleich September 2025: Beste Versicherungen 2025 | Kfz, Haftpflicht & Hausrat Testsieger
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Vergleichen Sie über 300 Versicherungsprodukte kostenlos mit SmartFinanz. Sparen Sie bis zu 50% jährlich mit
              Testsiegern wie CHECK24, HUK-COBURG, Allianz, CosmosDirekt und ARAG. Finden Sie die besten Tarife für Kfz,
              Haftpflicht, Hausrat und Rechtsschutz mit transparenten Bewertungen und attraktiven Boni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="https://www.check24.de/versicherungen/" target="_blank" rel="sponsored" className="inline-block">
                <Button
                  className="bg-white text-green-600 font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-white hover:to-gray-100"
                >
                  Jetzt mit CHECK24 vergleichen
                </Button>
              </a>
              <a href="https://www.huk.de/versicherungen/kfz-versicherung.html" target="_blank" rel="sponsored" className="inline-block">
                <Button
                  className="bg-white text-green-600 font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-white hover:to-gray-100"
                >
                  HUK-COBURG Tarife prüfen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            So finden Sie die beste Versicherung
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Angebote</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Nutzen Sie unseren kostenlosen Vergleich, um über 300 Angebote von Top-Anbietern wie CHECK24 und HUK-COBURG zu prüfen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Achten Sie auf Bewertungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Vertrauen Sie auf verifizierte Kundenbewertungen (z. B. eKomi 4,8/5 für Allianz und ARAG) für Ihre Entscheidung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Prüfen Sie Leistungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf flexible Tarife, schnellen Schadensservice und Kombirabatte bei HUK-COBURG und CosmosDirekt.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Testsieger Versicherungsvergleich September 2025
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedProviders.map((provider) => (
              <Card
                key={provider.name}
                className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative"
              >
                {provider.isTopRecommendation && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">Top Empfehlung</Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="text-center border-b pb-2 mb-4">
                    <p className="text-xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">
                      {provider.bonus}
                    </Badge>
                  </div>
                  <ul className="space-y-1 flex-1 overflow-auto">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={provider.url}
                    target={provider.url.startsWith("http") ? "_blank" : "_self"}
                    rel={provider.url.startsWith("http") ? "sponsored" : undefined}
                  >
                    <Button className="w-full mt-auto bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                      Jetzt abschließen*
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>*Wir erhalten eine Provision für Käufe über diese Links.</p>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Ihr Weg zur besten Versicherung 2025
          </h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Günstige Kfz-Versicherung mit maximalem Schutz
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine gute Kfz-Versicherung bietet umfassenden Schutz ohne versteckte Kosten. Achten Sie auf Rabatte (z. B. für Werkstattbindung) und flexible Zusatzbausteine wie Schutzbrief oder Insassenunfallversicherung.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Günstige Prämien bei guter Schadenquote
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloser Schutzbrief bei Unfällen
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schneller Schadensservice (24/7)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Flexible Zusatzbausteine (z. B. Mallorca-Police)
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Spartipp:</strong> Durch den Wechsel der Kfz-Versicherung können Sie bis zu 500€ jährlich sparen. Nutzen Sie unseren Vergleich, um die besten Tarife zu finden.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.huk.de/versicherungen/kfz-versicherung.html" target="_blank" rel="sponsored">
                <Button className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Kfz-Versicherung vergleichen
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Privathaftpflichtversicherung für jeden Haushalt
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Privathaftpflichtversicherung schützt Sie vor finanziellen Risiken bei Schäden, die Sie anderen zufügen. Sie ist essenziell für jeden Haushalt.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Deckt Schäden bis zu 50 Mio. €
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz bei Schlüsselverlust oder Mietsachschäden
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Familienabsicherung inklusive
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Wichtiger Hinweis:</strong> Vergleichen Sie jährlich, da Tarife sich ändern. Kombination mit Hausrat spart bis zu 20%.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.check24.de/haftpflichtversicherung/" target="_blank" rel="sponsored">
                <Button className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Haftpflichtversicherung vergleichen
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Günstige Hausratversicherung für Mieter und Eigentümer
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Hausratversicherung schützt Ihr Hab und Gut bei Einbruch, Feuer oder Wasserschäden. Ideal für Mieter und Eigentümer.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Neuwertentschädigung bei Totalschaden
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz bei Elementarschäden (z. B. Sturm, Hagel)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Fahrraddiebstahl optional einschließbar
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Spartipp:</strong> Online-Abschlüsse sparen bis zu 30%. Nutzen Sie Apps für schnelle Schadenmeldung.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.check24.de/hausratversicherung/" target="_blank" rel="sponsored">
                <Button className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Hausratversicherung vergleichen
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Risikolebensversicherung für junge Familien
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Risikolebensversicherung schützt Ihre Liebsten finanziell im Todesfall. Besonders wichtig für Familien mit Kindern oder Hypotheken.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Flexible Versicherungssummen (50.000€–1 Mio. €)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Günstige Beiträge für Nichtraucher
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schneller Abschluss ohne Gesundheitsprüfung (bei kleinen Summen)
              </li>
            </ul>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.cosmosdirekt.de/risikolebensversicherung/" target="_blank" rel="sponsored">
                <Button className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Risikolebensversicherung vergleichen
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Rechtsschutzversicherung für Miet- und Verkehrsstreitigkeiten
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Rechtsschutzversicherung deckt Kosten für Anwälte und Gerichte in Streitfällen. Ideal für Arbeits-, Miet- oder Verkehrsstreitigkeiten.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Deckt Kosten bis zu 1 Mio. € pro Fall
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenlose Erstberatung durch Anwälte
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz bei Mietstreitigkeiten oder Nachbarschaftsstreit
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Spartipp:</strong> Online-Abschlüsse sparen bis zu 30%. Kombinieren Sie mit Haftpflicht für Rabatte.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.arag.de/rechtsschutzversicherung/" target="_blank" rel="sponsored">
                <Button className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  Jetzt Rechtsschutzversicherung vergleichen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Häufige Fragen zu Versicherungen
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <h3 className="text-lg font-bold">Wie wechsle ich meine Versicherung?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Prüfen Sie die Kündigungsfrist (meist 1–3 Monate). Nutzen Sie unseren Vergleich, um einen besseren Tarif zu finden, und lassen Sie den neuen Anbieter die Kündigung übernehmen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <h3 className="text-lg font-bold">Was kostet eine Versicherung?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Kosten variieren: Haftpflicht ab 30€/Jahr, Kfz ab 150€/Jahr, Hausrat ab 50€/Jahr. Regelmäßiger Vergleich spart Geld.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <h3 className="text-lg font-bold">Sind Online-Abschlüsse sicher?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Ja, mit 256-Bit-SSL-Verschlüsselung und VideoIdent sind Online-Abschlüsse sicher und bequem.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <h3 className="text-lg font-bold">Welche Versicherung für junge Familien?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Risikolebensversicherung (z. B. CosmosDirekt) und Haftpflicht sind ideal, um Familie und Haushalt abzusichern.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <h3 className="text-lg font-bold">Was deckt eine Hausratversicherung?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Schutz bei Einbruch, Feuer, Wasserschäden und optional Fahrraddiebstahl. Neuwertentschädigung inklusive.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <h3 className="text-lg font-bold">Warum Rechtsschutzversicherung?</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Deckt Anwalts- und Gerichtskosten bei Miet-, Arbeits- oder Verkehrsstreitigkeiten. ARAG bietet bis zu 1 Mio. € Schutz.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.check24.de/versicherungen/" target="_blank" rel="sponsored">
              <Button className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                Jetzt Versicherungen vergleichen
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Schnell und einfach zum besten Versicherungsangebot</h2>
            <p className="text-sm sm:text-base text-green-100">
              Finden Sie mit wenigen Klicks die besten Tarife für Kfz, Haftpflicht, Hausrat und mehr. Sparen Sie Zeit und Geld mit unserem kostenlosen Vergleich.
            </p>
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
