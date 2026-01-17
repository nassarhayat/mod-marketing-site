import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-8 py-4">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/mod-logo-dec.svg" alt="Mod" className="h-6" />
        </Link>
        <div className="flex items-center gap-1">
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
      </nav>
    </div>
  )
}

export default Nav
