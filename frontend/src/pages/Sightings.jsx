import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../api.js'

function Sightings() {
  const [sightings, setSightings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function loadSightings() {
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${API_BASE_URL}/sightings`)

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()
      setSightings(data)
    } catch (err) {
      console.error(err)
      setError('Could not load sightings from the API.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadSightings()
  }, [])

  if (loading) {
    return (
      <section className="page">
        <p className="label">Sightings List</p>
        <h1>Submitted sightings</h1>
        <p>Loading sightings from the database-backed API...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="page">
        <p className="label">Sightings List</p>
        <h1>Submitted sightings</h1>
        <p>{error}</p>
        <p>Check that the backend is running and that the public API URL is correct.</p>
        <button className="secondary-btn" onClick={loadSightings}>
          Try Again
        </button>
      </section>
    )
  }

  return (
    <section className="page">
      <p className="label">Sightings List</p>
      <h1>Submitted sightings</h1>

      <p>
        These records are loaded from the Express/MySQL API.
      </p>

      <div className="map-placeholder">
        Map or geographic location view placeholder
      </div>

      {sightings.length === 0 ? (
        <p>No sightings were found.</p>
      ) : (
        <div className="sighting-list">
          {sightings.map((sighting) => (
            <article className="sighting-card" key={sighting.id}>
              <div className="photo-placeholder">
                Photo Placeholder
              </div>

              <div>
                <h2>{sighting.location_name}</h2>

                <p className="meta">
                  {sighting.sighting_date}
                </p>

                <p>
                  <strong>Observer:</strong> {sighting.observer_name}
                </p>

                <p>
                  <strong>Health status:</strong> {sighting.health_status || 'Unknown'}
                </p>

                <p>{sighting.notes || 'No notes provided.'}</p>

                <button className="small-btn">
                  View Details Placeholder
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Sightings
