import { Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa'

const footerCols = [
  {
    title: 'Get to Know Us',
    links: [
      { label: 'About ShopNest', to: '/about' },
      { label: 'Careers', to: '/about' },
      { label: 'Press', to: '/about' },
    ],
  },
  {
    title: 'Let Us Help You',
    links: [
      { label: 'Your Account', to: '/login' },
      { label: 'Returns Centre', to: '/contact' },
      { label: 'Help', to: '/contact' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'Categories', to: '/#featured-categories' },
      { label: 'Offers', to: '/#flash-sale' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Shop<span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">Nest</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Curated products, trusted delivery, and a delightful shopping experience — built as a modern demo storefront.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: FaFacebookF, label: 'Facebook' },
                { Icon: FaInstagram, label: 'Instagram' },
                { Icon: FaTwitter, label: 'Twitter' },
                { Icon: FaYoutube, label: 'YouTube' },
                { Icon: FaGithub, label: 'GitHub' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 dark:text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-slate-200 pt-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
          © {new Date().getFullYear()} ShopNest Demo. All rights reserved. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  )
}
