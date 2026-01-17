/**
 * Pricing Page Data
 *
 * Configure pricing tiers, FAQs, and additional sections.
 */

export const pricingData = {
  title: 'Pricing',
  description: 'Start for free. Upgrade to get the capacity that matches your needs.',
  sections: [
    {
      type: 'pricing',
      props: {
        headline: 'Pricing',
        showToggle: true,
        groups: [
          {
            title: 'Individual Plans',
            tiers: [
              {
                name: 'Hobby',
                price: 'Free',
                featuresTitle: 'Includes:',
                cta: { text: 'Get Started', href: '/signup' },
                features: [
                  'No credit card required',
                  'Limited agent requests',
                  'Limited completions',
                  'Community support'
                ]
              },
              {
                name: 'Pro',
                price: 20,
                annualPrice: 16,
                period: '/mo.',
                featuresTitle: 'Everything in Hobby, plus:',
                cta: { text: 'Get Pro', href: '/signup' },
                features: [
                  'Extended agent limits',
                  'Unlimited completions',
                  'Background agents',
                  'Maximum context windows'
                ]
              },
              {
                name: 'Pro+',
                price: 60,
                annualPrice: 48,
                period: '/mo.',
                featuresTitle: 'Everything in Pro, plus:',
                cta: { text: 'Get Pro+', href: '/signup', variant: 'primary' },
                badge: 'Recommended',
                highlighted: true,
                features: [
                  '3x usage on all models',
                  'Priority queue access',
                  'Early feature access'
                ]
              },
              {
                name: 'Ultra',
                price: 200,
                annualPrice: 160,
                period: '/mo.',
                featuresTitle: 'Everything in Pro, plus:',
                cta: { text: 'Get Ultra', href: '/signup' },
                features: [
                  '20x usage on all models',
                  'Priority access to new features',
                  'Dedicated support'
                ]
              }
            ]
          },
          {
            title: 'Team Plans',
            tiers: [
              {
                name: 'Teams',
                price: 40,
                annualPrice: 32,
                period: '/user/mo.',
                featuresTitle: 'Everything in Pro, plus:',
                cta: { text: 'Get Teams', href: '/signup' },
                features: [
                  'Shared workspaces and rules',
                  'Centralized team billing',
                  'Usage analytics and reporting',
                  'Org-wide privacy controls',
                  'Role-based access control',
                  'SAML/OIDC SSO'
                ]
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                featuresTitle: 'Everything in Teams, plus:',
                cta: { text: 'Contact Sales', href: '/contact' },
                features: [
                  'Pooled usage',
                  'Invoice/PO billing',
                  'SCIM seat management',
                  'Audit logs and compliance',
                  'Granular admin controls',
                  'Priority support and account management'
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'faq',
      props: {
        headline: 'Frequently Asked Questions',
        faqs: [
          {
            question: 'What is Mod and how does it work?',
            answer: 'Mod is an AI-powered development platform that helps engineers build software faster. It understands your codebase, your patterns, and your requirements to generate production-ready code. Simply describe what you want to build, and Mod handles the implementation.'
          },
          {
            question: 'What does the free plan include?',
            answer: 'The Hobby plan includes limited agent requests and completions, perfect for trying out Mod and personal projects. No credit card is required to get started.'
          },
          {
            question: 'What is the difference between Pro and Pro+?',
            answer: 'Pro gives you extended limits and unlimited completions. Pro+ includes 3x the usage across all AI models, priority queue access, and early access to new features. Pro+ is recommended for power users who rely on Mod daily.'
          },
          {
            question: 'How does team pricing work?',
            answer: 'Team pricing is per user per month. All team members get access to shared workspaces, centralized billing, and team collaboration features. Enterprise plans offer custom pricing with additional security and compliance features.'
          },
          {
            question: 'Can I switch plans later?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you will be charged the prorated difference. When downgrading, the new rate applies at your next billing cycle.'
          },
          {
            question: 'Is my code secure?',
            answer: 'Absolutely. Mod is SOC 2 compliant with end-to-end encryption. Your code is never used to train our models unless you explicitly opt in. Enterprise plans include additional security features like SSO, SCIM, and audit logs.'
          }
        ]
      }
    },
    {
      type: 'cta',
      props: {
        headline: 'Ready to build faster?',
        description: 'Join thousands of engineers shipping with Mod.',
        cta: { text: 'Get Started Free', href: '/signup' },
        secondaryCta: { text: 'Talk to Sales', href: '/contact' },
        layout: 'centered',
        background: 'gradient'
      }
    }
  ]
}

export default pricingData
