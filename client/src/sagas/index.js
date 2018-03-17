import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    console.log('handleNewMessage', params)
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

const handleNewChannel = function* handleNewChannel(params) {
  yield takeEvery(types.CREATE_CHANNEL, (action) => {
    console.log('handleNewChannel' + params)
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

const handleChannelChange = function* handleChannelChange(params) {
  yield takeEvery(types.REQUEST_CHANNEL_MESSAGES, (action) => {
    console.log('handleChannelChange', action, params)
    action.author = params.username
    params.socket.send(JSON.stringify({
      type: types.VIEW_CHANNEL,
      name: action.name,
      channel: action.name
    }))
  })
}


export { handleNewChannel, handleNewMessage, handleChannelChange }