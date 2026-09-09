// HARDCASE GUITAR — Product Catalog
// Asset source: /public/assets/
// NEEDS INPUT: Harga, spesifikasi (dimensi/material/berat), status stock per produk

export type ProductCategory =
  | 'elektrik' | 'akustik' | 'bass' | 'travel'
  | 'silent' | 'effects' | 'flightcase' | 'custom'

export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  category: ProductCategory
  images: string[] // relative to /assets/
  description: string
  compatibility: string[]
  features: string[]
  price?: string  // NEEDS INPUT
  status: 'ready' | 'custom' | 'preorder'
  featured?: boolean
}

export const CATEGORIES: Record<ProductCategory, { label: string; description: string; image: string }> = {
  elektrik: {
    label: 'Gitar Elektrik',
    description: 'Hardcase untuk gitar elektrik — Les Paul, Strat, Tele, dan berbagai bentuk.',
    image: 'case-elektrik-lespaul.avif',
  },
  akustik: {
    label: 'Gitar Akustik',
    description: 'Hardcase presisi untuk gitar akustik dan folk.',
    image: 'akustik-dalam-case.avif',
  },
  bass: {
    label: 'Bass',
    description: 'Proteksi kokoh untuk bass elektrik 4/5/6-string.',
    image: 'case-bass-xkp.avif',
  },
  travel: {
    label: 'Travel / Headless',
    description: 'Case kompak untuk gitar travel, headless, dan silent guitar.',
    image: 'case-travel-headless-1.avif',
  },
  silent: {
    label: 'Silent Guitar',
    description: 'Hardcase khusus untuk gitar silent dan compact guitar.',
    image: 'case-gitar-silent-1.avif',
  },
  effects: {
    label: 'Effects / Pedalboard',
    description: 'Case untuk multi-FX, pedalboard analog, dan efek gitra.',
    image: 'case-efek-podgo-1.avif',
  },
  flightcase: {
    label: 'Flightcase',
    description: 'Hardcase reinforced untuk tur, studio, dan transportasi berat.',
    image: 'case-flightcase-alu-1.avif',
  },
  custom: {
    label: 'Custom & Special',
    description: 'Bentuk khusus, keyboard, banjo, dan proyek custom lainnya.',
    image: 'case-banjo-bulat.avif',
  },
}

// All products — NEEDS INPUT: price, full specs, stock status
export const PRODUCTS: Product[] = [
  // === ELEKTRIK ===
  {
    id: 'e-01', slug: 'hardcase-elektrik-prs-style',
    name: 'Hardcase Elektrik — PRS Style',
    tagline: 'Custom-fit untuk gitar PRS-style quilted finish.',
    category: 'elektrik', featured: true,
    images: ['case-elektrik-prs.avif', 'case-elektrik-xrf-1.avif', 'case-elektrik-xrf-2.avif'],
    description: 'Hardcase dengan foam custom-cut yang mengikuti bentuk gitar PRS-style. Dilengkapi egg-crate foam di lid untuk perlindungan maksimal saat transportasi.',
    compatibility: ['PRS-style', 'PRS SE', '类似外形'],
    features: ['Custom foam fitted', 'Egg-crate lid foam', 'Metal latch', 'Handle kuat'],
    price: undefined, status: 'custom',
  },
  {
    id: 'e-02', slug: 'hardcase-elektrik-les-paul',
    name: 'Hardcase Elektrik — Les Paul Style',
    tagline: 'Proteksi kokoh untuk Les Paul, SG, dan single-cutaway.',
    category: 'elektrik', featured: true,
    images: ['case-elektrik-lespaul.avif', 'case-elektrik-sg.avif'],
    description: 'Dirancang khusus untuk gitar Les Paul dan SG dengan kontur body yang presisi. Fitted foam mengikuti setiap lekukan body.',
    compatibility: ['Les Paul', 'SG', 'Single-cutaway'],
    features: ['Fitted foam body', 'Neck support', 'Egg-crate lid', 'Aluminum corner'],
    price: undefined, status: 'custom',
  },
  {
    id: 'e-03', slug: 'hardcase-elektrik-strat-style',
    name: 'Hardcase Elektrik — Strat / Superstrat',
    tagline: 'Case untuk Stratocaster, Telecaster, dan superstrat.',
    category: 'elektrik',
    images: ['case-elektrik-strat.avif', 'case-elektrik-superstrat.avif', 'case-elektrik-tele.avif', 'case-elektrik-tele-butterscotch.avif'],
    description: 'Hardcase untuk gitar Strat-style, Tele, dan superstrat. Presisi fit untuk body curves dan headstock.',
    compatibility: ['Stratocaster', 'Telecaster', 'Superstrat'],
    features: ['Body contour fit', 'Headstock pocket', 'Egg-crate foam', 'Sturdy handle'],
    price: undefined, status: 'custom',
  },
  {
    id: 'e-04', slug: 'hardcase-elektrik-sunburst',
    name: 'Hardcase Elektrik — Sunburst',
    tagline: 'Case untuk gitar finish sunburst dan marbled.',
    category: 'elektrik',
    images: ['case-elektrik-sunburst.avif', 'case-elektrik-sunburst-alu.avif', 'case-elektrik-marble.avif'],
    description: 'Proteksi maksimal untuk gitar dengan finish sunburst dan marbled. Fitted foam tebal untuk menjaga finish tetap sempurna.',
    compatibility: ['Sunburst', 'Marbled finish', '类似外形'],
    features: ['Thick fitted foam', 'Finish protection', 'Egg-crate lid', 'Metal latch'],
    price: undefined, status: 'custom',
  },
  {
    id: 'e-05', slug: 'hardcase-elektrik-humbucker',
    name: 'Hardcase Elektrik — Humbucker Standard',
    tagline: 'Hardcase standar untuk gitar elektrik humbucker.',
    category: 'elektrik',
    images: ['case-elektrik-1.avif', 'case-elektrik-semihollow.avif', 'case-elektrik-case-cable.avif'],
    description: 'Case standar untuk gitar elektrik dengan konfigurasi humbucker atau semi-hollow. Cocok untuk berbagai merek dan model.',
    compatibility: ['Humbucker', 'Semi-hollow', 'Standard elektrik'],
    features: ['Standard fit', 'Cable storage', 'Pick guard protection', 'Egg-crate lid'],
    price: undefined, status: 'custom',
  },

  // === AKUSTIK ===
  {
    id: 'a-01', slug: 'hardcase-akustik-standard',
    name: 'Hardcase Akustik — Standard',
    tagline: 'Proteksi presisi untuk gitar akustik standard.',
    category: 'akustik', featured: true,
    images: ['hardcase-akustik-1.avif', 'akustik-dalam-case.avif', 'akustik-natural-1.avif'],
    description: 'Hardcase dengan interior foam yang disesuaikan untuk gitar akustik standard. Handle ergonomis dan latch metal yang kokoh.',
    compatibility: ['Akustik standard', 'Dreadnought', 'Auditorium'],
    features: ['Custom interior fit', 'Egg-crate foam', 'Handle ergonomis', 'Metal latch'],
    price: undefined, status: 'custom',
  },
  {
    id: 'a-02', slug: 'hardcase-akustik-cutaway',
    name: 'Hardcase Akustik — Cutaway',
    tagline: 'Dirancang untuk gitar akustik cutaway.',
    category: 'akustik',
    images: ['akustik-cutaway-1.avif', 'akustik-cutaway-2.avif', 'akustik-cutaway-3.avif'],
    description: 'Case dengan kontur khusus untuk body cutaway. Foam mengikuti bentuk body dan cutaway curve secara presisi.',
    compatibility: ['Akustik cutaway', 'OM', 'Orchestra'],
    features: ['Cutaway contour', 'Body fitted foam', 'Neck support', 'Premium latch'],
    price: undefined, status: 'custom',
  },

  // === BASS ===
  {
    id: 'b-01', slug: 'hardcase-bass-4string',
    name: 'Hardcase Bass — 4 String',
    tagline: 'Proteksi untuk bass 4-string sunburst.',
    category: 'bass', featured: true,
    images: ['case-bass-xkp.avif'],
    description: 'Hardcase untuk bass elektrik 4-string. Interior foam fitted mengikuti kontur bass body yang lebih lebar dari gitar.',
    compatibility: ['Bass 4-string', 'Precision Bass', '类似'],
    features: ['Bass body fit', 'Wide foam padding', 'Long neck support', 'Sturdy latch'],
    price: undefined, status: 'custom',
  },
  {
    id: 'b-02', slug: 'hardcase-bass-fretless',
    name: 'Hardcase Bass — Fretless',
    tagline: 'Case untuk bass fretless dan special.',
    category: 'bass',
    images: ['case-bass-fretless.avif'],
    description: 'Dirancang untuk bass fretless. Fitted foam melindungi finish fretless yang sensitif tanpa fret overlay.',
    compatibility: ['Bass fretless', 'Special bass'],
    features: ['Fretless-safe foam', 'Body contour', 'Extra padding', 'Secure latch'],
    price: undefined, status: 'custom',
  },

  // === TRAVEL / HEADLESS ===
  {
    id: 't-01', slug: 'hardcase-travel-headless',
    name: 'Hardcase Travel — Headless Guitar',
    tagline: 'Compact case untuk gitar headless dan travel.',
    category: 'travel', featured: true,
    images: ['case-travel-headless-1.avif', 'case-headless-2.avif', 'case-headless-3.avif', 'case-headless-4.avif'],
    description: 'Case kompak yang dirancang untuk gitar headless dan travel guitar. Profil tipis namun tetap melindungi dengan foam custom-cut.',
    compatibility: ['Headless guitar', 'Travel guitar', 'Compact guitar'],
    features: ['Compact design', 'Custom headless fit', 'Lightweight', 'Carry handle'],
    price: undefined, status: 'custom',
  },
  {
    id: 't-02', slug: 'hardcase-travel-compact',
    name: 'Hardcase Travel — Compact',
    tagline: 'Case ringan untuk gitar compact dan mini.',
    category: 'travel',
    images: ['case-travel-compact.avif', 'case-travel-compact-2.avif', 'case-travel-amp-bg.avif'],
    description: 'Hardcase untuk gitar compact dan mini travel. Cocok untuk musisi yang sering bepergian dengan instrumen ringkas.',
    compatibility: ['Mini guitar', 'Compact guitar', 'Travel guitar'],
    features: ['Lightweight', 'Compact profile', 'Protective foam', 'Shoulder strap ready'],
    price: undefined, status: 'custom',
  },

  // === SILENT ===
  {
    id: 's-01', slug: 'hardcase-silent-guitar',
    name: 'Hardcase Silent Guitar',
    tagline: 'Proteksi untuk silent guitar dan pocket guitar.',
    category: 'silent',
    images: ['case-gitar-silent-1.avif'],
    description: 'Case untuk silent guitar dan pocket guitar. Foam dirancang untuk melindungi instrumen flat-fold dan compact design.',
    compatibility: ['Silent guitar', 'Pocket guitar', 'Foldable guitar'],
    features: ['Compact fit', 'Protective foam', 'Lightweight', 'Portable handle'],
    price: undefined, status: 'custom',
  },

  // === EFFECTS / PEDALBOARD ===
  {
    id: 'ef-01', slug: 'hardcase-line6-podgo',
    name: 'Hardcase — Line 6 POD Go',
    tagline: 'Custom-fit untuk Line 6 POD Go multi-effects.',
    category: 'effects', featured: true,
    images: ['case-efek-podgo-1.avif', 'case-efek-podgo-2.avif', 'case-efek-podgo-3.avif', 'case-efek-podgo-4.avif', 'case-efek-podgo-5.avif', 'case-efek-podgo-6.avif'],
    description: 'Hardcase dengan foam custom-cut untuk Line 6 POD Go. Moulded foam mengikuti kontur unit dan expression pedal. Dilengkapi compartment untuk power adapter dan kabel.',
    compatibility: ['Line 6 POD Go'],
    features: ['POD Go fitted foam', 'Expression pedal pocket', 'Cable compartment', 'Egg-crate lid'],
    price: undefined, status: 'custom',
  },
  {
    id: 'ef-02', slug: 'hardcase-valeton-gp200',
    name: 'Hardcase — Valeton GP-200',
    tagline: 'Case untuk Valeton GP-200 multi-effects processor.',
    category: 'effects',
    images: ['case-efek-valeton-gp200-1.avif', 'case-efek-valeton-gp200-2.avif', 'case-efek-valeton-gp200-3.avif', 'case-efek-valeton-gp200-4.avif', 'case-efek-valeton-gp200-5.avif'],
    description: 'Dirancang untuk Valeton GP-200 dengan foam fitted untuk unit dan expression pedal. Extra compartment untuk power supply dan audio cable.',
    compatibility: ['Valeton GP-200'],
    features: ['GP-200 fitted foam', 'Expression pedal fit', 'Power supply pocket', 'Cable slot'],
    price: undefined, status: 'custom',
  },
  {
    id: 'ef-03', slug: 'hardcase-mooer-ge200',
    name: 'Hardcase — Mooer GE-200',
    tagline: 'Proteksi untuk Mooer GE-200 multi-effects.',
    category: 'effects',
    images: ['case-efek-mooer-ge200.avif'],
    description: 'Case custom-fit untuk Mooer GE-200 dengan moulded foam dan accessory compartment.',
    compatibility: ['Mooer GE-200'],
    features: ['GE-200 fitted foam', 'Accessory slot', 'Compact design', 'Secure latch'],
    price: undefined, status: 'custom',
  },
  {
    id: 'ef-04', slug: 'hardcase-mooer-ge300',
    name: 'Hardcase — Mooer GE-300',
    tagline: 'Case untuk Mooer GE-300 flagship multi-FX.',
    category: 'effects',
    images: ['case-efek-mooer-ge300.avif'],
    description: 'Proteksi untuk Mooer GE-300 flagship. Fitted foam tebal dengan compartment untuk expression pedal.',
    compatibility: ['Mooer GE-300'],
    features: ['GE-300 fitted', 'Expression pedal fit', 'Thick foam', 'Premium latch'],
    price: undefined, status: 'custom',
  },
  {
    id: 'ef-05', slug: 'hardcase-flamma-fx200',
    name: 'Hardcase — Flamma FX200',
    tagline: 'Case untuk Flamma FX200 multi-effects.',
    category: 'effects',
    images: ['case-efek-flamma-fx200.avif'],
    description: 'Custom case untuk Flamma FX200. Foam fitted untuk unit dan ruang accessories.',
    compatibility: ['Flamma FX200'],
    features: ['FX200 fitted foam', 'Compact design', 'Accessory slot', 'Sturdy handle'],
    price: undefined, status: 'custom',
  },
  {
    id: 'ef-06', slug: 'hardcase-pedalboard-analog',
    name: 'Hardcase — Pedalboard Analog',
    tagline: 'Case untuk pedalboard analog dengan berbagai stompbox.',
    category: 'effects',
    images: ['case-pedalboard-analog.avif', 'case-efek-pedalboard-analog-2.avif', 'case-efek-pedalboard-rig-2.avif', 'case-efek-pedalboard-rig-3.avif'],
    description: 'Hardcase untuk pedalboard analog berisi multiple stompbox. Fitted foam dengan sekat untuk setiap efek. Bisa untuk setup: Xotic, Acapulco Gold, MXR, wah, Hotone, JHS, Browne Protein, Behringer, dan lainnya.',
    compatibility: ['Pedalboard analog', 'Stompbox setup', 'Xotic', 'MXR', 'Wah'],
    features: ['Multi-foam compartment', 'Egg-crate lid', 'Cable slot', 'Customizable foam'],
    price: undefined, status: 'custom',
  },
  {
    id: 'ef-07', slug: 'hardcase-pedalboard-multieffekt',
    name: 'Hardcase — Multi-Effects + Pedalboard Rig',
    tagline: 'Case kombinasi multi-FX dan pedalboard.',
    category: 'effects',
    images: ['case-efek-pedalboard-git7.avif', 'case-efek-pedalboard-git7-2.avif', 'case-efek-pedalboard-jackson8.avif'],
    description: 'Case untuk rig dengan multi-effects unit + pedalboard. Custom foam untuk Boss ME-80, ACTONE, wah, dan setup gitar 7/8-string.',
    compatibility: ['Boss ME-80', 'ACTONE', 'Multi-FX + pedalboard', '7-string', '8-string'],
    features: ['Dual-compartment foam', 'Multi-unit fit', 'Cable storage', 'Premium latch'],
    price: undefined, status: 'custom',
  },

  // === FLIGHTCASE ===
  {
    id: 'fc-01', slug: 'flightcase-elektrik-reinforced',
    name: 'Flightcase Elektrik — Reinforced',
    tagline: 'Flightcase dengan aluminum frame untuk proteksi berat.',
    category: 'flightcase', featured: true,
    images: ['case-flightcase-elektrik-1.avif', 'case-flightcase-elektrik-2.avif', 'case-flightcase-alu-1.avif', 'case-flightcase-alu-2.avif', 'case-flightcase-alu-3.avif'],
    description: 'Flightcase profesional dengan aluminum frame dan metal corner reinforcement. Dirancang untuk touring, studio, dan transportasi berat. Foam interior thick untuk proteksi maksimal.',
    compatibility: ['Gitar elektrik', 'Touring', 'Studio use'],
    features: ['Aluminum frame', 'Metal corner guard', 'Riveted construction', 'Heavy-duty latch', 'Stackable'],
    price: undefined, status: 'custom',
  },

  // === CUSTOM ===
  {
    id: 'c-01', slug: 'hardcase-keyboard-flat',
    name: 'Hardcase — Keyboard / Flat Case',
    tagline: 'Case datar untuk keyboard, MIDI controller, dan flat equipment.',
    category: 'custom',
    images: ['case-flat-custom.avif', 'case-keyboard-long.avif', 'case-keyboard-close.avif', 'case-keyboard-detail.avif', 'case-keyboard-detail-2.avif'],
    description: 'Hardcase flat untuk keyboard, MIDI controller, dan equipment datar lainnya. Profil tipis dengan proteksi foam tebal.',
    compatibility: ['Keyboard', 'MIDI controller', 'Flat equipment'],
    features: ['Flat profile', 'Thick foam padding', 'Reinforced edge', 'Handle + strap'],
    price: undefined, status: 'custom',
  },
  {
    id: 'c-02', slug: 'hardcase-banjo-special',
    name: 'Hardcase — Bentuk Bulat / Banjo',
    tagline: 'Case untuk banjo dan bentuk bulat/non-standard.',
    category: 'custom',
    images: ['case-banjo-bulat.avif', 'case-closed-long.avif', 'case-closed-travel.avif'],
    description: 'Hardcase dengan bentuk bulat khusus untuk banjo dan instrumen dengan kontur non-standard. Foam fitted untuk bentuk unik.',
    compatibility: ['Banjo', 'Ukulele jumbo', 'Bulat'],
    features: ['Round shape fit', 'Custom foam', 'Compact profile', 'Carry handle'],
    price: undefined, status: 'custom',
  },
  {
    id: 'c-03', slug: 'hardcase-detail-hardware',
    name: 'Hardcase — Hardware & Accessories',
    tagline: 'Detail hardware: handle, latch, dan edging.',
    category: 'custom',
    images: ['hardware-handle.avif', 'hardware-lock.avif', 'hardware-edging-latch.avif'],
    description: 'Detail hardware yang digunakan di setiap hardcase: handle ergonomis, metal latch dengan lock, dan aluminum edge protection. Setiap detail dipilih untuk durability dan keamanan instrumen.',
    compatibility: ['Hardware standar', 'Upgrades'],
    features: ['Ergonomic handle', 'Metal latch + lock', 'Aluminum edge', 'Professional grade'],
    price: undefined, status: 'custom',
  },
  {
    id: 'c-04', slug: 'hardcase-mang-eci-cajon',
    name: 'Hardcase — MANG ECI CAJON',
    tagline: 'Hardcase hitam untuk perlindungan instrumen. Label: MANG ECI CAJON.',
    category: 'custom',
    images: ['hardcase-mang-eci-cajon.jpg'],
    description: 'Hardcase hitam dengan label MANG ECI CAJON (terlihat pada foto). Kondisi: baru / baik. Tidak ada spesifikasi teknis (dimensi, material foam, berat) yang tersedia dari visual — hanya foto ini yang tersedia sebagai referensi.',
    compatibility: ['Tidak dicantumkan — perlu konfirmasi'],
    features: ['Hardcase hitam', 'Metal latch', 'Label MANG ECI CAJON (visual)', 'Foto asli (bukan render)'],
    price: undefined, status: 'custom',
  },

]

export const WHATSAPP_NUMBER = '6287748514337'
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export function getWhatsAppLink(productName?: string, category?: string): string {
  let text = 'Halo, saya tertarik dengan hardcase guitar.'
  if (productName) text += ` Producto: ${productName}.`
  if (category) text += ` Kategori: ${category}.`
  text += ' Bisa info lebih lanjut?'
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`
}