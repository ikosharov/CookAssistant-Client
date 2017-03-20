import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import isFetching from './isFetching';
import isSubFetching from './isSubFetching';
import * as recipes from './recipes';
import recipeDetails from './recipeDetails';

const rootReducer = combineReducers({
  auth: auth,
  isFetching: isFetching,
  isSubFetching: isSubFetching,
  currentUserRecipes: recipes.currentUserRecipes,
  anyUserRecipes: recipes.anyUserRecipes,
  recipeDetails: recipeDetails,
  routing: routerReducer
});

export default rootReducer;