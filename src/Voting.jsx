import React, { PureComponent } from 'react'
import {connect} from 'react-redux'

import Winner from './Winner'
import Vote from './Vote'
import * as actionCreators from './action_creators'

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
    round: state.getIn(['vote','round']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  }
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting)
