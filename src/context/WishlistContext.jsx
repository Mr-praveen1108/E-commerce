import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const WishlistContext = createContext(null)

const STORAGE_KEY = 'shopnest-wishlist'

function loadIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/** Wishlist stores product ids for simplicity and small payload. */
export function WishlistProvider({ children }) {
  const [ids, setIds] = useState(() =>
    typeof window === 'undefined' ? [] : loadIds(),
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  }, [ids])

  const toggleWishlist = useCallback((productId) => {
    setIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    )
  }, [])

  const isInWishlist = useCallback(
    (productId) => ids.includes(productId),
    [ids],
  )

  const value = useMemo(
    () => ({ ids, toggleWishlist, isInWishlist }),
    [ids, toggleWishlist, isInWishlist],
  )

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}
