import { userActions } from '../actions/users';

const INITIAL_STATE = {
  user: null
}

export default function userReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case userActions.GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}