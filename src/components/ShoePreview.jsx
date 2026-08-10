// Technical line-art sneaker diagram. Every region is a real SVG path so
// colors update live with zero image assets — styled like a patent drawing.
export default function ShoePreview({ upperColor, soleColor, laceColor, accentColor, className = '' }) {
  const ink = '#17181C'

  return (
    <svg
      viewBox="0 0 640 340"
      className={className}
      role="img"
      aria-label="Live preview of customized shoe"
    >
      {/* sole / outsole */}
      <path
        d="M40 268 Q30 300 70 308 L560 308 Q600 308 604 278 L598 258 L100 250 Q60 246 40 268 Z"
        fill={soleColor}
        stroke={ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* midsole line */}
      <path
        d="M52 258 L596 240"
        fill="none"
        stroke={ink}
        strokeWidth="2"
        strokeDasharray="2 6"
        opacity="0.5"
      />
      {/* upper body */}
      <path
        d="M70 250 C60 190 90 120 170 96 C230 78 300 84 360 100 C430 118 470 108 520 128 C566 146 596 176 598 216 C598 232 590 244 570 248 L100 250 Q78 250 70 250 Z"
        fill={upperColor}
        stroke={ink}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* toe cap panel */}
      <path
        d="M70 250 C63 210 78 160 120 128 C104 168 100 210 108 246 Z"
        fill={ink}
        opacity="0.08"
      />
      {/* heel accent stripe */}
      <path
        d="M480 130 C540 148 580 178 588 214 L560 224 C550 190 520 160 468 140 Z"
        fill={accentColor}
        stroke={ink}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* lace panel base */}
      <path
        d="M230 96 C280 88 330 92 372 106 L344 176 C300 164 258 162 218 170 Z"
        fill="#00000012"
      />
      {/* laces */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1={240 + i * 30}
          y1={104 + i * 4}
          x2={270 + i * 32}
          y2={168 + i * 3}
          stroke={laceColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`b${i}`}
          x1={270 + i * 32}
          y1={104 + i * 4}
          x2={240 + i * 30}
          y2={168 + i * 3}
          stroke={laceColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
      ))}
      {/* eyelets */}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`e${i}`} cx={236 + i * 32} cy={100 + i * 4} r="4" fill={ink} />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`e2${i}`} cx={224 + i * 33} cy={170 + i * 3} r="4" fill={ink} />
      ))}
    </svg>
  )
}
