"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Shield, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import Head from "next/head"
import Link from "next/link"

export default function AnbieterPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <Head>
        <title>Vergleichen Sie Finanzprodukte sicher mit SmartFinanz</title>
        <meta
          name="description"
          content="Entdecken Sie die besten Angebote für Versicherungen, Kredite, Banking und mehr mit den geprüften Partnern von unser-vergleichsportal.de. Sicher, kostenlos und transparent."
        />
        <meta
          name="keywords"
          content="Finanzprodukte vergleichen, sicherer Finanzvergleich, Affiliate-Partner SmartFinanz, Versicherungen vergleichen, Kredite vergleichen"
        />
        <link rel="canonical" href="https://unser-vergleichsportal.de/anbieter" />
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vergleichen Sie Finanzprodukte sicher mit SmartFinanz" />
        <meta
          property="og:description"
          content="Entdecken Sie die besten Angebote für Versicherungen, Kredite, Banking und mehr mit den geprüften Partnern von unser-vergleichsportal.de."
        />
        <meta property="og:url" content="https://unser-vergleichsportal.de/anbieter" />
        <meta property="og:site_name" content="Unser-Vergleichsportal.de" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vergleichen Sie Finanzprodukte sicher mit SmartFinanz" />
        <meta
          name="twitter:description"
          content="Entdecken Sie die besten Angebote für Versicherungen, Kredite, Banking und mehr mit SmartFinanz."
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Vergleichen Sie Finanzprodukte sicher mit SmartFinanz",
            description:
              "Entdecken Sie die besten Angebote für Versicherungen, Kredite, Banking und mehr mit den geprüften Partnern von SmartFinanz. Sicher, kostenlos und transparent.",
            url: "https://unser-vergleichsportal.de/anbieter",
            keywords: [
              "Finanzprodukte vergleichen",
              "sicherer Finanzvergleich",
              "Affiliate-Partner SmartFinanz",
              "Versicherungen vergleichen",
              "Kredite vergleichen"
            ],
            publisher: {
              "@type": "Organization",
              name: "SmartFinanz",
              url: "https://unser-vergleichsportal.de",
              logo: {
                "@type": "ImageObject",
                url: "https://unser-vergleichsportal.de/logo.png"
              }
            },
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Wie funktioniert der Finanzvergleich bei SmartFinanz?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Geben Sie Ihre Daten in unseren Vergleichsrechner ein, und wir zeigen Ihnen die besten Angebote unserer Partner. Der Vorgang ist kostenlos und dauert nur wenige Minuten."
                  }
                },
                {
                  "@type": "Question",
                  name: "Sind meine Daten beim Vergleich sicher?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, Ihre Daten werden mit 256-Bit-SSL-Verschlüsselung übertragen. Unsere Partner sind geprüft und halten höchste Sicherheitsstandards ein."
                  }
                },
                {
                  "@type": "Question",
                  name: "Kann ich mit SmartFinanz Geld sparen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja, durch den Vergleich unserer Partnerangebote können Sie bis zu 50% bei Versicherungen, Krediten und anderen Finanzprodukten sparen."
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Zurück-Button */}
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">
            Sicher Finanzprodukte vergleichen mit SmartFinanz
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Finden Sie die besten Angebote für Versicherungen, Kredite, Banking und mehr mit unseren geprüften Partnern. SmartFinanz bietet Ihnen einen kostenlosen, sicheren und transparenten Vergleich, um bis zu 50% zu sparen.
          </p>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ExternalLink className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">Weiterleitung zu Ihrem Anbieter</CardTitle>
              <p className="text-gray-600">
                Sie werden gleich zu Ihrem gewählten Anbieter weitergeleitet, um Ihr Angebot zu prüfen oder abzuschließen.
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Sicherheitshinweise */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="font-semibold text-green-800 mb-2 text-xl">
                  <Shield className="inline mr-2 h-5 w-5" />
                  Sicherer Vergleich mit höchsten Standards
                </h2>
                <p className="text-gray-600 mb-4">
                  Ihre Sicherheit hat bei SmartFinanz oberste Priorität. Wir arbeiten ausschließlich mit geprüften Partnern und nutzen modernste Verschlüsselungstechnologien.
                </p>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Alle Partner sind geprüft und zertifiziert
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    256-Bit-SSL-Verschlüsselung für Ihre Daten
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Kostenloser und transparenter Service
                  </li>
                </ul>
              </div>

              {/* Wie funktioniert der Vergleich? */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Wie funktioniert der Finanzvergleich?</h2>
                <p className="text-gray-600 text-center">
                  Mit SmartFinanz finden Sie in wenigen Schritten das beste Angebot für Ihre Bedürfnisse. Unser Vergleichsprozess ist einfach, schnell und kostenlos.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <strong>1. Daten eingeben:</strong> Geben Sie Ihre Anforderungen in unseren Vergleichsrechner ein, z. B. für Versicherungen, Kredite oder Banking.
                  </li>
                  <li>
                    <strong>2. Angebote vergleichen:</strong> Wir zeigen Ihnen die besten Angebote unserer Partner wie <Link href="https://www.check24.de" className="text-green-600 hover:underline">CHECK24</Link> oder <Link href="https://www.huk.de" className="text-green-600 hover:underline">HUK-COBURG</Link>.
                  </li>
                  <li>
                    <strong>3. Angebot wählen:</strong> Wählen Sie das passende Angebot und werden Sie sicher zu Ihrem Anbieter weitergeleitet.
                  </li>
                </ul>
              </div>

              {/* Partnerübersicht */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Unsere Partner für Ihren Finanzvergleich</h2>
                <p className="text-gray-600 text-center">
                  Wir arbeiten mit führenden Anbietern zusammen, um Ihnen die besten Tarife für Versicherungen, Kredite, Banking und mehr zu bieten.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold">CHECK24</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Testsieger in über 25 Kategorien (Handelsblatt 09/2025). Vergleichen Sie über 300 Versicherungen, Kredite und Banking-Produkte mit <Link href="https://www.check24.de" className="text-green-600 hover:underline">CHECK24</Link>.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg font-semibold">HUK-COBURG</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Über 90 Jahre Erfahrung und Top-Bewertungen für Kfz- und Hausratversicherungen. Profitieren Sie von bis zu 20% Kombirabatt bei <Link href="https://www.huk.de" className="text-green-600 hover:underline">HUK-COBURG</Link>.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Vorteile von SmartFinanz */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Warum SmartFinanz wählen?</h2>
                <p className="text-gray-600 text-center">
                  Unser Vergleichsportal bietet Ihnen einzigartige Vorteile, um Ihre Finanzen zu optimieren.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    <strong>Kostenlos und unabhängig:</strong> Vergleichen Sie ohne versteckte Gebühren.
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    <strong>Zeitersparnis:</strong> Finden Sie die besten Angebote in nur wenigen Minuten.
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    <strong>Transparente Provisionen:</strong> Wir erhalten eine Provision, die Ihre Kosten nicht beeinflusst.
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    <strong>Hohe Ersparnisse:</strong> Sparen Sie bis zu 50% durch den Vergleich.
                  </li>
                </ul>
              </div>

              {/* FAQ mit Ja-Prinzip */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Häufige Fragen zum Finanzvergleich</h2>
                <p className="text-gray-600 text-center">
                  Haben Sie Fragen? Wir beantworten die häufigsten Anliegen, um Ihnen den Einstieg zu erleichtern.
                </p>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Möchten Sie Geld sparen?</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Ja, mit SmartFinanz können Sie bis zu 50% bei Versicherungen, Krediten und anderen Finanzprodukten sparen, indem Sie die besten Angebote unserer Partner vergleichen.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Suchen Sie einen sicheren Vergleich?</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Ja, Ihre Daten sind bei uns sicher. Wir verwenden 256-Bit-SSL-Verschlüsselung, und unsere Partner sind geprüft und zertifiziert.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Wollen Sie Zeit sparen?</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Ja, unser Vergleichsprozess ist schnell und einfach. Geben Sie Ihre Daten ein, und wir zeigen Ihnen die besten Angebote in wenigen Minuten.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Interne Verlinkung zu Unternehmensseiten */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-center">Mehr über SmartFinanz erfahren</h2>
                <p className="text-gray-600 text-center">
                  Lernen Sie unser Team kennen, entdecken Sie unsere <Link href="/anbieter/partnerprogramme" className="text-green-600 hover:underline">Partnerprogramme</Link> oder kontaktieren Sie uns für weitere Informationen.
                </p>
                <ul className="space-y-2 text-gray-600 text-center">
                  <li>
                    <Link href="/anbieter/ueber-uns" className="text-green-600 hover:underline">
                      Über uns
                    </Link>
                    : Erfahren Sie mehr über unsere Mission und Werte.
                  </li>
                  <li>
                    <Link href="/anbieter/partnerprogramme" className="text-green-600 hover:underline">
                      Partnerprogramme
                    </Link>
                    : Werden Sie Teil unseres Netzwerks.
                  </li>
                  <li>
                    <Link href="/anbieter/karriere" className="text-green-600 hover:underline">
                      Karriere
                    </Link>
                    : Entdecken Sie Jobmöglichkeiten bei SmartFinanz.
                  </li>
                  <li>
                    <Link href="/anbieter/kontakt" className="text-green-600 hover:underline">
                      Kontakt
                    </Link>
                    : Wir helfen Ihnen gerne weiter.
                  </li>
                </ul>
              </div>

              {/* Footer-Hinweis */}
              <div className="border-t pt-4">
                <p className="text-xs text-gray-400 text-center">
                  SmartFinanz erhält eine Provision, wenn Sie über unseren Link abschließen.
                  Dies beeinflusst nicht unsere unabhängige Bewertung.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
