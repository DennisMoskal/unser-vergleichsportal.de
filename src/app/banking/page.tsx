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
            })
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

      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mt-2 text-2xl font-bold">Vermögensaufbau und Vorsorge durch intelligente Geldanlage</h2>
            <div className="mt-4 mb-2 flex justify-center">
              <Button asChild size="lg" className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                <Link
                  href="/trading"
                  aria-label="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                  title="Mit Ersparnissen Vermögen aufbauen – jetzt Broker vergleichen"
                >
                  INVESTMENT-ANBIETER UND DEPOTŚ VERGLEICHEN<ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12">So finden Sie das beste Girokonto und den optimalen Kredit</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2 text-green-600">Vergleich von Finanzprodukten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Nutzen Sie unseren kostenlosen Vergleich, um die besten Girokonten und Kredite zu finden. Über 300 Angebote von Top-Unternehmen stehen Ihnen zur Verfügung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Kundenbewertungen prüfen</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Unsere Anbieter haben Top-Bewertungen (z. B. eKomi 4,9/5). Vertrauen Sie auch auf verifizierte Kundenmeinungen für Ihre Entscheidung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Konditionen analysieren</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Achten Sie auf kostenlose Girokonten, Schufa-neutrale Kreditanfragen und flexible Rückzahlungsoptionen.</li>
            </ul>
            <h2 className="text-3xl font-bold mb-6">Kostenloses Girokonto finden</h2>
            <h3 className="text-lg font-bold mb-2 text-green-600">Wichtige Kriterien für ein kostenloses Girokonto</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Ein wirklich kostenloses Girokonto verzichtet auf Kontoführungsgebühren, Gebühren für die EC-Karte und bietet kostenlose Überweisungen. Achten Sie auf versteckte Kosten bei Bargeldabhebungen oder Auslandsüberweisungen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Spartipp für Girokonten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Die empfohlenen kostenlosen Girokonten sparen Ihnen bis zu 200€ jährlich im Vergleich zu Filialbanken. Zusätzlich locken viele Anbieter mit Neukunden-Boni von bis zu 120€.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Eigenschaften der Testsieger-Girokonten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bedingungslos kostenlose Kontoführung</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenlose EC- und Kreditkarte</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenloses Bargeldabheben deutschlandweit</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Mobile Banking App mit allen Funktionen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Dispozinsen unter 7% p.a.</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.tarifcheck.com/W1pi1Fx" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  GIROKONTEN VERGLEICHEN
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Tagesgeldkonto für sichere Geldanlage</h2>
            <h3 className="text-lg font-bold mb-2 text-green-600">Aktuelle Tagesgeldzinsen 2025</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Die verglichenen Tagesgeldkonten bieten derzeit bis zu 4,00% Zinsen und sind mit 100% Einlagensicherung abgesichert. Täglich verfügbar, ohne Laufzeitbindung – ideal für Notreserven und kurzfristige Geldanlage.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Top-Tagesgeldkonten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bis zu 4,00% Zinsen für Neukunden</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> 100.000€ Einlagensicherung pro Bank</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Täglich verfügbar, keine Kündigung nötig</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Wichtige Hinweise zu Tagesgeld</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Zinsbindung oft nur 3–12 Monate</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Danach meist niedrigere Bestandskundenzinsen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Regelmäßiger Vergleich lohnt sich</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.awin1.com/awclick.php?gid=450648&mid=11329&awinaffid=2524533&linkid=3268909&clickref=" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  TAGESGELD KONTO ERÖFFNEN
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Kostenlose Kreditkarte ohne Jahresgebühr finden</h2>
            <h3 className="text-lg font-bold mb-2 text-green-600">Klassische Visa/Mastercard ohne Gebühren</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Weltweit akzeptiert</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenlose Bargeldabhebung im Ausland</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Online-Shopping ohne Extragebühren</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Reiseversicherungen inklusive</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> 0€ Jahresgebühr dauerhaft</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Moderne digitale Kreditkarten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Apple Pay / Google Pay ready</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Echtzeit-Benachrichtigungen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Ausgabenkontrolle per App</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Virtuelle Kartennummern</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenlos + Cashback möglich</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Reise- und Bonuskarten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Meilen oder Punkte sammeln</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Lounge-Zugang an Flughäfen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Umfassende Reiseversicherung</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Priority Pass inklusive</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Viele Premium-Features ohne Zusatzkosten</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.tarifcheck.com/NMXe4cX" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  JETZT KREDITKARTEN VERGLEICHEN
                </Button>
              </a>
            </div>
            <h2 className="text-3xl font-bold mb-6">Günstigen Kredit online berechnen</h2>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-green-600">Optimaler Ratenkredit für Ihre Wünsche</h3>
                <ul className="list-none text-base mb-6">
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Für Anschaffungen von 1.000€ bis 120.000€</li>
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Zinsen ab 0,68% p.a. bei bester Bonität</li>
                </ul>
                <h3 className="text-lg font-bold mb-2 text-green-600">Schneller Sofortkredit</h3>
                <ul className="list-none text-base mb-6">
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Schnelle Auszahlung binnen 24h möglich</li>
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Digitaler Abschluss mit VideoIdent-Verfahren</li>
                </ul>
                <h3 className="text-lg font-bold mb-2 text-green-600">Umschuldung für Zinsersparnis</h3>
                <ul className="list-none text-base mb-6">
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bestehende Kredite zusammenfassen</li>
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bis zu 40% der Zinsen sparen</li>
                </ul>
              </div>
              <div className="flex-1">
                <Script
                  src="https://frame.finanzcheck.de/main.js"
                  strategy="afterInteractive"
                  onLoad={() => handleScriptLoad("main")}
                  onError={() => handleScriptError("main")}
                />
                <Script
                  src="https://widget.finanzcheck.de/embedTeal.js"
                  strategy="afterInteractive"
                  onLoad={() => handleScriptLoad("embedTeal")}
                  onError={() => handleScriptError("embedTeal")}
                />
                <div
                  id="teal-embed-iframe"
                  className="w-full min-h-[600px] bg-white"
                  style={{ minHeight: "600px" }}
                ></div>
                {scriptsLoaded.main && scriptsLoaded.embedTeal && (
                  <Script id="teal-embed-script" strategy="afterInteractive">
                    {`
                      try {
                        teal_embed_iframe({
                          "advertisementId": "WqzbMCwyzPe8",
                          "elementId": "teal-embed-iframe",
                          "data": {
                            "amount": 30000,
                            "term": 84,
                            "purpose": "OTHER",
                            "formConfig": "ddf",
                            "palette": {
                              "primary": {
                                "light": "#E8EEF5",
                                "main": "#26a269",
                                "dark": "#26a269",
                                "contrastText": "#fff"
                              },
                              "secondary": {
                                "light": "#FCE9CD",
                                "main": "#26a269",
                                "dark": "#26a269",
                                "contrastText": "rgba(0, 0, 0, 0.87)"
                              }
                            }
                          },
                          "entryPoint": "first",
                          "version": "v2"
                        });
                        console.log("teal_embed_iframe initialized successfully");
                      } catch (error) {
                        console.error("Error initializing teal_embed_iframe:", error);
                      }
                    `}
                  </Script>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">Testsieger Girokonto-Vergleich September 2025</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {(provider.name === "Tarifcheck.de" || provider.name === "CHECK24" || provider.name === "DKB" || provider.name === "Credimaxx" || provider.name === "auxmoney" || provider.name === "Verivox" || provider.name === "Smava" || provider.name === "FINANZCHECK.de") && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-base transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-yellow-500 hover:to-yellow-600 z-10">
                    Top Empfehlung
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-xl font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-base font-medium text-gray-600">{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="text-center border-b pb-2 mb-4">
                    <p className="text-xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-1 border-green-200 text-base text-green-700">{provider.bonus}</Badge>
                  </div>
                  <ul className="space-y-1 flex-1 overflow-auto">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-base">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={provider.url} 
                    target={provider.url.startsWith('http') ? '_blank' : '_self'}
                    rel={provider.url.startsWith('http') ? 'sponsored' : undefined}
                  >
                    <Button className="w-full bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700 mt-auto">
                      ZUM ANBIETER UND SPAREN*
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-base text-gray-600 p-4">
            <p>
              *Wir erhalten eine Provision für Käufe über diese Links.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Baufinanzierung für Ihr Eigenheim</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2 text-green-600">Wichtige Aspekte der Baufinanzierung</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> <strong>Eigenkapital:</strong> Mindestens 20% der Kaufsumme empfohlen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> <strong>Zinsbindung:</strong> 10–15 Jahre für Planungssicherheit</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> <strong>Tilgung:</strong> Initial 2–4% für zügige Rückzahlung</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> <strong>Nebenkosten:</strong> 10–15% zusätzlich zur Kaufsumme</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> <strong>Sondertilgungen:</strong> Jährlich 5–10% kostenfrei möglich</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Aktuelle Bauzinsen 2025</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Die Zinsprognose für 2025 zeigt moderate Entwicklungen bei Bauzinsen. Nutzen Sie die aktuell noch günstigen Konditionen für Ihre Finanzierung.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Spartipp für Baufinanzierung</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Schon 0,1% Zinsunterschied sparen bei 300.000€ über 20 Jahre etwa 4.800€! Vergleichen Sie daher unbedingt mehrere Angebote.</li>
            </ul>
            <div className="mt-8 mb-10 text-center">
              <a 
                href="https://www.tarifcheck.com/gH6DahL" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  BAUFINANZIERUNGEN VERGLEICHEN
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Online Banking: Sicher und bequem</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2 text-green-600">Kontoeröffnung online</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Girokonto online in 5 Minuten beantragen. VideoIdent-Verfahren macht Postweg überflüssig – alles bequem von zu Hause.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Mobile Banking App</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Mobile Banking App installieren. Alle Bankgeschäfte jederzeit und überall per Smartphone erledigen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Sicheres Login</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Login mit PIN oder Fingerabdruck. Alle Transaktionen durch TAN-Verfahren oder biometrische Freigabe geschützt.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Bankgeschäfte online verwalten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Überweisungen, Daueraufträge, Kontostände prüfen – alles 24/7 verfügbar ohne Öffnungszeiten.</li>
            </ul>
            <h2 className="text-3xl font-bold mb-6">Häufige Fragen zum Online Banking</h2>
            <h3 className="text-lg font-bold mb-2 text-green-600">Wie sicher ist Online Banking?</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Ja, moderne Online Banking Systeme verwenden 256-Bit-SSL-Verschlüsselung und Zwei-Faktor-Authentifizierung. Banken sind durch Einlagensicherung bis 100.000€ geschützt.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Welche TAN-Verfahren gibt es?</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> pushTAN per App, SMS-TAN oder chipTAN mit Lesegerät. Moderne Verfahren wie Fingerabdruck oder Face-ID ersetzen zunehmend klassische TANs.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Können alle Bankgeschäfte online erledigt werden?</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> 95% aller Bankgeschäfte sind online möglich: Überweisungen, Daueraufträge, Kontoeröffnung, Kreditanträge. Nur wenige Services benötigen noch Filialbesuch.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Was kostet Online Banking?</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bei den meisten Direktbanken ist Online Banking komplett kostenlos. Auch viele Filialbanken bieten Online Services ohne Extragebühren an.</li>
            </ul>
            <div className="mt-8 mb-10 text-center">
              <a 
                href="https://www.tarifcheck.com/W1pi1Fx" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  JETZT ONLINE-BANKING BEGINNEN
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Kredit umschulden und Depot eröffnen</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2 text-green-600">Kredit umschulden für Ersparnisse</h3>
            <h3 className="text-lg font-bold mb-2 text-green-600">Wann lohnt sich eine Umschuldung?</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bei Zinsdifferenz von über 1% oder mehreren laufenden Krediten. Besonders alte Kredite mit hohen Zinsen sollten abgelöst werden.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Ersparnis durch Umschuldung</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> <strong>Bis zu 40% der Zinskosten</strong> bei geschickter Umschuldung. Bei 20.000€ Kredit können das über 2.000€ sein.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Tipp für Umschuldung</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Schufa-neutrale Anfrage ermöglicht Vergleich ohne Bonitäts-Verschlechterung!</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.tarifcheck.com/k0zzIEJ" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  UMSCHULDUNG BERECHNEN
                </Button>
              </a>
            </div>
            <h3 className="text-lg font-bold mb-2 text-green-600">Depot für langfristigen Vermögensaufbau</h3>
            <h3 className="text-lg font-bold mb-2 text-green-600">Vorteile eines Depots</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Aktien und ETFs bieten langfristig höhere Renditen als Tagesgeld. Schon ab 25€ monatlich können Sie in ETF-Sparpläne investieren.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Kostenlose Depotführung</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Viele Online-Broker bieten <strong>kostenlose Depotführung</strong> und günstige ETF-Sparpläne ab 0€ Ordergebühr.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Wichtige Hinweise für Depots</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Nur investieren, was Sie langfristig entbehren können. Risiko streuen!</li>
            </ul>
            <div className="mt-8 mb-10 text-center">
              <a 
                href="/trading" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  JETZT DEPOT`S VERGLEICHEN
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Kostenlose Kreditkarten im Vergleich 2025</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2 text-green-600">Beste kostenlose Kreditkarten finden</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Eine gute Kreditkarte sollte keine Jahresgebühr kosten und trotzdem alle wichtigen Features bieten. Hier finden Sie die besten kostenlosen Kreditkarten mit attraktiven Zusatzleistungen.</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Klassische Visa/Mastercard ohne Gebühren</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Weltweit akzeptiert</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenlose Bargeldabhebung im Ausland</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Online-Shopping ohne Extragebühren</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Reiseversicherungen inklusive</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> 0€ Jahresgebühr dauerhaft</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Moderne digitale Kreditkarten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Apple Pay / Google Pay ready</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Echtzeit-Benachrichtigungen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Ausgabenkontrolle per App</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Virtuelle Kartennummern</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenlos + Cashback möglich</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Reise- und Bonuskarten</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Meilen oder Punkte sammeln</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Lounge-Zugang an Flughäfen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Umfassende Reiseversicherung</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Priority Pass inklusive</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Viele Premium-Features ohne Zusatzkosten</li>
            </ul>
            <div className="mt-8 mb-12 text-center">
              <a 
                href="https://www.tarifcheck.com/NMXe4cX" 
                target="_blank" 
                rel="sponsored"
              >
                <Button className="bg-green-600 text-white font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                  ALLE KREDITKARTEN IM VERGLEICH
                </Button>
              </a>
            </div>
            <Card className="mt-8 bg-orange-50 border-2 border-orange-200 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-orange-800">Kreditkarten-Fallen vermeiden</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-green-600">Versteckte Kosten vermeiden</h3>
                    <ul className="list-none text-base space-y-1">
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Fremdwährungsgebühren (oft 1–2%)</li>
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bargeldgebühren auch im Inland</li>
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Jahresgebühr ab dem 2. Jahr</li>
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Hohe Sollzinsen bei Teilzahlung</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-green-600">Smarte Kreditkartennutzung</h3>
                    <ul className="list-none text-base space-y-1">
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Immer per Lastschrift vollständig begleichen</li>
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kreditrahmen nicht als Kredit nutzen</li>
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bei Auslandsreisen Geld sparen</li>
                      <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bonusprogramme gezielt nutzen</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Jetzt Finanzprodukte vergleichen und sparen</h2>
            <p className="text-base sm:text-lg">
              Schnell, sicher & kostenlos – mit nur wenigen Klicks zum besten Angebot.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Checkliste für Ihre Finanzplanung</h2>
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-lg font-bold mb-2 text-green-600">Grundausstattung für Finanzen</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenloses Girokonto für Alltag</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Tagesgeldkonto für Notreserve (3–6 Monatsgehälter)</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kreditkarte ohne Jahresgebühr für Reisen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Dispozinsen unter 7% vereinbaren</li>
            </ul>
            <h3 className="text-lg font-bold mb-2 text-green-600">Vermögensaufbau und Absicherung</h3>
            <ul className="list-none text-base mb-6">
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> ETF-Sparplan für langfristigen Vermögensaufbau</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Depot mit kostenlosen ETF-Sparplänen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Alte Kredite auf bessere Konditionen prüfen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Regelmäßig Konditionen vergleichen</li>
              <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Eigenheim absichern: Wohngebäude-, Hausrat- &amp; Haftpflicht sinnvoll kombinieren</li>
            </ul>
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
        © 2025 SmartFinanz unser-vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
      </p>
      <Link href="/" aria-label="Zurück zur Startseite">
        <Button 
          className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
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
