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
                      { key: 'dsl', label: 'DSL', url: 'https://www.c24n.de/ducwCtq' },
                      { key: 'gas', label: 'Gas', url: 'https://www.c24n.de/Uxudvkj' },
                      { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN' },
                      { key: 'kreditkarte', label: 'Kreditkarte', url: 'https://www.c24n.de/RYXPGyh' },
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
                      { key: 'mietwagen', label: 'Mietwagen', url: 'https://www.c24n.de/FZ9nd0R' },
                      { key: 'oekostrom', label: 'Ökostrom', url: 'https://www.c24n.de/zxy0WKh' },
                      { key: 'reise', label: 'Reise', url: 'https://www.c24n.de/EieKR0E' },
                      { key: 'strom', label: 'Strom', url: 'https://www.c24n.de/RYXPGyh' },
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
                    { key: 'karriere', label: 'Karriere', url: '/karriere' },
                    { key: 'kontakt', label: 'Kontakt', url: '/kontakt' },
                    { key: 'partnerprogramm', label: 'Partnerprogramm', url: '/partnerprogramme' },
                    { key: 'ueber-uns', label: 'Über uns', url: '/ueber-uns' },
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
                    { key: 'agb', label: 'AGB', url: '/agb' },
                    { key: 'cookie-richtlinie', label: 'Cookie-Richtlinie', url: '/cookie-richtlinie' },
                    { key: 'datenschutz', label: 'Datenschutz', url: '/datenschutz' },
                    { key: 'impressum', label: 'Impressum', url: '/impressum' },
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
                  className={btnPrimary}
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
              { key: 'handytarif', label: 'Handytarif', url: 'https://www.c24n.de/5R17qbN', isInternal: true },
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

const providerData = {
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
        "Kostenloses Demo-Konto für Einsteiger"
      ],
      price: "0€ Kontoeröffnung",
      bonus: "Kostenloser Start",
      logo: "📈",
      url: "https://de.tradingview.com/?aff_id=156504",
      metaTitle: "TradingView: Beste Plattform für Krypto- und Aktien-Trading 2025",
      metaDescription: "TradingView bietet Supercharts, Top Screener und Social Trading für über 100 Mio. Nutzer. Starten Sie kostenlos mit Aktien, Krypto, Forex und Futures!",
      isTopRecommendation: true
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
        "Krypto-Trading sicher mit Cold Storage"
      ],
      price: "1% Spread bei Krypto",
      bonus: "Kostenloses Demo-Konto",
      logo: "🌐",
      url: "https://med.etoro.com/B19298_A126856_TClick.aspx",
      metaTitle: "eToro Trading: Top Plattform für Bitcoin handeln und Social Trading 2025",
      metaDescription: "eToro bietet Social Trading, Bitcoin handeln mit niedrigen Gebühren, über 70 Kryptowährungen und 3.000+ Aktien/ETFs. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: true
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
        "Platz 1 CFD-Broker 2024/25"
      ],
      price: "0€ Kommission",
      bonus: "Kostenlose Kontoeröffnung",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc",
      metaTitle: "XTB Trading: Testsieger CFD-Broker 2025",
      metaDescription: "XTB bietet 0% Kommission bis 100.000€ Umsatz, über 8000 Aktien & ETFs und smarte Sparpläne. Jetzt mit gratis Aktie starten!",
      isTopRecommendation: true
    },
    {
      name: "BlackBull",
      rating: 4.7,
      features: [
        "Über 26.000 handelbare Instrumente (Forex, Aktien, Indizes, Rohstoffe, Kryptowährungen)",
        "Schnelle Ausführung mit durchschnittlich 100 ms",
        "Niedrige Spreads ab 0,0 Pips",
        "Hebel bis zu 500:1",
        "MT4, MT5 und WebTrader Plattformen",
        "Reguliert durch FMA (FMA-Number: 700238) und FSCA (FSP-Number: 50968)",
        "24/7 Kundensupport",
        "Kostenlose Ein- und Auszahlungen",
        "Demo-Konto verfügbar",
        "Mobile Trading-App für iOS und Android"
      ],
      price: "0.1% Taker Fee",
      bonus: "Bis zu 10.000$ Bonus",
      logo: "🐂",
      url: "https://go.blackbull.com/visit/?bta=42835&brand=blackbull",
      metaTitle: "BlackBull Trading: Professionelle Handelsplattform mit 26.000+ Instrumenten",
      metaDescription: "BlackBull Markets bietet professionelles Trading mit über 26.000 Instrumenten, niedrigen Spreads und schneller Ausführung. Jetzt mit bis zu 10.000$ Bonus handeln!",
      isTopRecommendation: true
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
        "24/7 Kundensupport und benutzerfreundliche Oberfläche"
      ],
      price: "0,1% Taker Fee",
      bonus: "5% Einzahlungs-Coupon",
      logo: "🔒",
      url: "https://weex.com/register?vipCode=0pika",
      metaTitle: "WEEX Trading: Sichere Krypto-Plattform mit hohem Leverage 2025",
      metaDescription: "WEEX bietet über 1.700 Handelspaare, bis zu 400x Leverage und einen 1.000 BTC Schutzfonds. Jetzt mit 5% Einzahlungs-Coupon starten!",
      isTopRecommendation: true
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
        "Reguliert und sicher für globale Nutzer"
      ],
      price: "0,1% Taker Fee",
      bonus: "Willkommensbonus bis zu 5.000 USDT",
      logo: "⚡",
      url: "https://www.bybit.eu/invite?ref=RME6DV2",
      metaTitle: "Bybit Trading: Krypto-Trading mit hohem Leverage 2025",
      metaDescription: "Bybit bietet über 100 Kryptowährungen, bis zu 100x Leverage und niedrige Gebühren. Jetzt mit bis zu 5.000 USDT Bonus starten!",
      isTopRecommendation: true
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
        "Erweiterte Tools: Premium Economic Calendar, AI Market Buzz"
      ],
      price: "0.0 Pips Spread",
      bonus: "50% Cashback Bonus",
      logo: "💸",
      url: "https://www.monetamarkets.com/?affid=Nzc0MjU0OA==",
      metaTitle: "Moneta Markets: Top Online Trading Plattform 2025",
      metaDescription: "Moneta Markets bietet über 1000 Instrumente, Spreads ab 0.0 Pips, bis zu 1000:1 Leverage und 50% Cashback Bonus. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: true
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
        "Partnerschaft mit Scuderia Ferrari HP"
      ],
      price: "0.0 Pips Spread",
      bonus: "50% Einzahlungsbonus",
      logo: "🏎️",
      url: "https://go.vantagefx.com/visit/?bta=65953&brand=vantagefx",
      metaTitle: "Vantage Trading: Top CFD-Broker für Forex & Krypto 2025",
      metaDescription: "Vantage bietet über 1.000 CFDs, Spreads ab 0.0 Pips, bis zu 500:1 Leverage und einen 50% Einzahlungsbonus. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: true
    },
    {
      name: "PlatinumLabs",
      rating: 4.7,
      features: [
        "KI-gestützte Trading-Bots für automatisierte Strategien",
        "CryptoPulse Pro für fortschrittliche Volatilitätsanalysen",
        "Multi-Chain-Unterstützung: Ethereum, Solana, BSC und mehr",
        "Echtzeit-Marktdaten mit Candlestick-Charts",
        "Sicheres, nicht-verwahrendes Bridging mit Houdini",
        "Schutz vor Rug-Pulls und MEV für sicheres Trading",
        "Telegram-Integration für schnelles Trading",
        "24/7 Support für DeFi- und Krypto-Trader",
        "Anpassbare Tools für Risikomanagement",
        "Schnelle und einfache one-klick Einrichtung"
      ],
      price: "Free to Start",
      bonus: "Free Demo Access",
      logo: "🧪",
      url: "https://platinumlabs.vercel.app/",
      metaTitle: "PlatinumLabs: Top Crypto Trading Tools & AI Bots 2025",
      metaDescription: "PlatinumLabs offers AI-powered trading bots, CryptoPulse Pro analytics, and multi-chain support for Ethereum, Solana, and more. Start with free demo access now!",
      isTopRecommendation: true
    },
    {
      name: "Investivox",
      rating: 4.5,
      features: [
        "Nachhaltige ETFs und Aktien mit ESG-Fokus",
        "0% Kommission auf ausgewählte Produkte",
        "Reguliert durch BaFin für maximale Sicherheit",
        "Benutzerfreundliche App für Trading unterwegs",
        "Kostenloses Demo-Konto für risikofreies Testen",
        "Diversifizierte Portfolios für langfristige Anlagen",
        "100€ Bonus für neue Nutzer",
        "Zugang zu über 5.000 globalen Märkten",
        "Lernressourcen für nachhaltiges Investieren",
        "24/7 Kundensupport in mehreren Sprachen"
      ],
      price: "0€ Kommission",
      bonus: "100€ Willkommensbonus",
      logo: "🌱",
      url: "https://www.awin1.com/awclick.php?gid=347729&mid=15658&awinaffid=2524533&linkid=2258019&clickref=",
      metaTitle: "Investivox: Nachhaltige Investments in ETFs & Aktien 2025",
      metaDescription: "Investivox bietet nachhaltige ETFs und Aktien mit 0% Kommission, BaFin-Regulierung und einem 100€ Bonus. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: true
    }
  ]
}

// Einheitliches Button-Layout (übernommen & vereinheitlicht)
const btnBase = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-300 ease-in-out shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
const btnPrimary = `${btnBase} bg-green-600 text-white hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700`
const btnSecondary = `${btnBase} bg-white text-green-700 border border-green-200 hover:bg-gray-100 hover:scale-105`

export default function DeFi() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Top-Empfehlungen zuerst
  const sortedProviders = [...providerData.trading].sort((a, b) => {
    if (a.isTopRecommendation && !b.isTopRecommendation) return -1
    if (!a.isTopRecommendation && b.isTopRecommendation) return 1
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Bester Neo-Broker Vergleich September 2025 | Bitcoin & ETF Testsieger</title>
        <meta
          name="description"
          content="Vergleichen Sie Broker & Trading-Plattformen für Aktien, ETFs & Bitcoin. Niedrige Gebühren, sichere Depots & regulierte Testsieger im September 2025"
        />
        <meta
          name="keywords"
          content="Broker Vergleich 2025, Trading Plattform Vergleich, Aktiendepot, ETF-Trading, Bitcoin & Krypto Trading, CFD Broker, Forex Broker, geringe Gebühren, regulierte Broker, Testsieger Broker, nachhaltige Investments"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/trading" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beste Broker September 2025 | Bitcoin & ETF Testsieger" />
        <meta
          property="og:description"
          content="Vergleichen Sie Broker & Trading-Plattformen für Aktien, ETFs & Bitcoin. Transparente Gebühren, sichere Depots & regulierte Testsieger im September 2025."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/trading" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        <meta
          property="og:image"
          content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
        />
        <meta property="og:image:alt" content="Beste Broker 2025 – unser-vergleichsportal.de" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beste Broker September 2025 | Bitcoin & ETF Testsieger" />
        <meta
          name="twitter:description"
          content="Vergleichen Sie Broker & Trading-Plattformen für Aktien, ETFs & Bitcoin. Transparente Gebühren, sichere Depots & regulierte Testsieger im September 2025."
        />
        <meta
          name="twitter:image"
          content="https://unser-vergleichsportal.de/images/og/unser-vergleichsportal-og-1200x630.jpg"
        />
        <meta name="format-detection" content="telephone=no" />
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Beste Broker September 2025 | Bitcoin & ETF Testsieger",
              description:
                "Vergleichen Sie Broker & Trading-Plattformen für Aktien, ETFs & Bitcoin. Niedrige Gebühren, sichere Depots & regulierte Testsieger im September 2025.",
              url: "https://unser-vergleichsportal.de/trading",
              publisher: {
                "@type": "Organization",
                "name": "Unser Vergleichsportal",
                "url": "https://unser-vergleichsportal.de",
                "logo": "https://unser-vergleichsportal.de/images/logo.png"
              },
              mainEntity: {
                "@type": "ItemList",
                name: "Broker Vergleich 2025",
                itemListOrder: "http://schema.org/ItemListOrderAscending",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                      "@type": "Product",
                      name: "TradingView",
                      description: "Plattform mit Supercharts, Social Trading und Integration mit führenden Brokern.",
                      image: "https://unser-vergleichsportal.de/images/broker/tradingview.png",
                      brand: "TradingView",
                      offers: {
                        "@type": "Offer",
                        url: "https://unser-vergleichsportal.de/tradingview",
                        price: "0",
                        priceCurrency: "EUR"
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.8",
                        reviewCount: "312"
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    item: {
                      "@type": "Product",
                      name: "eToro",
                      description: "Social Trading Broker für Aktien, ETFs und Kryptowährungen mit CopyTrader.",
                      image: "https://unser-vergleichsportal.de/images/broker/etoro.png",
                      brand: "eToro",
                      offers: {
                        "@type": "Offer",
                        url: "https://unser-vergleichsportal.de/etoro",
                        price: "0",
                        priceCurrency: "EUR"
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.3",
                        reviewCount: "289"
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    item: {
                      "@type": "Product",
                      name: "XTB",
                      description: "Regulierter Broker mit 0 % Kommission auf Aktien & ETFs und breitem CFD-Angebot.",
                      image: "https://unser-vergleichsportal.de/images/broker/xtb.png",
                      brand: "XTB",
                      offers: {
                        "@type": "Offer",
                        url: "https://unser-vergleichsportal.de/xtb",
                        price: "0",
                        priceCurrency: "EUR"
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.5",
                        reviewCount: "204"
                      }
                    }
                  },
                  {
                    "@type": "ListItem",
                    position: 4,
                    item: {
                      "@type": "Product",
                      name: "Investivox",
                      description: "Nachhaltige Investments in ETFs und Aktien mit ESG-Fokus und 0% Kommission.",
                      image: "https://unser-vergleichsportal.de/images/broker/investivox.png",
                      brand: "Investivox",
                      offers: {
                        "@type": "Offer",
                        url: "https://unser-vergleichsportal.de/investivox",
                        price: "0",
                        priceCurrency: "EUR"
                      },
                      aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "4.5",
                        reviewCount: "150"
                      }
                    }
                  }
                ]
              }
            })
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Welcher Broker ist 2025 Testsieger?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Zu den Testsiegern im September 2025 zählen TradingView, eToro, XTB und Investivox – alle reguliert, mit günstigen Gebühren und sicheren Plattformen."
                  }
                },
                {
                  "@type": "Question",
                  name: "Kann ich bei TradingView, eToro, XTB und Investivox auch Kryptowährungen handeln?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, alle vier Broker ermöglichen den Handel mit Bitcoin und weiteren Kryptowährungen – ideal für Einsteiger und Profis."
                  }
                },
                {
                  "@type": "Question",
                  name: "Sind TradingView, eToro, XTB und Investivox reguliert?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, alle vier Anbieter sind durch internationale Aufsichtsbehörden reguliert und bieten hohe Sicherheitsstandards für Anleger."
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
              Bester Neo-Broker September 2025 | Bitcoin & ETF Testsieger
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Entdecken Sie die besten Aktiendepots, Online-Broker und Trading-Plattformen für Aktien, Forex, ETFs,
              Rohstoffe, Futures, DeFi und Kryptowährungen wie Bitcoin. Vergleichen Sie niedrige Gebühren, hohe
              Sicherheit und attraktive Boni. Unsere Testsieger – darunter eToro, TradingView, XTB, WEEX, Vantage und Investivox –
              bieten 0 % Kommission, professionelle Tools und regulierte Plattformen für sicheres Trading.
            </p>
            <Link href="#anbieter">
              <Button className={btnPrimary}>UNSERE TESTSIEGER 09/2025</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Tipps */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            So finden Sie die passende Trading-Plattform
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Gebühren vergleichen</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Achten Sie auf niedrige Gebühren wie 0% Kommission bei TradingView, eToro, XTB, Vantage und Investivox. Prüfen Sie
                auch Spreads und Einzahlungsgebühren.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Überprüfen Sie versteckte Kosten wie Übernachtgebühren (Swap-Gebühren).</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Vergleichen Sie Gebührenstrukturen für verschiedene Anlageklassen (z. B. Aktien vs. Krypto).</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Nutzen Sie Plattformen mit transparenten Kostenrechnern, z. B. XTB oder eToro</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Sicherheit gewährleisten</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                eToro, XTB, Vantage, Investivox (BaFin) – Regulierung, Einlagensicherung und transparente Richtlinien sind
                entscheidend.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Prüfen Sie, ob die Plattform 2-Faktor-Authentifizierung (2FA) anbietet.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Verwenden Sie Plattformen mit Cold-Storage-Optionen für Kryptowährungen.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Stellen Sie sicher, dass Kundengelder auf segregierten Konten gehalten werden.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Demo-Konten testen</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Nutzen Sie kostenlose Demo-Konten, um Strategien risikofrei auszuprobieren.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Testen Sie die Benutzeroberfläche und Tools, um die Bedienung zu erlernen.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Simulieren Sie reale Handelsszenarien mit virtuellem Kapital.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Nutzen Sie Demo-Konten, um Hebelwirkung und Risikomanagement zu üben.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Neue Sektion: Investieren in nachhaltige Kapitalanlagen */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Investieren in nachhaltige Kapitalanlagen
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Was sind nachhaltige Kapitalanlagen?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Nachhaltige Kapitalanlagen, auch als ESG-Investments bekannt, fokussieren sich auf Unternehmen, die Umwelt-, Sozial- und Governance-Kriterien (ESG) erfüllen. Diese Anlagen ermöglichen es Ihnen, in nachhaltige ETFs und Aktien zu investieren, die positive Auswirkungen auf die Umwelt und Gesellschaft haben, ohne auf Rendite zu verzichten.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Investitionen in erneuerbare Energien, soziale Projekte und ethische Unternehmen.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Langfristige Wertsteigerung durch nachhaltige Geschäftsmodelle.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Transparente ESG-Bewertungen für fundierte Entscheidungen.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Warum in nachhaltige Anlagen investieren?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Nachhaltige Investments gewinnen an Popularität, da sie sowohl finanzielle Rendite als auch positive gesellschaftliche Wirkung bieten. Im Jahr 2025 haben ESG-ETFs ein durchschnittliches jährliches Wachstum von über 20% erzielt (Stand 09/2025).
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Reduzierung des CO2-Fußabdrucks durch Investitionen in grüne Technologien.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Hohe Nachfrage nach nachhaltigen Produkten steigert die Wertentwicklung.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Regulierte Plattformen wie Investivox bieten sichere und einfache Zugänge.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Wie funktioniert nachhaltiges Investieren?</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Wählen Sie eine Plattform wie Investivox, die nachhaltige ETFs und Aktien anbietet. Eröffnen Sie ein Konto, nutzen Sie Analysetools, um ESG-konforme Anlagen auszuwählen, und bauen Sie ein diversifiziertes Portfolio auf.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Nutzen Sie Demo-Konten, um nachhaltige Strategien zu testen.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Wählen Sie ETFs mit Fokus auf erneuerbare Energien oder soziale Gerechtigkeit.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Profitieren Sie von niedrigen Gebühren und Boni für neue Nutzer.</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <Link
                href="https://www.awin1.com/awclick.php?gid=347729&mid=15658&awinaffid=2524533&linkid=2258019&clickref="
                target="_blank"
                rel="sponsored"
                aria-label="Zu nachhaltigen Investments mit Investivox"
                title="Zu nachhaltigen Investments mit Investivox"
              >
                <Button className={btnPrimary}>NACHHALTIG INVESTIEREN MIT INVESTIVOX</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Anbieterübersicht */}
      <section id="anbieter" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Top Online-Broker für Krypto und Aktien 2025
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
                        className={`h-4 w-4 ${i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
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
                  <Link
                    href={provider.url}
                    target={provider.url.startsWith("http") ? "_blank" : "_self"}
                    rel={provider.url.startsWith("http") ? "noopener nofollow sponsored" : undefined}
                  >
                    <Button className={`w-full mt-auto ${btnPrimary}`}>ZUM ANBIETER UND SPAREN*</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* CTA: Banking */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-base sm:text-lg font-semibold">Schnelle Auszahlungen & Einzahlungen für Trader</p>
                <p className="text-sm sm:text-base text-gray-600">
                  Zum Trading und dem <strong>Auszahlen von Beträgen</strong> gehört ein starkes Banking – SEPA Instant,
                  niedrige Gebühren & verlässliche Karten.
                </p>
              </div>
              <Link href="/banking" aria-label="Zum Banking-Vergleich" title="Zum Banking-Vergleich">
                <Button className={btnPrimary}>BANKING-PRODUKTE ENTDECKEN</Button>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>
              CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld
              zu verlieren. 72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter.
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Ihr Weg zu DeFi und Krypto-Trading 2025
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Was ist DeFi? Der dezentrale Finanzmarkt erklärt
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              DeFi (Decentralized Finance) revolutioniert den Finanzmarkt durch Blockchain-Technologie. Anstelle zentraler
              Banken ermöglichen Smart Contracts auf Plattformen wie Ethereum oder Polygon direkte Transaktionen wie
              Kredite, Staking oder Swaps. Im Jahr 2025 hat der DeFi-Markt ein Total Value Locked (TVL) von über $150
              Mrd. erreicht. DeFi bietet:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Dezentrales Trading ohne Zwischenhändler
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Staking für passive Einkünfte
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Liquidity Pools für hohe Renditen
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Starten Sie mit TradingView für Top Screener und Social Trading oder erkunden Sie dezentrale Plattformen für
              DeFi.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Krypto-Trading mit TradingView für Anfänger und Profis
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              TradingView ist die führende Plattform für technische Analysen und Social Trading mit über 100 Millionen
              Nutzern. Ob Bitcoin, Ethereum oder Memecoins – mit Supercharts, Top Screener und Community-Ideen finden
              Anfänger und Profis die besten Handelsmöglichkeiten. Vorteile:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloses Konto ohne Kreditkarte
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Echtzeit-Daten für Krypto, Aktien, Forex, Futures
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Integration mit Brokern wie OKX und FOREX.com
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Tipp: Nutzen Sie TradingView’s Demo-Konto, um Strategien risikofrei zu testen.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Sicher Bitcoin handeln mit BlackBull
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Bitcoin bleibt die führende Kryptowährung mit einem Marktanteil von über 50% (Stand 09/2025). Mit BlackBull
              können Sie Bitcoin-CFDs handeln, ohne physische Coins besitzen zu müssen. Vorteile:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Niedrige Spreads ab 0,0 Pips
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schnelle Ausführung mit durchschnittlich 100 ms
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Hebel bis zu 500:1 für flexible Handelsstrategien
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600">
              Tipp: Nutzen Sie BlackBull’s Demo-Konto, um Bitcoin-Trading risikofrei zu testen.
            </p>
            {/* Krypto Handel beginnen – direkt unter dem Tipp eingefügt */}
            <div className="mt-6 mb-6 text-center">
              <Link
                href="https://go.blackbull.com/visit/?bta=42835&nci=6944"
                target="_blank"
                rel="noopener nofollow sponsored"
              >
                <Button className={btnPrimary}>DAS CRYPTO-TRADING STARTEN</Button>
              </Link>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Bridging in DeFi: Kryptowährungen zwischen Blockchains transferieren
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Bridging ermöglicht den Transfer von Kryptowährungen wie Bitcoin oder Ethereum zwischen Blockchains (z. B.
              Ethereum zu Polygon). Dies ist essenziell für DeFi, da viele Protokolle auf spezifischen Chains laufen.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Warum Bridging?</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Zugang zu niedrigeren Gasgebühren oder spezifischen DeFi-Protokollen.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Wie funktioniert’s?</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Nutzen Sie Bridges wie Polygon Bridge, verbinden Sie Ihre Wallet (z. B. MetaMask) und transferieren Sie
                Tokens.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Risiken</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Nutzen Sie vertrauenswürdige Bridges und prüfen Sie Smart-Contract-Audits, um Hacks zu vermeiden.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Spartipp: Kombinieren Sie Bridging mit Plattformen für sicheres Trading nach dem Transfer.
            </p>
            {/* Maestro Bot – updated link */}
            <div className="mt-4 mb-6 sm:mb-8 flex justify-center">
              <Link
                href="https://platinumlabs.vercel.app/"
                target="_blank"
                rel="noopener nofollow sponsored"
                aria-label="Zum PlatinumLabs für Bridging"
                title="Zum PlatinumLabs für Bridging"
              >
                <Button className={btnPrimary}>ZU DEN SCHNELLSTEN CRYPTO-BRIDGES</Button>
              </Link>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Sicher Kryptowährungen kaufen mit TradingView
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Sicherheit ist beim Krypto-Trading entscheidend. Mit TradingView analysieren Sie Märkte und traden sicher
              über verifizierte Broker:
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Analyse</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Nutzen Sie Supercharts und Top Screener für präzise Marktanalysen.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Broker-Integration</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Handeln Sie sicher über regulierte Broker wie OKX oder FOREX.com.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Community</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Profitieren Sie von den Handelsideen der TradingView-Community.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Sicherheits-Tipp: Verwenden Sie Hardware-Wallets wie Ledger für langfristige Krypto-Aufbewahrung und
              aktivieren Sie 2FA.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Sicherheits-Tipp: Verwenden Sie Hardware-Wallets wie Ledger für langfristige Krypto-Aufbewahrung und
              aktivieren Sie 2FA.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Steuerfreies Bitcoin-Trading nach einem Jahr
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Bitcoin bietet eine einzigartige Möglichkeit, Vermögen aufzubauen, insbesondere durch die steuerliche
              Behandlung in Deutschland. Gemäß § 23 Abs. 1 Nr. 2 EStG sind Gewinne aus dem Verkauf von Kryptowährungen wie
              Bitcoin steuerfrei, wenn Sie diese länger als ein Jahr halten. Dies macht Bitcoin zu einer attraktiven Option
              für langfristige Investoren.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Warum Bitcoin für Vermögensaufbau?</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Hohe Wertsteigerung: Bitcoin hat in der Vergangenheit starke Kurssteigerungen erlebt. Seit 2020 hat
                Bitcoin eine durchschnittliche jährliche Rendite von über 50% erzielt (Stand 09/2025).
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Steuerfreiheit nach einem Jahr: Gewinne sind steuerfrei, wenn Sie Bitcoin mindestens 12 Monate halten.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Dezentrale Natur: Bitcoin ist unabhängig von zentralen Banken, wie es zu einer Absicherung gegen Inflation
                macht.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Wie funktioniert steuerfreies Bitcoin-Trading?</h4>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Kaufen Sie Bitcoin auf einer regulierten Plattform wie BlackBull und halten Sie die Coins für mindestens ein
              Jahr. Nach Ablauf dieser Frist sind die Gewinne steuerfrei. Beispiel:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kauf: Sie investieren 5.000 € in Bitcoin am 01.09.2025 über BlackBull.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Holding: Sie halten die Bitcoin bis mindestens 02.09.2026.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Verkauf: Nach einem Kursanstieg verkaufen Sie die Bitcoin für 10.000 €. Der Gewinn von 5.000 € ist
                steuerfrei.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Warum BlackBull für steuerfreies Bitcoin-Trading?</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloses Demo-Konto zum Testen von Strategien
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Schnelle Ausführung mit durchschnittlich 100 ms
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Benutzerfreundliche Plattform für Anfänger und Profis
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Tipp: Starten Sie mit BlackBull, um Bitcoin sicher zu kaufen und von der steuerfreien Haltefrist zu
              profitieren.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Wichtige Hinweise zur Steuerfreiheit</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Private Nutzung: Die Steuerfreiheit gilt nur für private Anleger, nicht für gewerbliche Trader.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Haltefrist: Die Bitcoin müssen mindestens 12 Monate ununterbrochen gehalten werden.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Risiken: Bitcoin ist volatil. Kursverluste sind möglich, und die Steuerfreiheit schützt nicht vor
                Verlusten.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Fazit: Bitcoin-Trading mit einer Haltefrist von über einem Jahr bietet eine einzigartige Chance, Vermögen
              steuerfrei aufzubauen. Mit BlackBull können Sie sicher und einfach in Bitcoin investieren.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Ultimativer Leitfaden zur Wahl der besten Trading-Plattform
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Die Wahl der passenden Plattform hängt von Zielen, Budget und Erfahrung ab. Unser Leitfaden hilft bei der
              Vorauswahl.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Trading-Ziele definieren</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kurzfristiges Krypto/CFD-Trading vs. langfristiges Investieren (Aktien/ETFs) erfordert unterschiedliche
                Tools.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Gebühren und Kosten prüfen</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kommissionen, Spreads, Einzahlungen. Entscheidend ist die Summe per Strategie.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Sicherheit und Regulierung</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Regulierung, Einlagensicherung, transparente AGB, verlässlicher Support.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Demo-Konten nutzen</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Erst simuliert handeln – Lernkurve steigt, Fehlerkosten sinken.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Lernressourcen einbeziehen</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Akademien, Community-Ideen und Tutorials beschleunigen den Skill-Aufbau.
              </li>
            </ul>
            {/* Versicherungen-CTA */}
            <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm sm:text-base text-green-900">
                Bewahren Sie Bitcoin in <strong>Eigenverwahrung</strong> auf? Denken Sie an Absicherung (z. B. Hausrat-,
                Cyber- oder Rechtsschutz – je nach Tarif).
              </p>
              <Link
                href="/versicherungen"
                aria-label="Versicherungen für Krypto-Anleger"
                title="Versicherungen für Krypto-Anleger"
              >
                <Button className={btnPrimary}>ZU DEN VERSICHERUNGEN</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Häufige Fragen zu Trading-Plattformen
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Beste Trading-Plattform für Anfänger?</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Einsteiger profitieren von Social-Trading, Lernmaterialien und einem Demo-Konto, um Strategien risikofrei zu testen.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Plattformen wie eToro bieten CopyTrading, um erfolgreiche Trader nachzuahmen.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>TradingView bietet Tutorials und Community-Ideen für schnelles Lernen.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>XTB's Akademie bietet kostenlose Kurse für Einsteiger.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Welche Gebühren fallen beim Trading an?</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Kommissionen, Spreads und ggf. Ein-/Auszahlungsgebühren. Entscheidend ist die Gesamtkostenquote pro Strategie.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Beachten Sie variable Spreads, die je nach Marktvolatilität schwanken.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Einige Plattformen erheben Inaktivitätsgebühren bei ungenutzten Konten.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Vergleichen Sie Finanzierungskosten bei gehebeltem Trading.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Wie sicher ist Krypto-Trading?</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Sicherheit steigt mit Regulierung, 2FA, Cold-Storage-Optionen und transparenter Risikokommunikation der Anbieter.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Regulierte Plattformen wie eToro sind durch BaFin oder CySec überwacht.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Verwenden Sie starke Passwörter und aktivieren Sie 2FA für zusätzlichen Schutz.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Prüfen Sie, ob die Plattform regelmäßige Sicherheitsaudits durchführt.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Unterschied zwischen CFD- und Krypto-Trading?</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                CFDs handeln Preisbewegungen ohne Besitz des Basiswerts; Spot-Krypto bedeutet Kauf/Verkauf echter Coins an Börsen.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>CFDs ermöglichen Hebelwirkung, erhöhen aber auch das Verlustrisiko.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Spot-Krypto erfordert oft eine Wallet für die Aufbewahrung.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>CFDs haben oft niedrigere Gebühren, aber keine physische Auszahlung.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Was sind Telegram-Bots im Memecoin-Trading?</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Automatisierte Orders, Preisalarme und Wallet-Integration – mit Blick auf Kosten und Sicherheit auswählen.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Bots wie Banana Gun ermöglichen schnelles Trading in volatilen Märkten.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Prüfen Sie die Sicherheitsprotokolle des Bots, um Hacks zu vermeiden.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Testen Sie Bots mit kleinen Beträgen, bevor Sie größere Summen einsetzen.</span>
                </li>
              </ul>
              <div className="text-center">
                <Link
                  href="https://platinumlabs.vercel.app/"
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  aria-label="Zu den Telegram Bots"
                  title="Zu den Telegram Bots"
                >
                  <Button className={btnPrimary}>TOP TELEGRAM SNIPER UND BRIDGE BOTS</Button>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Wie funktioniert Bridging in DeFi?</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Bridges verschieben Tokens zwischen Chains. Nur geprüfte Lösungen nutzen und zuerst klein testen.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Beliebte Bridges sind Polygon Bridge und Arbitrum Bridge.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Beachten Sie Bridge-Gebühren, die je nach Blockchain variieren.</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                  <span>Verwenden Sie Wallets wie MetaMask für sichere Transfers.</span>
                </li>
              </ul>
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
          Zur Startseite
        </Button>
      </Link>
    </div>
  </div>
</footer>
    </div>
  )
}
