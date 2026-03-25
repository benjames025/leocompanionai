import { NextResponse } from "next/server"

const SUPABASE_URL = "https://caebuqevvjrqrgyyyliv.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZWJ1cWV2dmpycXJneXl5bGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMzI0NjAsImV4cCI6MjA4OTcwODQ2MH0.qYqYzM5TwGfSv4Id6zRTvgpDK7oyZpmgEaGlvLf5Hts"
const ADMIN_PASSWORD = "LeoAI2026!"

export async function GET(req: Request) {
  const password = req.headers.get("x-admin-password")
  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/waitlist?select=email,created_at&order=created_at.desc`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    }
  )
  const emails = await res.json()
  return NextResponse.json({ emails })
}
