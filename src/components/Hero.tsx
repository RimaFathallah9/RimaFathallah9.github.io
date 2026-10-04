import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile } from '../data'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const section = root.current
    if (!section) return

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('[data-word]')
      const weights = gsap.utils.toArray<HTMLElement>('[data-weight]')
      gsap.set(words.slice(1), { autoAlpha: 0, y: 24 })
      gsap.set(weights, { scaleX: 0.2, opacity: 0.35, transformOrigin: 'left center' })
      if (weights[0]) gsap.set(weights[0], { scaleX: 1, opacity: 1 })

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        },
      })

      words.forEach((word, index) => {
        if (index === words.length - 1) return
        timeline.to(word, { autoAlpha: 0, y: -24, duration: 0.45 })
        timeline.fromTo(
          words[index + 1],
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.45 },
          '<0.12',
        )
        if (weights[index] && weights[index + 1]) {
          timeline.to(weights[index], { scaleX: 0.2, opacity: 0.35, duration: 0.45 }, '<')
          timeline.to(weights[index + 1], { scaleX: 1, opacity: 1, duration: 0.45 }, '<')
        }
        timeline.to({}, { duration: 0.25 })
      })

      timeline.to('[data-portrait]', { scale: 1.06, y: -24, duration: 1 }, 0)
    }, section)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section id="home" ref={root} className={reduced ? 'bg-[#07080b]' : 'relative bg-[#07080b] lg:h-[340vh]'}>
      <div
        className={
          reduced
            ? 'px-6 py-28'
            : 'flex min-h-screen items-center px-6 py-28 lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden lg:py-24'
        }
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.28em]">
              <p className="text-[#efe7d2]">{profile.role}</p>
              <span className="text-white/25">/</span>
              <p className="text-white/50">{profile.field}</p>
              <span className="text-white/25">/</span>
              <p className="text-white/50">{profile.location}</p>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">{profile.affiliation}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {profile.status}
            </p>
            <h1 className="mt-6 text-5xl font-light tracking-tight text-white sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/60">{profile.tagline}</p>

            <div className="relative mt-6 h-16">
              {reduced ? (
                <p className="font-serif text-4xl italic text-[#efe7d2] sm:text-5xl">{profile.words[0]}.</p>
              ) : (
                profile.words.map((word, index) => (
                  <p
                    key={word}
                    data-word
                    className={`font-serif text-4xl italic text-[#efe7d2] sm:text-5xl ${
                      index === 0 ? '' : 'absolute left-0 top-0'
                    }`}
                  >
                    {word}.
                  </p>
                ))
              )}
            </div>

            <div className="mt-4 flex items-center gap-4" aria-hidden>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/40">Attention</p>
              <div className="flex items-center gap-1.5">
                {profile.words.map((word, index) => (
                  <span
                    key={word}
                    data-weight
                    className={`block h-px w-8 origin-left bg-[#efe7d2] ${
                      index === 0 ? '' : 'scale-x-[0.2] opacity-35'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#research"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-[#f3f0e8]"
              >
                View research
              </a>
              <a
                href={profile.cv}
                download
                className="rounded-full border border-white/20 px-5 py-3 text-sm text-white transition hover:bg-white/10"
              >
                Download CV
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {profile.stats.map((stat, index) => (
                <div key={stat.label}>
                  <p className="font-mono text-[10px] tracking-[0.28em] text-white/35">0{index + 1}</p>
                  <dt className="mt-2 text-2xl font-light text-white sm:text-3xl">{stat.value}</dt>
                  <dd className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-1 lg:order-2">
            <div data-portrait className="relative mx-auto w-full max-w-md">
              <span className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l border-t border-white/80" />
              <span className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-white/80" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-7 w-7 border-b border-l border-white/80" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b border-r border-white/80" />
              <img
                src="/media/profile.jpeg"
                alt="Portrait of Rima Fathallah"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
              />
              <p className="absolute right-8 top-8 font-mono text-[10px] tracking-[0.32em] text-white/80">FIG. 01</p>
              <div className="absolute bottom-4 left-4 rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                {profile.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
