import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'
import { categories, projects } from '../data/content'
import { Chip, GithubIcon, Section, iconMap } from './ui'
import { ReviewScene } from './Scenes'

const visualBg = [
  'radial-gradient(circle at 25% 15%, color-mix(in srgb, var(--accent) 50%, transparent), transparent 62%)',
  'radial-gradient(circle at 85% 95%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 55%)',
  'linear-gradient(160deg, #24104a, #12061f)',
].join(', ')

function ProjectVisual({ icon, index }) {
  const Icon = iconMap[icon]
  return (
    <div className="relative h-44 overflow-hidden rounded-t-2xl" style={{ background: visualBg }} aria-hidden="true">
      <div className="grid-fine absolute inset-0 opacity-60" />
      <span className="absolute right-5 top-3 font-mono text-5xl font-bold text-white/10">0{index + 1}</span>
      <div className="absolute inset-0 grid place-items-center">
        <div className="tile-lg">
          <Icon className="h-9 w-9" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const reduce = useReducedMotion()
  const visible = projects.filter((p) => filter === 'All' || p.categories.includes(filter))

  return (
    <Section id="projects" n="03" eyebrow="Featured Projects" title="Things I've built.">
      <div className="mb-12 grid items-center gap-8 md:grid-cols-[1fr_minmax(0,22rem)]">
        <div>
          <p className="mb-6 max-w-md text-base leading-relaxed text-slate-400">
            Five projects across agentic AI, RAG and full-stack development. Most have a live demo and an open repository.
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  filter === c
                    ? 'border-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_8px_24px_-8px_rgb(139_92_246/0.9)]'
                    : 'border-violet-300/15 text-slate-400 hover:border-violet-300/40 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <ReviewScene />
      </div>

      <motion.div layout={!reduce} className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.name}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="glass glass-hover spot card-accent flex flex-col rounded-2xl"
              style={{ '--accent': p.accent }}
            >
              <ProjectVisual icon={p.icon} index={projects.indexOf(p)} />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-widest" style={{ color: p.accent }}>{p.subtitle}</p>
                <h3 className="mt-1.5 font-display text-2xl font-semibold text-white">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>

                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: p.accent }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t}>
                      <Chip>{t}</Chip>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-1 flex-wrap items-end gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                      style={{ background: p.accent }}
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                      <span className="sr-only"> of {p.name}</span>
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    style={{ borderColor: `color-mix(in srgb, ${p.accent} 45%, transparent)`, background: `color-mix(in srgb, ${p.accent} 14%, transparent)` }}
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                    <span className="sr-only"> repository for {p.name}</span>
                  </a>
                  {p.note && <span className="text-xs text-slate-500">{p.note}</span>}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
