import { useEffect } from 'react'
import Hero from '../components/Hero'
import Usecases from '../components/Usecases'
import Foundation from '../components/Foundation'
import Discover from '../components/Discover'
import FinalCTA from '../components/FinalCTA'

function Home() {
  useEffect(() => {
    // Footer logo shapes animation
    const footerShapes = document.querySelector('.footer-logo-shapes')

    function updateFooterShapes() {
      const footer = document.querySelector('.footer')
      if (!footer || !footerShapes) return

      const footerRect = footer.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const footerVisibility = Math.max(0, Math.min(1,
        (windowHeight - footerRect.top) / (windowHeight + footerRect.height)
      ))

      const spread = 60 * (1 - footerVisibility)
      footerShapes.style.setProperty('--shape-spread', `${spread}px`)
    }

    window.addEventListener('scroll', () => {
      requestAnimationFrame(updateFooterShapes)
    }, { passive: true })

    updateFooterShapes()

    return () => {
      window.removeEventListener('scroll', updateFooterShapes)
    }
  }, [])

  return (
    <>
      <Hero />
      <Usecases />
      <Foundation />
      <Discover />
      <FinalCTA />
    </>
  )
}

export default Home
