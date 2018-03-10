const WebSocket = require('ws')
const Option = require('scala-like-option')
const Immutable = require('immutable')

const wss = new WebSocket.Server({ port: 8989 })

// Map[user, {Option(socket), channels}]
let users = new Immutable.Map([])

// Map[channel, {users, messages}]
let channels = new Immutable.Map({'general': {users: Immutable.List(), messages: Immutable.List()},
    'chat-room': {users: Immutable.List(), messages: Immutable.List()}})

//Map[socket, user]
let sockets = new Immutable.Map([])

const ADD_MESSAGE = 'ADD_MESSAGE'
const ADD_USER = 'ADD_USER'
const USERS_LIST = 'USERS_LIST'
const CHANNELS_LIST = 'CHANNELS_LIST'
const CREATE_CHANNEL = 'CREATE_CHANNEL'
const JOIN_CHANNEL = 'JOIN_CHANNEL'
const VIEW_CHANNEL = 'VIEW_CHANNEL'

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data))
        }
    })
}

const unicast = (data, ws) => {
  if (ws.readyState === WebSocket.OPEN)
    ws.send(JSON.stringify(data))
}

const addUser = (data, ws) => {
  let existingChannels = users.get(data.name)
  let subscribedChannels = existingChannels === undefined ? Immutable.List : existingChannels
  let opt = Option.Option(ws)
  users = users.set(data.name, {socket: opt, channels: subscribedChannels})
  sockets = sockets.set(ws, data.name)
  // let index = users.length
    console.log(users)
  broadcast({
        type: USERS_LIST,
        users: Array.from(users.keys()).map(user => ({ name: user}))
    }, '')

  unicast({
    type: CHANNELS_LIST,
    channels: channels.filter(ch => ch.users.includes(data.name))
  }, ws)

}

const addMessage = (data, ws) => {
  console.log(data.channel)
  let currentUsersAndMessages = channels.get(data.channel)
  let usersAndMessages = currentUsersAndMessages === undefined ?
      { users: Immutable.List(), messages: Immutable.List() } : { users: currentUsersAndMessages.users,
          messages: currentUsersAndMessages.messages.push({ message: data.message, author: data.author }) }
  channels = channels.set(data.channel, usersAndMessages)
  broadcast(data, ws)
}

const sendUsers = (data, ws) => {
  unicast({type: USERS_LIST, users: Array.from(users.keys())}, ws)
}

const sendChannels = (data, ws) => {
  unicast({type: CHANNELS_LIST, channels: Array.from(channels.keys())}, ws)
}

const viewChannel = (data, ws) => {
  unicast({type: VIEW_CHANNEL, channel: channels.get(data.channel)}, ws)
}

const createChannel = (data, ws) => {
  let chUsers = data.users === undefined ? Immutable.List[data.author] : Immutable.List(data.users)
  channels = channels.set(data.channel, {users: chUsers, messages: []})
  viewChannel(data, ws)
  broadcast({
    type: CHANNELS_LIST,
    channels: Array.from(channels.keys())
  }, '')
}

const joinChannel = (data, ws) => {
  let channel = channels.get(data.channel)
  channels = channels.set(data.channel, {users: channel.users.push(data.author), messages: channel.messages})
  let user = users.get(data.author)
  let socketAndChannels = { socket: user.socket, channels: user.channels.push(data.channel)}
  users = users.set(data.author, socketAndChannels)
  viewChannel(data, ws)
}

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message)
      switch (data.type) {
      case ADD_USER:
        addUser(data, ws);
        break
      case ADD_MESSAGE:
        addMessage(data, ws);
        break
      case USERS_LIST:
        sendUsers(data, ws)
        break
      case CHANNELS_LIST:
        sendChannels(data, ws)
        break
      case CREATE_CHANNEL:
        createChannel(data, ws)
        break
      case JOIN_CHANNEL:
        joinChannel(data, ws)
        break
      case VIEW_CHANNEL:
        viewChannel(data, ws)
        break
      default:
        break
    }
  })

  function removeUser(ws) {
    let user = sockets.get(ws)
    sockets = sockets.remove(ws)
    let socketAndChannels = users.get(user)
    if (socketAndChannels !== undefined) {
      let channels = socketAndChannels.channels
      users = users.set(user, {socket: Option.None(), channels: channels})
    }
  }

  ws.on('close', () => {
      removeUser(ws)
  })


  ws.on('error',() => {
    removeUser(ws)
  })
})