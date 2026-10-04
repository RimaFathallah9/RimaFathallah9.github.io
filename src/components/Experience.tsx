import { experience } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

export function Experience() {
  return (
    <section id="experience" className="bg-[#07080b] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionMark index="05" label="Experience" tone="night" />
          <h2 className="mt-3 max-w-xl text-4xl font-light sm:text-5xl">
            Research, products, and the rooms where they were taught.
          </h2>
        </Reveal>

        <div className="relative mt-16 space-y-5">
          {experience.map((job, index) => (
            <Reveal key={`${job.place}-${job.time}`} delay={index * 0.04}>
              <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-light">{job.title}</h3>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">{job.type}</span>
                </div>
                <p className="mt-2 text-white/60">
                  {job.place}
                  <span className="mx-2 text-white/25">/</span>
                  {job.time}
                  <span className="mx-2 text-white/25">/</span>
                  {job.where}
                </p>
                <ul className="mt-4 space-y-2 text-white/75">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#efe7d2]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/75">
                      {tag}
                    </span>
                  ))}
                  {job.href && (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto text-sm text-[#efe7d2] underline-offset-4 hover:underline"
                    >
                      {job.linkLabel} ↗
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
