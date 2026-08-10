export default function PromoBanner() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="font-mono-label text-xs uppercase tracking-wide">
          Free shipping on builds over $150
        </span>
        <span className="hidden sm:inline text-line">/</span>
        <span className="font-mono-label text-xs uppercase tracking-wide">
          Every pair custom-built to order
        </span>
      </div>
    </section>
  )
}
