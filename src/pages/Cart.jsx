import { Link } from 'react-router-dom'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { formatPrice } from '../utils/formatPrice'
import { useCart } from '../context/CartContext'

/** Shopping cart: line items, quantity controls, totals, checkout CTA */
export default function Cart() {
  const { items, subtotal, setQuantity, removeLine } = useCart()
  const shipping = subtotal > 0 ? (subtotal >= 999 ? 0 : 49) : 0
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Your cart is empty</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Add products from the shop to see them here.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg"
        >
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Shopping cart</h1>
      <p className="mt-1 text-slate-600 dark:text-slate-400">{items.length} unique items</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <ul className="space-y-4 lg:col-span-2">
          {items.map(({ product, quantity }) => (
            <li
              key={product.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900"
            >
              <Link to={`/shop/${product.id}`} className="shrink-0">
                <img
                  src={product.images[0]}
                  alt=""
                  className="h-28 w-28 rounded-xl object-cover"
                />
              </Link>
              <div className="min-w-0 flex-1">
                <Link
                  to={`/shop/${product.id}`}
                  className="font-semibold text-slate-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
                >
                  {product.name}
                </Link>
                <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
                  {formatPrice(product.price)}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-700">
                    <button
                      type="button"
                      className="px-3 py-2"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      aria-label="Decrease"
                    >
                      <FaMinus />
                    </button>
                    <span className="min-w-[2.5rem] text-center font-semibold">{quantity}</span>
                    <button
                      type="button"
                      className="px-3 py-2"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      aria-label="Increase"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-medium text-rose-600 hover:underline"
                    onClick={() => {
                      removeLine(product.id)
                      toast.success('Item removed')
                    }}
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-lg font-bold text-slate-900 dark:text-white sm:text-right">
                {formatPrice(product.price * quantity)}
              </p>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Order summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-600 dark:text-slate-400">Subtotal</dt>
              <dd className="font-semibold">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-600 dark:text-slate-400">Shipping</dt>
              <dd className="font-semibold">
                {shipping === 0 ? 'FREE' : formatPrice(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3 text-base dark:border-slate-700">
              <dt className="font-bold text-slate-900 dark:text-white">Total</dt>
              <dd className="font-bold text-slate-900 dark:text-white">{formatPrice(total)}</dd>
            </div>
          </dl>
          <button
            type="button"
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-110"
            onClick={() => toast.success('Checkout demo — connect payment gateway')}
          >
            Proceed to checkout
          </button>
          <Link
            to="/shop"
            className="mt-4 block text-center text-sm font-semibold text-brand-600 dark:text-brand-400"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
