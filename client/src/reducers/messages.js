import * as types from "../constants/ActionTypes";
import {VIEW_CHANNEL} from "../constants/ActionTypes";

const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'MESSAGE_RECEIVED':
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id,
          channel: action.channel
        }
      ])
    case types.VIEW_CHANNEL:
      console.log(VIEW_CHANNEL + action.name)
      console.log( action.messages)
      action.messages.map(ms => console.log(ms.message))
      let id = 0
      return action.messages.map(msg => ({
          message: msg.message,
          author: msg.author,
          id: id++,
          channel: action.name
      }))

      //messages.push({ message: data.message, author: data.author })
          //{users: Immutable.List(), messages: Immutable.List()}
//{
// message: action.message,
//     author: action.author,
//     id: action.id,
//     channel: action.channel
// }

        default:
      return state
  }
}

export default messages