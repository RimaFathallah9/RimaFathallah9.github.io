import { teaching } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

export function Community() {
  return (
    <section id="teaching" className="bg-[#f3f0e8] px-6 py-24 text-[#16181d]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionMark index="06" label="Teaching" />
          <h2 className="mt-3 max-w-2xl text-4xl font-light sm:text-5xl">Teaching.</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#3c4038]">
            Classroom teaching at Go My Code, and separate IEEE mentoring sessions in AI, NLP, and explainable AI.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {teaching.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="h-full border border-[#e4ddcf] bg-white/70 p-6">
                <p className="font-mono text-xs tracking-wider text-[#7a756c]">{item.time}</p>
                <h3 className="mt-3 text-2xl font-medium">{item.title}</h3>
                <p className="mt-1 text-[#5c584f]">
                  {item.place}
                  {item.where ? (
                    <>
                      <span className="mx-2 text-[#c8bba4]">/</span>
                      {item.where}
                    </>
                  ) : null}
                </p>
                <ul className="mt-4 space-y-2 leading-relaxed text-[#3c4038]">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 border-t border-[#e4ddcf] pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#7a756c]">Certification</span>
          <span className="mt-2 block text-lg">French · DELF B2</span>
        </p>
      </div>
    </section>
  )
}
