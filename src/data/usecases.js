/**
 * Use Case Page Data
 *
 * Each use case has a slug (URL path) and page configuration.
 * Add new use cases by creating new entries in this object.
 */

export const usecases = {
  'spec-collaboration': {
    title: 'Spec Collaboration',
    description: 'Collaborate on product specs with your team and AI',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'USE CASE',
          headline: 'Turn specs into working software',
          description: 'Collaborate with your team to define product requirements, then let Mod translate them into production-ready code. Keep everyone aligned from spec to ship.',
          cta: { text: 'Get Started', href: '/signup' },
          secondaryCta: { text: 'See Demo', href: '/demo' },
          layout: 'default'
        }
      },
      {
        type: 'logoBar',
        props: {
          title: 'Trusted by product teams at',
          logos: [
            { name: 'Linear' },
            { name: 'Notion' },
            { name: 'Figma' },
            { name: 'Vercel' }
          ]
        }
      },
      {
        type: 'feature',
        props: {
          eyebrow: 'COLLABORATIVE SPECS',
          headline: 'Write specs that everyone understands',
          description: 'Create living documents that bridge the gap between product, design, and engineering. Mod helps translate business requirements into technical specifications automatically.',
          cta: { text: 'Learn more', href: '#' },
          layout: 'right',
          bullets: [
            'Real-time collaboration with your team',
            'Automatic technical spec generation',
            'Linked directly to implementation'
          ]
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'From spec to PR in one click',
          description: "Once your spec is approved, Mod breaks it into tasks, writes the code, and opens pull requests. Track progress as features move from defined to deployed.",
          layout: 'left',
          background: 'accent'
        }
      },
      {
        type: 'testimonial',
        props: {
          quote: "Mod transformed how our team collaborates on features. PMs write specs, and engineers get clean PRs ready for review. The feedback loop is incredibly tight.",
          author: {
            name: 'Jordan Kim',
            title: 'VP of Engineering',
            company: 'ScaleUp'
          },
          cta: { text: 'Read case study', href: '#' }
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Everything you need for spec collaboration',
          features: [
            {
              title: 'Rich Spec Editor',
              description: 'Write specs with markdown, embed designs, and link to user research.',
              image: '/images/features/spec-editor.png' // Document editor interface
            },
            {
              title: 'Inline Comments',
              description: 'Discuss and resolve questions directly in the spec document.',
              image: '/images/features/comments.png' // Comment thread illustration
            },
            {
              title: 'Figma Integration',
              description: 'Embed and sync designs directly from your Figma files.',
              image: '/images/features/figma.png' // Figma frames embedded
            },
            {
              title: 'Progress Tracking',
              description: 'See real-time progress as specs turn into shipped features.',
              image: '/images/features/progress.png' // Progress bar and status indicators
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Start collaborating on specs',
          description: 'Join teams shipping faster with Mod.',
          cta: { text: 'Get Started Free', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  },

  'agent-context': {
    title: 'Agent Context',
    description: 'Give AI agents the context they need to help you build',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'USE CASE',
          headline: 'AI that truly understands your codebase',
          description: 'Mod agents learn your codebase, conventions, and patterns. They provide suggestions that fit naturally into your existing architecture.',
          cta: { text: 'Try it Free', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Deep codebase understanding',
          description: 'Mod indexes your entire repository, understanding relationships between files, modules, and systems. Every suggestion is contextually aware.',
          layout: 'right',
          bullets: [
            'Full repository indexing',
            'Understands dependencies and imports',
            'Learns your naming conventions'
          ]
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Project-specific knowledge',
          description: 'Add documentation, architecture decisions, and team conventions to your Mod workspace. The AI learns and applies your specific context.',
          layout: 'left',
          background: 'accent'
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Context that makes AI useful',
          features: [
            {
              title: 'Codebase Memory',
              description: 'Mod remembers your codebase structure and can reference any file instantly.',
              image: '/images/features/codebase-memory.png' // File tree with connections
            },
            {
              title: 'Documentation Aware',
              description: 'Add READMEs, ADRs, and docs. Mod uses them to inform suggestions.',
              image: '/images/features/docs.png' // Documentation pages
            },
            {
              title: 'Smart Search',
              description: 'Find code, patterns, and examples across your entire codebase.',
              image: '/images/features/search.png' // Search results interface
            },
            {
              title: 'Pattern Recognition',
              description: 'Mod learns your patterns and suggests code that matches your style.',
              image: '/images/features/patterns.png' // Code pattern matching
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Give your AI the context it needs',
          cta: { text: 'Get Started', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  },

  'tracing': {
    title: 'Code Tracing',
    description: 'Understand code execution and track changes over time',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'USE CASE',
          headline: 'Trace every line back to its origin',
          description: 'Understand why code exists, who wrote it, and what requirements it fulfills. Mod traces code from spec to implementation and back.',
          cta: { text: 'Get Started', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Requirements traceability',
          description: 'Every line of code links back to the spec or ticket that required it. Understand the "why" behind any piece of code instantly.',
          layout: 'right'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Impact analysis',
          description: 'Before making changes, see exactly what will be affected. Mod traces dependencies and highlights potential impact areas.',
          layout: 'left',
          background: 'accent'
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Tracing capabilities',
          features: [
            {
              title: 'Spec to Code Links',
              description: 'See which code implements which requirements, automatically.',
              image: '/images/features/tracing-links.png' // Connected spec and code blocks
            },
            {
              title: 'Change History',
              description: 'Understand the evolution of any file or function over time.',
              image: '/images/features/history.png' // Timeline of changes
            },
            {
              title: 'Impact Mapping',
              description: 'Know what will break before you change anything.',
              image: '/images/features/impact.png' // Dependency impact visualization
            },
            {
              title: 'Dependency Graphs',
              description: 'Visualize relationships between modules and components.',
              image: '/images/features/dependency-graph.png' // Node graph diagram
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Understand your codebase deeply',
          cta: { text: 'Start Tracing', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  },

  'version-control': {
    title: 'Version Control',
    description: 'Intelligent version control and change management',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'USE CASE',
          headline: 'Version control that understands intent',
          description: 'Go beyond diffs and commits. Mod provides semantic version control that understands what changed and why.',
          cta: { text: 'Get Started', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Semantic change tracking',
          description: "See changes in terms of features, not just files. Understand what functionality was added, modified, or removed at a glance.",
          layout: 'right'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Intelligent merge conflict resolution',
          description: 'Mod understands the intent behind conflicting changes and suggests resolutions that preserve both sets of changes correctly.',
          layout: 'left',
          background: 'accent'
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Smart version control',
          features: [
            {
              title: 'Semantic Diffs',
              description: 'View changes by feature, not just by file or line.',
              image: '/images/features/semantic-diff.png' // Feature-based diff view
            },
            {
              title: 'Smart Merging',
              description: 'AI-assisted merge conflict resolution that understands context.',
              image: '/images/features/merge.png' // Merge conflict resolution UI
            },
            {
              title: 'Feature Snapshots',
              description: 'Capture and restore complete feature states, not just commits.',
              image: '/images/features/snapshots.png' // Feature state timeline
            },
            {
              title: 'Intelligent Rollbacks',
              description: 'Roll back specific features without affecting unrelated code.',
              image: '/images/features/rollback.png' // Selective rollback interface
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Upgrade your version control',
          cta: { text: 'Start Free', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  },

  'code-review': {
    title: 'Code Review',
    description: 'AI-powered code review that catches what humans miss',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'USE CASE',
          headline: 'Code review that actually helps',
          description: 'Get intelligent feedback on every PR. Mod understands your codebase and provides contextual suggestions that go beyond linting.',
          cta: { text: 'Get Started', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Context-aware reviews',
          description: "Mod doesn't just check syntax—it understands your patterns, conventions, and architecture. Suggestions fit naturally into your codebase.",
          layout: 'right',
          bullets: [
            'Understands your coding conventions',
            'Catches logical errors and edge cases',
            'Suggests performance improvements'
          ]
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Instant feedback, thorough review',
          description: 'Get immediate feedback on every commit. Mod reviews code faster than any human while maintaining the quality of a senior engineer.',
          layout: 'left',
          background: 'accent'
        }
      },
      {
        type: 'testimonial',
        props: {
          quote: "Mod's code review caught a critical bug that three humans missed. It's like having a tireless senior engineer on every PR.",
          author: {
            name: 'Marcus Johnson',
            title: 'Engineering Lead',
            company: 'DataFlow'
          }
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Comprehensive code review',
          features: [
            {
              title: 'Deep Analysis',
              description: 'Understand code logic, not just style. Catch bugs before they ship.',
              image: '/images/features/deep-analysis.png' // Code analysis visualization
            },
            {
              title: 'Security Scanning',
              description: 'Identify vulnerabilities and security anti-patterns automatically.',
              image: '/images/features/security-scan.png' // Security report interface
            },
            {
              title: 'Performance Review',
              description: 'Get suggestions for faster, more efficient code.',
              image: '/images/features/perf-review.png' // Performance metrics
            },
            {
              title: 'Convention Enforcement',
              description: 'Ensure code follows your team standards consistently.',
              image: '/images/features/conventions.png' // Linting rules interface
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Ship better code, faster',
          description: 'Add AI-powered code review to your workflow.',
          cta: { text: 'Get Started Free', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  }
}

export default usecases
