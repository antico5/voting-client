import {Map, fromJS} from 'immutable';

function setState(state, newState){
  newState = fromJS(newState)
  if (newState.getIn(['vote','round']) !== state.getIn(['vote','round']))
    state = state.remove('hasVoted')
  return state.merge(newState)
}

function vote(state, entry){
  const currentPair = state.getIn(['vote','pair'])
  if(currentPair && currentPair.includes(entry))
    return state.set('hasVoted', entry)
  else
    return state
}

export default function(state = Map(), action) {
  switch(action.type){
  case 'SET_CLIENT_ID':
    return state.set('clientId', action.clientId)
  case 'SET_STATE':
    return setState(state, action.state)
  case 'VOTE':
    return vote(state, action.entry)
  default:
    console.log('Unknown action: ', action)
  }

  return state;
}
