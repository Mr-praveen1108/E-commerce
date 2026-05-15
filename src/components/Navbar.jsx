import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
  FaMoon,
  FaSun,
} from 'react-icons/fa'
import { NAV_LINKS } from '../utils/constants'
import { useTheme } from '../context/ThemeContext'
import { useCart } from '../context/CartContext'

const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-brand-600/10 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300'
      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
  }`

/**
 * Sticky top navigation: logo, search, links, cart count, theme toggle, mobile drawer.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const { toggleTheme, isDark } = useTheme()
  const { items } = useCart()
  const cartCount = items.reduce((n, row) => n + row.quantity, 0)

  function onSearchSubmit(e) {
    e.preventDefault()
    const query = q.trim()
    navigate(query ? `/shop?search=${encodeURIComponent(query)}` : '/shop')
    setOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <button
            type="button"
            className="inline-flex rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <FaBars className="text-xl" />
          </button>

          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Shop<span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">Nest</span>
            </span>
          </Link>

          <form
            onSubmit={onSearchSubmit}
            className="hidden min-w-0 flex-1 md:flex md:max-w-xl lg:max-w-2xl"
          >
            <div className="flex w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-inner dark:border-slate-700 dark:bg-slate-900">
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search for products, brands and more"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-brand-600 to-indigo-600 px-5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                <FaSearch />
                Search
              </button>
            </div>
          </form>

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            {NAV_LINKS.filter((l) => l.label !== 'Cart').map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/cart" className={linkClass}>
              <span className="inline-flex items-center gap-2">
                Cart
                {cartCount > 0 ? (
                  <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                ) : null}
              </span>
            </NavLink>
            <Link
              to="/login"
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Sign up
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-amber-300 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-lg border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-amber-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
            <Link
              to="/cart"
              className="relative rounded-lg border border-slate-200 p-2 dark:border-slate-700"
              aria-label="Cart"
            >
              <FaShoppingCart className="text-lg text-slate-800 dark:text-slate-100" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              ) : null}
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-100 px-4 pb-3 md:hidden dark:border-slate-800">
          <form onSubmit={onSearchSubmit} className="mt-3 flex overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none dark:text-slate-100"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-brand-600 to-indigo-600 px-4 text-white"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </header>

      {/* Mobile slide-over */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-white shadow-2xl transition-transform dark:bg-slate-950 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
            <span className="font-bold text-slate-900 dark:text-white">Menu</span>
            <button
              type="button"
              className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {l.label}
                {l.label === 'Cart' && cartCount > 0 ? (
                  <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white">
                    {cartCount}
                  </span>
                ) : null}
              </NavLink>
            ))}
            <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-200 py-3 text-center text-sm font-semibold dark:border-slate-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 py-3 text-center text-sm font-semibold text-white"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </>
  )
}
