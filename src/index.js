import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

import reducer from './reducer'

const store = createStore(reducer)

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Harry Potter', 'Ice Age'],
      tally: {'Harry Potter': 2, 'Ice Age': 5}
    }
  }
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
