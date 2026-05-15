import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls window to top on every client-side navigation */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
