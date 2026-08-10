import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=Running', label: 'Running' },
  { to: '/shop?category=Basketball', label: 'Basketball' },
  { to: '/shop?category=Lifestyle', label: 'Lifestyle' },
]

export default function Navbar() {
  const { itemCount } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-tight flex items-center gap-2">
          <span className="h-2.5 w-2.5 bg-[var(--color-signal)] inline-block" />
          STRIDE LAB
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="font-mono-label text-xs uppercase tracking-wide text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            className="relative flex items-center gap-2 border border-ink px-3 py-2 hover:bg-ink hover:text-paper transition-colors duration-150"
          >
            <span className="font-mono-label text-xs uppercase">Cart</span>
            {itemCount > 0 && (
              <span className="flex items-center justify-center h-5 w-5 text-[10px] rounded-full bg-[var(--color-signal)] text-white font-mono-label">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden font-mono-label text-xs uppercase border border-ink px-3 py-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-4 py-4 flex flex-col gap-4 bg-paper">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-mono-label text-xs uppercase tracking-wide text-ink-soft"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
