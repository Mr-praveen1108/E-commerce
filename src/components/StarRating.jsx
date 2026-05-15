import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

/**
 * Visual star rating (read-only).
 * @param {{ rating: number; size?: 'sm' | 'md' }} props
 */
export default function StarRating({ rating, size = 'sm' }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5
  const empty = 5 - full - (hasHalf ? 1 : 0)
  const iconClass =
    size === 'md' ? 'text-amber-400 text-lg' : 'text-amber-400 text-sm'

  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <FaStar key={`f-${i}`} className={iconClass} aria-hidden />
      ))}
      {hasHalf ? <FaStarHalfAlt className={iconClass} aria-hidden /> : null}
      {Array.from({ length: empty }).map((_, i) => (
        <FaRegStar key={`e-${i}`} className={iconClass} aria-hidden />
      ))}
    </span>
  )
}
