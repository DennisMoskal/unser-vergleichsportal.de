"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Star, Clock } from "lucide-react"
import Link from "next/link"

export default function KarrierePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-green-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Karriere bei SmartFinanz</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Werde Teil eines innovativen Teams und forme die Zukunft der Finanzvergleiche mit uns. Entdecke spannende Karrieremöglichkeiten!
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center">Warum SmartFinanz?</CardTitle>
            </CardHeader>
            <CardContent className="text-left text-gray-600 space-y-4">
              <p>
                Bei SmartFinanz bieten wir ein inspirierendes Arbeitsumfeld mit Fokus auf Wachstum, Zusammenarbeit und Innovation. Unsere Vorteile:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Attraktive Vergütung und Boni</li>
                <li>Flexible Arbeitszeiten und Homeoffice-Möglichkeiten</li>
                <li>Weiterbildung und Karriereentwicklung</li>
                <li>Ein unterstützendes Team und eine offene Unternehmenskultur</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offene Stellen */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Aktuelle Stellenangebote</h3>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Kundenberater (m/w/d)</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Standort: Berlin | Vollzeit | Ab sofort</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 w-full">Bewerben</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Marketing-Manager (m/w/d)</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Standort: Remote | Vollzeit | Ab sofort</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 w-full">Bewerben</Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Clock className="h-8 w-8 sm:h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl">IT-Entwickler (m/w/d)</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p>Standort: München | Vollzeit | Ab sofort</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 w-full">Bewerben</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">Keine passende Stelle dabei? Schicken Sie uns eine Initiativbewerbung!</p>
            <Button className="mt-4 bg-green-600 hover:bg-green-700">Initiativbewerbung</Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-
