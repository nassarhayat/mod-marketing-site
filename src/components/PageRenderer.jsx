import { sectionRegistry } from './sections'

/**
 * PageRenderer - Renders pages from JSON configuration
 *
 * @param {Object} props
 * @param {Object} props.pageData - Page configuration object
 * @param {string} props.pageData.title - Page title (for SEO)
 * @param {string} props.pageData.description - Page description (for SEO)
 * @param {Array} props.pageData.sections - Array of section configurations
 */
function PageRenderer({ pageData }) {
  if (!pageData || !pageData.sections) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-zinc-400">No page data available</p>
      </div>
    )
  }

  return (
    <main>
      {pageData.sections.map((section, index) => {
        const SectionComponent = sectionRegistry[section.type]

        if (!SectionComponent) {
          console.warn(`Unknown section type: ${section.type}`)
          return null
        }

        return (
          <SectionComponent
            key={`${section.type}-${index}`}
            {...section.props}
          />
        )
      })}
    </main>
  )
}

export default PageRenderer

/**
 * Page Data Schema Example:
 *
 * {
 *   title: "Page Title",
 *   description: "Page description for SEO",
 *   sections: [
 *     {
 *       type: "hero",
 *       props: {
 *         eyebrow: "MOD FOR ENGINEERS",
 *         headline: "Build better software faster",
 *         description: "...",
 *         cta: { text: "Get Started", href: "/signup" },
 *         image: "/images/hero.png"
 *       }
 *     },
 *     {
 *       type: "logoBar",
 *       props: {
 *         title: "Trusted by teams at",
 *         logos: [{ name: "Company", image: "/logos/company.svg" }]
 *       }
 *     },
 *     // ... more sections
 *   ]
 * }
 */
