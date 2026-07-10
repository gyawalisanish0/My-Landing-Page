import { profile, workflow, techStack, interests, goals } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <p>
        {profile.age}, based in {profile.location}. Self-taught, no formal CS background —
        everything here is built entirely from an Android phone, no PC or laptop involved.
      </p>

      <div className="card">
        <h3 className="card-subtitle">Workflow</h3>
        <ol className="pipeline">
          {workflow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="tag-row">
        {techStack.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="about-grid">
        <div>
          <h3 className="card-subtitle">Also into</h3>
          <ul className="plain-list">
            {interests.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="card-subtitle">Long-term goals</h3>
          <ul className="plain-list">
            {goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
