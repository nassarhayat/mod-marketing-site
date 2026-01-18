import { Link } from 'react-router-dom'
import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/mod-logo-dec.svg" alt="Mod" className="h-6" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {/* Engineers dropdown */}
          <div className="relative group">
            <Link to="#" className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Engineers
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-lg py-2 min-w-[180px] shadow-xl">
                <Link to="/persona/founders" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Founders</Link>
                <Link to="/persona/design-engineers" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Design Engineers</Link>
                <Link to="/persona/product-engineers" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Product Engineers</Link>
                <Link to="/persona/infra-engineers" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Infra Engineers</Link>
                <Link to="/persona/ml-engineers" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">ML Engineers</Link>
              </div>
            </div>
          </div>

          {/* Usecases dropdown */}
          <div className="relative group">
            <Link to="#" className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Usecases
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-lg py-2 min-w-[180px] shadow-xl">
                <Link to="/usecase/spec-collaboration" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Spec Collaboration</Link>
                <Link to="/usecase/agent-context" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Agent Context</Link>
                <Link to="/usecase/tracing" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Tracing</Link>
                <Link to="/usecase/version-control" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Version Control</Link>
                <Link to="/usecase/code-review" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Code Review</Link>
              </div>
            </div>
          </div>

          {/* Templates dropdown */}
          <div className="relative group">
            <Link to="#" className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Templates
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-[#0a0a0a] border border-white/10 rounded-lg py-2 min-w-[180px] shadow-xl">
                <Link to="#" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Design</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Product Requirements</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Technical Plans</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Testing</Link>
              </div>
            </div>
          </div>

          <Link to="#" className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors">Docs</Link>
          <Link to="/pricing" className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors">Pricing</Link>
          <Link to="#" className="ml-2 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: 'rotate(180deg)' }}
            >
              <path
                d="M5.81248 1V15M4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-[#0a0a0a] z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {/* Engineers Section */}
            <div>
              <button
                onClick={() => toggleSection('engineers')}
                className="w-full flex items-center justify-between px-4 py-3 text-white/70 hover:text-white transition-colors"
              >
                <span>Engineers</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'engineers' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'engineers' && (
                <div className="pl-4 space-y-1">
                  <Link to="/persona/founders" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Founders</Link>
                  <Link to="/persona/design-engineers" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Design Engineers</Link>
                  <Link to="/persona/product-engineers" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Product Engineers</Link>
                  <Link to="/persona/infra-engineers" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Infra Engineers</Link>
                  <Link to="/persona/ml-engineers" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">ML Engineers</Link>
                </div>
              )}
            </div>

            {/* Usecases Section */}
            <div>
              <button
                onClick={() => toggleSection('usecases')}
                className="w-full flex items-center justify-between px-4 py-3 text-white/70 hover:text-white transition-colors"
              >
                <span>Usecases</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'usecases' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'usecases' && (
                <div className="pl-4 space-y-1">
                  <Link to="/usecase/spec-collaboration" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Spec Collaboration</Link>
                  <Link to="/usecase/agent-context" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Agent Context</Link>
                  <Link to="/usecase/tracing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Tracing</Link>
                  <Link to="/usecase/version-control" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Version Control</Link>
                  <Link to="/usecase/code-review" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Code Review</Link>
                </div>
              )}
            </div>

            {/* Templates Section */}
            <div>
              <button
                onClick={() => toggleSection('templates')}
                className="w-full flex items-center justify-between px-4 py-3 text-white/70 hover:text-white transition-colors"
              >
                <span>Templates</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedSection === 'templates' ? 'rotate-180' : ''}`} />
              </button>
              {expandedSection === 'templates' && (
                <div className="pl-4 space-y-1">
                  <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Design</Link>
                  <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Product Requirements</Link>
                  <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Technical Plans</Link>
                  <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-white/50 hover:text-white transition-colors">Testing</Link>
                </div>
              )}
            </div>

            <Link to="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white/70 hover:text-white transition-colors">Docs</Link>
            <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white/70 hover:text-white transition-colors">Pricing</Link>

            <div className="pt-4 px-4">
              <Link
                to="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Nav
