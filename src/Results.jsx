import React, { PureComponent } from 'react';
import {Map} from 'immutable'
import {connect} from 'react-redux'

import Winner from './Winner'
import * as actionCreators from './action_creators'

export class Results extends PureComponent {
  getPair() {
    return this.props.pair || []
  }

  getTally(){
    return this.props.tally || Map()
  }

  getVotes(entry){
    return this.getTally().get(entry) || 0
  }

  render() {
    return (
      this.props.winner ?
        <Winner winner={this.props.winner}/> :
        <div className="results">
          <div className='tally'>
            { this.getPair().map( entry =>
              <div className='entry' key={entry}>
                <h1>{entry}</h1>
                <div className='voteCount'>{this.getVotes(entry)}</div>
              </div>
            )}
         </div>
         <div className='management'>
           <button ref='next' onClick={this.props.next} className='next'>Next</button>
         </div>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tally: state.getIn(['vote','tally']),
    pair: state.getIn(['vote','pair']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results)
