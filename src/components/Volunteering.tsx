import { congresses, ieeeMentoring, volunteering } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

export function Volunteering() {
  return (
    <div className="bg-[#f3f0e8] text-[#16181d]">
      <section className="bg-[#07080b] px-6 pb-16 pt-32 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/45">IEEE</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-light sm:text-7xl">IEEE.</h1>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            Mentoring sessions, student-branch roles, and the congresses I attended.
          </p>
        </div>
      </section>

      <section id="mentoring" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionMark index="01" label="Mentoring" />
            <h2 className="mt-3 max-w-2xl text-4xl font-light sm:text-5xl">Mentoring.</h2>
            <p className="mt-4 max-w-2xl text-lg text-[#3c4038]">
              Separate IEEE sessions in AI, NLP, and explainable AI.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {ieeeMentoring.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full border border-[#e4ddcf] bg-white/70 p-6">
                  <p className="font-mono text-xs tracking-wider text-[#7a756c]">IEEE mentor</p>
                  <h3 className="mt-3 text-2xl font-medium">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#3c4038]">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteering" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionMark index="02" label="Volunteering" />
            <h2 className="mt-3 max-w-2xl text-4xl font-light sm:text-5xl">Volunteering.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {volunteering.map((role, index) => (
              <Reveal key={role.place} delay={(index % 2) * 0.05}>
                <article className="h-full border border-[#e4ddcf] bg-white/70 p-6">
                  <p className="font-mono text-xs tracking-wider text-[#7a756c]">{role.time}</p>
                  <h3 className="mt-3 text-2xl font-medium">{role.title}</h3>
                  <p className="mt-1 text-[#5c584f]">{role.place}</p>
                  <p className="mt-4 leading-relaxed text-[#3c4038]">{role.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="congresses" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionMark index="03" label="Congresses" />
            <h2 className="mt-3 max-w-2xl text-4xl font-light sm:text-5xl">Congresses.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {congresses.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="flex h-full flex-col border border-[#e4ddcf] bg-white/70">
                  <div className="relative aspect-[16/10] bg-[#e7e1d4]">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-xs tracking-wider text-[#7a756c]">{item.date}</p>
                    <h4 className="mt-2 text-xl font-medium">{item.title}</h4>
                    <p className="mt-3 leading-relaxed text-[#3c4038]">{item.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
