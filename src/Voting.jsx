import React, { Component } from 'react';

class Voting extends Component {
  getPair() {
    return this.props.pair || []
  }

  isDisabled() {
    return !!this.props.votedEntry
  }

  hasVotedFor(entry) {
    return this.props.votedEntry == entry
  }

  hasWinner(){
    return !!this.props.winner
  }

  render() {
    return (
      <div className="voting">
        { this.hasWinner() ?
          <div ref='winner'>Winner is {this.props.winner}!</div> :
          this.getPair().map( entry =>
            <button key={entry} onClick={() => this.props.onVote(entry)} disabled={this.isDisabled()}>
              <h1>{entry}</h1>
              { this.hasVotedFor(entry) ?  <div className='label'>Voted</div> : null }
            </button>
          )
        }
      </div>
    )
  }
}

export default Voting;
