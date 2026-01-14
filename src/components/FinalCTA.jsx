import { Link } from 'react-router-dom'

function FinalCTA() {
  return (
    <section className="section section-final">
      <div className="container">
        <div className="content-container">
          <div className="final-section">
            <div className="final-content">
              <div className="final-media">
                <video src="/forest-worker-video.mp4" autoPlay loop muted playsInline></video>
              </div>
              <div className="final-text">
                <h2 className="final-headline">Return to the craft</h2>
                <p className="final-body">Coding agents handle the implementation. Now you can focus on what matters, the intent behind your software and the insights that shape it.</p>
                <p className="final-body">Mod brings teams together to collaborate on specs, context around code, and review to build production grade software.</p>
              </div>
            </div>
            <div className="final-cta">
              <p className="final-cta-lead">Ship faster with specs your whole team can collaborate on.</p>
              <p className="final-cta-headline">Ready to become spec driven?</p>
              <div className="final-cta-actions">
                <Link to="#" className="cta-button">Get Started</Link>
                <Link to="/docs" className="cta-button-outline">Read the Docs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
