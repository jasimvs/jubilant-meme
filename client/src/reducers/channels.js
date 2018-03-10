import * as types from '../constants/ActionTypes'

const channels = (state = [{name: 'general', id: 0}], action) => {
  switch (action.type) {
    case types.CREATE_CHANNEL:
        console.log('e' + action.channels)
      return state.concat([{ name: action.name, id: (state.length) }])
    case types.VIEW_CHANNEL:
        console.log('x' + action.channels)
      return state
    case types.CHANNELS_LIST:
      console.log('2' + action.channels)
      return action.channels
    default:
      return state
  }
}

export default channels