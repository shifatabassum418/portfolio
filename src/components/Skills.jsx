import { skills } from '../data/content'
import { Chip, Reveal, Section, iconMap } from './ui'

export default function Skills() {
  return (
    <Section id="skills" n="02" eyebrow="Technical Skills" title="The stack behind the agents.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon]
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.08} className={i === 0 ? 'lg:col-span-2' : ''}>
              <div className="glass glass-hover spot card-accent h-full rounded-2xl p-6" style={{ '--accent': group.accent }}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="tile">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                  <span className="ml-auto font-mono text-xs text-slate-500">{String(group.items.length).padStart(2, '0')}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
