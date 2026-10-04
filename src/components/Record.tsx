import { outputs, profile, updates } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

export function Record() {
  return (
    <section id="papers" className="bg-[#f3f0e8] px-6 py-24 text-[#16181d]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionMark index="03" label="Work" />
          <h2 className="mt-3 max-w-2xl text-4xl font-light sm:text-5xl">Research in progress.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#3c4038]">
            I&apos;m early in my research career. Here is what I&apos;m working on, and what is already finished.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {outputs.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="flex h-full flex-col border border-[#e4ddcf] bg-white/70 p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#7a756c]">{item.label}</p>
                <h3 className="mt-3 text-2xl font-light">{item.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-[#3c4038]">{item.detail}</p>
                {item.link ? (
                  <a
                    href={item.href}
                    className="mt-5 text-sm underline decoration-[#c8bba4] underline-offset-4"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.link}
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#7a756c]">Milestones</p>
            <ol className="mt-6 space-y-5">
              {updates.map((item) => (
                <li key={item.date} className="border-t border-[#e4ddcf] pt-5">
                  <p className="font-mono text-xs tracking-wider text-[#7a756c]">{item.date}</p>
                  <p className="mt-2 leading-relaxed text-[#3c4038]">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#7a756c]">Code</p>
            <h3 className="mt-3 text-3xl font-light">Public repositories.</h3>
            <p className="mt-4 leading-relaxed text-[#3c4038]">
              NEXOVA, the energy platform, is on GitHub. The rest of the public code is on the same profile.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/RimaFathallah9/NEXOVA-Web-R8"
                className="inline-flex rounded-full border border-[#16181d] px-5 py-3 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                NEXOVA
              </a>
              <a
                href={profile.socials.find((item) => item.label === 'GitHub')?.href}
                className="inline-flex rounded-full border border-[#e4ddcf] px-5 py-3 text-sm"
                target="_blank"
                rel="noreferrer"
              >
                GitHub profile
              </a>
              <a href={profile.cv} download className="inline-flex rounded-full px-5 py-3 text-sm underline decoration-[#c8bba4] underline-offset-4">
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
