import ActionTypes from './actionTypes';
import {combineReducers} from 'redux';

const userState = {};

const userReducer = (st = userState, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      st = Object.assign({}, st, {...action.payload});
      return st;

    default:
      break;
  }
  return st;
};

export default combineReducers({userReducer});
