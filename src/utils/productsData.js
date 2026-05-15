/**
 * Central mock catalog — replace with API data in a real app.
 * Images use picsum.photos with stable seeds so they stay consistent.
 */
export function productImage(seed, w = 640, h = 800) {
  return `https://picsum.photos/seed/${encodeURIComponent(String(seed))}/${w}/${h}`
}

const baseProducts = [
  {
    id: 'p1',
    name: 'Noise Cancelling Wireless Headphones',
    description:
      'Premium over-ear headphones with adaptive ANC, 40-hour battery, and plush memory foam. Perfect for travel and deep work.',
    price: 7999,
    mrp: 12999,
    category: 'electronics',
    rating: 4.6,
    reviews: 8421,
    popularity: 98,
  },
  {
    id: 'p2',
    name: 'Smart Fitness Watch Pro',
    description:
      'AMOLED display, SpO2, heart rate zones, GPS, and 120+ sport modes. Water resistant and week-long battery.',
    price: 4999,
    mrp: 8999,
    category: 'electronics',
    rating: 4.4,
    reviews: 12033,
    popularity: 96,
  },
  {
    id: 'p3',
    name: 'Ultrabook 14" — 16GB / 512GB',
    description:
      'Thin aluminium chassis, backlit keyboard, and all-day battery. Built for creators who need power on the move.',
    price: 62999,
    mrp: 74999,
    category: 'electronics',
    rating: 4.7,
    reviews: 2104,
    popularity: 88,
  },
  {
    id: 'p4',
    name: 'Portable Bluetooth Speaker',
    description:
      '360° sound, IPX7 waterproofing, and deep bass radiators. Pair two units for stereo outdoors.',
    price: 2499,
    mrp: 3999,
    category: 'electronics',
    rating: 4.3,
    reviews: 5601,
    popularity: 82,
  },
  {
    id: 'p5',
    name: 'Men’s Slim Fit Denim Jacket',
    description:
      'Stretch denim with classic trucker styling. Layer-friendly and finished with matte gunmetal hardware.',
    price: 1899,
    mrp: 3499,
    category: 'fashion',
    rating: 4.5,
    reviews: 3321,
    popularity: 91,
  },
  {
    id: 'p6',
    name: 'Women’s Floral Summer Dress',
    description:
      'Breathable viscose blend, smocked bodice, and midi length. Machine washable with colour-fast prints.',
    price: 1299,
    mrp: 2499,
    category: 'fashion',
    rating: 4.6,
    reviews: 2890,
    popularity: 93,
  },
  {
    id: 'p7',
    name: 'Running Shoes — Cushion Max',
    description:
      'Responsive foam midsole, breathable mesh upper, and durable rubber outsole for daily miles.',
    price: 3999,
    mrp: 5999,
    category: 'sports',
    rating: 4.7,
    reviews: 15440,
    popularity: 99,
  },
  {
    id: 'p8',
    name: 'Yoga Mat — 6mm TPE',
    description:
      'Non-slip texture, alignment lines, and easy-roll design. Free carrying strap included.',
    price: 899,
    mrp: 1499,
    category: 'sports',
    rating: 4.4,
    reviews: 6722,
    popularity: 85,
  },
  {
    id: 'p9',
    name: 'Ceramic Cookware Set (5pc)',
    description:
      'Induction compatible, toxin-free ceramic coating, and soft-grip handles for everyday cooking.',
    price: 4599,
    mrp: 6999,
    category: 'home',
    rating: 4.5,
    reviews: 4122,
    popularity: 79,
  },
  {
    id: 'p10',
    name: 'Minimal Desk Lamp with USB',
    description:
      'Warm-to-cool LED, touch dimmer, and USB-C charging port. Ideal for nightstands and WFH setups.',
    price: 1199,
    mrp: 1999,
    category: 'home',
    rating: 4.2,
    reviews: 901,
    popularity: 74,
  },
  {
    id: 'p11',
    name: 'Vitamin C Brightening Serum',
    description:
      '15% L-ascorbic acid with ferulic acid and vitamin E. Lightweight, fast-absorbing daily radiance.',
    price: 899,
    mrp: 1499,
    category: 'beauty',
    rating: 4.6,
    reviews: 5233,
    popularity: 90,
  },
  {
    id: 'p12',
    name: 'Hydrating Lip Tint Set',
    description:
      'Four buildable shades with shea butter and SPF. Comfortable satin finish without stickiness.',
    price: 649,
    mrp: 999,
    category: 'beauty',
    rating: 4.4,
    reviews: 1888,
    popularity: 77,
  },
  {
    id: 'p13',
    name: 'Cotton Crewneck Tee (Pack of 2)',
    description:
      '180 GSM combed cotton, reinforced collar, and tailored fit. Everyday essentials in neutral tones.',
    price: 799,
    mrp: 1299,
    category: 'fashion',
    rating: 4.3,
    reviews: 9901,
    popularity: 86,
  },
  {
    id: 'p14',
    name: 'Leather Crossbody Bag',
    description:
      'Full-grain leather, adjustable strap, and RFID-safe inner pocket. Fits phone, wallet, and keys.',
    price: 2499,
    mrp: 4499,
    category: 'fashion',
    rating: 4.5,
    reviews: 1204,
    popularity: 72,
  },
  {
    id: 'p15',
    name: '4K Action Camera Kit',
    description:
      'HyperSmooth stabilization, waterproof housing, and dual screens. Includes mounts for bikes and helmets.',
    price: 18999,
    mrp: 24999,
    category: 'electronics',
    rating: 4.5,
    reviews: 3401,
    popularity: 81,
  },
  {
    id: 'p16',
    name: 'Insulated Stainless Bottle 750ml',
    description:
      'Keeps drinks cold 24h / hot 12h. Powder coat finish and leak-proof twist cap.',
    price: 999,
    mrp: 1599,
    category: 'sports',
    rating: 4.6,
    reviews: 22311,
    popularity: 94,
  },
  {
    id: 'p17',
    name: 'Scented Soy Candle Trio',
    description:
      'Hand-poured candles with cotton wicks. Notes: cedar, vanilla bean, and white tea.',
    price: 1299,
    mrp: 1999,
    category: 'home',
    rating: 4.7,
    reviews: 640,
    popularity: 68,
  },
  {
    id: 'p18',
    name: 'Retinol Night Cream',
    description:
      'Encapsulated retinol with ceramides to support barrier health. Beginner-friendly concentration.',
    price: 1199,
    mrp: 1799,
    category: 'beauty',
    rating: 4.5,
    reviews: 4521,
    popularity: 83,
  },
  {
    id: 'p19',
    name: 'Mechanical Gaming Keyboard',
    description:
      'Hot-swappable switches, per-key RGB, and aluminium top plate. Includes sound-dampening foam.',
    price: 6999,
    mrp: 9999,
    category: 'electronics',
    rating: 4.8,
    reviews: 7722,
    popularity: 92,
  },
  {
    id: 'p20',
    name: 'Travel Backpack 28L',
    description:
      'Laptop compartment, clamshell opening, and weather-resistant fabric. Cabin-size friendly.',
    price: 2799,
    mrp: 4299,
    category: 'fashion',
    rating: 4.5,
    reviews: 3012,
    popularity: 80,
  },
  {
    id: 'p21',
    name: 'Air Fryer — 5.5L Digital',
    description:
      'Rapid air circulation for crispy results with less oil. 8 presets and dishwasher-safe basket.',
    price: 5499,
    mrp: 7999,
    category: 'home',
    rating: 4.4,
    reviews: 9102,
    popularity: 89,
  },
  {
    id: 'p22',
    name: 'Pickleball Paddle Set',
    description:
      'Graphite face with polymer core. Two paddles, three balls, and carry bag — ready to play.',
    price: 3499,
    mrp: 4999,
    category: 'sports',
    rating: 4.3,
    reviews: 512,
    popularity: 66,
  },
  {
    id: 'p23',
    name: 'Wireless Ergonomic Mouse',
    description:
      'Sculpted shape, silent clicks, and multi-device switching. Rechargeable with USB-C.',
    price: 1499,
    mrp: 2299,
    category: 'electronics',
    rating: 4.4,
    reviews: 6788,
    popularity: 84,
  },
  {
    id: 'p24',
    name: 'Linen Blend Shirt',
    description:
      'Relaxed fit, coconut buttons, and breathable weave. Ideal for warm-weather outings.',
    price: 1599,
    mrp: 2599,
    category: 'fashion',
    rating: 4.2,
    reviews: 1444,
    popularity: 73,
  },
]

/** Attach derived fields: discount %, image gallery */
export const PRODUCTS = baseProducts.map((p) => {
  const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100)
  const images = [
    productImage(`${p.id}-a`),
    productImage(`${p.id}-b`),
    productImage(`${p.id}-c`),
  ]
  return { ...p, discount, images }
})

/**
 * Find one product by id.
 * @param {string} id
 */
export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

/**
 * Related items: same category, excluding current id, limited count.
 */
export function getRelatedProducts(productId, limit = 4) {
  const current = getProductById(productId)
  if (!current) return []
  return PRODUCTS.filter(
    (p) => p.id !== productId && p.category === current.category,
  ).slice(0, limit)
}
