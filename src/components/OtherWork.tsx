import { otherWork } from '../data/content'

export default function OtherWork() {
  return (
    <section className="section" id="other-work">
      <h2 className="section-title">Other work</h2>
      <div className="other-work-list">
        {otherWork.map((item) => (
          <div className="card" key={item.name}>
            <h3 className="card-subtitle">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
