"use client"

import React, { useRef, useEffect, useState, useCallback } from "react"
import { motion } from "motion/react"

/* ───────────────── TextHoverEffect ───────────────── */

interface TextHoverEffectProps {
  text: string
  duration?: number
}

export function TextHoverEffect({ text, duration }: TextHoverEffectProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" })

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const cxPercent = ((cursor.x - svgRect.left) / svgRect.width) * 100
      const cyPercent = ((cursor.y - svgRect.top) / svgRect.height) * 100
      setMaskPosition({ cx: `${cxPercent}%`, cy: `${cyPercent}%` })
    }
  }, [cursor])

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="25%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0891b2" />
              <stop offset="75%" stopColor="#059669" />
              <stop offset="100%" stopColor="#06b6d4" />
            </>
          )}
        </linearGradient>
        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>
      {/* Base dim text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-800 font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      {/* Animated stroke */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-800 font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>
      {/* Gradient text revealed on hover */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  )
}

/* ────────────── FooterBackgroundGradient ────────────── */

export function FooterBackgroundGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[120px]" />
    </div>
  )
}

/* ─────────────────── HoverFooter ─────────────────── */

interface FooterLink {
  label: string
  href: string
}

interface HoverFooterProps {
  brandName?: string
  brandTagline?: string
  aboutLinks?: FooterLink[]
  helpfulLinks?: FooterLink[]
  contactEmail?: string
  hoverText?: string
}

export function HoverFooter({
  brandName = "Leo AI",
  brandTagline = "Your personal intelligence companion",
  aboutLinks = [],
  helpfulLinks = [],
  contactEmail = "support@leocompanionai.com",
  hoverText = "LEO AI",
}: HoverFooterProps) {
  return (
    <footer className="relative border-t border-zinc-800/50 bg-zinc-950">
      <FooterBackgroundGradient />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                  <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">{brandName}</span>
            </div>
            <p className="text-sm text-zinc-500">{brandTagline}</p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-300">About Us</h4>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 transition hover:text-sky-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-300">Helpful Links</h4>
            <ul className="space-y-2">
              {helpfulLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 transition hover:text-sky-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-300">Contact</h4>
            <a href={`mailto:${contactEmail}`} className="text-sm text-zinc-500 transition hover:text-sky-400">
              {contactEmail}
            </a>
          </div>
        </div>

        {/* Hover text */}
        <div className="mt-16 h-24">
          <TextHoverEffect text={hoverText} />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/50 pt-8 md:flex-row">
          <p className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} Leo AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://apps.apple.com/app/id6760952532" className="text-zinc-600 transition hover:text-sky-400" aria-label="App Store">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
