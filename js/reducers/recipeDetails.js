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
                id: action.id,
                title: action.title,
                isPublic: action.isPublic,
                ingredients: action.ingredients,
                image: action.image,
                rating: action.rating
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