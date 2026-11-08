import { aboutPoints } from '../data/content'
import { Reveal, Section, iconMap } from './ui'

export default function About() {
  return (
    <Section id="about" n="01" eyebrow="About" title="Engineering agents that do real work.">
      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <div className="glass spot h-full rounded-3xl p-7 sm:p-9" style={{ '--accent': '#a78bfa' }}>
            <div className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
              <p>
                I'm an MCA graduate from Osmania University who builds AI systems that plan, retrieve, reason and act. My work spans AI agents, automation, and the frontend and backend that put them in front of users.
              </p>
              <p>
                After completing the AI Specialist Program at Full Stack Academy in 2026, I've been shipping projects around agentic workflows and RAG applications, from a LangGraph complaint-triage pipeline to a multi-agent research assistant grounded in real documents.
              </p>
              <p>
                Right now I'm a Generative AI intern at Infotact Solutions, working on OmniSight, a multimodal agent that heals broken UIs and runs RPA workflows. I'm looking for an AI Engineer or AI Agent Developer role where I can keep building practical, intelligent systems.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {aboutPoints.map((p, i) => {
            const Icon = iconMap[p.icon]
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass glass-hover spot card-accent h-full rounded-2xl p-5" style={{ '--accent': p.accent }}>
                  <span className="tile">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
