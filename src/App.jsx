import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Persona from './pages/Persona'
import Usecase from './pages/Usecase'
import Pricing from './pages/Pricing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="persona/:slug" element={<Persona />} />
        <Route path="usecase/:slug" element={<Usecase />} />
      </Route>
    </Routes>
  )
}

export default App
