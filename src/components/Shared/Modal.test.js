import { shallowMount } from '@vue/test-utils'
import Modal from './Modal'

describe('components/Shared/Modal.vue', () => {
  const wrapper = shallowMount(Modal, {
    slots: {
      header: '<div>header</div>',
      body: '<div>body</div>',
      footer: '<div>footer</div>',
    }
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toBe('<div class=\"modal-backdrop\"><div class=\"modal\"><header><div>header</div></header> <section><div>body</div></section> <footer><div>footer</div></footer></div></div>')
  })

})