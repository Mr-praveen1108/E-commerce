import { useCallback, useEffect, useMemo, useState } from 'react'

/**
 * Client-side pagination for filtered product lists.
 * @param {unknown[]} items
 * @param {number} perPage
 */
export function usePagination(items, perPage = 8) {
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(items.length / perPage))

  // If filters shrink the list, stay on a valid page
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages))
  }, [totalPages])

  const slice = useMemo(() => {
    const start = (page - 1) * perPage
    return items.slice(start, start + perPage)
  }, [items, page, perPage])

  const goToPage = useCallback(
    (n) => {
      setPage(Math.min(Math.max(1, n), totalPages))
    },
    [totalPages],
  )

  const next = useCallback(() => {
    setPage((p) => Math.min(p + 1, totalPages))
  }, [totalPages])

  const prev = useCallback(() => {
    setPage((p) => Math.max(p - 1, 1))
  }, [])

  /** Call when underlying items/filters change so we start from page 1 */
  const resetPage = useCallback(() => setPage(1), [])

  return {
    page,
    setPage: goToPage,
    totalPages,
    slice,
    next,
    prev,
    resetPage,
  }
}
