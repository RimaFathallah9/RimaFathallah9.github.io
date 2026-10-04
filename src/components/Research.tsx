import { studies } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

const fields = ['question', 'why', 'methods'] as const

const fieldLabels = {
  question: 'Question',
  why: 'Why it matters',
  methods: 'Methods',
}

export function Research() {
  return (
    <section id="research" className="bg-[#07080b] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionMark index="02" label="Research" tone="night" />
          <h2 className="mt-3 max-w-2xl text-4xl font-light sm:text-5xl">Two studies, two stages.</h2>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            The current study is pediatric cerebral palsy, in design with two university hospitals. The Concordia
            internship is completed machine learning work.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {studies.map((study, index) => (
            <Reveal key={study.partner} delay={index * 0.08}>
              <article
                className={`flex h-full flex-col border bg-white/[0.03] p-7 sm:p-8 ${
                  study.focus ? 'border-[#8fd0b0]/70' : 'border-white/10'
                }`}
              >
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
                <dl className="mt-6 space-y-5 border-t border-white/10 pt-5">
                  {fields.map((field) => (
                    <div key={field}>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
                        {fieldLabels[field]}
                      </dt>
                      <dd className="mt-2 leading-relaxed text-white/70">{study[field]}</dd>
                    </div>
                  ))}
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
                      {study.resultLabel}
                    </dt>
                    <dd className="mt-2 leading-relaxed text-white/70">{study.result}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
