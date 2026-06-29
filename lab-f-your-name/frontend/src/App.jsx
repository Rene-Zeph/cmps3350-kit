import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import SubmitSighting from './pages/SubmitSighting'
import Sightings from './pages/Sightings'
import About from './pages/About'

function App() {
  const [page, setPage] = useState('home')

  const renderPage = () => {
    if (page === 'submit') {
      return <SubmitSighting setPage={setPage} />
    }

    if (page === 'sightings') {
      return <Sightings />
    }

    if (page === 'about') {
      return <About />
    }

    return <Home setPage={setPage} />
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo" onClick={() => setPage('home')}>
          🦊 Smol Foxys
        </div>

        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('submit')}>Submit</button>
          <button onClick={() => setPage('sightings')}>Sightings</button>
          <button onClick={() => setPage('about')}>About</button>
        </nav>
      </header>

      <main>{renderPage()}</main>

      <footer>
        <p>Milestone 2 Interactive Prototype | Team 1 S26</p>
      </footer>
    </div>
  )
}

export default App
