import { profile } from '../data'
import { Reveal } from './Reveal'
import { SectionMark } from './SectionMark'

export function Contact() {
  return (
    <section id="contact" className="bg-[#07080b] px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionMark index="07" label="Contact" tone="night" />
          <h2 className="mt-4 max-w-3xl text-5xl font-light leading-tight sm:text-7xl">
            Open to a research collaboration.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/60">
            {profile.affiliation}, {profile.location}. {profile.status}. Email is the direct way to write. No lab street
            address is listed.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {profile.socials.map((social, index) => (
            <Reveal key={social.label} delay={index * 0.04}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center justify-between py-6 text-2xl font-light transition hover:pl-3 sm:text-4xl"
              >
                <span>
                  {social.label}
                  {social.label === 'Email' && (
                    <span className="mt-1 block text-base text-white/45 sm:text-lg">{profile.email}</span>
                  )}
                  {social.label === 'Phone' && (
                    <span className="mt-1 block text-base text-white/45 sm:text-lg">{profile.phone}</span>
                  )}
                </span>
                <span className="text-white/35 transition group-hover:translate-x-1 group-hover:text-white">↗</span>
              </a>
            </Reveal>
          ))}
        </div>

        <a
          href={profile.cv}
          download
          className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#f3f0e8]"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}
