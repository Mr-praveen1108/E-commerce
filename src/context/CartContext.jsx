import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getProductById } from '../utils/productsData'

const CartContext = createContext(null)

const STORAGE_KEY = 'shopnest-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/**
 * Cart line: { productId, quantity }
 * Product snapshot resolved at render time from catalog.
 */
export function CartProvider({ children }) {
  const [lines, setLines] = useState(() =>
    typeof window === 'undefined' ? [] : loadCart(),
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  const addToCart = useCallback((productId, qty = 1) => {
    setLines((prev) => {
      const idx = prev.findIndex((l) => l.productId === productId)
      if (idx === -1) return [...prev, { productId, quantity: qty }]
      const next = [...prev]
      next[idx] = {
        ...next[idx],
        quantity: Math.min(99, next[idx].quantity + qty),
      }
      return next
    })
  }, [])

  const setQuantity = useCallback((productId, quantity) => {
    setLines((prev) => {
      if (quantity < 1) return prev.filter((l) => l.productId !== productId)
      return prev.map((l) =>
        l.productId === productId ? { ...l, quantity } : l,
      )
    })
  }, [])

  const removeLine = useCallback((productId) => {
    setLines((prev) => prev.filter((l) => l.productId !== productId))
  }, [])

  const clearCart = useCallback(() => setLines([]), [])

  const items = useMemo(
    () =>
      lines
        .map((l) => {
          const product = getProductById(l.productId)
          if (!product) return null
          return { product, quantity: l.quantity }
        })
        .filter(Boolean),
    [lines],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, row) => sum + row.product.price * row.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      lines,
      items,
      subtotal,
      addToCart,
      setQuantity,
      removeLine,
      clearCart,
    }),
    [lines, items, subtotal, addToCart, setQuantity, removeLine, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
