import React, { PureComponent } from 'react';

export default class Vote extends PureComponent {
  isDisabled() {
    return !!this.props.hasVoted
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry
  }

  getPair() {
    return this.props.pair || []
  }

  render() {
    return (
      <div className="vote">
        <div className='round'>
          <h4>Round {this.props.round}</h4>
        </div>
        { this.getPair().map( entry =>
          <button key={entry}
            onClick={() => this.props.vote(entry)}
            disabled={this.isDisabled()}
            className={this.hasVotedFor(entry) ? 'voted' : ''}>
            <h1>{entry}</h1>
            { this.hasVotedFor(entry) ?  <div className='label'>Voted</div> : null }
          </button>
        )}
      </div>
    )
  }
}
