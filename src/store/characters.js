import Vuex from 'vuex'

import Vue from 'vue'

import { characters } from '../data/characters'

Vue.use(Vuex)

const storeCharacters = new Vuex.Store({
  state: {
    favourites: [],
    characters: characters,
    showOnlyFavourites: false,
    searchTerm: '',
    showModal: false,
    selectedCharacter: null
  },
  getters: {
    filteredCharacters: state => {
      const characters = state.showOnlyFavourites ? state.favourites : state.characters
      
      const filtered = characters.filter(character => {
        const name = character.name.toLowerCase()
        const term = state.searchTerm.toLowerCase()
        return name.includes(term)
      })
      return filtered
    }
  },
  mutations: {
    updateFavourites (state, favourites) {
      state.favourites = favourites
    },
    updateShowOnlyFavourite (state, showOnlyFavourites) {
      state.showOnlyFavourites = showOnlyFavourites
    },
    updateSearchTerm (state, searchTerm) {
      state.searchTerm = searchTerm
    },
    updateShowModal (state, showModal) {
      state.showModal = showModal
    },
    updateSelectedCharacter (state, character) {
      state.selectedCharacter = character
    }
  },
  actions: {
    addToFavourites (context, character) {
      const newFavourites = context.state.favourites
      if (!newFavourites.includes(character)) {
        newFavourites.push(character)
        context.commit('updateFavourites', newFavourites)
      }
    },
    removeToFavourites (context, character) {
      const newFavourites = context.state.favourites.filter(cCharacter => cCharacter !== character)
      context.commit('updateFavourites', newFavourites)
    },
    updateShowOnlyFavourite (context, showOnlyFavourites) {
      context.commit('updateShowOnlyFavourite', showOnlyFavourites)
    },
    updateSearchTerm (context, searchTerm) {
      context.commit('updateSearchTerm', searchTerm)
    },
    updateShowModal (context, showModal) {
      context.commit('updateShowModal', showModal)
    },
    updateSelectedCharacter (context, character) {
      context.commit('updateSelectedCharacter', character)
    }
  }
})

export { storeCharacters }