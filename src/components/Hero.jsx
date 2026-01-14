function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-sticky-wrapper">
        <div className="hero-workspace-frame">
          {/* Top left: Window controls */}
          <div className="frame-element frame-controls">
            <span className="control red"></span>
            <span className="control yellow"></span>
            <span className="control green"></span>
          </div>

          {/* Top right: Members */}
          <div className="frame-element frame-members">
            <img className="member-avatar" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=60" alt="Member" />
            <img className="member-avatar" src="https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?w=900&auto=format&fit=crop&q=60" alt="Member" />
            <img className="member-avatar" src="https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=900&auto=format&fit=crop&q=60" alt="Member" />
            <button className="member-add">+</button>
          </div>

          {/* Left: File tree */}
          <div className="frame-element frame-files">
            <div className="element-folder"><span className="folder-icon">▾</span> specs</div>
            <div className="element-file active">auth-feature.spec.md</div>
            <div className="element-file">api-design.md</div>
            <div className="element-file">data-model.md</div>
            <div className="element-folder"><span className="folder-icon">▸</span> src</div>
          </div>

          {/* Right: Comment */}
          <div className="frame-element frame-comment">
            <div className="comment-header">
              <img className="comment-avatar" src="https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?w=900&auto=format&fit=crop&q=60" alt="Kate" />
              <span className="comment-author">Kate</span>
              <span className="comment-time">2m</span>
            </div>
            <div className="comment-text">Should we add rate limiting to the OAuth flow?</div>
          </div>

          {/* Bottom: Traces */}
          <div className="frame-element frame-traces">
            <div className="trace-item">
              <span className="trace-badge">TRACE</span>
              <span className="trace-link">auth.ts:47</span>
              <span className="trace-arrow">→</span>
              <span className="trace-tag">REQ-001</span>
            </div>
            <div className="trace-item">
              <span className="trace-badge">TRACE</span>
              <span className="trace-link">session.ts:112</span>
              <span className="trace-arrow">→</span>
              <span className="trace-tag">REQ-002</span>
            </div>
          </div>
        </div>

        <div className="hero-stages">
          <div className="hero-stage stage-initial active" data-stage="initial">
            <div className="hero-content">
              <h1 className="hero-title">Collaborate on spec driven development</h1>
              <p className="hero-tagline">Spec, trace, review as a team</p>
              <div className="hero-input-section">
                <div className="agent-input">
                  <div className="agent-input-container">
                    <div className="agent-input-text" contentEditable="true" data-placeholder="Ask an agent to write a spec for your feature..."></div>
                    <div className="agent-input-footer">
                      <span className="agent-input-hint">Press Enter to generate specs</span>
                      <button className="agent-input-button">Generate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
