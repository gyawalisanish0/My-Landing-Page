export const profile = {
  name: 'Sanish Gyawali',
  tagline: 'Systems Engineer specializing in deterministic simulation engines, on-device edge AI, and autonomous agent infrastructure.',
  location: 'Sainamaina, Rupandehi, Nepal',
  age: 22,
  github: 'https://github.com/gyawalisanish0',
  email: 'gyawalisanish0@gmail.com',
}

export const socialLinks = [
  { name: 'GitHub', href: profile.github, icon: 'GitHub' },
  { name: 'X', href: 'https://x.com/GENUIS_SANISH', icon: 'X' },
  { name: 'TikTok', href: 'https://tr.ee/oiXw18xgid', icon: 'TikTok' },
  { name: 'YouTube', href: 'https://tr.ee/yWWc6k5yT9', icon: 'YouTube' },
  { name: 'Linktree', href: 'https://linktr.ee/sanishgyawali', icon: 'Linktree' },
] as const

export const workflow = [
  'Multi-agent orchestration & custom tooling via Google Antigravity',
  'Local on-device inference via llama.cpp (GGUF / arm64 / AVX2)',
  'Zero-hallucination verification & tri-state deterministic state machines',
  'Automated test suites & CI/CD with GitHub Actions',
]

export const techStack = [
  'TypeScript',
  'Python',
  'React / Next.js',
  'C++ / Android NDK',
  'Kotlin',
  'llama.cpp / GGUF',
  'Phaser / Three.js',
  'Agent Architecture',
  'Prisma / SQL',
  'GitHub Actions',
]

export const interests = [
  'Deterministic state engines & simulation',
  'AI safety, red-teaming & hallucination auditing',
  'Local edge intelligence & privacy-first computing',
  'Chess (developing player)',
]

export const goals = [
  'Architect production-grade agentic & simulation systems',
  'Join or consult for forward-thinking engineering teams',
  'Build AI-integrated accessibility tools',
  'Grow an engineering community in Nepal',
]

export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  details: string[]
  meta?: string
  tags: string[]
  repo?: string
  demo?: string
}

export const flagshipProjects: Project[] = [
  {
    id: 'everything-antigravity',
    name: 'Everything Antigravity',
    tagline: 'Autonomous agent orchestration toolkit & rules for Google Antigravity',
    description:
      'Adapted and ported from the battle-tested Everything Claude Code (ECC) architecture for Google Antigravity — featuring 310+ modular skills, 70+ autonomous subagents, and strict execution guardrails.',
    details: [
      '310+ modular skills covering TDD, system architecture, database optimization, and security audits',
      '70+ specialized autonomous subagent personas with defined system boundaries and tool access',
      'Engineering rules and automation pipelines tailored specifically for Google Antigravity',
      'Enforces strict pre-edit planning, adversarial auditing, and automated verification before code changes',
    ],
    tags: ['Agent Architecture', 'Google Antigravity', 'Python', 'Automation', 'Workflow'],
    repo: 'https://github.com/gyawalisanish0/Everything_Antigravity',
  },
  {
    id: 'domain-ai',
    name: 'Domain AI',
    tagline: 'Local-first, fully offline Android AI assistant',
    description:
      'Runs Gemma and DeepSeek models on-device via llama.cpp — zero cloud calls.',
    details: [
      'On-device inference: Gemma and DeepSeek models via llama.cpp, no cloud dependency',
      'AES-256 encryption for stored data keyed to Android Keystore',
      'Hardware network kill switch at an auditable chokepoint',
      'Automatic PII redaction (phones, emails, identifiers) before any cloud call',
    ],
    meta: 'Package: sg.act.domain',
    tags: ['Android', 'Kotlin', 'C++', 'llama.cpp', 'GGUF', 'Edge AI'],
    repo: 'https://github.com/gyawalisanish0/DomainAI',
  },
  {
    id: 'genesis-infinity',
    name: 'Genesis Infinity',
    tagline: 'AI-powered RPG framework (TypeScript / Phaser)',
    description:
      'Inverts the "AI Dungeon" model: a deterministic state engine holds all world truth — AI only narrates within those bounds and never decides outcomes.',
    details: [
      'Event-sourced state log (DTM) as the single source of truth',
      'Tri-state action validator: valid / neutral / invalid',
      'NarrationAuditor fact-checks generated prose against real game state — catches hallucination even when the state itself is correct',
      'Explicit trust boundary: all user/model input is treated as intent, never fact, closing off prompt-injection-style exploits',
      'Reuses the same single, auditable policy-core pattern as Domain AI',
      'Working demo: combat resolves through structured tool calls, not freeform narration',
    ],
    tags: ['TypeScript', 'Phaser', 'Game AI', 'State machines', 'AI Safety'],
    repo: 'https://github.com/gyawalisanish0/Genesis_Infinity',
  },
  {
    id: 'usr',
    name: 'USR',
    tagline: 'Deterministic soccer match engine + live birds-eye viewer',
    description:
      'Ultimate Soccer Revolution — a soccer sim built mechanic by mechanic: data-driven attributes and match rules, seeded determinism, and a real-time Canvas viewer that only ever consumes the engine.',
    details: [
      'Pure engine core (src/engine/) — no I/O, no rendering; takes teams, tactics, and a seed in, returns final score, an ordered event log, and match stats out',
      'Fully deterministic: same input + same seed always produces the same output, computed on a fixed internal timestep independent of wall-clock playback speed',
      'Full match-rules layer: shooting, restarts, fouls and cards, offside, marking and closing-down, manager AI, substitutions, and fatigue',
      'Data-driven: a read-only JSON database of real player and team data drives end-to-end simulations, loaded independently of the pure engine',
      'Birds-eye Canvas viewer watches matches live in real time, built on the same engine — every bug it surfaced was a real engine bug, not a rendering one',
    ],
    tags: ['TypeScript', 'Node.js', 'Vite', 'Vitest', 'Simulation'],
    demo: 'https://usr-iota.vercel.app/',
  },
  {
    id: 'interactio',
    name: 'InterActio',
    tagline: 'Immersive web puzzle game (React Three Fiber)',
    description:
      'A sequence of self-contained 2D and 3D puzzle stages plugged into a small shared engine — each stage its own world, stitched together by one router.',
    details: [
      'Layered module architecture: stages depend on mechanics depend on core, dependencies only point downward — a stage can be deleted by removing its folder and one registration line',
      '3D stages via Three.js (react-three-fiber, drei); 2D stages stay plain DOM/CSS — render mode is declared per stage, never forced',
      'One shared store (zustand) for cross-stage state; no router framework — the stage registry is the router',
      'Live stages so far: a main menu and "The Cipher," a decryption puzzle with procedural audio and grouped-reveal dialogue',
    ],
    tags: ['TypeScript', 'React', 'Three.js', 'Vite', 'Zustand'],
    demo: 'https://inter-actio.vercel.app/',
  },
]

export const otherWork = [
  {
    name: 'TaskFlow (agent-playground)',
    description:
      'Full-stack task management SaaS monorepo built with Next.js 14 App Router, Express.js layered architecture (middleware, controllers, services), Prisma ORM, and Zod validation schemas.',
  },
  {
    name: 'KRYSTAL',
    description:
      'Retro games modding brand with custom identity and runtime tooling.',
  },
]
