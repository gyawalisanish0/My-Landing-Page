import { profile, workflow, techStack, interests, goals } from '../data/content'
import Reveal from './Reveal'
import TagRow from './TagRow'

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <p>
        {profile.age}, based in {profile.location}. Systems and software developer focused on building
        deterministic state engines, private on-device LLM architectures, and autonomous agent orchestration.
        Every core architecture here was designed with strict resource discipline, explicit trust boundaries,
        and zero-hallucination verification.
      </p>

      <Reveal className="card">
        <h3 className="card-subtitle">Workflow & Engineering Discipline</h3>
        <ol className="pipeline">
          {workflow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={100}>
        <TagRow tags={techStack} />
      </Reveal>

      <Reveal className="about-grid" delay={200}>
        <div>
          <h3 className="card-subtitle">Focus Areas</h3>
          <ul className="plain-list">
            {interests.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="card-subtitle">Current Goals</h3>
          <ul className="plain-list">
            {goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
