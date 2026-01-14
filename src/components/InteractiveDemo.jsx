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

export function InteractiveDemo({ activeView = 'spec' }) {
  const [expandedSections, setExpandedSections] = useState(
    new Set(['code:create-task-trace-0'])
  )
  const [internalView, setInternalView] = useState('workspace')
  const [selectedFile, setSelectedFile] = useState(null)

  // Map activeView prop to internal view
  const getViewFromActiveView = (av) => {
    switch (av) {
      case 'spec':
      case 'tracing':
        return 'workspace'
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
          {/* File sidebar */}
          <Sidebar
            currentView={currentView}
            activeView={activeView}
            selectedFile={selectedFile}
            onSelectWorkspace={closeFile}
            onSelectFile={openFile}
            onSelectReview={() => setInternalView('review')}
          />

          {/* Main content */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {currentView === 'review' ? (
              <BranchReviewView onClose={closeFile} />
            ) : currentView === 'agent' ? (
              <AgentContextView />
            ) : currentView === 'changelog' ? (
              <VersionControlView />
            ) : internalView === 'file' && selectedFile ? (
              <CodeFileView file={selectedFile} onClose={closeFile} />
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

function AgentContextView() {
  const scrollRef = useRef(null)

  return (
    <div className="flex-1 flex md:flex-row flex-col overflow-hidden">
      {/* Terminal side */}
      <div className="md:w-1/2 w-full md:border-r border-zinc-800 flex flex-col">
        <div ref={scrollRef} className="p-4 space-y-2 overflow-y-auto flex-1 demo-scrollbar text-xs">
          <div className="text-zinc-500">→ ~/workspace</div>

          <div className="text-zinc-400 mt-4">
            &gt; Build a task management system with persistence
          </div>

          <div className="space-y-2 mt-3">
            <div className="text-zinc-400 flex items-start gap-2">
              <span style={{ color: '#C15F3C' }}>✻</span>
              <div>I'll implement the task system based on your spec.</div>
            </div>
          </div>

          <div className="mt-3 text-zinc-500 ml-4">✓ Read workspace.md</div>

          <div className="mt-4 text-zinc-400">&gt; build workspace.md</div>

          <div className="mt-3 space-y-2">
            <div className="text-zinc-400 flex items-start gap-2">
              <Spinner />
              <div>Implementing task creation...</div>
            </div>
            <div className="text-zinc-500 ml-4 space-y-1">
              <div>→ Writing src/tasks.ts</div>
              <div>→ Writing src/tasks.test.ts</div>
              <div>+ Tracing create-task--3b55e97d</div>
              <div>+ Added reasoning: "Title validation prevents empty tasks"</div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            <div className="text-zinc-400 flex items-start gap-2">
              <Spinner />
              <div>Implementing persistence...</div>
            </div>
            <div className="text-zinc-500 ml-4 space-y-1">
              <div>→ Writing src/storage.ts</div>
              <div>+ Tracing persist-tasks--a7f3d2c1</div>
              <div>+ Added reasoning: "localStorage for browser persistence"</div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 p-3 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">→</span>
            <input
              type="text"
              placeholder="Ask Claude..."
              className="flex-1 bg-transparent text-zinc-400 text-xs outline-none"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Agent reasoning side */}
      <div className="md:w-1/2 w-full overflow-y-auto p-4 space-y-4 demo-scrollbar md:border-t-0 border-t border-zinc-800">
        <div className="text-xs text-zinc-500 uppercase tracking-wider">Agent Threads</div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
          <div className="flex items-center gap-2 text-xs mb-3">
            <span className="text-orange-400">◈</span>
            <span className="text-zinc-300">Claude</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500">Task Creation</span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="bg-zinc-800 rounded p-3">
              <div className="text-zinc-500 uppercase tracking-wider mb-2">Reasoning</div>
              <p className="text-zinc-300">Created task factory with title validation. Using crypto.randomUUID() for unique IDs ensures no collisions.</p>
            </div>
            <div className="bg-zinc-800 rounded p-3">
              <div className="text-zinc-500 uppercase tracking-wider mb-2">Context from Spec</div>
              <p className="text-zinc-400">REQ-001: Users can create tasks with a title</p>
              <p className="text-yellow-600 font-mono mt-1">3b55e97d</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4">
          <div className="flex items-center gap-2 text-xs mb-3">
            <span className="text-orange-400">◈</span>
            <span className="text-zinc-300">Claude</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500">Persistence</span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="bg-zinc-800 rounded p-3">
              <div className="text-zinc-500 uppercase tracking-wider mb-2">Reasoning</div>
              <p className="text-zinc-300">Using localStorage for browser persistence. JSON serialization handles the Task[] array cleanly.</p>
            </div>
            <div className="bg-zinc-800 rounded p-3">
              <div className="text-zinc-500 uppercase tracking-wider mb-2">Context from Spec</div>
              <p className="text-zinc-400">REQ-002: Tasks must persist across browser sessions</p>
              <p className="text-yellow-600 font-mono mt-1">a7f3d2c1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function VersionControlView() {
  return (
    <div className="flex-1 overflow-y-auto p-4 demo-scrollbar">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">Changelog</div>
            <div className="text-zinc-300 text-sm mt-1">feat/task-system</div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-[5px] h-[5px] rounded-full bg-green-500"></div>
            <span className="text-xs text-zinc-500">synced</span>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { time: '09:45', badge: 'REVIEW', badgeColor: 'bg-purple-500/20 text-purple-400', text: 'PR approved by @mike', author: '@sarah' },
            { time: '09:44', badge: 'EDIT', badgeColor: 'bg-blue-500/20 text-blue-400', text: 'filter.ts:1-13', author: 'Claude' },
            { time: '09:43', badge: 'COMMENT', badgeColor: 'bg-yellow-500/20 text-yellow-400', text: '"The filter buttons look great!"', author: '@ben' },
            { time: '09:42', badge: 'EDIT', badgeColor: 'bg-blue-500/20 text-blue-400', text: 'storage.ts:1-15', author: 'Claude' },
            { time: '09:41', badge: 'COMMENT', badgeColor: 'bg-yellow-500/20 text-yellow-400', text: '"What if localStorage is full?"', author: '@frances' },
            { time: '09:40', badge: 'EDIT', badgeColor: 'bg-blue-500/20 text-blue-400', text: 'tasks.ts:1-12', author: 'Claude' },
            { time: '09:39', badge: 'CREATE', badgeColor: 'bg-green-500/20 text-green-400', text: 'workspace.md', author: 'Claude' },
            { time: '09:38', badge: 'PROMPT', badgeColor: 'bg-orange-500/20 text-orange-400', text: '"Build a task management system..."', author: '@sarah' },
          ].map((entry, i) => (
            <div key={i} className="flex items-center gap-3 text-xs py-2 border-b border-zinc-800 last:border-0">
              <span className="text-zinc-600 w-10">{entry.time}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${entry.badgeColor}`}>
                {entry.badge}
              </span>
              <span className="text-zinc-300 flex-1 truncate">{entry.text}</span>
              <span className="text-zinc-500">{entry.author}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <div className="flex items-center gap-1.5">
              <div className="w-[5px] h-[5px] rounded-full bg-green-500 animate-pulse"></div>
              <span>1 agent active</span>
            </div>
            <span>·</span>
            <span>3 specs synced</span>
            <span>·</span>
            <span>4 files changed</span>
          </div>
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

export default InteractiveDemo
