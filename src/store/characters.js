import Vuex from 'vuex'

import Vue from 'vue'

import { characters } from '../data/characters'

Vue.use(Vuex)

const storeCharacters = new Vuex.Store({
  state: {
    favourites: [],
    characters: characters,
    filteredCharacters: characters,
    showOnlyFavourites: false,
    searchTerm: ''
  },
  mutations: {
    addToFavourites (state, character) {
      if (!state.favourites.includes(character)) {
        state.favourites.push(character)
      }
    },
    removeToFavourites (state, character) {
      const newFavourites = state.favourites.filter(cCharacter => cCharacter !== character)
      state.favourites = newFavourites
    },
    updateFilteredCharacters (state) {
      const characters = state.showOnlyFavourites ? state.favourites : state.characters
      
      const filtered = characters.filter(character => {
        const name = character.name.toLowerCase()
        const term = state.searchTerm.toLowerCase()
        return name.includes(term)
      })
      state.filteredCharacters = filtered
    },
    updateShowOnlyFavourite (state, showOnlyFavourites) {
      state.showOnlyFavourites = showOnlyFavourites
    },
    updateSearchTerm (state, searchTerm) {
      state.searchTerm = searchTerm
    }
  }
})

export { storeCharacters }