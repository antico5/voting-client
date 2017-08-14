import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom'

import Voting from './Voting';
import Results from './Results';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={Voting}/>
      <Route path='/results' component={Results}/>
    </div>
  </HashRouter>,
  document.getElementById('root')
);
