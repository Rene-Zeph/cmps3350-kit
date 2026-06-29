function Home({ setPage }) {
  return (
    <section className="page home-page">
      <div className="hero">
        <div>
          <p className="label">Kit Fox Tracker Prototype</p>
          <h1>Track San Joaquin kit fox sightings.</h1>
          <p>
            Smol Foxys helps community observers, students, and local wildlife
            researchers record and review San Joaquin kit fox sightings in one place.
          </p>

          <div className="button-row">
            <button className="primary-btn" onClick={() => setPage('submit')}>
              Submit a Sighting
            </button>
            <button className="secondary-btn" onClick={() => setPage('sightings')}>
              View Sightings
            </button>
          </div>
        </div>

        <div className="hero-card">
          <h2>Prototype Features</h2>
          <ul>
            <li>Submit a kit fox sighting report</li>
            <li>View hardcoded example sightings</li>
            <li>Review location and health status details</li>
            <li>Navigate between required milestone screens</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home
