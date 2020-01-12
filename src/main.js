import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fasHeart, farHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    favourites: []
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
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
