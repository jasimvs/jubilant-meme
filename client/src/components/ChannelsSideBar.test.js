import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import ChannelsSidebar from './ChannelsSideBar'

const setup = () => {
  const props = {
    channels: [],
    // addUser: jest.fn(),
    dispatch: () => {}
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<ChannelsSidebar {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('ChannelsSidebar', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('aside').length).toBe(1)
  })
})