function TwoWays() {
  return (
    <section className="section two-ways-section" id="two-ways">
      <div className="container">
        <h2 className="two-ways-headline">Two ways to work</h2>
        <p className="two-ways-subhead">Start local. Go multiplayer when ready.</p>

        <div className="two-ways-grid">
          {/* CLI Box */}
          <div className="way-box way-cli">
            <div className="way-label">Local-first</div>
            <div className="way-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">~/projects/auth</span>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">mod init</span>
                </div>
                <div className="terminal-line output">
                  <span className="terminal-output">✓ Initialized workspace</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">mod spec auth-flow</span>
                </div>
                <div className="terminal-line output">
                  <span className="terminal-output">✓ Created specs/auth-flow.md</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">mod push</span>
                </div>
                <div className="terminal-line output">
                  <span className="terminal-output">✓ Synced to workspace</span>
                </div>
              </div>
            </div>
            <p className="way-desc">CLI and local agents. Works offline. Version controlled. Integrates with your editor.</p>
          </div>

          {/* Web Box */}
          <div className="way-box way-web">
            <div className="way-label">Multiplayer</div>
            <div className="way-webapp">
              <div className="webapp-header">
                <span className="webapp-dot red"></span>
                <span className="webapp-dot yellow"></span>
                <span className="webapp-dot green"></span>
                <span className="webapp-title">mod workspace</span>
              </div>
              <div className="webapp-body">
                <div className="webapp-sidebar">
                  <div className="webapp-folder">specs</div>
                  <div className="webapp-file active">auth-flow.md</div>
                  <div className="webapp-file">api-design.md</div>
                </div>
                <div className="webapp-content">
                  <div className="webapp-line heading"># Auth Flow</div>
                  <div className="webapp-line"></div>
                  <div className="webapp-line">OAuth support with...</div>
                  <div className="webapp-comment">
                    <span className="comment-avatar">S</span>
                    <span className="comment-text">Add rate limiting?</span>
                  </div>
                </div>
                <div className="webapp-cursors">
                  <div className="webapp-cursor blue">Sarah</div>
                  <div className="webapp-cursor green">Mike</div>
                </div>
              </div>
            </div>
            <p className="way-desc">Real-time collaboration. Comments and review. Share with your team instantly.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoWays
