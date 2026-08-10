import { Link } from 'react-router-dom'
import ShoePreview from './ShoePreview'
import { COLORS, SOLE_COLORS, LACE_COLORS, colorById } from '../data/products'

export default function ProductCard({ product }) {
  const upper = colorById(COLORS, product.defaultColor)
  const sole = colorById(SOLE_COLORS, product.defaultSole)
  const lace = colorById(LACE_COLORS, product.defaultLace)

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block border border-line hover:border-ink transition-colors duration-200"
    >
      <div className="relative bg-paper-dim aspect-[4/3] overflow-hidden">
        <div className="absolute top-3 left-3 font-mono-label text-[10px] text-ink-soft z-10">
          {product.sku}
        </div>
        {product.tag && (
          <div className="absolute top-3 right-3 z-10 bg-[var(--color-signal)] text-white text-[10px] font-mono-label px-2 py-1 uppercase">
            {product.tag}
          </div>
        )}
        <div className="w-full h-full p-6 transition-transform duration-300 group-hover:scale-105">
          <ShoePreview
            upperColor={upper.hex}
            soleColor={sole.hex}
            laceColor={lace.hex}
            accentColor={sole.hex}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="p-4 flex items-start justify-between gap-2">
        <div>
          <div className="font-mono-label text-[10px] uppercase text-ink-soft mb-1">
            {product.category}
          </div>
          <div className="font-display text-base leading-tight">{product.name}</div>
        </div>
        <div className="font-mono-label text-sm shrink-0">${product.price}</div>
      </div>
    </Link>
  )
}
