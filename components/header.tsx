"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const navigationItems = [
    { href: "/", label: "Início" },
    { href: "/categorias", label: "Categorias" },
    { href: "/categorias/infusoes-medicamentosas", label: "Medicamentos" },
    { href: "/sobre", label: "Sobre" },
    { href: "/referencias", label: "Referências" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const searchUrl = `/pesquisar?q=${encodeURIComponent(searchQuery.trim())}`
      router.push(searchUrl)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 px-3 py-2 rounded-md border border-transparent hover:border-border hover:bg-muted/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search and Mobile Menu - right side */}
          <div className="flex items-center space-x-3">
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar escalas..."
                  className="pl-10 pr-4 w-64"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-all duration-200 px-3 py-2 rounded-md border border-transparent hover:border-border hover:bg-muted/50"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/pesquisar"
                    className="text-lg font-medium text-foreground hover:text-primary transition-all duration-200 px-3 py-2 rounded-md border border-transparent hover:border-border hover:bg-muted/50"
                  >
                    Pesquisar
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="pb-4 md:hidden">
          <form onSubmit={handleSearch} className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar escalas por nome ou categoria..."
              className="pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
    </header>
  )
}
