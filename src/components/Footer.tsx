import { profile } from '../data'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#papers', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#teaching', label: 'Teaching' },
  { href: '/ieee', label: 'IEEE' },
  { href: '#contact', label: 'Contact' },
]

function footerHref(href: string) {
  const onIeee = window.location.pathname.replace(/\/$/, '') === '/ieee'
  if (!href.startsWith('#')) return href
  return onIeee ? `/${href}` : href
}

export function Footer() {
  return (
    <footer className="bg-[#07080b] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-3xl font-light">
            Rima<span className="text-white/70">.</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
            “{profile.quote}”
            <span className="mt-2 block italic text-white/40">— {profile.quoteBy}</span>
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
          {links.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-white" href={footerHref(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-white/10 pt-6 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Rima Fathallah</span>
        <a href={footerHref('#top')} className="tracking-[0.28em]">
          TOP
        </a>
      </div>
    </footer>
  )
}
