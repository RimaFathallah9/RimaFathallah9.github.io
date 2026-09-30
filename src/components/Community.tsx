import { community } from '../data'
import { Reveal } from './Reveal'

export function Community() {
  return (
    <section id="community" className="scroll-mt-24 bg-[#07080b] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">Public participation</p>
          <h2 className="mt-3 text-4xl font-light sm:text-5xl">Community</h2>
          <p className="mt-4 max-w-xl text-white/60">
            Congresses, student branches, and rooms where the work left the screen.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {community.map((event, index) => (
            <Reveal key={event.title} delay={(index % 3) * 0.06}>
              <article className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                {event.image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-28 items-end bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_55%)] px-5 pb-4">
                    <span className="font-serif text-4xl italic text-white/30">{event.year}</span>
                  </div>
                )}
                <div className="p-5">
                  <p className="font-mono text-xs tracking-wider text-white/40">{event.year}</p>
                  <h3 className="mt-2 text-xl font-light">{event.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{event.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
