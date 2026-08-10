import { useCart } from '../context/CartContext'
import ShoePreview from './ShoePreview'
import { COLORS, SOLE_COLORS, LACE_COLORS, colorById } from '../data/products'

export default function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()
  const upper = colorById(COLORS, item.color)
  const sole = colorById(SOLE_COLORS, item.sole)
  const lace = colorById(LACE_COLORS, item.lace)

  return (
    <div className="flex gap-4 py-6 border-b border-line">
      <div className="w-28 h-24 sm:w-36 sm:h-28 bg-paper-dim shrink-0 p-2">
        <ShoePreview
          upperColor={upper.hex}
          soleColor={sole.hex}
          laceColor={lace.hex}
          accentColor={sole.hex}
          className="w-full h-full"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-2">
          <div>
            <div className="font-display text-base">{item.name}</div>
            <div className="font-mono-label text-[11px] text-ink-soft mt-1">
              SIZE {item.size} · {upper.name.toUpperCase()} UPPER · {sole.name.toUpperCase()} SOLE · {lace.name.toUpperCase()} LACES
            </div>
          </div>
          <div className="font-mono-label text-sm shrink-0">${(item.price * item.quantity).toFixed(2)}</div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-line">
            <button
              className="h-8 w-8 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
              onClick={() => updateQuantity(item.key, item.quantity - 1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center font-mono-label text-sm">{item.quantity}</span>
            <button
              className="h-8 w-8 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
              onClick={() => updateQuantity(item.key, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            className="font-mono-label text-xs uppercase text-ink-soft hover:text-[var(--color-signal)] transition-colors"
            onClick={() => removeFromCart(item.key)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
