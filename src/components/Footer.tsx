import { profile, socialLinks } from '../data/content'
import { icons } from './icons'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-links">
        {socialLinks.map((link) => {
          const IconComponent = icons[link.icon]
          return (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.name}>
              <IconComponent />
              {link.name}
            </a>
          )
        })}
        <a href={`mailto:${profile.email}`}>
          <icons.Email />
          {profile.email}
        </a>
      </div>
      <p className="footer-note">Built and shipped from an Android phone.</p>
    </footer>
  )
}
