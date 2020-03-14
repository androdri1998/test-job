import { combineReducers } from 'redux';
import employeesReducer from './reducers/employees';
import userReducer from './reducers/user';

export default combineReducers({
  employeesReducer,
  userReducer
});