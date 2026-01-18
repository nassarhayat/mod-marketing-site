import { useState } from 'react'
import { CLIDemo } from './CLIDemo'
import { WebDemo } from './WebDemo'

function Usecases() {
  const [activeTab, setActiveTab] = useState('spec')
  const [demoMode, setDemoMode] = useState('cli')

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
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Usecases</h2>
            <p className="text-lg text-white/50">Spec, build, and ship from first idea to production</p>
          </div>

          {/* Demo Mode Toggle */}
          <div className="inline-flex items-center bg-zinc-900 rounded-lg p-1">
            <button
              onClick={() => setDemoMode('cli')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                demoMode === 'cli'
                  ? 'bg-white text-black'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              CLI
            </button>
            <button
              onClick={() => setDemoMode('web')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                demoMode === 'web'
                  ? 'bg-white text-black'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Web
            </button>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-8">
          {demoMode === 'cli' ? (
            <CLIDemo activeView={activeTab} />
          ) : (
            <WebDemo activeView={activeTab} />
          )}
        </div>

        {/* Use case tabs */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
        <div className="py-4 text-center max-w-7xl mx-auto">
          <p className="text-white/50 text-xl leading-relaxed">{descriptions[activeTab]}</p>
        </div>
      </div>
    </section>
  )
}

export default Usecases
