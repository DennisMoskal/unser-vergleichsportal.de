"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, PiggyBank, Heart, Star } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Über uns - SmartFinanz: Ihr Partner für Finanzvergleiche</title>
        <meta
          name="description"
          content="Erfahren Sie mehr über SmartFinanz, Ihren vertrauenswürdigen Partner für Finanzdienstleistungen in Deutschland. Wir vergleichen Banking, Versicherungen, Kredite, Tierversicherungen, Aktien- und Kryptohandel, um Ihnen die besten Lösungen zu bieten."
        />
        <meta
          name="keywords"
          content="SmartFinanz, Finanzdienstleistungen, Finanzvergleich, Versicherungen, Banking, Kreditvergleich, Tierversicherungen, Aktienhandel, Kryptohandel, vertrauenswürdige Finanzberatung"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SmartFinanz",
            "url": "https://smartfinanz.de",
            "logo": "https://smartfinanz.de/logo.png",
            "description": "SmartFinanz ist Ihr vertrauenswürdiger Partner für Finanzvergleiche in Deutschland, spezialisiert auf Banking, Versicherungen, Kredite, Tierversicherungen, Aktien- und Kryptohandel.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Kundenservice",
              "email": "kontakt@smartfinanz.de",
              "url": "https://smartfinanz.de/kontakt"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1200"
            }
          })}
        </script>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/kontakt">
              <Button className="bg-green-600 hover:bg-green-700 text-white">Kontakt</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Willkommen bei SmartFinanz</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ihr vertrauenswürdiger Partner für Finanzvergleiche in Deutschland. Wir helfen Ihnen, die besten Lösungen für Banking, Versicherungen, Kredite, Tierversicherungen, Aktien- und Kryptohandel zu finden – transparent, unabhängig und maßgeschneidert.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/trading">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
                Jetzt Finanzprodukte vergleichen
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 text-sm sm:text-base">
                Kontaktieren Sie uns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Unsere Mission */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">Unsere Mission</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-center">Transparenz & Vertrauen</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-4">
                  Bei SmartFinanz steht Transparenz an erster Stelle. Wir vergleichen über 500 Finanzprodukte von Banking bis Kryptohandel, um Ihnen klare und unabhängige Empfehlungen zu geben. Unser Ziel: Ihre finanzielle Freiheit durch informierte Entscheidungen.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Über 100.000 zufriedene Nutzer</li>
                  <li>Mehr als €2.5M an Einsparungen für unsere Kunden</li>
                  <li>4.8★ durchschnittliche Bewertung aus 1.200 Bewertungen</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-center">Expertise & Innovation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <p className="mb-4">
                  Unser Team aus Finanzexperten und Technologiebegeisterten arbeitet täglich daran, Ihnen die besten Tools und Informationen zu bieten. Mit modernster Technologie und fundiertem Fachwissen machen wir komplexe Finanzentscheidungen einfach.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>10+ Jahre Erfahrung in der Finanzbranche</li>
                  <li>Kooperationen mit führenden Anbietern</li>
                  <li>Regelmäßige Updates zu Markttrends 2025</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unser Team */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">Unser Expertenteam</h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            Lernen Sie die Menschen hinter SmartFinanz kennen – ein Team aus leidenschaftlichen Experten für Banking, Versicherungen, Kredite, Tierversicherungen und Trading.
          </p>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold">Anna Müller</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="font-semibold">Versicherungsexpertin</p>
                <p className="text-sm">
                  Mit über 10 Jahren Erfahrung hilft Anna Ihnen, die besten Versicherungen und Tierversicherungen zu finden. Ihre Leidenschaft ist es, Transparenz in die Versicherungswelt zu bringen.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <PiggyBank className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold">Mark Schneider</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="font-semibold">Banking- und Kreditexperte</p>
                <p className="text-sm">
                  Mark ist spezialisiert auf digitale Banking-Lösungen und Kreditvergleiche. Er hilft Kunden, die besten Konten und Finanzierungen für ihre Ziele zu finden.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold">Lisa Weber</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="font-semibold">Trading-Expertin</p>
                <p className="text-sm">
                  Lisa ist Expertin für Aktien- und Kryptohandel. Mit ihrem Wissen über Markttrends unterstützt sie sowohl Einsteiger als auch Profis bei ihren Investitionen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kundenbewertungen */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">Was unsere Kunden sagen</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg font-bold">Sophie K.</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="text-sm">
                  „Dank SmartFinanz habe ich die perfekte Tierversicherung für meinen Hund gefunden. Der Vergleich war super einfach und hat mir viel Zeit gespart!“
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <CardTitle className="text-lg font-bold">Michael B.</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="text-sm">
                  „Die Plattform hat mir geholfen, eine günstige Kreditlösung zu finden. Die Transparenz und die klaren Vergleiche haben mich überzeugt.“
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg font-bold">Laura S.</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="text-sm">
                  „SmartFinanz hat mir den Einstieg in den Kryptohandel erleichtert. Die Empfehlungen waren klar, und ich fühle mich gut beraten.“
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Werden Sie Teil der SmartFinanz-Community</h2>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Lassen Sie uns gemeinsam Ihre finanziellen Ziele erreichen. Vergleichen Sie jetzt die besten Finanzprodukte oder kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/trading">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Jetzt vergleichen
              </Button>
            </Link>
            <Link href="/partnerprogramme">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Partnerprogramme
              </Button>
            </Link>
            <Link href="/kontakt">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Kontaktieren Sie uns
              </Button>
            </Link>
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
