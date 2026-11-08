import { Award, ExternalLink } from 'lucide-react'
import { certification as c } from '../data/content'
import { Chip, Reveal, Section } from './ui'

export default function Certifications() {
  return (
    <Section id="certifications" n="05" eyebrow="Certifications" title="Specialised AI training.">
      <Reveal>
        <div className="gradient-border relative overflow-hidden p-7 sm:p-10" style={{ '--accent': '#a78bfa' }}>
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/30 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-600/25 blur-[90px]" aria-hidden="true" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="tile-lg !h-14 !w-14 !rounded-2xl">
              <Award className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{c.title}</h3>
              <p className="mt-1 text-violet-300">
                {c.org} <span className="text-slate-500">·</span> {c.year}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.topics.map((t) => (
                  <li key={t}>
                    <Chip>{t}</Chip>
                  </li>
                ))}
              </ul>
              {c.url && (
                <a href={c.url} target="_blank" rel="noreferrer" className="btn-primary mt-7">
                  View Certificate <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
