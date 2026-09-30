import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '../data'
import { Reveal } from './Reveal'

function ProjectCard({
  project,
  index,
  raised,
  onRaise,
}: {
  project: (typeof projects)[number]
  index: number
  raised: boolean
  onRaise: () => void
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])
  const shade = useTransform(scrollYProgress, [0, 1], [0, 0.18])

  return (
    <article
      ref={ref}
      style={{
        top: `calc(6.25rem + ${index * 14}px)`,
        zIndex: raised ? 40 : index + 1,
      }}
      className="sticky"
    >
      <motion.div
        style={{ scale }}
        className="relative origin-top overflow-hidden rounded-[28px] border border-[#e4ddcf] bg-white shadow-xl shadow-black/10"
      >
        <div className="grid gap-6 p-6 sm:p-10 md:grid-cols-[120px_1fr]">
          <p className="font-serif text-6xl italic leading-none text-[#d9d0c2]">
            {String(index + 1).padStart(2, '0')}
          </p>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-[#7a756c]">{project.category}</p>
              <span className="text-[#d9d0c2]">/</span>
              <p className="font-mono text-xs text-[#7a756c]">{project.time}</p>
              {index === 0 && (
                <span className="rounded-full bg-[#16181d] px-3 py-1 text-xs text-[#f3f0e8]">Ongoing</span>
              )}
            </div>
            <h3 className="mt-3 text-3xl font-light sm:text-4xl">{project.title}</h3>
            <p className="mt-4 max-w-2xl text-[#3c4038]">{project.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#e4ddcf] px-3 py-1 text-sm">
                  {tag}
                </span>
              ))}
              <button
                type="button"
                className="ml-auto text-sm text-[#7a756c] underline-offset-4 transition hover:text-[#16181d] hover:underline"
                onClick={onRaise}
              >
                Bring to front
              </button>
            </div>
          </div>
        </div>
        <motion.div style={{ opacity: shade }} className="pointer-events-none absolute inset-0 bg-[#16181d]" />
      </motion.div>
    </article>
  )
}

export function Projects() {
  const [front, setFront] = useState<number | null>(null)

  return (
    <section id="projects" className="scroll-mt-28 bg-[#f3f0e8] px-4 py-24 text-[#16181d] sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#7a756c]">Selected work</p>
              <h2 className="mt-3 text-4xl font-light sm:text-5xl">Projects</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-[#5c584f] sm:block">
              Each card slides up and covers the one before it.
            </p>
          </div>
        </Reveal>

        <div className="relative flex flex-col gap-8 pb-[18vh]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              raised={front === index}
              onRaise={() => setFront(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
