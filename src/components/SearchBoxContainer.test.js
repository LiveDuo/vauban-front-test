import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchBoxContainer from './SearchBoxContainer'

import { storeCharacters } from '../store/characters'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { characters } from '../data/characters'

const localVue = createLocalVue()

library.add(fasHeart, farHeart)

localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('components/SearchBoxContainer.vue', () => {
  
  it('checks favourites count when there are non in the store', () => {
    const wrapper = shallowMount(SearchBoxContainer, {
      store: storeCharacters,
      localVue: localVue
    })
    expect(wrapper.find('[data-testid="txt-favourites-count"]').text()).toBe('No favourites')
  })

  it('checks favourites count when there is favourite in the store', () => {
    const store = storeCharacters
    store.commit('addToFavourites', characters[0])
    store.commit('addToFavourites', characters[2])
    store.commit('addToFavourites', characters[5])
    
    const wrapper = shallowMount(SearchBoxContainer, {
      store: store,
      localVue: localVue
    })
    expect(wrapper.find('[data-testid="txt-favourites-count"]').text()).toBe('3 favourites')
  })

})