# Hardcase Guitar

Website penyewaan & produksi hardcase & flightcase custom untuk gitar, bass, efek, dan instrumen musik. Dibuat sesuai bentuk & ukuran instrumen Anda. Pengiriman seluruh Indonesia.

## Tech Stack

- **Framework**: Next.js 14.2.0 (App Router, Static Export)
- **Styling**: Tailwind CSS 3.4.0
- **Language**: TypeScript
- **Icons**: lucide-react
- **Font**: Inter + Playfair Display (Google Fonts)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Homepage
│   ├── [slug]/page.tsx     # Product detail pages
│   ├── kategori/[category]/page.tsx  # Category pages
│   └── globals.css         # Tailwind + base styles
├── components/
│   ├── Header.tsx          # Sticky header + mobile menu
│   └── Footer.tsx          # Footer + contact
└── data/
    └── products.ts         # Product catalog + WhatsApp links
```

## Getting Started

```bash
npm install
npm run dev      # Development server on port 3001
npm run build    # Static export to /out
npm start        # Serve static build on port 3001
npm run lint     # Run ESLint
```

## Deploy

Project ini menggunakan Next.js static export (`output: 'export'`). Hasil build ada di folder `out/`. Langsung deploy ke berapapun yang melayani static file (Nginx, Cloudflare Pages, Vercel, dll).

Untuk menghasilkan sitemap & robots.txt yang akurat, update `public/sitemap.xml` dan `public/robots.txt` sesuai domain production.

## Data Produk

Data produk ada di `src/data/products.ts`. Struktur:

```ts
{
  id: string
  slug: string
  name: string
  tagline: string
  category: 'elektrik' | 'akustik' | 'bass' | 'travel' | 'silent' | 'effects' | 'flightcase' | 'custom'
  images: string[]   // nama file di /public/assets/
  description: string
  compatibility: string[]
  features: string[]
  price?: string     // opsional
  status: 'ready' | 'custom' | 'preorder'
  featured?: boolean
}
```

WhatsApp number di `WHATSAPP_NUMBER` (6287748514337). Edit di `src/data/products.ts` jika perlu.

## Lisensi

Private — hak cipta Hardcase Guitar.
