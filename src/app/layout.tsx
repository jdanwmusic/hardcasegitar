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
  metadataBase: new URL('https://hardcasegitar.com'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://hardcasegitar.com',
    siteName: 'Hardcase Guitar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hardcase Guitar — Hardcase & Flightcase Custom Indonesia',
      },
    ],
  },
  icons: {
    icon: '/hardcase-icon.svg',
    apple: '/hardcase-icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//wa.me" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href="https://hardcasegitar.com" />
      <body className="font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
