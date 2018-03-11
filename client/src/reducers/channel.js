import * as types from '../constants/ActionTypes'

const channel = (state = 'general', action) => {
    switch (action.type) {
        case types.VIEW_CHANNEL:
            console.log('x' + action.name)
            return action.name
        default:
            return state
    }
}

export default channel