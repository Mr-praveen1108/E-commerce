import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SkeletonProductCard from '../components/SkeletonProductCard'
import Pagination from '../components/Pagination'
import { PRODUCTS } from '../utils/productsData'
import { CATEGORY_FILTERS, SORT_OPTIONS } from '../utils/constants'
import { usePagination } from '../hooks/usePagination'

const PER_PAGE = 8

/**
 * Product listing with category/price filters, search, sort, pagination, and skeleton loading.
 */
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)

  const category = searchParams.get('category') || 'all'
  const sort = searchParams.get('sort') || 'popularity'
  const search = (searchParams.get('search') || '').trim().toLowerCase()

  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  // Simulated network latency — swap for real fetch + Suspense in production
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 650)
    return () => clearTimeout(t)
  }, [category, sort, search, minPrice, maxPrice])

  const filtered = useMemo(() => {
    let list = [...PRODUCTS]
    if (category && category !== 'all') {
      list = list.filter((p) => p.category === category)
    }
    if (search) {
      list = list.filter((p) => p.name.toLowerCase().includes(search))
    }
    const min = minPrice === '' ? null : Number(minPrice)
    const max = maxPrice === '' ? null : Number(maxPrice)
    if (min != null && !Number.isNaN(min)) list = list.filter((p) => p.price >= min)
    if (max != null && !Number.isNaN(max)) list = list.filter((p) => p.price <= max)

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else list.sort((a, b) => b.popularity - a.popularity)

    return list
  }, [category, sort, search, minPrice, maxPrice])

  const { page, setPage, totalPages, slice, resetPage } = usePagination(
    filtered,
    PER_PAGE,
  )

  useEffect(() => {
    resetPage()
  }, [category, sort, search, minPrice, maxPrice, resetPage])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 border-b border-slate-200 pb-8 dark:border-slate-800">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Shop</h1>
        <p className="text-slate-600 dark:text-slate-400">
          {filtered.length} products
          {search ? (
            <span>
              {' '}
              matching “<span className="font-semibold text-slate-900 dark:text-slate-200">{search}</span>”
            </span>
          ) : null}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        {/* Filters sidebar */}
        <aside className="w-full shrink-0 space-y-6 lg:w-64">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Category
            </h2>
            <div className="mt-3 flex flex-col gap-1">
              {CATEGORY_FILTERS.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => {
                    const next = new URLSearchParams(searchParams)
                    if (c.value === 'all') next.delete('category')
                    else next.set('category', c.value)
                    setSearchParams(next)
                  }}
                  className={`rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                    category === c.value
                      ? 'bg-brand-600 text-white shadow'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Price (₹)
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <input
                type="number"
                min={0}
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
              <input
                type="number"
                min={0}
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              Sort by
              <select
                value={sort}
                onChange={(e) => {
                  const next = new URLSearchParams(searchParams)
                  const v = e.target.value
                  if (v === 'popularity') next.delete('sort')
                  else next.set('sort', v)
                  setSearchParams(next)
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {loading ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: PER_PAGE }).map((_, i) => (
                <SkeletonProductCard key={i} />
              ))}
            </div>
          ) : slice.length === 0 ? (
            <p className="mt-16 text-center text-slate-600 dark:text-slate-400">
              No products match your filters. Try clearing price range or choosing another category.
            </p>
          ) : (
            <>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {slice.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
              <Pagination
                className="mt-12"
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
