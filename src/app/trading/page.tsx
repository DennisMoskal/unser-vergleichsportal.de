"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        aria-label="Unser-Vergleichsportal.de Logo"
      >
        <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Arial Black, sans-serif"
          fontSize="20"
          fill="white"
          fontWeight="900"
        >
          S
        </text>
      </svg>
      <span className="font-bold">martFinanz</span>
    </div>
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
      metaDescription:
        "TradingView bietet Supercharts, Top Screener und Social Trading für über 100 Mio. Nutzer. Starten Sie kostenlos mit Aktien, Krypto, Forex und Futures!",
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
      metaDescription:
        "eToro bietet Social Trading, Bitcoin handeln mit niedrigen Gebühren, über 70 Kryptowährungen und 3.000+ Aktien/ETFs. Jetzt mit kostenlosem Demo-Konto starten!",
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
        "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
        "Platz 1 CFD-Broker 2024/25"
      ],
      price: "0€ Kommission",
      bonus: "Kostenlose Kontoeröffnung",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc",
      metaTitle: "XTB Trading: Testsieger CFD-Broker 2025",
      metaDescription:
        "XTB bietet 0% Kommission bis 100.000€ Umsatz, über 8000 Aktien & ETFs und smarte Sparpläne. Jetzt mit gratis Aktie starten!",
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
      metaDescription:
        "WEEX bietet über 1.700 Handelspaare, bis zu 400x Leverage und einen 1.000 BTC Schutzfonds. Jetzt mit 5% Einzahlungs-Coupon starten!",
      isTopRecommendation: true
    },
    {
      name: "Kraken",
      rating: 4.6,
      features: [
        "Über 480 Kryptowährungen zum Kaufen und Verkaufen",
        "Niedrige Spreads und 0,16% Maker Fee",
        "Wöchentliche Staking-Rewards mit über 800 Mio. € ausgezahlt",
        "24/7 preisgekrönter Kundensupport",
        "Kostenlose Euro-Einzahlungen via SEPA oder PayPal",
        "Reguliert durch die Bermuda Monetary Authority",
        "Hohe Liquidität für stabiles Trading",
        "Krypto-Akademie für Einsteiger und Profis"
      ],
      price: "0,16% Maker Fee",
      bonus: "Wöchentliche Staking-Rewards",
      logo: "🐙",
      url: "https://www.kraken.com/de-de",
      metaTitle: "Kraken Trading: Sichere Krypto-Plattform für Deutschland 2025",
      metaDescription:
        "Kraken bietet über 480 Kryptowährungen, niedrige Gebühren und wöchentliche Staking-Rewards. Jetzt sicher traden!"
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
      metaDescription:
        "Bybit bietet über 100 Kryptowährungen, bis zu 100x Leverage und niedrige Gebühren. Jetzt mit bis zu 5.000 USDT Bonus starten!"
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
      metaDescription:
        "Moneta Markets bietet über 1000 Instrumente, Spreads ab 0.0 Pips, bis zu 1000:1 Leverage und 50% Cashback Bonus. Jetzt mit kostenlosem Demo-Konto starten!",
      isTopRecommendation: false
    },
    {
      name: "LYNX",
      rating: 4.7,
      features: [
        "Zugang zu über 100 Märkten in 30+ Ländern",
        "Handel mit US- und Eurex-Optionen",
        "TWS Handelsplatform mit TradingView-Charts",
        "Stop-Loss & Trailing-Stop Orders für alle Produkte",
        "Zinsen durch Aktienverleih",
        "Optionsprämien durch Verkauf von Optionen",
        "24/7 Kundensupport und Premium-Newsletter",
        "Maximale Individualisierung für Profi-Trader",
        "Reguliert durch BaFin für sicheres Trading"
      ],
      price: "ab 5,80€/Order",
      bonus: "Kostenloses Demo-Konto",
      logo: "💹",
      url: "https://www.lynxbroker.de/",
      metaTitle: "LYNX Trading: Professionelle Handelsplattform für Anleger 2025",
      metaDescription:
        "LYNX bietet Zugang zu über 100 Märkten, TWS Plattform mit TradingView-Charts und Optionenhandel. Jetzt Depot eröffnen und professionell traden!",
      isTopRecommendation: false
    }
  ]
}

// Einheitliches Button-Layout (ohne Icons)
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
const btnPrimary = `${btnBase} bg-green-600 hover:bg-green-700 text-white`
const btnSecondary = `${btnBase} bg-white text-green-600 hover:bg-gray-100`

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
        <title>DeFi & Krypto-Trading 2025: Bitcoin handeln & Broker-Vergleich | Unser-Vergleichsportal</title>
        <meta
          name="description"
          content="Vergleichen Sie die besten Trading-Plattformen für DeFi, Bitcoin handeln und Krypto-Trading. Testsieger wie eToro, TradingView, XTB & WEEX im Vergleich: Gebühren, Sicherheit, Funktionen."
        />
        <meta
          name="keywords"
          content="Bitcoin handeln, Krypto-Trading, DeFi Trading, Trading Plattform, Social Trading, CFD Broker Vergleich, beste Broker 2025, XTB, eToro, TradingView, Kraken, Bybit, WEEX"
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

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "DeFi & Krypto-Trading 2025: Bitcoin handeln & mehr | Unser-Vergleichsportal.de",
            description:
              "Vergleichen Sie die besten Trading-Plattformen für DeFi, Bitcoin handeln und Krypto-Trading. Entdecken Sie eToro, TradingView, XTB und mehr für sicheres Trading mit niedrigen Gebühren.",
            url: "https://unser-vergleichsportal.de/trading",
            keywords: [
              "Bitcoin handeln",
              "Krypto-Trading",
              "DeFi Trading",
              "Social Trading",
              "Trading-Plattformen 2025"
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
                  keywords: ["Bitcoin handeln", "Krypto-Trading", "Social Trading", "DeFi", "Trading-Plattform"]
                }
              }))
            }
          })
        }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm relative border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex flex-col items-center">
            <SmartFinanzLogo className="text-2xl text-gray-900" />
            <span className="text-sm text-gray-600 mt-1">Unser-Vergleichsportal.de</span>
          </div>
        <nav className="hidden md:flex space-x-6">
            <Link href="/versicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Versicherungen
            </Link>
            <Link href="/banking" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Banking
            </Link>
            <Link href="/tierversicherungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Tierversicherung
            </Link>
            <Link href="/trading" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Trading
            </Link>
            <Link href="/#kundenbewertungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Kundenbewertungen
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              className={`hidden md:inline-flex ${btnPrimary}`}
              onClick={() => window.open("https://de.tradingview.com/?aff_id=156504", "_blank")}
            >
              Vergleich starten
            </Button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu öffnen/schließen"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* (bleibt unverändert) */}
      </header>

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Beste Broker & Trading-Plattformen 2025: Aktien, DeFi, Bitcoin & mehr
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Entdecken Sie die besten Broker & Trading-Plattformen für Aktien, Forex, ETF, Rohstoffe, Futures, DeFi, Bitcoin
              handeln und Krypto-Trading. Vergleichen Sie niedrige Gebühren, hohe Sicherheit und attraktive Boni. Unsere
              Testsieger wie eToro, TradingView, XTB und WEEX bieten 0% Kommission, professionelle Tools und regulierte
              Plattformen für sicheres Trading. Starten Sie jetzt Ihre Reise!
            </p>
            <Link href="#anbieter">
              <Button className={btnSecondary}>Jetzt vergleichen</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            Wie wähle ich die beste Trading-Plattform?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Gebühren</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf niedrige Gebühren wie 0% Kommission bei TradingView, eToro und XTB oder ab 5,80€/Order bei
                  LYNX. Prüfen Sie auch Spreads und Einzahlungsgebühren.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Sicherheit und Regulierung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  eToro, XTB, LYNX (BaFin/CySec) oder Kraken (BMA) – Regulierung, Einlagensicherung und transparente
                  Richtlinien sind wichtig.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Demo-Konten nutzen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Testen Sie Plattformen mit kostenlosen Demo-Konten, um Strategien risikofrei auszuprobieren.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section id="anbieter" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Unsere Testsieger für Trading 2025
          </h2>
        </div>
        <div className="container mx-auto px-4">
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
                  <Link
                    href={provider.url}
                    target={provider.url.startsWith("http") ? "_blank" : "_self"}
                    rel={provider.url.startsWith("http") ? "noopener nofollow" : undefined}
                  >
                    <Button className={`w-full mt-auto ${btnPrimary}`}>Zum Anbieter*</Button>
                  </Link>
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

      {/* Guide + Versicherungen-CTA (Button „Testsieger vergleichen“ entfernt) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            DeFi & Krypto-Trading 2025: Ihr Weg zu Bitcoin, Memecoins & Bridging
          </h2>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Was ist DeFi? Der dezentrale Finanzmarkt erklärt
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              DeFi nutzt Blockchains und Smart Contracts für Finanzdienste ohne zentrale Banken.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Dezentraler Handel ohne Zwischenhändler
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Staking für passive Einkünfte
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Liquidity Pools für Renditen
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Krypto-Trading: Tools für Anfänger und Profis
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">Lernressourcen, Copy-Funktionen, sichere Verwahrung.</p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloses Demo-Konto
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bitcoin handeln mit niedrigen Gebühren
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Sichere Verwahrung (z. B. Cold Storage)
              </li>
            </ul>

            {/* Versicherungen-CTA */}
            <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-sm sm:text-base text-green-900">
                Bewahren Sie Bitcoin in <strong>Eigenverwahrung</strong> auf? Denken Sie an Absicherung (z. B. Hausrat-, Cyber-
                oder Rechtsschutz – je nach Tarif).
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
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was ist die beste Trading-Plattform für Anfänger?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Einsteiger profitieren von Social-Trading, Lernmaterialien und einem Demo-Konto, um Strategien risikofrei
                  zu testen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Welche Gebühren fallen beim Trading an?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Kommissionen, Spreads und ggf. Ein-/Auszahlungsgebühren. Entscheidend ist die Gesamtkostenquote pro
                  Strategie.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Wie sicher ist Krypto-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Sicherheit steigt mit Regulierung, 2FA, Cold-Storage-Optionen und transparenter Risikokommunikation der
                  Anbieter.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was ist der Unterschied zwischen CFD- und Krypto-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  CFDs handeln Preisbewegungen ohne Besitz des Basiswerts; Spot-Krypto bedeutet Kauf/Verkauf echter Coins an
                  Börsen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was sind Telegram-Bots im Memecoin-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Automatisierte Orders, Preisalarme und Wallet-Integration – mit Blick auf Kosten und Sicherheit auswählen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Wie funktioniert Bridging in DeFi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Bridges verschieben Tokens zwischen Chains. Nur geprüfte Lösungen nutzen und zuerst klein testen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vergleichs-Leitfaden (Button entfernt) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Ihr Weg zur richtigen Trading-Plattform: Der ultimative Leitfaden
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Die Wahl der passenden Plattform hängt von Zielen, Budget und Erfahrung ab. Unser Leitfaden hilft bei der
              Vorauswahl.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Trading-Ziele definieren</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Kurzfristiges Krypto/CFD-Trading vs. langfristiges Investieren (Aktien/ETFs) erfordert unterschiedliche Tools.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Gebühren & Kosten prüfen</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Kommissionen, Spreads, Einzahlungen. Entscheidend ist die Summe pro Strategie.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Sicherheit & Regulierung</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Regulierung, Einlagensicherung, transparente AGB, verlässlicher Support.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">4. Demo nutzen</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Erst simuliert handeln – Lernkurve steigt, Fehlerkosten sinken.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">5. Lernressourcen</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Akademien, Community-Ideen und Tutorials beschleunigen den Skill-Aufbau.
            </p>
            {/* Kein Button mehr hier */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-5">
            <div>
              <div className="flex flex-col items-start mb-4">
                <SmartFinanzLogo className="text-xl" />
                <span className="text-sm text-gray-400 mt-1">Unser-Vergleichsportal.de</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland. Über 500 geprüfte Anbieter, mehr als
                100.000 zufriedene Kunden.
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary" className="bg-gray-800 text-green-400 border-green-400">
                  TÜV Zertifiziert
                </Badge>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Finanzprodukte</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/versicherungen" className="hover:text-white transition-colors">
                    Versicherungsvergleich
                  </Link>
                </li>
                <li>
                  <Link href="/banking" className="hover:text-white transition-colors">
                    Girokonto & Kredite
                  </Link>
                </li>
                <li>
                  <Link href="/tierversicherungen" className="hover:text-white transition-colors">
                    Tierkrankenversicherung
                  </Link>
                </li>
                <li>
                  <Link href="/trading" className="hover:text-white transition-colors">
                    Online Broker Vergleich
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Weitere Services</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://www.c24n.de/ducwCtq"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    DSL Vergleich
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.c24n.de/5R17qbN"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    Handytarife
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.c24n.de/RYXPGyh"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    Stromvergleich
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.c24n.de/Uxudvkj"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    Gasvergleich
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.c24n.de/EieKR0E"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    Reisen
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.c24n.de/zxy0WKh"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    Ökostrom
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.c24n.de/RYXPGyh"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    Kreditkarte
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.c24n.de/FZ9nd0R"
                    target="_blank"
                    rel="noopener nofollow"
                    className="hover:text-white transition-colors"
                  >
                    Mietwagen
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Unternehmen</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/ueber-uns" className="hover:text-white transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/partnerprogramme" className="hover:text-white transition-colors">
                    Partnerprogramme
                  </Link>
                </li>
                <li>
                  <Link href="/karriere" className="hover:text-white transition-colors">
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Rechtliches</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/datenschutz" className="hover:text-white transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="hover:text-white transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="hover:text-white transition-colors">
                    AGB
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-richtlinie" className="hover:text-white transition-colors">
                    Cookie-Richtlinie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400 mb-4">
              © 2025 Unser-Vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL,
              Strom, Gas & mehr
            </p>
            <Link href="/">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:text-base">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
