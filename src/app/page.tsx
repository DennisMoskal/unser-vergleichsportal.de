"use client"

import Head from "next/head"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Check, Star, Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

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
<span className="text-sm mt-1">unser-vergleichsportal.de</span>
</div>
</Link>
)
}

// Reusable Header Component
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
