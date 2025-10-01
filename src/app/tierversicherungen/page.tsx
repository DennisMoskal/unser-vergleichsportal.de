"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

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

// Header-Komponente
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("tierversicherungen")

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
                    { key: 'tierversicherungen', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
                    { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
                    { key: 'versicherungen', label: 'Versicherungen', url: '/versicherungen', isInternal: true },
                  ].map(({ key, label, url, isInternal }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                    ].map(({ key, label, url }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                    ].map(({ key, label, url }) => (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                  ].map(({ key, label, url }) => (
                    <li key={key}>
                      <Link
                        href={url}
                        className="inline-block px-3 py-1 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                  className="w-auto bg-green-600 text-white font-medium text-sm sm:text-base px-4 py-2 transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
      <section className="bg-white py-4 border-b" id="tierversicherungen">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-base">
            {[
              { key: 'banking', label: 'Banking', url: '/banking', isInternal: true },
              { key: 'tierversicherungen', label: 'Haustierversicherung', url: '/tierversicherungen', isInternal: true },
              { key: 'trading', label: 'Trading', url: '/trading', isInternal: true },
              { key: 'versicherungen', label: 'Versicherungen', url: '/versicherungen', isInternal: true },
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
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
                    className="block px-3 py-2 font-medium transition-all duration-300 ease-in-out text-sm sm:text-base rounded-lg hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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

// Inline providerData für Tierversicherungen
const providerData = [
  {
    name: "Agila",
    rating: 4.7,
    features: [
      "Umfassender Schutz für Hunde und Katzen",
      "Bis zu 100% Kostenerstattung für Operationen",
      "Testsieger bei Stiftung Warentest (08/2025)",
      "Keine Wartezeit bei Unfällen",
      "24/7 Online-Schadenmeldung",
      "Flexible Tarife für junge und ältere Tiere",
      "Kostenlose Erstberatung",
      "Über 20 Jahre Erfahrung",
    ],
    price: "ab 9,90€/Monat",
    bonus: "10% Rabatt bei Online-Abschluss",
    logo: "🐶",
    url: "https://www.tarifcheck.com/5dM0KnS",
    metaTitle: "Agila Tierversicherung: Testsieger für Hunde und Katzen 2025",
    metaDescription: "Agila bietet umfassenden Schutz für Hunde und Katzen mit bis zu 100% Kostenerstattung. Jetzt Testsieger-Tarife vergleichen!",
    isTopRecommendation: true,
  },
  {
    name: "Figo",
    rating: 4.6,
    features: [
      "Tierversicherung für Hunde, Katzen und Pferde",
      "Bis zu 5.000€ jährliche Deckung",
      "Schnelle Schadenbearbeitung innerhalb 48h",
      "eKomi-Bewertung: 4,6/5 Sterne",
      "Flexible Selbstbeteiligung (0–20%)",
      "Zusatzschutz für Zahnbehandlungen",
      "Online-Tarifrechner für individuelle Angebote",
      "Kundenservice 7 Tage die Woche",
    ],
    price: "ab 8,50€/Monat",
    bonus: "Kostenlose Erstberatung",
    logo: "🐾",
    url: "https://www.awin1.com/awclick.php?gid=367217&mid=13775&awinaffid=2524533&linkid=3075009&clickref=",
    metaTitle: "Petplan Tierversicherung: Flexible Tarife für Haustiere 2025",
    metaDescription: "Petplan bietet flexible Tierversicherungen für Hunde, Katzen und Pferde mit schneller Schadenbearbeitung. Jetzt vergleichen!",
    isTopRecommendation: true,
  },
  {
    name: "HanseMerkur",
    rating: 4.5,
    features: [
      "Tierversicherung ohne Altersbegrenzung",
      "Bis zu 100% Kostenerstattung für Behandlungen",
      "Testsieger bei Focus Money (07/2025)",
      "Einfacher Online-Abschluss",
      "Schutz für Vorsorgeuntersuchungen",
      "24/7 Notfall-Hotline",
      "Kombi-Tarife mit Haftpflicht möglich",
      "Über 150 Jahre Erfahrung",
    ],
    price: "ab 7,90€/Monat",
    bonus: "5% Rabatt bei Jahreszahlung",
    logo: "🐱",
    url: "https://www.awin1.com/awclick.php?gid=452030&mid=11705&awinaffid=2524533&linkid=3283544&clickref=",
    metaTitle: "HanseMerkur Tierversicherung: Top-Schutz ohne Altersbegrenzung 2025",
    metaDescription: "HanseMerkur bietet Tierversicherungen ohne Altersbegrenzung mit Top-Bewertungen. Jetzt Tarife vergleichen und sparen!",
    isTopRecommendation: true,
  },
  {
    name: "CHECK24 Tierversicherung",
    rating: 4.8,
    features: [
      "Vergleich von über 50 Tierversicherungen",
      "100% kostenloser und unverbindlicher Vergleich",
      "Testsieger in der Kategorie Tierversicherung (10/2025)",
      "eKomi Gold Siegel mit 4,8/5 Sternen",
      "Bis zu 50% Ersparnis durch Vergleich",
      "Kostenlose Beratung durch Experten",
      "Schneller Online-Abschluss",
      "Transparente Tarifübersicht",
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 50€ Cashback",
    logo: "✅",
    url: "https://www.tarifcheck.com/5dM0KnS",
    metaTitle: "CHECK24 Tierversicherung: Testsieger-Vergleich 2025",
    metaDescription: "Vergleichen Sie über 50 Tierversicherungen mit CHECK24. Kostenlos, transparent und mit Top-Bewertungen. Jetzt sparen!",
    isTopRecommendation: true,
  },
  {
    name: "Allianz Tierversicherung",
    rating: 4.6,
    features: [
      "Schutz für Hunde, Katzen und Pferde",
      "Bis zu 6.000€ jährliche Deckung",
      "eKomi-Bewertung: 4,6/5 Sterne",
      "Schneller Schadenservice (24/7)",
      "Flexible Tarife mit Zusatzoptionen",
      "Persönliche Beratung in Filialen",
      "Online-Abschluss mit VideoIdent",
      "Über 100 Jahre Erfahrung",
    ],
    price: "ab 10,50€/Monat",
    bonus: "Treuebonus für Bestandskunden",
    logo: "🛡️",
    url: "https://www.tarifcheck.com/5dM0KnS",
    metaTitle: "Allianz Tierversicherung: Zuverlässiger Schutz für Haustiere 2025",
    metaDescription: "Allianz bietet zuverlässigen Schutz für Haustiere mit flexiblen Tarifen. Jetzt vergleichen und Treuebonus sichern!",
    isTopRecommendation: true,
  },
  {
    name: "hepster",
    rating: 4.6,
    features: [
      "Flexible Tierversicherungen für Katzen und Hunde",
      "100% digitale Buchung und Schadenmeldung",
      "Monats- oder Jahresabo ohne Selbstbeteiligung",
      "Trusted Shops zertifiziert (4,6/5 Sterne)",
      "Schutz für Vorsorge und Operationen",
      "Schnelle Auszahlung innerhalb 48h",
      "Kombi mit Fahrrad- oder Reiseversicherung",
      "14 Tage kostenlos widerrufbar",
    ],
    price: "ab 5,99€/Monat",
    bonus: "Kostenloser Tarifrechner",
    logo: "🐾",
    url: "https://www.awin1.com/awclick.php?gid=458099&mid=17549&awinaffid=2524533&linkid=3870251&clickref=",
    metaTitle: "hepster Tierversicherung: Flexible Tarife für Haustiere 2025",
    metaDescription: "hepster bietet flexible Tierversicherungen mit digitaler Abwicklung. Jetzt Tarife vergleichen und sparen!",
    isTopRecommendation: true,
  },
]

export default function Tierversicherungen() {
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
  {/* --- Meta Basics --- */}
  <title>Beste Tierversicherungen Oktober 2025 | Hunde, Katzen & Welpen</title>
  <meta
    name="description"
    content="Vergleichen Sie die besten Tierversicherungen 2025 für Hunde, Katzen & Welpen. Testsieger wie Agila, Petplan, HanseMerkur, CHECK24, Allianz & hepster. Sparen Sie bis zu 50%."
  />
  <meta
    name="keywords"
    content="Tierversicherung 2025, Hundeversicherung, Katzenversicherung, Welpenversicherung, OP-Versicherung Hund, Agila, Petplan, HanseMerkur, CHECK24, Allianz, hepster"
  />
  <link rel="canonical" href="https://unser-vergleichsportal.de/tierversicherungen" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="UTF-8" />

  {/* --- Open Graph --- */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Beste Tierversicherungen Oktober 2025 | Hunde, Katzen & Welpen" />
  <meta
    property="og:description"
    content="Tierversicherungen im Vergleich: Agila, Petplan, HanseMerkur, CHECK24, Allianz & hepster. Bis zu 50% sparen – umfassender Schutz für Hunde, Katzen & Welpen."
  />
  <meta property="og:url" content="https://unser-vergleichsportal.de/tierversicherungen" />
  <meta
    property="og:image"
    content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Unser-Vergleichsportal – Beste Tierversicherungen" />
  <meta property="og:site_name" content="SmartFinanz" />

  {/* --- Twitter --- */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Beste Tierversicherungen Oktober 2025 | Hunde, Katzen & Welpen" />
  <meta
    name="twitter:description"
    content="Beste Tierversicherungen Oktober 2025 | Hunde- und Katzenversicherung im Vergleich"
  />
  <meta
    name="twitter:image"
    content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
  />
  <meta name="twitter:site" content="@unservergleich" />

  {/* ---- Schema.org: Organization ---- */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SmartFinanz – unser-vergleichsportal.de",
        "url": "https://unser-vergleichsportal.de",
        "logo": "https://unser-vergleichsportal.de/logo.png",
        "brand": { "@type": "Brand", "name": "unser-vergleichsportal.de" },
        "sameAs": [
          "https://www.linkedin.com/in/unservergleichsportalde",
          "https://x.com/unservergleich",
          "https://medium.com/@unser-vergleichsportal.de",
          "https://www.facebook.com/profile.php?id=61580338356626"
        ],
        "contactPoint": [{
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["de"],
          "url": "https://unser-vergleichsportal.de/kontakt"
        }]
      }),
    }}
  />

  {/* ---- Schema.org: WebPage + ItemList ---- */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Beste Tierversicherungen Oktober 2025 | Hunde, Katzen & Welpen",
        "url": "https://unser-vergleichsportal.de/tierversicherungen",
        "description":
          "Vergleichen Sie die besten Tierversicherungen 2025 für Hunde, Katzen & Welpen. Testsieger wie Agila, Petplan, HanseMerkur, CHECK24, Allianz & hepster. Sparen Sie bis zu 50%.",
        "inLanguage": "de",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": { "@type": "Product", "name": "Agila Tierversicherung", "description": "Umfassender Schutz für Hunde & Katzen. Bis zu 100% Kostenerstattung für Operationen.", "offers": { "@type": "Offer", "url": "https://unser-vergleichsportal.de/tierversicherungen" } }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": { "@type": "Product", "name": "Petplan Tierversicherung", "description": "Versicherung für Hunde, Katzen & Welpen. Schnelle Schadenbearbeitung & flexible Tarife.", "offers": { "@type": "Offer", "url": "https://unser-vergleichsportal.de/tierversicherungen" } }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": { "@type": "Product", "name": "HanseMerkur Tierversicherung", "description": "Tierversicherung ohne Altersbegrenzung. Vorsorgeuntersuchungen & Notfall-Hotline.", "offers": { "@type": "Offer", "url": "https://unser-vergleichsportal.de/tierversicherungen" } }
            }
          ]
        }
      }),
    }}
  />

  {/* ---- Schema.org: FAQPage ---- */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Welche Tierversicherungen gibt es?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Es gibt Hundeversicherungen, Katzenversicherungen, Welpenversicherungen sowie OP-Versicherungen. Sie decken u.a. Operationen, Tierarztkosten oder Haftpflichtschäden ab."
            }
          },
          {
            "@type": "Question",
            "name": "Ab wann lohnt sich eine Tierversicherung?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Eine Tierversicherung lohnt sich besonders bei jungen Tieren, da die Beiträge günstiger sind und hohe Tierarztkosten später abgesichert sind."
            }
          },
          {
            "@type": "Question",
            "name": "Übernimmt die Versicherung auch Routineuntersuchungen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Das hängt vom Tarif ab. Einige Anbieter übernehmen Vorsorgeuntersuchungen, Impfungen oder Zahnbehandlungen. Ein Vergleich lohnt sich."
            }
          },
          {
            "@type": "Question",
            "name": "Wie hoch ist die Erstattung bei einer OP-Versicherung?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Viele Tierversicherungen erstatten zwischen 80% und 100% der Operationskosten. Die Deckungssumme und Leistungen variieren je nach Anbieter."
            }
          }
        ]
      })
    }}
  />
     </Head>

      <Header />

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Beste Tierversicherungen Oktober 2025 | Hunde- und Katzenversicherung im Vergleich
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Vergleichen Sie die besten Tierversicherungen für Hunde und Katzen mit SmartFinanz. Sparen Sie bis zu 50%
              mit Testsiegern wie Agila, Petplan, HanseMerkur, CHECK24 und Allianz. Finden Sie flexible Tarife mit
              umfassendem Schutz für Operationen, Behandlungen und Vorsorge.
            </p>
            
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            So finden Sie die passende Tierversicherung
          </h2>
          
          {/* Trust Signals hinzugefügt - genau wie in Code 1 */}
          <div className="mt-6 mb-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <Image
              src="/images/5.png"
              alt="Vertrauenssignal 5"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/1.png"
              alt="Vertrauenssignal 1"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/2.png"
              alt="Vertrauenssignal 2"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/3.png"
              alt="Vertrauenssignal 3"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/4.png"
              alt="Vertrauenssignal 4"
              width={80}
              height={40}
              className="opacity-100 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Tipps für einen erfolgreichen Tierversicherungsvergleich
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Vergleichen Sie Angebote:</strong> Nutzen Sie unseren kostenlosen Vergleich, um über 50 Tierversicherungen von Top-Anbietern wie CHECK24, Agila und Petplan zu prüfen.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Achten Sie auf Bewertungen:</strong> Vertrauen Sie auf verifizierte Kundenbewertungen (z. B. eKomi 4,8/5 für CHECK24) für Ihre Entscheidung.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Prüfen Sie Leistungen:</strong> Achten Sie auf Deckung für Operationen, Vorsorge und flexible Selbstbeteiligung bei Anbietern wie HanseMerkur und hepster.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Überprüfen Sie Vertragsbedingungen:</strong> Lesen Sie das Kleingedruckte, um Altersbegrenzungen oder Ausschlüsse zu vermeiden.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Jährlicher Vergleich lohnt sich:</strong> Tarife ändern sich regelmäßig. Ein jährlicher Vergleich spart bis zu 200€.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Nutzen Sie digitale Tools:</strong> Apps von Anbietern wie hepster ermöglichen schnelle Schadenmeldungen und Tarifanpassungen.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Testsieger Tierversicherungsvergleich Oktober 2025
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedProviders.map((provider) => (
              <Card
                key={provider.name}
                className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative"
              >
                {provider.isTopRecommendation && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs sm:text-sm transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-500 hover:to-yellow-600 z-10">
                    Top Empfehlung
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-lg sm:text-xl font-bold">{provider.name}</CardTitle>
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
                    <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-xs sm:text-sm">
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
                    <Button className="w-full mt-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                      ZUM ANBIETER UND SPAREN*
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
            Ihr Weg zur besten Tierversicherung 2025
          </h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Hundeversicherung für umfassenden Schutz
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Tierversicherung zum Beispiel für Hunde deckt Tierarztkosten für Unfälle, Operationen und Behandlungen. Ideal für
              Hundebesitzer, die hohe Kosten vermeiden möchten. Ebenfalls zu empfehlen ist der Abschluss einer Hundehaftpflichtversicherung um Sachschäden abzudecken.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bis zu 100% Kostenerstattung für Operationen
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz bei Unfällen, Sachschäden und Krankheiten
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Flexible Selbstbeteiligung (0–20%)
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Spartipp:</strong> Online-Abschlüsse bei Anbietern wie Agila sparen bis zu 10%. Nutzen Sie
              Tarifrechner für maßgeschneiderte Angebote.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.awin1.com/awclick.php?gid=458098&mid=17549&awinaffid=2524533&linkid=3870250&clickref=" target="_blank" rel="sponsored">
                <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  JETZT HUNDEKRANKENVERSICHERUNG ABSCHLIEẞEN!
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Katzenversicherung für Vorsorge und Behandlungen
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Eine Katzenversicherung schützt vor hohen Tierarztkosten, z. B. für chronische Krankheiten oder
              Vorsorgeuntersuchungen.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz für Vorsorgeuntersuchungen
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bis zu 5.000€ jährliche Deckung
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schnelle Schadenbearbeitung
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              <strong>Wichtiger Hinweis:</strong> Prüfen Sie, ob Vorsorgeleistungen enthalten sind, um langfristig zu
              sparen.
            </p>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.awin1.com/awclick.php?gid=458100&mid=17549&awinaffid=2524533&linkid=3870249&clickref=" target="_blank" rel="sponsored">
                <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  KATZEN-OP-VERSICHERUNG ABSCHLIEẞEN!
                </Button>
              </a>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Welpenversicherung für spezielle Bedürfnisse
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Welpenversicherungen decken Tierarztkosten für Unfälle, Operationen und Vorsorgeuntersuchungen, speziell für junge Hunde.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schutz für Operationen und Vorsorge
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bis zu 100% Kostenerstattung
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Flexible Tarife für junge Hunde
              </li>
            </ul>
            <div className="mt-6 mb-8 text-center">
              <a href="https://www.awin1.com/awclick.php?gid=367217&mid=13775&awinaffid=2524533&linkid=3075003&clickref=" target="_blank" rel="sponsored">
                <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  EINE WELPENVERSICHERUNG ABSCHLIEẞEN!
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
            Häufige Fragen zu Tierversicherungen
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Antworten zu Ihre Tierversicherungsfragen
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Was deckt eine Tierversicherung?</strong> Sie deckt Tierarztkosten für Unfälle, Operationen, Behandlungen und teilweise Vorsorge, je nach Tarif.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Wie viel kostet eine Tierversicherung?</strong> Kosten variieren: Hunde ab 9,90€/Monat, Katzen ab 7,90€/Monat, Welpen ab 8,50€/Monat.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Gibt es Altersbegrenzungen?</strong> Einige Anbieter wie HanseMerkur haben keine Altersbegrenzung, andere schränken ältere Tiere ein.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Wie funktioniert die Schadenmeldung?</strong> Meist online oder per App, z. B. bei hepster, mit schneller Auszahlung innerhalb 48h.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Ist eine Tierversicherung sinnvoll?</strong> Ja, besonders für Rassen mit hohen Krankheitsrisiken oder teuren Behandlungen.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Kann ich die Versicherung wechseln?</strong> Ja, prüfen Sie die Kündigungsfrist (meist 1–3 Monate) und lassen Sie den neuen Anbieter die Kündigung übernehmen.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 mt-1" />
                <span><strong>Welche Zusatzleistungen gibt es?</strong> Vorsorge, Zahnbehandlungen oder Haftpflichtschutz sind oft optional einschließbar.</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <a href="https://www.check24.de/tierversicherung/" target="_blank" rel="sponsored">
              <Button className="w-full sm:w-auto bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                ALLE TIERVERSICHERUNGEN VERGLEICHEN!
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Schnell und einfach zur passenden Tierversicherung
            </h2>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Finden Sie mit wenigen Klicks die besten Tarife für Ihre Haustiere. Sparen Sie Zeit und Geld mit unserem
              kostenlosen Vergleich.
            </p>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
              </div>
            </div>
            <div>
              <span className="font-semibold mb-3 text-lg sm:text-xl">Finanzprodukte</span>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
              <span className="font-semibold mb-3 text-lg sm:text-xl">Weitere Produkte</span>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
                <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
              <span className="font-semibold mb-3 text-lg sm:text-xl">Unternehmen</span>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
              <span className="font-semibold mb-3 text-lg sm:text-xl">Rechtliches</span>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
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
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              © 2025 SmartFinanz unser-vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
            </p>
            <Link href="/" aria-label="Zurück zur Startseite">
              <Button
                className="bg-green-600 text-white font-medium text-sm sm:text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
              >
                Zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
