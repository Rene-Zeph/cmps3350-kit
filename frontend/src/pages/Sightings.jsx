const sightings = [
  {
    id: 1,
    date: 'June 5, 2026',
    time: '7:15 PM',
    location: 'Near campus edge by open field',
    foxes: 2,
    status: 'Appears healthy',
    notes: 'Two foxes crossed near the walking path and moved toward the open field.',
  },
  {
    id: 2,
    date: 'June 8, 2026',
    time: '6:40 AM',
    location: 'Beside canal path',
    foxes: 1,
    status: 'Unknown condition',
    notes: 'Single fox observed from a distance. No clear signs of injury.',
  },
  {
    id: 3,
    date: 'June 11, 2026',
    time: '8:05 PM',
    location: 'Behind parking area near brush',
    foxes: 3,
    status: 'Needs review',
    notes: 'Group was visible briefly before moving behind brush.',
  },
]

function Sightings() {
  return (
    <section className="page">
      <p className="label">Sightings List</p>
      <h1>Submitted sightings</h1>
      <p>
        These are hardcoded example records showing how submitted sightings may
        appear once the database is added.
      </p>

      <div className="map-placeholder">
        Map or geographic location view placeholder
      </div>

      <div className="sighting-list">
        {sightings.map((sighting) => (
          <article className="sighting-card" key={sighting.id}>
            <div className="photo-placeholder">
              Photo Placeholder
            </div>

            <div>
              <h2>{sighting.location}</h2>
              <p className="meta">
                {sighting.date} at {sighting.time}
              </p>
              <p>
                <strong>Foxes observed:</strong> {sighting.foxes}
              </p>
              <p>
                <strong>Health status:</strong> {sighting.status}
              </p>
              <p>{sighting.notes}</p>
              <button className="small-btn">View Details Placeholder</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Sightings
