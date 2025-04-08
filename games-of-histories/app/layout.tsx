import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imperium: A Roman Board Game',
  description: 'Experience the glory of ancient Rome in this strategic board game. Build your empire, command legions, and shape history.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  )
} 