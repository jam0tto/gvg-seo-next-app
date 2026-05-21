import Link from "next/link"
import Image from "next/image"

const africanCountries = [
  { label: "Nigeria", href: "/countries/nigeria" },
  { label: "Kenya", href: "/countries/kenya" },
  { label: "Zambia", href: "/countries/zambia" },
]

const asianCountries = [
  { label: "Nepal", href: "/countries/nepal" },
  { label: "India", href: "/countries/india" },
  { label: "Pakistan", href: "/countries/pakistan" },
]

const companyLinks = [
  { label: "Play Overseas", href: "/play-overseas-information" },
  { label: "Recruitment", href: "/recruitment" },
  { label: "Undergraduate Studies", href: "/undergraduate-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "News", href: "/news" },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <Link href="/">
              <Image src="/GVG_logo.png" alt="Guimond Vukovic Group" width={481} height={162} className="h-12 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-slate-400">
              Guimond Vukovic Group is a trusted international education consulting firm helping students achieve their dreams of studying abroad.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">African Countries</h3>
            <ul className="space-y-2">
              {africanCountries.map((country) => (
                <li key={country.href}>
                  <Link
                    href={country.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Asian Countries</h3>
            <ul className="space-y-2">
              {asianCountries.map((country) => (
                <li key={country.href}>
                  <Link
                    href={country.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:info@guimondvukovicgroup.com" className="transition-colors hover:text-white">
                  info@guimondvukovicgroup.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-center text-xs text-slate-500">
            {new Date().getFullYear()} Guimond Vukovic Group. All rights reserved. | Official UCAS Registered Centre |{" "}
            <Link href="/privacy-policy" className="underline hover:text-slate-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
