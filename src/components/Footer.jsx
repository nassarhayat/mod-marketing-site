import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Stay in the loop</h3>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">
              Get updates on new features, templates, and best practices for spec-driven development.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-white/20 transition-colors"
              />
              <button className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">Product</h4>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Features</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Templates</Link>
              <Link to="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Changelog</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">Company</h4>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">About</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Blog</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">Resources</h4>
              <Link to="/docs" className="text-sm text-white/60 hover:text-white transition-colors">Documentation</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Guides</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">API Reference</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Support</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">Social</h4>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Twitter</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">GitHub</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">Discord</Link>
              <Link to="#" className="text-sm text-white/60 hover:text-white transition-colors">LinkedIn</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-sm text-white/30">&copy; 2025 Mod</p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link to="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>

      {/* Animated logo shapes - hidden on mobile */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-end gap-1 opacity-20">
        <svg className="w-8 h-10" viewBox="0 0 60 80" fill="none">
          <path d="M55 10C55 4 49 0 44 3L8 22C4 24 2 28 2 32V62C2 68 8 72 14 69L50 50C54 48 56 44 56 40V10Z" fill="url(#redGrad)"/>
          <defs>
            <linearGradient id="redGrad" x1="28" y1="0" x2="28" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF2B00"/>
              <stop offset="1" stopColor="#FF2B00" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="w-8 h-10" viewBox="0 0 60 80" fill="none">
          <path d="M55 10C55 4 49 0 44 3L8 22C4 24 2 28 2 32V62C2 68 8 72 14 69L50 50C54 48 56 44 56 40V10Z" fill="url(#whiteGrad)" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
          <defs>
            <linearGradient id="whiteGrad" x1="28" y1="0" x2="28" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f0f0f0"/>
              <stop offset="1" stopColor="#e0e0e0"/>
            </linearGradient>
          </defs>
        </svg>
        <svg className="w-8 h-10" viewBox="0 0 60 80" fill="none">
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
