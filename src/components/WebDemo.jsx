import { useState, useEffect, useRef } from "react"
import { MessageCircle } from "lucide-react"

const SPINNER_FRAMES = ['·', '✻', '✽', '✶', '✳', '✢']

function Spinner() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % SPINNER_FRAMES.length)
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return <span style={{ color: '#C15F3C' }}>{SPINNER_FRAMES[frame]}</span>
}

export function WebDemo({ activeView = 'spec' }) {
  const [expandedSections, setExpandedSections] = useState(
    new Set(['code:create-task-trace-0'])
  )
  const [internalView, setInternalView] = useState('workspace')
  const [selectedFile, setSelectedFile] = useState(null)

  // Map activeView prop to internal view
  const getViewFromActiveView = (av) => {
    switch (av) {
      case 'spec':
        return 'spec-collab'
      case 'tracing':
        return 'tracing'
      case 'agent-context':
        return 'agent'
      case 'version-control':
        return 'changelog'
      case 'review':
        return 'review'
      default:
        return 'workspace'
    }
  }

  const currentView = getViewFromActiveView(activeView)

  const toggleSection = (section) => {
    const key = `${section.type}:${section.id}`
    setExpandedSections(prev => {
      const next = new Set(prev)
      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }
      return next
    })
  }

  const isSectionExpanded = (type, id) => {
    return expandedSections.has(`${type}:${id}`)
  }

  const openFile = (name, path) => {
    setSelectedFile({ name, path })
    setInternalView('file')
  }

  const closeFile = () => {
    setSelectedFile(null)
    setInternalView('workspace')
  }

  return (
    <div className="w-full min-w-0">
      <div className="bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden font-mono text-sm h-[600px] flex flex-col">
        {/* Mac window buttons */}
        <div className="flex items-center justify-between p-2 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-zinc-500">mod workspace</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors text-xs">
              Share
            </button>
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <MessageCircle size={14} />
            </button>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Main content - each view handles its own layout */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {currentView === 'spec-collab' ? (
              <SpecCollaborationView />
            ) : currentView === 'tracing' ? (
              <WebTracingView />
            ) : currentView === 'review' ? (
              <BranchReviewView onClose={closeFile} />
            ) : currentView === 'agent' ? (
              <WebAgentContextView />
            ) : currentView === 'changelog' ? (
              <WebVersionControlView />
            ) : (
              <WorkspaceView
                activeView={activeView}
                isSectionExpanded={isSectionExpanded}
                onToggleSection={toggleSection}
                onOpenFile={openFile}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Sidebar({ currentView, activeView, selectedFile, onSelectWorkspace, onSelectFile, onSelectReview }) {
  return (
    <div className="w-40 border-r border-zinc-800 overflow-y-auto text-xs flex-shrink-0 demo-scrollbar">
      <div className="p-2 space-y-1">
        <div className="flex items-center gap-1.5 text-zinc-500 py-1">
          <span className="text-[10px]">▼</span>
          <span>specs</span>
        </div>
        <div className="ml-3 space-y-0.5">
          <div
            onClick={onSelectWorkspace}
            className={`flex items-center gap-1.5 py-0.5 px-1.5 rounded cursor-pointer ${
              (currentView === 'workspace' || currentView === 'agent' || currentView === 'changelog') && !selectedFile
                ? 'bg-zinc-800 text-white'
                : 'text-zinc-400 hover:bg-zinc-800'
            }`}
          >
            <span className="text-zinc-500">◇</span>
            <span>workspace.md</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-zinc-500 py-1 mt-2">
          <span className="text-[10px]">▼</span>
          <span>src</span>
        </div>
        <div className="ml-3 space-y-0.5">
          {['tasks.ts', 'tasks.test.ts', 'storage.ts', 'filter.ts'].map(file => (
            <div
              key={file}
              onClick={() => onSelectFile(file, `src/${file}`)}
              className={`flex items-center gap-1.5 py-0.5 px-1.5 rounded cursor-pointer ${
                selectedFile?.name === file ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              <span className="text-zinc-500">◇</span>
              <span>{file}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-zinc-500 py-1 mt-2">
          <span className="text-[10px]">▼</span>
          <span>reviews</span>
        </div>
        <div className="ml-3 space-y-0.5">
          <div
            onClick={onSelectReview}
            className={`flex items-center gap-1.5 py-0.5 px-1.5 rounded cursor-pointer ${
              currentView === 'review' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800'
            }`}
          >
            <span className="text-purple-400">○</span>
            <span>main ← feat</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkspaceView({ activeView, isSectionExpanded, onToggleSection, onOpenFile }) {
  const showTraceHighlight = activeView === 'tracing'

  return (
    <div className="md:p-6 p-4 overflow-y-auto overflow-x-hidden flex-1 demo-scrollbar">
      <div className="md:max-w-[80%] max-w-full mx-auto space-y-6">
        <h1 className="md:text-xl text-lg font-semibold text-zinc-100 mb-6">Requirements</h1>

        <RequirementBlock
          id="create-task"
          glasswareId="3b55e97d"
          text="Users can create tasks with a title"
          onOpenFile={onOpenFile}
          showTraceHighlight={showTraceHighlight}
          highlights={[
            {
              text: "create tasks",
              commentThread: [
                { author: "Ben", text: "Should we add due dates?" },
                { author: "Frances", text: "Good idea - let's add it in the next iteration" }
              ]
            }
          ]}
          traces={[
            {
              file: "tasks.ts",
              line: 1,
              changes: "+12 -0",
              edits: 3,
              snippet: `export function createTask(title: string): Task {
+ if (!title.trim()) {
+   throw new Error("Title required")
+ }
+ return {
+   id: crypto.randomUUID(),
+   title: title.trim(),
+   completed: false
+ }
}`,
              reasoning: "Created task factory with title validation to prevent empty tasks.",
              comments: 2,
              commentThread: [
                { author: "Frances", text: "Nice! Should we add priority levels?" },
                { author: "Ben", text: "Let's keep it simple for now" }
              ]
            },
            {
              file: "tasks.test.ts",
              line: 3,
              changes: "+14 -0",
              edits: 2,
              snippet: `describe("createTask", () => {
+ it("creates task with title", () => {
+   const task = createTask("Buy milk")
+   expect(task.title).toBe("Buy milk")
+ })
})`,
              reasoning: "Added tests for task creation and validation.",
              comments: 1,
              commentThread: [
                { author: "Frances", text: "Could we add more edge cases?" }
              ]
            }
          ]}
          isSectionExpanded={isSectionExpanded}
          onToggleSection={onToggleSection}
        />

        <RequirementBlock
          id="persist-tasks"
          glasswareId="a7f3d2c1"
          text="Tasks must persist across browser sessions"
          onOpenFile={onOpenFile}
          showTraceHighlight={showTraceHighlight}
          highlights={[
            {
              text: "persist",
              commentThread: [
                { author: "Ben", text: "localStorage works great for this!" }
              ]
            }
          ]}
          traces={[
            {
              file: "storage.ts",
              line: 1,
              changes: "+15 -0",
              edits: 4,
              snippet: `export class TaskStorage {
+ save(tasks: Task[]): void {
+   localStorage.setItem(
+     this.key,
+     JSON.stringify(tasks)
+   )
+ }
}`,
              reasoning: "Implemented localStorage persistence for tasks with JSON serialization.",
              comments: 2,
              commentThread: [
                { author: "Frances", text: "What if localStorage is full?" },
                { author: "Ben", text: "Good point - we should add error handling" }
              ]
            }
          ]}
          isSectionExpanded={isSectionExpanded}
          onToggleSection={onToggleSection}
        />

        <RequirementBlock
          id="filter-tasks"
          glasswareId="8e2c9f4a"
          text="Users can filter tasks by status"
          onOpenFile={onOpenFile}
          showTraceHighlight={showTraceHighlight}
          highlights={[
            {
              text: "filter tasks",
              commentThread: [
                { author: "Frances", text: "The filter UI is in PR #234" }
              ]
            }
          ]}
          traces={[
            {
              file: "filter.ts",
              line: 1,
              changes: "+13 -0",
              edits: 2,
              snippet: `export function filterTasks(
  tasks: Task[],
  filter: "all" | "active" | "done"
): Task[] {
+ switch (filter) {
+   case "active":
+     return tasks.filter(t => !t.completed)
+   case "done":
+     return tasks.filter(t => t.completed)
+ }
}`,
              reasoning: "Added filter function to show all, active, or completed tasks based on user selection.",
              comments: 1,
              commentThread: [
                { author: "Ben", text: "The filter buttons look great!" }
              ]
            }
          ]}
          isSectionExpanded={isSectionExpanded}
          onToggleSection={onToggleSection}
        />
      </div>
    </div>
  )
}

function WebAgentContextView() {
  const specContent = {
    title: 'Task Management System',
    abstract: 'A lightweight task management module for tracking todos with browser persistence and filtering capabilities.',
    problem: 'Users need a simple way to track tasks that persists across sessions without requiring a backend or account creation.',
    approach: 'Implement a client-side task system using localStorage for persistence, with a clean API for CRUD operations and status filtering.',
    requirements: [
      { id: 'create-task', text: 'Users can create tasks with a title', status: 'implemented', glasswareId: '3b55e97d' },
      { id: 'persist-tasks', text: 'Tasks must persist across browser sessions', status: 'implemented', glasswareId: 'a7f3d2c1' },
      { id: 'filter-tasks', text: 'Users can filter tasks by status', status: 'in-progress', glasswareId: '8e2c9f4a' }
    ]
  }

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left panel - Agent Thread */}
      <div className="w-1/2 border-r border-zinc-800 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-3 demo-scrollbar text-sm">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <span style={{ color: '#C15F3C' }} className="text-xs">✻</span>
            </div>
            <div className="text-zinc-300">I'll implement the task system based on your spec.</div>
          </div>

          <div className="ml-9 text-zinc-500 text-xs space-y-1">
            <div>✓ Read workspace.md</div>
            <div>✓ Parsed 3 requirements</div>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <span style={{ color: '#C15F3C' }} className="text-xs">✻</span>
            </div>
            <div className="text-zinc-300">Starting with task creation...</div>
          </div>

          <div className="ml-9 text-zinc-500 text-xs space-y-1">
            <div>→ Writing src/tasks.ts</div>
            <div>→ Writing src/tasks.test.ts</div>
            <div className="text-yellow-600">+ Linked to create-task (3b55e97d)</div>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <Spinner />
            </div>
            <div className="text-zinc-300">Implementing persistence layer...</div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800">
            <div className="flex gap-3 items-start">
              <img src={avatars.Frances} alt="Frances" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
              <div className="bg-zinc-900 rounded-lg px-3 py-2 text-sm text-zinc-300">
                Should we add priority levels to tasks?
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <img src={avatars.Ben} alt="Ben" className="w-6 h-6 rounded-full object-cover flex-shrink-0" />
            <div className="bg-zinc-900 rounded-lg px-3 py-2 text-sm text-zinc-300">
              Let's keep it simple for v1
            </div>
          </div>
        </div>

        {/* GUI Input */}
        <div className="border-t border-zinc-800 p-3 flex-shrink-0">
          <div className="flex items-center gap-2 bg-zinc-900 rounded-lg border border-zinc-700 px-3 py-2">
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Message Claude..."
              className="flex-1 bg-transparent text-zinc-300 text-sm outline-none"
              disabled
            />
            <button className="bg-white text-black px-3 py-1 rounded-md text-xs font-medium hover:bg-zinc-200 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Right panel - Richtext Editor */}
      <div className="w-1/2 flex flex-col overflow-hidden bg-zinc-950">
        <div className="flex-1 overflow-y-auto py-4 px-8 demo-scrollbar">
          <div className="group relative mb-4">
            <div className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab text-xs">⋮⋮</div>
            <h1 className="text-xl font-bold text-zinc-100">{specContent.title}</h1>
          </div>

          <div className="group relative mb-3">
            <div className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab text-xs">⋮⋮</div>
            <div className="py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Abstract</h2>
              <p className="text-sm text-zinc-300">{specContent.abstract}</p>
            </div>
          </div>

          <div className="group relative mb-3">
            <div className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab text-xs">⋮⋮</div>
            <div className="py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Problem</h2>
              <p className="text-sm text-zinc-300">{specContent.problem}</p>
            </div>
          </div>

          <div className="group relative mb-4">
            <div className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab text-xs">⋮⋮</div>
            <div className="py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Approach</h2>
              <p className="text-sm text-zinc-300">{specContent.approach}</p>
            </div>
          </div>

          <div className="group relative mb-2">
            <div className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab text-xs">⋮⋮</div>
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider py-1">Requirements</h2>
          </div>

          {specContent.requirements.map((req) => (
            <div key={req.id} className="group relative mb-1">
              <div className="absolute -left-6 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab text-xs">⋮⋮</div>
              <div className="flex items-start gap-2 py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
                <button className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                  req.status === 'implemented' ? 'bg-blue-500 border-blue-500 text-white' : 'border-zinc-600'
                }`}>
                  {req.status === 'implemented' && <span className="text-xs">✓</span>}
                </button>
                <span className={`text-sm ${req.status === 'implemented' ? 'text-zinc-400' : 'text-zinc-200'}`}>
                  {req.text}
                  <span className="text-yellow-600/60 text-xs font-mono ml-2">{req.glasswareId}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SpecCollaborationView() {
  const [expandedFiles, setExpandedFiles] = useState(new Set(['tasks.ts']))

  const specContent = {
    title: 'Task Management System - WEb',
    abstract: 'A lightweight task management module for tracking todos with browser persistence and filtering capabilities.',
    problem: 'Users need a simple way to track tasks that persists across sessions without requiring a backend or account creation.',
    approach: 'Implement a client-side task system using localStorage for persistence, with a clean API for CRUD operations and status filtering.',
    requirements: [
      {
        id: 'create-task',
        text: 'Users can create tasks with a title',
        status: 'implemented',
        glasswareId: '3b55e97d'
      },
      {
        id: 'persist-tasks',
        text: 'Tasks must persist across browser sessions',
        status: 'implemented',
        glasswareId: 'a7f3d2c1'
      },
      {
        id: 'filter-tasks',
        text: 'Users can filter tasks by status',
        status: 'in-progress',
        glasswareId: '8e2c9f4a'
      }
    ]
  }

  const changedFiles = [
    { name: 'tasks.ts', additions: 12, deletions: 0, diff: `export function createTask(title: string): Task {
+ if (!title.trim()) {
+   throw new Error("Title required")
+ }
+ return {
+   id: crypto.randomUUID(),
+   title: title.trim(),
+   completed: false
+ }
}` },
    { name: 'storage.ts', additions: 15, deletions: 0, diff: `export class TaskStorage {
+ save(tasks: Task[]): void {
+   localStorage.setItem(
+     this.key,
+     JSON.stringify(tasks)
+   )
+ }
}` },
    { name: 'filter.ts', additions: 13, deletions: 0, diff: `export function filterTasks(
  tasks: Task[],
  filter: "all" | "active" | "done"
): Task[] {
+ switch (filter) {
+   case "active":
+     return tasks.filter(t => !t.completed)
+   case "done":
+     return tasks.filter(t => t.completed)
+ }
}` }
  ]

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left panel - Agent Thread (1/4) */}
      <div className="w-1/4 border-r border-zinc-800 flex flex-col overflow-hidden">
        <div className="p-3 flex-shrink-0">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Agent Thread</div>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3 demo-scrollbar text-xs">
          <div className="flex items-start gap-2">
            <span style={{ color: '#C15F3C' }}>✻</span>
            <div className="text-zinc-400">Reading your spec...</div>
          </div>
          <div className="text-zinc-500 ml-4">✓ Parsed 3 requirements</div>

          <div className="flex items-start gap-2 mt-3">
            <span style={{ color: '#C15F3C' }}>✻</span>
            <div className="text-zinc-400">Starting implementation</div>
          </div>
          <div className="text-zinc-500 ml-4 space-y-1">
            <div>→ tasks.ts created</div>
            <div>→ storage.ts created</div>
          </div>

          <div className="flex items-start gap-2 mt-3">
            <Spinner />
            <div className="text-zinc-400">Working on filter.ts...</div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800">
            <div className="flex gap-2 items-start">
              <img src={avatars.Frances} alt="Frances" className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
              <div className="text-zinc-400">Should we add priority levels?</div>
            </div>
          </div>

          <div className="flex gap-2 items-start mt-2">
            <img src={avatars.Ben} alt="Ben" className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
            <div className="text-zinc-400">Let's keep it simple for v1</div>
          </div>
        </div>
        <div className="border-t border-zinc-800 p-2 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 text-xs">→</span>
            <input
              type="text"
              placeholder="Reply..."
              className="flex-1 bg-transparent text-zinc-400 text-xs outline-none"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Middle panel - Notion-style Editor (2/4) */}
      <div className="w-2/4 border-r border-zinc-800 flex flex-col overflow-hidden bg-zinc-950">
        <div className="flex-1 overflow-y-auto py-4 px-12 demo-scrollbar">
          {/* Title block */}
          <div className="group relative mb-4">
            <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab">⋮⋮</div>
            <h1 className="text-xl font-bold text-zinc-100">{specContent.title}</h1>
          </div>

          {/* Abstract */}
          <div className="group relative mb-3">
            <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab">⋮⋮</div>
            <div className="py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Abstract</h2>
              <p className="text-sm text-zinc-300">{specContent.abstract}</p>
            </div>
          </div>

          {/* Problem */}
          <div className="group relative mb-3">
            <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab">⋮⋮</div>
            <div className="py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Problem</h2>
              <p className="text-sm text-zinc-300">{specContent.problem}</p>
            </div>
          </div>

          {/* Approach */}
          <div className="group relative mb-4">
            <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab">⋮⋮</div>
            <div className="py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Approach</h2>
              <p className="text-sm text-zinc-300">{specContent.approach}</p>
            </div>
          </div>

          {/* Requirements header */}
          <div className="group relative mb-2">
            <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab">⋮⋮</div>
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider py-1">Requirements</h2>
          </div>

          {/* Requirement blocks */}
          {specContent.requirements.map((req) => (
            <div key={req.id} className="group relative mb-1">
              <div className="absolute -left-8 top-1 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-600 cursor-grab">⋮⋮</div>
              <div className="flex items-start gap-2 py-1 px-1 -mx-1 rounded hover:bg-zinc-900/50">
                <button className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                  req.status === 'implemented'
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'border-zinc-600 hover:border-zinc-500'
                }`}>
                  {req.status === 'implemented' && <span className="text-xs">✓</span>}
                </button>
                <span className={`text-sm ${req.status === 'implemented' ? 'text-zinc-400' : 'text-zinc-200'}`}>
                  {req.text}
                  <span className="text-yellow-600/60 text-xs font-mono ml-2">{req.glasswareId}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel - Stacked Diffs (1/4) */}
      <div className="w-1/4 flex flex-col overflow-hidden">
        <div className="p-3 flex-shrink-0">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Changes</div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-2 demo-scrollbar">
          {changedFiles.map((file) => (
            <div key={file.name} className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFiles(prev => {
                  const next = new Set(prev)
                  next.has(file.name) ? next.delete(file.name) : next.add(file.name)
                  return next
                })}
                className="w-full flex items-center justify-between px-2 py-1.5 hover:bg-zinc-800/50"
              >
                <span className="text-white text-xs font-mono truncate">{file.name}</span>
                <div className="flex items-center gap-1 text-xs flex-shrink-0">
                  <span className="text-blue-400">+{file.additions}</span>
                  <span className="text-zinc-500">{expandedFiles.has(file.name) ? '▼' : '▶'}</span>
                </div>
              </button>
              {expandedFiles.has(file.name) && (
                <div className="border-t border-zinc-700 text-xs font-mono max-h-32 overflow-y-auto demo-scrollbar">
                  {file.diff.split('\n').map((line, i) => {
                    const isAddition = line.startsWith('+')
                    const content = isAddition ? line.slice(1) : line
                    return (
                      <div key={i} className={`px-2 py-0.5 ${isAddition ? 'bg-blue-500/10' : ''}`}>
                        {isAddition && <span className="text-blue-400 mr-1">+</span>}
                        <span className={`whitespace-pre ${isAddition ? 'text-white' : 'text-zinc-400'}`}>{content}</span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WebTracingView() {
  const [expandedComment, setExpandedComment] = useState(null)

  const specContent = {
    title: 'Task Management System',
    requirements: [
      { id: 'create-task', text: 'Users can create tasks with a title', status: 'implemented', glasswareId: '3b55e97d', active: true },
      { id: 'persist-tasks', text: 'Tasks must persist across browser sessions', status: 'implemented', glasswareId: 'a7f3d2c1' },
      { id: 'filter-tasks', text: 'Users can filter tasks by status', status: 'implemented', glasswareId: '8e2c9f4a' }
    ]
  }

  const codeLines = [
    { num: 1, content: '// @trace[create-task--3b55e97d]', isTrace: true },
    { num: 2, content: 'export function createTask(title: string): Task {' },
    { num: 3, content: '  if (!title.trim()) {' },
    { num: 4, content: '    throw new Error("Title required")' },
    { num: 5, content: '  }' },
    { num: 6, content: '' },
    { num: 7, content: '  // @comment[Ben]: Should we add due dates?', isComment: true, author: 'Ben', commentText: 'Should we add due dates?' },
    { num: 8, content: '  return {' },
    { num: 9, content: '    id: crypto.randomUUID(),' },
    { num: 10, content: '    title: title.trim(),' },
    { num: 11, content: '    completed: false,' },
    { num: 12, content: '    createdAt: new Date()' },
    { num: 13, content: '  }' },
    { num: 14, content: '}' },
  ]

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left panel - Richtext Editor with highlighted requirement */}
      <div className="w-1/2 border-r border-zinc-800 flex flex-col overflow-hidden bg-zinc-950">
        <div className="flex-1 overflow-y-auto py-4 px-8 demo-scrollbar">
          <div className="group relative mb-4">
            <h1 className="text-xl font-bold text-zinc-100">{specContent.title}</h1>
          </div>

          <div className="group relative mb-2">
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider py-1">Requirements</h2>
          </div>

          {specContent.requirements.map((req) => (
            <div key={req.id} className={`group relative mb-1 ${req.active ? 'bg-orange-500/10 -mx-2 px-2 rounded' : ''}`}>
              <div className="flex items-start gap-2 py-1.5">
                <button className="mt-0.5 w-4 h-4 rounded border bg-blue-500 border-blue-500 text-white flex items-center justify-center flex-shrink-0">
                  <span className="text-xs">✓</span>
                </button>
                <span className="text-sm text-zinc-300">
                  {req.text}
                  <span className={`text-xs font-mono ml-2 ${req.active ? 'text-orange-400 bg-orange-500/20 px-1 rounded' : 'text-yellow-600/60'}`}>
                    {req.glasswareId}
                  </span>
                </span>
              </div>
              {req.active && (
                <div className="ml-6 mt-1 text-xs text-orange-400">
                  ↳ Viewing implementation in tasks.ts
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right panel - Code File View */}
      <div className="w-1/2 flex flex-col overflow-hidden">
        <div className="px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">◇</span>
            <span className="text-zinc-300">src/tasks.ts</span>
          </div>
          <span className="text-orange-400 text-xs">← linked to 3b55e97d</span>
        </div>
        <div className="flex-1 overflow-y-auto demo-scrollbar">
          {codeLines.map((line) => (
            <div key={line.num}>
              <div className={`flex hover:bg-zinc-900/50 ${line.isTrace ? 'bg-orange-500/10' : ''}`}>
                <div className="py-0.5 pr-2 text-zinc-600 select-none text-right w-8 text-xs">
                  {line.num}
                </div>
                <div className="px-2 py-0.5 flex-1 text-xs font-mono whitespace-pre">
                  {line.isTrace ? (
                    <span className="text-orange-400">{line.content}</span>
                  ) : line.isComment ? (
                    <button
                      onClick={() => setExpandedComment(expandedComment === line.num ? null : line.num)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <span className="bg-blue-500/20 px-1 rounded">{line.author}</span>
                      <span className="text-zinc-500 ml-1">💬 1 comment</span>
                    </button>
                  ) : (
                    <span className="text-zinc-300">{line.content}</span>
                  )}
                </div>
              </div>
              {line.isComment && expandedComment === line.num && (
                <div className="ml-8 mr-4 my-2">
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3">
                    <div className="flex gap-2 items-start">
                      <img src={avatars.Ben} className="w-6 h-6 rounded-full object-cover flex-shrink-0" alt="Ben" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-zinc-300 font-medium">Ben</div>
                        <div className="text-xs text-zinc-400 mt-1">{line.commentText}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 py-1 bg-zinc-800 text-xs text-zinc-400">
          src/tasks.ts
        </div>
      </div>
    </div>
  )
}

function WebVersionControlView() {
  const [selectedFile, setSelectedFile] = useState('tasks.ts')

  const files = ['tasks.ts', 'tasks.test.ts', 'storage.ts', 'filter.ts']

  const fileCode = {
    'tasks.ts': [
      '// @trace[create-task--3b55e97d]',
      'export function createTask(title: string): Task {',
      '  if (!title.trim()) {',
      '    throw new Error("Title required")',
      '  }',
      '  return {',
      '    id: crypto.randomUUID(),',
      '    title: title.trim(),',
      '    completed: false',
      '  }',
      '}'
    ]
  }

  const changelog = [
    {
      id: 1,
      summary: 'Add task creation with title validation',
      requirements: [
        { text: 'Users can create tasks with a title', id: '3b55e97d' }
      ],
      threads: [
        { title: 'Implement createTask function', messages: 2 },
        { title: 'Add input validation', messages: 1 }
      ],
      commentsAddressed: [
        { author: 'Ben', text: 'Add title length validation' }
      ],
      files: [
        { name: 'tasks.ts', additions: 12, deletions: 0 },
        { name: 'tasks.test.ts', additions: 14, deletions: 0 }
      ]
    },
    {
      id: 2,
      summary: 'Add localStorage persistence for tasks',
      requirements: [
        { text: 'Tasks must persist across sessions', id: 'a7f3d2c1' }
      ],
      threads: [
        { title: 'Implement TaskStorage class', messages: 2 }
      ],
      commentsAddressed: [
        { author: 'Frances', text: 'Handle localStorage quota errors' }
      ],
      files: [
        { name: 'storage.ts', additions: 15, deletions: 0 }
      ]
    },
    {
      id: 3,
      summary: 'Add status filter for active/done tasks',
      requirements: [
        { text: 'Users can filter tasks by status', id: '8e2c9f4a' }
      ],
      threads: [
        { title: 'Implement filterTasks function', messages: 2 }
      ],
      commentsAddressed: [],
      files: [
        { name: 'filter.ts', additions: 13, deletions: 0 }
      ]
    }
  ]

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left panel - File Sidebar */}
      <div className="w-36 border-r border-zinc-800 overflow-y-auto text-xs flex-shrink-0 demo-scrollbar">
        <div className="p-2 space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-500 py-1">
            <span className="text-[10px]">▼</span>
            <span>specs</span>
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-1.5 py-0.5 px-1.5 rounded text-zinc-400 hover:bg-zinc-800 cursor-pointer">
              <span className="text-zinc-500">◇</span>
              <span>workspace.md</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500 py-1 mt-2">
            <span className="text-[10px]">▼</span>
            <span>src</span>
          </div>
          <div className="ml-3 space-y-0.5">
            {files.map(file => (
              <div
                key={file}
                onClick={() => setSelectedFile(file)}
                className={`flex items-center gap-1.5 py-0.5 px-1.5 rounded cursor-pointer ${
                  selectedFile === file ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                <span className="text-zinc-500">◇</span>
                <span>{file}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle panel - Code View */}
      <div className="w-1/2 border-r border-zinc-800 flex flex-col overflow-hidden">
        <div className="px-4 py-2 border-b border-zinc-800 text-xs text-zinc-400">
          src/{selectedFile}
        </div>
        <div className="flex-1 overflow-y-auto demo-scrollbar">
          {(fileCode[selectedFile] || fileCode['tasks.ts']).map((line, i) => (
            <div key={i} className={`flex hover:bg-zinc-900/50 ${line.startsWith('// @trace') ? 'bg-orange-500/10' : ''}`}>
              <div className="py-0.5 pr-2 text-zinc-600 select-none text-right w-8 text-xs">
                {i + 1}
              </div>
              <div className="px-2 py-0.5 flex-1 text-xs font-mono whitespace-pre">
                <span className={line.startsWith('// @trace') ? 'text-orange-400' : 'text-zinc-300'}>{line}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel - GUI Changelog */}
      <div className="w-1/2 overflow-y-auto p-3 demo-scrollbar">
        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-3">Changelog</div>
        <div className="space-y-3">
          {changelog.map((entry) => (
            <div key={entry.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 hover:border-zinc-700 transition-colors">
              {/* Commit summary + revert */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="text-zinc-200 text-sm font-medium">{entry.summary}</div>
                <button className="text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-700 hover:border-zinc-600 px-2 py-0.5 rounded transition-colors flex-shrink-0">
                  Revert
                </button>
              </div>

              {/* Requirements addressed */}
              <div className="mb-2">
                <div className="text-xs text-zinc-500 mb-1">Requirements</div>
                {entry.requirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs ml-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-zinc-400">{req.text}</span>
                    <span className="text-yellow-600 font-mono">{req.id}</span>
                  </div>
                ))}
              </div>

              {/* Agent threads */}
              <div className="mb-2">
                <div className="text-xs text-zinc-500 mb-1">Threads</div>
                {entry.threads.map((thread, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs ml-2">
                    <span className="text-orange-400">◈</span>
                    <span className="text-zinc-400">{thread.title}</span>
                    <span className="text-zinc-600">({thread.messages})</span>
                  </div>
                ))}
              </div>

              {/* Comments addressed */}
              {entry.commentsAddressed.length > 0 && (
                <div className="mb-2">
                  <div className="text-xs text-zinc-500 mb-1">Comments addressed</div>
                  {entry.commentsAddressed.map((comment, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs ml-2">
                      <span className="text-blue-400">✓</span>
                      <span className="text-zinc-500">@{comment.author.toLowerCase()}</span>
                      <span className="text-zinc-400 truncate">{comment.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Files */}
              <div className="pt-2 border-t border-zinc-800">
                <div className="text-xs text-zinc-500 mb-1">Files</div>
                {entry.files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between text-xs ml-2">
                    <span className="text-zinc-400">{file.name}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-blue-400">+{file.additions}</span>
                      {file.deletions > 0 && <span className="text-red-400">-{file.deletions}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RequirementBlock({
  id,
  glasswareId,
  text,
  highlights,
  traces,
  isSectionExpanded,
  onToggleSection,
  onOpenFile,
  showTraceHighlight
}) {
  const renderTextWithHighlights = () => {
    if (!highlights || highlights.length === 0) {
      return <span>{text}</span>
    }

    let remainingText = text
    const parts = []

    highlights.forEach((highlight, idx) => {
      const index = remainingText.indexOf(highlight.text)
      if (index !== -1) {
        if (index > 0) {
          parts.push(<span key={`text-${idx}`}>{remainingText.substring(0, index)}</span>)
        }
        parts.push(
          <button
            key={`highlight-${idx}`}
            onClick={(e) => {
              e.stopPropagation()
              onToggleSection({ type: 'comment', id: `${id}-comment-${idx}`, parentId: id })
            }}
            className="bg-blue-500/20 text-blue-300 px-1 rounded hover:bg-blue-500/30 transition-colors"
          >
            {highlight.text}
          </button>
        )
        remainingText = remainingText.substring(index + highlight.text.length)
      }
    })

    if (remainingText) {
      parts.push(<span key="text-end">{remainingText}</span>)
    }

    return <>{parts}</>
  }

  return (
    <div className="space-y-2 min-w-0">
      <div className="flex items-center gap-2 min-w-0">
        <div className="text-zinc-300 min-w-0 flex-1">
          {renderTextWithHighlights()}
        </div>
        <span className={`text-xs font-mono ${showTraceHighlight ? 'text-orange-400 bg-orange-500/20 px-1.5 py-0.5 rounded' : 'text-yellow-600'}`}>
          {glasswareId}
        </span>
      </div>

      {highlights.map((highlight, idx) => {
        const commentId = `${id}-comment-${idx}`
        const isExpanded = isSectionExpanded('comment', commentId)

        if (!isExpanded) return null

        return (
          <div key={commentId} className="ml-6 my-3 min-w-0">
            <CommentThread
              highlight={highlight.text}
              comments={highlight.commentThread}
            />
          </div>
        )
      })}

      <div className="ml-4 space-y-2 min-w-0">
        {traces.map((trace, traceIdx) => {
          const traceId = `${id}-trace-${traceIdx}`
          const isCodeExpanded = isSectionExpanded('code', traceId)
          const isEditsExpanded = isSectionExpanded('edits', traceId)
          const isFileCommentExpanded = isSectionExpanded('file-comment', traceId)

          return (
            <div key={traceIdx} className="space-y-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onToggleSection({ type: 'code', id: traceId, parentId: id })}
                  className={`text-xs transition-colors ${
                    showTraceHighlight
                      ? 'text-orange-400 hover:text-orange-300'
                      : isCodeExpanded
                        ? 'text-white font-medium'
                        : 'text-white hover:text-zinc-300'
                  }`}
                >
                  ↳ {trace.file}:{trace.line}
                </button>
                <DiffStats changes={trace.changes} />
                <button
                  onClick={() => onToggleSection({ type: 'edits', id: traceId, parentId: id })}
                  className={`text-xs transition-colors ${
                    isEditsExpanded
                      ? 'text-zinc-300 font-medium'
                      : 'text-zinc-500 hover:text-zinc-300 hover:underline'
                  }`}
                >
                  {trace.edits} edits
                </button>
                {trace.comments && trace.comments > 0 && (
                  <button
                    onClick={() => onToggleSection({ type: 'file-comment', id: traceId, parentId: id })}
                    className={`text-xs transition-colors ${
                      isFileCommentExpanded
                        ? 'text-zinc-300 font-medium'
                        : 'text-zinc-500 hover:text-zinc-300 hover:underline'
                    }`}
                  >
                    {trace.comments} {trace.comments === 1 ? 'comment' : 'comments'}
                  </button>
                )}
              </div>

              {isCodeExpanded && (
                <div className="ml-6 my-2 min-w-0">
                  <CodeSnippet
                    file={trace.file}
                    code={trace.snippet}
                    onOpen={onOpenFile ? () => onOpenFile(trace.file, `src/${trace.file}`) : undefined}
                  />
                </div>
              )}

              {isEditsExpanded && (
                <div className="ml-6 my-2 min-w-0">
                  <EditReasoning file={trace.file} reasoning={trace.reasoning} editCount={trace.edits} />
                </div>
              )}

              {isFileCommentExpanded && trace.commentThread && (
                <div className="ml-6 my-2 min-w-0">
                  <CommentThread
                    highlight={`${trace.file}:${trace.line}`}
                    comments={trace.commentThread}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function DiffStats({ changes }) {
  const parts = changes.split(' ')

  return (
    <span className="text-xs flex items-center gap-1">
      {parts.map((part, idx) => {
        if (part.startsWith('+')) {
          return <span key={idx} className="text-blue-400">{part}</span>
        } else if (part.startsWith('-')) {
          return <span key={idx} className="text-red-400">{part}</span>
        } else {
          return <span key={idx} className="text-zinc-600">{part}</span>
        }
      })}
    </span>
  )
}

function CodeSnippet({ file, code, onOpen }) {
  const lines = code.split('\n')

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden min-w-0">
      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700 bg-zinc-800/50">
        <span className="text-xs text-white font-mono truncate">{file}</span>
        {onOpen && (
          <button onClick={onOpen} className="text-xs text-zinc-400 hover:text-white transition-colors">
            Open →
          </button>
        )}
      </div>
      <div className="text-xs font-mono overflow-x-auto demo-scrollbar">
        {lines.map((line, i) => {
          const isAddition = line.startsWith('+')
          const isRemoval = line.startsWith('-')
          const content = isAddition || isRemoval ? line.slice(1) : line

          return (
            <div
              key={i}
              className={`px-4 py-0.5 ${isAddition ? 'bg-blue-500/10' : isRemoval ? 'bg-red-500/10' : ''}`}
            >
              {isAddition && <span className="text-blue-400 mr-1">+</span>}
              {isRemoval && <span className="text-red-400 mr-1">-</span>}
              <span className={`${isAddition ? 'text-white' : isRemoval ? 'text-zinc-400' : 'text-zinc-300'} whitespace-pre`}>{content}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const avatars = {
  Ben: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0',
  Frances: 'https://images.unsplash.com/photo-1731500573044-3551bfa73c4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0'
}

function CommentThread({ highlight, comments }) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 min-w-0">
      <div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Comment Thread</div>
      <div className="text-xs text-blue-300 font-mono bg-blue-500/20 px-2 py-1 rounded inline-block mb-3">
        "{highlight}"
      </div>
      <div className="space-y-3">
        {comments.map((comment, i) => (
          <div key={i} className="flex gap-3 min-w-0">
            <img
              src={avatars[comment.author] || avatars.Ben}
              alt={comment.author}
              className="w-6 h-6 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-zinc-300 font-medium">{comment.author}</div>
              <div className="text-sm text-zinc-400 mt-1 break-words">{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EditReasoning({ file, reasoning, editCount }) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 min-w-0">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-zinc-500 uppercase tracking-wider">Agent Reasoning</div>
        <div className="text-xs text-zinc-600">{editCount} edits</div>
      </div>
      <div className="text-xs text-white mb-2 font-mono truncate">{file}</div>
      <p className="text-sm text-zinc-300 leading-relaxed break-words">{reasoning}</p>
    </div>
  )
}

const fileContents = {
  'tasks.ts': {
    code: `// @trace[create-task--3b55e97d]
export function createTask(title: string): Task {
  if (!title.trim()) {
    throw new Error("Title required")
  }

  // @comment[Ben]: Should we add due dates?
  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    completed: false,
    createdAt: new Date()
  }
}`,
    traceId: '3b55e97d'
  },
  'tasks.test.ts': {
    code: `import { createTask } from "./tasks"

describe("createTask", () => {
  it("creates task with title", () => {
    const task = createTask("Buy milk")
    expect(task.title).toBe("Buy milk")
    expect(task.completed).toBe(false)
  })

  it("throws on empty title", () => {
    expect(() => createTask(""))
      .toThrow("Title required")
  })
})`
  },
  'storage.ts': {
    code: `// @trace[persist-tasks--a7f3d2c1]
export class TaskStorage {
  private key = "tasks"

  save(tasks: Task[]): void {
    localStorage.setItem(
      this.key,
      JSON.stringify(tasks)
    )
  }

  load(): Task[] {
    const data = localStorage.getItem(this.key)
    return data ? JSON.parse(data) : []
  }
}`,
    traceId: 'a7f3d2c1'
  },
  'filter.ts': {
    code: `// @trace[filter-tasks--8e2c9f4a]
export function filterTasks(
  tasks: Task[],
  filter: "all" | "active" | "done"
): Task[] {
  switch (filter) {
    case "active":
      return tasks.filter(t => !t.completed)
    case "done":
      return tasks.filter(t => t.completed)
    default:
      return tasks
  }
}`,
    traceId: '8e2c9f4a'
  }
}

function CodeFileView({ file, onClose }) {
  const [expandedComment, setExpandedComment] = useState(null)
  const content = fileContents[file.name]
  if (!content) return null

  const lines = content.code.split('\n')

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto demo-scrollbar">
        {lines.map((line, i) => {
          const isTrace = line.trim().startsWith('// @trace')
          const commentMatch = line.match(/\/\/ @comment\[(\w+)\]: (.+)/)
          const isCommentExpanded = expandedComment === i

          return (
            <div key={i}>
              <div className="flex hover:bg-zinc-900/50">
                <div className="py-0.5 pr-2 text-zinc-500 select-none text-right w-8 text-xs">
                  {i + 1}
                </div>
                <div className="px-2 py-0.5 flex-1 text-xs font-mono whitespace-pre">
                  {isTrace ? (
                    <button onClick={onClose} className="text-orange-400 hover:text-orange-300 hover:underline">
                      {line}
                    </button>
                  ) : commentMatch ? (
                    <button
                      onClick={() => setExpandedComment(isCommentExpanded ? null : i)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <span className="bg-blue-500/20 px-1 rounded">{commentMatch[1]}</span>
                      <span className="text-zinc-500 ml-1">💬 1 comment</span>
                    </button>
                  ) : (
                    <span className="text-zinc-300">{line}</span>
                  )}
                </div>
              </div>
              {commentMatch && isCommentExpanded && (
                <div className="ml-8 mr-4 my-2">
                  <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3">
                    <div className="flex gap-2 items-start">
                      <img
                        src={avatars[commentMatch[1]] || avatars.Ben}
                        className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                        alt={commentMatch[1]}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-zinc-300 font-medium">{commentMatch[1]}</div>
                        <div className="text-xs text-zinc-400 mt-1">{commentMatch[2]}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="px-4 py-1 bg-zinc-800 text-xs text-zinc-400">
        {file.path}
      </div>
    </div>
  )
}

function BranchReviewView({ onClose }) {
  const [expandedFiles, setExpandedFiles] = useState(new Set())

  const reviewData = {
    sourceBranch: 'feat',
    targetBranch: 'main',
    requirements: [
      { id: '3b55e97d', text: 'Users can create tasks with a title', status: 'implemented' },
      { id: 'a7f3d2c1', text: 'Tasks must persist across browser sessions', status: 'implemented' },
      { id: '8e2c9f4a', text: 'Users can filter tasks by status', status: 'implemented' }
    ],
    threads: [
      { id: 't1', agent: 'Claude', summary: 'Implemented task creation with validation', messages: 3 },
      { id: 't2', agent: 'Claude', summary: 'Added localStorage persistence', messages: 2 }
    ],
    comments: [
      { author: 'Ben', text: 'Should we add due dates?', file: 'tasks.ts', line: 7 },
      { author: 'Frances', text: 'What if localStorage is full?', file: 'storage.ts', line: 5 }
    ],
    changedFiles: [
      { name: 'tasks.ts', additions: 12, deletions: 0, diff: `export function createTask(title: string): Task {
+ if (!title.trim()) {
+   throw new Error("Title required")
+ }
+ return {
+   id: crypto.randomUUID(),
+   title: title.trim(),
+   completed: false
+ }
}` },
      { name: 'tasks.test.ts', additions: 14, deletions: 0, diff: `describe("createTask", () => {
+ it("creates task with title", () => {
+   const task = createTask("Buy milk")
+   expect(task.title).toBe("Buy milk")
+ })
})` },
      { name: 'storage.ts', additions: 15, deletions: 0, diff: `export class TaskStorage {
+ save(tasks: Task[]): void {
+   localStorage.setItem(
+     this.key,
+     JSON.stringify(tasks)
+   )
+ }
}` },
      { name: 'filter.ts', additions: 13, deletions: 0, diff: `export function filterTasks(
  tasks: Task[],
  filter: "all" | "active" | "done"
): Task[] {
+ switch (filter) {
+   case "active":
+     return tasks.filter(t => !t.completed)
+   case "done":
+     return tasks.filter(t => t.completed)
+ }
}` }
    ]
  }

  return (
    <div className="flex-1 flex md:flex-row flex-col overflow-hidden">
      {/* Left panel */}
      <div className="md:w-1/2 w-full md:border-r border-zinc-800 overflow-y-auto p-4 space-y-4 demo-scrollbar">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-purple-400">○</span>
            <span className="text-zinc-300 text-sm">{reviewData.targetBranch}</span>
            <span className="text-zinc-500">←</span>
            <span className="text-zinc-300 text-sm">{reviewData.sourceBranch}</span>
          </div>
          <button onClick={onClose} className="text-xs text-zinc-500 hover:text-zinc-300">✕</button>
        </div>

        <div className="space-y-2">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Requirements</div>
          {reviewData.requirements.map((req) => (
            <div key={req.id} className="flex items-start gap-2 text-xs">
              <span className="text-green-400 mt-0.5">✓</span>
              <span className="text-zinc-300 flex-1">{req.text}</span>
              <span className="text-yellow-600 font-mono">{req.id}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Agent Threads</div>
          {reviewData.threads.map((thread) => (
            <div key={thread.id} className="bg-zinc-900 border border-zinc-700 rounded p-2">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-orange-400">◈</span>
                <span className="text-zinc-300">{thread.agent}</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-500">{thread.messages} messages</span>
              </div>
              <div className="text-xs text-zinc-400 mt-1 ml-4">{thread.summary}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Comments</div>
          {reviewData.comments.map((comment, i) => (
            <div key={i} className="flex gap-2 text-xs">
              <img src={avatars[comment.author] || avatars.Ben} alt={comment.author} className="w-5 h-5 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-300 font-medium">{comment.author}</span>
                  <span className="text-zinc-600 font-mono">{comment.file}:{comment.line}</span>
                </div>
                <div className="text-zinc-400 mt-0.5">{comment.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="md:w-1/2 w-full overflow-y-auto p-4 space-y-3 demo-scrollbar md:border-t-0 border-t border-zinc-800">
        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
          Changed Files ({reviewData.changedFiles.length})
        </div>
        {reviewData.changedFiles.map((file) => (
          <div key={file.name} className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedFiles(prev => {
                const next = new Set(prev)
                next.has(file.name) ? next.delete(file.name) : next.add(file.name)
                return next
              })}
              className="w-full flex items-center justify-between px-3 py-2 hover:bg-zinc-800/50"
            >
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 text-xs">◇</span>
                <span className="text-white text-xs font-mono">{file.name}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-blue-400">+{file.additions}</span>
                <span className="text-red-400">-{file.deletions}</span>
                <span className="text-zinc-500">{expandedFiles.has(file.name) ? '▼' : '▶'}</span>
              </div>
            </button>
            {expandedFiles.has(file.name) && (
              <div className="border-t border-zinc-700 text-xs font-mono">
                {file.diff.split('\n').map((line, i) => {
                  const isAddition = line.startsWith('+')
                  const isRemoval = line.startsWith('-')
                  const content = isAddition || isRemoval ? line.slice(1) : line
                  return (
                    <div key={i} className={`px-4 py-0.5 ${isAddition ? 'bg-blue-500/10' : isRemoval ? 'bg-red-500/10' : ''}`}>
                      {isAddition && <span className="text-blue-400 mr-1">+</span>}
                      {isRemoval && <span className="text-red-400 mr-1">-</span>}
                      <span className={`whitespace-pre ${isAddition ? 'text-white' : isRemoval ? 'text-zinc-400' : 'text-zinc-300'}`}>{content}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WebDemo
