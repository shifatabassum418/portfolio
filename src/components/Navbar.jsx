import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    nav.forEach(([, id]) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-400"
        aria-hidden="true"
      />
      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
        <a
          href="#main"
          className="absolute left-4 top-1 -translate-y-24 rounded-md bg-violet-600 px-4 py-2 text-sm text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <nav
          className={`glass mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pl-5 pr-3 transition-shadow duration-300 ${
            scrolled ? 'bg-ink/70 shadow-[0_12px_40px_-14px_rgb(124_58_237/0.7)]' : ''
          }`}
          aria-label="Primary"
        >
          <a href="#home" className="font-display text-lg font-bold tracking-tight text-white">
            Shifa<span className="text-gradient">.</span>
          </a>

          <ul className="hidden items-center lg:flex">
            {nav.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`rounded-full px-3 py-1.5 text-[13px] transition-colors ${
                    active === id ? 'bg-violet-500/20 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-slate-400 transition-colors hover:text-white">
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-slate-400 transition-colors hover:text-white">
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-slate-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div id="mobile-menu" className="glass mx-auto mt-2 max-w-5xl rounded-3xl bg-ink/90 p-3 lg:hidden">
            <ul className="flex flex-col">
              {nav.map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base ${active === id ? 'bg-violet-500/20 text-white' : 'text-slate-300'}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex gap-4 px-4 py-3 text-slate-300">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /></a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
