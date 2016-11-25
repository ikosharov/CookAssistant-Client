import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import isFetching from './isFetching';

const rootReducer = combineReducers({
  auth: auth,
  isFetching: isFetching,
  routing: routerReducer
});

export default rootReducer;