import { useState } from 'react'
import { projects } from '../data'
import { Reveal } from './Reveal'

export function Projects() {
  const [front, setFront] = useState(0)

  return (
    <section id="projects" className="scroll-mt-24 bg-[#07080b] px-4 py-24 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">Featured work</p>
              <h2 className="mt-3 text-4xl font-light sm:text-5xl">Featured projects</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-white/50 sm:block">
              Four builds from the archive — e-commerce, games, student tools, and computer vision.
            </p>
          </div>
        </Reveal>

        <div className="relative pb-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              style={{ top: `${92 + index * 16}px`, zIndex: front === index ? 20 : index + 1 }}
              className="sticky mb-8 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#12141a] shadow-2xl shadow-black/40 md:min-h-[440px] md:grid-cols-2"
            >
              <div className="relative min-h-[220px] bg-[#1b1e27]">
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-10">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">{project.category}</p>
                    {index === 0 && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Most interesting</span>
                    )}
                  </div>
                  <h3 className="mt-4 text-3xl font-light sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-md text-white/65">{project.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/80">
                      {tag}
                    </span>
                  ))}
                  <button
                    type="button"
                    className="ml-auto text-sm text-white/50 underline-offset-4 transition hover:text-white hover:underline"
                    onClick={() => setFront(index)}
                  >
                    Bring to front
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
