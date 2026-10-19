import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently crossing a horizontal "reading line"
 * (~35% from the top of the viewport). Uses IntersectionObserver — no scroll listeners.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const visible = new Map()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting))
        const current = ids.find((id) => visible.get(id))
        if (current) setActive(current)
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  return active
}
