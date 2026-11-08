import { useState } from 'react'
import { Check, Copy, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon, Reveal, Section } from './ui'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy my email address:', profile.email)
    }
  }

  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, text: profile.email, Icon: Mail, accent: '#e879f9' },
    { label: 'GitHub', href: profile.github, text: 'shifatabassum418', Icon: GithubIcon, accent: '#a78bfa', external: true },
    { label: 'LinkedIn', href: profile.linkedin, text: 'shifa-tabassum', Icon: LinkedinIcon, accent: '#a78bfa', external: true },
  ]

  return (
    <Section id="contact" n="07" eyebrow="Contact" title="Let's build something intelligent.">
      <Reveal>
        <div className="gradient-border relative overflow-hidden p-7 sm:p-12">
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-600/30 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/25 blur-[90px]" aria-hidden="true" />
          <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
                I'm open to AI Engineer and AI Agent Developer roles. If you're hiring or want to talk about agentic AI, send me a message.
              </p>
              <p className="mt-6 flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-violet-400" aria-hidden="true" />
                {profile.location}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Send an Email
                </a>
                <button type="button" onClick={copyEmail} className="btn-ghost glass">
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy Email'}
                </button>
                <span className="sr-only" role="status" aria-live="polite">
                  {copied ? 'Email address copied to clipboard' : ''}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {links.map(({ label, href, text, Icon, accent, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="glass glass-hover spot flex items-center gap-4 rounded-2xl p-4"
                    style={{ '--accent': accent }}
                  >
                    <span className="tile">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-slate-500">{label}</span>
                      <span className="block truncate text-sm font-medium text-white">{text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
