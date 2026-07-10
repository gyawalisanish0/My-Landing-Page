import { profile, socialLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-links">
        {socialLinks.map((link) => (
          <a href={link.href} target="_blank" rel="noreferrer" key={link.name}>
            {link.name}
          </a>
        ))}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <p className="footer-note">Built and shipped from an Android phone.</p>
    </footer>
  )
}
