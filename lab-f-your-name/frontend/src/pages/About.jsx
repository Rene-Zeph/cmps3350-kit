function About() {
  return (
    <section className="page about-page">
      <p className="label">About</p>
      <h1>About Smol Foxys</h1>

      <div className="about-grid">
        <div className="content-card">
          <h2>Project Purpose</h2>
          <p>
            Smol Foxys is a student software engineering prototype for
            recording and reviewing San Joaquin kit fox sightings. The goal is
            to create a simple interface where users can submit sightings,
            review example reports, and understand where sightings may be
            located.
          </p>

          <h2>Target Users</h2>
          <p>
            The app is intended for community observers, students, and local
            wildlife researchers who need a simple way to track kit fox
            observations.
          </p>
        </div>

        <div className="content-card">
          <h2>Not Implemented Yet</h2>
          <ul>
            <li>Real database storage</li>
            <li>User accounts or authentication</li>
            <li>Full CRUD behavior</li>
            <li>Real map API integration</li>
            <li>Image upload or persistent photo storage</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
