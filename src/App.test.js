import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from './App'

import { storeCharacters } from './store/characters'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue()

library.add(fasHeart, farHeart)

localVue.component('font-awesome-icon', FontAwesomeIcon)


describe('App.vue', () => {
  const wrapper = shallowMount(App, {
    store: storeCharacters,
    localVue: localVue
  })

  it('mounts and has two children elements', () => {
    expect(wrapper.element.children.length).toBe(2)
  })

})