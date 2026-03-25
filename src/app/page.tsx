"use client"

import Link from "next/link"
import { useState } from "react"
import { DottedSurface } from "@/components/ui/dotted-surface"
import { HoverFooter } from "@/components/ui/hover-footer"
import { WaitlistForm } from "@/components/ui/waitlist-hero"
import {
  Brain,
  Shield,
  BarChart3,
  Heart,
  Users,
  DollarSign,
  Menu,
  X,
  ChevronDown,
  Check,
} from "lucide-react"

/* ────────────────────── Nav ────────────────────── */

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
              <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">Leo AI</span>
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-zinc-400 transition hover:text-white">Features</a>
          <a href="#agents" className="text-sm text-zinc-400 transition hover:text-white">AI Agents</a>
          <a href="#security" className="text-sm text-zinc-400 transition hover:text-white">Security</a>
          <a href="#pricing" className="text-sm text-zinc-400 transition hover:text-white">Pricing</a>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 md:inline-flex"
        >
          Join Waitlist
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" onClick={() => setOpen(false)} className="text-sm text-zinc-400 transition hover:text-white">Features</a>
            <a href="#agents" onClick={() => setOpen(false)} className="text-sm text-zinc-400 transition hover:text-white">AI Agents</a>
            <a href="#security" onClick={() => setOpen(false)} className="text-sm text-zinc-400 transition hover:text-white">Security</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="text-sm text-zinc-400 transition hover:text-white">Pricing</a>
            <a href="#waitlist" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-zinc-950">
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

/* ────────────────────── Hero ────────────────────── */

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  const colors: Record<string, string> = {
    sky: "from-sky-500/20 to-sky-500/5 text-sky-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
    teal: "from-teal-500/20 to-teal-500/5 text-teal-400",
    violet: "from-violet-500/20 to-violet-500/5 text-violet-400",
  }
  return (
    <div className={`rounded-xl bg-gradient-to-b ${colors[color]} p-3`}>
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </div>
  )
}

function Hero() {
  return (
    <section id="waitlist" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow-pulse absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-sky-600/20 blur-[128px]" />
        <div className="animate-glow-pulse absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-teal-500/15 blur-[128px]" style={{ animationDelay: "2s" }} />
        <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-64 w-64 rounded-full bg-emerald-500/10 blur-[128px]" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <div className="text-center lg:text-left">
          <div className="animate-slide-up mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Coming Soon to iOS
          </div>

          <h1 className="animate-slide-up delay-100 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Your personal{" "}
            <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              intelligence
            </span>{" "}
            companion
          </h1>

          <p className="animate-slide-up delay-200 mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Leo AI helps you track wellness, manage finances, boost productivity,
            organize knowledge, and stay connected — all in one private,
            AI-powered assistant.
          </p>

          <div className="animate-slide-up delay-300 mt-10 w-full lg:max-w-none max-w-md mx-auto lg:mx-0">
            <WaitlistForm />
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="animate-slide-up delay-500 flex justify-center">
          <div className="animate-float w-full max-w-xs rounded-[3rem] border border-zinc-700/50 bg-zinc-900 p-3 shadow-2xl shadow-sky-500/10 -rotate-3">
            <div className="overflow-hidden rounded-[2.4rem] bg-zinc-950">
              <div className="flex items-center justify-center bg-gradient-to-b from-sky-950 to-zinc-950 px-6 pb-8 pt-14">
                <div className="w-full space-y-4">
                  <div className="text-center text-sm text-zinc-500">Good morning</div>
                  <div className="text-center text-2xl font-bold">Hey, Ben</div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <StatCard label="Spent" value="$24" color="sky" />
                    <StatCard label="Calories" value="1,840" color="emerald" />
                    <StatCard label="Tasks" value="3" color="teal" />
                    <StatCard label="Mood" value="Good" color="violet" />
                  </div>
                  <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
                    <div className="text-xs text-zinc-500">For You</div>
                    <div className="mt-2 text-sm text-zinc-300">Exercise boosted your mood 3 days this week. Keep it up!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Features (Bento Grid) ─────────────── */

function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Everything you need,{" "}
            <span className="text-zinc-500">nothing you don&apos;t</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
            Six intelligent modules that work together to give you a complete picture of your life.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {/* Card 1 — 5 AI Agents (large) */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-8 transition hover:border-zinc-700 hover:bg-zinc-900 md:col-span-2">
            <div className="flex items-end gap-6">
              <div>
                <div className="flex items-center gap-3 text-sky-400">
                  <Brain size={24} />
                  <span className="text-sm font-medium uppercase tracking-wider">AI-Powered</span>
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-7xl font-bold tracking-tight">5</span>
                  <span className="text-2xl font-semibold text-zinc-400">AI Agents</span>
                </div>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
                  Wellness, Productivity, Knowledge, Finance, and Social — each specialized agent routes your messages automatically.
                </p>
              </div>
              <div className="hidden md:flex flex-wrap gap-2">
                {["Wellness", "Productivity", "Knowledge", "Finance", "Social"].map((a) => (
                  <span key={a} className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs text-zinc-400">{a}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Privacy First */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-8 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-center gap-3 text-emerald-400">
              <Shield size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">Privacy First</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              AES-256-GCM encryption, Keychain storage, biometric lock. Your data never leaves your device unencrypted.
            </p>
            <div className="mt-6 flex gap-2">
              {["AES-256", "Face ID", "Keychain"].map((t) => (
                <span key={t} className="rounded-full border border-emerald-800/30 bg-emerald-900/20 px-2.5 py-1 text-xs text-emerald-400">{t}</span>
              ))}
            </div>
          </div>

          {/* Card 3 — Smart Insights */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-8 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-center gap-3 text-teal-400">
              <BarChart3 size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">Smart Insights</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Mood correlations, wellness scoring, and weekly reports. Leo spots patterns across exercise, sleep, spending, and social activity.
            </p>
            {/* Mini chart visualization */}
            <div className="mt-6 flex items-end gap-1.5 h-12">
              {[40, 55, 35, 70, 60, 80, 75, 90, 65, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-teal-600/60 to-teal-400/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Card 4 — Wellness Intelligence */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-8 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-center gap-3 text-rose-400">
              <Heart size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">Wellness Intelligence</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Mood tracking, nutrition logging, workout plans, supplements, medications, and body metrics — all driven by HealthKit data.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[
                { label: "Mood", value: "Good" },
                { label: "Cal", value: "1,840" },
                { label: "Steps", value: "8.2k" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-zinc-800/50 py-2">
                  <div className="text-xs text-zinc-500">{s.label}</div>
                  <div className="text-sm font-semibold text-zinc-300">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 5 — Social Memory */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-8 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-center gap-3 text-violet-400">
              <Users size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">Social Memory</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Remember birthdays, track relationships, plan events, and draft messages. Leo learns who matters to you.
            </p>
            <div className="mt-6 space-y-2">
              {[
                { name: "Sarah", event: "Birthday in 3 days" },
                { name: "Mom", event: "Call reminder today" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-3 rounded-lg bg-zinc-800/50 px-3 py-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600/30 text-xs font-bold text-violet-400">{p.name[0]}</div>
                  <div>
                    <div className="text-sm font-medium text-zinc-300">{p.name}</div>
                    <div className="text-xs text-zinc-500">{p.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6 — Budget Tracking */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-8 transition hover:border-zinc-700 hover:bg-zinc-900">
            <div className="flex items-center gap-3 text-amber-400">
              <DollarSign size={24} />
              <span className="text-sm font-medium uppercase tracking-wider">Budget Tracking</span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Track expenses, set budgets, monitor recurring bills, and get spending forecasts with automatic categorization.
            </p>
            {/* Mini budget bar */}
            <div className="mt-6 space-y-3">
              {[
                { cat: "Food", pct: 65, color: "bg-amber-500" },
                { cat: "Transport", pct: 40, color: "bg-sky-500" },
                { cat: "Entertainment", pct: 25, color: "bg-violet-500" },
              ].map((b) => (
                <div key={b.cat}>
                  <div className="flex justify-between text-xs text-zinc-500 mb-1">
                    <span>{b.cat}</span>
                    <span>{b.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-zinc-800">
                    <div className={`h-full rounded-full ${b.color}`} style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────── Agents ────────────────────── */

function ChatBubble({ from, text }: { from: "user" | "leo"; text: string }) {
  const isUser = from === "user"
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${isUser ? "rounded-br-md bg-sky-600 text-white" : "rounded-bl-md bg-zinc-800 text-zinc-300"}`}>
        {text}
      </div>
    </div>
  )
}

function Agents() {
  const agents = [
    { name: "Wellness", desc: "Mood, health, nutrition, fitness, supplements", color: "bg-emerald-500" },
    { name: "Productivity", desc: "Tasks, reminders, calendar, scheduling", color: "bg-sky-500" },
    { name: "Knowledge", desc: "Notes, learning paths, study sessions", color: "bg-teal-500" },
    { name: "Finance", desc: "Expenses, budgets, bills, forecasts", color: "bg-amber-500" },
    { name: "Social", desc: "Relationships, birthdays, events", color: "bg-violet-500" },
  ]

  return (
    <section id="agents" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-600/10 blur-[128px]" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              5 AI agents,{" "}
              <span className="text-zinc-500">one conversation</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-500">
              Leo automatically routes your message to the right agent. Just talk naturally — Leo figures out the rest.
            </p>
            <div className="mt-8 space-y-3">
              {agents.map((a) => (
                <div key={a.name} className="flex items-center gap-4 rounded-xl border border-zinc-800/50 bg-zinc-900/50 p-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${a.color} text-white font-bold text-sm`}>
                    {a.name[0]}
                  </div>
                  <div>
                    <div className="font-medium">{a.name}</div>
                    <div className="text-sm text-zinc-500">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-6">
            <div className="space-y-4">
              <ChatBubble from="user" text="I spent $45 on groceries and walked 8000 steps today" />
              <ChatBubble from="leo" text="Logged $45 under Food & Groceries. Great job on 8,000 steps — that's 80% of your daily goal. Spending this week: $127, under your $200 budget." />
              <ChatBubble from="user" text="Remind me to meal prep Sunday at 10am" />
              <ChatBubble from="leo" text="Done! Reminder set for Sunday at 10:00 AM. Added to your calendar too." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────── Security ────────────────────── */

function Security() {
  const items = [
    { title: "AES-256-GCM Encryption", desc: "All local data encrypted with military-grade encryption" },
    { title: "Keychain Storage", desc: "Sensitive data stored in iOS Keychain, not in files" },
    { title: "Biometric Lock", desc: "Face ID and Touch ID protect your app" },
    { title: "Zero-Knowledge Sync", desc: "Data encrypted before it leaves your device" },
    { title: "No Data Selling", desc: "Your data is yours. We never share or sell it" },
    { title: "Server-Side Keys", desc: "API keys stored on secure servers, never in the app" },
  ]

  return (
    <section id="security" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Built for <span className="text-zinc-500">privacy</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-500">
          Your personal data deserves the highest level of protection.
        </p>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 text-left">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                <Shield size={20} />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ────────────────────── Pricing ────────────────────── */

function PricingItem({ text, active }: { text: string; active?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <Check size={16} className={active ? "text-sky-400" : "text-zinc-600"} />
      {text}
    </li>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[128px]" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Simple, transparent pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
          Start free. Upgrade when you&apos;re ready.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-left">
            <div className="text-sm font-medium text-zinc-400">Free</div>
            <div className="mt-2 text-4xl font-bold">$0</div>
            <div className="text-sm text-zinc-500">forever</div>
            <ul className="mt-8 space-y-3 text-sm text-zinc-400">
              <PricingItem text="5 AI messages per day" />
              <PricingItem text="Mood tracking" />
              <PricingItem text="Expense logging" />
              <PricingItem text="Notes & reminders" />
              <PricingItem text="Basic insights" />
            </ul>
          </div>
          <div className="relative rounded-2xl border border-sky-500/50 bg-gradient-to-b from-sky-950/50 to-zinc-900/50 p-8 text-left">
            <div className="absolute -top-3 right-6 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white">Most Popular</div>
            <div className="text-sm font-medium text-sky-400">Premium</div>
            <div className="mt-2 text-4xl font-bold">$4.99</div>
            <div className="text-sm text-zinc-500">per month &middot; 7-day free trial</div>
            <ul className="mt-8 space-y-3 text-sm text-zinc-300">
              <PricingItem text="Unlimited AI conversations" active />
              <PricingItem text="Health & fitness intelligence" active />
              <PricingItem text="Smart budget management" active />
              <PricingItem text="Photo meal scanning" active />
              <PricingItem text="Supplement & medication tracking" active />
              <PricingItem text="Mood correlation insights" active />
              <PricingItem text="Cloud sync across devices" active />
            </ul>
            <a href="#waitlist" className="mt-8 block rounded-full bg-sky-500 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-400">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────── Page ────────────────────── */

export default function Home() {
  return (
    <>
      {/* Animated dotted background */}
      <DottedSurface
        dotColor="#38bdf8"
        dotSize={2.5}
        gridWidth={60}
        gridHeight={30}
        waveAmplitude={1.2}
        waveFrequency={0.3}
        speed={0.8}
        opacityRange={[0.12, 0.45]}
      />

      <main className="relative z-10">
        <Nav />
        <Hero />
        <Features />
        <Agents />
        <Security />
        <Pricing />
        <HoverFooter
          brandName="Leo AI"
          brandTagline="Your personal intelligence companion"
          aboutLinks={[
            { label: "Features", href: "#features" },
            { label: "AI Agents", href: "#agents" },
            { label: "Security", href: "#security" },
            { label: "Pricing", href: "#pricing" },
          ]}
          helpfulLinks={[
            { label: "Join Waitlist", href: "#waitlist" },
            { label: "Support", href: "mailto:support@leocompanionai.com" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
          ]}
          contactEmail="support@leocompanionai.com"
          hoverText="LEO AI"
        />
      </main>
    </>
  )
}
