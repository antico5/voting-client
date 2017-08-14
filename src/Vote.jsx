import React, { PureComponent } from 'react';

export default class Vote extends PureComponent {
  isDisabled() {
    return !!this.props.votedEntry
  }

  hasVotedFor(entry) {
    return this.props.votedEntry === entry
  }

  getPair() {
    return this.props.pair || ['Ice Age', 'Trainspotting']
  }

  render() {
    return (
      <div className="vote">
        { this.getPair().map( entry =>
          <button key={entry} onClick={() => this.props.onVote(entry)} disabled={this.isDisabled()}>
            <h1>{entry}</h1>
            { this.hasVotedFor(entry) ?  <div className='label'>Voted</div> : null }
          </button>
        )}
      </div>
    )
  }
}
