import { Link } from 'react-router-dom'

/**
 * HeroSection - Main hero component for landing pages
 *
 * @param {Object} props
 * @param {string} props.eyebrow - Small text above headline
 * @param {string} props.headline - Main headline text
 * @param {string} props.description - Supporting description text
 * @param {Object} props.cta - Primary CTA { text, href }
 * @param {Object} props.secondaryCta - Optional secondary CTA { text, href }
 * @param {string} props.image - Hero image URL
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.layout - 'default' | 'centered' | 'reversed'
 * @param {string} props.background - 'default' | 'gradient' | 'dark'
 */
function HeroSection({
  eyebrow,
  headline,
  description,
  cta,
  secondaryCta,
  image,
  imageAlt = '',
  layout = 'default',
  background = 'default'
}) {
  const bgClasses = {
    default: 'bg-zinc-950',
    gradient: 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950',
    dark: 'bg-black',
    light: 'bg-zinc-100 text-zinc-900'
  }

  const layoutClasses = {
    default: 'flex-col lg:flex-row',
    centered: 'flex-col items-center text-center',
    reversed: 'flex-col lg:flex-row-reverse'
  }

  const isLight = background === 'light'

  return (
    <section className={`relative min-h-[80vh] pt-32 pb-20 ${bgClasses[background]}`}>
      <div className="container mx-auto px-6">
        <div className={`flex gap-12 lg:gap-20 items-center ${layoutClasses[layout]}`}>
          {/* Content */}
          <div className={`flex-1 ${layout === 'centered' ? 'max-w-3xl' : ''}`}>
            {eyebrow && (
              <span className={`inline-block text-xs font-medium tracking-[0.2em] uppercase mb-4 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {eyebrow}
              </span>
            )}

            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
              {headline}
            </h1>

            {description && (
              <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-xl ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                {description}
              </p>
            )}

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

          {/* Image */}
          {image && layout !== 'centered' && (
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>

        {/* Centered layout image */}
        {image && layout === 'centered' && (
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
