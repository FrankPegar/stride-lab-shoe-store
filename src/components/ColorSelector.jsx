export default function ColorSelector({ label, options, value, onChange }) {
  const selected = options.find((o) => o.id === value)
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono-label text-xs uppercase text-ink-soft">{label}</span>
        <span className="font-mono-label text-xs text-ink-soft">{selected?.name}</span>
      </div>
      <div className="flex gap-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            aria-label={opt.name}
            aria-pressed={value === opt.id}
            onClick={() => onChange(opt.id)}
            className={`relative h-10 w-10 rounded-full border-2 transition-transform duration-150 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-signal)] ${
              value === opt.id ? 'border-[var(--color-ink)] scale-110' : 'border-[var(--color-line)]'
            }`}
            style={{ backgroundColor: opt.hex }}
          >
            {value === opt.id && (
              <span className="absolute inset-0 rounded-full ring-2 ring-offset-2 ring-[var(--color-ink)]" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
