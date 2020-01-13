import { storeCharacters } from '../store/characters'

import { characters } from '../data/characters'

describe('store/characters.vue', () => {
  
  it('has only favourites when only favourites option is checked', () => {
    const store = storeCharacters
    store.commit('addToFavourites', characters[1])
    store.commit('addToFavourites', characters[3])

    store.commit('updateShowOnlyFavourite', true)

    store.commit('updateFilteredCharacters')

    expect(store.state.filteredCharacters.length).toBe(2)
  })

  it('has only characters with the search term', () => {
    const store = storeCharacters
    store.commit('updateSearchTerm', 'luke')
    store.commit('updateFilteredCharacters')

    expect(store.state.filteredCharacters.length).toBe(1)
  })

})