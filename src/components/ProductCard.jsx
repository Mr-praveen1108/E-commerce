import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import toast from 'react-hot-toast'
import StarRating from './StarRating'
import { formatPrice } from '../utils/formatPrice'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

/**
 * Reusable product card for grids (home sections + shop listing).
 */
export default function ProductCard({ product, className = '' }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const wish = isInWishlist(product.id)

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-900 ${className}`}
    >
      <Link to={`/shop/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.images[0]}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.discount > 0 ? (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-2.5 py-1 text-xs font-semibold text-white shadow">
            {product.discount}% OFF
          </span>
        ) : null}
        <button
          type="button"
          aria-label={wish ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-rose-500 shadow backdrop-blur transition hover:scale-110 dark:bg-slate-900/90"
          onClick={(e) => {
            e.preventDefault()
            toggleWishlist(product.id)
            toast.success(wish ? 'Removed from wishlist' : 'Saved to wishlist')
          }}
        >
          {wish ? <FaHeart /> : <FaRegHeart />}
        </button>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link
          to={`/shop/${product.id}`}
          className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold text-slate-900 transition hover:text-brand-600 dark:text-slate-100 dark:hover:text-brand-400"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <StarRating rating={product.rating} />
          <span>({product.reviews.toLocaleString('en-IN')})</span>
        </div>
        <div className="mt-auto flex flex-wrap items-end gap-2">
          <span className="text-lg font-bold text-slate-900 dark:text-white">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-slate-400 line-through">
            {formatPrice(product.mrp)}
          </span>
        </div>
        <button
          type="button"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 active:scale-[0.98]"
          onClick={() => {
            addToCart(product.id, 1)
            toast.success('Added to cart')
          }}
        >
          <FaShoppingCart className="text-base" />
          Add to Cart
        </button>
      </div>
    </article>
  )
}
