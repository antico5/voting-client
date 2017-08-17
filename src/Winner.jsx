import React, { PureComponent } from 'react';

export default class Winner extends PureComponent {

  render() {
    return (
      <div className="winner">
        <b>Winner is</b>
        <h2>{this.props.winner}</h2>
      </div>
    )
  }
}
