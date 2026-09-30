import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const chapters = [
  {
    kicker: 'A vision is forming',
    title: 'Every useful system starts as a question.',
    text: 'Somewhere, a pattern is waiting to be understood.',
  },
  {
    kicker: 'The search',
    title: 'You are looking for someone who can build it carefully.',
    text: 'Someone who thinks in data, product, and people.',
  },
]

export function Entrance() {
  const root = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const section = root.current
    if (!section) return

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('[data-chapter]')
      gsap.set(panels.slice(1), { autoAlpha: 0 })

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.65,
        },
      })

      timeline.to({}, { duration: 0.45 })

      timeline.to(panels[0], {
        autoAlpha: 0,
        y: -48,
        filter: 'blur(12px)',
        duration: 0.7,
      })
      timeline.fromTo(
        panels[1],
        { autoAlpha: 0, y: 64, filter: 'blur(12px)' },
        { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.75 },
        '<0.2',
      )
      timeline.to({}, { duration: 0.4 })

      timeline.to(panels[1], {
        autoAlpha: 0,
        y: -40,
        filter: 'blur(10px)',
        duration: 0.65,
      })
      timeline.fromTo(
        panels[2],
        { autoAlpha: 0, scale: 1.06, filter: 'blur(14px)' },
        { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: 0.85 },
        '<0.18',
      )
      timeline.fromTo('[data-side="right"]', { x: 70, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.7 }, '<')
      timeline.fromTo('[data-side="left"]', { x: -70, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.7 }, '<')
      timeline.to({}, { duration: 0.55 })

      timeline.to(panels[2], {
        autoAlpha: 0,
        scale: 0.96,
        filter: 'blur(10px)',
        duration: 0.6,
      })
      timeline.fromTo(
        panels[3],
        { autoAlpha: 0, y: 90 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        '<0.12',
      )
      timeline.to({}, { duration: 0.35 })
    }, section)

    return () => ctx.revert()
  }, [reduced])

  if (reduced) {
    return (
      <section className="bg-[#07080b] px-6 py-24 text-white">
        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          {chapters.map((chapter) => (
            <div key={chapter.kicker}>
              <p className="text-xs uppercase tracking-[0.32em] text-white/50">{chapter.kicker}</p>
              <h2 className="mt-4 text-4xl font-light">{chapter.title}</h2>
              <p className="mt-3 text-white/60">{chapter.text}</p>
            </div>
          ))}
          <a href="#home" className="text-sm tracking-[0.28em] text-white/70">
            SEE HOW
          </a>
        </div>
      </section>
    )
  }

  return (
    <section ref={root} className="relative h-[560vh] bg-[#07080b]" aria-label="Introduction">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

        {chapters.map((chapter) => (
          <div
            key={chapter.kicker}
            data-chapter
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.32em] text-white/80">
              {chapter.kicker}
            </p>
            <h2 className="max-w-3xl text-3xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              {chapter.title}
            </h2>
            <p className="mt-5 max-w-md text-sm text-white/55 sm:text-lg">{chapter.text}</p>
          </div>
        ))}

        <div data-chapter className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="ring-spin absolute -inset-8 rounded-full border border-dashed border-white/25" />
            <div className="absolute -inset-16 rounded-full border border-white/10" />
            <img
              src="/media/profile.jpeg"
              alt=""
              className="h-40 w-40 rounded-full object-cover object-top sm:h-56 sm:w-56 md:h-64 md:w-64"
            />
          </div>
          <div
            data-side="right"
            className="absolute right-4 top-[18%] max-w-[11rem] text-right sm:right-10 sm:max-w-xs md:right-16 md:top-[22%] md:max-w-sm"
          >
            <h2 className="text-xl font-light leading-tight text-white sm:text-3xl md:text-5xl">
              Intelligent systems
            </h2>
            <p className="mt-3 text-xs text-white/55 sm:text-base">
              Models, data, and interfaces shaped around real use.
            </p>
          </div>
          <div
            data-side="left"
            className="absolute bottom-[16%] left-4 max-w-[11rem] text-left sm:left-10 sm:max-w-xs md:bottom-[18%] md:left-16 md:max-w-sm"
          >
            <h2 className="text-xl font-light leading-tight text-white sm:text-3xl md:text-5xl">
              Real-world building
            </h2>
            <p className="mt-3 text-xs text-white/55 sm:text-base">
              Internships, teaching, and tools people can actually use.
            </p>
          </div>
        </div>

        <div
          data-chapter
          className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-[12vh] text-center"
        >
          <h2 className="max-w-3xl text-4xl font-light text-white sm:text-6xl">Let&apos;s build it together.</h2>
          <a
            href="#home"
            className="pointer-events-auto mt-8 inline-flex items-center gap-3 text-xs tracking-[0.38em] text-white/70 transition hover:text-white"
          >
            SEE HOW
            <span className="scroll-cue inline-block">↓</span>
          </a>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.42em] text-white/45">
          <span>SCROLL</span>
          <span className="scroll-cue block h-8 w-px bg-white/40" />
        </div>
      </div>
    </section>
  )
}
