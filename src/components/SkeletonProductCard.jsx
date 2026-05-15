/**
 * Placeholder grid card while products are “loading”.
 */
export default function SkeletonProductCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-slate-700/80 dark:bg-slate-900">
      <div className="skeleton-shimmer aspect-[4/5] bg-slate-200 dark:bg-slate-800" />
      <div className="space-y-3 p-4">
        <div className="skeleton-shimmer h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="skeleton-shimmer h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="skeleton-shimmer h-10 w-full rounded-xl bg-slate-200 dark:bg-slate-800" />
      </div>
    </div>
  )
}
