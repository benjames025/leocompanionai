"use client"
import { useState, useRef, useEffect } from "react"

interface WaitlistFormProps {
  className?: string
}

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [count, setCount] = useState(1255)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Fetch real count on mount
  useEffect(() => {
    fetch("/api/waitlist/count")
      .then(r => r.json())
      .then(data => setCount(1255 + (data.count || 0)))
      .catch(() => {})
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
        setCount(prev => prev + 1)
        fireConfetti()
      } else {
        const data = await res.json()
        if (data.error?.includes("already")) {
          setStatus("success")
          fireConfetti()
        } else {
          setStatus("error")
        }
      }
    } catch {
      setStatus("error")
    }
  }

  const fireConfetti = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    const particles: { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number }[] = []
    const colors = ["#0284c7", "#10b981", "#fbbf24", "#f472b6", "#fff"]
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 2) * 10,
        life: 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
      })
    }

    const animate = () => {
      if (particles.length === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.5
        p.life -= 2
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, p.life / 100)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        if (p.life <= 0) {
          particles.splice(i, 1)
          i--
        }
      }
      requestAnimationFrame(animate)
    }
    animate()
  }

  return (
    <div className={className}>
      {/* Counter */}
      <div className="mb-4 text-center text-sm text-zinc-400">
        <span className="font-semibold text-white">{count.toLocaleString()}+</span> people on the waitlist
      </div>

      {/* Form container */}
      <div className="relative w-full max-w-md mx-auto h-[56px]">
        <canvas
          ref={canvasRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-50"
        />

        {/* Success state */}
        {status === "success" && (
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-emerald-500 animate-bounce-in shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            <div className="flex items-center gap-2 text-white font-semibold">
              <div className="bg-white/20 p-1 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              You&apos;re on the list!
            </div>
          </div>
        )}

        {/* Form */}
        {status !== "success" && (
          <form onSubmit={handleSubmit} className="relative w-full h-full">
            <input
              type="email"
              required
              placeholder="name@email.com"
              value={email}
              disabled={status === "loading"}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-full pl-5 pr-[150px] rounded-full bg-zinc-900 border border-zinc-700/50 text-white placeholder-zinc-500 outline-none focus:border-sky-500/50 transition-colors disabled:opacity-70"
            />
            <div className="absolute top-[5px] right-[5px] bottom-[5px]">
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-full px-5 rounded-full font-medium text-white bg-sky-600 hover:bg-sky-500 transition-all active:scale-95 disabled:cursor-wait flex items-center justify-center min-w-[130px]"
              >
                {status === "loading" ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Join waitlist"
                )}
              </button>
            </div>
          </form>
        )}

        {status === "error" && (
          <p className="mt-2 text-center text-sm text-red-400">Something went wrong. Try again.</p>
        )}
      </div>
    </div>
  )
}
