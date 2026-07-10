import { profile } from '../data/content'
import portrait from '../assets/portrait.jpg'

export default function Hero() {
  return (
    <header className="hero">
      <img className="hero-avatar" src={portrait} alt={profile.name} width={112} height={112} />
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
