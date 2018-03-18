import * as types from "../constants/ActionTypes";
import * as channelTypes from "../constants/ChannelTypes";
import {VIEW_CHANNEL} from "../constants/ActionTypes";
import {PUBLIC_CHANNEL} from "../constants/ChannelTypes";
import {PRIVATE_CHANNEL} from "../constants/ChannelTypes";

const messages = (state = {messages: [], channel: 'general', channelType: channelTypes.PUBLIC_CHANNEL}, action) => {
  console.log('messages reducer', action, state)
  switch (action.type) {
    case 'ADD_MESSAGE':
    case 'MESSAGE_RECEIVED':
      if (action.channelType === channelTypes.PRIVATE_CHANNEL) {
        if (state.channel === action.channel)
          return {
            messages: state.messages.concat([
              {
                message: action.message,
                author: action.author,
                id: state.length,
                channel: action.channel
              }
            ]),
            channel: state.channel,
            channelType: state.channelType
          }
        else
          return state
      } else if (state.channel === action.channel)
        return {
          messages: state.messages.concat([
            {
              message: action.message,
              author: action.author,
              id: state.length,
              channel: action.channel
            }
          ]),
          channel: state.channel,
          channelType: state.channelType
        }

      else
        return state
    case types.VIEW_CHANNEL:
      console.log(VIEW_CHANNEL + action.channel)
      console.log( action.messages)
      action.messages.map(ms => console.log(ms.message))
      let id = 0
      return {
        messages: action.messages.map(msg => ({
          message: msg.message,
          author: msg.author,
          id: id++,
          channel: action.channel
        })),
        channel: state.channel,
        channelType: state.channelType
      }

    case types.VIEW_CHAT:
      console.log(VIEW_CHANNEL, action)
      let cid = 0
      return {
        messages: action.name.map(msg => ({
          message: msg.message,
          author: msg.author,
          id: cid++,
          channel: ''
        })),
        channel: state.channel,
        channelType: state.channelType
      }
    case types.REQUEST_CHANNEL_MESSAGES:
      console.log('x' + action.name)
      return { messages: state.messages, channel: action.name, channelType: PUBLIC_CHANNEL }
    case types.REQUEST_USER_CHAT:
      console.log('xy' + action.name)
      return { messages: state.messages, channel: action.name, channelType: PRIVATE_CHANNEL }
    default:
      return state
  }
}

export default messages