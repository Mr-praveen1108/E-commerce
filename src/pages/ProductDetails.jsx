import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import toast from 'react-hot-toast'
import StarRating from '../components/StarRating'
import ProductCard from '../components/ProductCard'
import { getProductById, getRelatedProducts } from '../utils/productsData'
import { formatPrice } from '../utils/formatPrice'
import { useCart } from '../context/CartContext'

/**
 * Single product view: gallery, pricing, quantity, cart actions, related items.
 */
export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const [activeImage, setActiveImage] = useState(0)
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-brand-600 dark:text-brand-400">
          ← Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id)

  function handleAdd() {
    addToCart(product.id, qty)
    toast.success(`Added ${qty} item(s) to cart`)
  }

  function handleBuyNow() {
    addToCart(product.id, qty)
    navigate('/cart')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-brand-600 dark:hover:text-brand-400">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-brand-600 dark:hover:text-brand-400">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800 dark:text-slate-200">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
            <img
              src={product.images[activeImage]}
              alt=""
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`overflow-hidden rounded-xl border-2 transition ${
                  i === activeImage
                    ? 'border-brand-600 ring-2 ring-brand-500/30'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <img src={src} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-orange-600">
            {product.discount}% off · Limited time
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
            {product.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <StarRating rating={product.rating} size="md" />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {product.rating} · {product.reviews.toLocaleString('en-IN')} ratings
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-end gap-3">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            <span className="text-lg text-slate-400 line-through">
              {formatPrice(product.mrp)}
            </span>
            <span className="rounded-lg bg-green-100 px-2 py-1 text-sm font-semibold text-green-800 dark:bg-green-900/40 dark:text-green-300">
              You save {formatPrice(product.mrp - product.price)}
            </span>
          </div>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-400">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Quantity
            </span>
            <div className="inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => setQty((n) => Math.max(1, n - 1))}
                aria-label="Decrease quantity"
              >
                <FaMinus />
              </button>
              <span className="min-w-[3rem] text-center font-semibold">{qty}</span>
              <button
                type="button"
                className="px-3 py-2 text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => setQty((n) => Math.min(99, n + 1))}
                aria-label="Increase quantity"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleAdd}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-brand-600 bg-white px-6 py-3.5 font-semibold text-brand-700 transition hover:bg-brand-50 dark:bg-slate-900 dark:text-brand-300 dark:hover:bg-slate-800"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="font-bold text-slate-900 dark:text-white">Ratings & reviews</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Shoppers praise build quality and value. This demo uses static review counts — connect your API for live UGC.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ['Sturdy and exactly as described.', 'Priya K.'],
                ['Fast delivery, packaging was neat.', 'Arjun M.'],
              ].map(([text, author]) => (
                <li
                  key={author}
                  className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-950"
                >
                  <StarRating rating={5} />
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{text}</p>
                  <p className="mt-1 text-xs text-slate-500">— {author}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-20 border-t border-slate-200 pt-12 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}
