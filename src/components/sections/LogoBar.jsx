/**
 * LogoBar - Company logos social proof section
 *
 * @param {Object} props
 * @param {string} props.title - Section title (e.g., "Trusted by teams at")
 * @param {Array} props.logos - Array of { name, image } objects
 * @param {string} props.background - 'default' | 'light' | 'dark'
 */
function LogoBar({
  title = 'Trusted by teams at',
  logos = [],
  background = 'default'
}) {
  const bgClasses = {
    default: 'bg-zinc-950',
    light: 'bg-zinc-100',
    dark: 'bg-black'
  }

  const textClass = background === 'light' ? 'text-zinc-500' : 'text-zinc-500'

  return (
    <section className={`py-12 ${bgClasses[background]}`}>
      <div className="container mx-auto px-6">
        {title && (
          <p className={`text-xs font-medium tracking-[0.2em] uppercase text-center mb-8 ${textClass}`}>
            {title}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-6 md:h-8 w-auto"
                />
              ) : (
                <span className={`text-lg font-semibold ${background === 'light' ? 'text-zinc-800' : 'text-white'}`}>
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoBar
