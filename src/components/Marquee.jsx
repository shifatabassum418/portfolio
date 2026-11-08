import { marqueeItems } from '../data/content'

export default function Marquee() {
  return (
    <div className="marquee py-6" aria-hidden="true">
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="glass rounded-full px-5 py-2 text-sm font-medium text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
