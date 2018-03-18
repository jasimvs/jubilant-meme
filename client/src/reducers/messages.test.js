import messages from './messages'
import * as types from '../constants/ActionTypes'
import * as channelTypes from "../constants/ChannelTypes";

describe('Messages reducer', () => {
  it('should return the initial state', () => {
    expect(messages(undefined, {}))
      .toEqual({messages: [], channel: 'general', channelType: channelTypes.PUBLIC_CHANNEL})
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(
      messages(undefined, {
        type: types.ADD_MESSAGE,
        message: 'Hey',
        author: 'Me',
        channel: 'general'
      })
    ).toEqual({
      "channel": "general",
      "channelType": "PUBLIC_CHANNEL",
      "messages": [{"author": "Me", "channel": "general", "id": undefined, "message": "Hey"}]
    })

    expect(
      messages(
        [
          {
            "channel": "general",
            "channelType": "PUBLIC_CHANNEL",
            "messages": [{"author": "Me", "channel": "general", "id": undefined, "message": "Hey"}]
          }
        ],
        {
          type: types.ADD_MESSAGE,
          message: 'Hey again',
          author: 'Me again',
          channel: 'general'
        }
      )
    ).toEqual([{
      "channel": "general",
      "channelType": "PUBLIC_CHANNEL",
      "messages": [{"author": "Me", "channel": "general", "id": undefined, "message": "Hey"}]
    }])
  })
})