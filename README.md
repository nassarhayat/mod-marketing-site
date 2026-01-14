# Mod Marketing Site

React + Vite + Tailwind marketing site with client-side routing.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Structure

```
src/
├── main.jsx           # Entry point with BrowserRouter
├── App.jsx            # Routes configuration
├── index.css          # Tailwind + existing styles
├── components/
│   ├── Layout.jsx     # Wrapper with Nav/Footer
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Discover.jsx
│   ├── Usecases.jsx
│   ├── TwoWays.jsx
│   └── FinalCTA.jsx
└── pages/
    └── Home.jsx
public/
├── mod-logo-dec.svg
├── forest-worker-video.mp4
└── forest-working-image.png
```

## Adding Pages

1. Create a new page in `src/pages/`:

```jsx
// src/pages/Pricing.jsx
function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <h1>Pricing</h1>
      </div>
    </section>
  )
}

export default Pricing
```

2. Add the route in `src/App.jsx`:

```jsx
import Pricing from './pages/Pricing'

// Inside Routes:
<Route path="pricing" element={<Pricing />} />
```

3. Link to it using React Router:

```jsx
import { Link } from 'react-router-dom'

<Link to="/pricing">Pricing</Link>
```

## Styling

- Existing styles are in `styles.css` (imported via `src/index.css`)
- Tailwind classes available for new components
- Add custom styles to `styles.css` or use Tailwind utilities
