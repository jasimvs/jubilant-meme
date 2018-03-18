import users from './users'
import * as types from '../constants/ActionTypes'

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
          name: 'Tony'
      })
    ).toEqual([
      {
          id: 0,
          name: 'Tony'
      }
    ])

    expect(
      users(
        [
          {
            id: 0,
            name: 'Mark',
          }
        ],
        {
          type: types.ADD_USER,
          name: 'Tony'
        }
      )
    ).toEqual([
      {
        id: 0,
        name: 'Mark',
      },
      {
        id: 1,
        name: 'Tony'
      }
    ])
  })
})