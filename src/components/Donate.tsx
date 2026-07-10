const donateOptions = [
  { name: 'Buy Me a Coffee', href: '#' },
  { name: 'GitHub Sponsors', href: '#' },
  { name: 'Ko-fi', href: '#' },
]

export default function Donate() {
  return (
    <section className="section" id="support">
      <h2 className="section-title">Support the work</h2>
      <p>
        Domain AI and Genesis Infinity are built and tested on a single phone, on my own time.
        If any of this is useful to you, a donation helps keep it going.
      </p>
      <div className="donate-row">
        {donateOptions.map((d) => (
          <a className="btn btn-ghost" href={d.href} key={d.name}>
            {d.name}
          </a>
        ))}
      </div>
      <p className="donate-note">Links coming soon.</p>
    </section>
  )
}
