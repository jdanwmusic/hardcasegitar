'use client'

import Link from 'next/link'
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const nav = [
    { label: 'Produk', href: '/kategori/elektrik' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Custom', href: '#custom' },
    { label: 'FAQ', href: '#faq' },
  ]

  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Shield className="w-7 h-7 text-amber" />
          <div>
            <span className="block font-display text-lg leading-none tracking-tight text-cream">Hardcase</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted">Guitar</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-amber transition-colors">{n.label}</Link>
          ))}
          <a href="#kontak" className="ml-2 inline-flex items-center gap-1.5 bg-amber text-ink font-medium px-4 py-2 rounded-full hover:bg-amberLight transition-colors text-sm">
            Konsultasi <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={mobileOpen}
          className="md:hidden text-cream p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-ink/95 backdrop-blur-md px-6 py-4 space-y-3">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block text-sm text-muted hover:text-amber transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="#kontak"
            className="block inline-flex items-center gap-1.5 bg-amber text-ink font-medium px-4 py-2 rounded-full hover:bg-amberLight transition-colors text-sm mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Konsultasi <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>
      )}
    </header>
  )
}
