import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, subtotal, shipping, total, freeShippingThreshold } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <div className="font-mono-label text-xs uppercase text-ink-soft mb-3">Your cart</div>
        <h1 className="font-display text-3xl mb-6">Empty. Nothing built yet.</h1>
        <Link
          to="/shop"
          className="inline-block bg-ink text-paper px-6 py-3 font-mono-label text-xs uppercase tracking-wide hover:bg-[var(--color-signal)] transition-colors"
        >
          Start building
        </Link>
      </div>
    )
  }

  const remaining = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="font-mono-label text-xs uppercase text-ink-soft mb-2">CART</div>
      <h1 className="font-display text-3xl mb-8">Your build sheet</h1>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10">
        <div>
          {items.map((item) => (
            <CartItem key={item.key} item={item} />
          ))}
        </div>

        <div className="border border-line p-6 h-fit sticky top-24">
          <div className="font-mono-label text-xs uppercase text-ink-soft mb-4">Order summary</div>

          {remaining > 0 ? (
            <div className="text-xs text-ink-soft mb-4 font-mono-label">
              Add ${remaining.toFixed(2)} more for free shipping
            </div>
          ) : (
            <div className="text-xs text-[var(--color-signal)] mb-4 font-mono-label">
              You've unlocked free shipping
            </div>
          )}

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-ink-soft">Subtotal</span>
              <span className="font-mono-label">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-soft">Shipping</span>
              <span className="font-mono-label">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
          </div>
          <div className="flex justify-between border-t border-line mt-4 pt-4 font-display text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block text-center bg-ink text-paper py-3 font-mono-label text-xs uppercase tracking-wide hover:bg-[var(--color-signal)] transition-colors"
          >
            Checkout
          </Link>
          <Link
            to="/shop"
            className="mt-3 block text-center border border-line py-3 font-mono-label text-xs uppercase tracking-wide hover:border-ink transition-colors"
          >
            Keep building
          </Link>
        </div>
      </div>
    </div>
  )
}
