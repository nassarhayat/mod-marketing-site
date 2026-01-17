import { Link } from 'react-router-dom'

/**
 * FeatureSection - Text + media feature block
 *
 * @param {Object} props
 * @param {string} props.eyebrow - Small text above headline
 * @param {string} props.headline - Section headline
 * @param {string} props.description - Supporting text
 * @param {Object} props.cta - Optional CTA { text, href }
 * @param {string} props.image - Feature image URL
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.video - Optional video URL
 * @param {string} props.layout - 'left' | 'right' (image position)
 * @param {string} props.background - 'default' | 'light' | 'accent'
 * @param {Array} props.bullets - Optional bullet points
 */
function FeatureSection({
  eyebrow,
  headline,
  description,
  cta,
  image,
  imageAlt = '',
  video,
  layout = 'right',
  background = 'default',
  bullets = []
}) {
  const bgClasses = {
    default: 'bg-zinc-950',
    light: 'bg-zinc-100',
    accent: 'bg-gradient-to-br from-blue-600/10 via-zinc-950 to-zinc-950',
    blue: 'bg-blue-500',
    green: 'bg-emerald-500'
  }

  const isColoredBg = ['blue', 'green'].includes(background)
  const isLight = background === 'light'

  return (
    <section className={`py-20 lg:py-32 ${bgClasses[background]}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col gap-12 lg:gap-20 items-center ${
          layout === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}>
          {/* Content */}
          <div className="flex-1">
            {eyebrow && (
              <span className={`inline-block text-xs font-medium tracking-[0.2em] uppercase mb-4 ${
                isLight ? 'text-zinc-500' : isColoredBg ? 'text-white/70' : 'text-zinc-400'
              }`}>
                {eyebrow}
              </span>
            )}

            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6 ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              {headline}
            </h2>

            {description && (
              <p className={`text-lg leading-relaxed mb-6 ${
                isLight ? 'text-zinc-600' : isColoredBg ? 'text-white/80' : 'text-zinc-400'
              }`}>
                {description}
              </p>
            )}

            {bullets.length > 0 && (
              <ul className="space-y-3 mb-8">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isLight ? 'text-emerald-600' : 'text-emerald-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={isLight ? 'text-zinc-700' : 'text-zinc-300'}>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <Link
                to={cta.href || '#'}
                className={`inline-flex items-center gap-2 font-medium border-b-2 pb-1 transition-colors ${
                  isLight
                    ? 'text-zinc-900 border-zinc-900 hover:text-zinc-600 hover:border-zinc-600'
                    : 'text-white border-white hover:text-zinc-300 hover:border-zinc-300'
                }`}
              >
                {cta.text}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {/* Media */}
          <div className="flex-1 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-zinc-900">
              {video ? (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                />
              ) : image ? (
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-auto"
                />
              ) : (
                <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-500">Feature Image</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
