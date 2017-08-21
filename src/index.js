import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'

import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

import reducer from './reducer'
import {setState, setClientId} from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'
import getClientId from './client_id'

import './index.css'

const socket = io(`${location.protocol}//${location.hostname}:8090`)
const store = createStore(reducer,applyMiddleware(remoteActionMiddleware(socket)));

store.dispatch(setClientId(getClientId()))

socket.on('state', (state) => {
  store.dispatch(setState(state))
})


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path='/' component={VotingContainer}/>
        <Route path='/results' component={ResultsContainer}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
