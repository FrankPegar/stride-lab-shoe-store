// Sample product catalogue — no backend, static mock data.

export const COLORS = [
  { id: 'black', name: 'Black', hex: '#17181C' },
  { id: 'white', name: 'White', hex: '#F4F1EA' },
  { id: 'red', name: 'Red', hex: '#E63946' },
  { id: 'blue', name: 'Blue', hex: '#2B5A8C' },
  { id: 'green', name: 'Green', hex: '#4C6B4F' },
]

export const SOLE_COLORS = [
  { id: 'white', name: 'White', hex: '#F4F1EA' },
  { id: 'black', name: 'Black', hex: '#17181C' },
  { id: 'signal', name: 'Signal Orange', hex: '#FF4D1C' },
  { id: 'grey', name: 'Grey', hex: '#9C978D' },
]

export const LACE_COLORS = [
  { id: 'white', name: 'White', hex: '#F4F1EA' },
  { id: 'black', name: 'Black', hex: '#17181C' },
  { id: 'red', name: 'Red', hex: '#E63946' },
  { id: 'signal', name: 'Signal Orange', hex: '#FF4D1C' },
]

export const SIZES = [6, 7, 8, 9, 10, 11, 12]

export const CATEGORIES = ['Running', 'Basketball', 'Lifestyle', 'Trail']

export const PRODUCTS = [
  {
    id: 'sl-01',
    sku: 'SL-01-RN',
    name: 'Vector Runner',
    category: 'Running',
    price: 129,
    description:
      'A lightweight daily trainer built on a responsive foam midsole. Engineered mesh upper keeps things breathable across long miles.',
    tag: 'Best Seller',
    defaultColor: 'black',
    defaultSole: 'white',
    defaultLace: 'white',
  },
  {
    id: 'sl-02',
    sku: 'SL-02-BB',
    name: 'Apex Court',
    category: 'Basketball',
    price: 159,
    description:
      'High-top silhouette with reinforced ankle support and a grippy herringbone outsole for hard cuts on the hardwood.',
    tag: 'New',
    defaultColor: 'red',
    defaultSole: 'black',
    defaultLace: 'black',
  },
  {
    id: 'sl-03',
    sku: 'SL-03-LS',
    name: 'Drift Low',
    category: 'Lifestyle',
    price: 99,
    description:
      'A clean, low-profile everyday sneaker. Minimal paneling, maximum versatility — pairs with anything.',
    tag: null,
    defaultColor: 'white',
    defaultSole: 'signal',
    defaultLace: 'white',
  },
  {
    id: 'sl-04',
    sku: 'SL-04-TR',
    name: 'Ridge Trail',
    category: 'Trail',
    price: 149,
    description:
      'Aggressive lug outsole and a protective toe cap built for loose terrain and long descents.',
    tag: null,
    defaultColor: 'green',
    defaultSole: 'grey',
    defaultLace: 'black',
  },
  {
    id: 'sl-05',
    sku: 'SL-05-RN',
    name: 'Pulse Speed',
    category: 'Running',
    price: 139,
    description:
      'Race-day silhouette with a carbon-infused plate for propulsive energy return on tempo runs.',
    tag: 'Limited',
    defaultColor: 'blue',
    defaultSole: 'signal',
    defaultLace: 'white',
  },
  {
    id: 'sl-06',
    sku: 'SL-06-LS',
    name: 'Harbor Slip',
    category: 'Lifestyle',
    price: 89,
    description:
      'Slip-free comfort with a sock-like knit collar. Built for coffee runs, not marathons.',
    tag: null,
    defaultColor: 'black',
    defaultSole: 'white',
    defaultLace: 'signal',
  },
]

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id)
}

export function colorById(list, id) {
  return list.find((c) => c.id === id) || list[0]
}
