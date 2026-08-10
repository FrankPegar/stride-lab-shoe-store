export default function SizeSelector({ sizes, value, onChange }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono-label text-xs uppercase text-ink-soft">Size (US)</span>
        {value && <span className="font-mono-label text-xs text-ink-soft">US {value}</span>}
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={value === s}
            onClick={() => onChange(s)}
            className={`h-11 min-w-11 px-3 border rounded-md font-mono-label text-sm transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)] ${
              value === s
                ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)]'
                : 'bg-transparent border-[var(--color-line)] text-ink hover:border-[var(--color-ink)]'
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
