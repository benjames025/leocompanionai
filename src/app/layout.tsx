import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leo AI — Your Personal Intelligence Companion",
  description:
    "Leo AI is a personal assistant that helps you track wellness, manage finances, boost productivity, organize knowledge, and stay connected — all powered by AI.",
  keywords: [
    "AI assistant",
    "personal assistant",
    "wellness tracker",
    "budget manager",
    "productivity",
    "iOS app",
  ],
  openGraph: {
    title: "Leo AI — Your Personal Intelligence Companion",
    description:
      "Track wellness, manage finances, boost productivity, and more with Leo AI.",
    url: "https://leocompanionai.com",
    siteName: "Leo AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leo AI — Your Personal Intelligence Companion",
    description:
      "Track wellness, manage finances, boost productivity, and more with Leo AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
