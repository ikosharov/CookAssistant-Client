import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import isFetching from './isFetching';
import * as recipes from './recipes';
import recipeDetails from './recipeDetails';

const rootReducer = combineReducers({
  auth: auth,
  isFetching: isFetching,
  publicRecipes: recipes.publicRecipes,
  personalRecipes: recipes.personalRecipes,
  recipeDetails: recipeDetails,
  routing: routerReducer
});

export default rootReducer;