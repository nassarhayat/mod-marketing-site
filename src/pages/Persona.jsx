import { useParams } from 'react-router-dom'
import PageRenderer from '../components/PageRenderer'
import { personas } from '../data/personas'

function Persona() {
  const { slug } = useParams()

  // Get the persona data for this slug
  const pageData = personas[slug]

  // If no data found for this slug, show a fallback
  if (!pageData) {
    return (
      <section className="min-h-screen bg-zinc-950 pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-medium text-white mb-4">
            {slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Persona'}
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
            This persona page is coming soon.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-900 font-medium rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </section>
    )
  }

  return <PageRenderer pageData={pageData} />
}

export default Persona
