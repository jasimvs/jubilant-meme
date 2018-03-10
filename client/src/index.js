import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'
import handleNewMessage from './sagas'
import handleNewChannel from './sagas/newChannel'
import setupSocket from './sockets'

const username = prompt("Enter name");
console.log("usrname",username);

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, { socket, username })
sagaMiddleware.run(handleNewChannel, { socket, username })


ReactDOM.render(
  <Provider store={store}>
    <App username={username}/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()