import Image from "next/image"
import type { ReactNode } from "react"

type PageHeroProps = {
  imageSrc: string
  imageAlt: string
  children: ReactNode
  tall?: boolean
}

export function PageHero({ imageSrc, imageAlt, children, tall }: PageHeroProps) {
  const minHeight = tall ? "min-h-[500px] md:min-h-[600px]" : "min-h-[400px] md:min-h-[480px]"

  return (
    <section className={`relative overflow-hidden text-white ${minHeight}`}>
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-indigo-900/75 to-indigo-700/80" />
      <div className={`relative z-10 flex ${minHeight} items-center`}>
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 md:py-24 lg:py-28">
          {children}
        </div>
      </div>
    </section>
  )
}
