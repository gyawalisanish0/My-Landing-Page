import { profile } from '../data/content'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-eyebrow">Developer · Builder · Nepal</div>
      <h1>{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-links">
        <a className="btn btn-primary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
          Email
        </a>
        <a className="btn btn-ghost" href="#projects">
          Projects
        </a>
      </div>
    </header>
  )
}
