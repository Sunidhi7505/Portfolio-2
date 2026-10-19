/**
 * Static portrait stand-in for the 3D avatar. Shown when WebGL is unavailable or the 3D scene fails to load,
 * so the hero keeps its composition and the rest of the site stays fully usable.
 */
export default function SceneFallback() {
  return (
    <div className="scene-fallback" aria-hidden="true">
      <img src={`${import.meta.env.BASE_URL}profile.png`} alt="" width="1024" height="1536" loading="lazy" />
    </div>
  )
}
