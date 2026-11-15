"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

// Field names the API route checks. Keep in sync with app/api/contact/route.ts.
export const HONEYPOT_FIELD = "website"

type Turnstile = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: Turnstile
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

const widgetIds = new Set<string>()

/** Turnstile tokens are single-use, so call this after a failed submit to get a fresh one. */
export function resetSpamGuard() {
  widgetIds.forEach((id) => window.turnstile?.reset(id))
}

/**
 * Drop inside a <form>. Renders a hidden honeypot input and the Cloudflare Turnstile widget,
 * which adds a hidden `cf-turnstile-response` input to the form for the server to verify.
 */
export function SpamGuard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  function renderWidget() {
    if (!SITE_KEY || !window.turnstile || !containerRef.current || widgetIdRef.current) return
    const id = window.turnstile.render(containerRef.current, { sitekey: SITE_KEY })
    widgetIdRef.current = id
    widgetIds.add(id)
  }

  useEffect(() => {
    return () => {
      const id = widgetIdRef.current
      if (id) {
        window.turnstile?.remove(id)
        widgetIds.delete(id)
        widgetIdRef.current = null
      }
    }
  }, [])

  return (
    <>
      {/* Honeypot: invisible to people, but bots that fill every field will fill this one. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input type="text" id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <Script
        id="cf-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div ref={containerRef} className="flex justify-center" />
    </>
  )
}
