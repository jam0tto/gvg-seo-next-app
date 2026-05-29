"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type Child = { label: string; href: string }
type NavItem = {
  label: string
  href?: string
  children?: Child[]
  megaMenu?: boolean
}

const sportsChildren: Child[] = [
  { label: "Basketball", href: "/sports/basketball" },
  { label: "Volleyball", href: "/sports/volleyball" },
  { label: "Soccer", href: "/sports/soccer" },
  { label: "American Football", href: "/sports/american-football" },
  { label: "Rugby", href: "/sports/rugby" },
  { label: "Lacrosse", href: "/sports/lacrosse" },
  { label: "Water Polo", href: "/sports/water-polo" },
  { label: "Field Hockey", href: "/sports/field-hockey" },
  { label: "Ice Hockey", href: "/sports/ice-hockey" },
  { label: "Netball", href: "/sports/netball" },
  { label: "Beach Volleyball", href: "/sports/beach-volleyball" },
  { label: "Tennis", href: "/sports/tennis" },
  { label: "Swimming", href: "/sports/swimming" },
  { label: "Diving", href: "/sports/diving" },
  { label: "Track & Field", href: "/sports/track-and-field" },
  { label: "Cross Country", href: "/sports/cross-country" },
  { label: "Golf", href: "/sports/golf" },
  { label: "Squash", href: "/sports/squash" },
  { label: "Badminton", href: "/sports/badminton" },
  { label: "Martial Arts", href: "/sports/martial-arts" },
  { label: "Judo", href: "/sports/judo" },
  { label: "Taekwondo", href: "/sports/taekwondo" },
  { label: "Cheer", href: "/sports/cheer" },
  { label: "Ultimate", href: "/sports/ultimate" },
]

const navigation: NavItem[] = [
  { label: "Play Overseas", href: "/play-overseas-information" },
  {
    label: "African Students",
    href: "/african-students",
    children: [
      { label: "Nigeria", href: "/countries/nigeria" },
      { label: "Kenya", href: "/countries/kenya" },
      { label: "Zambia", href: "/countries/zambia" },
    ],
  },
  {
    label: "Asian Students",
    href: "/asian-students",
    children: [
      { label: "India", href: "/countries/india" },
      { label: "Pakistan", href: "/countries/pakistan" },
      { label: "Nepal", href: "/countries/nepal" },
    ],
  },
  {
    label: "Sports",
    href: "/sports",
    children: sportsChildren,
    megaMenu: true,
  },
  {
    label: "More",
    children: [
      { label: "Undergraduate Studies", href: "/undergraduate-studies" },
      { label: "Recruitment", href: "/recruitment" },
      { label: "FAQ", href: "/faq" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

function DesktopNavItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="group relative">
      <div className="flex cursor-default items-center gap-0.5">
        {item.href ? (
          <Link
            href={item.href}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ) : (
          <span className="text-sm font-medium text-slate-300 transition-colors group-hover:text-white">
            {item.label}
          </span>
        )}
        <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-white" />
      </div>

      {/* invisible pt-2 bridge prevents gap between trigger and panel */}
      <div
        className={[
          "invisible absolute top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100",
          item.megaMenu ? "left-1/2 -translate-x-1/2" : "left-0",
        ].join(" ")}
      >
        <div
          className={[
            "rounded-lg border border-slate-700 bg-slate-800 shadow-xl",
            item.megaMenu ? "w-[560px] p-4" : "w-48 py-1",
          ].join(" ")}
        >
          {item.megaMenu ? (
            <div className="grid grid-cols-4 gap-x-2 gap-y-0.5">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="rounded px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ) : (
            item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
              >
                {child.label}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null)

  function toggleMobileItem(label: string) {
    setOpenMobileItem((prev) => (prev === label ? null : label))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            src="/GVG_logo.png"
            alt="Guimond Vukovic Group"
            width={481}
            height={162}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Mobile hamburger */}
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-700 bg-slate-900 md:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <div className="flex items-center">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex-1 py-3 text-sm font-medium text-slate-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="flex-1 py-3 text-sm font-medium text-slate-300">
                        {item.label}
                      </span>
                    )}
                    <button
                      onClick={() => toggleMobileItem(item.label)}
                      className="p-2 text-slate-400 hover:text-white"
                      aria-label={`Toggle ${item.label}`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openMobileItem === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {openMobileItem === item.label && (
                    <div className="mb-2 ml-3 flex flex-col border-l border-slate-700 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-slate-400 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="py-3 text-sm font-medium text-slate-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
