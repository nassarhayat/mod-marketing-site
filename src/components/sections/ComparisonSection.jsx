import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'

/**
 * ComparisonSection - Feature comparison cards
 *
 * @param {Object} props
 * @param {string} props.headline - Section headline
 * @param {string} props.description - Optional description
 * @param {Array} props.options - Array of comparison options { title, description, features, cta }
 * @param {string} props.background - 'default' | 'light'
 */
function ComparisonSection({
  headline,
  description,
  options = [],
  background = 'default'
}) {
  const isLight = background === 'light'

  return (
    <section className={`py-20 lg:py-32 ${isLight ? 'bg-zinc-100' : 'bg-zinc-950'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        {headline && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              {headline}
            </h2>
            {description && (
              <p className={`text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Comparison Cards */}
        <div className={`grid gap-6 lg:gap-8 ${
          options.length === 2 ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3 max-w-6xl'
        } mx-auto`}>
          {options.map((option, index) => (
            <ComparisonCard key={index} option={option} isLight={isLight} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonCard({ option, isLight }) {
  const { title, description, features = [], cta, icon, highlighted } = option

  return (
    <div className={`rounded-2xl p-6 lg:p-8 border ${
      highlighted
        ? 'border-white/20 bg-gradient-to-b from-zinc-800 to-zinc-900'
        : isLight
          ? 'border-zinc-200 bg-white'
          : 'border-zinc-800 bg-zinc-900/50'
    }`}>
      {/* Icon */}
      {icon && (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
          isLight && !highlighted ? 'bg-zinc-100' : 'bg-zinc-800'
        }`}>
          {typeof icon === 'string' ? (
            <span className="text-2xl">{icon}</span>
          ) : (
            icon
          )}
        </div>
      )}

      {/* Title */}
      <h3 className={`text-xl font-semibold mb-2 ${isLight && !highlighted ? 'text-zinc-900' : 'text-white'}`}>
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className={`text-sm mb-6 ${isLight && !highlighted ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {description}
        </p>
      )}

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => {
            const isIncluded = typeof feature === 'string' || feature.included !== false
            return (
              <li key={index} className="flex items-start gap-3">
                {isIncluded ? (
                  <Check className={`w-5 h-5 flex-shrink-0 ${isLight && !highlighted ? 'text-emerald-600' : 'text-emerald-400'}`} />
                ) : (
                  <X className={`w-5 h-5 flex-shrink-0 ${isLight && !highlighted ? 'text-zinc-400' : 'text-zinc-600'}`} />
                )}
                <span className={`text-sm ${
                  isIncluded
                    ? isLight && !highlighted ? 'text-zinc-700' : 'text-zinc-300'
                    : isLight && !highlighted ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  {typeof feature === 'string' ? feature : feature.text}
                </span>
              </li>
            )
          })}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <Link
          to={cta.href || '#'}
          className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-colors ${
            highlighted
              ? 'bg-white text-zinc-900 hover:bg-zinc-100'
              : isLight
                ? 'bg-zinc-900 text-white hover:bg-zinc-800'
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
          }`}
        >
          {cta.text}
        </Link>
      )}
    </div>
  )
}

export default ComparisonSection
