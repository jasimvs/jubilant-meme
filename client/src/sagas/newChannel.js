import { takeEvery } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'

const handleNewChannel = function* handleNewChannel(params) {
    yield takeEvery(types.CREATE_CHANNEL, (action) => {
        console.log('handleNewChannel' + action)
        action.author = params.username
        params.socket.send(JSON.stringify(action))
    })
}

export default handleNewChannel