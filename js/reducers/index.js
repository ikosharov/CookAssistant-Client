import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import isFetching from './isFetching';
import * as recipes from './recipes';

const rootReducer = combineReducers({
  auth: auth,
  isFetching: isFetching,
  publicRecipes: recipes.publicRecipes,
  personalRecipes: recipes.personalRecipes,
  routing: routerReducer
});

export default rootReducer;