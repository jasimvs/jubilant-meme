import * as types from '../constants/ActionTypes'

const channels = (state = ['general'], action) => {
  switch (action.type) {
    case types.CREATE_CHANNEL:
      return state.concat([{ name: action.name, id: action.id }])
    case types.VIEW_CHANNEL:
      return action.channels
    default:
      return state
  }
}

export default channels