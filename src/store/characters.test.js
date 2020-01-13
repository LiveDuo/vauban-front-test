import { storeCharacters } from '../store/characters'

import { characters } from '../data/characters'

describe('store/characters.vue', () => {
  
  it('has only favourites when only favourites option is checked', () => {
    const store = storeCharacters
    store.dispatch('addToFavourites', characters[1])
    store.dispatch('addToFavourites', characters[3])

    store.dispatch('updateShowOnlyFavourite', true)

    expect(store.getters.filteredCharacters.length).toBe(2)
  })

  it('has only characters with the search term', () => {
    const store = storeCharacters
    store.dispatch('updateSearchTerm', 'luke')

    expect(store.getters.filteredCharacters.length).toBe(0)
  })

})