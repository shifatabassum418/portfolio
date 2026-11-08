import { motion, useReducedMotion } from 'framer-motion'
import {
  BookOpen,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  LayoutTemplate,
  Phone,
  Pill,
  ScanEye,
  Sparkles,
  Telescope,
  Wrench,
} from 'lucide-react'

export const iconMap = {
  BookOpen,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  LayoutTemplate,
  Phone,
  Pill,
  ScanEye,
  Sparkles,
  Telescope,
  Wrench,
}

export function GithubIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ id, n, eyebrow, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <Reveal className="mb-12 max-w-2xl md:mb-14">
        <p className="mb-4 flex items-center gap-3 font-display text-sm font-medium uppercase tracking-[0.22em] text-violet-300">
          <span className="font-mono text-xs text-violet-400">{n}</span>
          <span className="h-px w-10 bg-gradient-to-r from-violet-400 to-transparent" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

export function Chip({ children }) {
  return <span className="chip">{children}</span>
}
