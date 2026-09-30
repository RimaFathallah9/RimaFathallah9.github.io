import { studies } from '../data'
import { Reveal } from './Reveal'

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 bg-[#07080b] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">Research</p>
          <h2 className="mt-3 max-w-xl text-4xl font-light sm:text-5xl">Two studies, two stages.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {studies.map((study, index) => (
            <Reveal key={study.partner} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      study.status === 'Completed'
                        ? 'bg-[#efe7d2] text-[#16181d]'
                        : 'border border-white/20 text-white/70'
                    }`}
                  >
                    {study.status}
                  </span>
                  <p className="font-mono text-xs tracking-wider text-white/40">{study.time}</p>
                </div>
                <p className="mt-6 font-serif text-4xl italic text-[#efe7d2]">{study.partner}</p>
                <p className="mt-2 text-sm text-white/50">
                  {study.program}
                  <span className="mx-2 text-white/25">/</span>
                  {study.place}
                </p>
                <h3 className="mt-5 text-2xl font-light leading-snug">{study.title}</h3>
                <p className="mt-4 leading-relaxed text-white/65">{study.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
