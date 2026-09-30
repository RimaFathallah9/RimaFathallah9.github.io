type SectionMarkProps = {
  index: string
  label: string
  tone?: 'night' | 'cream'
}

export function SectionMark({ index, label, tone = 'cream' }: SectionMarkProps) {
  const ink = tone === 'night' ? 'text-[#efe7d2]' : 'text-[#16181d]'
  const mute = tone === 'night' ? 'text-white/40' : 'text-[#7a756c]'

  return (
    <p className={`font-mono text-[11px] uppercase tracking-[0.28em] ${mute}`}>
      <span className={ink}>{index}</span>
      <span className="mx-2.5">/</span>
      {label}
    </p>
  )
}
