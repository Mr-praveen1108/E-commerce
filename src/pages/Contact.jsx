import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import toast from 'react-hot-toast'

const inputClass =
  'mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-brand-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100'

/** Contact page: form, map embed, contact info */
export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    toast.success('Message sent — we will reply within 24 hours.')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Contact us</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Questions, partnerships, or support — we are here to help.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="contact-email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="contact-message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            Send message
          </button>
        </form>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 className="font-bold text-slate-900 dark:text-white">Contact information</h2>
            <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-brand-600" />
                42 Commerce Park, Bengaluru, Karnataka 560001
              </li>
              <li className="flex gap-3">
                <FaPhone className="mt-0.5 shrink-0 text-brand-600" />
                +91 80 1234 5678
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="mt-0.5 shrink-0 text-brand-600" />
                hello@shopnest.demo
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:text-brand-600 dark:border-slate-700 dark:bg-slate-950 dark:hover:text-brand-400"
                  aria-label="Social link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
            <iframe
              title="ShopNest office on Google Maps"
              className="h-64 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0136748699996!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}
