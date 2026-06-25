import { Link, Outlet } from 'react-router-dom'

/** Minimal layout for login and signup — no shop navigation. */
export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <header className="px-4 py-6 sm:px-6">
        <Link to="/login" className="inline-flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Shop<span className="bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent">Nest</span>
          </span>
        </Link>
      </header>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  )
}
