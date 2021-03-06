export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function vote(entry) {
  return {
    type: 'VOTE',
    meta: {remote: true},
    entry
  }
}

export function next(){
  return {
    type: 'NEXT',
    meta: {remote: true},
  }
}

export function setClientId(clientId){
  return {
    type: 'SET_CLIENT_ID',
    clientId
  }
}
