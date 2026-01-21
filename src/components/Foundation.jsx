function Foundation() {
  return (
    <section className="bg-[#050505] py-12 md:py-16 px-4 md:px-8" id="foundation">
      <div className="max-w-[1350px] mx-auto">
        {/* Section header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 leading-tight">
            The filesystem, reinvented for agents
          </h2>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
            Real-time sync across devices. Rich change tracking with threads, traces, and comments. Branch workspaces you can revert with full context.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {/* Left - Real-time sync */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 h-[60vh] md:h-[70vh] flex flex-col transition-all hover:border-white/[0.15] hover:-translate-y-0.5 overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-lg md:text-xl text-white/80 font-medium mb-2">Real-time sync</h3>
              <p className="text-sm md:text-base text-white/40">
                Every device, every collaborator, always in sync.
              </p>
            </div>
            {/* Illustration - 3 layers - clipped at edges */}
            <div className="flex-1 relative">
              {/* Layer 1 - Finder style grid (bottom left, partially clipped) */}
              <div className="absolute -bottom-8 -left-12 w-[360px] h-[260px] bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="h-7 bg-zinc-900 border-b border-zinc-800 flex items-center px-3 gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700"></span>
                  <span className="text-[10px] text-zinc-500 ml-3">~/projects</span>
                </div>
                <div className="p-4 grid grid-cols-4 gap-3">
                  {['specs', 'src', 'tests', 'docs', 'api.md', 'auth.ts', 'index.ts', 'pkg.json', 'utils', 'config', 'readme', 'types.ts'].map((name, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5">
                      <div className={`w-10 h-10 rounded-lg ${i < 4 || i === 8 || i === 9 ? 'bg-zinc-800' : 'bg-zinc-900'} border border-zinc-700/50 flex items-center justify-center`}>
                        <span className="text-[10px] text-zinc-500">{i < 4 || i === 8 || i === 9 ? '📁' : '📄'}</span>
                      </div>
                      <span className="text-[8px] text-zinc-500 truncate w-full text-center">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer 2 - Browser editor (middle, overlapping) */}
              <div className="absolute bottom-24 left-32 w-[340px] h-[220px] bg-zinc-950 border border-zinc-700 rounded-lg overflow-hidden shadow-2xl">
                <div className="h-7 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-400">auth-spec.md</span>
                    <span className="text-[8px] text-zinc-600">•</span>
                    <span className="text-[8px] text-zinc-500">editing</span>
                  </div>
                  <div className="flex -space-x-1.5">
                    <span className="w-5 h-5 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[8px] text-zinc-400">S</span>
                    <span className="w-5 h-5 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-[8px] text-zinc-400">M</span>
                  </div>
                </div>
                <div className="p-4 text-[11px] font-mono leading-relaxed">
                  <div className="text-zinc-400"># Auth Feature</div>
                  <div className="text-zinc-500 mt-2">OAuth flow with rate limiting</div>
                  <div className="text-zinc-500 relative">
                    for API calls and session
                    <span className="inline-block w-0.5 h-4 bg-zinc-400 ml-0.5 animate-pulse"></span>
                    <span className="absolute -top-4 left-32 text-[8px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">Sarah</span>
                  </div>
                  <div className="text-zinc-500 mt-2">management across services.</div>
                  <div className="text-zinc-400 mt-3">## Requirements</div>
                  <div className="text-zinc-500 mt-1">- Token refresh handling</div>
                  <div className="text-zinc-500">- Rate limit: 100 req/min</div>
                </div>
              </div>

              {/* Layer 3 - Mobile (top right, partially clipped) */}
              <div className="absolute -bottom-4 -right-8 w-[140px] h-[280px] bg-zinc-950 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="h-6 bg-zinc-900 flex items-center justify-center border-b border-zinc-800">
                  <span className="text-[9px] text-zinc-500 font-medium">mod</span>
                </div>
                <div className="p-2 space-y-2">
                  <div className="bg-zinc-900 rounded-lg p-2 border border-zinc-800">
                    <div className="text-[8px] text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
                      <span>Updated auth spec</span>
                    </div>
                    <div className="text-[7px] text-zinc-600 mt-1">Sarah • just now</div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2.5 border border-zinc-700">
                    <div className="text-[8px] text-zinc-400 font-mono"># Auth Feature</div>
                    <div className="text-[7px] text-zinc-500 font-mono mt-1">OAuth flow with rate</div>
                    <div className="text-[7px] text-zinc-500 font-mono">limiting for API...</div>
                  </div>
                  <div className="bg-zinc-900 rounded-lg p-2 border border-zinc-800">
                    <div className="text-[7px] text-zinc-500">Agent response</div>
                    <div className="text-[8px] text-zinc-400 mt-1">I've updated the spec with the rate limiting requirements.</div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="flex-1 h-7 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center">
                      <span className="text-[8px] text-zinc-500">💬</span>
                    </div>
                    <div className="flex-1 h-7 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center">
                      <span className="text-[8px] text-zinc-500">📄</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Rich change tracking */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 h-[60vh] md:h-[70vh] flex flex-col transition-all hover:border-white/[0.15] hover:-translate-y-0.5 overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-lg md:text-xl text-white/80 font-medium mb-2">Rich change tracking</h3>
              <p className="text-sm md:text-base text-white/40">
                Files, threads, traces, comments. Revert anything.
              </p>
            </div>
            {/* Illustration - Changelog entries without branch header */}
            <div className="flex-1 relative">
              <div className="absolute -bottom-16 -left-8 -right-8 bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl" style={{ height: 'calc(100% + 60px)' }}>
                {/* Changelog entries */}
                <div className="p-3 space-y-3 overflow-hidden">
                  {/* Change 1 */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-zinc-300 text-[11px] font-medium">Add session management</div>
                      <button className="text-[9px] text-zinc-500 border border-zinc-700 px-1.5 py-0.5 rounded">Revert</button>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div>
                        <div className="text-zinc-600 mb-0.5">Traces</div>
                        <div className="flex items-center gap-1.5 ml-2">
                          <span className="text-zinc-500">●</span>
                          <span className="text-zinc-400">spec-auth-session</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-zinc-600 mb-0.5">Threads</div>
                        <div className="flex items-center gap-1.5 ml-2">
                          <span className="text-zinc-500">◈</span>
                          <span className="text-zinc-400">Implement session store</span>
                          <span className="text-zinc-600">(4 msgs)</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-zinc-600 mb-0.5">Comments</div>
                        <div className="flex items-center gap-1.5 ml-2">
                          <span className="text-zinc-500">○</span>
                          <span className="text-zinc-500">@mike</span>
                          <span className="text-zinc-400">add token refresh</span>
                        </div>
                      </div>
                      <div className="pt-1.5 border-t border-zinc-800">
                        <div className="text-zinc-600 mb-0.5">Files</div>
                        <div className="flex items-center justify-between ml-2">
                          <span className="text-zinc-400">session.ts</span>
                          <span><span className="text-blue-400">+89</span> <span className="text-red-400">-12</span></span>
                        </div>
                        <div className="flex items-center justify-between ml-2">
                          <span className="text-zinc-400">session.spec.ts</span>
                          <span className="text-blue-400">+34</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Change 2 */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-zinc-300 text-[11px] font-medium">Add login flow</div>
                      <button className="text-[9px] text-zinc-500 border border-zinc-700 px-1.5 py-0.5 rounded">Revert</button>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div>
                        <div className="text-zinc-600 mb-0.5">Traces</div>
                        <div className="flex items-center gap-1.5 ml-2">
                          <span className="text-zinc-500">●</span>
                          <span className="text-zinc-400">spec-auth-login</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-zinc-600 mb-0.5">Threads</div>
                        <div className="flex items-center gap-1.5 ml-2">
                          <span className="text-zinc-500">◈</span>
                          <span className="text-zinc-400">OAuth implementation</span>
                          <span className="text-zinc-600">(6 msgs)</span>
                        </div>
                      </div>
                      <div className="pt-1.5 border-t border-zinc-800">
                        <div className="text-zinc-600 mb-0.5">Files</div>
                        <div className="flex items-center justify-between ml-2">
                          <span className="text-zinc-400">auth.ts</span>
                          <span className="text-blue-400">+47</span>
                        </div>
                        <div className="flex items-center justify-between ml-2">
                          <span className="text-zinc-400">auth.spec.ts</span>
                          <span className="text-blue-400">+23</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Change 3 - partially visible, clipped */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="text-zinc-300 text-[11px] font-medium">Add rate limiting</div>
                      <button className="text-[9px] text-zinc-500 border border-zinc-700 px-1.5 py-0.5 rounded">Revert</button>
                    </div>
                    <div className="space-y-1.5 text-[10px]">
                      <div>
                        <div className="text-zinc-600 mb-0.5">Traces</div>
                        <div className="flex items-center gap-1.5 ml-2">
                          <span className="text-zinc-500">●</span>
                          <span className="text-zinc-400">spec-rate-limiting</span>
                        </div>
                      </div>
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

export default Foundation
