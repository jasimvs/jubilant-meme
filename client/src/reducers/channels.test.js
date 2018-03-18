import channels from './channels'
import * as types from '../constants/ActionTypes'

describe('Channels reducer', () => {
  it('should return the initial state, empty', () => {
    expect(channels(undefined, {})).toEqual([{"id": 0, "name": "general"}])
  })

  it('should handle ADD_USER and store every user', () => {
    expect(
      channels([], {
        type: types.CREATE_CHANNEL,
        name: 'channel-1'
      })
    ).toEqual([
      {
        id: 0,
        name: 'channel-1'
      }
    ])

    expect(
      channels(
        [
          {
            id: 0,
            name: 'channel-2',
          }
        ],
        {
          type: types.CREATE_CHANNEL,
          name: 'channel-1'
        }
      )
    ).toEqual([
      {
        id: 0,
        name: 'channel-2',
      },
      {
        id: 1,
        name: 'channel-1'
      }
    ])
  })
})