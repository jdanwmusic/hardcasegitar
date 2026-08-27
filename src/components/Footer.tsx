import { Shield, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-6 h-6 text-amber" />
            <span className="font-display text-xl text-cream">Hardcase Guitar</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">Produsen hardcase & flightcase custom untuk gitar, bass, efek, dan instrumen musik. Dibuat sesuai bentuk & ukuran instrumen Anda.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-cream mb-3">Kontak</h4>
          <div className="text-sm text-muted space-y-2">
            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-amber" /> <span>WhatsApp: 0877-4851-4337</span></p>
            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-amber" /> <span>hardcasegitar.com</span></p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-cream mb-3">Kategori</h4>
          <ul className="text-sm text-muted space-y-1.5">
            <li><a href="#produk" className="hover:text-amber">Gitar Elektrik</a></li>
            <li><a href="#produk" className="hover:text-amber">Gitar Akustik</a></li>
            <li><a href="#produk" className="hover:text-amber">Bass & Travel</a></li>
            <li><a href="#produk" className="hover:text-amber">Effects / Pedalboard</a></li>
            <li><a href="#produk" className="hover:text-amber">Custom & Flightcase</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-6 border-t border-border text-xs text-muted flex flex-col md:flex-row justify-between items-center gap-2">
        <span>© 2026 Hardcase Guitar — hardcasegitar.com</span>
        <span>Perlindungan tanpa kompromi.</span>
      </div>
    </footer>
  )
}
