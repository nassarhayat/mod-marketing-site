import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Info } from 'lucide-react'

/**
 * PricingSection - Pricing tiers display with grouped rows
 *
 * @param {Object} props
 * @param {string} props.headline - Section headline
 * @param {string} props.description - Supporting text
 * @param {Array} props.groups - Array of tier groups [{ title, tiers }]
 * @param {Array} props.tiers - Legacy: flat array of tiers (will be wrapped in single group)
 * @param {boolean} props.showToggle - Show annual/monthly toggle
 * @param {string} props.background - 'default' | 'light'
 */
function PricingSection({
  headline = 'Pricing',
  description,
  groups,
  tiers,
  showToggle = true,
  background = 'default'
}) {
  const [isAnnual, setIsAnnual] = useState(false)
  const isLight = background === 'light'

  // Support both grouped and flat tier arrays
  const tierGroups = groups || (tiers ? [{ tiers }] : [])

  return (
    <section className={`py-20 lg:py-32 ${isLight ? 'bg-zinc-100' : 'bg-zinc-950'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-4 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            {headline}
          </h2>
          {description && (
            <p className={`text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              {description}
            </p>
          )}
        </div>

        {/* Billing Toggle */}
        {showToggle && (
          <div className="flex justify-center mb-12">
            <div className={`inline-flex rounded-full p-1 ${isLight ? 'bg-zinc-200' : 'bg-zinc-800'}`}>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  !isAnnual
                    ? isLight ? 'bg-white text-zinc-900 shadow-sm' : 'bg-zinc-700 text-white'
                    : isLight ? 'text-zinc-600' : 'text-zinc-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  isAnnual
                    ? isLight ? 'bg-white text-zinc-900 shadow-sm' : 'bg-zinc-700 text-white'
                    : isLight ? 'text-zinc-600' : 'text-zinc-400'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        )}

        {/* Tier Groups */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {tierGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {/* Group Title */}
              {group.title && (
                <h3 className={`text-sm font-medium mb-6 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  {group.title}
                </h3>
              )}

              {/* Tier Cards */}
              <div className={`grid gap-4 lg:gap-6 ${
                group.tiers.length === 2
                  ? 'md:grid-cols-2'
                  : group.tiers.length === 3
                    ? 'md:grid-cols-3'
                    : 'md:grid-cols-2 lg:grid-cols-4'
              }`}>
                {group.tiers.map((tier, tierIndex) => (
                  <PricingCard
                    key={tierIndex}
                    tier={tier}
                    isAnnual={isAnnual}
                    isLight={isLight}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ tier, isAnnual, isLight }) {
  const {
    name,
    description,
    price,
    annualPrice,
    period = '/mo.',
    priceNote,
    cta,
    features = [],
    featuresTitle,
    highlighted = false,
    badge
  } = tier

  const displayPrice = isAnnual && annualPrice !== undefined ? annualPrice : price
  const isCustom = typeof price === 'string'

  return (
    <div className={`rounded-xl p-6 flex flex-col ${
      highlighted
        ? 'bg-zinc-800 ring-1 ring-zinc-700'
        : isLight
          ? 'bg-white border border-zinc-200'
          : 'bg-zinc-900/50 border border-zinc-800'
    }`}>
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <h3 className={`text-lg font-semibold ${isLight && !highlighted ? 'text-zinc-900' : 'text-white'}`}>
            {name}
          </h3>
          {badge && (
            <span className="px-2 py-0.5 text-xs font-medium bg-orange-500/20 text-orange-400 rounded">
              {badge}
            </span>
          )}
        </div>

        {/* Price */}
        {isCustom ? (
          <div className={`text-2xl font-semibold ${isLight && !highlighted ? 'text-zinc-600' : 'text-zinc-400'}`}>
            {price}
          </div>
        ) : (
          <div className="flex items-baseline gap-0.5">
            <span className={`text-2xl font-semibold ${isLight && !highlighted ? 'text-zinc-600' : 'text-zinc-400'}`}>
              ${displayPrice}
            </span>
            <span className={`text-sm ${isLight && !highlighted ? 'text-zinc-500' : 'text-zinc-500'}`}>
              {period}
            </span>
          </div>
        )}
      </div>

      {/* Features Title */}
      {featuresTitle && (
        <p className={`text-sm mb-4 ${isLight && !highlighted ? 'text-zinc-500' : 'text-zinc-500'}`}>
          {featuresTitle}
        </p>
      )}

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2.5 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isLight && !highlighted ? 'text-zinc-400' : 'text-zinc-500'}`} />
              <span className={`text-sm ${isLight && !highlighted ? 'text-zinc-700' : 'text-zinc-300'}`}>
                {typeof feature === 'string' ? feature : feature.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {cta && (
        <Link
          to={cta.href || '#'}
          className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium text-center transition-colors mt-auto ${
            cta.variant === 'primary' || highlighted
              ? 'bg-white text-zinc-900 hover:bg-zinc-100'
              : isLight
                ? 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
          }`}
        >
          {cta.text}
        </Link>
      )}
    </div>
  )
}

export default PricingSection
