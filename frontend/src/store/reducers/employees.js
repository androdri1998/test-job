import { employeesActions } from '../actions/employees';

const INITIAL_STATE = {
  employees: []
}

export default function employeesReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case employeesActions.GET_EMPLOYEES:
      return { ...state, employees: action.payload };
    default:
      return state;
  }
}