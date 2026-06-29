import { isValidSightingInput } from './sightingValidation.js'

test('accepts a sighting with all required fields', () => {
  const sighting = {
    observer_name: 'Demetrio',
    sighting_date: '2026-06-10',
    location_name: 'CSUB campus'
  }

  expect(isValidSightingInput(sighting)).toBe(true)
})

test('rejects a sighting missing the observer name', () => {
  const sighting = {
    observer_name: '',
    sighting_date: '2026-06-10',
    location_name: 'CSUB campus'
  }

  expect(isValidSightingInput(sighting)).toBe(false)
})

test('rejects a sighting with only spaces in a required field', () => {
  const sighting = {
    observer_name: 'Demetrio',
    sighting_date: '2026-06-10',
    location_name: '   '
  }

  expect(isValidSightingInput(sighting)).toBe(false)
})

test('rejects a missing sighting object as an edge case', () => {
  expect(isValidSightingInput(null)).toBe(false)
})
