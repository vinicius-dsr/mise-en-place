import { useEffect, useState } from 'react'
import type { SectionId } from '@/App'

export function useScrollSpy(ids: readonly SectionId[]) {
  const [activeId, setActiveId] = useState<SectionId | null>(ids[0] ?? null)

  useEffect(() => {
    const sections = ids
      .map((id) => {
        const el = document.getElementById(id)
        return el ? { id, el } : null
      })
      .filter((entry): entry is { id: SectionId; el: HTMLElement } => Boolean(entry))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop)

        if (visible[0]) {
          const id = visible[0].target.id as SectionId
          setActiveId(id)
        }
      },
      {
        threshold: 0.4,
      },
    )

    sections.forEach(({ el }) => observer.observe(el))

    return () => observer.disconnect()
  }, [ids])

  return activeId
}

