import { GraduationCap } from 'lucide-react'
import { education } from '../data/content'
import { Reveal, Section } from './ui'

const accents = ['#a78bfa', '#e879f9']

export default function Education() {
  return (
    <Section id="education" n="06" eyebrow="Education" title="Academic foundation.">
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.1}>
            <div className="glass glass-hover spot card-accent h-full rounded-2xl p-6" style={{ '--accent': accents[i] }}>
              <span className="tile">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{e.degree}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.school}</p>
              <p className="chip mt-4 inline-block">{e.period}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
