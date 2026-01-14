import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-cta">
          <h3 className="footer-cta-title">Stay in the loop</h3>
          <p className="footer-cta-text">Get updates on new features, templates, and best practices for spec-driven development.</p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button className="footer-subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-column-title">Product</h4>
            <Link to="#" className="footer-link">Features</Link>
            <Link to="#" className="footer-link">Templates</Link>
            <Link to="/pricing" className="footer-link">Pricing</Link>
            <Link to="#" className="footer-link">Changelog</Link>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <Link to="#" className="footer-link">About</Link>
            <Link to="#" className="footer-link">Blog</Link>
            <Link to="#" className="footer-link">Careers</Link>
            <Link to="#" className="footer-link">Contact</Link>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Resources</h4>
            <Link to="/docs" className="footer-link">Documentation</Link>
            <Link to="#" className="footer-link">Guides</Link>
            <Link to="#" className="footer-link">API Reference</Link>
            <Link to="#" className="footer-link">Support</Link>
          </div>
          <div className="footer-column">
            <h4 className="footer-column-title">Social</h4>
            <Link to="#" className="footer-link">Twitter</Link>
            <Link to="#" className="footer-link">GitHub</Link>
            <Link to="#" className="footer-link">Discord</Link>
            <Link to="#" className="footer-link">LinkedIn</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2025 Mod</p>
        <div className="footer-legal">
          <Link to="#" className="footer-legal-link">Privacy</Link>
          <Link to="#" className="footer-legal-link">Terms</Link>
        </div>
      </div>
      {/* Animated logo shapes */}
      <div className="footer-logo-shapes">
        <svg className="logo-shape shape-red" viewBox="0 0 60 80" fill="none">
          <path d="M55 10C55 4 49 0 44 3L8 22C4 24 2 28 2 32V62C2 68 8 72 14 69L50 50C54 48 56 44 56 40V10Z" fill="url(#redGrad)"/>
          <defs>
            <linearGradient id="redGrad" x1="28" y1="0" x2="28" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF2B00"/>
              <stop offset="1" stopColor="#FF2B00" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="logo-shape shape-white" viewBox="0 0 60 80" fill="none">
          <path d="M55 10C55 4 49 0 44 3L8 22C4 24 2 28 2 32V62C2 68 8 72 14 69L50 50C54 48 56 44 56 40V10Z" fill="url(#whiteGrad)" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
          <defs>
            <linearGradient id="whiteGrad" x1="28" y1="0" x2="28" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f0f0f0"/>
              <stop offset="1" stopColor="#e0e0e0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="logo-shape shape-blue" viewBox="0 0 60 80" fill="none">
          <path d="M55 10C55 4 49 0 44 3L8 22C4 24 2 28 2 32V62C2 68 8 72 14 69L50 50C54 48 56 44 56 40V10Z" fill="url(#blueGrad)"/>
          <defs>
            <linearGradient id="blueGrad" x1="28" y1="0" x2="28" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3671F1"/>
              <stop offset="1" stopColor="#3671F1" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  )
}

export default Footer
