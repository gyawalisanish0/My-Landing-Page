import { flagshipProjects } from '../data/content'
import { icons } from './icons'
import Reveal from './Reveal'
import TagRow from './TagRow'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured projects</h2>
      <div className="project-list">
        {flagshipProjects.map((p, i) => (
          <Reveal as="article" className="project-card" key={p.id} delay={i * 120}>
            <div className="project-card-header">
              <h3>{p.name}</h3>
              {p.demo ? (
                <a
                  className="project-repo-link"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Play ${p.name} on Vercel`}
                >
                  <icons.Vercel />
                  Play
                </a>
              ) : (
                p.repo && (
                  <a
                    className="project-repo-link"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.name} on GitHub`}
                  >
                    <icons.GitHub />
                    Repo
                  </a>
                )
              )}
            </div>
            <p className="project-tagline">{p.tagline}</p>
            <p>{p.description}</p>
            <ul className="plain-list">
              {p.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {p.meta && <p className="project-meta">{p.meta}</p>}
            <TagRow tags={p.tags} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
