import { sectionTones, useActiveSection, type SectionId } from '../hooks/useActiveSection'

const chapters: { id: SectionId; label: string }[] = [
  { id: 'intro', label: 'Signal' },
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'papers', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'contact', label: 'Contact' },
]

export function SignalRail({ visible }: { visible: boolean }) {
  const section = useActiveSection(visible)
  const cream = sectionTones[section] === 'cream'
  const label = chapters.find((chapter) => chapter.id === section)?.label ?? 'Signal'

  if (!visible) return null

  return (
    <div
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 min-[1360px]:block"
      aria-hidden
    >
      <div className="flex items-center gap-2">
        <p
          className={`origin-center font-mono text-[10px] uppercase tracking-[0.42em] [writing-mode:vertical-rl] ${
            cream ? 'text-[#16181d]/55' : 'text-[#efe7d2]/70'
          }`}
        >
          {label}
        </p>
        <ol className="flex h-52 flex-col justify-between">
          {chapters.map((chapter) => {
            const active = chapter.id === section
            return (
              <li key={chapter.id} className="flex justify-end">
                <span
                  className={`block h-px transition-all duration-500 ${
                    active ? 'w-5' : 'w-1.5'
                  } ${cream ? 'bg-[#16181d]' : 'bg-[#efe7d2]'} ${active ? 'opacity-100' : 'opacity-35'}`}
                />
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
