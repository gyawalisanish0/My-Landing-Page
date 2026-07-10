import { otherWork } from '../data/content'
import Reveal from './Reveal'

export default function OtherWork() {
  return (
    <section className="section" id="other-work">
      <h2 className="section-title">Other work</h2>
      <div className="other-work-list">
        {otherWork.map((item, i) => (
          <Reveal className="card" key={item.name} delay={i * 100}>
            <h3 className="card-subtitle">{item.name}</h3>
            <p>{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
