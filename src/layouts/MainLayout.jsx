import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

/** Shared chrome for public pages */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="flex-1 animate-fade-in-up">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
