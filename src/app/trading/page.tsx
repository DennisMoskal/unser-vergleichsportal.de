"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, TrendingUp, Menu, X, Users, Globe, Handshake, Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-label="Unser-Vergleichsportal.de Logo">
        <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
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
        "Kostenlos für ETFs und echte Aktien und 0,2 % Gebühr für Transaktionen über 100.000 EUR.",
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
      metaDescription: "Kraken bietet über 480 Kryptowährungen, niedrige Gebühren und wöchentliche Staking-Rewards. Jetzt sicher traden!"
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
      metaDescription: "Bybit bietet über 100 Kryptowährungen, bis zu 100x Leverage und niedrige Gebühren. Jetzt mit bis zu 5.000 USDT Bonus starten!"
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
      metaDescription: "LYNX bietet Zugang zu über 100 Märkten, TWS Plattform mit TradingView-Charts und Optionenhandel. Jetzt Depot eröffnen und professionell traden!",
      isTopRecommendation: false
    }
  ]
}

export default function DeFi() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sort providers: Top recommendations first, then others
  const sortedProviders = [...providerData.trading].sort((a, b) => {
    if (a.isTopRecommendation && !b.isTopRecommendation) return -1
    if (!a.isTopRecommendation && b.isTopRecommendation) return 1
    return 0
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "DeFi & Krypto-Trading 2025: Bitcoin handeln & mehr | Unser-Vergleichsportal.de",
          "description": "Vergleichen Sie die besten Trading-Plattformen für DeFi, Bitcoin handeln und Krypto-Trading. Entdecken Sie eToro, TradingView, XTB und mehr für sicheres Trading mit niedrigen Gebühren.",
          "url": "https://unser-vergleichsportal.de/trading",
          "keywords": ["Bitcoin handeln", "Krypto-Trading", "DeFi Trading", "Social Trading", "Trading-Plattformen 2025"],
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": sortedProviders.map((provider, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": provider.name,
                "description": provider.metaDescription,
                "offers": {
                  "@type": "Offer",
                  "price": provider.price,
                  "url": provider.url
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": provider.rating,
                  "reviewCount": "100"
                },
                "keywords": ["Bitcoin handeln", "Krypto-Trading", "Social Trading", "DeFi", "Trading-Plattform"]
              }
            }))
          }
        })}
      </script>

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
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://de.tradingview.com/?aff_id=156504", "_blank")}>
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
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="/versicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Versicherungen
              </Link>
              <Link
                href="/banking"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Banking
              </Link>
              <Link
                href="/tierversicherungen"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tierversicherung
              </Link>
              <Link
                href="/trading"
                className="block w-full text-left text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                href="/#kundenbewertungen"
                className="block text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kundenbewertungen
              </Link>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open("https://de.tradingview.com/?aff_id=156504", "_blank")}>
                Vergleich starten
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Einführungsabschnitt */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Beste Trading-Plattformen 2025: DeFi, Bitcoin & mehr</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Entdecken Sie die besten Trading-Plattformen für DeFi, Bitcoin handeln und Krypto-Trading. Vergleichen Sie niedrige Gebühren, hohe Sicherheit und attraktive Boni. Unsere Testsieger wie eToro, TradingView, XTB und WEEX bieten 0% Kommission, professionelle Tools und regulierte Plattformen für sicheres Trading. Starten Sie jetzt Ihre Reise zum erfolgreichen DeFi- und Krypto-Trading!
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="#anbieter">Jetzt vergleichen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Wie wähle ich die beste Trading-Plattform?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Vergleichen Sie Gebühren</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf niedrige Gebühren wie 0% Kommission bei TradingView, eToro und XTB oder ab 5,80€/Order bei LYNX, um Ihre Trading-Kosten zu minimieren. Prüfen Sie auch versteckte Kosten wie Spreads oder Einzahlungsgebühren.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Sicherheit und Regulierung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Wählen Sie regulierte Plattformen wie eToro (BaFin, CySec), XTB (BaFin), LYNX (BaFin) oder Kraken (Bermuda Monetary Authority) für sicheres Trading. Achten Sie auf Einlagensicherung und transparente Richtlinien.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Demo-Konten nutzen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Testen Sie Plattformen wie TradingView, eToro, XTB oder LYNX mit kostenlosen Demo-Konten, um Strategien risikofrei auszuprobieren und die Plattform kennenzulernen, bevor Sie investieren.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section id="anbieter" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Unsere Testsieger für Trading 2025</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedProviders.map((provider, index) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 flex flex-col h-full relative">
                {provider.isTopRecommendation && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs z-10">
                    Top Empfehlung
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-3xl mb-2">{provider.logo}</div>
                  <CardTitle className="text-lg font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="text-center border-b pb-2 mb-4">
                    <p className="text-xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-1 border-green-200 text-green-700 text-sm">{provider.bonus}</Badge>
                  </div>
                  <ul className="space-y-1 flex-1 overflow-auto">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener nofollow' : undefined}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto">
                      Zum Anbieter*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center text-xs sm:text-sm text-gray-600 p-4">
            <p>
              CFDs sind komplexe Instrumente und gehen wegen der Hebelwirkung mit dem hohen Risiko einher, schnell Geld zu verlieren. 
              72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit diesem Anbieter. 
              Sie sollten überlegen, ob Sie verstehen, wie CFDs funktionieren, und ob Sie es sich leisten können, das hohe Risiko einzugehen, Ihr Geld zu verlieren.
            </p>
            <p className="mt-4">
              *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.
            </p>
          </div>
        </div>
      </section>

      {/* New DeFi & Krypto-Trading Guide Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">DeFi & Krypto-Trading 2025: Ihr Weg zu Bitcoin, Memecoins & Bridging</h2>
          <div className="prose max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-green-600">Was ist DeFi? Der dezentrale Finanzmarkt erklärt</h3>
            <p className="text-gray-600 mb-4">
              DeFi (Decentralized Finance) revolutioniert den Finanzmarkt durch Blockchain-Technologie. Anstelle zentraler Banken ermöglichen Smart Contracts auf Plattformen wie Ethereum oder Polygon direkte Transaktionen wie Kredite, Staking oder Swaps. Im Jahr 2025 hat der DeFi-Markt ein Total Value Locked (TVL) von über $150 Mrd. erreicht. DeFi bietet:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Dezentrales Trading ohne Zwischenhändler
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Staking für passive Einkünfte (z. B. auf Kraken)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Liquidity Pools für hohe Renditen
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              Starten Sie mit eToro für Social Trading oder erkunden Sie dezentrale Plattformen für DeFi.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Krypto-Trading mit eToro: Tools für Anfänger und Profis</h3>
            <p className="text-gray-600 mb-4">
              eToro ist die führende Plattform für Social Trading mit über 35 Millionen Nutzern. Ob Bitcoin handeln oder Krypto-Trading sicher mit Cold Storage – mit CopyTrader™, eToro-Akademie und niedrigen Gebühren finden Anfänger und Profis die besten Handelsmöglichkeiten. Vorteile:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloses Demo-Konto ohne Risiko
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bitcoin handeln mit niedrigen Gebühren
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Krypto-Trading sicher mit Cold Storage
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Tipp:</strong> Nutzen Sie eToro’s Demo-Konto, um Strategien risikofrei zu testen. <a href="https://med.etoro.com/B19298_A126856_TClick.aspx" target="_blank" rel="noopener nofollow" className="text-green-600 hover:underline">Jetzt mit eToro starten</a>.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Bitcoin-Trading: Sicher handeln mit XTB</h3>
            <p className="text-gray-600 mb-4">
              Bitcoin bleibt die führende Kryptowährung mit einem Marktanteil von über 50% (Stand 09/2025). Mit XTB können Sie Bitcoin-CFDs handeln, ohne physische Coins besitzen zu müssen. Vorteile:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                0% Kommission bis 100.000€ Umsatz
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Sichere Aufbewahrung mit Cold Storage
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bis zu 2,3% Zinsen auf Guthaben
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Tipp:</strong> Nutzen Sie XTB’s Demo-Konto, um Bitcoin-Trading risikofrei zu testen. <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener nofollow" className="text-green-600 hover:underline">Jetzt Bitcoin sicher handeln</a>.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Bridging in DeFi: Kryptowährungen zwischen Blockchains bewegen</h3>
            <p className="text-gray-600 mb-4">
              Bridging ermöglicht den Transfer von Kryptowährungen wie Bitcoin oder Ethereum zwischen Blockchains (z. B. Ethereum zu Polygon). Dies ist essenziell für DeFi, da viele Protokolle auf spezifischen Chains laufen.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Warum Bridging?</strong> Zugang zu niedrigeren Gasgebühren oder spezifischen DeFi-Protokollen.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Wie funktioniert’s?</strong> Nutzen Sie Bridges wie Polygon Bridge, verbinden Sie Ihre Wallet (z. B. MetaMask) und transferieren Sie Tokens.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Risiken:</strong> Nutzen Sie vertrauenswürdige Bridges und prüfen Sie Smart-Contract-Audits, um Hacks zu vermeiden.
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Spartipp:</strong> Kombinieren Sie Bridging mit Plattformen wie Kraken für sicheres Trading nach dem Transfer.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Memecoin-Trading: Die Rolle von Telegram-Bots</h3>
            <p className="text-gray-600 mb-4">
              Memecoins wie Dogecoin oder Shiba Inu sind im Jahr 2025 ein Trend, besonders durch Telegram-Bots wie Banana Gun oder Maestro. Diese Bots ermöglichen schnelles Trading direkt über Telegram, ideal für volatile Memecoin-Märkte.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Vorteile:</strong> Automatisiertes Sniper-Trading, Echtzeit-Preisalarme, Wallet-Integration.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Beliebte Bots:</strong> Banana Gun (Solana), Maestro (Ethereum).
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Risiken:</strong> Bots können teuer sein (ab $50/Monat) und erfordern technisches Wissen. Nutzen Sie verifizierte Bots.
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Tipp:</strong> Kombinieren Sie Telegram-Bots with eToro für präzise Marktanalysen und Memecoin-Trading.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Sicher Kryptowährungen kaufen und aufbewahren mit eToro</h3>
            <p className="text-gray-600 mb-4">
              Sicherheit ist beim Krypto-Trading entscheidend. Mit eToro traden Sie sicher über regulierte Plattformen:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>CopyTrader™:</strong> Kopieren Sie Top-Trader für präzise Strategien.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Regulierung:</strong> BaFin und CySec für maximale Sicherheit.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Krypto-Trading sicher:</strong> Cold Storage für Ihre Assets.
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Sicherheits-Tipp:</strong> Verwenden Sie Hardware-Wallets wie Ledger für langfristige Krypto-Aufbewahrung und aktivieren Sie 2FA. <a href="https://med.etoro.com/B19298_A126856_TClick.aspx" target="_blank" rel="noopener nofollow" className="text-green-600 hover:underline">Mit eToro sicher traden</a>.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">So bauen Sie Vermögen mit Bitcoin-Trading auf – steuerfrei nach einem Jahr</h3>
            <p className="text-gray-600 mb-4">
              Bitcoin bleibt die führende Kryptowährung mit einem Marktanteil von über 50% (Stand 09/2025). Gemäß § 23 Abs. 1 Nr. 2 EStG sind Gewinne aus dem Verkauf von Kryptowährungen wie Bitcoin steuerfrei, wenn Sie diese länger als ein Jahr halten. Dies macht Bitcoin zu einer attraktiven Option für langfristige Investoren, die Kapital aufbauen möchten, ohne Kapitalertragssteuer zahlen zu müssen.
            </p>
            <h4 className="text-lg font-semibold mb-2">Warum Bitcoin für Vermögensaufbau?</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Hohe Wertsteigerung:</strong> Bitcoin hat in der Vergangenheit starke Kurssteigerungen erlebt. Seit 2020 hat Bitcoin eine durchschnittliche jährliche Rendite von über 50% erzielt (Stand 09/2025).
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Steuerfreiheit nach einem Jahr:</strong> Wenn Sie Bitcoin kaufen und mindestens 12 Monate halten, sind Gewinne steuerfrei, unabhängig von der Höhe. Dies gilt für Privatpersonen, die Bitcoin als privates Verägensgut halten.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Dezentrale Natur:</strong> Bitcoin ist unabhängig von zentralen Banken, was es zu einer Absicherung gegen Inflation macht.
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Wie funktioniert steuerfreies Bitcoin-Trading?</h4>
            <p className="text-gray-600 mb-4">
              Um von der Steuerfreiheit zu profitieren, kaufen Sie Bitcoin auf einer regulierten Plattform wie eToro und halten Sie die Coins für mindestens ein Jahr. Nach Ablauf dieser Frist können Sie die Bitcoin verkaufen, und die Gewinne sind von der Kapitalertragssteuer befreit. Beispiel:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Kauf:</strong> Sie investieren 5.000 € in Bitcoin am 01.09.2025 über eToro.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Holding:</strong> Sie halten die Bitcoin bis mindestens 02.09.2026.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Verkauf:</strong> Nach einem Kursanstieg verkaufen Sie die Bitcoin für 10.000 €. Der Gewinn von 5.000 € ist steuerfrei.
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Warum eToro für Bitcoin-Trading?</h4>
            <p className="text-gray-600 mb-4">
              eToro ist eine regulierte Plattform (BaFin, CySec), die Bitcoin-Trading mit niedrigen Gebühren und Social Trading anbietet. Zusätzlich bietet eToro:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloses Demo-Konto zum Testen von Strategien
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bitcoin handeln mit niedrigen Gebühren
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Krypto-Trading sicher mit Cold Storage
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Tipp:</strong> Starten Sie mit eToro, um Bitcoin sicher zu kaufen und von der steuerfreien Haltefrist zu profitieren. <a href="https://med.etoro.com/B19298_A126856_TClick.aspx" target="_blank" rel="noopener nofollow" className="text-green-600 hover:underline">Jetzt Bitcoin mit eToro kaufen</a>.
            </p>
            <h4 className="text-lg font-semibold mb-2">Wichtige Hinweise zur Steuerfreiheit</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Private Nutzung:</strong> Die Steuerfreiheit gilt nur für private Anleger, nicht für gewerbliche Trader.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Haltefrist:</strong> Die Bitcoin müssen mindestens 12 Monate ununterbrochen gehalten werden.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Risiken:</strong> Bitcoin ist volatil. Kursverluste sind möglich, und die Steuerfreiheit schützt nicht vor Verlusten.
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Fazit:</strong> Bitcoin-Trading mit einer Haltefrist von über einem Jahr bietet eine einzigartige Chance, Vermögen steuerfrei aufzubauen. Mit eToro können Sie sicher und einfach in Bitcoin investieren. <a href="https://med.etoro.com/B19298_A126856_TClick.aspx" target="_blank" rel="noopener nofollow" className="text-green-600 hover:underline">Jetzt mit eToro starten</a>.
            </p>

            <div className="text-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="#anbieter">Testsieger vergleichen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Häufig gestellte Fragen zu Trading-Plattformen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was ist die beste Trading-Plattform für Anfänger?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Für Anfänger empfehlen wir Plattformen wie eToro und TradingView, die mit Social Trading und benutzerfreundlichen Oberflächen überzeugen. Auch XTB bietet mit kostenlosen Demo-Konten und einer Krypto-Akademie einen einfachen Einstieg.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Welche Gebühren fallen beim Trading an?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Die Gebühren variieren je nach Plattform. eToro bietet Bitcoin handeln mit niedrigen Gebühren, TradingView bietet kostenlose Kontoeröffnung, XTB bietet 0% Kommission bis 100.000€ Umsatz, während Kraken eine Maker Fee von 0,16% berechnet. Achten Sie auf Spreads, Taker Fees und Ein-/Auszahlungsgebühren.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Wie sicher ist Krypto-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Krypto-Trading ist sicher, wenn Sie regulierte Plattformen wie eToro (BaFin, CySec) oder TradingView (mit verifizierten Brokern) nutzen. Achten Sie auf Einlagensicherung und Zwei-Faktor-Authentifizierung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was ist der Unterschied zwischen CFD- und Krypto-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  CFD-Trading (z.B. bei eToro, XTB) erlaubt spekulative Wetten auf Preisbewegungen ohne Besitz des Vermögenswerts, während Krypto-Trading (z.B. bei Kraken oder via TradingView-Broker) den Kauf/Verkauf echter Kryptowährungen beinhaltet.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was sind Telegram-Bots im Memecoin-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Telegram-Bots wie Banana Gun oder Maestro automatisieren Memecoin-Trades, bieten Preisalarme und Wallet-Integration. Sie sind ideal für schnelle Trades, erfordern aber Vorsicht wegen Abokosten und Sicherheitsrisiken.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Wie funktioniert Bridging in DeFi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Bridging ermöglicht den Transfer von Kryptowährungen zwischen Blockchains (z. B. Ethereum zu Polygon). Nutzen Sie vertrauenswürdige Bridges wie Polygon Bridge und prüfen Sie Smart-Contract-Audits, um Risiken zu minimieren.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Guide Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Ihr Weg zur richtigen Trading-Plattform: Der ultimative Leitfaden</h2>
          <div className="prose max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">
              Die Wahl der richtigen Trading-Plattform ist entscheidend für Ihren Erfolg als Investor. Ob Sie in Kryptowährungen, CFDs, Aktien oder ETFs investieren möchten – die Plattform muss zu Ihren Zielen, Ihrem Budget und Ihrem Erfahrungslevel passen. Unser Leitfaden hilft Ihnen, die besten Trading-Plattformen 2025 zu finden, basierend auf Gebühren, Sicherheit, und Funktionen.
            </p>
            <h3 className="text-xl font-bold mb-2">1. Definieren Sie Ihre Trading-Ziele</h3>
            <p className="text-gray-600 mb-4">
              Möchten Sie kurzfristig traden oder langfristig investieren? Für kurzfristiges Trading (z.B. Krypto oder CFDs) sind Plattformen wie eToro, TradingView, Bybit oder Kraken ideal, während XTB und eToro für langfristige ETF- oder Aktieninvestitionen geeignet sind.
            </p>
            <h3 className="text-xl font-bold mb-2">2. Achten Sie auf Gebühren und Kosten</h3>
            <p className="text-gray-600 mb-4">
              Niedrige Gebühren sind essenziell. eToro bietet Bitcoin handeln mit niedrigen Gebühren, TradingView bietet kostenlose Kontoeröffnung, XTB bietet 0% Kommission bis 100.000€ Umsatz, während Bybit mit 0,1% Taker Fee punktet. Prüfen Sie auch Spreads und Einzahlungsgebühren, um versteckte Kosten zu vermeiden.
            </p>
            <h3 className="text-xl font-bold mb-2">3. Sicherheit und Regulierung prüfen</h3>
            <p className="text-gray-600 mb-4">
              Wählen Sie Plattformen, die durch Behörden wie BaFin, CySec (eToro), BaFin (XTB, LYNX) oder die Bermuda Monetary Authority (Kraken) reguliert sind. Dies gewährleistet Einlagensicherung und Transparenz.
            </p>
            <h3 className="text-xl font-bold mb-2">4. Testen Sie mit Demo-Konten</h3>
            <p className="text-gray-600 mb-4">
              Plattformen wie eToro, TradingView, XTB und LYNX bieten kostenlose Demo-Konten, mit denen Sie risikofrei Handelsstrategien testen können. Dies ist besonders für Anfänger wichtig, um die Plattform kennenzulernen.
            </p>
            <h3 className="text-xl font-bold mb-2">5. Nutzen Sie Lernressourcen</h3>
            <p className="text-gray-600 mb-4">
              Viele Plattformen wie eToro (eToro-Akademie), TradingView (Community-Ideen), Kraken (Krypto-Akademie) oder XTB (Lernmaterialien) bieten Lernmaterialien für Einsteiger und Profis. Nutzen Sie diese, um Ihre Trading-Fähigkeiten zu verbessern.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Fazit:</strong> Die besten Trading-Plattformen 2025 wie eToro, TradingView, XTB, und WEEX bieten eine Kombination aus niedrigen Gebühren, hoher Sicherheit und benutzerfreundlichen Tools. Vergleichen Sie jetzt unsere Testsieger und starten Sie Ihre Trading-Reise!
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="#anbieter">Testsieger vergleichen</Link>
            </Button>
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
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland. Über 500 geprüfte Anbieter, mehr als 100.000 zufriedene Kunden.
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
                <li><a href="https://www.c24n.de/ducwCtq" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">DSL Vergleich</a></li>
                <li><a href="https://www.c24n.de/5R17qbN" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">Handytarife</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">Stromvergleich</a></li>
                <li><a href="https://www.c24n.de/Uxudvkj" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">Gasvergleich</a></li>
                <li><a href="https://www.c24n.de/EieKR0E" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">Reisen</a></li>
                <li><a href="https://www.c24n.de/zxy0WKh" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">Ökostrom</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">Kreditkarte</a></li>
                <li><a href="https://www.c24n.de/FZ9nd0R" target="_blank" rel="noopener nofollow" className="hover:text-white transition-colors">Mietwagen</a></li>
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
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400 mb-4">
              © 2025 Unser-Vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
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
