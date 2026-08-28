import Image from 'next/image'
import Link from 'next/link'
import { Shield, ArrowRight, CheckCircle2, Sparkles, Truck, Wrench, MessageCircle } from 'lucide-react'
import { CATEGORIES, PRODUCTS, getWhatsAppLink } from '@/data/products'

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.featured)
  const categories = Object.entries(CATEGORIES)

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        <div className="mx-auto max-w-6xl px-5 pt-10 pb-10 md:pt-24 md:pb-32">
          <div className="grid md:grid-cols-2 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-amber mb-4 md:mb-6">
              <Sparkles className="w-3 h-3" /> Hardcase custom Indonesia
            </span>
            <h1 className="font-display text-[2rem] md:text-6xl leading-[1.08] text-cream tracking-tight mb-4 md:mb-6">
              Perlindungan <span className="text-amber">tanpa kompromi.</span>
            </h1>
            <p className="text-sm md:text-lg text-muted max-w-md leading-relaxed mb-6 md:mb-8">
              Hardcase & flightcase custom yang dibuat sesuai bentuk instrumen Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={getWhatsAppLink()} target="_blank" rel="noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-amber text-ink font-semibold px-6 py-3.5 rounded-[9999px] hover:bg-amberLight transition-colors text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi WhatsApp</span>
              </a>
              <Link href="#produk" className="inline-flex items-center justify-center gap-2 border border-border text-cream px-6 py-3.5 rounded-[9999px] hover:border-amber transition-colors text-sm">
                Lihat Produk <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-muted/70 mt-3 hidden sm:block">Konsultasi ukuran & kebutuhan Anda</p>
          </div>
          <div className="order-1 md:order-2 relative aspect-[4/3] md:aspect-[4/3] rounded-xl overflow-hidden bg-surface shadow-[0_20px_45px_rgba(0,0,0,0.4)] mb-6 md:mb-0">
            <Image src="/assets/case-elektrik-xrf-1.jpg" alt="Hardcase elektrik" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
          </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          {[
            { Icon: CheckCircle2, t: 'Custom-fit', s: 'Foam mengikuti bentuk instrumen' },
            { Icon: Wrench, t: 'Hardware Kokoh', s: 'Latch, handle, edge premium' },
            { Icon: Truck, t: 'Kirim Se-Indonesia', s: 'JNE, J&T, SiCepat' },
            { Icon: Shield, t: 'Garansi', s: 'Konstruksi & finishing' },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <Icon className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-cream font-medium">{t}</div>
                <div className="text-muted text-xs">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK / KATEGORI */}
      <section id="produk" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-amber">Product Discovery</span>
          <h2 className="font-display text-3xl md:text-4xl text-cream mt-2">Pilih kategori instrumen</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(([key, cat]) => (
            <Link key={key} href={`/kategori/${key}`} className="group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border group-hover:border-amber transition-colors">
                <Image src={`/assets/${cat.image}`} alt={cat.label} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-cream text-sm font-medium">{cat.label}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-amber">Featured</span>
              <h2 className="font-display text-3xl md:text-4xl text-cream mt-2">Produk unggulan</h2>
            </div>
            <Link href="#produk" className="text-sm text-amber hover:text-amberLight inline-flex items-center gap-1">
              Lihat semua <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.slice(0, 6).map((p) => (
              <article key={p.id} className="bg-card rounded-2xl overflow-hidden border border-border group">
                <div className="relative aspect-[4/3] bg-ink">
                  <Image src={`/assets/${p.images[0]}`} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-amber/90 text-ink text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full">
                    Custom
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-cream font-medium mb-1">{p.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{p.tagline}</p>
                  <a href={getWhatsAppLink(p.name, CATEGORIES[p.category].label)} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-1.5 text-amber text-sm hover:text-amberLight">
                    Tanya Produk Ini <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-amber">About</span>
          <h2 className="font-display text-3xl md:text-4xl text-cream mt-2 mb-6">Workshop spesialis hardcase custom.</h2>
          <p className="text-muted leading-relaxed mb-4">
            Kami membuat hardcase & flightcase yang disesuaikan dengan bentuk spesifik instrumen Anda — bukan case generik. Mulai dari gitar akustik, elektrik, bass, travel/headless, hingga pedalboard dan multi-effects processor.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Setiap case melalui proses custom-cut foam, hardware selection, dan finishing quality-check. Pengerjaan 3-7 hari kerja, dengan garansi konstruksi & finishing.
          </p>
          <ul className="text-sm text-cream space-y-2 mt-6">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber" /> Custom-fit untuk setiap bentuk instrumen</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber" /> Menerima custom: headless, multiscale, double-neck, luthier</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber" /> Pengiriman seluruh Indonesia</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
          <Image src="/assets/case-flightcase-alu-1.jpg" alt="Flightcase workshop" fill className="object-cover" />
        </div>
      </section>

      {/* CUSTOM CASE */}
      <section id="custom" className="bg-gradient-to-b from-ink via-surface to-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-amber">Custom Case</span>
          <h2 className="font-display text-3xl md:text-4xl text-cream mt-2 mb-6">Bentuk unik? Bisa.</h2>
          <p className="text-muted max-w-2xl mx-auto mb-10">
            Kami menerima custom: dimensi spesifik, bentuk non-standar (bulat, datar, banana), headless, multiscale, double-neck, dan luthier design. Konsultasikan bentuk instrumen Anda.
          </p>
          <a href={getWhatsAppLink(undefined, 'Custom Case')} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 bg-amber text-ink font-medium px-6 py-3.5 rounded-[9999px] hover:bg-amberLight transition-colors">
            <MessageCircle className="w-4 h-4" /> Konsultasi Custom Case
          </a>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section id="portofolio" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-amber">Gallery</span>
          <h2 className="font-display text-3xl md:text-4xl text-cream mt-2">Galeri hasil kerja</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PRODUCTS.flatMap(p => p.images).filter((_, i) => i % 2 === 0).slice(0, 16).map((img, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-surface">
              <Image src={`/assets/${img}`} alt={`Galeri ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-amber">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl text-cream mt-2">Pertanyaan umum</h2>
            <p className="text-muted mt-4 text-sm">Berikut jawaban dari pertanyaan yang sering diajukan pelanggan.</p>
          </div>
          <div className="space-y-3">
            {[
              { q: 'Berapa harga hardcase custom?', a: 'Harga bervariasi tergantung ukuran, material, dan kompleksitas foam. Konsultasikan kebutuhan Anda via WhatsApp untuk estimasi.' },
              { q: 'Berapa lama pengerjaan?', a: '3-7 hari kerja setelah konfirmasi desain dan DP.' },
              { q: 'Apakah menerima custom bentuk?', a: 'Ya. Headless, multiscale, double-neck, luthier design, dan bentuk custom lainnya.' },
              { q: 'Bagaimana pengirimannya?', a: 'Pengiriman seluruh Indonesia via JNE, J&T, SiCepat. Estimasi 2-5 hari kerja.' },
              { q: 'Ada garansi?', a: 'Ya. Garansi untuk konstruksi dan finishing — perbaikan atau ganti gratis jika cacat produksi.' },
            ].map((f) => (
              <details key={f.q} className="bg-card border border-border rounded-xl p-4 group">
                <summary className="cursor-pointer text-cream font-medium text-sm flex justify-between items-center">
                  {f.q}
                  <span className="text-amber group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted text-sm mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA KONTAK */}
      <section id="kontak" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-cream mb-4">Lindungi instrumen Anda.</h2>
        <p className="text-muted max-w-xl mx-auto mb-8">
          Konsultasikan kebutuhan hardcase Anda via WhatsApp. Kami respon cepat dan bantu pilih spesifikasi yang sesuai.
        </p>
        <a href={getWhatsAppLink()} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-2 bg-amber text-ink font-medium px-7 py-4 rounded-[9999px] hover:bg-amberLight transition-colors text-base">
          <MessageCircle className="w-5 h-5" /> Chat WhatsApp Sekarang
        </a>
      </section>
    </>
  )
}
