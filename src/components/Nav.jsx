import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <Link to="/" className="logo">
          <img src="/mod-logo-dec.svg" alt="Mod" className="logo-img" />
        </Link>
        <div className="nav-right">
          <div className="nav-dropdown">
            <Link to="#" className="nav-link">Engineers</Link>
            <div className="dropdown-menu">
              <Link to="/persona/founders" className="dropdown-item">Founders</Link>
              <Link to="/persona/design-engineers" className="dropdown-item">Design Engineers</Link>
              <Link to="/persona/product-engineers" className="dropdown-item">Product Engineers</Link>
              <Link to="/persona/infra-engineers" className="dropdown-item">Infra Engineers</Link>
              <Link to="/persona/ml-engineers" className="dropdown-item">ML Engineers</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <Link to="#" className="nav-link">Usecases</Link>
            <div className="dropdown-menu">
              <Link to="/usecase/spec-collaboration" className="dropdown-item">Spec Collaboration</Link>
              <Link to="/usecase/agent-context" className="dropdown-item">Agent Context</Link>
              <Link to="/usecase/tracing" className="dropdown-item">Tracing</Link>
              <Link to="/usecase/version-control" className="dropdown-item">Version Control</Link>
              <Link to="/usecase/code-review" className="dropdown-item">Code Review</Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <Link to="#" className="nav-link">Templates</Link>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item">Design</Link>
              <Link to="#" className="dropdown-item">Product Requirements</Link>
              <Link to="#" className="dropdown-item">Technical Plans</Link>
              <Link to="#" className="dropdown-item">Testing</Link>
            </div>
          </div>
          <Link to="#" className="nav-link">Docs</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="#" className="nav-cta">Get Started</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav
