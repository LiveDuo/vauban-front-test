import { shallowMount } from '@vue/test-utils'
import Hyperlinks from './Hyperlinks'

describe('components/Shared/Hyperlinks.vue', () => {
  
  it('renders 2 hyperlinks', () => {
    const wrapper = shallowMount(Hyperlinks, {
      propsData: {
        urls: ['https://swapi.co/api/starships/22/', 'https://swapi.co/api/starships/13/']
      }
    })
    expect(wrapper.element.children.length).toBe(2)
  })

  it('renders no hyperlinks', () => {
    const wrapper = shallowMount(Hyperlinks, {
      propsData: {
        urls: []
      }
    })
    expect(wrapper.element.children.length).toBe(0)
  })

})