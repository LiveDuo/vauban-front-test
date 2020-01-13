import { characters } from './characters'

describe('data/characters.js', () => {
  it('character data are not null', () => {
    expect(characters).not.toBeNull()
  })
  it('there is at least one character', () => {
    expect(characters.length).toBeGreaterThan(0)
  })
})