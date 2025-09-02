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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
      </svg>
      <span className="font-bold">martFinanz</span>
    </div>
  )
}

const providerData = {
  defi: [
    {
      name: "XTB",
      rating: 4.5,
      features: [
        "Trade über 40 Krypto-CFDs (Bitcoin, Ethereum, etc.)",
        "0% Kommission bis 100.000€ Umsatz",
        "Bis zu 2,3% Zinsen auf Guthaben",
        "Reguliert durch BaFin für maximale Sicherheit",
        "Kostenloses Demo-Konto für risikofreies Trading",
        "Smarte ETF- und Krypto-Sparpläne",
        "eWallet mit virtueller Mastercard",
        "24/7 Kundensupport in Deutsch",
        "Krypto-Akademie für Einsteiger",
        "Sichere Aufbewahrung mit Cold Storage"
      ],
      price: "0€ Kommission",
      bonus: "Gratis Aktie für Neukunden",
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc",
      metaTitle: "XTB Krypto-Trading: Sicher Bitcoin handeln 2025",
      metaDescription: "XTB bietet 0% Kommission, über 40 Krypto-CFDs und sichere Aufbewahrung für Bitcoin. Jetzt mit gratis Aktie starten!",
      isTopRecommendation: true
    },
    {
      name: "Kraken",
      rating: 4.6,
      features: [
        "Über 480 Kryptowährungen, inkl. Bitcoin und Memecoins",
        "Niedrige Gebühren: 0,16% Maker Fee",
        "Wöchentliche Staking-Rewards für DeFi-Investoren",
        "Reguliert durch Bermuda Monetary Authority",
        "Kostenlose SEPA-Einzahlungen",
        "Hohe Liquidität für stabiles Trading",
        "Krypto-Akademie für DeFi und Bitcoin",
        "Sichere Cold Wallets für Krypto-Aufbewahrung",
        "24/7 preisgekrönter Support"
      ],
      price: "0,16% Maker Fee",
      bonus: "Staking-Rewards",
      logo: "🐙",
      url: "https://www.kraken.com/de-de",
      metaTitle: "Kraken: Sicheres DeFi- und Bitcoin-Trading 2025",
      metaDescription: "Kraken bietet über 480 Kryptowährungen, Staking-Rewards und sichere Cold Wallets. Jetzt DeFi-Trading starten!",
      isTopRecommendation: true
    },
    {
      name: "Uniswap",
      rating: 4.4,
      features: [
        "Leading DeFi protocol for decentralized trading",
        "Swap Bitcoin, Ethereum, and memecoins instantly",
        "No KYC required for wallet-based trading",
        "Liquidity pools for earning DeFi rewards",
        "Compatible with MetaMask and WalletConnect",
        "Supports cross-chain bridging (e.g., Ethereum to Polygon)",
        "Transparent fees (0,3% per swap)",
        "Community-driven governance",
        "Open-source and audited smart contracts"
      ],
      price: "0,3% Swap Fee",
      bonus: "Liquidity Pool Rewards",
      logo: "🦄",
      url: "https://uniswap.org",
      metaTitle: "Uniswap: Beste DeFi-Plattform für Krypto-Swaps 2025",
      metaDescription: "Uniswap bietet dezentrales Trading für Bitcoin, Ethereum und Memecoins mit 0,3% Gebühren. Jetzt DeFi starten!"
    },
    {
      name: "Bybit",
      rating: 4.4,
      features: [
        "Über 100 Kryptowährungen, inkl. Bitcoin und Memecoins",
        "Bis zu 100x Leverage für Krypto-Trading",
        "0,1% Taker Fee für Spot-Trading",
        "Advanced tools for DeFi and futures trading",
        "Kostenlose SEPA-Einzahlungen",
        "Bybit Learn für DeFi- und Bitcoin-Strategien",
        "24/7 mehrsprachiger Support",
        "Secure hot and cold wallet storage"
      ],
      price: "0,1% Taker Fee",
      bonus: "Bis zu 5.000 USDT Bonus",
      logo: "⚡",
      url: "https://www.bybit.eu/invite?ref=RME6DV2",
      metaTitle: "Bybit: Krypto-Trading mit Leverage und Memecoins 2025",
      metaDescription: "Bybit bietet Bitcoin- und Memecoin-Trading mit bis zu 100x Leverage. Jetzt mit 5.000 USDT Bonus starten!"
    }
  ]
}

export default function DeFi() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sort providers: Top recommendations first
  const sortedProviders = [...providerData.defi].sort((a, b) => {
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
          "name": "DeFi & Krypto-Trading 2025: Bitcoin, Memecoins & mehr | SmartFinanz",
          "description": "Entdecken Sie die besten DeFi- und Krypto-Trading-Plattformen 2025 für Bitcoin, Memecoins und mehr. Vergleichen Sie XTB, Kraken, Uniswap und Bybit für sicheres Trading, Bridging und Staking.",
          "url": "https://www.smartfinanz.de/defi",
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
                }
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
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://link-pso.xtb.com/pso/lMDhc", "_blank")}>
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
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open("https://link-pso.xtb.com/pso/lMDhc", "_blank")}>
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">DeFi & Krypto-Trading 2025: Bitcoin, Memecoins & mehr</h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Tauchen Sie ein in die Welt des DeFi-Marktes und Kryptowährungshandels! Vergleichen Sie die besten Plattformen für Bitcoin-Trading, Memecoins und Bridging. Unsere Testsieger wie <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="underline">XTB</a>, Kraken und Uniswap bieten niedrige Gebühren, sichere Wallets und DeFi-Funktionen wie Staking und Liquidity Pools. Starten Sie jetzt sicher mit Bitcoin und Memecoins!
            </p>
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="#anbieter">Jetzt DeFi-Plattformen vergleichen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tipps zur Auswahl */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Wie wähle ich die beste DeFi- und Krypto-Plattform?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center">
                  <Globe className="mr-2 h-5 w-5" /> Niedrige Gebühren
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Achten Sie auf niedrige Trading-Gebühren wie 0% Kommission bei <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">XTB</a> oder 0,16% Maker Fee bei Kraken. Prüfen Sie Swap-Gebühren bei DeFi-Plattformen wie Uniswap (0,3%).
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center">
                  <Shield className="mr-2 h-5 w-5" /> Sicherheit & Regulierung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Wählen Sie regulierte Plattformen wie XTB (BaFin) oder Kraken (Bermuda Monetary Authority). Nutzen Sie sichere Wallets wie Cold Storage bei XTB für Bitcoin-Aufbewahrung.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center">
                  <Users className="mr-2 h-5 w-5" /> Benutzerfreundlichkeit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Für Anfänger sind Plattformen wie XTB und Uniswap ideal, dank intuitiver Oberflächen und Lernressourcen wie der Krypto-Akademie. Testen Sie mit Demo-Konten risikofrei.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Anbieterübersicht */}
      <section id="anbieter" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Unsere Testsieger für DeFi & Krypto-Trading 2025</h2>
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
                  <Link href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
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
              Kryptowährungen sind volatile Instrumente und bergen ein hohes Risiko, schnell Geld zu verlieren. 
              72% der Kleinanlegerkonten verlieren Geld beim CFD-Handel mit Anbietern wie XTB. 
              Sie sollten überlegen, ob Sie das Risiko eingehen können, Ihr Geld zu verlieren.
            </p>
            <p className="mt-4">
              *Wir erhalten eine Provision für Käufe über diese Links. Diese Provision hat keinen Einfluss auf den Kundenpreis.
            </p>
          </div>
        </div>
      </section>

      {/* DeFi & Krypto-Trading Guide */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">DeFi & Krypto-Trading 2025: Ihr Weg zu Bitcoin, Memecoins & Bridging</h2>
          <div className="prose max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-green-600">Was ist DeFi? Der dezentrale Finanzmarkt erklärt</h3>
            <p className="text-gray-600 mb-4">
              DeFi (Decentralized Finance) revolutioniert den Finanzmarkt durch Blockchain-Technologie. Anstelle zentraler Banken ermöglichen Smart Contracts auf Plattformen wie Ethereum oder Polygon direkte Transaktionen wie Kredite, Staking oder Swaps. Im Jahr 2025 hat der DeFi-Markt ein Total Value Locked (TVL) von über $150 Mrd. erreicht, mit Plattformen wie Uniswap und Aave an der Spitze. DeFi bietet:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Dezentrales Trading ohne Zwischenhändler
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Staking für passive Einkünfte (z. B. Kraken)
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Liquidity Pools für hohe Renditen
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              Starten Sie mit <a href="https://uniswap.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Uniswap</a> für dezentrales Trading oder <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">XTB</a> für reguliertes Krypto-Trading.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Bitcoin-Trading: Sicher handeln mit XTB</h3>
            <p className="text-gray-600 mb-4">
              Bitcoin bleibt die führende Kryptowährung mit einem Marktanteil von über 50% (Stand 09/2025). Mit <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">XTB</a> können Sie Bitcoin-CFDs handeln, ohne physische Coins besitzen zu müssen. Vorteile:
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
              <strong>Tipp:</strong> Nutzen Sie XTB’s Demo-Konto, um Bitcoin-Trading risikofrei zu testen. <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Jetzt Bitcoin sicher handeln</a>.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Bridging in DeFi: Kryptowährungen zwischen Blockchains bewegen</h3>
            <p className="text-gray-600 mb-4">
              Bridging ermöglicht den Transfer von Kryptowährungen (z. B. Bitcoin, Ethereum) zwischen Blockchains wie Ethereum, Polygon oder Binance Smart Chain. Dies ist essenziell für DeFi, da viele Protokolle auf spezifischen Chains laufen. Beispielsweise können Sie mit Uniswap’s Bridge-Feature Tokens von Ethereum zu Polygon transferieren.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Warum Bridging?</strong> Zugang zu niedrigeren Gasgebühren (z. B. Polygon) oder spezifischen DeFi-Protokollen.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Wie funktioniert’s?</strong> Nutzen Sie Bridges wie Polygon Bridge oder Anyswap, verbinden Sie Ihre Wallet (z. B. MetaMask) und transferieren Sie Tokens.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Risiken:</strong> Achten Sie auf vertrauenswürdige Bridges, um Hacks zu vermeiden. Prüfen Sie Audits der Smart Contracts.
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Spartipp:</strong> Nutzen Sie Plattformen wie Uniswap für sicheres Bridging ohne KYC. <a href="https://uniswap.org" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Jetzt Bridging starten</a>.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Memecoin-Trading: Die Rolle von Telegram-Bots</h3>
            <p className="text-gray-600 mb-4">
              Memecoins wie Dogecoin oder Shiba Inu sind im Jahr 2025 weiterhin ein Trend, besonders durch Telegram-Bots wie Banana Gun oder Maestro. Diese Bots ermöglichen schnelles Trading direkt über Telegram, ideal für volatile Memecoin-Märkte.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Vorteile von Telegram-Bots:</strong> Automatisiertes Sniper-Trading, Echtzeit-Preisalarme, direkte Wallet-Integration.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Beliebte Bots:</strong> Banana Gun (für Solana-Memecoins), Maestro (für Ethereum-basierte Coins).
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Risiken:</strong> Bots können teure Abos haben (ab $50/Monat) und erfordern technisches Wissen. Nutzen Sie nur verifizierte Bots.
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Tipp:</strong> Kombinieren Sie Telegram-Bots mit Plattformen wie Bybit für Memecoin-Trading mit Leverage. <a href="https://www.bybit.eu/invite?ref=RME6DV2" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Jetzt Memecoins traden</a>.
            </p>

            <h3 className="text-xl font-bold mb-4 text-green-600">Sicher Kryptowährungen kaufen und aufbewahren mit XTB</h3>
            <p className="text-gray-600 mb-4">
              Sicherheit ist beim Krypto-Trading entscheidend. Mit <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">XTB</a> kaufen und lagern Sie Bitcoin sicher:
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Kauf:</strong> Kaufen Sie Bitcoin-CFDs mit 0% Kommission und nutzen Sie die eWallet-Funktion.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Aufbewahrung:</strong> XTB nutzt Cold Storage für maximale Sicherheit Ihrer Coins.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                <strong>Zwei-Faktor-Authentifizierung:</strong> Schützen Sie Ihr Konto vor unbefugtem Zugriff.
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              <strong>Sicherheits-Tipp:</strong> Verwenden Sie Hardware-Wallets wie Ledger für langfristige Bitcoin-Aufbewahrung und aktivieren Sie 2FA. <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Mit XTB sicher Bitcoin kaufen</a>.
            </p>

            <div className="text-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="#anbieter">Beste DeFi- und Krypto-Plattformen vergleichen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Häufig gestellte Fragen zu DeFi & Krypto-Trading</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was ist der Unterschied zwischen DeFi und traditionellem Krypto-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  DeFi ermöglicht dezentrales Trading über Smart Contracts (z. B. Uniswap), während traditionelles Trading (z. B. XTB, Kraken) zentralisierte Börsen nutzt. DeFi bietet mehr Anonymität, hat aber höhere Gasgebühren.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Ist Bitcoin-Trading sicher?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Ja, mit regulierten Plattformen wie <a href="https://link-pso.xtb.com/pso/lMDhc" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">XTB</a> (BaFin) oder Kraken. Nutzen Sie Cold Storage und 2FA für maximale Sicherheit.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Wie funktionieren Telegram-Bots für Memecoin-Trading?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Telegram-Bots wie Banana Gun automatisieren Memecoin-Trades, bieten Preisalarme und Wallet-Integration. Sie sind ideal für schnelle Trades, erfordern aber Vorsicht wegen Abokosten und Sicherheitsrisiken.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200">
              <CardHeader>
                <CardTitle className="text-lg font-bold">Was sind die Risiken beim Bridging?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Bridging birgt Risiken wie Smart-Contract-Hacks oder Gebührenverluste. Nutzen Sie geprüfte Bridges wie Polygon Bridge und überprüfen Sie Audits, z. B. bei Uniswap.
                </p>
              </CardContent>
            </Card>
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
                <li><a href="https://www.c24n.de/ducwCtq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DSL Vergleich</a></li>
                <li><a href="https://www.c24n.de/5R17qbN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Handytarife</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Stromvergleich</a></li>
                <li><a href="https://www.c24n.de/Uxudvkj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Gasvergleich</a></li>
                <li><a href="https://www.c24n.de/EieKR0E" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reisen</a></li>
                <li><a href="https://www.c24n.de/zxy0WKh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Ökostrom</a></li>
                <li><a href="https://www.c24n.de/RYXPGyh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kreditkarte</a></li>
                <li><a href="https://www.c24n.de/FZ9nd0R" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mietwagen</a></li>
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
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-400 mb-4">
              © 2025 SmartFinanz. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
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
