import { Link, useLocation, Navigate } from 'react-router-dom'

export default function OrderSuccess() {
  const { state } = useLocation()

  if (!state?.orderId) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <div className="border border-ink p-10 sm:p-14 relative blueprint-grid">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-signal)] text-white font-mono-label text-xs uppercase px-4 py-1">
          Approved
        </div>
        <h1 className="font-display text-3xl sm:text-4xl mb-4 mt-2">Build confirmed.</h1>
        <p className="text-ink-soft mb-6">
          Order <span className="font-mono-label text-ink">{state.orderId}</span> has been sent
          to production. You'll get a shipping confirmation by email.
        </p>
        <p className="font-display text-2xl mb-8">${state.total?.toFixed(2)}</p>
        <Link
          to="/shop"
          className="inline-block bg-ink text-paper px-6 py-3 font-mono-label text-xs uppercase tracking-wide hover:bg-[var(--color-signal)] transition-colors"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  )
}
