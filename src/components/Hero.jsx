import { Link } from 'react-router-dom'
import ShoePreview from './ShoePreview'

export default function Hero() {
  return (
    <section className="relative border-b border-line blueprint-grid overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="font-mono-label text-xs uppercase text-ink-soft mb-4">
            SPEC-01 / CUSTOM BUILD
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
            BUILT TO
            <br />
            YOUR SPEC.
          </h1>
          <p className="mt-6 text-ink-soft max-w-md text-base sm:text-lg">
            Pick the silhouette. Set the upper, sole and lace colors. Watch the
            build sheet update in real time — then send it to production.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-ink text-paper px-6 py-3 font-mono-label text-xs uppercase tracking-wide hover:bg-[var(--color-signal)] transition-colors duration-150"
            >
              Start building
            </Link>
            <Link
              to="/shop"
              className="border border-ink px-6 py-3 font-mono-label text-xs uppercase tracking-wide hover:bg-ink hover:text-paper transition-colors duration-150"
            >
              Browse catalogue
            </Link>
          </div>
        </div>

        <div className="relative bg-paper/60 border border-line p-6 sm:p-10">
          <div className="absolute top-3 left-3 font-mono-label text-[10px] text-ink-soft">FIG. 01</div>
          <div className="absolute top-3 right-3 font-mono-label text-[10px] text-ink-soft">SL-01-RN</div>
          <ShoePreview
            upperColor="#17181C"
            soleColor="#FF4D1C"
            laceColor="#F4F1EA"
            accentColor="#FF4D1C"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
