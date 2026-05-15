import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

/**
 * Numbered pagination controls.
 */
export default function Pagination({
  page,
  totalPages,
  onPageChange,
  className = '',
}) {
  if (totalPages <= 1) return null

  const pages = []
  const windowSize = 5
  let start = Math.max(1, page - 2)
  let end = Math.min(totalPages, start + windowSize - 1)
  if (end - start < windowSize - 1) start = Math.max(1, end - windowSize + 1)
  for (let i = start; i <= end; i += 1) pages.push(i)

  return (
    <nav
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        aria-label="Previous page"
      >
        <FaChevronLeft />
      </button>
      {pages.map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onPageChange(n)}
          className={`h-10 min-w-10 rounded-xl px-3 text-sm font-semibold transition ${
            n === page
              ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow'
              : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
          }`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        aria-label="Next page"
      >
        <FaChevronRight />
      </button>
    </nav>
  )
}
