"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check, Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"

// SmartFinanzLogo-Komponente
const SmartFinanzLogo: React.FC<{ className?: string }> = ({ className }) => {
return (
<Link href="/" aria-label="Zurück zur Startseite">
<div className={flex flex-col items-start ${className}}>
<div className="flex items-center space-x-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
<circle cx="16" cy="16" r="15" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
<text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fill="white" fontWeight="900">S</text>
</svg>
<span className="font-bold">martFinanz</span>
</div>
<span className="text-sm mt-1">Unser-Vergleichsportal.de</span>
</div>
</Link>
)
}

// Wiederverwendbare Header-Komponente
const Header: React.FC = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [activeCategory, setActiveCategory] = useState("versicherungen")

const scrollToSection = (sectionId: string) => {
setActiveCategory(sectionId)
const element = document.getElementById(sectionId)
if (element) {
element.scrollIntoView({ behavior: "smooth" })
}
}

useEffect(() => {
const hash = window.location.hash.substring(1)
if (hash && ["versicherungen", "banking", "tierversicherungen", "trading"].includes(hash)) {
scrollToSection(hash)
}
}, [])

return (
<>
<header className="bg-white shadow-sm relative border-b">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center">
<SmartFinanzLogo className="text-xl" />
</div>
<button
className="sm:hidden flex items-center justify-center"
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
aria-label="Menü öffnen/schließen"
>
{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>
</div>
          </Button>
        </a>
      </div>
      <Card className="mt-8 bg-orange-50 border-2 border-orange-200 rounded-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-orange-800">Kreditkarten-Fallen vermeiden</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Versteckte Kosten vermeiden</h3>
              <ul className="list-none text-base space-y-1">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Fremdwährungsgebühren (oft 1–2%)</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bargeldgebühren auch im Inland</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Jahresgebühr ab dem 2. Jahr</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Hohe Sollzinsen bei Teilzahlung</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 text-green-600">Smarte Kreditkartennutzung</h3>
              <ul className="list-none text-base space-y-1">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Immer per Lastschrift vollständig begleichen</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kreditrahmen nicht als Kredit nutzen</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bei Auslandsreisen Geld sparen</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Bonusprogramme gezielt nutzen</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="py-12 sm:py-16 bg-green-600 text-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Jetzt Finanzprodukte vergleichen und sparen</h2>
      <p className="text-base sm:text-lg">
        Schnell, sicher & kostenlos – mit nur wenigen Klicks zum besten Angebot.
      </p>
    </div>
  </div>
</section>

<section className="py-12 sm:py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center">Checkliste für Ihre Finanzplanung</h2>
    <div className="max-w-4xl mx-auto text-left">
      <h3 className="text-lg font-bold mb-2 text-green-600">Grundausstattung für Finanzen</h3>
      <ul className="list-none text-base mb-6">
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kostenloses Girokonto für Alltag</li>
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Tagesgeldkonto für Notreserve (3–6 Monatsgehälter)</li>
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Kreditkarte ohne Jahresgebühr für Reisen</li>
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Dispozinsen unter 7% vereinbaren</li>
      </ul>
      <h3 className="text-lg font-bold mb-2 text-green-600">Vermögensaufbau und Absicherung</h3>
      <ul className="list-none text-base mb-6">
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> ETF-Sparplan für langfristigen Vermögensaufbau</li>
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Depot mit kostenlosen ETF-Sparplänen</li>
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Alte Kredite auf bessere Konditionen prüfen</li>
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Regelmäßig Konditionen vergleichen</li>
        <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-600" /> Eigenheim absichern: Wohngebäude-, Hausrat- &amp; Haftpflicht sinnvoll kombinieren</li>
      </ul>
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
        © 2025 SmartFinanz unser-vergleichsportal.de. Alle Rechte vorbehalten. | Finanzvergleich für Versicherungen, Banking, DSL, Strom, Gas & mehr
      </p>
      <Link href="/" aria-label="Zurück zur Startseite">
        <Button 
          className="bg-green-600 text-white font-medium text-base transition-all duration-300 ease-in-out rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-b hover:from-green-600 hover:to-green-700"
        >
          Zur Startseite
        </Button>
      </Link>
    </div>
  </div>
</footer>
    </div>
  )
}
