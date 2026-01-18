import { Link } from 'react-router-dom'

const templates = [
  { name: 'Feature Spec', creator: 'Sarah Chen', creatorInitial: 'S', summary: 'Define new product features with clear requirements and acceptance criteria.', sections: ['Overview', 'Requirements', 'User Stories'], saves: 1243, downloads: 892 },
  { name: 'Design Doc', creator: 'Marcus Johnson', creatorInitial: 'M', summary: 'Document technical architecture decisions and system design trade-offs.', sections: ['Context', 'Architecture', 'Trade-offs'], saves: 987, downloads: 654 },
  { name: 'RFC', creator: 'Alex Rivera', creatorInitial: 'A', summary: 'Propose changes and gather feedback from stakeholders before implementation.', sections: ['Problem', 'Proposal', 'Alternatives'], saves: 756, downloads: 512 },
  { name: 'PRD', creator: 'Jordan Lee', creatorInitial: 'J', summary: 'Outline product goals, features, and success metrics for new initiatives.', sections: ['Goals', 'Features', 'Success Metrics'], saves: 1102, downloads: 789 },
  { name: 'API Spec', creator: 'Taylor Kim', creatorInitial: 'T', summary: 'Specify REST or GraphQL endpoints with authentication and examples.', sections: ['Endpoints', 'Auth', 'Examples'], saves: 634, downloads: 421 },
  { name: 'Test Plan', creator: 'Casey Morgan', creatorInitial: 'C', summary: 'Plan testing strategy with scope, test cases, and coverage goals.', sections: ['Scope', 'Test Cases', 'Coverage'], saves: 445, downloads: 298 },
  { name: 'Security Review', creator: 'Robin Patel', creatorInitial: 'R', summary: 'Identify threats, document mitigations, and track security audits.', sections: ['Threats', 'Mitigations', 'Audit'], saves: 523, downloads: 367 },
  { name: 'Migration Guide', creator: 'Drew Wilson', creatorInitial: 'D', summary: 'Step-by-step migration instructions with rollback procedures.', sections: ['Before', 'Steps', 'Rollback'], saves: 389, downloads: 256 },
]

const workspaces = [
  { name: 'stripe/connect', desc: 'Connect platform design docs and API specifications', specs: 21, branches: 4, files: 89, members: ['T', 'R', 'S'] },
  { name: 'vercel/sdk', desc: 'AI SDK feature specs and integration guides', specs: 15, branches: 3, files: 52, members: ['J', 'M'] },
  { name: 'openai/agents', desc: 'Agent framework architecture and patterns', specs: 8, branches: 2, files: 34, members: ['A', 'K', 'L'] },
  { name: 'langchain/core', desc: 'Core library specs and extension points', specs: 18, branches: 5, files: 71, members: ['H', 'P'] },
  { name: 'nextjs/app-router', desc: 'App Router architecture and migration guides', specs: 9, branches: 2, files: 28, members: ['L', 'D', 'G'] },
  { name: 'prisma/client', desc: 'Client feature specs and query patterns', specs: 14, branches: 3, files: 45, members: ['N'] },
  { name: 'react/core', desc: 'React internals documentation and RFCs', specs: 31, branches: 8, files: 124, members: ['D', 'S', 'A', 'M'] },
  { name: 'tailwind/ui', desc: 'Component library specs and design tokens', specs: 23, branches: 4, files: 67, members: ['A', 'S'] },
]

function Discover() {
  return (
    <section className="bg-[#050505] py-12 md:py-16 px-4 md:px-8 lg:px-20" id="discover">
      <div className="max-w-[1400px] mx-auto">
        {/* Discover Templates */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Discover Templates</h2>
          <p className="text-base md:text-lg text-white/50 mb-6 md:mb-8">Start your next spec with a template ready to customize</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {templates.map((template, index) => (
              <Link to="#" className="group flex flex-col no-underline h-full" key={index}>
                <div className="flex-1 min-h-[120px] md:min-h-[140px] rounded-xl border border-white/[0.06] bg-white/[0.08] p-3 md:p-4 flex flex-col mb-3 transition-all hover:border-white/[0.15] hover:-translate-y-0.5">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="text-sm md:text-base font-medium text-white/90 mb-1">
		    {template.summary}
                      </div>
                      <div className="text-xs md:text-[13px] text-white/50 leading-relaxed line-clamp-3">
                        {template.sections.map(s => `#${s}`).join(', ')}
                      </div>
                    </div>
                    <div className="flex gap-2 md:gap-3 pt-2">
                      <span className="text-[10px] md:text-xs text-white/30">{template.saves.toLocaleString()} saves</span>
                      <span className="text-[10px] md:text-xs text-white/30">{template.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="text-sm font-medium text-white/90 mb-1 group-hover:text-white transition-colors">
                    {template.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-[18px] h-[18px] rounded-full bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white/60">
                      {template.creatorInitial}
                    </span>
                    <span className="text-xs text-white/40">{template.creator}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Discover Workspaces */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Discover Workspaces</h2>
          <p className="text-base md:text-lg text-white/50 mb-6 md:mb-8">See what others are building and get inspired</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {workspaces.map((workspace, index) => (
              <Link to="#" className="group flex flex-col no-underline h-full" key={index}>
                <div className="flex-1 min-h-[120px] md:min-h-[140px] rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 md:p-4 flex flex-col transition-all hover:border-white/[0.15] hover:-translate-y-0.5">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm md:text-base font-medium text-white/90">
                          {workspace.name}
                        </div>
                        <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white/60">
                          {workspace.members.length}
                        </span>
                      </div>
                      <div className="text-xs md:text-[13px] text-white/50 leading-relaxed line-clamp-2">
                        {workspace.desc}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-2 md:gap-x-3 gap-y-1 pt-2">
                      <span className="text-[10px] md:text-xs text-white/30">{workspace.specs} specs</span>
                      <span className="text-[10px] md:text-xs text-white/30">{workspace.branches} branches</span>
                      <span className="text-[10px] md:text-xs text-white/30">{workspace.files} files</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover
