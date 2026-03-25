import Link from "next/link";

export const metadata = { title: "Terms of Service — Leo AI" };

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back
      </Link>
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-zinc-500">Last updated: March 24, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-400">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">1. Acceptance</h2>
          <p>By using Leo AI, you agree to these terms. If you do not agree, please do not use the app.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">2. Service Description</h2>
          <p>Leo AI is a personal assistant app that provides wellness tracking, productivity tools, knowledge management, financial tracking, and social features powered by artificial intelligence.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">3. Subscriptions</h2>
          <p>Leo AI offers a free tier and a premium subscription at $4.99/month. Subscriptions are billed through Apple and auto-renew unless cancelled at least 24 hours before the end of the current period. A 7-day free trial is available for new subscribers.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">4. AI Disclaimer</h2>
          <p>Leo AI provides general wellness insights and productivity suggestions. It does not provide medical, legal, or financial advice. Always consult qualified professionals for health, legal, or investment decisions.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">5. User Conduct</h2>
          <p>You agree not to misuse the service, attempt to access other users&apos; data, reverse engineer the app, or use the AI for harmful purposes.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">6. Limitation of Liability</h2>
          <p>Leo AI is provided &quot;as is&quot; without warranties. We are not liable for any damages arising from your use of the app, including decisions made based on AI suggestions.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">7. Contact</h2>
          <p>Questions about these terms? Contact <a href="mailto:support@leocompanionai.com" className="text-sky-400 hover:underline">support@leocompanionai.com</a>.</p>
        </section>
      </div>
    </main>
  );
}
