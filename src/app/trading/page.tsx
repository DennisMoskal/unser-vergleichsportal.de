"use client"

import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from "lucide-react"

// ---------- Logo (Brand vereinheitlicht auf Unser-Vergleichsportal.de)
const SmartFinanzLogo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" aria-label="Zurück zur Startseite">
      <div className={`flex items-center gap-2 ${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
          <text
            x="16"
            y="22"
            textAnchor="middle"
            fontFamily="Arial Black, sans-serif"
            fontSize="16"
            fill="white"
            fontWeight="900"
          >
            U
          </text>
        </svg>
        <span className="font-bold">Unser-Vergleichsportal.de</span>
      </div>
    </Link>
  )
}

// ---------- Header / Navigation
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("trading")

  const scrollToSection = (sectionId: string) => {
    setActiveCategory(sectionId)
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
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
          <SmartFinanzLogo className="text-xl" />
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
                <h2 className="font-semibold text-2xl mb-3 text-left ml-2">Finanzprodukte</h2>
                <ul className="flex flex-col gap-2 text-base">
                  {[
                    { key: "banking", label: "Banking", url: "/banking", isInternal: true },
                    { key: "haustierversicherung", label: "Haustierversicherung", url: "/tierversicherungen", isInternal: true },
                    { key: "trading", label: "Trading", url: "/trading", isInternal: true },
                    { key: "versicherungen", label: "Versicherungen", url: "/versicherungen", isInternal: true },
                  ].map(({ key, label, url }) => (
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
                      { key: "dsl", label: "DSL", url: "https://www.c24n.de/ducwCtq" },
                      { key: "gas", label: "Gas", url: "https://www.c24n.de/Uxudvkj" },
                      { key: "handytarif", label: "Handytarif", url: "https://www.c24n.de/5R17qbN" },
                      { key: "kreditkarte", label: "Kreditkarte", url: "https://www.c24n.de/RYXPGyh" },
                    ].map(({ key, label, url }) => (
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
                      { key: "mietwagen", label: "Mietwagen", url: "https://www.c24n.de/FZ9nd0R" },
                      { key: "oekostrom", label: "Ökostrom", url: "https://www.c24n.de/zxy0WKh" },
                      { key: "reise", label: "Reise", url: "https://www.c24n.de/EieKR0E" },
                      { key: "strom", label: "Strom", url: "https://www.c24n.de/RYXPGyh" },
                    ].map(({ key, label, url }) => (
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
                    { key: "karriere", label: "Karriere", url: "/karriere" },
                    { key: "kontakt", label: "Kontakt", url: "/kontakt" },
                    { key: "partnerprogramm", label: "Partnerprogramm", url: "/partnerprogramme" },
                    { key: "ueber-uns", label: "Über uns", url: "/ueber-uns" },
                  ].map(({ key, label, url }) => (
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
                    { key: "agb", label: "AGB", url: "/agb" },
                    { key: "cookie-richtlinie", label: "Cookie-Richtlinie", url: "/cookie-richtlinie" },
                    { key: "datenschutz", label: "Datenschutz", url: "/datenschutz" },
                    { key: "impressum", label: "Impressum", url: "/impressum" },
                  ].map(({ key, label, url }) => (
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
      <section className="bg-white py-4 border-b" id="trading">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 text-base">
            {[
              { key: "banking", label: "Banking", url: "/banking", isInternal: true },
              { key: "haustierversicherung", label: "Haustierversicherung", url: "/tierversicherungen", isInternal: true },
              { key: "trading", label: "Trading", url: "/trading", isInternal: true },
              { key: "versicherungen", label: "Versicherung", url: "/versicherungen", isInternal: true },
              { key: "dsl", label: "DSL", url: "https://www.c24n.de/ducwCtq", isInternal: false },
              { key: "gas", label: "Gas", url: "https://www.c24n.de/Uxudvkj", isInternal: false },
              { key: "handytarif", label: "Handytarif", url: "https://www.c24n.de/5R17qbN", isInternal: false },
              { key: "kreditkarte", label: "Kreditkarte", url: "https://www.c24n.de/RYXPGyh", isInternal: false },
              { key: "mietwagen", label: "Mietwagen", url: "https://www.c24n.de/FZ9nd0R", isInternal: false },
              { key: "oekostrom", label: "Ökostrom", url: "https://www.c24n.de/zxy0WKh", isInternal: false },
              { key: "reise", label: "Reise", url: "https://www.c24n.de/EieKR0E", isInternal: false },
              { key: "strom", label: "Strom", url: "https://www.c24n.de/RYXPGyh", isInternal: false },
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

// ---------- Datentypen & Daten
type Provider = {
  name: string
  rating: number
  features: string[]
  price: string
  bonus: string
  logo: string
  url: string
  metaTitle?: string
  metaDescription?: string
  isTopRecommendation?: boolean
}

const providerData: { trading: Provider[] } = {
  trading: [
    {
      name: "TradingView",
      rating: 4.8,
      features: [
        "Über 100 Millionen Nutzer weltweit",
        "Kostenloses Konto ohne Kreditkarte",
        "Supercharts für technische Analysen",
        "Top Screener für Aktien, Krypto, Forex, Futures",
        "Social Trading mit Community-Ideen",
        "Integration mit verifizierten Brokern wie OKX, AMP Futures, FOREX.com",
        "Erweiterte Indikatoren und Strategien",
        "Mobile App für Trading unterwegs",
        "Krypto-Trading mit Echtzeit-Daten",
        "Kostenloses Demo-Konto für Einsteiger",
      ],
      price: "0€ Kontoeröffnung",
      bonus: "Kostenloser Start",
      logo: "📈",
      url: "https://de.tradingview.com/?aff_id=156504",
      metaTitle: "TradingView: Beste Plattform für Krypto- und Aktien-Trading 2025",
      metaDescription:
        "TradingView bietet Supercharts, Top Screener und Social Trading für über 100 Mio. Nutzer. Starten Sie kostenlos mit Aktien, Krypto, Forex und Futures!",
      isTopRecommendation: true,
    },
    {
      name: "eToro",
      rating: 4.3,
      features: [
        "Social Trading mit CopyTrader™ für automatische Trades",
        "Über 70 Kryptowährungen und 3.000+ Aktien/ETFs",
        "Bis zu 4,3% Zinsen auf USD-Guthaben",
        "Einlagen bis 100.000€ pro Bank geschützt",
        "Reguliert durch BaFin und CySec",
        "Kostenlose Euro-Einzahlungen ohne Umrechnungsgebühren",
        "eToro-Akademie mit kostenlosen Kursen",
        "Über 35 Mio. Nutzer weltweit",
        "Bitcoin handeln mit niedrigen Gebühren",
        "Krypto-Trading sicher mit Cold Storage",
      ],
      price: "1% Spread bei Krypto",
      bonus: "Kostenloses Demo-Konto",
      logo: "🌐",
      url: "https://med.etoro.com/B19298_A126856_TClick.aspx",
      metaTitle: "eToro Trading: Top Plattform für Bitcoin handeln und Social Trading 2025",
      metaDescription:
        "eToro bietet Social Trading, Bitcoin handeln mit niedrigen Gebühren, über 70 Kryptowährungen und 3.000+ Aktien/ETFs. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: true,
    },
    {
      name: "XTB",
      rating: 4.5,
      features: [
        "Gratis Aktie für neue Investoren",
        "Bis zu 2,3% p.a. Zinsen auf Guthaben",
        "Über 8000 Aktien & ETFs",
        "Über 2600 CFD-Instrumente (Forex, Rohstoffe, Indizes)",
        "Über 40 Krypto-CFDs (BTC, ETH, etc.)",
        "eWallet mit virtueller Mastercard",
        "Smarte ETF-Sparpläne",
        "0% Kommission bis 100.000€ Umsatz",
        "Kostenlose Ein- & Auszahlungen",
        "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
        "Platz 1 CFD-Broker 2024/25",
      ],
      price: "0€ Kommission",
      bonus: "Kostenlose Kontoeröffnung",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc",
      metaTitle: "XTB Trading: Testsieger CFD-Broker 2025",
      metaDescription:
        "XTB bietet 0% Kommission bis 100.000€ Umsatz, über 8000 Aktien & ETFs und smarte Sparpläne. Jetzt mit gratis Aktie starten!",
      isTopRecommendation: true,
    },
    {
      name: "WEEX",
      rating: 4.6,
      features: [
        "Über 1.700 Handelspaare für Kryptowährungen",
        "Bis zu 400x Leverage für Futures-Trading",
        "1.000 BTC Schutzfonds für maximale Sicherheit",
        "Durchschnittliches tägliches Handelsvolumen von 8,71 Mrd. USD",
        "Bis zu 450.000 Transaktionen pro Sekunde",
        "Verfügbar in über 130 Ländern weltweit",
        "Regulierte Plattform mit globalen Lizenzen",
        "5% Coupon bei Einzahlung für neue Nutzer",
        "24/7 Kundensupport und benutzerfreundliche Oberfläche",
      ],
      price: "0,1% Taker Fee",
      bonus: "5% Einzahlungs-Coupon",
      logo: "🔒",
      url: "https://weex.com/register?vipCode=0pika",
      metaTitle: "WEEX Trading: Sichere Krypto-Plattform mit hohem Leverage 2025",
      metaDescription:
        "WEEX bietet über 1.700 Handelspaare, bis zu 400x Leverage und einen 1.000 BTC Schutzfonds. Jetzt mit 5% Einzahlungs-Coupon starten!",
      isTopRecommendation: true,
    },
    {
      name: "Bybit",
      rating: 4.4,
      features: [
        "Über 100 Kryptowährungen für Spot- und Derivate-Trading",
        "Bis zu 100x Leverage für fortgeschrittene Trader",
        "Niedrige Gebühren mit 0,1% Taker Fee",
        "Intuitive Plattform mit fortschrittlichen Trading-Tools",
        "Kostenlose Einzahlungen via SEPA oder Kreditkarte",
        "24/7 mehrsprachiger Kundensupport",
        "Bybit Learn für Krypto-Wissen und Strategien",
        "Reguliert und sicher für globale Nutzer",
      ],
      price: "0,1% Taker Fee",
      bonus: "Willkommensbonus bis zu 5.000 USDT",
      logo: "⚡",
      url: "https://www.bybit.eu/invite?ref=RME6DV2",
      metaTitle: "Bybit Trading: Krypto-Trading mit hohem Leverage 2025",
      metaDescription:
        "Bybit bietet über 100 Kryptowährungen, bis zu 100x Leverage und niedrige Gebühren. Jetzt mit bis zu 5.000 USDT Bonus starten!",
      isTopRecommendation: true,
    },
    {
      name: "Moneta Markets",
      rating: 4.5,
      features: [
        "Über 1000 Instrumente: Forex, CFDs, ETFs",
        "PRIME ECN Spreads ab 0.0 Pips",
        "Bis zu 1000:1 Leverage auf Gold",
        "50% Cashback Bonus bei Einzahlung ab $500",
        "Metatrader 4, Metatrader 5 & AppTrader",
        "Ultra-schnelle Ausführung unter 15ms",
        "Reguliert durch SLIBC und FSCA",
        "Segregierte Konten bei AA-Rated Bank",
        "Kostenloses Demo-Konto für risikofreies Trading",
        "Erweiterte Tools: Premium Economic Calendar, AI Market Buzz",
      ],
      price: "0.0 Pips Spread",
      bonus: "50% Cashback Bonus",
      logo: "💸",
      url: "https://www.monetamarkets.com/?affid=Nzc0MjU0OA==",
      metaTitle: "Moneta Markets: Top Online Trading Plattform 2025",
      metaDescription:
        "Moneta Markets bietet über 1000 Instrumente, Spreads ab 0.0 Pips, bis zu 1000:1 Leverage und 50% Cashback Bonus. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: true,
    },
    {
      name: "Vantage",
      rating: 4.6,
      features: [
        "Über 1.000 CFDs: Forex, Indizes, Rohstoffe, Aktien, ETFs",
        "Spreads ab 0.0 Pips für kosteneffizientes Trading",
        "Bis zu 500:1 Leverage für flexible Strategien",
        "Reguliert durch ASIC, FSCA, VFSC und Mauritius FSC",
        "Segregierte Konten bei Top-Banken für maximale Sicherheit",
        "24/7 Kundensupport in mehreren Sprachen",
        "MetaTrader 4, MetaTrader 5 und Vantage App",
        "Kostenloses Demo-Konto für risikofreies Testen",
        "Einzahlungsbonus bis zu 50% für neue Trader",
        "Partnerschaft mit Scuderia Ferrari HP",
      ],
      price: "0.0 Pips Spread",
      bonus: "50% Einzahlungsbonus",
      logo: "🏎️",
      url: "https://go.vantagefx.com/visit/?bta=65953&brand=vantagefx",
      metaTitle: "Vantage Trading: Top CFD-Broker für Forex & Krypto 2025",
      metaDescription:
        "Vantage bietet über 1.000 CFDs, Spreads ab 0.0 Pips, bis zu 500:1 Leverage und einen 50% Einzahlungsbonus. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: true,
    },
  ],
}

// ---------- Buttons
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
const btnPrimary = `${btnBase} bg-green-600 hover:bg-green-700 text-white`
const btnSecondary = `${btnBase} bg-white text-green-600 hover:bg-gray-100`

// ---------- Page Component
export default function DeFi() {
  // Top-Empfehlungen zuerst
  const sortedProviders = [...providerData.trading].sort((a, b) => {
    const aTop = a.isTopRecommendation ? 1 : 0
    const bTop = b.isTopRecommendation ? 1 : 0
    return bTop - aTop
  })

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>DeFi & Krypto-Trading 2025: Bitcoin handeln & Broker-Vergleich | Unser-Vergleichsportal.de</title>
        <meta
          name="description"
          content="Vergleichen Sie die besten Trading-Plattformen für DeFi, Bitcoin handeln und Krypto-Trading. Testsieger wie eToro, TradingView, XTB, WEEX & Vantage im Vergleich: Gebühren, Sicherheit, Funktionen."
        />
        <meta
          name="keywords"
          content="Bitcoin handeln, Krypto-Trading, DeFi Trading, Trading Plattform, Social Trading, CFD Broker Vergleich, beste Broker 2025, XTB, eToro, TradingView, WEEX, Vantage, Bybit, Moneta Markets"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/trading" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DeFi & Krypto-Trading 2025: Bitcoin handeln & Broker-Vergleich" />
        <meta
          property="og:description"
          content="Die besten Plattformen für DeFi & Krypto im Vergleich. Gebühren, Sicherheit & Funktionen auf einen Blick."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/trading" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DeFi & Krypto-Trading 2025: Bitcoin handeln & Broker-Vergleich" />
        <meta
          name="twitter:description"
          content="Vergleiche die Top-Plattformen für Bitcoin & DeFi. Jetzt Testsieger checken."
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name:
              "DeFi & Krypto-Trading 2025: Bitcoin handeln & Broker-Vergleich | Unser-Vergleichsportal.de",
            description:
              "Vergleichen Sie die besten Trading-Plattformen für DeFi, Bitcoin handeln und Krypto-Trading. Entdecken Sie eToro, TradingView, XTB, WEEX, Vantage und mehr für sicheres Trading mit niedrigen Gebühren.",
            url: "https://unser-vergleichsportal.de/trading",
            keywords:
              "Bitcoin handeln, Krypto-Trading, DeFi Trading, Social Trading, Trading-Plattform",
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
                    url: provider.url,
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: provider.rating,
                    reviewCount: "100",
                  },
                  keywords: "Bitcoin handeln, Krypto-Trading, Social Trading, DeFi, Trading-Plattform",
                },
              })),
            },
          }),
        }}
      />

      <Header />

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Beste Neo Broker September 2025 | Kostenlos Krypto, Bitcoin und Co. kaufen – Testsieger
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Entdecken Sie die besten Aktiendepots, Online-Broker & Trading-Plattformen für Aktien, Forex, ETF, Rohstoffe,
              Futures, DeFi, Bitcoin handeln und Krypto-Trading. Vergleichen Sie niedrige Gebühren, hohe Sicherheit und
              attraktive Boni. Unsere Testsieger wie eToro, TradingView, XTB, WEEX und Vantage bieten 0% Kommission,
              professionelle Tools und regulierte Plattformen für sicheres Trading.
            </p>
            <Link href="#anbieter" aria-label="Jetzt vergleichen">
              <Button className={btnSecondary}>Jetzt vergleichen</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Wie wähle ich die passende Trading-Plattform?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Gebühren vergleichen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf 0% Kommission (z. B. XTB/Vantage) und prüfen Sie Spreads sowie Ein-/Auszahlungsgebühren.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Sicherheit & Regulierung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  BaFin/ASIC/FSCA-Regulierung, Einlagensicherung und klare Richtlinien sind entscheidend.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Demo-Konten nutzen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Strategien zunächst risikofrei testen – Lernkurve ↑, Fehlerkosten ↓.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section id="anbieter" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Testsieger Aktiendepots & Online-Broker-Vergleich September 2025
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
                        aria-hidden="true"
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
                        <Check className="mr-2 h-4 w-4 text-green-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {provider.url.startsWith("http") ? (
                    <a
                      href={provider.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      aria-label={`Zum Anbieter ${provider.name}`}
                    >
                      <Button className={`w-full mt-4 ${btnPrimary}`}>Zum Anbieter*</Button>
                    </a>
                  ) : (
                    <Link href={provider.url} aria-label={`Zum Anbieter ${provider.name}`}>
                      <Button className={`w-full mt-4 ${btnPrimary}`}>Zum Anbieter*</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA: Banking */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Auszahlungen & Einzahlungen schnell erledigen</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Zum Trading und dem <strong>Auszahlen von Beträgen</strong> gehört ein starkes Banking – SEPA Instant,
                  niedrige Gebühren & verlässliche Karten.
                </p>
              </div>
              <Link href="/banking" aria-label="Zum Banking-Vergleich" title="Zum Banking-Vergleich">
                <Button className={btnPrimary}>Jetzt Banken vergleichen</Button>
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>
              CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld zu
              verlieren. 72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
            </p>
            <p className="mt-4">
              *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den
              Kundenpreis.
            </p>
          </div>
        </div>
      </section>

      {/* Guide + Versicherungen-CTA */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            DeFi & Krypto-Trading 2025: Ihr Weg zu Bitcoin, Memecoins & Bridging
          </h1>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Was ist DeFi? Der dezentrale Finanzmarkt erklärt
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              DeFi (Decentralized Finance) revolutioniert den Finanzmarkt durch Blockchain-Technologie. Anstelle zentraler
              Banken ermöglichen Smart Contracts auf Plattformen wie Ethereum oder Polygon direkte Transaktionen wie
              Kredite, Staking oder Swaps.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" aria-hidden="true" />
                Dezentrales Trading ohne Zwischenhändler
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" aria-hidden="true" />
                Staking für passive Einkünfte
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" aria-hidden="true" />
                Liquidity Pools für potenziell hohe Renditen
              </li>
            </ul>

            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Krypto-Trading mit TradingView: Tools für Anfänger und Profis
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              TradingView ist führend für technische Analyse & Social Trading. Mit Supercharts, Screenern und Community-Ideen
              finden Sie Handelschancen über Krypto, Aktien, Forex & Futures.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Bitcoin-Trading: Sicher handeln mit XTB
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Mit XTB können Sie Bitcoin-CFDs handeln, ohne Coins physisch zu halten – inkl. Demo-Konto und 0% Kommission bis
              100.000 € Umsatz.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Bridging in DeFi: Kryptowährungen zwischen Blockchains bewegen
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Bridges verschieben Tokens zwischen Chains (z. B. Ethereum ↔ Polygon). Nur etablierte Lösungen nutzen und
              Smart-Contract-Audits prüfen.
            </p>

            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Memecoin-Trading: Die Rolle von Telegram-Bots
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Bots wie Banana Gun/Maestro erlauben schnelle Orders & Alarme. Kosten und Sicherheit beachten.
            </p>

            {/* Versicherungen-CTA */}
            <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm sm:text-base text-green-900">
                Bewahren Sie Krypto in <strong>Eigenverwahrung</strong> auf? Denken Sie an Absicherung (z. B. Hausrat-,
                Cyber- oder Rechtsschutz – je nach Tarif).
              </p>
              <Link href="/versicherungen" aria-label="Versicherungen für Krypto-Anleger" title="Versicherungen für Krypto-Anleger">
                <Button className={btnPrimary}>Zu den Versicherungen</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Häufig gestellte Fragen zu Trading-Plattformen
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { q: "Was ist die beste Trading-Plattform für Anfänger?", a: "Einsteiger profitieren von Social-Trading, Lernmaterialien und einem Demo-Konto, um Strategien risikofrei zu testen." },
              { q: "Welche Gebühren fallen beim Trading an?", a: "Kommissionen, Spreads sowie ggf. Ein-/Auszahlungsgebühren. Entscheidend ist die Gesamtkostenquote pro Strategie." },
              { q: "Wie sicher ist Krypto-Trading?", a: "Regulierung, 2FA, Cold-Storage-Optionen und transparente Risikohinweise der Anbieter erhöhen die Sicherheit." },
              { q: "CFD vs. Spot-Krypto?", a: "CFDs handeln Preisbewegungen ohne Besitz des Basiswerts; Spot-Krypto bedeutet Kauf/Verkauf echter Coins an Börsen." },
              { q: "Was sind Telegram-Bots im Memecoin-Trading?", a: "Automatisierte Orders, Preisalarme und Wallet-Integration – immer Kosten/Sicherheit prüfen." },
              { q: "Wie funktioniert Bridging in DeFi?", a: "Bridges verschieben Tokens zwischen Chains. Nur geprüfte Lösungen nutzen und zuerst klein testen." },
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vergleichs-Leitfaden */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Ihr Weg zur richtigen Trading-Plattform: Der ultimative Leitfaden
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Die Wahl der passenden Plattform hängt von Zielen, Budget und Erfahrung ab. Dieser Leitfaden hilft bei der
              Vorauswahl.
            </p>
            {[
              { t: "1. Trading-Ziele definieren", d: "Kurzfristiges Krypto/CFD-Trading vs. langfristiges Investieren (Aktien/ETFs) erfordert unterschiedliche Tools." },
              { t: "2. Gebühren & Kosten prüfen", d: "Kommissionen, Spreads, Ein-/Auszahlungen – auf die Summe pro Strategie achten." },
              { t: "3. Sicherheit & Regulierung", d: "Regulierung, Einlagensicherung, transparente AGB, verlässlicher Support." },
              { t: "4. Demo nutzen", d: "Erst simuliert handeln – Lernkurve steigt, Fehlerkosten sinken." },
              { t: "5. Lernressourcen", d: "Akademien, Community-Ideen und Tutorials beschleunigen den Skill-Aufbau." },
            ].map((row, i) => (
              <div key={i} className="mb-4">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{row.t}</h3>
                <p className="text-sm sm:text-base text-gray-600">{row.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-3 text-xl">Finanzprodukte</h2>
              <ul className="space-y-2 text-base text-gray-400">
                {[
                  { href: "/banking", label: "Banking" },
                  { href: "/tierversicherungen", label: "Haustierversicherung" },
                  { href: "/trading", label: "Trading" },
                  { href: "/versicherungen", label: "Versicherungen" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label={l.label}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-3 text-xl">Weitere Produkte</h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-base text-gray-400">
                  {[
                    { href: "https://www.c24n.de/ducwCtq", label: "DSL" },
                    { href: "https://www.c24n.de/Uxudvkj", label: "Gas" },
                    { href: "https://www.c24n.de/5R17qbN", label: "Handytarif" },
                    { href: "https://www.c24n.de/RYXPGyh", label: "Kreditkarte" },
                  ].map((a) => (
                    <li key={a.href}>
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                        aria-label={`${a.label} Vergleich (externer Link)`}
                      >
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-base text-gray-400">
                  {[
                    { href: "https://www.c24n.de/FZ9nd0R", label: "Mietwagen" },
                    { href: "https://www.c24n.de/zxy0WKh", label: "Ökostrom" },
                    { href: "https://www.c24n.de/EieKR0E", label: "Reise" },
                    { href: "https://www.c24n.de/RYXPGyh", label: "Strom" },
                  ].map((a) => (
                    <li key={a.href}>
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                        aria-label={`${a.label} vergleichen (externer Link)`}
                      >
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-3 text-xl">Unternehmen</h2>
              <ul className="space-y-2 text-base text-gray-400">
                {[
                  { href: "/karriere", label: "Karriere" },
                  { href: "/kontakt", label: "Kontakt" },
                  { href: "/partnerprogramme", label: "Partnerprogramm" },
                  { href: "/ueber-uns", label: "Über uns" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label={l.label}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-3 text-xl">Rechtliches</h2>
              <ul className="space-y-2 text-base text-gray-400">
                {[
                  { href: "/agb", label: "AGB" },
                  { href: "/cookie-richtlinie", label: "Cookie-Richtlinie" },
                  { href: "/datenschutz", label: "Datenschutz" },
                  { href: "/impressum", label: "Impressum" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="hover:text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-lg hover:bg-gradient-to-b hover:from-gray-800 hover:to-gray-900 hover:shadow-sm"
                      aria-label={l.label}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-base text-gray-400 mb-4">
              © 2025 Unser-Vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking,
              DSL, Strom, Gas & mehr
            </p>
            <Link href="/" aria-label="Zurück zur Startseite">
              <Button className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
