import { NextResponse } from "next/server"

const SUPABASE_URL = "https://caebuqevvjrqrgyyyliv.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhZWJ1cWV2dmpycXJneXl5bGl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMzI0NjAsImV4cCI6MjA4OTcwODQ2MH0.qYqYzM5TwGfSv4Id6zRTvgpDK7oyZpmgEaGlvLf5Hts"

export async function GET() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/waitlist?select=id&limit=0`,
      {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "count=exact",
        },
      }
    )
    const countHeader = res.headers.get("content-range")
    const count = countHeader ? parseInt(countHeader.split("/")[1] || "0") : 0
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
