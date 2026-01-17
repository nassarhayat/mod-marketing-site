/**
 * Persona Page Data
 *
 * Each persona has a slug (URL path) and page configuration.
 * Add new personas by creating new entries in this object.
 */

export const personas = {
  'founders': {
    title: 'Mod for Founders',
    description: 'Ship faster without sacrificing quality',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'MOD FOR FOUNDERS',
          headline: 'Ship faster without sacrificing quality',
          description: 'Mod helps founders build and iterate on products faster by providing AI-powered development workflows that maintain engineering best practices.',
          cta: { text: 'Get Started Free', href: '/signup' },
          secondaryCta: { text: 'Book a Demo', href: '/demo' },
          layout: 'default',
          background: 'default'
        }
      },
      {
        type: 'logoBar',
        props: {
          title: 'Trusted by teams at',
          logos: [
            { name: 'YC' },
            { name: 'Sequoia' },
            { name: 'a16z' },
            { name: 'Stripe' },
            { name: 'Linear' }
          ]
        }
      },
      {
        type: 'feature',
        props: {
          eyebrow: 'RAPID ITERATION',
          headline: 'From idea to shipped in hours, not weeks',
          description: 'Mod understands your product vision and translates it into production-ready code. Focus on what matters—building a product users love.',
          cta: { text: 'Learn more', href: '#' },
          layout: 'right',
          bullets: [
            'Natural language to production code',
            'Automatic testing and validation',
            'Built-in best practices and patterns'
          ]
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Stay in control of your codebase',
          description: 'Unlike no-code tools, Mod generates clean, maintainable code you own. Every change is tracked, reviewed, and reversible.',
          cta: { text: 'See how it works', href: '#' },
          layout: 'left',
          background: 'default'
        }
      },
      {
        type: 'testimonial',
        props: {
          quote: "Mod helped us ship our MVP in 3 weeks instead of 3 months. The code quality is better than what we would have written ourselves.",
          author: {
            name: 'Sarah Chen',
            title: 'Founder & CEO',
            company: 'TechStart'
          },
          cta: { text: 'Read the story', href: '#' },
          background: 'accent'
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Everything founders need to ship fast',
          features: [
            {
              title: 'Rapid Prototyping',
              description: 'Turn ideas into working prototypes in hours. Test with users, iterate, and ship.',
              image: '/images/features/prototyping.png' // Rocket launch illustration
            },
            {
              title: 'Enterprise Security',
              description: 'SOC 2 compliant with end-to-end encryption. Your code never leaves your environment.',
              image: '/images/features/security.png' // Shield with lock illustration
            },
            {
              title: 'Built-in Analytics',
              description: 'Understand how your product is performing with integrated analytics and monitoring.',
              image: '/images/features/analytics.png' // Chart/graph illustration
            },
            {
              title: 'Version Control',
              description: 'Every change is tracked. Roll back anytime, compare versions, and collaborate safely.',
              image: '/images/features/version-control.png' // Git branch illustration
            },
            {
              title: 'Team Collaboration',
              description: 'Invite your team, assign tasks, and keep everyone aligned on product development.',
              image: '/images/features/collaboration.png' // Team working together illustration
            },
            {
              title: 'Multi-platform',
              description: 'Build for web, mobile, and desktop from a single codebase with Mod.',
              image: '/images/features/multiplatform.png' // Multiple device screens illustration
            }
          ],
          columns: 3
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Ready to ship faster?',
          description: 'Join thousands of founders building with Mod.',
          cta: { text: 'Get Started Free', href: '/signup' },
          secondaryCta: { text: 'Talk to Sales', href: '/contact' },
          background: 'gradient'
        }
      }
    ]
  },

  'design-engineers': {
    title: 'Mod for Design Engineers',
    description: 'Bridge the gap between design and code',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'MOD FOR DESIGN ENGINEERS',
          headline: 'Turn designs into pixel-perfect code',
          description: 'Mod understands your design system and generates code that matches your Figma files exactly. No more design-dev handoff friction.',
          cta: { text: 'Try it Free', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'logoBar',
        props: {
          title: 'Used by design engineering teams at',
          logos: [
            { name: 'Vercel' },
            { name: 'Linear' },
            { name: 'Figma' },
            { name: 'Framer' },
            { name: 'Raycast' }
          ]
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Your design system, codified',
          description: 'Mod learns your design tokens, component patterns, and styling conventions. Every line of code follows your established patterns.',
          cta: { text: 'Learn more', href: '#' },
          layout: 'right',
          bullets: [
            'Automatic design token extraction',
            'Component library awareness',
            'Consistent spacing and typography'
          ]
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'From Figma to code in seconds',
          description: 'Point Mod at any Figma frame and get production-ready React, Vue, or HTML. Animations, interactions, and responsive behavior included.',
          layout: 'left',
          background: 'accent'
        }
      },
      {
        type: 'testimonial',
        props: {
          quote: "Mod eliminated our design-to-code translation time. What used to take a week now takes an afternoon.",
          author: {
            name: 'Alex Rivera',
            title: 'Design Engineer',
            company: 'Linear'
          },
          cta: { text: 'Read case study', href: '#' }
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Built for design-minded engineers',
          features: [
            {
              title: 'Design Token Sync',
              description: 'Automatically sync colors, spacing, and typography from Figma to code.',
              image: '/images/features/tokens.png' // Color palette and typography scales
            },
            {
              title: 'Animation Support',
              description: 'Generate CSS animations, Framer Motion, or GSAP code from design specs.',
              image: '/images/features/animation.png' // Motion path curves illustration
            },
            {
              title: 'Responsive by Default',
              description: 'Every component is responsive. Define breakpoints once, use everywhere.',
              image: '/images/features/responsive.png' // Device breakpoints illustration
            },
            {
              title: 'Component Library',
              description: 'Build and maintain a consistent component library across all projects.',
              image: '/images/features/components.png' // UI component blocks illustration
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Start building beautiful products',
          description: 'Join design engineers who ship faster with Mod.',
          cta: { text: 'Get Started', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  },

  'product-engineers': {
    title: 'Mod for Product Engineers',
    description: 'Ship features faster with AI-powered development',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'MOD FOR PRODUCT ENGINEERS',
          headline: 'Ship features that users love, faster',
          description: 'Mod helps product engineers move faster by handling boilerplate, tests, and repetitive tasks while you focus on the product logic that matters.',
          cta: { text: 'Start Building', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Context-aware code generation',
          description: "Mod understands your codebase, your patterns, and your product. Every suggestion fits naturally into your existing architecture.",
          cta: { text: 'See how it works', href: '#' },
          layout: 'right'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'From PRD to PR in record time',
          description: 'Paste your product requirements and Mod breaks them down into implementable tasks, writes the code, and opens pull requests for review.',
          layout: 'left',
          background: 'accent'
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Tools for shipping product',
          features: [
            {
              title: 'Spec to Code',
              description: 'Turn product specs and user stories into working features automatically.',
              image: '/images/features/spec-to-code.png' // Document transforming to code
            },
            {
              title: 'Auto-Testing',
              description: 'Mod writes tests as you build, ensuring features work as expected.',
              image: '/images/features/testing.png' // Test suite with checkmarks
            },
            {
              title: 'Code Review',
              description: 'AI-powered code review catches bugs and suggests improvements.',
              image: '/images/features/code-review.png' // Code diff with comments
            },
            {
              title: 'Performance',
              description: 'Built-in performance monitoring and optimization suggestions.',
              image: '/images/features/performance.png' // Performance metrics dashboard
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Ready to ship more features?',
          cta: { text: 'Get Started Free', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  },

  'infra-engineers': {
    title: 'Mod for Infrastructure Engineers',
    description: 'Automate infrastructure with intelligent tooling',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'MOD FOR INFRA ENGINEERS',
          headline: 'Infrastructure as intelligent code',
          description: 'Mod helps infrastructure engineers automate deployments, manage configurations, and maintain reliable systems with AI-powered tooling.',
          cta: { text: 'Get Started', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'Terraform, Kubernetes, and more',
          description: 'Mod understands your infrastructure stack. Generate IaC configs, debug deployments, and optimize resource allocation.',
          layout: 'right',
          bullets: [
            'Multi-cloud support (AWS, GCP, Azure)',
            'Kubernetes manifest generation',
            'CI/CD pipeline automation'
          ]
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'Built for infrastructure at scale',
          features: [
            {
              title: 'Multi-Cloud',
              description: 'Deploy and manage resources across AWS, GCP, Azure, and more.',
              image: '/images/features/multi-cloud.png' // Cloud provider logos connected
            },
            {
              title: 'IaC Generation',
              description: 'Generate Terraform, Pulumi, or CloudFormation from natural language.',
              image: '/images/features/iac.png' // Infrastructure diagram
            },
            {
              title: 'Incident Response',
              description: 'AI-assisted debugging and automated runbook execution.',
              image: '/images/features/incident.png' // Alert monitoring dashboard
            },
            {
              title: 'Cost Optimization',
              description: 'Identify savings opportunities and right-size resources automatically.',
              image: '/images/features/cost.png' // Cost savings chart
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Automate your infrastructure',
          cta: { text: 'Start Free Trial', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  },

  'ml-engineers': {
    title: 'Mod for ML Engineers',
    description: 'Accelerate ML development and deployment',
    sections: [
      {
        type: 'hero',
        props: {
          eyebrow: 'MOD FOR ML ENGINEERS',
          headline: 'Ship ML models faster',
          description: 'Mod helps ML engineers streamline the entire ML lifecycle—from data preparation to model deployment and monitoring.',
          cta: { text: 'Get Started', href: '/signup' },
          layout: 'default'
        }
      },
      {
        type: 'feature',
        props: {
          headline: 'From notebook to production',
          description: 'Transform Jupyter notebooks into production-ready ML pipelines. Mod handles the engineering so you can focus on the science.',
          layout: 'right'
        }
      },
      {
        type: 'featureGrid',
        props: {
          headline: 'ML engineering, simplified',
          features: [
            {
              title: 'Experiment Tracking',
              description: 'Automatic experiment logging, comparison, and reproducibility.',
              image: '/images/features/experiments.png' // Experiment comparison table
            },
            {
              title: 'Data Pipeline',
              description: 'Build robust data pipelines with automatic schema validation.',
              image: '/images/features/data-pipeline.png' // Data flow diagram
            },
            {
              title: 'Model Serving',
              description: 'Deploy models with auto-scaling, A/B testing, and monitoring.',
              image: '/images/features/model-serving.png' // API endpoint diagram
            },
            {
              title: 'Model Monitoring',
              description: 'Track model performance, detect drift, and automate retraining.',
              image: '/images/features/model-monitoring.png' // ML metrics dashboard
            }
          ],
          columns: 2
        }
      },
      {
        type: 'cta',
        props: {
          headline: 'Accelerate your ML workflow',
          cta: { text: 'Start Free', href: '/signup' },
          background: 'gradient'
        }
      }
    ]
  }
}

export default personas
