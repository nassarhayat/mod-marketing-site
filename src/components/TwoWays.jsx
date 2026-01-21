function TwoWays() {
  return (
    <section className="bg-[#050505] py-16 md:py-24 px-4 md:px-8 lg:px-20" id="two-ways">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            Local-first. Multiplayer when ready.
          </h2>
          <p className="text-lg md:text-xl text-white/50">
            Your filesystem, enhanced. Sync to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* CLI Box */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
            <div className="px-4 py-2 border-b border-white/[0.06]">
              <span className="text-xs text-white/40 uppercase tracking-wide font-medium">Local-first</span>
            </div>
            <div className="p-4">
              {/* Terminal */}
              <div className="bg-[#0a0a0a] rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06]">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs text-white/40 ml-2 font-mono">~/projects/auth</span>
                </div>
                <div className="p-4 font-mono text-sm space-y-2">
                  <div className="flex gap-2">
                    <span className="text-white/40">$</span>
                    <span className="text-white">mod init</span>
                  </div>
                  <div className="text-green-400/80 pl-4">✓ Initialized workspace</div>
                  <div className="flex gap-2">
                    <span className="text-white/40">$</span>
                    <span className="text-white">mod spec auth-flow</span>
                  </div>
                  <div className="text-green-400/80 pl-4">✓ Created specs/auth-flow.md</div>
                  <div className="flex gap-2">
                    <span className="text-white/40">$</span>
                    <span className="text-white">mod push</span>
                  </div>
                  <div className="text-green-400/80 pl-4">✓ Synced to workspace</div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-white/50 text-sm">Your filesystem, enhanced. Real-time tracking, rich metadata, works offline.</p>
            </div>
          </div>

          {/* Web Box */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden">
            <div className="px-4 py-2 border-b border-white/[0.06]">
              <span className="text-xs text-white/40 uppercase tracking-wide font-medium">Multiplayer</span>
            </div>
            <div className="p-4">
              {/* Web App */}
              <div className="bg-[#0a0a0a] rounded-lg overflow-hidden">
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06]">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs text-white/40 ml-2">mod workspace</span>
                </div>
                <div className="flex min-h-[140px]">
                  {/* Sidebar */}
                  <div className="w-32 border-r border-white/[0.06] p-2 text-xs font-mono">
                    <div className="text-white/40 mb-1">specs</div>
                    <div className="text-white bg-white/10 px-2 py-1 rounded mb-1">auth-flow.md</div>
                    <div className="text-white/40 px-2 py-1">api-design.md</div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-3 relative">
                    <div className="text-white font-medium text-sm mb-2"># Auth Flow</div>
                    <div className="text-white/50 text-xs mb-3">OAuth support with...</div>
                    {/* Comment */}
                    <div className="bg-white/[0.05] rounded-lg p-2 flex items-start gap-2 max-w-[180px]">
                      <span className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-[10px] text-blue-300 font-medium flex-shrink-0">S</span>
                      <span className="text-white/70 text-xs">Add rate limiting?</span>
                    </div>
                    {/* Cursors */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">Sarah</span>
                      <span className="text-[10px] bg-green-500/20 text-green-300 px-1.5 py-0.5 rounded">Mike</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="text-white/50 text-sm">Sync to collaborate. Comments, reviews, shared context across your team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoWays
