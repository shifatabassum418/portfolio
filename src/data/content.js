export const profile = {
  name: 'Shifa Tabassum',
  role: 'Agent Developer | AI Engineer',
  headline: 'I build AI agents and the apps around them.',
  summary:
    'AI Engineer and Agent Developer building agentic systems, RAG apps and full-stack AI products with Python, FastAPI and React.',
  availability: 'Open to AI Engineer / AI Agent Developer Opportunities',
  email: 'shifatabassummd@gmail.com',
  github: 'https://github.com/shifatabassum418',
  linkedin: 'https://www.linkedin.com/in/shifa-tabassum',
  location: 'Hyderabad, India',
  resume: `${import.meta.env.BASE_URL}Shifa_Tabassum_Resume.pdf`,
}

export const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Certifications', 'certifications'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

export const aboutPoints = [
  { title: 'MCA, Osmania University', text: 'Master of Computer Applications from MESCO Institute, 2023–2025.', icon: 'GraduationCap', accent: '#a78bfa' },
  { title: 'AI Specialist Program', text: 'Completed at Full Stack Academy, Hyderabad in 2026.', icon: 'Sparkles', accent: '#a78bfa' },
  { title: 'Generative AI Intern', text: 'Infotact Solutions, building a multimodal agent for UI self-healing and RPA.', icon: 'Cpu', accent: '#e879f9' },
  { title: 'Web Development Intern', text: 'Internship Studio, React.js and JavaScript interfaces backed by REST APIs.', icon: 'Code2', accent: '#34d399' },
]

export const skills = [
  {
    title: 'AI & Agentic AI',
    icon: 'Bot',
    accent: '#a78bfa',
    items: ['Generative AI', 'LLMs', 'AI Agents', 'Multi-Agent Systems', 'RAG', 'MCP', 'LangGraph', 'LangChain', 'Prompt Engineering', 'OpenAI & Anthropic APIs'],
  },
  {
    title: 'Programming & AI/ML',
    icon: 'BrainCircuit',
    accent: '#a78bfa',
    items: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'CNN', 'Machine Learning'],
  },
  {
    title: 'Frontend',
    icon: 'LayoutTemplate',
    accent: '#e879f9',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux', 'Responsive Design'],
  },
  {
    title: 'Backend & Database',
    icon: 'Database',
    accent: '#34d399',
    items: ['FastAPI', 'Node.js', 'REST APIs', 'PostgreSQL', 'MySQL', 'SQL'],
  },
  {
    title: 'Automation & Tools',
    icon: 'Wrench',
    accent: '#fbbf24',
    items: ['Playwright', 'pytest', 'Git', 'GitHub', 'VS Code', 'Claude AI', 'GitHub Copilot'],
  },
]

export const categories = ['All', 'Agentic AI', 'RAG', 'Full Stack', 'Automation']

export const projects = [
  {
    name: 'Deep Research Agent',
    subtitle: 'Multi-agent research with verified citations',
    icon: 'Telescope',
    accent: '#a78bfa',
    categories: ['Agentic AI', 'Full Stack'],
    description:
      'Ask a complex question and a team of agents plans the research, searches the web in parallel, reads sources and writes a citation-backed report.',
    features: [
      'Planner, search, reader, fact-checker, conflict and synthesis agents',
      'Every claim stores a quote verified against its source',
      'Full execution trace of each agent call',
      'Live pipeline view in the React interface',
    ],
    tech: ['Python', 'FastAPI', 'asyncio', 'Tavily', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/shifatabassum418/Deep-Research-Agent',
    live: 'https://deep-research-agent-22a8.onrender.com',
  },
  {
    name: 'Pharma Complaint Management System',
    subtitle: 'AI complaint intake, triage & CAPA',
    icon: 'Pill',
    accent: '#34d399',
    categories: ['Agentic AI', 'Full Stack'],
    description:
      'A QA analyst pastes a complaint email or uploads a scanned PDF and a LangGraph pipeline fills in the form, scores risk and suggests a root cause and CAPA.',
    features: [
      'LangGraph workflow: extraction, risk, duplicates, root cause, CAPA',
      'OCR for scanned PDFs and chat-based corrections to the form',
      'JWT auth, PDF / Excel / CSV export',
      'Groq model fallback for reliability',
    ],
    tech: ['Python', 'LangGraph', 'Groq', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'Redux Toolkit', 'Material UI'],
    github: 'https://github.com/shifatabassum418/aivoa-complaint-management-system',
    live: 'https://aivoa-complaint-management-system-3.onrender.com',
  },
  {
    name: 'AI Phone Receptionist',
    subtitle: 'Voice agent that books appointments',
    icon: 'Phone',
    accent: '#e879f9',
    categories: ['Agentic AI', 'Full Stack'],
    description:
      'A voice receptionist that answers business questions, checks availability and books, reschedules or cancels appointments, with an admin dashboard.',
    features: [
      'Tool-calling agent with confirmation before any booking change',
      'Swappable STT, LLM and TTS providers',
      'Live call streaming over WebSocket',
      'Human handoff and call history dashboard',
    ],
    tech: ['Python', 'FastAPI', 'WebSocket', 'Edge TTS', 'Whisper STT', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/shifatabassum418/ai-phone-receptionist',
    live: 'https://ai-phone-receptionist-k4tq.onrender.com',
  },
  {
    name: 'NotebookLM Lite',
    subtitle: 'Chat with PDFs, answers with page citations',
    icon: 'BookOpen',
    accent: '#f472b6',
    categories: ['RAG', 'Full Stack'],
    description:
      'Upload PDFs and ask questions. Answers are grounded only in your documents, with clickable page-level citations that show the original page.',
    features: [
      'Retrieval-augmented generation over uploaded PDFs',
      'Chunking, embeddings and vector search',
      'Citation viewer that renders the source page',
      'Choice of OpenAI, Gemini or Groq models',
    ],
    tech: ['Python', 'FastAPI', 'ChromaDB', 'PyMuPDF', 'fastembed', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/shifatabassum418/notebooklm',
    live: 'https://notebooklm-rd53.onrender.com',
  },
  {
    name: 'OmniSight',
    subtitle: 'Multimodal UI self-healing & RPA agent',
    icon: 'ScanEye',
    accent: '#fbbf24',
    categories: ['Agentic AI', 'Automation'],
    description:
      'A multimodal AI agent that detects broken UI elements, heals them automatically and runs dynamic RPA workflows. Built with a four-member team.',
    features: [
      'Browser automation with Python and Playwright',
      'Checkout flows tested on desktop, tablet and mobile',
      'Vision-language model integration',
      'pytest coverage',
    ],
    tech: ['Python', 'Playwright', 'pytest', 'FastAPI', 'Vision-Language Models'],
    github: 'https://github.com/BoogeMan-lab/OmniSight',
    note: 'Team repository',
  },
]

export const experience = [
  {
    role: 'Generative AI Intern',
    org: 'Infotact Solutions',
    period: 'Present',
    points: [
      'Engineering OmniSight, a multimodal agent that integrates LLMs and vision-language models for UI self-healing and dynamic RPA workflows.',
      'Own the Python and Playwright automation module: checkout flows, responsive screenshots at desktop, tablet and mobile viewports, and pytest coverage.',
      'Part of a four-member team connecting the automation layer to the VLM, FastAPI backend and dashboard.',
    ],
  },
  {
    role: 'Web Development Intern (JavaScript & React.js)',
    org: 'Internship Studio',
    period: 'Jan 2024 – Feb 2024',
    points: [
      'Built responsive React components including product listings, filters and detail pages.',
      'Wrote semantic, standards-compliant markup and integrated REST APIs.',
      'Used Git in an agile team and AI tools for faster debugging.',
    ],
  },
  {
    role: 'Intern',
    org: 'Full Stack Academy, Hyderabad',
    period: 'AI Specialist Program, 2026',
    points: [
      'Completed the AI Specialist Program and now apply those skills to live projects.',
    ],
  },
]

export const certification = {
  title: 'Artificial Intelligence Specialist Program',
  org: 'Full Stack Academy, Hyderabad',
  year: 'Completed 2026',
  topics: [
    'Generative AI',
    'Agentic AI',
    'Model Context Protocol',
    'Retrieval-Augmented Generation',
    'Multi-Agent Systems',
    'AI Applications',
    'Prompt Engineering',
  ],
  // Add a genuine certificate URL or file path here to show a "View Certificate" button.
  url: '',
}

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'MESCO Institute of Management and Computer Sciences, Osmania University',
    period: '2023 – 2025',
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    school: 'Osmania University',
    period: '2020 – 2023',
  },
]

export const marqueeItems = [
  'Python', 'LangGraph', 'LangChain', 'RAG', 'MCP', 'FastAPI', 'React.js', 'TypeScript',
  'Tailwind CSS', 'PostgreSQL', 'ChromaDB', 'Playwright', 'Groq', 'Git',
]

export const stats = [
  { value: String(projects.length), label: 'Projects built' },
  { value: String(projects.filter((p) => p.live).length), label: 'Live demos' },
  { value: String(skills.reduce((n, g) => n + g.items.length, 0)), label: 'Tools & technologies' },
  { value: '2026', label: 'AI Specialist Program' },
]
