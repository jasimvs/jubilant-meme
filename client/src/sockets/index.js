import * as types from '../constants/ActionTypes'
import { addUser, messageReceived, populateUsersList, createChannel, viewChannel, joinChannel, populateChannelsList } from '../actions'

const setupSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8989')

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
    socket.send(JSON.stringify({
        type: types.CHANNELS_LIST
    }))
    socket.send(JSON.stringify({
        type: types.VIEW_CHANNEL,
        channel: 'general'
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
      console.log(data)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author, data.channel))
        break
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      case types.CHANNELS_LIST:
        dispatch(populateChannelsList(data.channels))
        break
      case types.VIEW_CHANNEL:
        dispatch(viewChannel(data.name, data.messages))
        break
      case types.CREATE_CHANNEL:
        dispatch(createChannel(data.author, data.name))
        break
      case types.JOIN_CHANNEL:
        dispatch(joinChannel((data.author, data.name)))
        break
      default:
        break
    }
  }

  socket.onclose = (event) => {

  }

  return socket
}

export default setupSocket