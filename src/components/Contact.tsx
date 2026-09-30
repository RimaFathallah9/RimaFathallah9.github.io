import { profile } from '../data'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#f3f0e8] px-6 py-24 text-[#16181d]">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Contact</p>
          <h2 className="mt-4 max-w-3xl text-5xl font-light leading-tight sm:text-7xl">
            Let&apos;s build the next thing.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[#5c584f]">
            {profile.location}. Reach me through any of the places I already share work.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-[#ddd6c8] border-y border-[#ddd6c8]">
          {profile.socials.map((social, index) => (
            <Reveal key={social.label} delay={index * 0.04}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6 text-2xl font-light transition hover:pl-3 sm:text-4xl"
              >
                <span>{social.label}</span>
                <span className="text-[#9a9184] transition group-hover:translate-x-1 group-hover:text-[#16181d]">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
