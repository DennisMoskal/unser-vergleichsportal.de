"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, EyeOff, TrendingUp, Menu, X } from "lucide-react"
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

export default function DatenschutzPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
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
            <Link href="#kundenbewertungen" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Kundenbewertungen
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:block bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
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

        {/* Mobile Menü */}
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
                href="#kundenbewertungen"
                className="block text-gray-600 hover:text-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kundenbewertungen
              </Link>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => window.open("https://a.partner-versicherung.de/click.php?partner_id=192394&ad_id=15&deep=kredit", "_blank")}>
                Vergleich starten
              </Button>
            </nav>
          </div>
        )}
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
                <li><strong>Erfasste Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, finanzielle Daten (bei Anfragen)</li>
                <li><strong>Zweck:</strong> Bereitstellung unserer Dienstleistungen, Kundensupport, Marketing (mit Einwilligung)</li>
                <li><strong>Speicherdauer:</strong> Daten werden nur so lange gespeichert, wie es für den Zweck notwendig ist oder gesetzlich vorgeschrieben.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">3. Ihre Rechte</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Sie haben folgende Rechte bezüglich Ihrer Daten:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
                <li>Recht auf Berichtigung oder Löschung Ihrer Daten</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen</li>
              </ul>
              <p>
                Kontaktieren Sie uns unter <a href="mailto:info@unser-vergleichsportal.de" className="text-green-600 hover:underline">datenschutz@smartfinanz.de</a>, um Ihre Rechte auszuüben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">4. Cookies und Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir verwenden Cookies, um unsere Website zu verbessern und die Nutzererfahrung zu optimieren. Sie können die Verwendung von Cookies in Ihren Browsereinstellungen deaktivieren.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Typen von Cookies:</strong> Essentielle Cookies, Analytische Cookies (z. B. Google Analytics)</li>
                <li><strong>Einwilligung:</strong> Sie können der Nutzung zustimmen oder ablehnen (Cookie-Banner).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 hover:border-green-200 transition-shadow hover:shadow-lg mt-8">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-bold">5. Datensicherheit</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 space-y-4">
              <p>
                Wir sichern Ihre Daten durch moderne Verschlüsselungstechnologien (z. B. SSL/TLS) und regelmäßige Sicherheitsüberprüfungen.
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
      <section className="py-12 sm:py-16 bg-green-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Haben Sie Fragen zum Datenschutz?</h3>
          <p className="text-lg sm:text-xl mb-8 text-green-100">
            Kontaktieren Sie unseren Datenschutzbeauftragten für weitere Informationen oder Unterstützung.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Kontakt aufnehmen
            </Button>
          </Link>
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
