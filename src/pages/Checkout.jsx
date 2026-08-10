import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const FIELDS = [
  { name: 'fullName', label: 'Full name', type: 'text', span: 2 },
  { name: 'email', label: 'Email', type: 'email', span: 2 },
  { name: 'address', label: 'Address', type: 'text', span: 2 },
  { name: 'city', label: 'City', type: 'text', span: 1 },
  { name: 'zip', label: 'ZIP code', type: 'text', span: 1 },
  { name: 'cardNumber', label: 'Card number', type: 'text', span: 2 },
  { name: 'expiry', label: 'Expiry (MM/YY)', type: 'text', span: 1 },
  { name: 'cvc', label: 'CVC', type: 'text', span: 1 },
]

export default function Checkout() {
  const { items, subtotal, shipping, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({})
  const [submitting, setSubmitting] = useState(false)

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl mb-6">Nothing to check out</h1>
        <Link to="/shop" className="font-mono-label text-xs uppercase underline">
          Back to shop
        </Link>
      </div>
    )
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    // Mock payment processing — no backend, this is a demo store.
    setTimeout(() => {
      const orderId = 'SL-' + Math.random().toString(36).slice(2, 9).toUpperCase()
      clearCart()
      navigate('/order-success', { state: { orderId, total } })
    }, 900)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="font-mono-label text-xs uppercase text-ink-soft mb-2">CHECKOUT</div>
      <h1 className="font-display text-3xl mb-8">Complete your order</h1>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {FIELDS.map((f) => (
            <div key={f.name} className={f.span === 2 ? 'col-span-2' : 'col-span-2 sm:col-span-1'}>
              <label className="block font-mono-label text-xs uppercase text-ink-soft mb-1">
                {f.label}
              </label>
              <input
                required
                type={f.type}
                name={f.name}
                value={form[f.name] || ''}
                onChange={handleChange}
                className="w-full border border-line bg-paper px-3 py-3 focus:outline-none focus:border-ink"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={submitting}
            className="col-span-2 mt-4 bg-ink text-paper py-4 font-mono-label text-xs uppercase tracking-wide hover:bg-[var(--color-signal)] transition-colors disabled:opacity-60"
          >
            {submitting ? 'Processing…' : `Place order — $${total.toFixed(2)}`}
          </button>
          <p className="col-span-2 text-xs text-ink-soft text-center">
            Demo checkout — no payment is actually processed.
          </p>
        </form>

        <div className="border border-line p-6 h-fit">
          <div className="font-mono-label text-xs uppercase text-ink-soft mb-4">Order summary</div>
          <div className="space-y-3 mb-4 max-h-64 overflow-auto pr-1">
            {items.map((item) => (
              <div key={item.key} className="flex justify-between text-sm">
                <span className="text-ink-soft truncate pr-2">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-mono-label shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2 text-sm border-t border-line pt-4">
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
        </div>
      </div>
    </div>
  )
}
