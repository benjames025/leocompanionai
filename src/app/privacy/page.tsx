import Link from "next/link";

export const metadata = { title: "Privacy Policy — Leo AI" };

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back
      </Link>
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-zinc-500">Last updated: March 24, 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-zinc-400">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">1. Data Collection</h2>
          <p>Leo AI collects only the data you provide directly through the app: mood entries, health metrics, financial transactions, notes, tasks, and conversation messages. We do not collect data from third-party sources.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">2. Data Storage</h2>
          <p>All personal data is stored locally on your device using AES-256-GCM encryption. If you enable cloud sync, data is encrypted on your device before being transmitted to our servers. We cannot read your encrypted data.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">3. Data Sharing</h2>
          <p>We do not sell, trade, or share your personal data with any third parties. AI processing uses OpenAI&apos;s API with your conversations, but we do not store conversation data on our servers beyond what is needed for the AI response.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">4. Health Data</h2>
          <p>Health data accessed through Apple HealthKit (steps, heart rate, active calories, sleep, weight) is read only with your explicit permission and is never shared with third parties or stored on external servers.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">5. Authentication</h2>
          <p>We support Sign in with Apple and email/password authentication through Supabase. Passwords are hashed using bcrypt and are never stored in plaintext.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">6. Data Deletion</h2>
          <p>You can delete all your data at any time from Settings &gt; Clear Data. Upon account deletion, all associated data is permanently removed from our servers within 30 days.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-200">7. Contact</h2>
          <p>For privacy questions, contact us at <a href="mailto:support@leocompanionai.com" className="text-sky-400 hover:underline">support@leocompanionai.com</a>.</p>
        </section>
      </div>
    </main>
  );
}
