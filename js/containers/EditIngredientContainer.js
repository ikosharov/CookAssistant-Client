import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import EditIngredient from '../components/EditIngredient';
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
		edit: (recipeId, ingredient) => {
			let promise = new Promise((resolve, reject) => {
			api.editIngredient(recipeId, ingredient)
				.then((ingredient) => {
					// success
					resolve(ingredient);
				}).catch(() => {
					// some error
					reject();
				});
			});
			return promise;
		},
		create: (recipeId, ingredient) => {
			let promise = new Promise((resolve, reject) => {
			api.createIngredient(recipeId, ingredient)
				.then((ingredient) => {
					// success
					resolve(ingredient);
				}).catch(() => {
					// some error
					reject();
				});
			});
			return promise; 
		},
		delete: (recipeId, ingredientId) => {
			let promise = new Promise((resolve, reject) => {
			api.deleteIngredient(recipeId, ingredientId)
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

export default connect(mapStateToProps, mapDispatchToProps)(EditIngredient);