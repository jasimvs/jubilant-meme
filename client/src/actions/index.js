import * as types from '../constants/ActionTypes'

let nextMessageId = 0
let nextUserId = 1
let nextChannelId = 1

export const addMessage = (message, author, channel) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId + 1,
  message,
  author,
  channel
})

export const createChannel = (author, name) => ({
  type: types.CREATE_CHANNEL,
  id: nextChannelId + 1,
  name,
  author
})

export const joinChannel = (author, name) => ({
    type: types.JOIN_CHANNEL,
    name,
    author
})

export const viewChannel = (name) => ({
  type: types.VIEW_CHANNEL,
  name
})

export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId + 1,
  name
})

export const messageReceived = (message, author, channel) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId + 1,
  message,
  author,
  channel
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export const populateChannelsList = channels => ({
    type: types.CHANNELS_LIST,
    channels: channels
})
