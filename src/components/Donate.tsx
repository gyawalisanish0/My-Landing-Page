import Reveal from './Reveal'

const donateOptions = [
  { name: 'Buy Me a Coffee', href: '#' },
  { name: 'GitHub Sponsors', href: '#' },
  { name: 'Ko-fi', href: 'https://ko-fi.com/sanishgyawali' },
]

export default function Donate() {
  return (
    <section className="section" id="support">
      <h2 className="section-title section-title-gold">Support the work</h2>
      <p>
        Domain AI and Genesis Infinity are built and tested on a single phone, on my own time.
        If any of this is useful to you, a donation helps keep it going.
      </p>
      <Reveal className="donate-row">
        {donateOptions.map((d) => {
          const isLive = d.href !== '#'
          return (
            <a
              className="btn btn-gold"
              href={d.href}
              key={d.name}
              {...(isLive ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {d.name}
            </a>
          )
        })}
      </Reveal>
      <p className="donate-note">Buy Me a Coffee and GitHub Sponsors links coming soon.</p>
    </section>
  )
}
