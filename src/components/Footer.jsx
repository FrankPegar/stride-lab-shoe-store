import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="font-display text-lg mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 bg-[var(--color-signal)] inline-block" />
            STRIDE LAB
          </div>
          <p className="text-sm text-ink-soft max-w-xs">
            Built to spec, not off the shelf. Choose every panel, every lace,
            every sole — then we make it.
          </p>
        </div>
        <div>
          <div className="font-mono-label text-xs uppercase text-ink-soft mb-3">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-[var(--color-signal)]">All shoes</Link></li>
            <li><Link to="/shop?category=Running" className="hover:text-[var(--color-signal)]">Running</Link></li>
            <li><Link to="/shop?category=Basketball" className="hover:text-[var(--color-signal)]">Basketball</Link></li>
            <li><Link to="/shop?category=Lifestyle" className="hover:text-[var(--color-signal)]">Lifestyle</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-mono-label text-xs uppercase text-ink-soft mb-3">Support</div>
          <ul className="space-y-2 text-sm">
            <li>Shipping &amp; returns</li>
            <li>Size guide</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="font-mono-label text-xs text-ink-soft">© {new Date().getFullYear()} STRIDE LAB — DEMO STORE</span>
        <span className="font-mono-label text-xs text-ink-soft">NO BACKEND · MOCK DATA · LOCAL CART</span>
      </div>
    </footer>
  )
}
