import { useParams } from 'react-router-dom'

function Persona() {
  const { slug } = useParams()

  return (
    <section className="discover-section" style={{ minHeight: '80vh', paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="discover-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          {slug ? slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Persona'}
        </h1>
        <p className="discover-subtitle">
          Placeholder page for {slug || 'persona'} content.
        </p>
      </div>
    </section>
  )
}

export default Persona
