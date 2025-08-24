"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, TrendingUp, Shield, PiggyBank } from "lucide-react"
import Link from "next/link"

export default function PartnerprogrammePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Handshake className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700">Jetzt bewerben</Button>
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Partnerprogramme</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Werden Sie Teil unseres Netzwerks und profitieren Sie von unserer Expertise im Finanzvergleich. Gemeinsam können wir Kunden die besten Lösungen bieten.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Warum mit uns zusammenarbeiten?</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Unser Partnerprogramm ermöglicht Ihnen, von unserem umfangreichen Vergleichsportal und unserer Kundenbasis zu profitieren. Wir bieten:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Hohen Provisionsanteil für vermittelte Kunden</li>
                <li>Zugang zu über 500 Finanzprodukten</li>
                <li>Marketingunterstützung und Branding-Möglichkeiten</li>
                <li>Regelmäßige Auszahlungen und transparente Berichterstattung</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Ihre Vorteile</h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <TrendingUp className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Wachstumspotenzial</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Erweitern Sie Ihren Kundenstamm durch unsere Plattform.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Vertrauen</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Profitieren Sie von unserem Ruf als vertrauenswürdiger Anbieter.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <PiggyBank className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Einnahmequelle</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Generieren Sie passives Einkommen mit jeder Vermittlung.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Starten Sie noch heute</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Melden Sie sich für unser Partnerprogramm an und beginnen Sie, von unserer Partnerschaft zu profitieren.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Jetzt bewerben
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                <Handshake className="h-5 w-5 sm:h-6 w-6 text-green-500" />
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
