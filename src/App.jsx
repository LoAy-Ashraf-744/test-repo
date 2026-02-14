import { useState } from 'react'
import './App.css'

function App() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="app">
      <div className="hero">
        <h1 className="title">Testing Animations</h1>
        <p className="subtitle">
          Experience stunning, premium-quality animations built with React change
        </p>
      </div>

      <div className="animation-container">
        {/* Pulse Animation */}
        <div 
          className="animation-card"
          onMouseEnter={() => setHoveredCard('pulse')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 className="card-title">Pulse Effect for now how ???</h3>
          <div className="pulse-container">
            <div className="pulse-circle"></div>
          </div>
        </div>

        {/* Spinner Animation */}
        <div 
          className="animation-card"
          onMouseEnter={() => setHoveredCard('spinner')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 className="card-title">Loading Spinner</h3>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        </div>

        {/* Bounce Animation */}
        <div 
          className="animation-card"
          onMouseEnter={() => setHoveredCard('bounce')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 className="card-title">Bounce Loader</h3>
          <div className="bounce-container">
            <div className="bounce-ball"></div>
            <div className="bounce-ball"></div>
            <div className="bounce-ball"></div>
          </div>
        </div>

        {/* Wave Animation */}
        <div 
          className="animation-card"
          onMouseEnter={() => setHoveredCard('wave')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 className="card-title">Wave Pattern</h3>
          <div className="wave-container">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="wave-bar"></div>
            ))}
          </div>
        </div>

        {/* Rotation Animation */}
        <div 
          className="animation-card"
          onMouseEnter={() => setHoveredCard('rotation')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 className="card-title">3D Rotation</h3>
          <div className="rotation-container">
            <div className="rotation-square"></div>
          </div>
        </div>

        {/* Glow Animation */}
        <div 
          className="animation-card"
          onMouseEnter={() => setHoveredCard('glow')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <h3 className="card-title">Glow Effect</h3>
          <div className="glow-container">
            <div className="glow-orb"></div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>
          Built with <span className="footer-highlight">React</span> + <span className="footer-highlight">Vite</span>
        </p>
        <p>Hover over cards to see interactive effects ✨</p>
      </footer>
    </div>
  )
}

export default App
