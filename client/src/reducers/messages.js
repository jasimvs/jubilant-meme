import * as types from "../constants/ActionTypes";
import * as channelTypes from "../constants/ChannelTypes";
import {PUBLIC_CHANNEL} from "../constants/ChannelTypes";
import {PRIVATE_CHANNEL} from "../constants/ChannelTypes";

const messages = (state = {messages: [], channel: 'general', channelType: channelTypes.PUBLIC_CHANNEL}, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED:
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
      return { messages: state.messages, channel: action.name, channelType: PUBLIC_CHANNEL }
    case types.REQUEST_USER_CHAT:
      return { messages: state.messages, channel: action.name, channelType: PRIVATE_CHANNEL }
    default:
      return state
  }
}

export default messages