import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Hardcase Guitar — Hardcase & Flightcase Custom Indonesia',
    template: '%s | Hardcase Guitar',
  },
  description: 'Produsen hardcase & flightcase custom untuk gitar, bass, efek, dan instrumen musik. Dibuat sesuai bentuk & ukuran instrumen Anda. Pengiriman seluruh Indonesia.',
  keywords: ['hardcase', 'flightcase', 'gitar', 'bass', 'custom case', 'Indonesia'],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://hardcasegitar.com',
    siteName: 'Hardcase Guitar',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
