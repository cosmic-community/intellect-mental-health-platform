import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intellect - Redefining Mental Health Access and Quality',
  description: 'Empowering the world\'s largest organisations and 4 million members globally with evidence-based and hyperlocalised mental health care, all in one ecosystem.',
  keywords: 'mental health, employee assistance, EAP, workplace wellness, therapy, counseling',
  authors: [{ name: 'Intellect' }],
  creator: 'Intellect',
  publisher: 'Intellect',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intellect.co',
    siteName: 'Intellect',
    title: 'Intellect - Redefining Mental Health Access and Quality',
    description: 'Empowering the world\'s largest organisations and 4 million members globally with evidence-based and hyperlocalised mental health care.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Intellect Mental Health Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intellect - Redefining Mental Health Access and Quality',
    description: 'Empowering the world\'s largest organisations and 4 million members globally with evidence-based and hyperlocalised mental health care.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}