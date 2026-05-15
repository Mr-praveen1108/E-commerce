import { FaAward, FaRocket, FaUsers, FaHeart } from 'react-icons/fa'

const stats = [
  { label: 'Products listed', value: '10K+' },
  { label: 'Cities served', value: '120+' },
  { label: 'Customer rating', value: '4.8/5' },
  { label: 'Support response', value: '< 2h' },
]

const team = [
  { name: 'Aisha Khan', role: 'CEO & Co-founder', img: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Vikram Patel', role: 'Head of Product', img: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Sneha Reddy', role: 'Design Lead', img: 'https://i.pravatar.cc/150?img=9' },
  { name: 'Karan Mehta', role: 'Engineering', img: 'https://i.pravatar.cc/150?img=15' },
]

const reasons = [
  { Icon: FaRocket, title: 'Fast delivery', text: 'Express slots in major metros with live tracking.' },
  { Icon: FaAward, title: 'Quality assured', text: 'Curated sellers and strict quality checks on every category.' },
  { Icon: FaUsers, title: 'People first', text: 'Support that listens — refunds and returns made simple.' },
  { Icon: FaHeart, title: 'Fair pricing', text: 'Transparent discounts without hidden fees at checkout.' },
]

/** About page: story, mission, team, stats */
export default function About() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-br from-brand-600/10 via-white to-indigo-600/10 py-16 dark:border-slate-800 dark:from-brand-500/5 dark:via-slate-950 dark:to-indigo-500/5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">About ShopNest</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            We are building India&apos;s most delightful online marketplace — where discovery feels effortless and every order earns trust.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our mission</h2>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Empower every household to shop smarter with honest pricing, inclusive design, and technology that respects your time.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Our vision</h2>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              A world where local artisans and global brands share one trusted platform — sustainable, accessible, and always customer-centric.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Why choose us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon className="text-2xl text-brand-600 dark:text-brand-400" />
                <h3 className="mt-4 font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Meet the team</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.img}
                alt=""
                className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-brand-100 dark:ring-brand-900"
              />
              <p className="mt-4 font-bold text-slate-900 dark:text-white">{m.name}</p>
              <p className="text-sm text-slate-500">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-r from-brand-600 to-indigo-600 py-14 text-white dark:border-slate-800">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm text-white/85">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
