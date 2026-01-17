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
    <section className="bg-[#050505] py-16 px-8 md:px-20" id="usecases">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-3">Usecases</h2>
        <p className="text-lg text-white/50 mb-8">Spec, build, and ship from first idea to production</p>

        {/* Interactive Demo */}
        <div className="mb-8">
          <InteractiveDemo activeView={activeTab} />
        </div>

        {/* Use case tabs */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.08] hover:text-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab description */}
        <div className="py-4 text-center max-w-2xl mx-auto">
          <p className="text-white/50 text-base leading-relaxed">{descriptions[activeTab]}</p>
        </div>
      </div>
    </section>
  )
}

export default Usecases
