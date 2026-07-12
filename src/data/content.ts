export const profile = {
  name: 'Sanish Gyawali',
  tagline: 'Self-taught developer building AI systems and games — entirely from a phone.',
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
  'Claude Code / Codex for AI-assisted development',
  'GitHub, via Chrome',
  'GitHub Actions for CI/CD',
  'On-device testing',
]

export const techStack = [
  'TypeScript',
  'React',
  'Phaser',
  'Kotlin',
  'Android toolchain',
  'GitHub Actions',
  'llama.cpp / GGUF',
]

export const interests = [
  'Chess (developing player)',
  'Sci-fi / dark fantasy worldbuilding',
  'Content creation',
]

export const goals = [
  'Launch an indie game studio',
  'Build AI-integrated accessibility tools',
  'Grow a tech community in Nepal',
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
    id: 'domain-ai',
    name: 'Domain AI',
    tagline: 'Local-first, fully offline Android AI assistant',
    description:
      'Runs Gemma and DeepSeek models on-device via llama.cpp — zero cloud calls.',
    details: [
      'On-device inference: Gemma and DeepSeek models via llama.cpp, no cloud dependency',
      'AES-256 encryption for stored data',
      'Network kill switch',
      'Built-in PII redaction',
    ],
    meta: 'Package: sg.act.domain',
    tags: ['Android', 'Kotlin', 'llama.cpp', 'GGUF', 'On-device AI'],
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
    tags: ['TypeScript', 'Phaser', 'Game AI', 'State machines'],
    repo: 'https://github.com/gyawalisanish0/Genesis_Infinity',
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
    tags: ['TypeScript', 'React', 'Three.js', 'Vite'],
    demo: 'https://inter-actio.vercel.app/',
  },
]

export const otherWork = [
  {
    name: 'KRYSTAL',
    description:
      'Retro games modding brand, with its own identity — a faceted crystal "K" in purple/violet.',
  },
]
