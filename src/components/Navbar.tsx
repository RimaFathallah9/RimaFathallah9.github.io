import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { sectionTones, useActiveSection } from '../hooks/useActiveSection'

const links = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#research', label: 'Research', id: 'research' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

type NavbarProps = {
  visible: boolean
}

export function Navbar({ visible }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const section = useActiveSection(visible)
  const cream = sectionTones[section] === 'cream'
  const activeId = section === 'intro' ? 'home' : section

  const goTo = (event: { preventDefault: () => void }, href: string) => {
    const el = document.getElementById(href.slice(1))
    if (!el) return
    event.preventDefault()
    const top = window.scrollY + el.getBoundingClientRect().top
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    window.history.pushState(null, '', href)
    setOpen(false)
  }

  return (
    <>
      <motion.header
        className="pointer-events-none fixed inset-x-0 top-4 z-[70] mx-auto w-[min(72rem,calc(100%-3rem))]"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: visible ? 0 : -24, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label="Primary"
          className={`pointer-events-auto flex items-center justify-between gap-4 rounded-full border px-3 py-2 shadow-xl backdrop-blur-xl transition-colors duration-500 sm:px-4 ${
            cream
              ? 'border-[#1c1914]/10 bg-[#fbf8f2]/90 text-[#16181d] shadow-black/10'
              : 'border-white/10 bg-[#07080b]/85 text-white shadow-black/40'
          }`}
        >
          <a href="#top" className="shrink-0 px-2 text-lg font-medium tracking-tight" onClick={(event) => goTo(event, '#top')}>
            Rima<span className={cream ? 'text-[#16181d]/70' : 'text-white/80'}>.</span>
          </a>
          <ul className="hidden items-center gap-1 text-sm sm:flex">
            {links.map((link) => {
              const active = activeId === link.id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => goTo(event, link.href)}
                    aria-current={active ? 'location' : undefined}
                    className={`rounded-full px-3 py-1.5 transition-colors duration-500 ${
                      active
                        ? cream
                          ? 'bg-[#16181d] text-[#f3f0e8]'
                          : 'bg-white text-[#16181d]'
                        : cream
                          ? 'text-[#16181d]/60 hover:text-[#16181d]'
                          : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(event) => goTo(event, '#contact')}
              className={`hidden rounded-full px-4 py-2 text-sm font-medium transition sm:inline-flex ${
                cream ? 'bg-[#16181d] text-[#f3f0e8] hover:bg-black' : 'bg-white text-black hover:bg-[#f3f0e8]'
              }`}
            >
              Get in Touch
            </a>
            <button
              type="button"
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:hidden ${
                cream ? 'border-[#16181d]/15' : 'border-white/15'
              }`}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex w-4 flex-col gap-1.5">
                <span
                  className={`block h-px transition ${cream ? 'bg-[#16181d]' : 'bg-white'} ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
                />
                <span
                  className={`block h-px transition ${cream ? 'bg-[#16181d]' : 'bg-white'} ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[65] bg-[#07080b]/95 pt-28 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col gap-2 px-8">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <a
                    href={link.href}
                    className="block py-3 text-4xl font-light text-white"
                    onClick={(event) => goTo(event, link.href)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
