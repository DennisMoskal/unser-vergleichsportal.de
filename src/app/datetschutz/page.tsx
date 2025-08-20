"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, EyeOff } from "lucide-react"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">SmartFinanz</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700">Kontakt</Button>
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 text-center">Datenschutz</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Bei SmartFinanz nehmen wir den Schutz Ihrer persönlichen Daten ernst. Hier erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.
          </p>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">1. Datenschutz auf einen Blick</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir, die SmartFinanz GmbH, sind verantwortlich für die Verarbeitung Ihrer Daten und setzen alles daran, Ihre Privatsphäre zu wahren. Diese Datenschutzerklärung informiert Sie über die Erhebung, Verwendung und Speicherung Ihrer personenbezogenen Daten.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Verantwortlicher: SmartFinanz GmbH, Musterstraße 1, 10115 Berlin</li>
                <li>Kontakt Datenschutzbeauftragter: datenschutz@smartfinanz.de</li>
                <li>Rechtsgrundlage: DSGVO und nationale Datenschutzgesetze</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">2. Erhebung und Verwendung von Daten</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir erheben personenbezogene Daten nur, wenn Sie diese freiwillig angeben, z. B. bei der Nutzung unseres Vergleichs-Tools oder bei der Kontaktaufnahme.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Erfasste Daten:</strong> Name, E-Mail-Ad
