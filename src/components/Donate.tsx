import { profile } from '../data/content'
import Reveal from './Reveal'

const contactOptions = [
  { name: 'Email Directly', href: `mailto:${profile.email}` },
  { name: 'GitHub Profile', href: profile.github },
  { name: 'X / Direct Message', href: 'https://x.com/GENUIS_SANISH' },
  { name: 'Ko-fi Support', href: 'https://ko-fi.com/sanishgyawali' },
]

export default function Donate() {
  return (
    <section className="section" id="support">
      <h2 className="section-title section-title-gold">Open for Engineering Roles & Contracts</h2>
      <p>
        Available for full-time remote engineering positions and high-impact contracts specializing in{' '}
        <strong>Agentic Workflow Architecture</strong>, <strong>On-Device Edge AI (llama.cpp)</strong>, and{' '}
        <strong>Deterministic Simulation Systems</strong>.
      </p>
      <Reveal className="donate-row">
        {contactOptions.map((d) => (
          <a
            className="btn btn-gold"
            href={d.href}
            key={d.name}
            target={d.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={d.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          >
            {d.name}
          </a>
        ))}
      </Reveal>
      <p className="donate-note">Open to discussions on contract automation, system integration, or engineering roles.</p>
    </section>
  )
}
