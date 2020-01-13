import { shallowMount, createLocalVue } from '@vue/test-utils'
import Character from './Character'

import { storeCharacters } from '../../store/characters'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { characters } from '../../data/characters'

const localVue = createLocalVue()

library.add(fasHeart, farHeart)

localVue.component('font-awesome-icon', FontAwesomeIcon)

describe('components/Grid/Character.vue', () => {
  const wrapper = shallowMount(Character, {
    propsData: {
      character: characters[0]
    },
    store: storeCharacters,
    localVue: localVue
  })

  it('shows the correct character data', () => {
    expect(wrapper.find('[data-testid="txt-character-name"]').text()).toBe('Luke Skywalker')
    expect(wrapper.find('[data-testid="txt-character-gender-height-mass"]').text()).toBe('male 172cm 77kg')
    expect(wrapper.find('[data-testid="txt-character-birth-year"]').text()).toBe('Born in 19BBY')
    expect(wrapper.find('[data-testid="txt-character-hair-skin-eyes"]').text()).toBe('blond - fair - blue')
  })

})