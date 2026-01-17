function Hero() {
  return (
    <section className="min-h-[800px] bg-[#050505] relative overflow-hidden pt-16 px-4 pb-4" id="hero">
      {/* Bordered workspace container */}
      <div className="max-w-[1400px] mx-auto h-[calc(100vh-6rem)] border border-white/[0.08] rounded-2xl relative overflow-hidden">
        {/* Floating UI elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left: Window controls */}
          <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/[0.03] backdrop-blur-sm rounded-lg px-3 py-2 border border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>

          {/* Top right: Members */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/[0.03] backdrop-blur-sm rounded-lg px-3 py-2 border border-white/[0.06]">
            <img className="w-7 h-7 rounded-full object-cover border-2 border-[#050505]" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=60" alt="Member" />
            <img className="w-7 h-7 rounded-full object-cover border-2 border-[#050505] -ml-2" src="https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?w=900&auto=format&fit=crop&q=60" alt="Member" />
            <img className="w-7 h-7 rounded-full object-cover border-2 border-[#050505] -ml-2" src="https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=900&auto=format&fit=crop&q=60" alt="Member" />
            <button className="w-7 h-7 rounded-full bg-white/10 text-white/60 text-sm flex items-center justify-center ml-1 hover:bg-white/20 transition-colors pointer-events-auto">+</button>
          </div>

          {/* Left: File tree */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/[0.03] backdrop-blur-sm rounded-lg p-3 border border-white/[0.06] text-xs font-mono">
            <div className="text-white/50 flex items-center gap-1.5 mb-1"><span className="text-[10px]">▾</span> specs</div>
            <div className="text-white ml-3 mb-0.5 bg-white/10 px-2 py-0.5 rounded">auth-feature.spec.md</div>
            <div className="text-white/40 ml-3 mb-0.5 px-2 py-0.5">api-design.md</div>
            <div className="text-white/40 ml-3 mb-1 px-2 py-0.5">data-model.md</div>
            <div className="text-white/50 flex items-center gap-1.5"><span className="text-[10px]">▸</span> src</div>
          </div>

          {/* Right: Comment */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/[0.03] backdrop-blur-sm rounded-lg p-3 border border-white/[0.06] max-w-[240px]">
            <div className="flex items-center gap-2 mb-2">
              <img className="w-6 h-6 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?w=900&auto=format&fit=crop&q=60" alt="Kate" />
              <span className="text-white text-xs font-medium">Kate</span>
              <span className="text-white/30 text-xs">2m</span>
            </div>
            <div className="text-white/70 text-sm leading-relaxed">Should we add rate limiting to the OAuth flow?</div>
          </div>

          {/* Bottom: Traces */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/[0.03] backdrop-blur-sm rounded-lg p-3 border border-white/[0.06] flex gap-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded text-[10px] font-medium">TRACE</span>
              <span className="text-white/60 font-mono">auth.ts:47</span>
              <span className="text-white/30">→</span>
              <span className="text-yellow-500 font-mono">REQ-001</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded text-[10px] font-medium">TRACE</span>
              <span className="text-white/60 font-mono">session.ts:112</span>
              <span className="text-white/30">→</span>
              <span className="text-yellow-500 font-mono">REQ-002</span>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight tracking-tight">
              Collaborate on spec driven development
            </h1>
            <p className="text-xl text-white/50 mb-10">Spec, trace, review as a team</p>

            {/* Agent input */}
            <div className="bg-white/[0.08] border border-white/[0.08] rounded-xl p-1 max-w-xl mx-auto">
              <div className="min-h-[140px] px-4 py-3 text-left">
                <div
                  className="text-white/40 text-base outline-none min-h-[40px] empty:before:content-[attr(data-placeholder)] before:text-white/30"
                  contentEditable="true"
                  data-placeholder="Ask an agent to write a spec for your feature..."
                ></div>
              </div>
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06]">
                <span className="text-xs text-white/30">Press Enter to generate specs</span>
                <button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors">
                  Generate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
