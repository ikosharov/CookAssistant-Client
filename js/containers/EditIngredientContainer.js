import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import EditIngredient from '../components/EditIngredient';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		recipeDetails: state.recipeDetails,
		isFetching: state.isSubFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		edit: (recipeId, ingredient) => {
			dispatch(actions.subFetchStarted());
			let promise = new Promise((resolve, reject) => {
				api.editIngredient(recipeId, ingredient)
					.then((ingredient) => {
						// success
						resolve(ingredient);
						dispatch(actions.subFetchFinished());
					}).catch(() => {
						// some error
						reject();
						dispatch(actions.subFetchFinished());
					});
			});
			return promise;
		},
		create: (recipeId, ingredient) => {
			dispatch(actions.subFetchStarted());
			let promise = new Promise((resolve, reject) => {
				api.createIngredient(recipeId, ingredient)
					.then((ingredient) => {
						// success
						resolve(ingredient);
						dispatch(actions.subFetchFinished());
					}).catch(() => {
						// some error
						reject();
						dispatch(actions.subFetchFinished());
					});
			});
			return promise;
		},
		delete: (recipeId, ingredientId) => {
			dispatch(actions.subFetchStarted());
			let promise = new Promise((resolve, reject) => {
				api.deleteIngredient(recipeId, ingredientId)
					.then(() => {
						// success
						resolve();
						dispatch(actions.subFetchFinished());
					}).catch(() => {
						// some error
						reject();
						dispatch(actions.subFetchFinished());
					});
			});
			return promise;
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditIngredient);