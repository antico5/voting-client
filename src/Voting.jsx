import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import Winner from './Winner'
import Vote from './Vote'

export class Voting extends PureComponent {
  hasWinner(){
    return !!this.props.winner
  }

  render() {
    return (
      <div>
        { this.hasWinner() ?  <Winner winner={this.props.winner}/> : <Vote {...this.props}/> }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    pair: state.getIn(['vote','pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

export const VotingContainer = connect(mapStateToProps)(Voting)
