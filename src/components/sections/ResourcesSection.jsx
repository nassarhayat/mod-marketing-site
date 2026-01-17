import { Link } from 'react-router-dom'

/**
 * ResourcesSection - Grid of resource/content cards
 *
 * @param {Object} props
 * @param {string} props.headline - Section headline
 * @param {string} props.description - Optional description
 * @param {Array} props.resources - Array of { image, title, description, cta, color }
 * @param {string} props.background - 'default' | 'light' | 'accent'
 */
function ResourcesSection({
  headline,
  description,
  resources = [],
  background = 'default'
}) {
  const bgClasses = {
    default: 'bg-zinc-950',
    light: 'bg-zinc-100',
    accent: 'bg-gradient-to-b from-zinc-900 to-zinc-950'
  }

  const isLight = background === 'light'

  return (
    <section className={`py-20 lg:py-32 ${bgClasses[background]}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        {headline && (
          <div className="mb-12">
            <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              {headline}
            </h2>
            {description && (
              <p className={`text-lg max-w-2xl ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} isLight={isLight} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ResourceCard({ resource, isLight }) {
  const { image, title, description, cta, color = 'emerald' } = resource

  const colorClasses = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500'
  }

  return (
    <div className="group">
      {/* Image */}
      <div className={`relative rounded-2xl overflow-hidden mb-6 aspect-[4/3] ${colorClasses[color] || colorClasses.emerald}`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 rounded-2xl" />
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className={`text-xl font-medium mb-2 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
        {title}
      </h3>

      {description && (
        <p className={`text-base mb-4 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {description}
        </p>
      )}

      {cta && (
        <Link
          to={cta.href || '#'}
          className={`inline-flex items-center gap-1 text-sm font-medium border-b pb-0.5 transition-colors ${
            isLight
              ? 'text-zinc-900 border-zinc-900 hover:text-zinc-600 hover:border-zinc-600'
              : 'text-white border-white hover:text-zinc-300 hover:border-zinc-300'
          }`}
        >
          {cta.text}
        </Link>
      )}
    </div>
  )
}

export default ResourcesSection
