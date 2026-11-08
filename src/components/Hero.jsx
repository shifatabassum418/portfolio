import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile, stats } from '../data/content'
import { GithubIcon, LinkedinIcon } from './ui'
import { HeroScene } from './Scenes'

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }

  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-28 sm:px-8 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.div {...fade(0)} className="glass mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-violet-100 sm:text-sm">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" aria-hidden="true" />
              {profile.availability}
            </motion.div>

            <motion.p {...fade(0.08)} className="font-display text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
              {profile.role}
            </motion.p>
            <motion.h1 {...fade(0.14)} className="mt-3 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              SHIFA <span className="text-gradient">TABASSUM</span>
            </motion.h1>
            <motion.p {...fade(0.22)} className="mt-6 max-w-xl font-display text-xl font-medium leading-snug text-slate-100 sm:text-2xl">
              {profile.headline}
            </motion.p>
            <motion.p {...fade(0.3)} className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              {profile.summary}
            </motion.p>

            <motion.div {...fade(0.38)} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary group">
                Explore My Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={profile.resume} download="Shifa_Tabassum_Resume.pdf" className="btn-ghost glass">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-violet-200 transition-colors hover:text-white">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </motion.div>

            <motion.div {...fade(0.46)} className="mt-8 flex items-center gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="glass glass-hover rounded-full p-3 text-slate-300 hover:text-white">
                <GithubIcon />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="glass glass-hover rounded-full p-3 text-slate-300 hover:text-white">
                <LinkedinIcon />
              </a>
            </motion.div>
          </div>

          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 0.2 } })}
            className="mx-auto w-full max-w-md lg:max-w-lg"
          >
            <HeroScene />
          </motion.div>
        </div>

        <motion.ul {...fade(0.55)} className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="glass rounded-2xl p-5">
              <p className="text-gradient font-display text-3xl font-bold">{s.value}</p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
