import * as actionTypes from './types';

export function authenticateSucceeded(username, token, id) {
	return {
		type: actionTypes.AUTHENTICATE_SUCCEEDED,
		username: username,
		token: token,
		id: id
	}
}

export function authenticateFailed(username) {
	return {
		type: actionTypes.AUTHENTICATE_FAILED,
		username: username
	}
}

export function signOut() {
	return {
		type: actionTypes.SIGN_OUT
	}
}

export function fetchStarted() {
	return {
		type: actionTypes.FETCH_STARTED
	}
}

export function fetchFinished() {
	return {
		type: actionTypes.FETCH_FINISHED
	}
}

export function loadCurrentUserRecipesSuccess(recipes) {
	return {
		type: actionTypes.LOAD_CURRENT_USER_RECIPES_SUCCESS,
		recipes: recipes
	}
}

export function loadAnyUserRecipesSuccess(recipes) {
	return {
		type: actionTypes.LOAD_ANY_USER_RECIPES_SUCCESS,
		recipes: recipes
	}
}

export function loadRecipeDetailsSuccess(recipeDetails) {
	return {
		type: actionTypes.LOAD_RECIPE_DETAILS_SUCCESS,
		recipe: recipeDetails
	}
}

export function loadRecipeDetailsFailed() {
	return {
		type: actionTypes.LOAD_RECIPE_DETAILS_FAILED
	}
}