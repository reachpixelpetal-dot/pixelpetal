import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Pixel Petal | Your story, beautifully told.',
  description:
    'Pixel Petal is a women-owned creative studio offering brand identity, logo design, custom web design, wedding and celebration design, social graphics, and print design.',
  openGraph: {
    title: 'Pixel Petal Studio',
    description: 'Your story, beautifully told.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-warmwhite text-charcoal antialiased">{children}</body>
    </html>
  )
}
