import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

const handleNewChannel = function* handleNewChannel(params) {
  yield takeEvery(types.CREATE_CHANNEL, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify(action))
  })
}

const handleChannelChange = function* handleChannelChange(params) {
  yield takeEvery(types.REQUEST_CHANNEL_MESSAGES, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify({
      type: types.VIEW_CHANNEL,
      name: action.name,
      channel: action.name
    }))
  })
  yield takeEvery(types.REQUEST_USER_CHAT, (action) => {
    action.author = params.username
    params.socket.send(JSON.stringify({
      type: types.REQUEST_USER_CHAT,
      name: action.name,
      username: action.username
    }))
  })
}

export { handleNewChannel, handleNewMessage, handleChannelChange }