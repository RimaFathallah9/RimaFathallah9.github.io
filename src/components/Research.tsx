import { studies } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

export function Research() {
  return (
    <section id="research" className="bg-[#07080b] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionMark index="02" label="Research" tone="night" />
          <h2 className="mt-3 max-w-xl text-4xl font-light sm:text-5xl">Two studies, two stages.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {studies.map((study, index) => (
            <Reveal key={study.partner} delay={index * 0.08}>
              <article className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#efe7d2]">
                    Study {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">{study.status}</p>
                </div>
                <p className="mt-6 font-serif text-4xl italic text-[#efe7d2]">{study.partner}</p>
                <p className="mt-2 text-sm text-white/50">
                  {study.program}
                  <span className="mx-2 text-white/25">/</span>
                  {study.place}
                </p>
                <p className="mt-3 font-mono text-xs tracking-wider text-white/40">{study.time}</p>
                <h3 className="mt-6 text-2xl font-light leading-snug">{study.title}</h3>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">Abstract</p>
                  <p className="mt-3 leading-relaxed text-white/65">{study.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
