"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, PiggyBank, Heart, TrendingUp, Star, Check } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

const providerData = {
  trading: [
    { 
      name: "Kraken", 
      rating: 4.6, 
      features: ["Hohe Sicherheit", "Niedrige Gebühren", "Viele Kryptowährungen", "Staking Rewards"], 
      price: "0,16% Maker Fee", 
      bonus: "Bis zu 10% Staking-APY", 
      logo: "🐙",
      url: "/anbieter/kraken"
    },
    { 
      name: "Bybit", 
      rating: 4.4, 
      features: ["Derivatives Trading", "Bis zu 100x Leverage", "Advanced Trading Tools", "Krypto-Spot-Handel"], 
      price: "0,1% Taker Fee", 
      bonus: "Bis zu $30.000 Trading Bonus", 
      logo: "⚡",
      url: "/anbieter/bybit"
    },
    { 
      name: "eToro", 
      rating: 4.3, 
      features: ["Social Trading", "Copy Trading", "Benutzerfreundliche Plattform", "Aktien & Krypto"], 
      price: "1% Spread", 
      bonus: "Kostenloses Demo-Portfolio", 
      logo: "🌐",
      url: "/anbieter/etoro"
    },
    { 
      name: "XTB", 
      rating: 4.5, 
      features: [
        "Gratis Aktie für neue Investoren",
        "Bis zu 2,3% Zinsen auf Guthaben",
        "Über 8000 Aktien & ETFs",
        "Über 2600 CFD-Instrumente",
        "Über 40 Krypto-CFDs",
        "eWallet mit virtueller Mastercard",
        "Smarte ETF-Sparpläne",
        "0% Kommission bis 100.000€",
        "Kostenlose Ein- & Auszahlungen",
        "Platz 1 CFD-Broker 2024/25"
      ], 
      price: "0€ Kommission", 
      bonus: "Kostenlose Kontoeröffnung", 
      logo: "📊",
      url: "https://link-pso.xtb.com/pso/lMDhc"
    },
  ],
}

export default function Trading() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Trading: Krypto & Aktienhandel - SmartFinanz</title>
        <meta name="description" content="Entdecken Sie die besten Plattformen für Krypto- und Aktienhandel. Vergleichen Sie Top-Anbieter wie Kraken, eToro und XTB für CFDs, Spot-Handel, ETFs und mehr." />
        <meta name="keywords" content="Trading, Krypto Handel, Aktienhandel, CFD Trading, Kryptowährungen, Aktien, SmartFinanz" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was ist der Unterschied zwischen Krypto- und Aktienhandel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Krypto-Handel bezieht sich auf den Kauf und Verkauf von Kryptowährungen wie Bitcoin oder Ethereum, oft über Spot- oder Derivate-Handel. Aktienhandel umfasst den Handel mit Unternehmensanteilen an der Börse, einschließlich ETFs und CFDs. Beide bieten Chancen, unterscheiden sich aber in Volatilität und Regulierung."
                }
              },
              {
                "@type": "Question",
                "name": "Welche Plattform ist die beste für Einsteiger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Für Einsteiger sind Plattformen wie eToro ideal, da sie benutzerfreundlich sind und Features wie Social Trading und Demo-Konten bieten. XTB ist ebenfalls geeignet, dank kostenloser Kontoeröffnung und umfangreicher Bildungsressourcen."
                }
              },
              {
                "@type": "Question",
                "name": "Was sind die Risiken beim Trading?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Trading, insbesondere mit CFDs oder Hebelprodukten, birgt hohe Risiken, da Verluste das eingesetzte Kapital übersteigen können. Es ist wichtig, nur Kapital zu investieren, dessen Verlust Sie verkraften können, und sich über die Funktionsweise der Instrumente zu informieren."
                }
              }
            ]
          })}
        </script>
      </Head>

      {/* Kategorie-Navigation wie auf der Hauptseite */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {[
              { key: 'versicherungen', label: 'VERSICHERUNGEN', icon: Shield },
              { key: 'banking', label: 'BANKING', icon: PiggyBank },
              { key: 'tierversicherungen', label: 'TIERVERSICHERUNG', icon: Heart },
              { key: 'trading', label: 'TRADING', icon: TrendingUp }
            ].map(({ key, label, icon: Icon }) => (
              <Link
                key={key}
                href={`/${key}`}
                className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium transition-colors flex items-center text-xs sm:text-sm ${
                  key === 'trading' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Einleitender Abschnitt mit SEO-optimierten Inhalten */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Trading: Die besten Plattformen für Krypto & Aktienhandel</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            Entdecken Sie die besten Plattformen für Kryptowährungen und Aktienhandel. Vergleichen Sie Top-Anbieter wie Kraken, eToro und XTB für Spot-Handel, CFDs, ETFs und mehr. Finden Sie die perfekte Lösung für Ihre Trading-Ziele, egal ob Einsteiger oder Profi.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#anbieter">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
                Jetzt Anbieter vergleichen
              </Button>
            </Link>
            <Link href="/ueber-uns">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 text-sm sm:text-base">
                Mehr über SmartFinanz
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interaktives Widget wie auf der Hauptseite */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Wählen Sie Ihre Kategorie</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-2xl mx-auto">
            <Link href="/versicherungen">
              <Button variant="outline" className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base">
                <Shield className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                Versicherung
              </Button>
            </Link>
            <Link href="/banking">
              <Button variant="outline" className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base">
                <PiggyBank className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                Banking
              </Button>
            </Link>
            <Link href="/tierversicherungen">
              <Button variant="outline" className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base">
                <Heart className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                Tierversicherung
              </Button>
            </Link>
            <Link href="/trading">
              <Button variant="default" className="h-12 sm:h-14 w-full text-center flex items-center justify-center text-sm sm:text-base bg-green-600 text-white">
                <TrendingUp className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 w-5" />
                Trading
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Anbieter-Vergleich */}
      <section id="anbieter" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Top-Plattformen für Krypto & Aktienhandel</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Unsere Experten haben die besten Trading-Plattformen für 2025 analysiert, basierend auf Gebühren, Funktionen, Benutzerfreundlichkeit und Sicherheit.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providerData.trading.map((provider) => (
              <Card key={provider.name} className="hover:shadow-lg transition-shadow border-2 hover:border-green-200 relative">
                {provider.name === "Kraken" && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-xs">Top Empfehlung</Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <div className="text-4xl mb-3">{provider.logo}</div>
                  <CardTitle className="text-xl font-bold">{provider.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(provider.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">{provider.rating}/5</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center border-b pb-3">
                    <p className="text-xl font-bold text-green-600">{provider.price}</p>
                    <Badge variant="outline" className="mt-2 border-green-200 text-green-700 text-sm">{provider.bonus}</Badge>
                  </div>
                  <ul className="space-y-2 grid grid-cols-1 gap-2">
                    {provider.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={provider.url} target={provider.url.startsWith('http') ? '_blank' : '_self'} rel={provider.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white mt-4">
                      Zum Anbieter*
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-xs sm:text-sm text-gray-600">
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

      {/* FAQ-Sektion für SEO und Nutzer-Mehrwert */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Häufig gestellte Fragen zum Trading</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold">Was ist der Unterschied zwischen Krypto- und Aktienhandel?</h3>
              <p className="text-gray-600">
                Krypto-Handel bezieht sich auf den Kauf und Verkauf von Kryptowährungen wie Bitcoin oder Ethereum, oft über Spot- oder Derivate-Handel. Aktienhandel umfasst den Handel mit Unternehmensanteilen an der Börse, einschließlich ETFs und CFDs. Beide bieten Chancen, unterscheiden sich aber in Volatilität und Regulierung.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Welche Plattform ist die beste für Einsteiger?</h3>
              <p className="text-gray-600">
                Für Einsteiger sind Plattformen wie eToro ideal, da sie benutzerfreundlich sind und Features wie Social Trading und Demo-Konten bieten. XTB ist ebenfalls geeignet, dank kostenloser Kontoeröffnung und umfangreicher Bildungsressourcen.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Was sind die Risiken beim Trading?</h3>
              <p className="text-gray-600">
                Trading, insbesondere mit CFDs oder Hebelprodukten, birgt hohe Risiken, da Verluste das eingesetzte Kapital übersteigen können. Es ist wichtig, nur Kapital zu investieren, dessen Verlust Sie verkraften können, und sich über die Funktionsweise der Instrumente zu informieren.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Wie wähle ich die richtige Trading-Plattform?</h3>
              <p className="text-gray-600">
                Berücksichtigen Sie Gebühren, verfügbare Instrumente (z. B. Kryptowährungen, Aktien, CFDs), Benutzerfreundlichkeit und Sicherheitsfunktionen. Plattformen wie Kraken bieten niedrige Gebühren und hohe Sicherheit, während eToro ideal für Social Trading ist. Vergleichen Sie Anbieter, um die beste Wahl für Ihre Bedürfnisse zu treffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (unverändert) */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <TrendingUp className="h-5 w-5 sm:h-6 w-6 text-green-500" />
                <h5 className="text-lg sm:text-xl font-bold">SmartFinanz</h5>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Ihr vertrauensvoller Partner für Finanzvergleiche in Deutschland.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Produkte</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/versicherungen" className="hover:text-white transition-colors">Versicherungen</Link></li>
                <li><Link href="/banking" className="hover:text-white transition-colors">Banking</Link></li>
                <li><Link href="/tierversicherungen" className="hover:text-white transition-colors">Tierversicherung</Link></li>
                <li><Link href="/trading" className="hover:text-white transition-colors">Trading</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Unternehmen</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
                <li><Link href="/partnerprogramme" className="hover:text-white transition-colors">Partnerprogramme</Link></li>
                <li><Link href="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
                <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-2 sm:mb-4">Rechtliches</h6>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                <li><Link href="/cookie-richtlinie" className="hover:text-white transition-colors">Cookie-Richtlinie</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-4 sm:mt-8 pt-4 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2025 SmartFinanz. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
