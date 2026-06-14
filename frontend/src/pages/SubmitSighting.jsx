import { useState } from 'react'

function SubmitSighting({ setPage }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setPage('sightings')
    }, 800)
  }

  return (
    <section className="page">
      <p className="label">Submit Sighting</p>
      <h1>Report a kit fox sighting</h1>
      <p>
        This form is part of the interactive prototype. It shows the fields users
        may complete later, but it does not save data yet.
      </p>

      {submitted && (
        <div className="success-box">
          Prototype action: sighting submitted. Redirecting to sightings...
        </div>
      )}

      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Date of sighting
          <input type="date" />
        </label>

        <label>
          Time of sighting
          <input type="time" />
        </label>

        <label className="wide">
          Location description
          <input
            type="text"
            placeholder="Example: Near campus edge by open field"
          />
        </label>

        <label>
          Latitude optional
          <input type="text" placeholder="35.3500" />
        </label>

        <label>
          Longitude optional
          <input type="text" placeholder="-119.1040" />
        </label>

        <label>
          Number of foxes observed
          <input type="number" min="1" placeholder="1" />
        </label>

        <label>
          Health status
          <select defaultValue="">
            <option value="" disabled>
              Select status
            </option>
            <option>Appears healthy</option>
            <option>Unknown condition</option>
            <option>Injured or sick</option>
            <option>Needs review</option>
          </select>
        </label>

        <label className="wide">
          Photo URL or image reference
          <input
            type="text"
            placeholder="Paste a photo URL or describe the photo"
          />
        </label>

        <label className="wide">
          Observation notes
          <textarea
            rows="5"
            placeholder="Describe what the fox was doing, direction of travel, landmarks, or safety concerns."
          ></textarea>
        </label>

        <div className="button-row wide">
          <button className="primary-btn" type="submit">
            Submit Sighting
          </button>
          <button
            className="secondary-btn"
            type="button"
            onClick={() => setPage('home')}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  )
}

export default SubmitSighting
