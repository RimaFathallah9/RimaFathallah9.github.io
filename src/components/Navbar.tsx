import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Contact' },
]

type NavbarProps = {
  visible: boolean
}

export function Navbar({ visible }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        className="fixed left-1/2 top-4 z-50 w-[min(920px,calc(100%-1.5rem))] -translate-x-1/2"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: visible ? 0 : -24, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-2.5 text-white shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
          <a href="#top" className="text-lg font-medium tracking-tight">
            Rima<span className="text-white/80">.</span>
          </a>
          <ul className="hidden items-center gap-6 text-sm text-white/55 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-[#f3f0e8] sm:inline-flex"
            >
              Get in Touch
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="flex w-4 flex-col gap-1.5">
                <span className={`block h-px bg-white transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
                <span className={`block h-px bg-white transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#07080b]/95 pt-28 md:hidden"
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
                    className="block py-3 text-4xl font-light"
                    onClick={() => setOpen(false)}
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
