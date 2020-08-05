/**
 * This file just manages all reducers of this application
 */
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default combineReducers({
  todo: todoReducer
  //new reducers like auth,etc. can be added here.
})