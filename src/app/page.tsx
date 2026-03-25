import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z"/></svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">Leo AI</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-zinc-400 transition hover:text-white">Features</a>
          <a href="#agents" className="text-sm text-zinc-400 transition hover:text-white">AI Agents</a>
          <a href="#security" className="text-sm text-zinc-400 transition hover:text-white">Security</a>
          <a href="#pricing" className="text-sm text-zinc-400 transition hover:text-white">Pricing</a>
        </div>
        <a
          href="https://apps.apple.com/app/id6760952532"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
        >
          Download
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow-pulse absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-sky-600/20 blur-[128px]" />
        <div className="animate-glow-pulse absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-teal-500/15 blur-[128px]" style={{ animationDelay: "2s" }} />
        <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-64 w-64 rounded-full bg-emerald-500/10 blur-[128px]" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="animate-slide-up mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Now available on the App Store
        </div>

        <h1 className="animate-slide-up delay-100 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Your personal{" "}
          <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            intelligence
          </span>{" "}
          companion
        </h1>

        <p className="animate-slide-up delay-200 mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
          Leo AI helps you track wellness, manage finances, boost productivity,
          organize knowledge, and stay connected — all in one private,
          AI-powered assistant.
        </p>

        <div className="animate-slide-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://apps.apple.com/app/id6760952532"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-zinc-950 shadow-lg shadow-white/10 transition hover:bg-zinc-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download for iOS
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3.5 text-base font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </a>
        </div>
      </div>

      <div className="animate-slide-up delay-500 relative z-10 mt-16 w-full max-w-xs">
        <div className="animate-float rounded-[3rem] border border-zinc-700/50 bg-zinc-900 p-3 shadow-2xl shadow-sky-500/10">
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
    </section>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  const colors: Record<string, string> = {
    sky: "from-sky-500/20 to-sky-500/5 text-sky-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400",
    teal: "from-teal-500/20 to-teal-500/5 text-teal-400",
    violet: "from-violet-500/20 to-violet-500/5 text-violet-400",
  };
  return (
    <div className={`rounded-xl bg-gradient-to-b ${colors[color]} p-3`}>
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
      title: "Wellness Tracking",
      description: "Mood, nutrition, workouts, supplements, medications, and body metrics — all in one place with AI-driven insights.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: "Smart Productivity",
      description: "Tasks, reminders, and calendar sync with intelligent scheduling. Leo learns your routines and adapts.",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      title: "Knowledge Base",
      description: "Notes, learning paths, and study sessions organized with tags and search. Your second brain.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
      title: "Budget Management",
      description: "Track expenses, set budgets, monitor recurring bills, and get spending forecasts with category breakdowns.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: "Social Intelligence",
      description: "Remember birthdays, track relationships, plan events, and draft messages. Never miss an important date.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
      title: "Privacy First",
      description: "AES-256 encryption, Keychain storage, biometric lock. Your data never leaves your device unencrypted.",
      color: "from-rose-500 to-pink-500",
    },
  ];

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
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-6 transition hover:border-zinc-700 hover:bg-zinc-900">
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${f.color} p-3 text-white`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Agents() {
  const agents = [
    { name: "Wellness", desc: "Mood, health, nutrition, fitness, supplements", color: "bg-emerald-500" },
    { name: "Productivity", desc: "Tasks, reminders, calendar, scheduling", color: "bg-sky-500" },
    { name: "Knowledge", desc: "Notes, learning paths, study sessions", color: "bg-teal-500" },
    { name: "Finance", desc: "Expenses, budgets, bills, forecasts", color: "bg-amber-500" },
    { name: "Social", desc: "Relationships, birthdays, events", color: "bg-violet-500" },
  ];

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
  );
}

function ChatBubble({ from, text }: { from: "user" | "leo"; text: string }) {
  const isUser = from === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${isUser ? "rounded-br-md bg-sky-600 text-white" : "rounded-bl-md bg-zinc-800 text-zinc-300"}`}>
        {text}
      </div>
    </div>
  );
}

function Security() {
  const items = [
    { title: "AES-256-GCM Encryption", desc: "All local data encrypted with military-grade encryption" },
    { title: "Keychain Storage", desc: "Sensitive data stored in iOS Keychain, not in files" },
    { title: "Biometric Lock", desc: "Face ID and Touch ID protect your app" },
    { title: "Zero-Knowledge Sync", desc: "Data encrypted before it leaves your device" },
    { title: "No Data Selling", desc: "Your data is yours. We never share or sell it" },
    { title: "Server-Side Keys", desc: "API keys stored on secure servers, never in the app" },
  ];

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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
            <a href="https://apps.apple.com/app/id6760952532" className="mt-8 block rounded-full bg-sky-500 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-400">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingItem({ text, active }: { text: string; active?: boolean }) {
  return (
    <li className="flex items-center gap-3">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#0ea5e9" : "#52525b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      {text}
    </li>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-600">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/><path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z"/></svg>
          </div>
          <span className="text-sm font-semibold">Leo AI</span>
        </div>
        <div className="flex gap-6 text-sm text-zinc-500">
          <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="transition hover:text-white">Terms of Service</Link>
          <a href="mailto:support@leocompanionai.com" className="transition hover:text-white">Support</a>
        </div>
        <div className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} Leo AI. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Agents />
      <Security />
      <Pricing />
      <Footer />
    </main>
  );
}
