import { shallowMount, createLocalVue } from '@vue/test-utils'
import CharactersGrid from './CharactersGrid'

import { storeCharacters } from '../../store/characters'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { characters } from '../../data/characters'

const localVue = createLocalVue()

library.add(fasHeart, farHeart)

localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('components/Grid/CharactersGrid.vue', () => {
  
  it('mounts and has 10 characters that are loaded from store', () => {
    const wrapper = shallowMount(CharactersGrid, {
      store: storeCharacters,
      localVue: localVue
    })

    expect(wrapper.element.children.length).toBe(10)
  })

  it('has only favourites when only favourites option is checked', () => {
    const store = storeCharacters
    store.dispatch('addToFavourites', characters[0])
    store.dispatch('addToFavourites', characters[2])
    store.dispatch('addToFavourites', characters[5])

    store.dispatch('updateShowOnlyFavourite', true)
    
    const wrapper = shallowMount(CharactersGrid, {
      store: store,
      localVue: localVue
    })

    expect(wrapper.element.children.length).toBe(3)
  })

  it('shows only characters containing search term', () => {
    const store = storeCharacters
    store.dispatch('updateSearchTerm', 'luke')

    const wrapper = shallowMount(CharactersGrid, {
      store: store,
      localVue: localVue
    })

    expect(wrapper.element.children.length).toBe(1)
  })

})