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
		loadRecipeDetails: (id) => {
			dispatch(actions.fetchStarted());
			api.loadRecipeDetails(id)
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
		navigateToCook: (id) => {
			dispatch(push(`/Recipes/${id}/Cook`));
		},
		navigateToRecipes: () => {
			dispatch(push(`/Recipes`));
		},
		deleteRecipe: (id) => {
			let promise = new Promise((resolve, reject) => {
				api.deleteRecipe(id)
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