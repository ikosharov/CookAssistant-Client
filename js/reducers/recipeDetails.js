import * as actionTypes from '../actions/types';

export default function recipeDetails(state, action) {
    if (state === undefined) {
        return {
            id: '',
            title: '',
            isPublic: false,
            ingredients: [],
            image: '',
            rating: 0
        }
    }

    switch (action.type) {
        case actionTypes.LOAD_RECIPE_DETAILS_SUCCESS:
            return Object.assign({}, state, {
                id: action.recipe._id,
                title: action.recipe.title,
                isPublic: action.recipe.isPublic,
                ingredients: action.recipe.ingredients,
                image: action.recipe.image,
                rating: action.recipe.rating
            });

        case actionTypes.LOAD_RECIPE_DETAILS_FAILED:
            return Object.assign({}, state, {
                id: '',
                title: '',
                isPublic: false,
                ingredients: [],
                image: '',
                rating: 0
            });
        default:
            return state;
    }
}