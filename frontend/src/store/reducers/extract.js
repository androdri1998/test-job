import { extractActions } from '../actions/extract';

const INITIAL_STATE = {
  transactions: []
}

export default function extractReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case extractActions.GET_TRANSACTIONS:
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
}