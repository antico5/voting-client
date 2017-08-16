import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'

import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

import reducer from './reducer'
import {setState} from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', (state) => {
  store.dispatch(setState(state))
})

const store = createStore(reducer,applyMiddleware(remoteActionMiddleware(socket)));

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
