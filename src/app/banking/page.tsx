"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"

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

const providerData = [
  {
    name: "Tarifcheck.de",
    rating: 4.5,
    features: [
      "Über 20 Jahre Erfahrung als Vergleichsportal",
      "100% kostenloser und unverbindlicher Vergleich",
      "Kostenlose Girokonten mit bis zu 120€ Neukundenbonus",
      "Mehrfach ausgezeichnet mit 'sehr gut' (Handelsblatt 09/2024)",
      "eKomi Silber Siegel mit 4,5/5 Sternen",
      "Über 3.194 verifizierte Kundenbewertungen",
      "Deutschlands drittgrößtes Vergleichsportal",
      "Bis zu 1.000€ jährlich sparen bei Girokonten und Krediten"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 120€ Neukundenbonus",
    logo: "🏆",
    url: "https://www.tarifcheck.com/W1pi1Fx"
  },
  {
    name: "DKB",
    rating: 4.7,
    features: [
      "Kostenloses Girokonto mit 100€ Prämie (ab 700€ Geldeingang oder unter 28 Jahre)",
      "Visa Kreditkarte ohne Jahresgebühr, weltweit kostenlos bezahlen",
      "Tagesgeldkonto mit attraktiven Zinsen bis 3,5% p.a.",
      "Nachhaltige Bank: Finanziererin erneuerbarer Energien",
      "Online-Broker mit ETF-Sparplänen ab 1,90€ pro Trade",
      "Kinderkonto für finanzielle Bildung der Jüngsten",
      "Baufinanzierung mit flexiblen Konditionen und LBS-Bausparen",
      "DKB-App: Sicher und mobil Bankgeschäfte erledigen"
    ],
    price: "100% kostenlos",
    bonus: "100€ Prämie + 30€ Kreditkarten-Bonus",
    logo: "🏦",
    url: "https://www.awin1.com/awclick.php?gid=441815&mid=11329&awinaffid=2524533&linkid=2273909&clickref="
  },
  {
    name: "Credimaxx",
    rating: 4.9,
    features: [
      "Kredite von 4.000€ bis 50.000€ mit sozialer Verantwortung",
      "Sofortvermittlung durch erfahrene Kreditprofis",
      "Digitaler Abschluss mit WebID oder VideoIdent",
      "Kredit ohne Schufa, Sofortkredit oder Umschuldung möglich",
      "TÜV Kundenzufriedenheit: 1.9 (sehr gut), eKomi 4.9/5",
      "Vermittlung in bis zu 1 Minute",
      "100% Sicherheit mit 256-Bit-SSL-Verschlüsselung",
      "25 Jahre Erfahrung in der Kreditvermittlung"
    ],
    price: "ab 10,99% eff. Zins p.a.",
    bonus: "Schnelle Auszahlung",
    logo: "💳",
    url: "https://www.credimaxx.de/?a_aid=S37C8H62WGM9D"
  },
  {
    name: "auxmoney",
    rating: 4.8,
    features: [
      "Kreditvermittlung auch für Selbstständige und Freiberufler",
      "Kooperation mit SWK Bank für schnelle Abwicklung",
      "eKomi Gold Siegel mit 4,8/5 Sternen",
      "Über 10 Jahre Erfahrung im Kreditmarkt",
      "Schufa-neutrale Kreditanfrage",
      "Kostenlose Sondertilgungen für flexible Rückzahlung",
      "Vergleich von über 20 Banken für beste Konditionen",
      "Nirgendwo-Günstiger-Garantie mit bis zu 300€ Rückerstattung"
    ],
    price: "Bonitätsabhängige Zinsen",
    bonus: "Flexible Kreditkonditionen",
    logo: "💸",
    url: "https://partner.auxmoney.com/go.cgi?pid=10017147&wmid=54&cpid=1&prid=1&subid=&target=Startseite"
  },
  {
    name: "CHECK24",
    rating: 4.7,
    features: [
      "Marktführer mit über 90% Marktabdeckung bei Girokonten und Krediten",
      "Über 25 Testsiege im Finanzvergleich (Handelsblatt 09/2024)",
      "Vergleich von über 300 Girokonten und Kreditangeboten",
      "Nirgendwo-Günstiger-Garantie für beste Konditionen",
      "Kostenlose Beratung durch 300 Finanzexperten (08:00–22:00 Uhr)",
      "Über 98% Kundenzufriedenheit",
      "Vermittlung von Krediten mit Provisionstransparenz",
      "Zusätzliche Vergleiche für Versicherungen, Strom und Gas"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 100€ Cashback",
    logo: "✅",
    url: "https://www.tarifcheck.com/k0zzIEJ"
  },
  {
    name: "Verivox",
    rating: 4.6,
    features: [
      "Kreditvergleich mit über 40% Zinsersparnis im Schnitt",
      "Nirgendwo-Günstiger-Garantie mit bis zu 300€ Rückerstattung",
      "Kostenlose und Schufa-neutrale Kreditanfragen",
      "Über 20 Jahre Erfahrung im Finanzvergleich",
      "TÜV-geprüfte Plattform für Kredite und Finanzen",
      "Kredite ab 0,68% effektiver Jahreszins",
      "Persönliche Beratung unter 06221 79617216"
    ],
    price: "100% kostenlos",
    bonus: "Bis zu 300€ Rückerstattung",
    logo: "⚖️",
    url: "https://www.awin1.com/awclick.php?gid=373003&mid=14797&awinaffid=2524533&linkid=2676754&clickref=",
    metaTitle: "Verivox Kreditvergleich: Bis zu 40% Zinsen sparen 2025",
    metaDescription: "Vergleichen Sie Kredite mit Verivox und sparen Sie bis zu 40% Zinsen. Schufa-neutral, kostenlos und TÜV-geprüft. Jetzt günstige Konditionen sichern!"
  },
  {
    name: "Smava",
    rating: 4.8,
    features: [
      "Kreditvergleich mit über 20 Banken für beste Konditionen",
      "Günstiger geht nicht Garantie mit Top-Zinsen ab 0,68%",
      "Schufa-neutrale und 100% kostenlose Kreditanfragen",
      "Über 300.000 zufriedene Kunden seit 2007",
      "TÜV-zertifizierte Plattform für Kreditvergleiche",
      "Schnelle Auszahlung innerhalb von 48 Stunden",
      "Digitale Antragsprozesse mit VideoIdent"
    ],
    price: "100% kostenlos",
    bonus: "Schnelle Auszahlung",
    logo: "💰",
    url: "https://kreditvergleich.smava.de/coop/antrag?refId=dykN1hEao7j3",
    metaTitle: "Smava Kreditvergleich: Günstige Kredite ab 0,68% 2025",
    metaDescription: "Finden Sie mit Smava den günstigsten Kredit ab 0,68% Zinsen. Schufa-neutral, kostenlos und mit schneller Auszahlung. Jetzt vergleichen und sparen!"
  },
  {
    name: "FINANZCHECK.de",
    rating: 4.8,
    features: [
      "Kreditvergleich mit über 20 Banken für beste Konditionen",
      "Zinsen ab 0,69% effektivem Jahreszins",
      "Schufa-neutrale Anfrage ohne Bonitätsbeeinträchtigung",
      "TÜV-geprüfte Plattform mit 4,8/5 Sternen (eKomi)",
      "Schnelle Auszahlung innerhalb von 24–48 Stunden",
      "Kostenlose Beratung durch Experten (Mo–Fr 8–20 Uhr)",
      "Über 500.000 zufriedene Kunden seit 2011",
      "Flexible Laufzeiten von 12 bis 120 Monaten"
    ],
    price: "100% kostenlos",
    bonus: "Schnelle Auszahlung",
    logo: "💶",
    url: "https://kreditvergleich.finanzcheck.de/coop/antrag?refId=Bz0EGclZjG5L",
    metaTitle: "FINANZCHECK.de Kreditvergleich: Günstige Kredite ab 0,69% 2025",
    metaDescription: "Vergleichen Sie Kredite mit FINANZCHECK.de: Zinsen ab 0,69%, Schufa-neutral, schnelle Auszahlung. Jetzt bis zu 40% Zinsen sparen!"
  }
]

export default function Banking() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scriptsLoaded, setScriptsLoaded] = useState({ main: false, embedTeal: false })

  const handleScriptLoad = (scriptName: string) => {
    setScriptsLoaded((prev) => ({ ...prev, [scriptName]: true }))
    console.log(`${scriptName} script loaded successfully`)
  }

  const handleScriptError = (scriptName: string) => {
    console.error(`${scriptName} script failed to load`)
  }

  // Debugging: Log when both scripts are loaded
  useEffect(() => {
    if (scriptsLoaded.main && scriptsLoaded.embedTeal) {
      console.log("Both FINANZCHECK scripts loaded, initializing teal_embed_iframe")
    }
  }, [scriptsLoaded])

  return (
    <div className="min-h-screen bg-white">
      <Head>
        {/* --- Meta Basics --- */}
        <title>Banking Testsieger September 2025 | Girokonto, Kredite & Tagesgeld</title>
        <meta
          name="description"
          content="Vergleichen Sie kostenlose Girokonten, günstige Kredite, Tagesgeld & Kreditkarten 2025. Top-Banken mit Prämien, hoher Sicherheit & Testsieger-Bewertungen."
        />
        <meta
          name="keywords"
          content="Banking Vergleich 2025, Girokonto kostenlos, Kredit Vergleich, Tagesgeldzinsen 2025, Kreditkarten ohne Jahresgebühr, Baufinanzierung, SmartFinanz"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/banking" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* --- Open Graph --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Banking Testsieger September 2025 | Girokonto, Kredite & Tagesgeld" />
        <meta
          property="og:description"
          content="Finden Sie die besten Girokonten, günstige Kredite & sichere Tagesgeldkonten 2025. Banking vergleichen, sparen & von Prämien profitieren."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/banking" />
        <meta
          property="og:image"
          content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Unser-Vergleichsportal – Banking & Kredite vergleichen" />
        <meta property="og:site_name" content="SmartFinanz" />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Banking Testsieger September 2025 | Girokonto, Kredite & Tagesgeld" />
        <meta
          name="twitter:description"
          content="Kostenlos Girokonto eröffnen, günstigen Kredit finden oder Top-Tagesgeld sichern. Banking-Vergleich 2025 mit Testsiegern."
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
              "name": "Banking Testsieger September 2025 | Girokonto, Kredite & Tagesgeld",
              "url": "https://unser-vergleichsportal.de/banking",
              "description":
                "Vergleichen Sie kostenlose Girokonten, günstige Kredite, Tagesgeld & Kreditkarten 2025. Top-Banken mit Prämien, hoher Sicherheit & Testsieger-Bewertungen.",
              "inLanguage": "de",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Product",
                      "name": "Girokonto",
                      "description": "Kostenloses Girokonto mit EC- und Kreditkarte, Bargeldabhebung & App-Banking.",
                      "offers": { "@type": "Offer", "url": "https://unser-vergleichsportal.de/banking" }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "Product",
                      "name": "Kredit",
                      "description": "Ratenkredit ab 0,68% p.a., Sofortkredit & Umschuldung für Zinsersparnis.",
                      "offers": { "@type": "Offer", "url": "https://unser-vergleichsportal.de/banking" }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "Product",
                      "name": "Tagesgeld",
                      "description": "Tagesgeldzinsen bis 4,0% mit 100% Einlagensicherung.",
                      "offers": { "@type": "Offer", "url": "https://unser-vergleichsportal.de/banking" }
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                      "@type": "Product",
                      "name": "Kreditkarte",
                      "description": "Kostenlose Kreditkarte ohne Jahresgebühr mit Reiseversicherung & Cashback.",
                      "offers": { "@type": "Offer", "url": "https://unser-vergleichsportal.de/banking" }
                    }
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
                  "name": "Welches Girokonto ist wirklich kostenlos?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ein wirklich kostenloses Girokonto erhebt keine Kontoführungsgebühren und bietet kostenlose Bargeldabhebungen. Viele Banken bieten zudem Prämien für Neukunden an."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie finde ich den günstigsten Kredit?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Der günstigste Kredit hängt von der Laufzeit, der Bonität und dem Verwendungszweck ab. Ein Vergleich der effektiven Jahreszinsen hilft, mehrere Hundert Euro zu sparen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Sind Tagesgeldkonten sicher?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, Tagesgeldkonten in der EU sind durch die gesetzliche Einlagensicherung bis 100.000 € pro Kunde und Bank abgesichert."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Lohnt sich eine Kreditkarte ohne Jahresgebühr?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja, kostenlose Kreditkarten sind ideal für den Alltag und Reisen. Viele Anbieter bieten zusätzliche Vorteile wie Cashback oder Versicherungen."
                  }
                }
              ]
            }),
          }}
        />
      </Head>
      <Header />

      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Banking Testsieger September 2025 | Girokonto & Kredite</h1>
            <p className="text-base sm:text-lg mb-8">
              Wir haben für Sie die besten Anbieter gefunden und die Top-Empfehlungen zusammengestellt. Vergleichen Sie mit unseren Rechnern über 300 Finanzprodukte kostenlos und sparen Sie bis zu 1.000€ jährlich. Unsere Testsieger bieten Ihnen erstklassige Konditionen und attraktive Boni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="https://www.tarifcheck.com/k0zzIEJ"
                target="_blank"
                rel="sponsored"
                className="inline-block"
              >
                <Button className="bg-white text-green-600 font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg">
                  KREDIT-ANGEBOT BERECHNEN
                </Button>
              </a>
              <a
                href="https://www.tarifcheck.com/W1pi1Fx"
                target="_blank"
                rel="sponsored"
                className="inline-block"
              >
                <Button className="bg-white text-green-600 font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-lg">
                  KONTO-ANBIETER VERGLEICHEN
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEUE SEKTION FÜR DEN KREDIT-RECHNER (Positionierung korrigiert) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Günstigen Kredit online berechnen</h2>
            {/* Erster Rechner: FINANZCHECK.de Kreditrechner */}
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
              <div id="kredit-rechner-ziel" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Ende der NEUEN SEKTION FÜR DEN KREDIT-RECHNER */}

      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mt-2 text-2xl font-bold">Vermögensaufbau und Vorsorge durch intelligente Geldanlage</h2>
            <div className="mt-4 mb-2 flex justify-center">
              <Button asChild size="lg" className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                <Link
                  href="/trading"
                  aria-label="Zum Trading Vergleich wechseln"
                >
                  <ArrowRight className="inline-block w-4 h-4 mr-2" />
                  Zu den Trading Testsiegern
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hinzugefügte H2-Überschrift über dem zweiten Rechner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Girokonto Vergleich: Jetzt kostenlos wechseln & Prämie sichern</h2>
            {/* Zweiter Rechner: FINANZCHECK.de Girokonto-Vergleich */}
            <div id="teal_embed_iframe" />
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
            Unsere Testsieger für Kredite & Girokonten im Überblick
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {providerData.map((provider) => (
              <Card key={provider.name} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-start p-6 bg-white border-b">
                  <Badge className={`mb-2 text-white font-semibold ${provider.name === "Tarifcheck.de" ? 'bg-yellow-500' : 'bg-green-600'}`}>
                    {provider.name === "Tarifcheck.de" ? "Testsieger & Top-Empfehlung" : "Top-Empfehlung"}
                  </Badge>
                  <CardTitle className="text-2xl font-extrabold text-gray-900 flex items-center">
                    {provider.logo}
                    <span className="ml-2">{provider.name}</span>
                  </CardTitle>
                  <div className="flex items-center mt-2 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(provider.rating) ? 'fill-yellow-500' : 'fill-gray-300'}`}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-gray-600">{provider.rating} / 5</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6 flex flex-col justify-between">
                  <ul className="space-y-3 mb-6 text-gray-700">
                    {provider.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="mb-4 flex justify-between items-center border-t pt-4">
                      <p className="text-base font-medium">Preis / Kosten:</p>
                      <span className="text-lg font-bold text-green-700">{provider.price}</span>
                    </div>
                    <div className="mb-6 flex justify-between items-center">
                      <p className="text-base font-medium">Extra-Bonus:</p>
                      <span className="text-lg font-bold text-red-600">{provider.bonus}</span>
                    </div>
                    <a href={provider.url} target="_blank" rel="sponsored noopener noreferrer" className="block">
                      <Button className="w-full bg-green-600 text-white font-semibold text-base py-3 transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                        Jetzt {provider.name} vergleichen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-green-700">FAQ: Häufig gestellte Fragen zum Banking Vergleich</h2>
            <div className="space-y-4">
              <details className="border-b border-gray-200 py-3">
                <summary className="text-lg font-semibold cursor-pointer text-gray-800 hover:text-green-600 transition-colors">
                  Welches Girokonto ist wirklich kostenlos?
                </summary>
                <p className="mt-2 text-gray-600">
                  Ein wirklich **kostenloses Girokonto** erhebt keine Kontoführungsgebühren und bietet kostenlose Bargeldabhebungen. Achten Sie auf Bedingungen wie einen monatlichen Mindestgeldeingang. Viele Banken bieten zudem attraktive **Prämien für Neukunden** an. Nutzen Sie unseren Vergleich, um die besten Konditionen zu finden.
                </p>
              </details>
              <details className="border-b border-gray-200 py-3">
                <summary className="text-lg font-semibold cursor-pointer text-gray-800 hover:text-green-600 transition-colors">
                  Wie finde ich den günstigsten Kredit?
                </summary>
                <p className="mt-2 text-gray-600">
                  Der günstigste Kredit hängt von der **Laufzeit**, der **Bonität** und dem **Verwendungszweck** ab. Entscheidend ist der **effektive Jahreszins**, da er alle Kosten beinhaltet. Ein Schufa-neutraler Kreditvergleich wie der von FINANZCHECK oder Smava hilft Ihnen, die besten Angebote mehrerer Banken zu vergleichen und so mehrere Hundert Euro zu sparen.
                </p>
              </details>
              <details className="border-b border-gray-200 py-3">
                <summary className="text-lg font-semibold cursor-pointer text-gray-800 hover:text-green-600 transition-colors">
                  Sind Tagesgeldkonten sicher?
                </summary>
                <p className="mt-2 text-gray-600">
                  Ja, Tagesgeldkonten bei Banken in der Europäischen Union (EU) sind durch die gesetzliche **Einlagensicherung bis zu 100.000 €** pro Kunde und Bank abgesichert. Dies bietet ein hohes Maß an Sicherheit für Ihr Erspartes.
                </p>
              </details>
              <details className="border-b border-gray-200 py-3">
                <summary className="text-lg font-semibold cursor-pointer text-gray-800 hover:text-green-600 transition-colors">
                  Lohnt sich eine Kreditkarte ohne Jahresgebühr?
                </summary>
                <p className="mt-2 text-gray-600">
                  Absolut. **Kostenlose Kreditkarten** sind ideal für den Alltag und Reisen, da sie keine fixen Gebühren verursachen. Viele Top-Anbieter bieten trotzdem zusätzliche Vorteile wie kostenlose Abhebungen im Ausland, Cashback oder Reiseversicherungen. Ein Vergleich lohnt sich immer!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-Komponente oder direkter Footer-Inhalt (hier weggelassen für Kürze) */}

      {/* OPTIMIERTE SCRIPTS FÜR BESSERE LADEZEITEN:
        strategy="lazyOnload" stellt sicher, dass die Skripte erst geladen werden,
        wenn die Hauptinhalte der Seite geladen sind und die Seite interaktiv wird,
        was die initiale Ladezeit verbessert.
      */}
      <Script
        src="https://code.finanzcheck.de/kreditvergleich/rechner/js/embed.js"
        strategy="lazyOnload"
        onLoad={() => handleScriptLoad('main')}
        onError={() => handleScriptError('main')}
        async
      />
      <Script
        id="embed_teal"
        data-defer
        src="https://www.finanzcheck.de/teal/js/embed_teal.js"
        strategy="lazyOnload" // <-- KORRIGIERT: 'lazyOnLoad' zu 'lazyOnload' geändert
        onLoad={() => handleScriptLoad('embedTeal')}
        onError={() => handleScriptError('embedTeal')}
      />
      <Script
        id="kredit-rechner-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof teal_embed_iframe !== 'undefined') {
              teal_embed_iframe.init({
                target: '#teal_embed_iframe',
                type: 'girokonto'
              });
            }
          `,
        }}
      />
      <Script
        id="girokonto-rechner-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof FinanzcheckRechner !== 'undefined') {
              FinanzcheckRechner.init({
                ziel: 'kredit-rechner-ziel',
                ziel_form: 'antrag',
                refId: 'Bz0EGclZjG5L',
                betrag: 10000,
                laufzeit: 84
              });
            }
          `,
        }}
      />
    </div>
  )
}
