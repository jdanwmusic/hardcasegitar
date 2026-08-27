import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react'
import { CATEGORIES, PRODUCTS, getWhatsAppLink } from '@/data/products'
import type { ProductCategory } from '@/data/products'

const CATEGORY_KEYS = Object.keys(CATEGORIES) as ProductCategory[]

export async function generateStaticParams() {
  return CATEGORY_KEYS.map((key) => ({ category: key }))
}

export async function generateMetadata({ params }: { params: { category: string } }) {
  const cat = CATEGORIES[params.category as ProductCategory]
  if (!cat) return {}
  return {
    title: cat.label,
    description: cat.description,
  }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const key = params.category as ProductCategory
  const cat = CATEGORIES[key]
  if (!cat) return <div>Kategori tidak ditemukan</div>

  const products = PRODUCTS.filter((p) => p.category === key)

  return (
    <main className="mx-auto max-w-6xl px-6 pt-8 pb-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-amber mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Beranda
      </Link>

      {/* Header */}
      <div className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl text-cream tracking-tight mb-3">{cat.label}</h1>
        <p className="text-muted text-base max-w-lg">{cat.description}</p>
      </div>

      {/* Products grid */}
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="bg-card rounded-2xl overflow-hidden border border-border group">
                <div className="relative aspect-[4/3] bg-ink">
                  <Image src={`/assets/${p.images[0]}`} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-amber/90 text-ink text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full">
                    {p.status.toUpperCase()}
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-cream font-medium mb-1">{p.name}</h2>
                  <p className="text-muted text-sm leading-relaxed mb-4">{p.tagline}</p>
                  <div className="flex items-center justify-between">
                    {p.price ? (
                      <span className="text-sm font-semibold text-amber">{p.price}</span>
                    ) : (
                      <span className="text-xs text-muted">Harga: <span className="text-amber">NEEDS INPUT</span></span>
                    )}
                    <Link href={`/${p.slug}`} className="inline-flex items-center gap-1 text-amber text-sm hover:text-amberLight">
                      Detail <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-muted mb-6">Belum ada produk di kategori ini.</p>
          <Link href="/" className="text-amber hover:text-amberLight">← Kembali ke Beranda</Link>
        </div>
      )}

      {/* CTA */}
      <section className="mt-16 bg-surface border border-border rounded-2xl p-8 text-center">
        <h3 className="font-display text-2xl text-cream mb-2">Tidak menemukan yang Anda cari?</h3>
        <p className="text-muted text-sm mb-5">Konsultasikan kebutuhan custom case Anda — kami bantu carikan solusi terbaik.</p>
        <a href={getWhatsAppLink(undefined, cat.label)} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 bg-amber text-ink font-medium px-6 py-3 rounded-full hover:bg-amberLight transition-colors text-sm">
          <MessageCircle className="w-4 h-4" /> Tanya Kategori Ini
        </a>
      </section>

      {/* Other categories */}
      <section className="mt-14">
        <h3 className="text-sm font-semibold text-cream mb-5 uppercase tracking-wider">Kategori lain</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORY_KEYS.filter((k) => k !== key).map((k) => (
            <Link key={k} href={`/kategori/${k}`} className="group block bg-card border border-border rounded-xl overflow-hidden">
              <div className="relative aspect-[3/2]">
                <Image src={`/assets/${CATEGORIES[k].image}`} alt={CATEGORIES[k].label} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-ink/60" />
              </div>
              <div className="p-3">
                <span className="text-xs text-cream group-hover:text-amber transition-colors">{CATEGORIES[k].label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
