import { mount } from '@vue/test-utils'
import CharacterModal from './CharacterModal'

import { characters } from '../../data/characters'

describe('components/Grid/CharacterModal.vue', () => {
  const wrapper = mount(CharacterModal, {
    propsData: {
      character: characters[0]
    }
  })

  it('renders the character extra details', () => {
    expect(wrapper.find('[data-testid="txt-character-url"]').findAll('a').length).toBe(1)
    expect(wrapper.find('[data-testid="txt-character-homeworld"]').findAll('a').length).toBe(1)
    expect(wrapper.find('[data-testid="txt-character-films"]').findAll('a').length).toBe(5)
    expect(wrapper.find('[data-testid="txt-character-species"]').findAll('a').length).toBe(1)
    expect(wrapper.find('[data-testid="txt-character-vehicles"]').findAll('a').length).toBe(2)
    expect(wrapper.find('[data-testid="txt-character-starships"]').findAll('a').length).toBe(2)
  })

})