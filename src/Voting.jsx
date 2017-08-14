import React, { PureComponent } from 'react'
import Winner from './Winner'
import Vote from './Vote'

class Voting extends PureComponent {
  hasWinner(){
    return !!this.props.winner
  }

  render() {
    return (
      this.hasWinner() ?  <Winner winner={this.props.winner}/> : <Vote {...this.props}/>
    )
  }
}

export default Voting;
