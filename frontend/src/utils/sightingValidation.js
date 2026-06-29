export function isValidSightingInput(sighting) {
  if (!sighting) {
    return false
  }

  const observerName = sighting.observer_name?.trim()
  const sightingDate = sighting.sighting_date?.trim()
  const locationName = sighting.location_name?.trim()

  return Boolean(observerName && sightingDate && locationName)
}
