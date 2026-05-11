import Link from "next/link"

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

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-primary">GVG</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Guimond Vukovic Group is a trusted international education consulting firm helping students achieve their dreams of studying abroad.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">African Countries</h3>
            <ul className="space-y-2">
              {africanCountries.map((country) => (
                <li key={country.href}>
                  <Link
                    href={country.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Asian Countries</h3>
            <ul className="space-y-2">
              {asianCountries.map((country) => (
                <li key={country.href}>
                  <Link
                    href={country.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@guimondvukovicgroup.com" className="transition-colors hover:text-primary">
                  info@guimondvukovicgroup.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            {new Date().getFullYear()} Guimond Vukovic Group. All rights reserved. | Official UCAS Registered Centre
          </p>
        </div>
      </div>
    </footer>
  )
}
