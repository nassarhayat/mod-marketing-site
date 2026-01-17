import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

/**
 * FAQSection - Frequently asked questions accordion
 *
 * @param {Object} props
 * @param {string} props.headline - Section headline
 * @param {string} props.description - Optional description
 * @param {Array} props.faqs - Array of { question, answer } objects
 * @param {string} props.background - 'default' | 'light'
 */
function FAQSection({
  headline = 'Frequently Asked Questions',
  description,
  faqs = [],
  background = 'default'
}) {
  const [openIndex, setOpenIndex] = useState(null)
  const isLight = background === 'light'

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-20 lg:py-32 ${isLight ? 'bg-zinc-100' : 'bg-zinc-950'}`}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium mb-4 ${isLight ? 'text-zinc-900' : 'text-white'}`}>
            {headline}
          </h2>
          {description && (
            <p className={`text-lg ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              {description}
            </p>
          )}
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto divide-y divide-zinc-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggleFaq(index)}
              isLight={isLight}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq, isOpen, onToggle, isLight }) {
  const { question, answer } = faq

  return (
    <div className="py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className={`text-lg font-medium ${isLight ? 'text-zinc-900' : 'text-white'}`}>
          {question}
        </span>
        <ChevronRight
          className={`w-5 h-5 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-90' : ''
          } ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}
        />
      </button>

      {isOpen && (
        <div className={`mt-4 text-base leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
          {answer}
        </div>
      )}
    </div>
  )
}

export default FAQSection
