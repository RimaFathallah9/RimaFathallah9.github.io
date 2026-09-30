import { useEffect, useState } from 'react'

export const sectionTones = {
  intro: 'night',
  home: 'night',
  about: 'cream',
  research: 'night',
  projects: 'cream',
  experience: 'night',
  leadership: 'cream',
  contact: 'night',
} as const

export type SectionId = keyof typeof sectionTones

const sectionOrder = Object.keys(sectionTones) as SectionId[]

function sectionAtMark() {
  const mark = 88
  let current: SectionId = 'intro'
  for (const id of sectionOrder) {
    const el = document.getElementById(id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    if (rect.top <= mark && rect.bottom > mark) current = id
  }
  return current
}

export function useActiveSection(enabled: boolean) {
  const [section, setSection] = useState<SectionId>('intro')

  useEffect(() => {
    if (!enabled) return
    let frame = 0
    const update = () => {
      frame = 0
      const next = sectionAtMark()
      setSection((current) => (current === next ? current : next))
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [enabled])

  return section
}
