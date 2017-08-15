import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Voting from './Voting';
import Results from './Results';

import reducer from './reducer'

const store = createStore(reducer)

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Trainspotting', 'Ice Age'],
      tally: {'Trainspotting': 2}
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route exact path='/' component={Voting}/>
        <Route path='/results' component={Results}/>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
