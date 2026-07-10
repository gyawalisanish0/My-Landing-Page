export const profile = {
  name: 'Sanish Gyawali',
  tagline: 'Self-taught developer building AI systems and games — entirely from a phone.',
  location: 'Sainamaina, Rupandehi, Nepal',
  age: 22,
  github: 'https://github.com/gyawalisanish0',
  email: 'gyawalisanish0@gmail.com',
}

export const socialLinks = [
  { name: 'GitHub', href: profile.github },
  { name: 'X', href: 'https://x.com/GENUIS_SANISH' },
  { name: 'TikTok', href: 'https://tr.ee/oiXw18xgid' },
  { name: 'YouTube', href: 'https://tr.ee/yWWc6k5yT9' },
  { name: 'Linktree', href: 'https://linktr.ee/sanishgyawali' },
]

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
  },
]

export const otherWork = [
  {
    name: 'KRYSTAL',
    description:
      'Retro games modding brand, with its own identity — a faceted crystal "K" in purple/violet.',
  },
  {
    name: 'Content creation',
    description: 'TikTok, 11k+ followers, and recently started on YouTube.',
  },
]
