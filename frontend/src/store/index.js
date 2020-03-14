import { combineReducers } from 'redux';
import employeesReducer from './reducers/employees';
import userReducer from './reducers/user';
import extractReducer from './reducers/extract';

export default combineReducers({
  employeesReducer,
  userReducer,
  extractReducer
});