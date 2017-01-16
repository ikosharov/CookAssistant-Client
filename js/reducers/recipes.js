import * as actionTypes from '../actions/types';

function recipe(state, action) {
	switch (action.type) {
		case actionTypes.ADD_RECIPE:
			return action.recipe;
		case actionTypes.UPDATE_RECIPE:
			return action.recipe;
		default:
			return state;
	}
}

export function currentUserRecipes(state = [], action) {
	switch (action.type) {
		case actionTypes.LOAD_CURRENT_USER_RECIPES_SUCCESS:
			return action.recipes;
		case actionTypes.ADD_RECIPE:
			return [...state, recipe(undefined, action)];
		case actionTypes.UPDATE_RECIPE:
			return state.map((t, index) => {
				if (t._id === action.recipe._id) {
					return recipe(t, action);
				} else {
					return t;
				}
			});
		case actionTypes.DELETE_RECIPE:
			return state.filter(t => t._id != action.recipe._id);
		default:
			return state;
	}
}

export function anyUserRecipes(state = [], action) {
	switch (action.type) {
		case actionTypes.LOAD_ANY_USER_RECIPES_SUCCESS:
			return action.recipes;
		default:
			return state;
	}
} 