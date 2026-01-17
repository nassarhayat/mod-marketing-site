import { Link } from 'react-router-dom'

/**
 * FeatureGrid - Grid of feature cards
 *
 * @param {Object} props
 * @param {string} props.eyebrow - Small text above headline
 * @param {string} props.headline - Section headline
 * @param {string} props.description - Optional description
 * @param {Array} props.features - Array of feature objects { icon, title, description, image, cta }
 * @param {number} props.columns - 2 | 3 | 4
 * @param {string} props.background - 'default' | 'light'
 */
function FeatureGrid({
  eyebrow,
  headline,
  description,
  features = [],
  columns = 3,
  background = 'default'
}) {
  const isLight = background === 'light'

  const colClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className={`py-20 lg:py-32 ${isLight ? 'bg-zinc-100' : 'bg-zinc-950'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        {(eyebrow || headline || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {eyebrow && (
              <span className={`inline-block text-xs font-medium tracking-[0.2em] uppercase mb-4 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                {eyebrow}
              </span>
            )}
            {headline && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                {headline}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className={`grid gap-6 lg:gap-8 ${colClasses[columns]}`}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} isLight={isLight} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, isLight, showImagePlaceholder = false }) {
  const { icon, title, description, image, cta } = feature

  return (
    <div className={`group rounded-2xl p-6 lg:p-8 transition-all ${
      isLight
        ? 'bg-white hover:shadow-lg'
        : 'bg-zinc-900 hover:bg-zinc-800'
    }`}>
      {image && showImagePlaceholder && (
        <div className={`relative rounded-xl overflow-hidden mb-6 aspect-[4/3] ${
          isLight ? 'bg-zinc-100' : 'bg-zinc-800'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xs ${isLight ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {title}
            </span>
          </div>
        </div>
      )}

      {icon && !image && (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
          isLight ? 'bg-zinc-100' : 'bg-zinc-800'
        }`}>
          {icon}
        </div>
      )}

      <h3 className={`text-xl font-medium mb-3 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
        {title}
      </h3>

      {description && (
        <p className={`text-base leading-relaxed mb-4 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {description}
        </p>
      )}

      {cta && (
        <Link
          to={cta.href || '#'}
          className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
            isLight
              ? 'text-zinc-900 hover:text-zinc-600'
              : 'text-white hover:text-zinc-300'
          }`}
        >
          {cta.text}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}

export default FeatureGrid
