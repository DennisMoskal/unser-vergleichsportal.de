"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, EyeOff } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

// Benutzerdefiniertes Logo-Icon (Schild mit steigendem Aktienpfeil)
const SmartFinanzLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="#15803d"
    />
    <path
      d="M12 6l4 4h-3v6h-2v-6H8l4-4z"
      fill="#ffffff"
    />
  </svg>
)

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Datenschutz - SmartFinanz: Sichere Finanzvergleiche</title>
        <meta
          name="description"
          content="Erfahren Sie, wie SmartFinanz Ihre Daten schützt. Unsere DSGVO-konforme Datenschutzerklärung erklärt die sichere Verarbeitung Ihrer Daten für Finanzvergleiche in Banking, Versicherungen, Kredite, Tierversicherungen und Kryptohandel."
        />
        <meta
          name="keywords"
          content="Datenschutz, SmartFinanz, Finanzvergleich, sicheres Banking, Kryptohandel Datenschutz, DSGVO Finanzdienstleistungen, Versicherungsvergleich, Kreditvergleich Datenschutz, Tierversicherung Datenschutz"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Datenschutz",
            "url": "https://smartfinanz.de/datenschutz",
            "description": "Datenschutzerklärung von SmartFinanz, Ihrem Partner für sichere Finanzvergleiche in Deutschland.",
            "publisher": {
              "@type": "Organization",
              "name": "SmartFinanz",
              "url": "https://smartfinanz.de",
              "logo": "https://smartfinanz.de/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Datenschutzbeauftragter",
                "email": "datenschutz@smartfinanz.de",
                "url": "https://smartfinanz.de/kontakt"
              }
            }
          })}
        </script>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <SmartFinanzLogo className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/kontakt">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Kontakt</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Kategorie-Navigation */}
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
                  key === 'datenschutz' ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                <Icon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hauptinhalt */}
      <section className="py-16 sm:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 text-center">
            Datenschutz bei SmartFinanz
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Bei SmartFinanz schützen wir Ihre Daten mit höchster Sorgfalt. Unsere DSGVO-konformen Prozesse gewährleisten Sicherheit und Transparenz für Ihre Finanzvergleiche in Banking, Versicherungen, Kredite, Tierversicherungen und Kryptohandel.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">1. Datenschutz auf einen Blick</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir, die SmartFinanz GmbH, sind verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten. Unsere Datenschutzerklärung erklärt, wie wir Ihre Daten sicher und DSGVO-konform verarbeiten, um Ihnen die besten Finanzvergleiche zu bieten.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Verantwortlicher:</strong> SmartFinanz GmbH, Musterstraße 1, 10115 Berlin</li>
                <li><strong>Kontakt Datenschutzbeauftragter:</strong> <a href="mailto:datenschutz@smartfinanz.de" className="text-green-600 hover:underline">datenschutz@smartfinanz.de</a></li>
                <li><strong>Rechtsgrundlage:</strong> Datenschutz-Grundverordnung (DSGVO) und nationale Datenschutzgesetze</li>
                <li><strong>Zweck:</strong> Sichere Bereitstellung von Vergleichsdiensten für Banking, Versicherungen, Kredite, Tierversicherungen und Kryptohandel</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">2. Erhebung und Verwendung von Daten</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir erheben Ihre Daten nur, wenn Sie diese freiwillig angeben, z. B. bei der Nutzung unseres Vergleichs-Tools für Versicherungen, Kredite oder Kryptohandel, oder bei der Kontaktaufnahme.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Erfasste Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, finanzielle Daten (bei spezifischen Anfragen)</li>
                <li><strong>Zweck:</strong> Bereitstellung von Finanzvergleichen, Kundensupport, Marketing (nur mit Ihrer Einwilligung)</li>
                <li><strong>Speicherdauer:</strong> Daten werden nur so lange gespeichert, wie es für den Zweck notwendig ist oder gesetzlich vorgeschrieben.</li>
                <li><strong>Weitergabe:</strong> Daten werden nur an vertrauenswürdige Partner weitergegeben, z. B. Anbieter von Banking- oder Trading-Dienstleistungen, mit Ihrer Zustimmung.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">3. Ihre Datenschutzrechte</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Als Nutzer haben Sie umfassende Rechte gemäß DSGVO, um die Kontrolle über Ihre Daten zu behalten:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Auskunft:</strong> Recht auf Information über Ihre gespeicherten Daten</li>
                <li><strong>Berichtigung:</strong> Recht auf Korrektur unrichtiger Daten</li>
                <li><strong>Löschung:</strong> Recht auf Löschung Ihrer Daten („Recht auf Vergessenwerden“)</li>
                <li><strong>Einschränkung:</strong> Recht auf Einschränkung der Datenverarbeitung</li>
                <li><strong>Widerspruch:</strong> Recht auf Widerspruch gegen die Verarbeitung</li>
                <li><strong>Datenübertragbarkeit:</strong> Recht, Ihre Daten in einem maschinenlesbaren Format zu erhalten</li>
                <li><strong>Beschwerde:</strong> Recht, sich bei einer Aufsichtsbehörde zu beschweren</li>
              </ul>
              <p>
                Kontaktieren Sie unseren Datenschutzbeauftragten unter <a href="mailto:datenschutz@smartfinanz.de" className="text-green-600 hover:underline">datenschutz@smartfinanz.de</a> oder über unsere <Link href="/kontakt" className="text-green-600 hover:underline">Kontaktseite</Link>, um Ihre Rechte auszuüben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">4. Cookies und Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir verwenden Cookies, um Ihre Nutzererfahrung bei der Suche nach Finanzprodukten wie Versicherungen oder Kryptohandel zu verbessern und unsere Website zu optimieren.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Typen von Cookies:</strong> Essentielle Cookies für die Funktionalität, analytische Cookies (z. B. Google Analytics) für die Webanalyse</li>
                <li><strong>Einwilligung:</strong> Sie können Cookies über unser Cookie-Banner akzeptieren oder ablehnen. Details finden Sie in unserer <Link href="/cookie-richtlinie" className="text-green-600 hover:underline">Cookie-Richtlinie</Link>.</li>
                <li><strong>Opt-Out:</strong> Sie können Cookies in Ihren Browser-Einstellungen deaktivieren.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">5. Datensicherheit</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Ihre Daten sind bei uns sicher. Wir verwenden modernste Verschlüsselungstechnologien (SSL/TLS) und führen regelmäßige Sicherheitsüberprüfungen durch, um Ihre Daten bei Finanzvergleichen für Banking, Kredite oder Kryptohandel zu schützen.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Lock className="h-6 w-6 text-green-600" />
                <EyeOff className="h-6 w-6 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Haben Sie Fragen zum Datenschutz?</h2>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Unser Datenschutzbeauftragter steht Ihnen für Fragen zu unserer DSGVO-konformen Datenverarbeitung oder unseren Finanzvergleichen zur Verfügung.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Kontakt aufnehmen
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer (unverändert) */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <SmartFinanzLogo className="h-5 w-5 sm:h-6 w-6 text-green-500" />
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
