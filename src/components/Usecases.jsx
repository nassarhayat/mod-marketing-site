import { useState } from 'react'
import { InteractiveDemo } from './InteractiveDemo'

function Usecases() {
  const [activeTab, setActiveTab] = useState('spec')

  const tabs = [
    { id: 'spec', label: 'Spec Collaboration' },
    { id: 'agent-context', label: 'Agent Context' },
    { id: 'tracing', label: 'Tracing' },
    { id: 'version-control', label: 'Version Control' },
    { id: 'review', label: 'Code Review' }
  ]

  const descriptions = {
    'spec': 'Collaborate on specs in real-time with your team. Click highlighted text to see comments, expand code traces to see implementations.',
    'agent-context': 'See exactly why your agent made each decision. Full reasoning from spec to implementation with context preserved.',
    'tracing': 'Click any code to see its spec. Click any spec to see the code. Bidirectional traceability with glassware IDs.',
    'version-control': 'Every change tracked automatically. See who did what, when, and why. Revert to any point without losing work.',
    'review': 'Review with full context: requirements coverage, agent reasoning, team comments, and diffs in one view.'
  }

  return (
    <section className="discover-section" id="usecases">
      <div className="container">
        <h2 className="discover-title">Usecases</h2>
        <p className="discover-subtitle">Spec, build, and ship from first idea to production</p>

        {/* Interactive Demo */}
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <InteractiveDemo activeView={activeTab} />
        </div>

        {/* Use case tabs */}
        <div className="usecase-tabs" style={{ maxWidth: '1400px', margin: '1.5rem auto 0' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`usecase-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab description */}
        <div className="usecase-description" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p className="usecase-desc-text">{descriptions[activeTab]}</p>
        </div>
      </div>
    </section>
  )
}

export default Usecases
