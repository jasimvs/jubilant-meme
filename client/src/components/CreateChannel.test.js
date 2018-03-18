import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import CreateChannel from './CreateChannel'

const setup = () => {
  const props = {
    users: [],
    username: '',
    dispatch: () => {}
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<CreateChannel {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('CreateChannel', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('section#new-channel').length).toBe(1)
  })
})