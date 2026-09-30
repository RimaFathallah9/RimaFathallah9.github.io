import { awards, volunteering } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

export function Community() {
  return (
    <section id="leadership" className="bg-[#f3f0e8] px-6 py-24 text-[#16181d]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionMark index="05" label="Leadership" />
          <h2 className="mt-3 text-4xl font-light sm:text-5xl">Volunteering and awards</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {volunteering.map((role, index) => (
            <Reveal key={role.place} delay={(index % 2) * 0.05}>
              <article className="h-full rounded-[24px] border border-[#e4ddcf] bg-white/70 p-6">
                <p className="font-mono text-xs tracking-wider text-[#7a756c]">{role.time}</p>
                <h3 className="mt-3 text-2xl font-medium">{role.title}</h3>
                <p className="mt-1 text-[#5c584f]">{role.place}</p>
                <p className="mt-4 leading-relaxed text-[#3c4038]">{role.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {awards.map((award) => (
            <Reveal key={award.title}>
              <article className="rounded-[24px] bg-[#16181d] p-6 text-[#f3f0e8]">
                <p className="font-mono text-xs tracking-wider text-white/45">{award.date}</p>
                <h3 className="mt-3 font-serif text-3xl italic">{award.title}</h3>
                <p className="mt-2 text-white/60">{award.by}</p>
                <p className="mt-4 text-white/80">{award.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
