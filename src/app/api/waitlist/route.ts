import { NextResponse } from "next/server"

const SUPABASE_URL = "https://caebuqevvjrqrgyyyliv.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZWJ1cWV2dmpycXJneXl5bGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMzI0NjAsImV4cCI6MjA4OTcwODQ2MH0.qYqYzM5TwGfSv4Id6zRTvgpDK7oyZpmgEaGlvLf5Hts"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email: email.toLowerCase().trim() }),
    })

    if (res.status === 409) {
      return NextResponse.json({ error: "Email already on waitlist" }, { status: 409 })
    }

    if (!res.ok) {
      const text = await res.text()
      if (text.includes("duplicate") || text.includes("unique")) {
        return NextResponse.json({ error: "Email already on waitlist" }, { status: 409 })
      }
      return NextResponse.json({ error: "Failed to join" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
