import React, { PureComponent } from 'react';
import {Map, List} from 'immutable'
import Winner from './Winner'

export default class Results extends PureComponent {
  getPair() {
    return this.props.pair || List.of('Ice Age', 'Trainspotting')
  }

  getTally(){
    return this.props.tally || Map({'Trainspotting': 2})
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
