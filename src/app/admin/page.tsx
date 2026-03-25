"use client"
import { useState } from "react"

const ADMIN_PASSWORD = "LeoAI2026!"

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [emails, setEmails] = useState<{ email: string; created_at: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleLogin = async () => {
    if (password !== ADMIN_PASSWORD) {
      alert("Wrong password")
      return
    }
    setAuthenticated(true)
    setLoading(true)
    try {
      const res = await fetch("/api/waitlist/list", {
        headers: { "x-admin-password": password },
      })
      const data = await res.json()
      setEmails(data.emails || [])
    } catch {
      /* ignore */
    }
    setLoading(false)
  }

  const copyAll = () => {
    const allEmails = emails.map((e) => e.email).join(", ")
    navigator.clipboard.writeText(allEmails)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const exportCSV = () => {
    const csv =
      "Email,Joined\n" +
      emails
        .map((e) => `${e.email},${new Date(e.created_at).toLocaleDateString()}`)
        .join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "waitlist.csv"
    a.click()
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-bold text-white text-center">Admin</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 outline-none focus:border-sky-500"
          />
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-500"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Waitlist Dashboard</h1>
            <p className="text-zinc-400 mt-1">{emails.length} signups</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={copyAll}
              className="px-4 py-2 rounded-lg bg-zinc-800 text-white text-sm hover:bg-zinc-700"
            >
              {copied ? "Copied!" : "Copy All Emails"}
            </button>
            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-lg bg-sky-600 text-white text-sm hover:bg-sky-500"
            >
              Export CSV
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-zinc-400">Loading...</p>
        ) : (
          <div className="rounded-xl border border-zinc-800 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody>
                {emails.map((e, i) => (
                  <tr
                    key={e.email}
                    className="border-b border-zinc-800/50 hover:bg-zinc-900/30"
                  >
                    <td className="px-6 py-3 text-sm text-zinc-500">{i + 1}</td>
                    <td className="px-6 py-3 text-sm text-white">{e.email}</td>
                    <td className="px-6 py-3 text-sm text-zinc-400">
                      {new Date(e.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
