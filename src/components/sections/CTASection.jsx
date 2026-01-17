import { Link } from 'react-router-dom'

/**
 * CTASection - Call-to-action section
 *
 * @param {Object} props
 * @param {string} props.headline - Main headline
 * @param {string} props.description - Supporting text
 * @param {Object} props.cta - Primary CTA { text, href }
 * @param {Object} props.secondaryCta - Optional secondary CTA { text, href }
 * @param {string} props.background - 'default' | 'gradient' | 'light'
 * @param {string} props.layout - 'centered' | 'split'
 */
function CTASection({
  headline,
  description,
  cta,
  secondaryCta,
  background = 'default',
  layout = 'centered'
}) {
  const bgClasses = {
    default: 'bg-zinc-950',
    gradient: 'bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900',
    light: 'bg-white',
    accent: 'bg-gradient-to-r from-orange-500/10 via-zinc-950 to-blue-500/10'
  }

  const isLight = background === 'light'

  if (layout === 'split') {
    return (
      <section className={`py-20 lg:py-32 ${bgClasses[background]}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-xl">
              <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                {headline}
              </h2>
              {description && (
                <p className={`text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {cta && (
                <Link
                  to={cta.href || '#'}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  {cta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href || '#'}
                  className={`inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg border transition-colors ${
                    isLight
                      ? 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                      : 'border-zinc-700 text-white hover:bg-zinc-800'
                  }`}
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-20 lg:py-32 ${bgClasses[background]}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-6 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            {headline}
          </h2>

          {description && (
            <p className={`text-lg mb-8 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              {description}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            {cta && (
              <Link
                to={cta.href || '#'}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors text-lg"
              >
                {cta.text}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.href || '#'}
                className={`inline-flex items-center justify-center px-8 py-4 font-medium rounded-lg border transition-colors text-lg ${
                  isLight
                    ? 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
                    : 'border-zinc-700 text-white hover:bg-zinc-800'
                }`}
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
