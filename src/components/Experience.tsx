import { experience } from '../data'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-[#f3f0e8] px-6 py-24 text-[#16181d]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Experience</p>
          <h2 className="mt-3 max-w-xl text-4xl font-light sm:text-5xl">
            Nothing ever becomes real until it is experienced.
          </h2>
        </Reveal>

        <div className="relative mt-16 space-y-6">
          <div className="absolute bottom-4 left-[27px] top-4 hidden w-px bg-[#ddd6c8] md:block" />
          {experience.map((job, index) => (
            <Reveal key={job.title} delay={index * 0.05}>
              <article className="relative grid gap-6 rounded-[28px] border border-[#e4ddcf] bg-white/70 p-6 backdrop-blur md:grid-cols-[88px_1fr] md:p-8">
                <div className="relative z-10 h-16 w-16 overflow-hidden rounded-2xl bg-[#16181d] text-white">
                  {job.image ? (
                    <img src={job.image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <span className="flex h-full items-center justify-center text-lg">{job.place.slice(0, 1)}</span>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-medium">{job.title}</h3>
                    <span className="rounded-full bg-[#16181d] px-3 py-1 text-xs text-[#f3f0e8]">{job.type}</span>
                  </div>
                  <p className="mt-2 text-[#5c584f]">
                    {job.place}
                    <span className="mx-2 text-[#c8bba4]">/</span>
                    {job.time}
                  </p>
                  <ul className="mt-4 space-y-2 text-[#3c4038]">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#16181d]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
