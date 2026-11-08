import { ArrowUp } from 'lucide-react'
import { nav, profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './ui'

export default function Footer() {
  return (
    <footer className="border-t border-violet-300/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:px-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-500">AI Engineer & Agent Developer · {profile.location}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
            {nav.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-white">{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 text-slate-400">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="hover:text-white"><GithubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="hover:text-white"><LinkedinIcon /></a>
          <a href="#home" aria-label="Back to top" className="glass rounded-full p-2 hover:text-white"><ArrowUp className="h-4 w-4" /></a>
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-slate-600">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
