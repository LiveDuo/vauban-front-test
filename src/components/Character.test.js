import { shallowMount, createLocalVue } from '@vue/test-utils'
import Character from './Character'

import { storeCharacters } from '../store/characters'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { characters } from '../data/characters'

const localVue = createLocalVue()

library.add(fasHeart, farHeart)

localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('components/Character.vue', () => {
  const wrapper = shallowMount(Character, {
    propsData: {
      character: characters[0]
    },
    store: storeCharacters,
    localVue: localVue
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class=\"character\"><img alt=\"Vue logo\" src=\"../assets/logo.png\"> <div>Luke Skywalker</div> <a role=\"button\"><font-awesome-icon-stub icon=\"far,heart\"></font-awesome-icon-stub></a></div>')
  })

})