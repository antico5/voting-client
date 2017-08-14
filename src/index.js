import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './Voting';
import './index.css';

const pair = ['Trainspoting', 'Ice Age']

ReactDOM.render(
  <Voting pair={pair} votedEntry='Trainspoting' />,
  document.getElementById('root')
);
