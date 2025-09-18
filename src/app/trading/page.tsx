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
        <title>Beste Broker September 2025 | Bitcoin & ETF Testsieger</title>
        <meta
          name="description"
          content="Vergleichen Sie Broker & Trading-Plattformen für Aktien, ETFs & Bitcoin. Niedrige Gebühren, sichere Depots & regulierte Testsieger im September 2025"
        />
        <meta
          name="keywords"
          content="Broker Vergleich 2025, Trading Plattform Vergleich, Aktiendepot, ETF-Trading, Bitcoin & Krypto Trading, CFD Broker, Forex Broker, geringe Gebühren, regulierte Broker, Testsieger Broker"
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
                      description:
                        "Plattform mit Supercharts, Social Trading und Integration mit führenden Brokern.",
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
                      description:
                        "Social Trading Broker für Aktien, ETFs und Kryptowährungen mit CopyTrader.",
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
                      description:
                        "Regulierter Broker mit 0 % Kommission auf Aktien & ETFs und breitem CFD-Angebot.",
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
                    text: "Zu den Testsiegern im September 2025 zählen TradingView, eToro und XTB – alle reguliert, mit günstigen Gebühren und sicheren Plattformen."
                  }
                },
                {
                  "@type": "Question",
                  name: "Kann ich bei TradingView, eToro und XTB auch Kryptowährungen handeln?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, alle drei Broker ermöglichen den Handel mit Bitcoin und weiteren Kryptowährungen – ideal für Einsteiger und Profis."
                  }
                },
                {
                  "@type": "Question",
                  name: "Sind TradingView, eToro und XTB reguliert?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, alle drei Anbieter sind durch internationale Aufsichtsbehörden reguliert und bieten hohe Sicherheitsstandards für Anleger."
                  }
                }
              ]
            })
          }}
        />

      <Header />

      {/* Hero */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Beste Broker September 2025 | Bitcoin & ETF Testsieger
            </h1>
            <p className="text-sm sm:text-base text-green-100 mb-6 sm:mb-8">
              Entdecken Sie die besten Aktiendepots, Online-Broker und Trading-Plattformen für Aktien, Forex, ETFs, Rohstoffe, Futures, DeFi und Kryptowährungen wie Bitcoin. Vergleichen Sie niedrige Gebühren, hohe Sicherheit und attraktive Boni. Unsere Testsieger – darunter eToro, TradingView, XTB, WEEX und Vantage – bieten 0 % Kommission, professionelle Tools und regulierte Plattformen für sicheres Trading.
            </p>
            <Link href="#anbieter">
              
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
                Achten Sie auf niedrige Gebühren wie 0% Kommission bei TradingView, eToro, XTB und Vantage. Prüfen Sie auch Spreads und Einzahlungsgebühren.
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
                  <span>Nutzen Sie Plattformen mit transparenten Kostenrechnern, z. B. XTB oder eToro.</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">Sicherheit gewährleisten</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                eToro, XTB, Vantage (ASIC/FSCA) – Regulierung, Einlagensicherung und transparente Richtlinien sind entscheidend.
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
                    rel={provider.url.startsWith("http") ? "noopener nofollow sponsored" : undefined}
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
                <p className="text-base sm:text-lg font-semibold">Schnelle Auszahlungen & Einzahlungen für Trader</p>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Ihr Weg zu DeFi und Krypto-Trading 2025
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Was ist DeFi? Der dezentrale Finanzmarkt erklärt
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              DeFi (Decentralized Finance) revolutioniert den Finanzmarkt durch Blockchain-Technologie. Anstelle zentraler Banken ermöglichen Smart Contracts auf Plattformen wie Ethereum oder Polygon direkte Transaktionen wie Kredite, Staking oder Swaps. Im Jahr 2025 hat der DeFi-Markt ein Total Value Locked (TVL) von über $150 Mrd. erreicht. DeFi bietet:
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
              Starten Sie mit TradingView für Top Screener und Social Trading oder erkunden Sie dezentrale Plattformen für DeFi.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Krypto-Trading mit TradingView für Anfänger und Profis
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              TradingView ist die führende Plattform für technische Analysen und Social Trading mit über 100 Millionen Nutzern. Ob Bitcoin, Ethereum oder Memecoins – mit Supercharts, Top Screener und Community-Ideen finden Anfänger und Profis die besten Handelsmöglichkeiten. Vorteile:
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
              Sicher Bitcoin handeln mit XTB
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Bitcoin bleibt die führende Kryptowährung mit einem Marktanteil von über 50% (Stand 09/2025). Mit XTB können Sie Bitcoin-CFDs handeln, ohne physische Coins besitzen zu müssen. Vorteile:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-6">
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
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Tipp: Nutzen Sie XTB’s Demo-Konto, um Bitcoin-Trading risikofrei zu testen.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Bridging in DeFi: Kryptowährungen zwischen Blockchains transferieren
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Bridging ermöglicht den Transfer von Kryptowährungen wie Bitcoin oder Ethereum zwischen Blockchains (z. B. Ethereum zu Polygon). Dies ist essenziell für DeFi, da viele Protokolle auf spezifischen Chains laufen.
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
                Nutzen Sie Bridges wie Polygon Bridge, verbinden Sie Ihre Wallet (z. B. MetaMask) und transferieren Sie Tokens.
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

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Memecoin-Trading mit Telegram-Bots
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Memecoins wie Dogecoin oder Shiba Inu sind im Jahr 2025 ein Trend, besonders durch Telegram-Bots wie Banana Gun oder Maestro. Diese Bots ermöglichen schnelles Trading direkt über Telegram, ideal für volatile Memecoin-Märkte.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Vorteile</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Automatisiertes Sniper-Trading, Echtzeit-Preisalarme, Wallet-Integration.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Beliebte Bots</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Banana Gun (Solana), Maestro (Ethereum).
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Risiken</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bots können teuer sein (ab $50/Monat) und erfordern technisches Wissen. Nutzen Sie verifizierte Bots.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Tipp: Kombinieren Sie Telegram-Bots mit TradingView für präzise Marktanalysen und Memecoin-Trading.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Sicher Kryptowährungen kaufen mit TradingView
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Sicherheit ist beim Krypto-Trading entscheidend. Mit TradingView analysieren Sie Märkte und traden sicher über verifizierte Broker:
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
              Sicherheits-Tipp: Verwenden Sie Hardware-Wallets wie Ledger für langfristige Krypto-Aufbewahrung und aktivieren Sie 2FA.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Steuerfreies Bitcoin-Trading nach einem Jahr
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Bitcoin bietet eine einzigartige Möglichkeit, Vermögen aufzubauen, insbesondere durch die steuerliche Behandlung in Deutschland. Gemäß § 23 Abs. 1 Nr. 2 EStG sind Gewinne aus dem Verkauf von Kryptowährungen wie Bitcoin steuerfrei, wenn Sie diese länger als ein Jahr halten. Dies macht Bitcoin zu einer attraktiven Option für langfristige Investoren.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Warum Bitcoin für Vermögensaufbau?</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Hohe Wertsteigerung: Bitcoin hat in der Vergangenheit starke Kurssteigerungen erlebt. Seit 2020 hat Bitcoin eine durchschnittliche jährliche Rendite von über 50% erzielt (Stand 09/2025).
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Steuerfreiheit nach einem Jahr: Gewinne sind steuerfrei, wenn Sie Bitcoin mindestens 12 Monate halten.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Dezentrale Natur: Bitcoin ist unabhängig von zentralen Banken, was es zu einer Absicherung gegen Inflation macht.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Wie funktioniert steuerfreies Bitcoin-Trading?</h4>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Kaufen Sie Bitcoin auf einer regulierten Plattform wie XTB und halten Sie die Coins für mindestens ein Jahr. Nach Ablauf dieser Frist sind die Gewinne steuerfrei. Beispiel:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kauf: Sie investieren 5.000 € in Bitcoin am 01.09.2025 über XTB.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Holding: Sie halten die Bitcoin bis mindestens 02.09.2026.
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Verkauf: Nach einem Kursanstieg verkaufen Sie die Bitcoin für 10.000 €. Der Gewinn von 5.000 € ist steuerfrei.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Warum XTB für steuerfreies Bitcoin-Trading?</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kostenloses Demo-Konto zum Testen von Strategien
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Bis zu 2,3% Zinsen auf Ihr Guthaben
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Benutzerfreundliche Plattform für Anfänger und Profis
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Tipp: Starten Sie mit XTB, um Bitcoin sicher zu kaufen und von der steuerfreien Haltefrist zu profitieren.
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
                Risiken: Bitcoin ist volatil. Kursverluste sind möglich, und die Steuerfreiheit schützt nicht vor Verlusten.
              </li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Fazit: Bitcoin-Trading mit einer Haltefrist von über einem Jahr bietet eine einzigartige Chance, Vermögen steuerfrei aufzubauen. Mit XTB können Sie sicher und einfach in Bitcoin investieren.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-600">
              Ultimativer Leitfaden zur Wahl der besten Trading-Plattform
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Die Wahl der passenden Plattform hängt von Zielen, Budget und Erfahrung ab. Unser Leitfaden hilft bei der Vorauswahl.
            </p>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Trading-Ziele definieren</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kurzfristiges Krypto/CFD-Trading vs. langfristiges Investieren (Aktien/ETFs) erfordert unterschiedliche Tools.
              </li>
            </ul>
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-600">Gebühren und Kosten prüfen</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 mb-4">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-green-600" />
                Kommissionen, Spreads, Einzahlungen. Entscheidend ist die Summe pro Strategie.
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
                  <span>XTB’s Akademie bietet kostenlose Kurse für Einsteiger.</span>
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
              <ul className="space-y-2 text-sm sm:text-base text-gray-600">
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
          Startseite
        </Button>
      </Link>
    </div>
  </div>
</footer>
    </div>
  )
}
