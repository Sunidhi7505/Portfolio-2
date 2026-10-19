import { memo } from 'react'
import { BRAND, GLYPH, GLYPH_COLOR, luminance, readableBrandColor } from '../../utils/icons'
import { useTheme } from '../../hooks/useTheme'

/**
 * Renders an official brand mark (simple-icons) or a neutral glyph when no official logo exists.
 * Decorative by default — pair with a visible text label.
 */
function TechIcon({ name, size = 22, colored = true, monogram, official = false }) {
  const { theme } = useTheme()
  const brand = BRAND[name]
  if (brand) {
    const color = official ? (theme === 'dark' && luminance(brand.hex) < 0.05 ? '#ffffff' : `#${brand.hex}`) : colored ? readableBrandColor(name, theme) : null
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill={color || 'currentColor'}>
        <path d={brand.path} />
      </svg>
    )
  }
  const Glyph = GLYPH[name]
  if (Glyph) return <Glyph size={size} aria-hidden="true" strokeWidth={1.6} color={official ? GLYPH_COLOR[name] : undefined} />
  // Neutral monogram tile (used for Codolio — no official logo is bundled).
  return (
    <span className="mono-tile" style={{ width: size, height: size, fontSize: size * 0.58 }} aria-hidden="true">
      {monogram || '•'}
    </span>
  )
}
export default memo(TechIcon)
