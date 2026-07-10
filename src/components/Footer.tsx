import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <p className="footer-note">Built and shipped from an Android phone.</p>
    </footer>
  )
}
