import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PromoBanner from '../components/PromoBanner'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

export default function Home() {
  const featured = PRODUCTS.slice(0, 4)

  return (
    <div>
      <Hero />
      <PromoBanner />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="font-mono-label text-xs uppercase text-ink-soft mb-2">SPEC-02 / FEATURED</div>
            <h2 className="font-display text-2xl sm:text-3xl">Featured builds</h2>
          </div>
          <Link to="/shop" className="font-mono-label text-xs uppercase hover:text-[var(--color-signal)] hidden sm:block">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-dim">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="font-mono-label text-xs uppercase text-ink-soft mb-2">SPEC-03 / CATEGORIES</div>
          <h2 className="font-display text-2xl sm:text-3xl mb-8">Shop by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c}
                to={`/shop?category=${c}`}
                className="group border border-line bg-paper hover:border-ink transition-colors p-6 flex flex-col justify-between h-36"
              >
                <span className="font-mono-label text-xs text-ink-soft">0{i + 1}</span>
                <span className="font-display text-lg group-hover:text-[var(--color-signal)] transition-colors">
                  {c}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="font-mono-label text-xs uppercase text-ink-soft mb-3">SPEC-04 / PROCESS</div>
        <h2 className="font-display text-2xl sm:text-3xl mb-10">From build sheet to box</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            ['01', 'Choose your base', 'Pick a silhouette across running, basketball, lifestyle or trail.'],
            ['02', 'Set the spec', 'Dial in upper, sole and lace colors with a live build preview.'],
            ['03', 'We build it', 'Your pair is assembled to spec and shipped to your door.'],
          ].map(([num, title, body]) => (
            <div key={num} className="border-t-2 border-ink pt-4">
              <div className="font-mono-label text-xs text-[var(--color-signal)] mb-2">{num}</div>
              <div className="font-display text-lg mb-2">{title}</div>
              <p className="text-sm text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
