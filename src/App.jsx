import React, { Component } from 'react';
import {List} from 'immutable';

const pair = ['Trainspotting', '28 Days Later'];

export default class App extends Component {
  render() {
     return React.cloneElement(this.props.children, {pair: pair});
  }
}
