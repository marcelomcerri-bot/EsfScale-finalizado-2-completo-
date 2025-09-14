import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "EnfScale - Escalas de Avaliação de Enfermagem",
  description:
    "Site dedicado às escalas de avaliação de enfermagem utilizadas no Brasil. Ferramenta completa de referência para estudantes, enfermeiros e pesquisadores.",
  generator: "EnfScale",
  keywords:
    "enfermagem, escalas de avaliação, nursing scales, Florence Nightingale, avaliação clínica, cuidados de enfermagem",
  icons: {
    icon: "/nursing-lamp.png",
    shortcut: "/nursing-lamp.png",
    apple: "/nursing-lamp.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
