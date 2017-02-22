import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import EditStep from '../components/EditStep';
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
		edit: (recipeId, step) => {
			let promise = new Promise((resolve, reject) => {
			api.editStep(recipeId, step)
				.then((step) => {
					// success
					resolve(step);
				}).catch(() => {
					// some error
					reject();
				});
			});
			return promise;
		},
		create: (recipeId, step) => {
			let promise = new Promise((resolve, reject) => {
			api.createStep(recipeId, step)
				.then((step) => {
					// success
					resolve(step);
				}).catch(() => {
					// some error
					reject();
				});
			});
			return promise; 
		},
		delete: (recipeId, stepId) => {
			let promise = new Promise((resolve, reject) => {
			api.deleteStep(recipeId, stepId)
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

export default connect(mapStateToProps, mapDispatchToProps)(EditStep);