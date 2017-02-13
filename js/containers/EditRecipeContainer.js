import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import EditRecipe from '../components/EditRecipe';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		recipeDetails: state.recipeDetails,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadRecipeDetails: (recipeId) => {
			dispatch(actions.fetchStarted());
			api.loadRecipeDetails(recipeId)
				.then((recipeDetails) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.loadRecipeDetailsSuccess(recipeDetails));
				}).catch(() => {
					// some error
				});
		},
		editRecipeDetails: (recipeId, recipe) => {
			let promise = new Promise((resolve, reject) => {
			api.editRecipeDetails(recipeId, recipe)
				.then(() => {
					// success
					resolve();
				}).catch(() => {
					// some error
					reject();
				});
			});
			return promise;
		},
		cookRecipe: (recipe) => {
			dispatch(push(`/Recipes/${recipe.id}/Cook`));
		},
		backToRecipes: () => {
			dispatch(push(`/Recipes`));
		},
		deleteRecipe: (recipe) => {
			let promise = new Promise((resolve, reject) => {
			api.deleteRecipe(recipe.id)
				.then(() => {
					// success
					resolve();
				}).catch(() => {
					// some error
					reject();
				});
			});
			return promise;
		}

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);