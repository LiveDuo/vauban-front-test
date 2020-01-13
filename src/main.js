import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { characters } from './data/characters'

library.add(fasHeart, farHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex)

const store = new Vuex.Store({
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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
