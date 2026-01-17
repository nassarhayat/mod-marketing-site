import { Link } from 'react-router-dom'

/**
 * TestimonialSection - Customer testimonial/quote section
 *
 * @param {Object} props
 * @param {string} props.quote - The testimonial quote text
 * @param {Object} props.author - Author info { name, title, company, avatar }
 * @param {Object} props.companyLogo - Company logo { image, alt }
 * @param {Object} props.cta - Optional CTA { text, href }
 * @param {string} props.background - 'default' | 'light' | 'accent'
 */
function TestimonialSection({
  quote,
  author = {},
  companyLogo,
  cta,
  background = 'default'
}) {
  const bgClasses = {
    default: 'bg-zinc-950',
    light: 'bg-zinc-100',
    accent: 'bg-gradient-to-br from-zinc-900 to-zinc-950'
  }

  const isLight = background === 'light'

  return (
    <section className={`py-20 lg:py-32 ${bgClasses[background]}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Quote */}
          <blockquote className={`text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8 ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            "{quote}"
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-4">
              {author.avatar && (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <div className={`font-medium ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                  {author.name}
                </div>
                <div className={`text-sm ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {author.title}{author.company && ` at ${author.company}`}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {companyLogo && (
                <img
                  src={companyLogo.image}
                  alt={companyLogo.alt || author.company}
                  className={`h-8 w-auto ${isLight ? '' : 'invert opacity-70'}`}
                />
              )}

              {cta && (
                <Link
                  to={cta.href || '#'}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
                >
                  {cta.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
