import { useState } from 'react'
import { API_BASE_URL } from '../api.js'
import { isValidSightingInput } from '../utils/sightingValidation.js'

function SubmitSighting({ setPage }) {
  const [observerName, setObserverName] = useState('')
  const [sightingDate, setSightingDate] = useState('')
  const [locationName, setLocationName] = useState('')
  const [healthStatus, setHealthStatus] = useState('Unknown')
  const [notes, setNotes] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    setMessage('')
    setError('')

    const newSighting = {
      observer_name: observerName,
      sighting_date: sightingDate,
      location_name: locationName,
      health_status: healthStatus,
      notes
    }

    if (!isValidSightingInput(newSighting)) {
      setError('Observer name, sighting date, and location name are required.')
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/sightings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSighting)
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const result = await response.json()

      setMessage(`Sighting created with ID ${result.id}. Check the Sightings page to see the new record.`)
      setObserverName('')
      setSightingDate('')
      setLocationName('')
      setHealthStatus('Unknown')
      setNotes('')
    } catch (err) {
      console.error(err)
      setError('Could not create the sighting. Check the API URL and backend.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="page">
      <p className="label">Submit Sighting</p>
      <h1>Report a kit fox sighting</h1>

      <p>
        This form sends a POST request to the Express/MySQL API.
      </p>

      {message && (
        <div className="success-box">
          {message}
        </div>
      )}

      {error && (
        <div className="success-box">
          {error}
        </div>
      )}

      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Observer name
          <input
            type="text"
            value={observerName}
            onChange={(event) => setObserverName(event.target.value)}
            placeholder="Example: Demetrio"
            required
          />
        </label>

        <label>
          Sighting date
          <input
            type="date"
            value={sightingDate}
            onChange={(event) => setSightingDate(event.target.value)}
            required
          />
        </label>

        <label className="wide">
          Location name
          <input
            type="text"
            value={locationName}
            onChange={(event) => setLocationName(event.target.value)}
            placeholder="Example: CSUB campus"
            required
          />
        </label>

        <label className="wide">
          Health status
          <select
            value={healthStatus}
            onChange={(event) => setHealthStatus(event.target.value)}
          >
            <option>Unknown</option>
            <option>Appears healthy</option>
            <option>Needs review</option>
            <option>Injured or sick</option>
          </select>
        </label>

        <label className="wide">
          Notes
          <textarea
            rows="5"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Describe what was observed."
          />
        </label>

        <div className="button-row wide">
          <button className="primary-btn" type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Sighting'}
          </button>

          <button
            className="secondary-btn"
            type="button"
            onClick={() => setPage && setPage('sightings')}
          >
            View Sightings
          </button>
        </div>
      </form>
    </section>
  )
}

export default SubmitSighting
