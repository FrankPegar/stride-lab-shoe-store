import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'stridelab_cart_v1'
const SHIPPING_FLAT = 8
const FREE_SHIPPING_THRESHOLD = 150

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

// A cart line is uniquely identified by product id + all customization choices.
function lineKey(item) {
  return [item.productId, item.size, item.color, item.sole, item.lace].join('|')
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage unavailable — fail silently, cart just won't persist
    }
  }, [items])

  function addToCart(newItem) {
    setItems((prev) => {
      const key = lineKey(newItem)
      const existing = prev.find((i) => lineKey(i) === key)
      if (existing) {
        return prev.map((i) =>
          lineKey(i) === key ? { ...i, quantity: i.quantity + newItem.quantity } : i
        )
      }
      return [...prev, { ...newItem, key }]
    })
  }

  function removeFromCart(key) {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  function updateQuantity(key, quantity) {
    if (quantity < 1) return
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, quantity } : i)))
  }

  function clearCart() {
    setItems([])
  }

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  )
  const shipping = items.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT
  const total = subtotal + shipping
  const itemCount = useMemo(() => items.reduce((n, i) => n + i.quantity, 0), [items])

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    shipping,
    total,
    itemCount,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
