import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes'

/** Root app: providers, router, global toast notifications */
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
            <ScrollToTop />
            <AppRoutes />
            <Toaster
              position="bottom-right"
              toastOptions={{
                className:
                  'text-sm font-medium !bg-slate-900 !text-white dark:!bg-slate-100 dark:!text-slate-900',
                duration: 2800,
              }}
            />
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
