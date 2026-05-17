"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Play Overseas", href: "/play-overseas-information" },
  { label: "African Students", href: "/african-students" },
  { label: "Asian Students", href: "/asian-students" },
  { label: "Undergraduate", href: "/undergraduate-studies" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src="/GVG_logo.png" alt="Guimond Vukovic Group" width={80} height={48} className="h-12 w-auto" priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="sm">
            <a href="https://recruit.guimondvukovicgroup.com" target="_blank" rel="noopener noreferrer">
              Sign Up Free
            </a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-700 bg-slate-900 md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-slate-700 pt-3">
              <Button asChild size="sm" className="w-full">
                <a href="https://recruit.guimondvukovicgroup.com" target="_blank" rel="noopener noreferrer">
                  Sign Up Free
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
