import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import { LangProvider } from './context/LangContext'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Makani Contracting & General Supplies',
  description:
    'Professional contracting, solar energy, facility management and general supply solutions in Egypt and the Gulf region.',
  keywords: [
    'contracting', 'solar energy', 'facility management', 'generators',
    'electrical works', 'Egypt', 'مقاولات', 'طاقة شمسية',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={cairo.variable}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
