import { experience } from '../data/content'
import { Reveal, Section } from './ui'

const accents = ['#e879f9', '#a78bfa', '#c084fc']

export default function Experience() {
  return (
    <Section id="experience" n="04" eyebrow="Experience" title="Internships & training.">
      <ol className="relative ml-3 border-l-2 border-transparent sm:ml-4" style={{ borderImage: 'linear-gradient(to bottom, #e879f9, #8b5cf6, #8b5cf6, transparent) 1' }}>
        {experience.map((job, i) => (
          <li key={job.org} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
            <span
              className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border-2 bg-ink"
              style={{ borderColor: accents[i], boxShadow: `0 0 16px ${accents[i]}` }}
              aria-hidden="true"
            />
            <Reveal delay={i * 0.06}>
              <div className="glass glass-hover spot card-accent rounded-2xl p-6" style={{ '--accent': accents[i] }}>
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                    <p className="text-sm font-medium" style={{ color: accents[i] }}>{job.org}</p>
                  </div>
                  <p className="chip">{job.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-400" style={{ '--tw-marker': accents[i] }}>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
