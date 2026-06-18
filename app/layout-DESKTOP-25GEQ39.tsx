import type { Metadata } from 'next'
import { Cormorant, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '5Star Bilvård — Professionell Bilrekond i Gävle',
  description:
    'Professionell bilrekond, maskinpolering, lackskydd, folie och däckbyte i Gävle. Vi ger din bil fem-stjärnig behandling varje gång.',
  keywords: 'bilrekond, bilpolering, lackskydd, folie, däckbyte, Gävle, 5star bilvård',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
