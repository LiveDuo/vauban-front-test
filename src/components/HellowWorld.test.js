import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld'

describe('Counter', () => {
  const wrapper = mount(HelloWorld, {
    propsData: {
      msg: 'world'
    }
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class=\"hello\"><h1>world</h1></div>')
  })

})