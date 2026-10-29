import { profile } from '../data/content'
import portrait from '../assets/portrait.jpg'

export default function Hero() {
  return (
    <header className="hero">
      <img className="hero-avatar" src={portrait} alt={profile.name} width={112} height={112} />
      <div className="hero-eyebrow">Systems & AI Reliability Engineer · Nepal</div>
      <h1>{profile.name}</h1>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-links">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>
        <a className="btn btn-ghost" href="#support">
          Hire / Contract Me
        </a>
        <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  )
}
