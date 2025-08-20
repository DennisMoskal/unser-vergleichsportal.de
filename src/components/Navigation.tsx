"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-2 p-4 bg-gray-50 border-r min-h-screen w-60">
      {/* Unternehmen */}
      <p className="font-semibold text-gray-800">Unternehmen</p>
      <Link href="/ueber-uns"><Button variant="ghost" className="w-full justify-start">Über uns</Button></Link>
      <Link href="/partnerprogramme"><Button variant="ghost" className="w-full justify-start">Partnerprogramme</Button></Link>
      <Link href="/karriere"><Button variant="ghost" className="w-full justify-start">Karriere</Button></Link>
      <Link href="/kontakt"><Button variant="ghost" className="w-full justify-start">Kontakt</Button></Link>

      {/* Rechtliches */}
      <p className="font-semibold mt-4 text-gray-800">Rechtliches</p>
      <Link href="/datenschutz"><Button variant="ghost" className="w-full justify-start">Datenschutz</Button></Link>
      <Link href="/impressum"><Button variant="ghost" className="w-full justify-start">Impressum</Button></Link>
      <Link href="/agb"><Button variant="ghost" className="w-full justify-start">AGB</Button></Link>
      <Link href="/cookie-richtlinie"><Button variant="ghost" className="w-full justify-start">Cookie-Richtlinie</Button></Link>
    </nav>
  )
}
