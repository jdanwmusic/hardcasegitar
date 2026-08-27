import Image from 'next/image'
import Link from 'next/link'
import { Shield, CheckCircle2, ArrowLeft, MessageCircle, ChevronRight } from 'lucide-react'
import { PRODUCTS, getWhatsAppLink, CATEGORIES } from '@/data/products'

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = PRODUCTS.find((x) => x.slug === params.slug)
  if (!p) return {}
  return {
    title: p.name,
    description: p.tagline,
  }
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="font-display text-3xl text-cream">Produk tidak ditemukan</h1>
        <Link href="/" className="inline-block mt-6 text-amber">← Kembali ke Beranda</Link>
      </main>
    )
  }
  const cat = CATEGORIES[product.category]
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3)

  return (
    <main className="mx-auto max-w-6xl px-6 pt-8 pb-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-amber mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Kembali
      </Link>
      <nav aria-label="Breadcrumb" className="text-xs text-muted mb-8">
        <Link href="/" className="hover:text-amber">Beranda</Link> / <Link href="/#produk" className="hover:text-amber">Produk</Link> / <span className="text-cream">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* GALLERY — semua image product */}
        <div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface shadow-[0_25px_50px_rgba(0,0,0,0.35)] mb-3">
            <Image src={`/assets/${product.images[0]}`} alt={product.name} fill priority className="object-cover" />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-amber/90 text-ink text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full">
              {cat.label}
            </div>
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1, 4).map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-surface border border-border">
                  <Image src={`/assets/${img}`} alt={`${product.name} view ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* INFO */}
        <div>
          <h1 className="font-display text-3xl md:text-4xl text-cream tracking-tight mb-3">{product.name}</h1>
          <p className="text-amber font-medium mb-5">{product.tagline}</p>
          <p className="text-muted text-sm leading-relaxed mb-7">{product.description}</p>

          {product.compatibility.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-cream mb-2.5">Kompatibilitas</h4>
              <ul className="flex flex-wrap gap-2">
                {product.compatibility.map((c) => (
                  <li key={c} className="text-xs text-cream bg-card border border-border px-2.5 py-1 rounded-full">{c}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-7">
            <h4 className="text-sm font-semibold text-cream mb-2.5">Fitur proteksi</h4>
            <ul className="text-sm text-cream space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-7 flex items-center gap-3 flex-wrap">
            <span className="text-xs uppercase tracking-wider text-muted">Status:</span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber/15 text-amber border border-amber/30">{product.status.toUpperCase()}</span>
            {product.price ? (
              <span className="text-sm font-semibold text-cream">{product.price}</span>
            ) : (
              <span className="text-xs text-muted">Harga: <span className="text-amber font-medium">NEEDS INPUT</span></span>
            )}
          </div>

          <a href={getWhatsAppLink(product.name, cat.label)} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 bg-amber text-ink font-medium px-7 py-3.5 rounded-full hover:bg-amberLight transition-colors text-sm shadow-[0_8px_24px_rgba(200,162,74,0.25)]">
            <MessageCircle className="w-4 h-4" /> Konsultasi Produk Ini
          </a>
          <p className="text-xs text-muted mt-3">Respon cepat via WhatsApp · Tanpa komitmen</p>
        </div>
      </div>

      {/* TRUST STRIP */}
      <section className="mt-16 pt-10 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { Icon: CheckCircle2, t: 'Custom-fit', s: 'Foam mengikuti bentuk' },
            { Icon: Shield, t: 'Hardware Kokoh', s: 'Latch + handle premium' },
            { Icon: Shield, t: 'Garansi', s: 'Konstruksi & finishing' },
            { Icon: Shield, t: 'Kirim Se-Indonesia', s: 'JNE / J&T / SiCepat' },
          ].map(({ Icon, t, s }, i) => (
            <div key={i} className="flex items-start gap-3">
              <Icon className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-cream font-medium">{t}</div>
                <div className="text-muted text-xs">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-14">
          <h3 className="text-sm font-semibold text-cream mb-5 uppercase tracking-wider">Lihat juga di kategori {cat.label}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link key={p.id} href={`/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface border border-border group-hover:border-amber transition-colors">
                  <Image src={`/assets/${p.images[0]}`} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-cream group-hover:text-amber transition-colors">{p.name}</span>
                  <ChevronRight className="w-4 h-4 text-muted" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
        <h3 className="font-display text-2xl text-cream mb-2">Tertarik dengan {product.name}?</h3>
        <p className="text-muted text-sm mb-5">Konsultasikan kebutuhan spesifik Anda — kami bantu pilih proteksi terbaik.</p>
        <a href={getWhatsAppLink(product.name, cat.label)} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 bg-amber text-ink font-medium px-6 py-3 rounded-full hover:bg-amberLight transition-colors text-sm">
          <MessageCircle className="w-4 h-4" /> Tanya via WhatsApp
        </a>
      </section>
    </main>
  )
}
