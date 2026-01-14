import { Link } from 'react-router-dom'

function Discover() {
  return (
    <section className="discover-section" id="discover">
      <div className="container">
        <h2 className="discover-title">Discover</h2>
        <p className="discover-subtitle">Start your next project with a template and see what others are building</p>

        <div className="bento-grid">
          <Link to="#" className="bento-card bento-large">
            <div className="bento-label">Templates</div>
            <div className="bento-icon-grid">
              <div className="bento-mini-icon feature">F</div>
              <div className="bento-mini-icon design">D</div>
              <div className="bento-mini-icon rfc">R</div>
              <div className="bento-mini-icon readme">R</div>
            </div>
            <div className="bento-title">Start from a template</div>
            <div className="bento-desc">Feature specs, design docs, RFCs, and READMEs ready to customize</div>
          </Link>

          <Link to="#" className="bento-card">
            <div className="bento-workspace-icon" style={{ background: '#3b82f6' }}>A</div>
            <div className="bento-title">acme/payments</div>
            <div className="bento-desc">Payment processing specs</div>
            <div className="bento-meta">
              <span>12 specs</span>
              <div className="bento-avatars">
                <div className="bento-avatar" style={{ background: '#3b82f6' }}>S</div>
                <div className="bento-avatar" style={{ background: '#8b5cf6' }}>M</div>
              </div>
            </div>
          </Link>

          <Link to="#" className="bento-card">
            <div className="bento-workspace-icon" style={{ background: '#22c55e' }}>O</div>
            <div className="bento-title">openai/agents</div>
            <div className="bento-desc">Agent framework docs</div>
            <div className="bento-meta">
              <span>8 specs</span>
              <div className="bento-avatars">
                <div className="bento-avatar" style={{ background: '#22c55e' }}>A</div>
              </div>
            </div>
          </Link>

          <Link to="#" className="bento-card bento-tall">
            <div className="bento-label">Popular</div>
            <div className="bento-workspace-icon large" style={{ background: '#6366f1' }}>S</div>
            <div className="bento-title">stripe/connect</div>
            <div className="bento-desc">Connect platform design docs with comprehensive API specifications</div>
            <div className="bento-meta">
              <span>21 specs</span>
              <div className="bento-avatars">
                <div className="bento-avatar" style={{ background: '#6366f1' }}>T</div>
                <div className="bento-avatar" style={{ background: '#a855f7' }}>R</div>
              </div>
            </div>
          </Link>

          <Link to="#" className="bento-card">
            <div className="bento-workspace-icon" style={{ background: '#f59e0b' }}>V</div>
            <div className="bento-title">vercel/sdk</div>
            <div className="bento-desc">AI SDK feature specs</div>
            <div className="bento-meta">
              <span>15 specs</span>
              <div className="bento-avatars">
                <div className="bento-avatar" style={{ background: '#f59e0b' }}>J</div>
              </div>
            </div>
          </Link>

          <Link to="#" className="bento-card">
            <div className="bento-workspace-icon" style={{ background: '#ef4444' }}>L</div>
            <div className="bento-title">langchain/core</div>
            <div className="bento-desc">Core library specs</div>
            <div className="bento-meta">
              <span>18 specs</span>
              <div className="bento-avatars">
                <div className="bento-avatar" style={{ background: '#ef4444' }}>H</div>
              </div>
            </div>
          </Link>

          <Link to="#" className="bento-card bento-wide">
            <div className="bento-row-layout">
              <div className="bento-workspace-icon" style={{ background: '#14b8a6' }}>N</div>
              <div className="bento-info">
                <div className="bento-title">nextjs/app-router</div>
                <div className="bento-desc">App Router architecture documentation and migration guides</div>
              </div>
              <div className="bento-meta-side">
                <span>9 specs</span>
                <div className="bento-avatars">
                  <div className="bento-avatar" style={{ background: '#14b8a6' }}>L</div>
                  <div className="bento-avatar" style={{ background: '#22d3ee' }}>D</div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="#" className="bento-card">
            <div className="bento-workspace-icon" style={{ background: '#8b5cf6' }}>P</div>
            <div className="bento-title">prisma/client</div>
            <div className="bento-desc">Client feature specs</div>
            <div className="bento-meta">
              <span>14 specs</span>
              <div className="bento-avatars">
                <div className="bento-avatar" style={{ background: '#8b5cf6' }}>N</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Discover
