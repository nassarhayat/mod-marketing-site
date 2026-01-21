function Foundation() {
  return (
    <section className="bg-[#050505] py-12 md:py-16 px-4 md:px-8" id="foundation">
      <div className="max-w-[1350px] mx-auto">
        {/* Section header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4 leading-tight">
            The filesystem, reinvented for agents
          </h2>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            Agents are bringing the filesystem back as the platform for context and workflows. Mod makes it collaborative, synced, and version controlled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Card 1 - Real-time sync */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 md:p-6 h-[50vh] md:h-[60vh] flex flex-col transition-all hover:border-white/[0.15] hover:-translate-y-0.5 overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">Real-time sync</h3>
              <p className="text-base md:text-lg text-white/40">
                Every device, always up to date.
              </p>
            </div>
            {/* Illustration - NeoTree style local + Notion style mobile */}
            <div className="flex-1 relative">
              {/* Desktop - NeoTree style file explorer */}
              <div className="absolute -left-8 top-0 bottom-8 w-[220px] bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="p-3 text-sm font-mono">
                  <div className="text-zinc-500 mb-2">~/workspace</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-zinc-600">▼</span>
                      <span>specs</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div className="flex items-center gap-2 text-blue-400 bg-blue-500/10 -mx-3 px-3 py-0.5 rounded">
                        <span className="text-zinc-600">│</span>
                        <span>auth-feature.md</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <span className="text-zinc-600">│</span>
                        <span>api-design.md</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <span className="text-zinc-600">└</span>
                        <span>data-model.md</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 mt-2">
                      <span className="text-zinc-600">▶</span>
                      <span>src</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="text-zinc-600">▶</span>
                      <span>tests</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 mt-2">
                      <span className="text-zinc-700">•</span>
                      <span>package.json</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="text-zinc-700">•</span>
                      <span>README.md</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile - Notion style sidebar */}
              <div className="absolute -right-12 top-0 bottom-8 w-[200px] bg-zinc-950 border border-zinc-800 rounded-[24px] overflow-hidden shadow-2xl">
                {/* Notch */}
                <div className="h-7 bg-zinc-950 flex items-center justify-center relative">
                  <div className="absolute top-2 w-20 h-5 bg-zinc-900 rounded-full"></div>
                </div>
                  <div className="p-2">
                  <div className="text-xs text-zinc-600 px-2 py-1">WORKSPACE</div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 text-sm">
                      <span>📁</span>
                      <span>specs</span>
                    </div>
                    <div className="pl-4 space-y-0.5">
                      <div className="flex items-center gap-2 px-2 py-1.5 bg-zinc-800 rounded text-white text-sm">
                        <span>📄</span>
                        <span>auth-feature</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-500 text-sm">
                        <span>📄</span>
                        <span>api-design</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-500 text-sm">
                        <span>📄</span>
                        <span>data-model</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 text-sm">
                      <span>📁</span>
                      <span>src</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 text-zinc-400 text-sm">
                      <span>📁</span>
                      <span>tests</span>
                    </div>
                  </div>
                  <div className="mt-3 px-2">
                    <div className="text-xs text-zinc-600 py-1">RECENT</div>
                    <div className="text-xs text-zinc-500 py-1">auth-feature edited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Collaboration */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 md:p-6 h-[50vh] md:h-[60vh] flex flex-col transition-all hover:border-white/[0.15] hover:-translate-y-0.5 overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">Collaboration</h3>
              <p className="text-base md:text-lg text-white/40">
                Edit together with your team.
              </p>
            </div>
            {/* Illustration - Collaborative elements */}
            <div className="flex-1 relative">
              {/* Member circles - top right */}
              <div className="absolute top-0 right-0 flex -space-x-2">
                <img className="w-8 h-8 rounded-full object-cover border-2 border-zinc-950" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&auto=format&fit=crop&q=60" alt="Member" />
                <img className="w-8 h-8 rounded-full object-cover border-2 border-zinc-950" src="https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?w=900&auto=format&fit=crop&q=60" alt="Member" />
                <img className="w-8 h-8 rounded-full object-cover border-2 border-zinc-950" src="https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=900&auto=format&fit=crop&q=60" alt="Member" />
                <button className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950 text-zinc-400 text-sm flex items-center justify-center">+</button>
              </div>

              {/* Collaborative text area */}
              <div className="absolute top-12 -left-8 -right-8 -bottom-12 bg-zinc-950 border-x border-zinc-800 rounded-lg overflow-hidden shadow-2xl p-5">
                <div className="text-sm font-mono leading-loose relative">
                  <div className="text-zinc-400 text-base"># Auth Feature</div>
                  <div className="text-zinc-500 mt-4">OAuth flow with rate limiting</div>
                  <div className="text-zinc-500 relative mt-1">
                    for API calls and session
                    <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse"></span>
                    <span className="absolute -top-5 left-36 text-xs bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">Sarah</span>
                  </div>
                  <div className="bg-red-500/10 text-red-400/70 -mx-5 px-5 py-0.5 line-through relative mt-1">
                    - management across services.
                    <span className="absolute left-48 top-1 w-0.5 h-4 bg-red-400"></span>
                    <span className="absolute left-44 -top-5 text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded">Mike</span>
                  </div>
                  <div className="bg-blue-500/10 text-blue-400 -mx-5 px-5 py-0.5">+ token management.</div>
                  <div className="text-zinc-400 mt-4">## Requirements</div>
                  <div className="text-zinc-500 mt-2">- Token refresh handling</div>
                </div>
              </div>

              {/* Comment thread - overlapping */}
              <div className="absolute right-0 top-32 w-32 bg-zinc-900 border border-zinc-700 rounded-lg p-3 shadow-xl z-10">
                <div className="text-xs text-zinc-500">@jake</div>
                <div className="text-sm text-zinc-400 mt-1">Should we add refresh token logic?</div>
                <div className="text-xs text-zinc-600 mt-2">2 replies</div>
              </div>
            </div>
          </div>

          {/* Card 3 - Branching & history */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 md:p-6 h-[50vh] md:h-[60vh] flex flex-col transition-all hover:border-white/[0.15] hover:-translate-y-0.5 overflow-hidden">
            <div className="relative z-10 mb-4">
              <h3 className="text-xl md:text-2xl text-white font-semibold mb-2">Branching & history</h3>
              <p className="text-base md:text-lg text-white/40">
                Branches track files, threads, and traces. Revert anything.
              </p>
            </div>
            {/* Illustration - Changelog entries */}
            <div className="flex-1 relative">
              <div className="absolute top-0 -bottom-12 -left-8 -right-8 bg-zinc-950 border-x border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
                <div className="p-3 space-y-3 overflow-hidden">
                  {/* Change 1 */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="text-zinc-300 text-sm font-medium">Add session management</div>
                      <button className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded">Revert</button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-600 mb-2">
                      <span>Sarah</span>
                      <span>•</span>
                      <span>2 min ago</span>
                      <span>•</span>
                      <span>Claude Sonnet</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="text-zinc-600">●</span>
                        <span className="text-zinc-500">spec-auth-session</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-zinc-600">◈</span>
                        <span className="text-zinc-500">Implement session</span>
                        <span className="text-zinc-600">(4 msgs)</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                        <span className="text-zinc-500">session.ts</span>
                        <span><span className="text-blue-400">+89</span> <span className="text-red-400">-12</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Change 2 */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="text-zinc-300 text-sm font-medium">Add login flow</div>
                      <button className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded">Revert</button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-600 mb-2">
                      <span>Mike</span>
                      <span>•</span>
                      <span>1 hr ago</span>
                      <span>•</span>
                      <span>Claude Opus</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="text-zinc-600">●</span>
                        <span className="text-zinc-500">spec-auth-login</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-zinc-600">◈</span>
                        <span className="text-zinc-500">OAuth impl</span>
                        <span className="text-zinc-600">(6 msgs)</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                        <span className="text-zinc-500">auth.ts</span>
                        <span className="text-blue-400">+47</span>
                      </div>
                    </div>
                  </div>

                  {/* Change 3 - clipped */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="text-zinc-300 text-sm font-medium">Add rate limiting</div>
                      <button className="text-xs text-zinc-500 border border-zinc-700 px-2 py-0.5 rounded">Revert</button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                      <span>Sarah</span>
                      <span>•</span>
                      <span>3 hrs ago</span>
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
