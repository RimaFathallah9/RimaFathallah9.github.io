import { aboutParagraphs, courses, education, skills } from '../data'
import { Reveal } from './Reveal'

export function About() {
  const loop = [...skills, ...skills]

  return (
    <section id="about" className="scroll-mt-24 bg-[#f3f0e8] text-[#16181d]">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">About me</p>
          <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            A developer focused on data science and the web.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#3c4038]">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Formal education</p>
          <ol className="mt-6 space-y-6 border-l border-[#d9d3c6] pl-6">
            {education.map((item) => (
              <li key={item.years} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#16181d]" />
                <p className="font-mono text-xs tracking-wider text-[#7a756c]">{item.years}</p>
                <p className="mt-1 text-xl font-medium">{item.title}</p>
                <p className="text-[#5c584f]">{item.school}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-2">
            {courses.map((course) => (
              <span key={course} className="rounded-full border border-[#d5cfc2] px-3 py-1 text-sm">
                {course}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="overflow-hidden border-y border-[#ddd6c8] py-6">
        <div className="marquee-track">
          {loop.map((skill, index) => (
            <span key={`${skill}-${index}`} className="mx-6 text-2xl font-light tracking-tight text-[#16181d] sm:text-4xl">
              {skill}
              <span className="mx-6 text-[#c8bba4]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
