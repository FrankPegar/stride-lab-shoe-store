import { useMemo, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ShoePreview from '../components/ShoePreview'
import ColorSelector from '../components/ColorSelector'
import SizeSelector from '../components/SizeSelector'
import { useCart } from '../context/CartContext'
import {
  getProductById,
  COLORS,
  SOLE_COLORS,
  LACE_COLORS,
  SIZES,
  colorById,
} from '../data/products'

export default function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = getProductById(id)

  const [color, setColor] = useState(product?.defaultColor)
  const [sole, setSole] = useState(product?.defaultSole)
  const [lace, setLace] = useState(product?.defaultLace)
  const [size, setSize] = useState(9)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const upper = useMemo(() => colorById(COLORS, color), [color])
  const soleColor = useMemo(() => colorById(SOLE_COLORS, sole), [sole])
  const laceColor = useMemo(() => colorById(LACE_COLORS, lace), [lace])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-2xl mb-4">Shoe not found</h1>
        <Link to="/shop" className="font-mono-label text-xs uppercase underline">
          Back to catalogue
        </Link>
      </div>
    )
  }

  function handleAddToCart() {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      size,
      color,
      sole,
      lace,
      quantity,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 pb-28 md:pb-10">
      <div className="font-mono-label text-xs text-ink-soft mb-6">
        <Link to="/shop" className="hover:text-ink">Shop</Link> / {product.category} / {product.name}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Live preview */}
        <div className="relative bg-paper-dim border border-line p-8 sm:p-12 blueprint-grid self-start">
          <div className="absolute top-3 left-3 font-mono-label text-[10px] text-ink-soft">
            {product.sku}
          </div>
          <div className="absolute top-3 right-3 font-mono-label text-[10px] text-ink-soft">
            LIVE PREVIEW
          </div>
          <ShoePreview
            upperColor={upper.hex}
            soleColor={soleColor.hex}
            laceColor={laceColor.hex}
            accentColor={soleColor.hex}
            className="w-full h-auto"
          />
        </div>

        {/* Build sheet */}
        <div>
          {product.tag && (
            <span className="inline-block bg-[var(--color-signal)] text-white text-[10px] font-mono-label px-2 py-1 uppercase mb-4">
              {product.tag}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl mb-2">{product.name}</h1>
          <p className="font-mono-label text-sm text-ink-soft mb-4">{product.category}</p>
          <p className="text-2xl font-display mb-6">${product.price}</p>
          <p className="text-ink-soft mb-8 max-w-md">{product.description}</p>

          <div className="space-y-6 border-t border-line pt-6">
            <ColorSelector label="Upper color" options={COLORS} value={color} onChange={setColor} />
            <ColorSelector label="Sole color" options={SOLE_COLORS} value={sole} onChange={setSole} />
            <ColorSelector label="Lace color" options={LACE_COLORS} value={lace} onChange={setLace} />
            <SizeSelector sizes={SIZES} value={size} onChange={setSize} />

            <div>
              <div className="font-mono-label text-xs uppercase text-ink-soft mb-2">Quantity</div>
              <div className="flex items-center border border-line w-fit">
                <button
                  className="h-10 w-10 hover:bg-ink hover:text-paper transition-colors"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-12 text-center font-mono-label text-sm">{quantity}</span>
                <button
                  className="h-10 w-10 hover:bg-ink hover:text-paper transition-colors"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Desktop add to cart */}
          <div className="hidden md:flex items-center gap-4 mt-10">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-ink text-paper py-4 font-mono-label text-xs uppercase tracking-wide hover:bg-[var(--color-signal)] transition-colors duration-150"
            >
              {added ? 'Added ✓' : `Add to cart — $${(product.price * quantity).toFixed(2)}`}
            </button>
            <button
              onClick={() => {
                handleAddToCart()
                navigate('/cart')
              }}
              className="flex-1 border border-ink py-4 font-mono-label text-xs uppercase tracking-wide hover:bg-ink hover:text-paper transition-colors duration-150"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/* Sticky mobile add-to-cart bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-paper border-t border-line p-4 flex items-center gap-3">
        <div className="font-mono-label text-sm shrink-0">${(product.price * quantity).toFixed(2)}</div>
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-ink text-paper py-3 font-mono-label text-xs uppercase tracking-wide"
        >
          {added ? 'Added ✓' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}
