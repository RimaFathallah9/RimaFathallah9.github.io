import { answers, certificates, education, languages, profile, skillGroups, skills } from '../data'
import { Reveal } from './Reveal'

export function About() {
  const loop = [...skills, ...skills]

  return (
    <section id="about" className="scroll-mt-24 bg-[#f3f0e8] text-[#16181d]">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">About me</p>
          <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            AI-driven systems, built to be used.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#3c4038]">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {languages.map((language) => (
              <div key={language.name} className="rounded-2xl border border-[#e4ddcf] bg-white/60 px-4 py-3">
                <p className="font-medium">{language.name}</p>
                <p className="text-sm text-[#7a756c]">{language.level}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Education</p>
          <ol className="mt-6 space-y-6 border-l border-[#d9d3c6] pl-6">
            {education.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#16181d]" />
                <p className="font-mono text-xs tracking-wider text-[#7a756c]">{item.years}</p>
                <p className="mt-1 text-xl font-medium">{item.title}</p>
                <p className="text-[#5c584f]">{item.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#5c584f]">{item.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Certificates</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#e4ddcf] bg-white/70 p-5">
                <h3 className="text-lg font-medium leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-[#7a756c]">{item.issuer}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden border-y border-[#ddd6c8] py-6">
        <div className="marquee-track">
          {loop.map((skill, index) => (
            <span key={`${skill}-${index}`} className="mx-6 text-2xl font-light tracking-tight sm:text-4xl">
              {skill}
              <span className="mx-6 text-[#c8bba4]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Toolkit</p>
          <h3 className="mt-3 max-w-xl text-3xl font-light tracking-tight sm:text-4xl">
            The stack behind the systems.
          </h3>
        </Reveal>
        <div className="mt-10 grid items-start gap-4 md:grid-cols-2 xl:grid-cols-6">
          {skillGroups.map((group, index) => (
            <article
              key={group.label}
              className={`rounded-[24px] border border-[#e4ddcf] bg-white/75 p-6 ${
                index < 3 ? 'xl:col-span-2' : 'xl:col-span-3'
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="text-xs uppercase tracking-[0.22em] text-[#7a756c]">{group.label}</h4>
                <span className="font-mono text-xs text-[#b3aa9b]">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#e4ddcf] bg-[#f7f4ec] px-3 py-1.5 text-sm text-[#2c2f36]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div id="faq" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Questions</p>
          <h3 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">Straight answers.</h3>
        </Reveal>
        <dl className="mt-8 divide-y divide-[#e4ddcf] border-y border-[#e4ddcf]">
          {answers.map((item) => (
            <div key={item.question} className="grid gap-3 py-6 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10">
              <dt className="text-lg font-medium">{item.question}</dt>
              <dd className="leading-relaxed text-[#3c4038]">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
