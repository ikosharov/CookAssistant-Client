import * as actionTypes from './types';

export function signInSucceeded(username, token, id) {
	return {
		type: actionTypes.SIGN_IN_SUCCEEDED,
		username: username,
		token: token,
		id: id
	}
}

export function signUpSucceeded(username, token, id) {
	return {
		type: actionTypes.SIGN_UP_SUCCEEDED,
		username: username,
		token: token,
		id: id
	}
}

export function signInFailed(username) {
	return {
		type: actionTypes.SIGN_IN_FAILED,
		username: username
	}
}

export function signUpFailed(username) {
	return {
		type: actionTypes.SIGN_UP_FAILED,
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

export function loadPersonalRecipesSuccess(recipes) {
	return {
		type: actionTypes.LOAD_PERSONAL_RECIPES_SUCCESS,
		recipes: recipes
	}
}

export function loadPublicRecipesSuccess(recipes) {
	return {
		type: actionTypes.LOAD_PUBLIC_RECIPES_SUCCESS,
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