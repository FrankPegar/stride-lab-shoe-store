import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name', label: 'Name A–Z' },
]

export default function ProductListing() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(200)

  function setCategory(cat) {
    if (cat === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.price <= maxPrice)
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory)
    }
    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'name':
        return [...list].sort((a, b) => a.name.localeCompare(b.name))
      default:
        return list
    }
  }, [activeCategory, sort, maxPrice])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="font-mono-label text-xs uppercase text-ink-soft mb-2">CATALOGUE</div>
        <h1 className="font-display text-3xl sm:text-4xl">
          {activeCategory === 'All' ? 'All shoes' : activeCategory}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        <aside className="space-y-8">
          <div>
            <div className="font-mono-label text-xs uppercase text-ink-soft mb-3">Category</div>
            <div className="flex flex-col gap-2">
              {['All', ...CATEGORIES].map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-left font-mono-label text-xs uppercase py-1 border-l-2 pl-3 transition-colors ${
                    activeCategory === c
                      ? 'border-[var(--color-signal)] text-ink'
                      : 'border-transparent text-ink-soft hover:text-ink'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono-label text-xs uppercase text-ink-soft mb-3">
              Max price: ${maxPrice}
            </div>
            <input
              type="range"
              min="80"
              max="200"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[var(--color-signal)]"
            />
          </div>

          <div>
            <div className="font-mono-label text-xs uppercase text-ink-soft mb-3">Sort by</div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full border border-line bg-paper px-3 py-2 font-mono-label text-xs"
            >
              {SORTS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>
        </aside>

        <div>
          <div className="font-mono-label text-xs text-ink-soft mb-4">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </div>
          {filtered.length === 0 ? (
            <div className="border border-line p-10 text-center font-mono-label text-sm text-ink-soft">
              No shoes match these filters. Try raising the max price.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
