# STRIDE LAB — Custom Shoe E-Commerce Site

A modern, responsive shoe e-commerce site with live product customization,
built with React, Vite, Tailwind CSS v4, and React Router. No backend —
all product data is mocked and the cart persists via `localStorage`.

## Design concept

"Build sheet" aesthetic — a technical spec-sheet / patent-drawing look.
The live shoe preview is a hand-built SVG line drawing (not a photo) whose
regions (upper, sole, laces, heel accent) recolor instantly as customers
change swatches — so there are zero image assets to manage and the preview
always matches selections exactly.

## Features

- **Home** — hero, promo banner, featured builds, category grid, process steps
- **Shop** (`/shop`) — category filter, price slider, sort, query-param driven
- **Product details** (`/product/:id`) — live-updating SVG preview, upper /
  sole / lace color pickers, size selector (US 6–12), quantity stepper,
  sticky mobile add-to-cart bar
- **Cart** (`/cart`) — per-line customization summary, quantity controls,
  remove line, free-shipping progress, subtotal/shipping/total
- **Checkout** (`/checkout`) — shipping + mock payment form, order summary
- **Order success** (`/order-success`) — confirmation with generated order ID
- Cart persists across reloads via `localStorage`
- Fully responsive (mobile / tablet / desktop)

## Screenshots

![alt text](<Screenshot 2026-08-12 at 2.49.47 PM.png>)
![alt text](<Screenshot 2026-08-12 at 2.49.26 PM.png>)
![alt text](<Screenshot 2026-08-12 at 2.48.55 PM.png>)
![alt text](<Screenshot 2026-08-12 at 2.48.27 PM.png>)

## Project structure

```
src/
  components/   Navbar, Footer, Hero, PromoBanner, ProductCard,
                ColorSelector, SizeSelector, CartItem, ShoePreview
  pages/        Home, ProductListing, ProductDetails, Cart, Checkout,
                OrderSuccess
  context/      CartContext.jsx (cart state + localStorage)
  data/         products.js (mock catalogue, colors, sizes)
  index.css     Tailwind v4 import + design tokens (fonts, colors)
```

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Notes

- Tailwind CSS v4 is wired in via `@tailwindcss/vite` (see `vite.config.js`)
  and theme tokens in `src/index.css` — no separate `tailwind.config.js`
  is needed with v4's CSS-first config.
- Swap `src/data/products.js` for a real API/CMS whenever you're ready to
  connect a backend — every component reads from that single source.
