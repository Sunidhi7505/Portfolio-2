import { lazy, Suspense, useState } from 'react'
import ClassicApp from './ClassicApp'
import { usePrefersReducedMotion } from './hooks/useMediaQuery'
import { hasWebGL, isLowPowerDevice } from './utils/webgl'

const CaveExperience = lazy(() => import('./cave/CaveExperience'))

/**
 * Which presentation to start in.
 *  - `?view=classic|cave` forces one (handy for testing).
 *  - No WebGL, or reduced-motion preference → the classic (flat) portfolio, with an opt-in to enter the cave.
 */
function initialView() {
  const q = new URLSearchParams(window.location.search)
  const forced = q.get('view')
  if (forced === 'classic') return 'classic'
  if (!hasWebGL()) return 'classic'
  if (forced === 'cave') return 'cave'
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'classic'
  return 'cave'
}
const quality = () => {
  const forced = new URLSearchParams(window.location.search).get('quality')
  if (forced === 'lite' || forced === 'full') return forced
  return isLowPowerDevice() ? 'lite' : 'full'
}

export default function App() {
  const [view, setView] = useState(initialView)
  const [q] = useState(quality)
  const reduced = usePrefersReducedMotion()
  const canCave = hasWebGL()

  if (view === 'cave') {
    return (
      <Suspense fallback={<div className="cave-boot" role="status">Lighting the torches…</div>}>
        <CaveExperience quality={q} reduced={reduced} onExit={() => { window.scrollTo(0, 0); setView('classic') }} />
      </Suspense>
    )
  }
  return <ClassicApp onEnterCave={canCave ? () => { window.scrollTo(0, 0); setView('cave') } : null} />
}
