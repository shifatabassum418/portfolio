const HERO_IMG = `${import.meta.env.BASE_URL}shifa-hero.webp`
const PROJECTS_IMG = `${import.meta.env.BASE_URL}shifa-projects.webp`

function Backdrop() {
  return (
    <>
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="260" r="250" fill="url(#halo)" />
      <g className="spin-slow" style={{ transformBox: 'fill-box' }}>
        <circle cx="260" cy="260" r="215" fill="none" stroke="#a78bfa" strokeOpacity="0.25" strokeDasharray="3 9" />
      </g>
      <g className="spin-slower" style={{ transformBox: 'fill-box' }}>
        <circle cx="260" cy="260" r="165" fill="none" stroke="#d8b4fe" strokeOpacity="0.18" strokeDasharray="1 7" />
      </g>
    </>
  )
}

function Avatar({ src, x, y, width, height, tilt = 0 }) {
  return (
    <g transform={`rotate(${tilt} ${x + width / 2} ${y + height})`}>
      <image className="avatar" href={src} x={x} y={y} width={width} height={height} preserveAspectRatio="xMidYMid meet" />
    </g>
  )
}

function Chip({ x, y, w, label, delay = 0 }) {
  return (
    <g className="float" style={{ animationDelay: `${delay}s` }}>
      <rect x={x} y={y} width={w} height="28" rx="14" fill="#ffffff" fillOpacity="0.07" stroke="#a78bfa" strokeOpacity="0.4" />
      <text x={x + w / 2} y={y + 18} textAnchor="middle" fontSize="12" fontWeight="600" fill="#ece8ff" fontFamily="Inter, sans-serif">
        {label}
      </text>
    </g>
  )
}

export function HeroScene() {
  return (
    <svg viewBox="0 0 520 500" className="h-auto w-full" role="img" aria-label="Illustration of Shifa in a purple hijab and top, waving hello, surrounded by AI agent concepts">
      <Backdrop />
      <Avatar src={HERO_IMG} x={96} y={30} width={310} height={440} />
      <Chip x={20} y={70} w={64} label="RAG" delay={0} />
      <Chip x={430} y={52} w={64} label="MCP" delay={1.2} />
      <Chip x={408} y={140} w={104} label="LangGraph" delay={0.6} />
      <Chip x={8} y={160} w={78} label="Agents" delay={1.8} />
      <g className="float" style={{ animationDelay: '2.4s' }}>
        <rect x="396" y="226" width="118" height="46" rx="12" fill="#ffffff" fillOpacity="0.07" stroke="#a78bfa" strokeOpacity="0.4" />
        <circle cx="412" cy="249" r="5" fill="#34d399" className="pulse-dot" />
        <text x="424" y="244" fontSize="11" fontWeight="600" fill="#ece8ff" fontFamily="Inter, sans-serif">Agent running</text>
        <text x="424" y="260" fontSize="10" fill="#b9a6e6" fontFamily="Inter, sans-serif">plan · retrieve</text>
      </g>
    </svg>
  )
}

export function ReviewScene() {
  return (
    <svg viewBox="0 0 520 500" className="h-auto w-full" role="img" aria-label="Illustration of Shifa with a laptop next to a My Projects panel showing Python, React, FastAPI and GitHub">
      <Backdrop />
      <Avatar src={PROJECTS_IMG} x={40} y={30} width={440} height={440} />
    </svg>
  )
}
