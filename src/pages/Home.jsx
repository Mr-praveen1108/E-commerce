import { Link } from 'react-router-dom'
import { FaArrowRight, FaBolt, FaStar } from 'react-icons/fa'
import toast from 'react-hot-toast'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../utils/productsData'
import { CATEGORY_FILTERS } from '../utils/constants'

const trending = [...PRODUCTS].sort((a, b) => b.popularity - a.popularity).slice(0, 4)
const bestSelling = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 4)
const flashItems = [...PRODUCTS].sort((a, b) => b.discount - a.discount).slice(0, 3)

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Verified Buyer',
    text: 'Blazing fast checkout and beautiful product pages. Feels like shopping on a top Indian marketplace.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Tech Enthusiast',
    text: 'Great filters and sorting. Found exactly what I needed without endless scrolling.',
    rating: 5,
  },
  {
    name: 'Meera Iyer',
    role: 'Fashion shopper',
    text: 'Loved the wishlist and dark mode. The UI is polished and mobile friendly.',
    rating: 4,
  },
]

/**
 * Marketing homepage: hero, category shortcuts, curated product rows, flash deals, reviews, newsletter.
 */
export default function Home() {
  return (
    <div>
      {/* Hero — gradient banner + primary CTA */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl dark:bg-brand-500/10" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/10" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 dark:border-orange-900/50 dark:bg-orange-950/40 dark:text-orange-300">
              <FaBolt /> Mega Monsoon Sale
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Everything you love,
              <span className="block bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                one nest away.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
              Discover trending picks, member-only offers, and lightning deals — crafted with a premium e‑commerce experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:brightness-110 active:scale-[0.99]"
              >
                Shop Now
                <FaArrowRight />
              </Link>
              <Link
                to="/#featured-categories"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-8 py-3.5 text-base font-semibold text-slate-800 backdrop-blur transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Browse Categories
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-md sm:text-left">
              {[
                ['50K+', 'Happy customers'],
                ['4.8', 'Average rating'],
                ['24h', 'Express delivery'],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {v}
                  </dt>
                  <dd className="text-2xl font-bold text-slate-900 dark:text-white">{k}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:justify-self-end">
            <div className="aspect-square max-w-md overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-brand-500/10 via-white to-indigo-500/10 p-2 shadow-2xl dark:border-slate-700/60 dark:from-brand-500/5 dark:via-slate-900 dark:to-indigo-500/10">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                alt="Shopping bags and gifts"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured category tiles */}
      <section id="featured-categories" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured categories</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-400">Jump straight into what you are looking for.</p>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">
            View all products →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_FILTERS.filter((c) => c.value !== 'all').map((c) => (
            <Link
              key={c.value}
              to={`/shop?category=${c.value}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="absolute right-4 top-4 text-3xl text-slate-200 transition group-hover:scale-110 group-hover:text-brand-200 dark:text-slate-700">
                →
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{c.label}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Handpicked styles and essentials.</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="border-y border-slate-200/80 bg-white/60 py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Trending now</h2>
            <Link to="/shop?sort=popularity" className="text-sm font-semibold text-brand-600 dark:text-brand-400">
              See more
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Best selling products</h2>
          <Link to="/shop" className="text-sm font-semibold text-brand-600 dark:text-brand-400">
            Shop bestsellers
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSelling.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Flash sale cards */}
      <section id="flash-sale" className="bg-gradient-to-r from-orange-500 via-rose-500 to-fuchsia-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/90">Flash sale</p>
              <h2 className="mt-2 text-3xl font-extrabold">Grab before the timer hits zero</h2>
              <p className="mt-2 max-w-xl text-sm text-white/90">
                Limited inventory on top-rated products. Discounts already applied — no coupon hunting.
              </p>
            </div>
            <div className="flex gap-3 text-center text-sm font-bold">
              {['04h', '12m', '36s'].map((t) => (
                <div
                  key={t}
                  className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {flashItems.map((p) => (
              <div
                key={p.id}
                className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-xl dark:bg-slate-950 dark:text-slate-100"
              >
                <Link to={`/shop/${p.id}`} className="block aspect-[16/10] overflow-hidden">
                  <img src={p.images[0]} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </Link>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase text-orange-600">{p.discount}% off</p>
                  <Link to={`/shop/${p.id}`} className="mt-1 line-clamp-2 font-semibold hover:text-brand-600 dark:hover:text-brand-400">
                    {p.name}
                  </Link>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold">₹{p.price.toLocaleString('en-IN')}</span>
                    <Link
                      to={`/shop/${p.id}`}
                      className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-slate-900"
                    >
                      View deal
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Customers love ShopNest</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Real feedback from shoppers who value speed, clarity, and thoughtful design.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                {t.name}
                <span className="mt-0.5 block text-xs font-normal text-slate-500">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Join the nest list</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Get launch drops, curated edits, and exclusive offers — no spam, unsubscribe anytime.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              toast.success('Thanks for subscribing!')
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-inner outline-none ring-brand-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
            <button
              type="submit"
              className="rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
