import { flagshipProjects } from '../data/content'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured projects</h2>
      <div className="project-list">
        {flagshipProjects.map((p) => (
          <article className="project-card" key={p.id}>
            <h3>{p.name}</h3>
            <p className="project-tagline">{p.tagline}</p>
            <p>{p.description}</p>
            <ul className="plain-list">
              {p.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {p.meta && <p className="project-meta">{p.meta}</p>}
            <div className="tag-row">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
