import * as types from '../constants/ActionTypes'

const channels = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_CHANNEL:
      return state.concat([{ name: action.name, id: (state.length) }])
    case types.VIEW_CHANNEL:
      return state
    case types.CHANNELS_LIST:
      return state.concat(action.channels)
    default:
      return state
  }
}

export default channels